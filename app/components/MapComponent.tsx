'use client';

import { useEffect, useRef, useState } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import { MapPin, RefreshCw } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    locationName: string;
    neighborhood: string;
    city: string;
    zipCode: string;
    lat: number;
    lng: number;
    date: string;
    rating: number;
    description: string;
    images: string[];
    review: string;
    clientName: string;
}

interface MapComponentProps {
    projects: Project[];
    activeCity: string | null;
    onSelectCity: (city: string | null) => void;
    selectedProject: Project | null;
}

// Center of Austin / Central Texas
const DEFAULT_CENTER = { lat: 30.3400, lng: -97.7500 };
const DEFAULT_ZOOM = 10;
const ACTIVE_ZOOM = 12;

export default function MapComponent({
    projects,
    activeCity,
    onSelectCity,
    selectedProject,
}: MapComponentProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [markers, setMarkers] = useState<google.maps.marker.AdvancedMarkerElement[]>([]);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const activeCityRef = useRef(activeCity);
    activeCityRef.current = activeCity;

    const onSelectCityRef = useRef(onSelectCity);
    onSelectCityRef.current = onSelectCity;

    // Group projects by city for the map counts
    const cityGroups = projects.reduce((acc, proj) => {
        const city = proj.city;
        if (!acc[city]) {
            acc[city] = {
                city,
                lat: proj.lat,
                lng: proj.lng,
                count: 0,
            };
        }
        acc[city].count += 1;
        // Make sure we average or choose one position for the group pin
        return acc;
    }, {} as Record<string, { city: string; lat: number; lng: number; count: number }>);

    // Initialize Google Map
    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || '';

        if (!apiKey) {
            setLoadError('Google Maps API key is missing. Please add it to your environment variables.');
            setLoading(false);
            return;
        }

        setOptions({
            key: apiKey,
            v: 'weekly',
        });

        const initMap = async () => {
            try {
                if (!mapRef.current) return;

                const { Map: GoogleMap } = await importLibrary('maps');
                
                const mapInstance = new GoogleMap(mapRef.current, {
                    center: DEFAULT_CENTER,
                    zoom: DEFAULT_ZOOM,
                    mapId: mapId || 'd8e66495bdcca117',
                    gestureHandling: 'greedy',
                    scrollwheel: true,
                    disableDefaultUI: true,
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [{ "color": "#212121" }]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [{ "visibility": "off" }]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [{ "color": "#757575" }]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [{ "color": "#212121" }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#757575" }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#181a1f" }]
                        }
                    ]
                });

                // Listen for clicks on the map background to clear city selection
                mapInstance.addListener('click', () => {
                    onSelectCityRef.current(null);
                });

                setMap(mapInstance);
                setLoading(false);
            } catch (err: any) {
                console.error('Error loading Google Maps:', err);
                setLoadError('Failed to load Google Maps. Please check your network connection.');
                setLoading(false);
            }
        };

        initMap();

        return () => {
            // Clean up listeners if any
        };
    }, []);

    // Create markers when map or projects change
    useEffect(() => {
        if (!map) return;

        // Clear existing markers
        markers.forEach(marker => {
            marker.map = null;
        });

        const newMarkers: google.maps.marker.AdvancedMarkerElement[] = [];

        const createMarkers = async () => {
            const { AdvancedMarkerElement } = await importLibrary('marker');

            Object.values(cityGroups).forEach((group) => {
                // Create custom HTML element for marker
                const container = document.createElement('div');
                container.className = 'custom-map-marker-container';
                
                // Determine styling based on whether it is the active city
                const isActive = activeCityRef.current === group.city;
                const activeClasses = isActive 
                    ? 'bg-[#65C142] text-white scale-110 ring-4 ring-[#65C142]/30 shadow-[0_0_15px_rgba(101,193,66,0.6)]' 
                    : 'bg-[#1e232b] text-white hover:bg-[#65C142] hover:scale-105 border border-white/10';

                container.innerHTML = `
                    <div class="flex items-center gap-1.5 px-3 py-2 rounded-full font-sans font-bold text-xs shadow-lg transition-all duration-300 cursor-pointer ${activeClasses}">
                        <!-- House Icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        <span class="text-xs">${group.count}</span>
                    </div>
                `;

                // Click event listener
                container.addEventListener('click', (e) => {
                    e.stopPropagation(); // prevent map click triggering
                    onSelectCityRef.current(group.city);
                });

                const marker = new AdvancedMarkerElement({
                    map,
                    position: { lat: group.lat, lng: group.lng },
                    content: container,
                    title: `${group.city}: ${group.count} projects completed`,
                });

                newMarkers.push(marker);
            });

            setMarkers(newMarkers);
        };

        createMarkers();
    }, [map, projects, activeCity]); // Re-run when activeCity changes to re-style active marker

    // Pan/Zoom map based on activeCity or selectedProject
    useEffect(() => {
        if (!map) return;

        if (selectedProject) {
            // Zoom in on the selected project coordinate
            map.panTo({ lat: selectedProject.lat, lng: selectedProject.lng });
            map.setZoom(13);
        } else if (activeCity) {
            // Find coordinates of active city
            const cityInfo = cityGroups[activeCity];
            if (cityInfo) {
                map.panTo({ lat: cityInfo.lat, lng: cityInfo.lng });
                map.setZoom(ACTIVE_ZOOM);
            }
        } else {
            // Reset to default center and zoom
            map.panTo(DEFAULT_CENTER);
            map.setZoom(DEFAULT_ZOOM);
        }
    }, [map, activeCity, selectedProject]);

    if (loadError) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white/[0.02] border border-white/10 p-6 text-center text-slate-400">
                <MapPin className="h-10 w-10 text-red-500 mb-3" />
                <h3 className="text-white font-semibold mb-2">Map Loading Failed</h3>
                <p className="text-xs max-w-xs">{loadError}</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#161a20]">
            {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#101317]/90 backdrop-blur-sm text-slate-400">
                    <RefreshCw className="h-8 w-8 text-[#65C142] animate-spin mb-3" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">Loading Map...</span>
                </div>
            )}
            <div ref={mapRef} className="w-full h-full" />
        </div>
    );
}
