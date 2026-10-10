'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import { MapPin, RefreshCw, Plus, Minus, RotateCcw, Phone, ArrowUpRight, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export interface AreaItem {
    city: string;
    state: string;
    tag?: string;
    desc: string;
    lat: number;
    lng: number;
    zipCodes?: string;
}

interface ServiceAreaMapProps {
    areas: AreaItem[];
    filteredAreas: AreaItem[];
    selectedCity: string | null;
    onSelectCity: (city: string | null) => void;
    activeArea: AreaItem | null;
}

// Geographic center covering all 11 Central Texas service areas (Austin to Serenada / Liberty Hill)
const CENTRAL_TEXAS_CENTER = { lat: 30.4766, lng: -97.8335 };
const ALL_POINTS_ZOOM = 9.6;

// Custom dark map theme matching McCannical aesthetic
const DARK_MAP_STYLES: google.maps.MapTypeStyle[] = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#14171d' }],
    },
    {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8a94a6' }],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#14171d' }, { weight: 3 }],
    },
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#2a313d' }],
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#2a313d' }],
    },
    {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#2a313d' }],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#cbd5e1' }],
    },
    {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#1f242e' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#14171d' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#2b3443' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1c222b' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#94a3b8' }],
    },
    {
        featureType: 'transit',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#0c0f14' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#475569' }],
    },
];

