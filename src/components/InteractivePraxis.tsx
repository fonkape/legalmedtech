"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Mic, Shield, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Hotspot Data - Updated positions for new Isometric Image V6
const hotspots = [
    {
        id: "reception",
        label: "KI-Empfang",
        icon: Phone,
        position: { top: "50%", left: "25%" }, // Reception Desk (Left)
        modal: {
            title: "Automatisierte Anrufannahme",
            text: "Ein KI-Assistent nimmt Anrufe entgegen und bearbeitet Routineanfragen: Terminbuchungen, Rezeptanforderungen, Krankmeldungen. Komplexe Anliegen werden an Ihr Team weitergeleitet.",
            legal: "DSGVO-konforme Verarbeitung auf deutschen Servern. Keine Weitergabe an Dritte."
        }
    },
    {
        id: "waiting",
        label: "Self-Check-In",
        icon: Smartphone,
        position: { top: "70%", left: "50%" }, // Waiting Area (Center Bottom)
        modal: {
            title: "Digitaler Empfang",
            text: "Patienten scannen ihre Versichertenkarte am Tablet, bestätigen Stammdaten und füllen Anamnesebögen aus. Die Daten fließen direkt in Ihr PVS.",
            legal: "Einwilligungsmanagement integriert. Automatische Dokumentation für ePA-Befüllungspflichten ab 2026."
        }
    },
    {
        id: "office",
        label: "Datenschutz",
        icon: Shield,
        position: { top: "55%", left: "80%" }, // Office (Right)
        modal: {
            title: "Privacy by Design",
            text: "Alle KI-Lösungen laufen auf EU-Infrastruktur oder on-premise in Ihrer Praxis. Patientendaten werden pseudonymisiert, bevor sie die KI erreichen.",
            legal: "Konform mit DSGVO Art. 9 (Gesundheitsdaten). Sie erhalten eine vollständige DSFA für Ihre Unterlagen."
        }
    },
    {
        id: "treatment",
        label: "Auto-Doku",
        icon: Mic,
        position: { top: "25%", left: "45%" }, // Treatment Room (Top Center)
        modal: {
            title: "Dokumentation per Sprache",
            text: "Die KI transkribiert Ihr Gespräch in Echtzeit und strukturiert es automatisch in einen Arztbrief – Anamnese, Befund, Diagnose. Sie prüfen und signieren.",
            legal: "Keine diagnostische Funktion, daher kein Medizinprodukt nach MDR. Vollständige Audit-Logs für Nachweispflichten."
        }
    }
];

export function InteractivePraxis() {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

    const activeData = hotspots.find(h => h.id === activeHotspot);

    return (
        <section className="py-32 bg-transparent overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-8">
                        <Stethoscope className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">USE CASES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
                        Wo KI Ihre Praxis entlastet.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                        Ich integriere Automatisierung nicht wahllos, sondern genau dort, wo Ihre Prozesse klemmen. Jeder Raum hat seine eigenen Regeln.
                    </p>
                </div>

                {/* Map Container - Seamless integration */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">

                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <img
                            src="/praxis-isometric-v6.png"
                            alt="Interaktive Praxis Übersicht"
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Hotspots Layer - ABSOLUTE within RELATIVE container */}
                    <div className="absolute inset-0 pointer-events-none">
                        {hotspots.map((hotspot) => (
                            <motion.button
                                key={hotspot.id}
                                className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 pointer-events-auto"
                                style={{ top: hotspot.position.top, left: hotspot.position.left }}
                                onClick={() => setActiveHotspot(hotspot.id)}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                                    <div className="relative bg-white p-4 rounded-full shadow-xl border border-gray-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <hotspot.icon className="h-7 w-7" />
                                    </div>
                                    {/* Label Tooltip */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black text-white text-sm font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {hotspot.label}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Modal Overlay */}
                    <AnimatePresence>
                        {activeHotspot && activeData && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm"
                                onClick={() => setActiveHotspot(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.9, opacity: 0, y: 10 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-white rounded-xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden"
                                >
                                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                                <activeData.icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">{activeData.modal.title}</h3>
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={() => setActiveHotspot(null)} className="h-8 w-8 p-0 rounded-full hover:bg-gray-100">
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-600 leading-relaxed">{activeData.modal.text}</p>
                                        </div>
                                        <div className="pt-4 border-t border-gray-50">
                                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Rechtliche Absicherung</h4>
                                            <p className="text-xs font-medium text-gray-900">{activeData.modal.legal}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
