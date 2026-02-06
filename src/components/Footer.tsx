"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { X, Mail, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    // Lock body scroll when modal is open
    if (typeof window !== "undefined") {
        if (showImpressum || showPrivacy) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <footer className="py-[var(--section-padding)] pt-32 bg-[#F9FAFB] border-t border-border-subtle">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-24 text-left">
                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <div className="mb-8">
                            <Image
                                src="/logo-master.svg"
                                alt="Daniel Kleiboldt Logo"
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Legal Engineering für Healthcare-KI-Compliance
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Gütersloh, NRW
                        </p>
                    </div>

                    {/* Column 2: Angebot */}
                    <div>
                        <h4 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">
                            Angebot
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#angebot" className="text-[#4B5563] hover:text-[#2563EB] transition-colors">KI-Compliance-Audit</Link></li>
                            <li><Link href="#angebot" className="text-[#4B5563] hover:text-[#2563EB] transition-colors">Sovereign AI Roadmap</Link></li>
                            <li><Link href="#angebot" className="text-[#4B5563] hover:text-[#2563EB] transition-colors">Technical Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Kontakt (NEW) */}
                    <div>
                        <h4 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">
                            Kontakt
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <a href="mailto:mail@kleiboldt.de" className="text-[#4B5563] hover:text-[#2563EB] transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    mail@kleiboldt.de
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/" target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#0077b5] transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://calendly.com/daniel-kleiboldt/potenzialanalyse" target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#2563EB] transition-colors flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Erstgespräch buchen
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Rechtliches */}
                    <div>
                        <h4 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">Rechtliches</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <Link href="/eu-ai-act-check" className="!text-[#4B5563] hover:!text-[#2563EB] transition-colors uppercase tracking-wider">
                                    EU AI Act Quick-Check
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => setShowImpressum(true)} className="text-[#4B5563] hover:text-[#2563EB] transition-colors text-left uppercase tracking-wider">
                                    Impressum
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setShowPrivacy(true)} className="text-[#4B5563] hover:text-[#2563EB] transition-colors text-left uppercase tracking-wider">
                                    Datenschutz
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                            © 2025 Daniel Kleiboldt. Made in Germany.
                        </p>
                        <div className="flex gap-8">
                            <span className="text-[10px] font-normal text-gray-300 uppercase tracking-[0.2em] font-mono">DSGVO Konform</span>
                            <span className="text-[10px] font-normal text-gray-300 uppercase tracking-[0.2em] font-mono">SSL Secured</span>
                        </div>
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
                                <h2 className="text-4xl font-bold text-foreground mb-12">Impressum</h2>
                                <div className="prose prose-gray theme-precision:prose-invert max-w-none text-foreground/70 leading-relaxed text-sm">
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Angaben gemäß § 5 TMG</h3>
                                    <p>Daniel Kleiboldt<br />Büro für Legal Engineering<br />Hülsbrockstraße 115<br />33334 Gütersloh</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Kontakt</h3>
                                    <p>Telefon: 05241/7082012<br />E-Mail: mail@kleiboldt.de</p>
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
                                <h2 className="text-4xl font-bold text-foreground mb-12">Datenschutz</h2>
                                <div className="prose prose-gray theme-precision:prose-invert max-w-none text-foreground/70 leading-relaxed text-sm">
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">1. Datenschutz auf einen Blick</h3>
                                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">2. Hosting</h3>
                                    <p>Wir hosten unsere Website bei der Strato AG, Pascalstraße 10, 10587 Berlin (Deutschland).</p>
                                    <h3 className="text-lg font-bold text-foreground mt-8 mb-4">3. Tools und Dienste</h3>
                                    <p>Wir nutzen Calendly für die Terminbuchung.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