export default function ServiceAreaMap({
    areas,
    filteredAreas,
    selectedCity,
    onSelectCity,
    activeArea,
}: ServiceAreaMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [loadError, setLoadError] = useState<string | null>(() => {
        if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
            return 'Google Maps API key is missing. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.';
        }
        return null;
    });
    const [loading, setLoading] = useState(true);

    const onSelectCityRef = useRef(onSelectCity);
    useEffect(() => {
        onSelectCityRef.current = onSelectCity;
    }, [onSelectCity]);

    // Fit map bounds so all area points are simultaneously in full view
    const fitAllPoints = useCallback((targetMap: google.maps.Map) => {
        if (!targetMap || areas.length === 0) return;

        const bounds = new google.maps.LatLngBounds();
        areas.forEach((area) => {
            bounds.extend({ lat: area.lat, lng: area.lng });
        });

        targetMap.fitBounds(bounds, {
            top: 70,
            bottom: 85,
            left: 70,
            right: 70,
        });
    }, [areas]);

    // Initialize Google Map
    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || '';

        if (!apiKey) {
            return;
        }

        setOptions({
            key: apiKey,
            v: 'weekly',
        });

        let isMounted = true;

        const initMap = async () => {
            try {
                if (!mapRef.current) return;

                const { Map: GoogleMap } = await importLibrary('maps');

                if (!isMounted || !mapRef.current) return;

                const mapInstance = new GoogleMap(mapRef.current, {
                    center: CENTRAL_TEXAS_CENTER,
                    zoom: ALL_POINTS_ZOOM,
                    mapId: mapId || 'd8e66495bdcca117',
                    gestureHandling: 'greedy',
                    disableDefaultUI: true,
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    backgroundColor: '#14171d',
                    styles: DARK_MAP_STYLES,
                });

                // Clear selection on background click
                mapInstance.addListener('click', () => {
                    onSelectCityRef.current(null);
                });

                // Fit bounds so all points show at once
                fitAllPoints(mapInstance);

                if (isMounted) {
                    setMap(mapInstance);
                    setLoading(false);
                }
            } catch (err: unknown) {
                console.error('Error initializing Google Maps:', err);
                if (isMounted) {
                    setLoadError('Failed to load Google Maps. Please check your API key and connection.');
                    setLoading(false);
                }
            }
        };

        initMap();

        return () => {
            isMounted = false;
        };
    }, [fitAllPoints]);

    // Create & update markers
    useEffect(() => {
        if (!map) return;

        // Clean up previous markers
        markersRef.current.forEach((marker) => {
            marker.map = null;
        });
        markersRef.current = [];

        let isMounted = true;

        const createMarkers = async () => {
            try {
                const { AdvancedMarkerElement } = await importLibrary('marker');

                if (!isMounted) return;

                const newMarkers: google.maps.marker.AdvancedMarkerElement[] = [];

                areas.forEach((area) => {
                    const isFiltered = filteredAreas.some((fa) => fa.city === area.city);
                    const isSelected = selectedCity === area.city;

                    const container = document.createElement('div');
                    container.className = 'service-area-marker-wrapper';
                    container.style.cursor = 'pointer';
                    container.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
                    container.style.opacity = isFiltered ? '1' : '0.25';
                    container.style.transform = isSelected ? 'scale(1.18)' : 'scale(1)';
                    container.style.zIndex = isSelected ? '9999' : isFiltered ? '10' : '1';

                    const basePillStyle = isSelected
                        ? 'background:#65C142; color:#ffffff; border:2px solid #ffffff; box-shadow: 0 0 24px rgba(101,193,66,0.9);'
                        : 'background:#13171e; color:#f1f5f9; border:1px solid rgba(101,193,66,0.45); box-shadow: 0 6px 16px rgba(0,0,0,0.5);';

                    const iconColor = isSelected ? '#ffffff' : '#65C142';
                    const tagHtml = area.tag
                        ? `<span style="font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; padding:2px 6px; border-radius:9999px; background:${isSelected ? 'rgba(0,0,0,0.25)' : 'rgba(101,193,66,0.2)'}; color:${isSelected ? '#ffffff' : '#65C142'}; margin-left:2px;">${area.tag}</span>`
                        : '';

                    container.innerHTML = `
                        <div style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; border-radius:9999px; font-family:inherit; font-size:12px; font-weight:700; transition:all 0.25s ease; ${basePillStyle}">
                            <div style="display:flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:${isSelected ? 'rgba(255,255,255,0.2)' : 'rgba(101,193,66,0.15)'};">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <span style="letter-spacing:-0.01em; white-space:nowrap;">${area.city}</span>
                            ${tagHtml}
                        </div>
                    `;

                    // Hover interactions
                    container.addEventListener('mouseenter', () => {
                        if (selectedCity !== area.city) {
                            container.style.transform = 'scale(1.08)';
                            container.style.zIndex = '50';
                        }
                    });

                    container.addEventListener('mouseleave', () => {
                        if (selectedCity !== area.city) {
                            container.style.transform = 'scale(1)';
                            container.style.zIndex = isFiltered ? '10' : '1';
                        }
                    });

                    // Click interaction
                    container.addEventListener('click', (e) => {
                        e.stopPropagation();
                        onSelectCityRef.current(area.city);
                    });

                    const marker = new AdvancedMarkerElement({
                        map,
                        position: { lat: area.lat, lng: area.lng },
                        content: container,
                        title: `${area.city}, ${area.state} - McCannical Service Area`,
                    });

                    newMarkers.push(marker);
                });

                markersRef.current = newMarkers;
            } catch (markerErr: unknown) {
                console.error('Error creating markers:', markerErr);
            }
        };

        createMarkers();

        return () => {
            isMounted = false;
        };
    }, [map, areas, filteredAreas, selectedCity]);

    // Custom controls
    const handleZoomIn = useCallback(() => {
        if (map) map.setZoom((map.getZoom() || ALL_POINTS_ZOOM) + 1);
    }, [map]);

    const handleZoomOut = useCallback(() => {
        if (map) map.setZoom((map.getZoom() || ALL_POINTS_ZOOM) - 1);
    }, [map]);

    const handleResetView = useCallback(() => {
        if (map) {
            onSelectCity(null);
            fitAllPoints(map);
        }
    }, [map, onSelectCity, fitAllPoints]);

    if (loadError) {
        return (
            <div className="flex h-[450px] sm:h-[520px] w-full flex-col items-center justify-center rounded-2xl bg-black/40 border border-white/10 p-6 text-center text-slate-400">
                <MapPin className="h-10 w-10 text-red-500 mb-3 animate-pulse" />
                <h3 className="text-white text-base font-semibold mb-2">Google Maps Service Area Unavailable</h3>
                <p className="text-xs max-w-sm leading-relaxed text-gray-400 mb-4">{loadError}</p>
                <div className="flex flex-wrap gap-2 justify-center max-w-md">
                    {areas.map((a) => (
                        <span key={a.city} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                            {a.city}, TX
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-[#14171d] shadow-2xl">
            {/* Loading state overlay */}
            {loading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#101317]/90 backdrop-blur-sm text-slate-400">
                    <RefreshCw className="h-8 w-8 text-[#65C142] animate-spin mb-3" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                        Loading Central Texas Map...
                    </span>
                </div>
            )}

            {/* Google Map Div */}
            <div ref={mapRef} className="w-full h-full" />

            {/* Top-Left Coverage Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101317]/85 border border-white/15 backdrop-blur-md shadow-lg pointer-events-none">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#65C142] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#65C142]"></span>
                </span>
                <span className="text-xs font-bold text-gray-200 tracking-wide">
                    {areas.length} Service Areas in Central Texas
                </span>
            </div>

            {/* Floating Custom Map Controls (Zoom In/Out, Reset) */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <div className="flex flex-col rounded-xl overflow-hidden bg-[#101317]/90 border border-white/15 shadow-xl backdrop-blur-md">
                    <button
                        type="button"
                        onClick={handleZoomIn}
                        title="Zoom In"
                        aria-label="Zoom in"
                        className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border-b border-white/10"
                    >
                        <Plus size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={handleZoomOut}
                        title="Zoom Out"
                        aria-label="Zoom out"
                        className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <Minus size={16} />
                    </button>
                </div>

                <button
                    type="button"
                    onClick={handleResetView}
                    title="Reset Central Texas View"
                    aria-label="Reset Central Texas View"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#101317]/90 border border-white/15 text-gray-300 hover:text-[#65C142] hover:bg-white/10 transition-all text-xs font-semibold shadow-xl backdrop-blur-md"
                >
                    <RotateCcw size={13} />
                    <span className="hidden sm:inline">Center Map</span>
                </button>
            </div>

            {/* Active Area Details Floating Card */}
            <AnimatePresence mode="wait">
                {activeArea && (
                    <motion.div
                        key={activeArea.city}
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 bg-[#161b22]/95 border border-[#65C142]/50 backdrop-blur-2xl p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="text-lg font-bold text-white tracking-tight">
                                        {activeArea.city}, {activeArea.state}
                                    </h4>
                                    {activeArea.tag && (
                                        <span className="px-2.5 py-0.5 rounded-full bg-[#65C142]/20 border border-[#65C142]/30 text-[#65C142] text-[10px] font-extrabold uppercase tracking-wider">
                                            {activeArea.tag}
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-[#65C142] font-semibold flex items-center gap-1.5 mt-0.5">
                                    <ShieldCheck size={13} /> Active Service Coverage
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => onSelectCity(null)}
                                aria-label="Close details"
                                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                            {activeArea.desc}
                        </p>

                        {activeArea.zipCodes && (
                            <p className="text-[11px] text-gray-400 mt-2.5 pt-2 border-t border-white/10">
                                <span className="text-gray-200 font-semibold">Zip Codes Served:</span> {activeArea.zipCodes}
                            </p>
                        )}

                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#65C142] hover:text-[#7fe058] transition-colors"
                            >
                                Book Inspection in {activeArea.city} <ArrowUpRight size={14} />
                            </Link>
                            <a
                                href="tel:5122383000"
                                className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                            >
                                <Phone size={12} /> (512) 238-3000
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
