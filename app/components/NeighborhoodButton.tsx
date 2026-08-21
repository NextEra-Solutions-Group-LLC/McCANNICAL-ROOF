'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import NeighborhoodModal from './NeighborhoodModal';

export default function NeighborhoodButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Trigger Button on Right Middle of Viewport */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                whileHover={{ x: -4, backgroundColor: '#58b236' }}
                whileTap={{ scale: 0.97 }}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-45 flex items-center justify-center gap-2 bg-[#65C142] text-[#101317] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.22em] py-5 px-3.5 rounded-l-2xl shadow-[0_0_30px_rgba(101,193,66,0.4)] border-l border-y border-white/10 select-none cursor-pointer origin-right transition-colors"
                style={{ 
                    writingMode: 'vertical-rl',
                    transform: 'translateY(-50%)'
                }}
            >
                <div className="flex flex-col items-center gap-1.5 rotate-90 sm:rotate-0 my-1">
                    <MapPin size={14} className="text-[#101317] animate-bounce" />
                </div>
                <span>Our Neighborhood Work & Reviews</span>
            </motion.button>

            {/* Neighborhood Projects Modal */}
            <NeighborhoodModal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
