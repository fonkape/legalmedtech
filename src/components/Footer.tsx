"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Send, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function Footer() {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Lock body scroll when modal is open
    if (typeof window !== "undefined") {
        if (showImpressum || showPrivacy) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <footer className="py-[var(--section-padding)] pt-32 transition-theme theme-legacy:bg-white theme-precision:section-onyx border-t border-border-subtle">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="font-mono text-2xl font-bold text-primary tracking-tighter mb-8">
                            {"{ dk }"}
                        </div>
                        <p className="text-sm opacity-60 leading-relaxed mb-8">
                            Vom juristischen Bauplan bis zur technischen Umsetzung. Ich unterstütze MVZs und Kliniken dabei, Healthcare-KI rechtssicher zu implementieren – ohne Haftungsrisiko durch technische Kapselung.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-subtle rounded-custom flex items-center justify-center opacity-60 hover:opacity-100 hover:border-primary hover:text-primary transition-all cursor-pointer">
                                <span className="font-bold text-sm">in</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">
                            Angebot
                        </h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><Link href="#angebot" className="hover:text-primary transition-colors">KI-Compliance-Audit</Link></li>
                            <li><Link href="#angebot" className="hover:text-primary transition-colors">Sovereign AI Roadmap</Link></li>
                            <li><Link href="#angebot" className="hover:text-primary transition-colors">Technical Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">Rechtliches</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li>
                                <button onClick={() => setShowImpressum(true)} className="hover:text-primary transition-colors text-left uppercase tracking-wider">
                                    Impressum
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setShowPrivacy(true)} className="hover:text-primary transition-colors text-left uppercase tracking-wider">
                                    Datenschutz
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">Vernetzung</h4>
                        <p className="text-sm opacity-60 mb-8 leading-relaxed">
                            Keine Lust auf Formulare? Vernetzen Sie sich direkt auf LinkedIn oder sichern Sie sich sofort einen Slot.
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="ghost" className="w-full justify-start border border-border-subtle hover:border-primary">
                                    <span className="font-bold text-xs mr-3">in</span> LinkedIn
                                </Button>
                            </a>
                            <a href="https://calendly.com/daniel-kleiboldt/potenzialanalyse" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="w-full justify-start">
                                    <Send className="w-4 h-4 mr-3" /> Quickcheck
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border-subtle pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-sm opacity-40 flex items-center gap-2">
                            © 2025 Daniel Kleiboldt. Made in Germany.
                        </p>
                        <div className="flex gap-8">
                            <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">DSGVO Konform</span>
                            <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">SSL Secured</span>
                        </div>
                    </div>

                    {/* THE DESIGN SWITCH */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="text-[10px] uppercase tracking-[0.3em] opacity-20 hover:opacity-100 transition-opacity font-bold px-4 py-2 border border-border-subtle hover:border-primary"
                            title="Toggle Design System"
                        >
                            {theme === 'precision' ? 'Legacy Mode' : 'Precision Framework'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Impressum Modal */}
            <AnimatePresence>
                {showImpressum && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
                        onClick={() => setShowImpressum(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                            className="bg-card w-full max-w-2xl max-h-[85vh] rounded-custom shadow-2xl border border-border-subtle flex flex-col relative"
                        >
                            <div className="flex-none p-4 flex justify-end border-b border-border-subtle z-10">
                                <Button variant="ghost" size="sm" onClick={() => setShowImpressum(false)} className="rounded-custom hover:opacity-70">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-8">
                                <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Impressum</h2>
                                <div className="prose prose-gray theme-precision:prose-invert max-w-none text-foreground/70 leading-relaxed text-sm">
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Angaben gemäß § 5 TMG</h3>
                                    <p>Daniel Kleiboldt<br />Büro für Legal Engineering<br />Hülsbrockstraße 115<br />33334 Gütersloh</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Kontakt</h3>
                                    <p>Telefon: 05241/7082012<br />E-Mail: daniel.kleiboldt@gmail.com</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Redaktionell verantwortlich</h3>
                                    <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />Daniel Kleiboldt<br />Hülsbrockstraße 115<br />33334 Gütersloh</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">EU-Streitschlichtung</h3>
                                    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                                    <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Privacy Modal */}
            <AnimatePresence>
                {showPrivacy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
                        onClick={() => setShowPrivacy(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                            className="bg-card w-full max-w-2xl max-h-[85vh] rounded-custom shadow-2xl border border-border-subtle flex flex-col relative"
                        >
                            <div className="flex-none p-4 flex justify-end border-b border-border-subtle z-10">
                                <Button variant="ghost" size="sm" onClick={() => setShowPrivacy(false)} className="rounded-custom hover:opacity-70">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-8">
                                <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Datenschutz</h2>
                                <div className="prose prose-gray theme-precision:prose-invert max-w-none text-foreground/70 leading-relaxed text-sm">
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">1. Datenschutz auf einen Blick</h3>
                                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">2. Hosting</h3>
                                    <p>Wir hosten unsere Website bei Vercel Inc., USA.</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">3. Tools und Dienste</h3>
                                    <p>Wir nutzen Vercel Web Analytics (Privacy-First) und Calendly für die Terminbuchung.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
