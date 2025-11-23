"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, ShieldCheck, Package, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const useCases = [
    {
        id: "reception",
        number: "01",
        title: "Der KI-Empfang, der nie Feierabend macht",
        hook: "Ihre MFA verbringt 4-6 Stunden täglich am Telefon. 60-70% davon sind Routine. Was wäre, wenn eine KI das übernimmt?",
        icon: Phone,
        stats: {
            before: "6h Telefon",
            after: "2h Telefon",
            saved: "4h gespart/Tag"
        },
        details: {
            problem: "150 Anrufe täglich. 15 Min. Wartezeit. Eine MFA-Vollzeitstelle nur für Telefon. 50% der Praxen finden keine neuen MFA. 2026 verschärft sich das.",
            solution: "KI-Assistent (Deutsch + Dialekte) beantwortet 60-70% sofort: Terminbuchung via PVS-Integration, Rezeptanforderung mit Arzt-Freigabe, Krankmeldung (eAU), Notfall-Erkennung.",
            roi: [
                "💰 €17.600/Jahr MFA-Zeit gespart",
                "📉 5-15% weniger No-Shows",
                "⏱️ Break-Even: 3 Monate"
            ],
            legal: [
                "🔒 DSGVO Art. 9-konform (Pseudonymisierung)",
                "📋 HWG-konform (keine Werbung)",
                "⚖️ Haftungsklauseln (Notfall-Keywords)"
            ]
        }
    },
    {
        id: "documentation",
        number: "02",
        title: "Arztbriefe in 90 Sekunden statt 30 Minuten",
        hook: "Sie diktieren, die KI schreibt. Perfekt formatiert, medizinisch korrekt, sofort im PVS. Mehr Zeit für den Patienten.",
        icon: FileText,
        stats: {
            before: "30 Min/Brief",
            after: "90 Sek/Brief",
            saved: "95% schneller"
        },
        details: {
            problem: "Dokumentation frisst 30-40% Ihrer Arbeitszeit. Copy-Paste-Fehler sind ein Haftungsrisiko. Nach Feierabend sitzen Sie noch am PC.",
            solution: "LLM generiert Arztbrief aus Stichpunkten oder Diktat. Automatische Strukturierung (Anamnese, Befund, Therapie). Integration in Ihr PVS.",
            roi: [
                "💰 €25.000/Jahr Arzt-Zeit (bei 1h/Tag)",
                "⚡ Sofortiger Versand an Überweiser",
                "😊 Pünktlicher Feierabend"
            ],
            legal: [
                "🔒 On-Premise oder Private Cloud (kein US-Server)",
                "👨‍⚕️ Human-in-the-Loop (Arzt gibt frei)",
                "✅ MDR-konform (keine Diagnose-KI)"
            ]
        }
    },
    {
        id: "compliance",
        number: "03",
        title: "Automatisierte DSGVO & Compliance",
        hook: "Keine Angst mehr vor Bußgeldern oder Audits. Ihre Praxis ist 'Compliance by Design'. Automatisch und im Hintergrund.",
        icon: ShieldCheck,
        stats: {
            before: "Risiko hoch",
            after: "100% Safe",
            saved: "€20M Risiko weg"
        },
        details: {
            problem: "DSGVO, MDR, AI Act, ePA-Pflicht. Die Regeln werden komplexer. Ein Fehler kann die Existenz kosten (Bußgelder, Abrechnungsausschluss).",
            solution: "Automatisierte Löschkonzepte, Verarbeitungsverzeichnisse und Einwilligungen. KI überwacht Compliance-Status in Echtzeit.",
            roi: [
                "🛡️ Schutz vor Existenzrisiken",
                "✅ Bestehen jedes Audits",
                "😌 Ruhiger Schlaf"
            ],
            legal: [
                "⚖️ Aktuellste Rechtsprechung integriert",
                "📄 Automatische Dokumentation",
                "🔒 Haftungsübernahme für Tech-Fehler"
            ]
        }
    },
    {
        id: "logistics",
        number: "04",
        title: "Intelligentes Lager & Bestellung",
        hook: "Nie wieder abgelaufene Medikamente oder fehlendes Verbandsmaterial. Die KI bestellt nach, bevor es leer ist.",
        icon: Package,
        stats: {
            before: "Chaos & Müll",
            after: "Auto-Pilot",
            saved: "3h/Woche"
        },
        details: {
            problem: "Manuelle Inventur ist fehleranfällig. Teure Medikamente verfallen. Im Notfall fehlt wichtiges Material.",
            solution: "Kamera-basierte Erfassung oder IoT-Waagen. KI prognostiziert Bedarf (z.B. Grippewelle) und schlägt Bestellungen vor.",
            roi: [
                "💰 10-20% weniger Materialkosten",
                "🗑️ 50% weniger Abfall",
                "📦 Immer lieferfähig"
            ],
            legal: [
                "💊 Apotheken- und Arzneimittelrecht konform",
                "📊 Lückenlose Chargen-Dokumentation",
                "✅ Revisionssicher"
            ]
        }
    }
];

export function UseCases() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
                        Die 4 KI-Lösungen, die Ihre Praxis braucht
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Wählen Sie alle 4 als Komplettpaket – oder starten Sie mit einer einzelnen Lösung.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {useCases.map((useCase) => (
                        <motion.div
                            key={useCase.id}
                            layout
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-bold text-primary/20 font-serif">{useCase.number}</span>
                                    <div className="p-3 bg-sand/30 rounded-full text-primary">
                                        <useCase.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{useCase.title}</h3>
                                <p className="text-gray-600 italic mb-8 leading-relaxed">
                                    {useCase.hook}
                                </p>

                                {/* Before / After Visual */}
                                <div className="bg-gray-50 rounded-2xl p-6 mb-8 flex items-center justify-between relative">
                                    <div className="text-center">
                                        <div className="text-red-500 font-bold text-lg mb-1">{useCase.stats.before}</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Vorher</div>
                                    </div>

                                    <div className="flex flex-col items-center px-4">
                                        <ArrowRight className="w-6 h-6 text-gray-300 mb-1" />
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">
                                            {useCase.stats.saved}
                                        </span>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-green-600 font-bold text-lg mb-1">{useCase.stats.after}</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Nachher</div>
                                    </div>
                                </div>

                                <Button
                                    variant="ghost"
                                    className="w-full flex items-center justify-between text-gray-900 hover:bg-gray-50 group"
                                    onClick={() => setExpandedId(expandedId === useCase.id ? null : useCase.id)}
                                >
                                    <span className="font-medium">Details & ROI</span>
                                    {expandedId === useCase.id ? (
                                        <ChevronUp className="w-4 h-4 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                    )}
                                </Button>

                                <AnimatePresence>
                                    {expandedId === useCase.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 space-y-6 border-t border-gray-100 mt-4">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Problem</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{useCase.details.problem}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Lösung</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{useCase.details.solution}</p>
                                                </div>

                                                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                                                    <h4 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" /> ROI & Nutzen
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {useCase.details.roi.map((item, idx) => (
                                                            <li key={idx} className="text-sm text-green-700 font-medium">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-sand/20 rounded-xl p-5 border border-sand/30">
                                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                                                        <ShieldCheck className="w-4 h-4" /> Legal Engineering
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {useCase.details.legal.map((item, idx) => (
                                                            <li key={idx} className="text-sm text-gray-700">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                                                    Beratung zu {useCase.title.split(" ")[1]} anfragen
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
