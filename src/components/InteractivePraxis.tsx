"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Mic, Pill, Package, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Hotspot Data - Updated positions for Technical Drawing View
const hotspots = [
    {
        id: "reception",
        label: "AI-Empfang",
        icon: Phone,
        position: { top: "55%", left: "25%" }, // Reception Desk
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
        label: "Digitale Anmeldung",
        icon: Smartphone,
        position: { top: "70%", left: "45%" }, // Waiting Area
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
        label: "DSGVO-Compliance",
        icon: Shield,
        position: { top: "30%", left: "15%" }, // Back Office
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
        label: "Ambient AI-Dokumentation",
        icon: Mic,
        position: { top: "40%", left: "60%" }, // Treatment Room
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
        label: "Supply Chain",
        icon: Package,
        position: { top: "25%", left: "80%" }, // Lab
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
                        Mein Ansatz: Legal Engineering
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                        Eine moderne Praxis ist ein komplexes System. Klicken Sie auf die Bereiche, um zu sehen, wie wir Technik und Recht verbinden.
                    </p>
                </div>

                {/* Map Container - RELATIVE positioning is crucial here */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-white rounded-sm shadow-2xl overflow-hidden border-8 border-white ring-1 ring-gray-200">

                    {/* Technical Drawing SVG */}
                    <div className="absolute inset-0">
                        <svg viewBox="0 0 1000 600" className="w-full h-full">
                            <defs>
                                {/* Millimeter Paper Pattern */}
                                <pattern id="millimeter" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
                                    <path d="M 10 0 L 10 20 M 0 10 L 20 10" fill="none" stroke="#F3F4F6" strokeWidth="0.5" />
                                </pattern>
                            </defs>

                            {/* Background */}
                            <rect width="100%" height="100%" fill="#FFFFFF" />
                            <rect width="100%" height="100%" fill="url(#millimeter)" />

                            {/* ARCHITECTURAL DRAWING */}
                            <g stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="square">

                                {/* Outer Walls */}
                                <path d="M 100 100 L 900 100 L 900 500 L 100 500 Z" strokeWidth="4" />

                                {/* Internal Walls */}
                                {/* Reception Area (Bottom Left) */}
                                <path d="M 100 300 L 350 300" />
                                <path d="M 350 300 L 350 500" />

                                {/* Waiting Area (Bottom Center) */}
                                <path d="M 350 300 L 600 300" />
                                <path d="M 600 300 L 600 500" />

                                {/* Corridor (Center Horizontal) */}
                                <path d="M 100 200 L 900 200" strokeDasharray="5,5" strokeWidth="1" opacity="0.5" />

                                {/* Treatment Rooms (Top Center) */}
                                <path d="M 400 100 L 400 300" />
                                <path d="M 650 100 L 650 300" />

                                {/* Lab/Office (Top Right) */}
                                <path d="M 750 100 L 750 250 L 900 250" />

                                {/* DOORS (White gaps + Arcs) */}
                                {/* Reception Door */}
                                <path d="M 350 400 L 350 450" stroke="white" strokeWidth="6" />
                                <path d="M 350 400 A 50 50 0 0 1 400 450" strokeWidth="1" strokeDasharray="2,2" />

                                {/* Treatment Door */}
                                <path d="M 500 300 L 550 300" stroke="white" strokeWidth="6" />
                                <path d="M 500 300 A 50 50 0 0 0 550 250" strokeWidth="1" strokeDasharray="2,2" />
                            </g>

                            {/* FURNITURE (Simplified Technical Style) */}
                            <g stroke="#9CA3AF" strokeWidth="1" fill="none">
                                {/* Reception Desk (L-Shape) */}
                                <path d="M 200 350 L 300 350 L 300 450" />
                                <rect x="220" y="370" width="20" height="20" fill="#E5E7EB" stroke="none" /> {/* Chair */}

                                {/* Waiting Area Chairs */}
                                <circle cx="400" cy="400" r="10" />
                                <circle cx="450" cy="400" r="10" />
                                <circle cx="500" cy="400" r="10" />
                                <rect x="380" y="450" width="140" height="30" rx="5" /> {/* Bench */}

                                {/* Treatment Table */}
                                <rect x="450" y="150" width="100" height="40" rx="2" />
                                <circle cx="430" cy="170" r="8" /> {/* Stool */}

                                {/* Lab Bench */}
                                <rect x="800" y="120" width="80" height="100" />
                            </g>

                            {/* LABELS */}
                            <g fill="#9CA3AF" fontFamily="monospace" fontSize="12" fontWeight="bold" stroke="none">
                                <text x="120" y="480">EMPFANG</text>
                                <text x="420" y="480">WARTEZIMMER</text>
                                <text x="480" y="130">BEHANDLUNG</text>
                                <text x="820" y="140">LABOR</text>
                                <text x="120" y="130">BÜRO</text>
                            </g>
                        </svg>
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
                                    <div className="relative bg-white p-2 rounded-full shadow-md border border-gray-200 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <hotspot.icon className="h-5 w-5" />
                                    </div>
                                    {/* Label Tooltip */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
