"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 800px (approx Hero height)
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50 py-3 px-6"
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-600 hidden md:block">
                            Legal Engineering für Arztpraxen
                        </span>

                        <div className="flex items-center gap-4 ml-auto md:ml-0">
                            <Button
                                size="sm"
                                className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium shadow-sm"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                15 Min. Gratis-Check
                                <ArrowRight className="ml-2 w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
