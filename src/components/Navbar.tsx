"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: "ÜBER MICH", href: "#about" },
        { name: "VORGEHEN", href: "#methodik" }, // Previously Methodik
        { name: "ANGEBOT", href: "#angebot" },
        { name: "ARTIKEL", href: "#insights" }, // Previously Insights
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 theme-precision:top-0 theme-precision:px-0 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <nav className="flex items-center justify-between transition-theme bg-white/95 backdrop-blur-md py-4 px-6 md:px-12 w-full border-b border-gray-100 theme-precision:bg-card/95 theme-precision:border-border-subtle theme-legacy:rounded-full theme-legacy:mt-6 theme-legacy:mx-auto theme-legacy:max-w-[95%] theme-legacy:border">
                {/* Left: Logo Area */}
                <Link href="/" className="flex items-center gap-4 group shrink-0" onClick={closeMenu}>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/logo-master.svg"
                            alt="Daniel Kleiboldt Logo"
                            width={50}
                            height={50}
                            className="w-[50px] h-[50px] object-contain"
                        />
                    </div>
                    <div className="h-8 w-px bg-border-subtle"></div>
                    <div className="h-8 flex flex-col justify-between">
                        <span className="font-sans text-[14px] font-bold text-foreground leading-none">
                            Daniel Kleiboldt
                        </span>
                        <span className="font-sans text-[10px] font-bold text-foreground/50 uppercase tracking-[0.2em] leading-none">
                            LEGAL ENGINEERING
                        </span>
                    </div>
                </Link>

                {/* Desktop: Navigation Links & CTA */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold text-foreground/60 hover:text-primary transition-all uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Primary CTA Button */}
                    <a
                        href="https://calendly.com/daniel-kleiboldt/potenzialanalyse"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="primary" size="lg" className="font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1d4ed8] uppercase tracking-widest px-6">
                            → Erstgespräch buchen
                        </Button>
                    </a>
                </div>

                {/* Mobile: Burger Menu Button */}
                <button
                    className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[80px] bg-background z-40 flex flex-col p-6 animate-in slide-in-from-top-5 lg:hidden">
                    <div className="flex flex-col gap-8 mt-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto mb-8">
                        <a
                            href="https://calendly.com/daniel-kleiboldt/potenzialanalyse"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            <Button variant="primary" size="lg" className="w-full font-bold text-white bg-[#2563EB] hover:bg-[#1d4ed8] h-14 text-lg">
                                → Erstgespräch buchen
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
