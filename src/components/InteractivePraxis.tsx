"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Mic, Pill, Package, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Hotspot Data - Updated positions for new Isometric Image V6
const hotspots = [
    {
        id: "reception",
        label: "KI-Empfang",
        icon: Phone,
        position: { top: "50%", left: "25%" }, // Reception Desk (Left)
        modal: {
            title: "Nie wieder Warteschleife",
            problem: "Ihre MFA verbringt 4-6 Stunden täglich am Telefon. Patienten hängen 15 Minuten in der Warteschleife.",
            solution: "Ein KI-Assistent beantwortet 60-70% aller Anrufe sofort: Terminbuchung, Rezeptanforderungen, Krankmeldungen.",
            roi: "4h/Tag MFA-Entlastung = €17.000/Jahr gespart",
            legal: "DSGVO Art. 9-konform durch Pseudonymisierung und EU-Cloud-Hosting."
        }
    },
    {
        id: "waiting",
        label: "Self-Check-In",
        icon: Smartphone,
        position: { top: "70%", left: "50%" }, // Waiting Area (Center Bottom)
        modal: {
            title: "Selbst-Check-In am Tablet",
            problem: "Patienten stehen Schlange am Empfang. Versichertenkarte einstecken dauert. Stammdaten-Änderungen manuell.",
            solution: "Patienten scannen Karte am Tablet, bestätigen Stammdaten. KI prüft Vollständigkeit, erstellt ePA-Einträge.",
            roi: "10 Min./Patient gespart bei 40 Patienten/Tag = 6,6h/Tag",
            legal: "ePA-Befüllung ab 1.1.2026 verpflichtend (§346 SGB V)."
        }
    },
    {
        id: "office",
        label: "Datenschutz",
        icon: Shield,
        position: { top: "55%", left: "80%" }, // Office (Right)
        modal: {
            title: "Rechtssicherheit by Design",
            problem: "Sie wollen ChatGPT nutzen, aber Datenschutzbeauftragte warnt vor US Cloud Act.",
            solution: "Alle KI-Lösungen sind DSGVO Art. 9-konform: EU-Cloud, Pseudonymisierung, AVV, Audit-Logs.",
            roi: "Bußgeldrisiko bis €20 Mio. vermieden",
            legal: "Legal Engineering: Recht ist TEIL der Architektur."
        }
    },
    {
        id: "treatment",
        label: "Auto-Doku",
        icon: Mic,
        position: { top: "25%", left: "45%" }, // Treatment Room (Top Center)
        modal: {
            title: "Sprechen statt Tippen",
            problem: "Sie schreiben bis Mitternacht Arztbriefe. 30 Minuten pro Brief. 3 Stunden täglich reine Dokumentation.",
            solution: "KI transkribiert Gespräch in Echtzeit. Strukturierter Arztbrief (Anamnese, Befund, Diagnose) fertig in 90 Sekunden.",
            roi: "2h/Tag gespart = €50.000 Umsatzpotenzial",
            legal: "MDR-konform als Dokumentations-Tool (kein Medizinprodukt)."
        }
    },
    {
        id: "lab",
        label: "Smart Lager",
        icon: Package,
        position: { top: "30%", left: "65%" }, // Storage Room (Top Right)
        modal: {
            title: "Nie wieder leere Regale",
            problem: "Impfstoffe nicht vorrätig = Termin verloren. MFA verbringt 3h/Woche mit Bestellungen.",
            solution: "KI überwacht Lagerbestände, prognostiziert Bedarf, bestellt automatisch. Blockchain-Transparenz.",
            roi: "3h/Woche gespart + keine verpassten Umsätze",
            legal: "EU-Falsified Medicines Directive konform."
        }
    }
];

export function InteractivePraxis() {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

    const activeData = hotspots.find(h => h.id === activeHotspot);

    return (
        <section className="py-32 bg-[#FDFBF7] overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
                        Legal Engineering in der Praxis
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                        Ihre Praxis ist ein komplexes Ökosystem. Entdecken Sie, wie wir jeden Bereich optimieren – rechtssicher und effizient.
                    </p>
                </div>

                {/* Map Container - Seamless integration */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">

                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <img
                            src="/praxis-isometric-v6.png"
                            alt="Interaktive Praxis Übersicht"
                            className="w-full h-full object-contain"
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
                                            <h3 className="text-lg font-serif font-bold text-gray-900">{activeData.modal.title}</h3>
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={() => setActiveHotspot(null)} className="h-8 w-8 p-0 rounded-full hover:bg-gray-100">
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Problem</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{activeData.modal.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Lösung</h4>
                                            <p className="text-sm text-gray-900 font-medium leading-relaxed">{activeData.modal.solution}</p>
                                        </div>
                                        <div className="pt-4 border-t border-gray-50 flex gap-4">
                                            <div>
                                                <span className="block text-[10px] font-bold text-gray-400 uppercase">ROI</span>
                                                <span className="text-xs font-bold text-green-600">{activeData.modal.roi}</span>
                                            </div>
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
