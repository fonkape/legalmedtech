"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Mic, Pill, Package, Shield, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Hotspot Data - Updated positions for Isometric View
const hotspots = [
    {
        id: "reception",
        label: "AI-Empfang",
        icon: Phone,
        position: { top: "60%", left: "28%" }, // Reception Desk
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
        position: { top: "75%", left: "55%" }, // Waiting Area
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
        position: { top: "35%", left: "20%" }, // Office
        modal: {
            title: "Rechtssicherheit by Design",
            problem: "Sie wollen ChatGPT nutzen, aber Datenschutzbeauftragte warnt vor US Cloud Act.",
            solution: "Alle KI-Lösungen sind DSGVO Art. 9-konform: EU-Cloud, Pseudonymisierung, AVV, Audit-Logs.",
            roi: "Bußgeldrisiko bis €20 Mio. vermieden",
            legal: "Legal Engineering: Recht ist TEIL der Architektur."
        }
    },
    {
        id: "treatment1",
        label: "Ambient AI-Dokumentation",
        icon: Mic,
        position: { top: "40%", left: "45%" }, // Treatment 1
        modal: {
            title: "Sprechen statt Tippen",
            problem: "Sie schreiben bis Mitternacht Arztbriefe. 30 Minuten pro Brief. 3 Stunden täglich reine Dokumentation.",
            solution: "KI transkribiert Gespräch in Echtzeit. Strukturierter Arztbrief (Anamnese, Befund, Diagnose) fertig in 90 Sekunden.",
            roi: "2h/Tag gespart = €50.000 Umsatzpotenzial",
            legal: "MDR-konform als Dokumentations-Tool (kein Medizinprodukt)."
        }
    },
    {
        id: "treatment2",
        label: "Medikationsmanagement",
        icon: Pill,
        position: { top: "40%", left: "65%" }, // Treatment 2
        modal: {
            title: "Intelligente Interaktionsprüfung",
            problem: "Patient nimmt 8 Medikamente. Wechselwirkungen manuell prüfen = 5 Minuten. Fachinformationen veraltet.",
            solution: "KI gleicht Medikationsliste ab, prüft Interaktionen & Kontraindikationen, schlägt Dosisanpassungen vor.",
            roi: "5 Min./Patient gespart + Haftungsrisiko minimiert",
            legal: "CDSS = KEIN Medizinprodukt, wenn nur Vorschlag (Sie entscheiden)."
        }
    },
    {
        id: "lab",
        label: "Supply Chain",
        icon: Package,
        position: { top: "55%", left: "80%" }, // Lab
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
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Ihre Praxis. Ihre Pain Points. Unsere Lösungen.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Klicken Sie auf die leuchtenden Punkte in der technischen Zeichnung, um die Lösungen zu entdecken.
                    </p>
                </div>

                <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] bg-[#F0F0F0] rounded-xl border border-gray-300 shadow-2xl overflow-hidden">
                    {/* Technical Architectural SVG Map - High Fidelity "Nano Banana Pro" Style */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 1400 900" className="w-full h-full" style={{ filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.15))" }}>
                            <defs>
                                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
                                </pattern>
                                <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4B5563" />
                                    <stop offset="100%" stopColor="#1F2937" />
                                </linearGradient>
                                <filter id="insetShadow">
                                    <feOffset dx="0" dy="2" />
                                    <feGaussianBlur stdDeviation="2" result="offset-blur" />
                                    <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                                    <feFlood floodColor="black" floodOpacity="0.2" result="color" />
                                    <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                                    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                                </filter>
                            </defs>

                            {/* Background */}
                            <rect width="100%" height="100%" fill="#F8F9FA" />
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {/* ISOMETRIC TRANSFORM GROUP */}
                            {/* Center and Scale */}
                            <g transform="translate(700, 200) scale(1.3)">

                                {/* FLOOR PLAN BASE */}
                                {/* Main Floor - Isometric Projection */}
                                <path d="M 0 0 L 400 200 L 0 400 L -400 200 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />

                                {/* ROOMS */}

                                {/* RECEPTION (Front Left) */}
                                <g transform="translate(-200, 200)">
                                    {/* Floor */}
                                    <path d="M 0 0 L 200 100 L 0 200 L -200 100 Z" fill="#F3F4F6" />
                                    <text x="0" y="120" textAnchor="middle" fontSize="16" fontFamily="monospace" fontWeight="bold" fill="#9CA3AF" transform="skewY(0)">EMPFANG</text>

                                    {/* Reception Desk - High Detail */}
                                    <g transform="translate(-20, 20)">
                                        {/* Counter Top */}
                                        <path d="M -60 60 L 0 90 L 60 60 L 0 30 Z" fill="#E8DDD3" stroke="#A0685A" strokeWidth="1" />
                                        {/* Side Panels */}
                                        <path d="M -60 60 L -60 100 L 0 130 L 0 90 Z" fill="#D6C6B9" />
                                        <path d="M 0 90 L 0 130 L 60 100 L 60 60 Z" fill="#C4B4A6" />
                                        {/* Computer Monitor */}
                                        <path d="M -10 50 L 10 60 L 10 50 L -10 40 Z" fill="#374151" />
                                        <path d="M 0 65 L 0 60" stroke="#374151" strokeWidth="2" />
                                    </g>
                                </g>

                                {/* WAITING AREA (Front Right) */}
                                <g transform="translate(200, 200)">
                                    {/* Floor */}
                                    <path d="M 0 0 L 200 100 L 0 200 L -200 100 Z" fill="#FFFFFF" />
                                    <text x="0" y="120" textAnchor="middle" fontSize="16" fontFamily="monospace" fontWeight="bold" fill="#9CA3AF">WARTEZIMMER</text>

                                    {/* Chairs - Row of 3 */}
                                    {[0, 40, 80].map((offset, i) => (
                                        <g key={i} transform={`translate(${offset - 40}, ${offset / 2 + 40})`}>
                                            {/* Seat */}
                                            <path d="M -15 15 L 0 22.5 L 15 15 L 0 7.5 Z" fill="#7A9B76" />
                                            {/* Legs */}
                                            <path d="M -15 15 L -15 25" stroke="#4B5563" strokeWidth="1" />
                                            <path d="M 0 22.5 L 0 32.5" stroke="#4B5563" strokeWidth="1" />
                                            <path d="M 15 15 L 15 25" stroke="#4B5563" strokeWidth="1" />
                                            {/* Backrest */}
                                            <path d="M -15 15 L 0 7.5 L 0 -5 L -15 2.5 Z" fill="#5F7A5B" />
                                        </g>
                                    ))}

                                    {/* Tablet Stand */}
                                    <g transform="translate(60, 40)">
                                        <path d="M 0 0 L 0 40" stroke="#374151" strokeWidth="2" />
                                        <path d="M -10 0 L 10 10 L 10 -10 L -10 -20 Z" fill="#1F2937" />
                                    </g>
                                </g>

                                {/* OFFICE (Back Left) */}
                                <g transform="translate(-250, 75)">
                                    {/* Floor */}
                                    <path d="M 0 0 L 150 75 L 0 150 L -150 75 Z" fill="#FFFFFF" />
                                    <text x="0" y="90" textAnchor="middle" fontSize="14" fontFamily="monospace" fontWeight="bold" fill="#9CA3AF">BÜRO</text>

                                    {/* Desk */}
                                    <g transform="translate(0, 30)">
                                        <path d="M -40 20 L 0 40 L 40 20 L 0 0 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5" />
                                        <path d="M -40 20 L -40 50 L 0 70 L 0 40 Z" fill="#D1D5DB" />
                                        <path d="M 0 40 L 0 70 L 40 50 L 40 20 Z" fill="#9CA3AF" />
                                    </g>
                                </g>

                                {/* TREATMENT 1 (Center Left) */}
                                <g transform="translate(0, 75)">
                                    {/* Floor */}
                                    <path d="M 0 0 L 100 50 L 0 100 L -100 50 Z" fill="#F9FAFB" />
                                    <text x="0" y="60" textAnchor="middle" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#9CA3AF">BEHANDLUNG 1</text>

                                    {/* Examination Table */}
                                    <g transform="translate(0, 20)">
                                        <path d="M -30 15 L 0 30 L 30 15 L 0 0 Z" fill="#E8DDD3" />
                                        <path d="M -30 15 L -30 35 L 0 50 L 0 30 Z" fill="#D6C6B9" />
                                        <path d="M 0 30 L 0 50 L 30 35 L 30 15 Z" fill="#C4B4A6" />
                                    </g>
                                </g>

                                {/* TREATMENT 2 (Center Right) */}
                                <g transform="translate(250, 75)">
                                    {/* Floor */}
                                    <path d="M 0 0 L 100 50 L 0 100 L -100 50 Z" fill="#FFFFFF" />
                                    <text x="0" y="60" textAnchor="middle" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#9CA3AF">BEHANDLUNG 2</text>
                                    {/* Examination Table */}
                                    <g transform="translate(0, 20)">
                                        <path d="M -30 15 L 0 30 L 30 15 L 0 0 Z" fill="#E8DDD3" />
                                        <path d="M -30 15 L -30 35 L 0 50 L 0 30 Z" fill="#D6C6B9" />
                                        <path d="M 0 30 L 0 50 L 30 35 L 30 15 Z" fill="#C4B4A6" />
                                    </g>
                                </g>

                                {/* LAB (Back Right) */}
                                <g transform="translate(350, 125)">
                                    {/* Floor */}
                                    <path d="M 0 0 L 50 25 L 0 50 L -50 25 Z" fill="#F3F4F6" />
                                    <text x="0" y="35" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold" fill="#9CA3AF">LABOR</text>
                                    {/* Shelves */}
                                    <g transform="translate(0, 10)">
                                        <path d="M -20 10 L 0 20 L 20 10 L 0 0 Z" fill="#FFFFFF" stroke="#D1D5DB" />
                                        <path d="M -20 10 L -20 40 L 0 50 L 0 20 Z" fill="#E5E7EB" />
                                        <path d="M 0 20 L 0 50 L 20 40 L 20 10 Z" fill="#D1D5DB" />
                                    </g>
                                </g>


                                {/* ARCHITECTURAL WALLS - Thick & Detailed */}
                                <g fill="url(#wallGradient)" stroke="#374151" strokeWidth="1">
                                    {/* Outer Walls - Extruded */}
                                    {/* Back Left Wall */}
                                    <path d="M -400 200 L -400 180 L 0 -20 L 0 0 Z" fill="#4B5563" />
                                    <path d="M 0 0 L 0 -20 L 400 180 L 400 200 Z" fill="#1F2937" />

                                    {/* Front Walls (Cutaway style - lower) */}
                                    <path d="M -400 200 L 0 400 L 0 405 L -400 205 Z" fill="#374151" opacity="0.5" />
                                    <path d="M 400 200 L 0 400 L 0 405 L 400 205 Z" fill="#111827" opacity="0.5" />

                                    {/* Internal Walls */}
                                    {/* Center Spine */}
                                    <path d="M 0 0 L 0 400" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
                                    {/* Cross Walls */}
                                    <path d="M -400 200 L 400 200" stroke="#374151" strokeWidth="4" />
                                    <path d="M -100 50 L -100 150" stroke="#374151" strokeWidth="3" />
                                    <path d="M 100 50 L 100 150" stroke="#374151" strokeWidth="3" />
                                </g>

                                {/* Doorways (White gaps in walls) */}
                                <path d="M -50 200 L 50 200" stroke="#FFFFFF" strokeWidth="6" />
                                <path d="M 0 100 L 0 150" stroke="#FFFFFF" strokeWidth="6" />

                            </g>
                        </svg>
                    </div>
                </div>

                {/* Hotspots Layer */}
                <div className="absolute inset-0">
                    {hotspots.map((hotspot) => (
                        <motion.button
                            key={hotspot.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
                            style={{ top: hotspot.position.top, left: hotspot.position.left }}
                            onClick={() => setActiveHotspot(hotspot.id)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                                <div className="relative bg-white p-3 rounded-full shadow-lg border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <hotspot.icon className="h-6 w-6" />
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                    {hotspot.label}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {activeHotspot && activeData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setActiveHotspot(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-sand/20">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                                        <activeData.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-text-primary">{activeData.modal.title}</h3>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => setActiveHotspot(null)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Das Problem</h4>
                                    <p className="text-gray-600">{activeData.modal.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Die Lösung</h4>
                                    <p className="text-gray-600">{activeData.modal.solution}</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-accent-green/10 p-4 rounded-xl border border-accent-green/20">
                                        <h4 className="text-xs font-bold text-accent-green uppercase mb-1">ROI</h4>
                                        <p className="text-sm font-medium text-gray-800">{activeData.modal.roi}</p>
                                    </div>
                                    <div className="bg-sand/30 p-4 rounded-xl border border-sand">
                                        <h4 className="text-xs font-bold text-primary uppercase mb-1">Rechtssicherheit</h4>
                                        <p className="text-sm font-medium text-gray-800">{activeData.modal.legal}</p>
                                    </div>
                                </div>
                                <Button className="w-full" size="lg" onClick={() => setActiveHotspot(null)}>
                                    Verstanden
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
