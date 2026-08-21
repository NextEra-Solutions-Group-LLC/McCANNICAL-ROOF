'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
    X, Search, Star, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, 
    MapPin, Calendar, User, Quote, ArrowLeft, Maximize2, Map, List 
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import data from '@/app/data/data.json';
import MapComponent from './MapComponent';

export interface Project {
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
    review?: string;
    clientName?: string;
    clientImage?: string;
    ownerResponse?: string;
    ownerImage?: string;
}

interface NeighborhoodModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJ8d3d3d3d3d3d3d3d3'; // Replace with real place ID

export default function NeighborhoodModal({ isOpen, onClose }: NeighborhoodModalProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCity, setActiveCity] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [visibleCount, setVisibleCount] = useState(4); // Load 4 initially
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [mobileTab, setMobileTab] = useState<'list' | 'map'>('list'); // mobile layout tab
    const projectsContainerRef = useRef<HTMLDivElement>(null);

    // Reset list pagination when filter changes
    useEffect(() => {
        setVisibleCount(4);
        if (projectsContainerRef.current) {
            projectsContainerRef.current.scrollTop = 0;
        }
    }, [activeCity, searchQuery]);

    // Scroll lock background page when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const projects = data.projects as Project[];



    // Keyboard navigation in lightbox
    useEffect(() => {
        if (lightboxIndex === null || !selectedProject) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
                setLightboxIndex(lightboxIndex - 1);
            } else if (e.key === 'ArrowRight' && lightboxIndex < selectedProject.images.length - 1) {
                setLightboxIndex(lightboxIndex + 1);
            } else if (e.key === 'Escape') {
                setLightboxIndex(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, selectedProject]);

    // Filter projects based on city selection AND search query
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // City filter
            if (activeCity && project.city.toLowerCase() !== activeCity.toLowerCase()) {
                return false;
            }
            
            // Search text filter
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase();
                const matchesTitle = project.title.toLowerCase().includes(query);
                const matchesDesc = project.description.toLowerCase().includes(query);
                const matchesNeigh = project.neighborhood.toLowerCase().includes(query);
                const matchesCity = project.city.toLowerCase().includes(query);
                const matchesZip = project.zipCode.includes(query);
                const matchesAddress = project.locationName.toLowerCase().includes(query);
                
                return matchesTitle || matchesDesc || matchesNeigh || matchesCity || matchesZip || matchesAddress;
            }
            
            return true;
        });
    }, [activeCity, searchQuery, projects]);

    // Project Navigation in Detail Subpage
    const currentProjectIndex = useMemo(() => {
        if (!selectedProject) return -1;
        return filteredProjects.findIndex(p => p.id === selectedProject.id);
    }, [selectedProject, filteredProjects]);

    const handlePrevProject = () => {
        if (currentProjectIndex > 0) {
            setSelectedProject(filteredProjects[currentProjectIndex - 1]);
            setLightboxIndex(null); // Close lightbox if switching projects
        }
    };

    const handleNextProject = () => {
        if (currentProjectIndex < filteredProjects.length - 1) {
            setSelectedProject(filteredProjects[currentProjectIndex + 1]);
            setLightboxIndex(null); // Close lightbox if switching projects
        }
    };

    // Dynamically extract reviews from all projects in the data store
    const reviews = useMemo(() => {
        return projects
            .filter((p) => p.review && p.clientName)
            .map((p) => ({
                id: `rev-${p.id}`,
                name: p.clientName || '',
                clientImage: p.clientImage,
                rating: p.rating,
                text: p.review || '',
                date: p.date,
                city: p.city,
                projectId: p.id
            }));
    }, [projects]);

    // Handle search query change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        // If the query matches a city name, highlight it automatically
        const matchedCity = projects.find(p => p.city.toLowerCase() === query.toLowerCase());
        if (matchedCity) {
            setActiveCity(matchedCity.city);
        } else if (query === '') {
            setActiveCity(null);
        }
    };

    // Infinite scroll trigger: load more projects when user scrolls near the bottom of projects feed
    const handleProjectsScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const reachedBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 100;
        if (reachedBottom && visibleCount < filteredProjects.length) {
            // Simulate loading more projects
            setVisibleCount(prev => Math.min(prev + 4, filteredProjects.length));
        }
    };

    // Close modal helper that also resets state
    const handleClose = () => {
        onClose();
        setSearchQuery('');
        setActiveCity(null);
        setSelectedProject(null);
        setMobileTab('list');
        setLightboxIndex(null);
    };

    // Navigate to contact page (closes modal and redirects)
    const handleContactRedirect = () => {
        handleClose();
        window.location.href = '/contact';
    };

    // Render avatar color based on name
    const AVATAR_COLORS = ['#65C142', '#3d7fb8', '#d9622b', '#2fa89a', '#8a4fb8', '#c73e5a', '#5b6b7a', '#e8a33d'];
    const getAvatarColor = (name: string) => {
        const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
        return AVATAR_COLORS[idx];
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex justify-end overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop with subtle blur, showing the main website in the left 10% gap */}
                        <motion.div
                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                            onClick={handleClose}
                        />

                        {/* Modal container - slide-in right-to-left panel covering 90% width */}
                        <motion.div
                            className="relative w-full sm:w-[95vw] md:w-[90vw] h-full bg-[#101317] border-l border-white/10 shadow-[-15px_0_50px_rgba(0,0,0,0.85)] flex flex-col text-slate-200 z-10"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 240 }}
                        >
                            {/* ----------------- TOP HEADER ----------------- */}
                            <div className="px-6 py-5 border-b border-white/5 bg-[#14181f]/90 flex flex-col gap-4 relative z-10 shrink-0">
                                {/* Title and Close Button */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                                            Check out work in your neighbourhood
                                        </h2>
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className="text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-90"
                                        aria-label="Close Modal"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Controls Row: Search Input & Buttons */}
                                <div className="flex flex-col lg:flex-row gap-3">
                                    {/* Search input field */}
                                    <div className="relative flex-grow">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            placeholder="ADDRESS, NEIGHBOURHOOD OR ZIP CODE"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-400 outline-none focus:border-[#65C142] focus:ring-1 focus:ring-[#65C142]/30 transition-all font-medium uppercase tracking-wider"
                                        />
                                        {searchQuery && (
                                            <button 
                                                onClick={() => setSearchQuery('')}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-md"
                                            >
                                                CLEAR
                                            </button>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2.5 sm:gap-3 shrink-0">
                                        <a
                                            href={GOOGLE_REVIEW_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all hover:border-[#65C142]/40"
                                        >
                                            Google Review
                                            <ExternalLink className="h-4 w-4 shrink-0 text-[#65C142]" />
                                        </a>
                                        <button
                                            onClick={handleContactRedirect}
                                            className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-black bg-white hover:bg-slate-200 transition-all active:scale-95 shrink-0"
                                        >
                                            Contact
                                            <ArrowRight className="h-4 w-4 shrink-0" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Tab Swapper */}
                            <div className="flex md:hidden border-b border-white/5 bg-[#14181f] relative z-10 shrink-0">
                                <button
                                    onClick={() => setMobileTab('list')}
                                    className={`flex-1 py-3.5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                                        mobileTab === 'list' 
                                            ? 'text-[#65C142] border-[#65C142] bg-white/[0.02]' 
                                            : 'text-slate-400 border-transparent'
                                    }`}
                                >
                                    <List className="h-4 w-4" />
                                    Projects & Reviews
                                </button>
                                <button
                                    onClick={() => setMobileTab('map')}
                                    className={`flex-1 py-3.5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                                        mobileTab === 'map' 
                                            ? 'text-[#65C142] border-[#65C142] bg-white/[0.02]' 
                                            : 'text-slate-400 border-transparent'
                                    }`}
                                >
                                    <Map className="h-4 w-4" />
                                    Map View
                                </button>
                            </div>

                            {/* ----------------- CONTENT BODY ----------------- */}
                            <div className="flex-grow flex overflow-hidden relative">
                                
                                {/* LEFT COLUMN (Reviews + Projects Feed) */}
                                <div 
                                    className={`w-full md:w-[55%] lg:w-[60%] flex flex-col overflow-hidden border-r border-white/5 bg-[#101317] ${
                                        mobileTab === 'list' ? 'flex' : 'hidden md:flex'
                                    }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {!selectedProject ? (
                                            /* DEFAULT VIEW: REVIEWS + PROJECTS */
                                            <motion.div 
                                                className="flex-grow flex flex-col overflow-hidden"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {/* Left Column Scroll Container - Contains Reviews (if not filtered) and Projects */}
                                                <div 
                                                    ref={projectsContainerRef}
                                                    onScroll={handleProjectsScroll}
                                                    className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
                                                >
                                                    {/* 1. Featured Reviews (Horizontal Slide) - Hides when a city is filtered */}
                                                    {!activeCity && (
                                                        <div className="px-6 pt-5 pb-5 border-b border-white/5 bg-white/[0.01]">
                                                            <div className="flex items-center justify-between mb-3.5">
                                                                    <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                                                                        Featured Reviews
                                                                    </h3>
                                                                {/* Custom carousel navigation buttons */}
                                                                <div className="flex items-center gap-1.5">
                                                                    <button className="swiper-button-prev-custom text-slate-400 hover:text-white p-1 rounded bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-40">
                                                                        <ChevronLeft size={16} />
                                                                    </button>
                                                                    <button className="swiper-button-next-custom text-slate-400 hover:text-white p-1 rounded bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-40">
                                                                        <ChevronRight size={16} />
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            {/* Reviews Swiper */}
                                                            <Swiper
                                                                modules={[Autoplay, Navigation]}
                                                                spaceBetween={16}
                                                                slidesPerView={1.2}
                                                                loop={true}
                                                                autoplay={{
                                                                    delay: 4000,
                                                                    disableOnInteraction: false,
                                                                    pauseOnMouseEnter: true,
                                                                }}
                                                                navigation={{
                                                                    prevEl: '.swiper-button-prev-custom',
                                                                    nextEl: '.swiper-button-next-custom',
                                                                }}
                                                                breakpoints={{
                                                                    640: { slidesPerView: 2.2 },
                                                                    1024: { slidesPerView: 2.2 },
                                                                }}
                                                                className="w-full"
                                                            >
                                                                {reviews.map((rev) => {
                                                                    const initial = rev.name.trim().charAt(0).toUpperCase();
                                                                    const color = getAvatarColor(rev.name);
                                                                    return (
                                                                        <SwiperSlide key={rev.id}>
                                                                            <div 
                                                                                onClick={() => {
                                                                                    if (rev.projectId) {
                                                                                        const proj = projects.find(p => p.id === rev.projectId);
                                                                                        if (proj) setSelectedProject(proj);
                                                                                    }
                                                                                }}
                                                                                className="h-36 bg-[#161a20]/75 border border-white/5 hover:border-[#65C142]/40 rounded-2xl p-4 flex flex-col justify-between hover:scale-[1.01] active:scale-[0.99] transition-all select-none cursor-pointer group/review"
                                                                            >
                                                                                <div className="overflow-hidden">
                                                                                    <div className="flex items-center justify-between mb-1.5">
                                                                                        <div className="flex gap-0.5 text-amber-500">
                                                                                            {Array.from({ length: rev.rating }).map((_, i) => (
                                                                                                <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                                                                                            ))}
                                                                                        </div>
                                                                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider group-hover/review:text-[#65C142] transition-colors">{rev.city}</span>
                                                                                    </div>
                                                                                    <p className="text-xs text-slate-300 leading-normal line-clamp-3 italic">
                                                                                        &ldquo;{rev.text}&rdquo;
                                                                                    </p>
                                                                                </div>
                                                                                <div className="flex items-center gap-2 border-t border-white/5 pt-2 mt-2">
                                                                                    {rev.clientImage ? (
                                                                                        <img 
                                                                                            src={rev.clientImage} 
                                                                                            alt={rev.name} 
                                                                                            className="w-6 h-6 rounded-full object-cover border border-white/10"
                                                                                        />
                                                                                    ) : (
                                                                                        <div 
                                                                                            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                                                                                            style={{ backgroundColor: color }}
                                                                                        >
                                                                                            {initial}
                                                                                        </div>
                                                                                    )}
                                                                                    <span className="text-xs font-semibold text-white tracking-wide group-hover/review:text-white transition-colors">{rev.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    );
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    )}

                                                    {/* 2. Featured Projects Feed (Vertical Scroll) */}
                                                    <div className="px-6 py-5">
                                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                                                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                                                                    Featured Projects
                                                                </h3>
                                                            
                                                            {/* Filter Indicator */}
                                                            {activeCity && (
                                                                <div className="flex items-center gap-2 bg-[#65C142]/10 border border-[#65C142]/30 px-2.5 py-1 rounded-full text-xs font-semibold text-[#65C142] self-start sm:self-auto">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#65C142] animate-ping" />
                                                                    Showing work in: {activeCity} ({filteredProjects.length})
                                                                    <button 
                                                                        onClick={() => setActiveCity(null)}
                                                                        className="ml-1 hover:text-white bg-[#65C142]/20 hover:bg-[#65C142]/40 rounded-full p-0.5"
                                                                    >
                                                                        <X size={10} />
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {filteredProjects.length === 0 ? (
                                                            <div className="py-12 text-center text-slate-400">
                                                                <MapPin className="mx-auto h-8 w-8 text-slate-500 mb-3" />
                                                                <p className="text-sm font-medium">No projects found in this area.</p>
                                                                <button 
                                                                    onClick={() => { setActiveCity(null); setSearchQuery(''); }}
                                                                    className="text-xs font-semibold text-[#65C142] mt-2 underline"
                                                                >
                                                                    Reset Filter
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                {filteredProjects.slice(0, visibleCount).map((project) => (
                                                                    <div 
                                                                        key={project.id}
                                                                        className="bg-[#141820]/80 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-[1.01] hover:shadow-black/40 flex flex-col group cursor-pointer"
                                                                        onClick={() => setSelectedProject(project)}
                                                                    >
                                                                        {/* Project Card Image Slider */}
                                                                        <div className="relative h-44 w-full select-none" onClick={(e) => e.stopPropagation()}>
                                                                            <Swiper
                                                                                modules={[Navigation, Pagination]}
                                                                                spaceBetween={0}
                                                                                slidesPerView={1}
                                                                                navigation={true}
                                                                                pagination={{ clickable: true }}
                                                                                className="h-full w-full project-card-swiper"
                                                                            >
                                                                                {project.images.map((img, idx) => (
                                                                                    <SwiperSlide key={idx}>
                                                                                        <img 
                                                                                            src={img} 
                                                                                            alt={`${project.title} - image ${idx + 1}`}
                                                                                            className="h-full w-full object-cover"
                                                                                            draggable={false}
                                                                                        />
                                                                                    </SwiperSlide>
                                                                                ))}
                                                                            </Swiper>
                                                                            {/* Click helper overlay */}
                                                                            <div 
                                                                                className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" 
                                                                            />
                                                                            <button 
                                                                                onClick={() => setSelectedProject(project)}
                                                                                className="absolute right-3 bottom-3 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-xl transition-all border border-white/10 opacity-0 group-hover:opacity-100 backdrop-blur-md"
                                                                                title="View project details"
                                                                            >
                                                                                <Maximize2 size={14} />
                                                                            </button>
                                                                        </div>

                                                                        {/* Project Card Info */}
                                                                        <div className="p-4 flex-grow flex flex-col justify-between">
                                                                            <div>
                                                                                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1.5">
                                                                                    <span className="flex items-center gap-1">
                                                                                        <Calendar size={11} className="text-[#65C142]" />
                                                                                        {project.date}
                                                                                    </span>
                                                                                    <span className="flex items-center gap-0.5 text-amber-500">
                                                                                        <Star size={10} fill="currentColor" strokeWidth={0} />
                                                                                        <span className="text-white text-xs font-bold">{project.rating}</span>
                                                                                    </span>
                                                                                </div>
                                                                                
                                                                                <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#65C142] transition-colors mb-1.5 line-clamp-1">
                                                                                    {project.title}
                                                                                </h4>
                                                                                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-3">
                                                                                    {project.description}
                                                                                </p>
                                                                            </div>

                                                                            <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-auto">
                                                                                <span className="text-[10px] font-extrabold uppercase text-slate-300 tracking-wider flex items-center gap-1">
                                                                                    <MapPin size={11} className="text-[#65C142]" />
                                                                                    {project.neighborhood}, {project.city}
                                                                                </span>
                                                                                <span className="text-[10px] font-bold text-[#65C142] group-hover:underline flex items-center gap-0.5">
                                                                                    View Details
                                                                                    <ArrowRight size={10} />
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Load More Indicator */}
                                                        {visibleCount < filteredProjects.length && (
                                                            <div className="flex items-center justify-center py-6">
                                                                <div className="h-1 w-12 rounded bg-white/10 animate-pulse" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* EXPANDED DETAILED SUB-PAGE VIEW */
                                            <motion.div 
                                                className="flex-grow flex flex-col overflow-hidden bg-[#101317] relative z-20"
                                                initial={{ opacity: 0, x: 30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 30 }}
                                                transition={{ type: 'spring', damping: 25, stiffness: 240 }}
                                            >
                                                {/* Detail Header */}
                                                <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01] flex items-center justify-between shrink-0">
                                                    <div className="flex flex-col">
                                                        <h2 className="text-sm sm:text-base font-black text-white leading-tight">
                                                            {selectedProject.title}{selectedProject.neighborhood ? ` in ${selectedProject.neighborhood}` : ''}
                                                        </h2>
                                                        <div className="text-[10px] text-slate-400 font-semibold mt-1">
                                                            {selectedProject.date} &middot; {selectedProject.city}, TX
                                                        </div>
                                                    </div>

                                                    {/* Navigation arrows < > and Close X */}
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center gap-1">
                                                            <button 
                                                                disabled={currentProjectIndex <= 0}
                                                                onClick={handlePrevProject}
                                                                className="text-slate-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all active:scale-90 disabled:opacity-30 disabled:pointer-events-none"
                                                                title="Previous Project"
                                                            >
                                                                <ChevronLeft size={16} />
                                                            </button>
                                                            <button 
                                                                disabled={currentProjectIndex >= filteredProjects.length - 1}
                                                                onClick={handleNextProject}
                                                                className="text-slate-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all active:scale-90 disabled:opacity-30 disabled:pointer-events-none"
                                                                title="Next Project"
                                                            >
                                                                <ChevronRight size={16} />
                                                            </button>
                                                        </div>
                                                        
                                                        <span className="h-5 w-px bg-white/10" />
                                                        
                                                        <button 
                                                            onClick={() => setSelectedProject(null)}
                                                            className="text-slate-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all active:scale-90"
                                                            title="Back to Projects"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Detail Scrollable Body */}
                                                <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 space-y-6">
                                                    
                                                    {/* Image Grid Layout matching the design */}
                                                    <div className="grid grid-cols-3 gap-3 h-[180px] sm:h-[300px] md:h-[380px] relative shrink-0">
                                                        {/* Left Big Image */}
                                                        <div 
                                                            className="col-span-2 rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative h-full group cursor-pointer" 
                                                            onClick={() => setLightboxIndex(0)}
                                                        >
                                                            <img 
                                                                src={selectedProject.images[0]} 
                                                                alt={`${selectedProject.title} main`}
                                                                className="h-full w-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                                                            />
                                                            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                                                        </div>
                                                        
                                                        {/* Right Stacked Images */}
                                                        <div className="md:col-span-1 flex flex-col gap-3 h-full">
                                                            {selectedProject.images[1] && (
                                                                <div 
                                                                    className="flex-grow h-1/2 rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative group cursor-pointer" 
                                                                    onClick={() => setLightboxIndex(1)}
                                                                >
                                                                    <img 
                                                                        src={selectedProject.images[1]} 
                                                                        alt={`${selectedProject.title} second`}
                                                                        className="h-full w-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                                                                </div>
                                                            )}
                                                            {selectedProject.images[2] && (
                                                                <div 
                                                                    className="flex-grow h-1/2 rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative group cursor-pointer" 
                                                                    onClick={() => setLightboxIndex(2)}
                                                                >
                                                                    <img 
                                                                        src={selectedProject.images[2]} 
                                                                        alt={`${selectedProject.title} third`}
                                                                        className="h-full w-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                                                                    
                                                                    {/* Photos Count Badge */}
                                                                    <div className="absolute right-3 bottom-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-white shadow-lg pointer-events-none">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image">
                                                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                                                            <circle cx="9" cy="9" r="2"/>
                                                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                                                                        </svg>
                                                                        <span>{selectedProject.images.length} Photos</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Description Block */}
                                                    <div className="space-y-6">
                                                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                                                            {selectedProject.description}
                                                        </p>

                                                        {/* Client review quote (if exists) */}
                                                        {selectedProject.review && (
                                                            <div className="border-t border-white/5 pt-5">
                                                                <div className="bg-white/[0.02] border border-[#65C142]/10 rounded-2xl p-5 relative overflow-hidden">
                                                                    <Quote className="absolute right-4 top-4 text-[#65C142]/10 h-16 w-16 -z-10" strokeWidth={1} />
                                                                    
                                                                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#65C142] mb-2 flex items-center gap-1.5">
                                                                        Client Review Feedback
                                                                    </h4>
                                                                    <p className="text-sm text-slate-200 italic leading-relaxed mb-4">
                                                                        &ldquo;{selectedProject.review}&rdquo;
                                                                    </p>
                                                                    <div className="flex items-center gap-2.5">
                                                                        {selectedProject.clientImage ? (
                                                                            <img 
                                                                                src={selectedProject.clientImage} 
                                                                                alt={selectedProject.clientName || 'Client'} 
                                                                                className="w-7 h-7 rounded-full object-cover border border-white/10"
                                                                            />
                                                                        ) : (
                                                                            <div 
                                                                                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                                                                                style={{ backgroundColor: getAvatarColor(selectedProject.clientName || '') }}
                                                                            >
                                                                                {selectedProject.clientName ? selectedProject.clientName.trim().charAt(0).toUpperCase() : 'C'}
                                                                            </div>
                                                                        )}
                                                                        <div>
                                                                            <h5 className="text-xs font-bold text-white">{selectedProject.clientName || 'Verified Client'}</h5>
                                                                            <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide">Verified Customer</span>
                                                                        </div>
                                                                    </div>

                                                                    {selectedProject.ownerResponse && (
                                                                        <div className="mt-4 pl-4 border-l-2 border-[#65C142]/30 flex flex-col gap-2">
                                                                            <div className="flex items-center gap-2">
                                                                                {selectedProject.ownerImage ? (
                                                                                    <img 
                                                                                        src={selectedProject.ownerImage} 
                                                                                        alt="Will McCann" 
                                                                                        className="w-6 h-6 rounded-full object-cover border border-[#65C142]/20"
                                                                                    />
                                                                                ) : (
                                                                                    <div className="w-6 h-6 rounded-full bg-[#65C142]/20 flex items-center justify-center text-[10px] font-bold text-[#65C142]">
                                                                                        WM
                                                                                    </div>
                                                                                )}
                                                                                <div>
                                                                                    <h5 className="text-[11px] font-bold text-white flex items-center gap-1.5">
                                                                                        Will McCann
                                                                                        <span className="text-[8px] bg-[#65C142]/20 text-[#65C142] px-1.5 py-0.5 rounded font-extrabold uppercase tracking-wide">Owner</span>
                                                                                    </h5>
                                                                                </div>
                                                                            </div>
                                                                            <p className="text-xs text-slate-300 italic leading-relaxed bg-white/[0.01] border border-white/5 rounded-xl p-3">
                                                                                &ldquo;{selectedProject.ownerResponse}&rdquo;
                                                                            </p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* RIGHT COLUMN (Google Maps Integration) */}
                                <div 
                                    className={`w-full md:w-[45%] lg:w-[40%] h-full p-4 flex flex-col bg-[#0e1115] relative ${
                                        mobileTab === 'map' ? 'flex' : 'hidden md:flex'
                                    }`}
                                >
                                    <MapComponent 
                                        projects={projects}
                                        activeCity={activeCity}
                                        onSelectCity={setActiveCity}
                                        selectedProject={selectedProject}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom Lightbox Modal with Next/Prev Arrow Controls */}
            <AnimatePresence>
                {lightboxIndex !== null && selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxIndex(null)}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-10 transition-colors"
                            onClick={() => setLightboxIndex(null)}
                        >
                            <X size={20} />
                        </button>

                        {/* Left Arrow */}
                        {lightboxIndex > 0 && (
                            <button 
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-[#65C142] p-3.5 rounded-full z-10 transition-all hover:scale-105 active:scale-95 shadow-md border border-white/5"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(lightboxIndex - 1);
                                }}
                            >
                                <ChevronLeft size={22} />
                            </button>
                        )}

                        {/* Right Arrow */}
                        {lightboxIndex < selectedProject.images.length - 1 && (
                            <button 
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-[#65C142] p-3.5 rounded-full z-10 transition-all hover:scale-105 active:scale-95 shadow-md border border-white/5"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(lightboxIndex + 1);
                                }}
                            >
                                <ChevronRight size={22} />
                            </button>
                        )}

                        {/* Enlarged Image Container */}
                        <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                            <motion.img 
                                key={lightboxIndex} // key forces re-render with animation when index changes
                                src={selectedProject.images[lightboxIndex]} 
                                alt="Full screen photo"
                                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                            />
                            
                            {/* Photo Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-white shadow-lg pointer-events-none">
                                {lightboxIndex + 1} / {selectedProject.images.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom styled Swiper slide arrows and pagination */}
            <style>{`
                /* General custom navigation button styling */
                .project-card-swiper .swiper-button-next,
                .project-card-swiper .swiper-button-prev,
                .swiper-container-gallery-detail .swiper-button-next,
                .swiper-container-gallery-detail .swiper-button-prev {
                    color: #ffffff !important;
                    background-color: rgba(101, 193, 66, 0.2) !important;
                    backdrop-filter: blur(6px) !important;
                    -webkit-backdrop-filter: blur(6px) !important;
                    width: 24px !important;
                    height: 24px !important;
                    border-radius: 9999px !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                /* Hiding card arrows until hovered */
                .project-card-swiper .swiper-button-next,
                .project-card-swiper .swiper-button-prev {
                    opacity: 0;
                }
                
                .project-card-swiper:hover .swiper-button-next,
                .project-card-swiper:hover .swiper-button-prev {
                    opacity: 1;
                }

                /* Always visible and slightly larger arrows for the detailed sub-page view */
                .swiper-container-gallery-detail .swiper-button-next,
                .swiper-container-gallery-detail .swiper-button-prev {
                    opacity: 1;
                    width: 30px !important;
                    height: 30px !important;
                }

                /* Arrow icon size tweaks */
                .project-card-swiper .swiper-button-next::after,
                .project-card-swiper .swiper-button-prev::after {
                    font-size: 7px !important;
                    font-weight: 900 !important;
                }
                
                .swiper-container-gallery-detail .swiper-button-next::after,
                .swiper-container-gallery-detail .swiper-button-prev::after {
                    font-size: 9px !important;
                    font-weight: 900 !important;
                }

                /* Hover state for navigation buttons */
                .project-card-swiper .swiper-button-next:hover,
                .project-card-swiper .swiper-button-prev:hover,
                .swiper-container-gallery-detail .swiper-button-next:hover,
                .swiper-container-gallery-detail .swiper-button-prev:hover {
                    background-color: rgba(101, 193, 66, 0.7) !important;
                    box-shadow: 0 0 15px rgba(101, 193, 66, 0.45);
                    transform: scale(1.06);
                }

                /* Swiper pagination bullet colors */
                .project-card-swiper .swiper-pagination-bullet-active,
                .swiper-container-gallery-detail .swiper-pagination-bullet-active {
                    background: #65C142 !important;
                }
            `}</style>
        </>
    );
}
