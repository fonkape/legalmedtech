"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, Pill, Package, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const useCases = [
    {
        id: "01",
        title: "Der KI-Empfang, der nie Feierabend macht",
        icon: Phone,
        hook: "Ihre MFA verbringt 4-6 Stunden täglich am Telefon. Patienten warten 15 Minuten. 60-70% aller Anrufe sind Routine.",
        detail: {
            problem: "Eine Hausarztpraxis erhält 50-150 Anrufe täglich. Eine MFA-Vollzeitstelle (€35k/Jahr) geht nur für Telefondienst drauf. No-Shows: 5-15% der Termine, weil Patienten in Warteschleife aufgeben.",
            solution: "KI-Assistent mit natürlicher Sprache (Deutsch + Dialekte) beantwortet Routinefragen sofort: Terminbuchung, Rezeptanforderung, Krankmeldung. Notfall-Erkennung leitet sofort weiter.",
            roi: "4h/Tag MFA-Entlastung = €17.600/Jahr gespart. No-Show-Reduktion = €5.000-15.000/Jahr.",
            legal: "DSGVO Art. 9 Rechtsgrundlagen-Mapping. AVV mit EU-Cloud-Anbieter. Keine Gesprächsaufzeichnung ohne Opt-in."
        }
    },
    {
        id: "02",
        title: "Arztbriefe in 90 Sekunden statt 30 Minuten",
        icon: FileText,
        hook: "Sie verbringen 3 Stunden täglich mit Dokumentation. 30 Minuten pro Arztbrief. Das sind 720 Stunden pro Jahr.",
        detail: {
            problem: "52% der Ärzte klagen über zu wenig Patientenzeit. Dokumentation ist Haupttreiber für Burnout. Eine Zahnarztpraxis dokumentiert bis Mitternacht.",
            solution: "Ambient AI transkribiert Ihr Patientengespräch in Echtzeit. Nach Konsultation liegt ein strukturierter Arztbrief vor. Sie prüfen, ergänzen, signieren – fertig in 90 Sekunden.",
            roi: "2h/Tag gespart = 500h/Jahr. Bei €100/h Arzt-Stundensatz = €50.000 Umsatzpotenzial.",
            legal: "On-Premise oder EU-Private-Cloud. Kein Training mit Ihren Daten. MDR-konform als Dokumentations-Tool (kein Medizinprodukt)."
        }
    },
    {
        id: "03",
        title: "Interaktionsprüfung in Sekunden",
        icon: Pill,
        hook: "Patient nimmt 8 Medikamente. Wechselwirkungen manuell prüfen dauert 5 Minuten. Dosierung für Nierenpatienten = Kopfrechnen.",
        detail: {
            problem: "Polypharmazie bei 40% der über-65-Jährigen. Interaktionsprüfung zeitaufwendig. Dosisanpassung bei Niereninsuffizienz fehleranfällig.",
            solution: "KI-basiertes CDSS gleicht Medikationsliste mit Fachinformation ab, prüft Interaktionen und Kontraindikationen, schlägt Dosisanpassungen vor.",
            roi: "5 Min./Patient gespart bei 40 Patienten/Tag = 3,3h/Tag. Haftungsrisiko minimiert.",
            legal: "CDSS als KEIN Medizinprodukt (nur Vorschlag, Sie entscheiden). Plausibilitätsprüfung bleibt bei Ihnen. Haftungsverteilung klar geregelt."
        }
    },
    {
        id: "04",
        title: "Blockchain für Ihre Medikamente",
        icon: Package,
        hook: "Impfstoffe nicht vorrätig = Termin verloren. MFA verbringt 3h/Woche mit Bestellungen. Lieferengpässe = manuelle Telefonate.",
        detail: {
            problem: "Lagerbestand manuell prüfen = fehleranfällig. Mindesthaltbarkeit übersehen = Verschwendung. Lieferengpässe = Versorgungslücken.",
            solution: "KI-Prognose für Bedarf. Automatische Bestellung. Blockchain-Tracking für transparente Lieferkette und Fälschungsschutz.",
            roi: "3h/Woche MFA-Zeit gespart = €6.000/Jahr. Keine verpassten Umsätze durch Engpässe.",
            legal: "EU Falsified Medicines Directive konform. Blockchain DSGVO-konform. AVV mit allen Teilnehmern."
        }
    }
];

export function UseCases() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Konkrete Lösungen für Ihre Praxis
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.id}
                            className={cn(
                                "bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-300",
                                expandedId === useCase.id ? "ring-2 ring-primary ring-opacity-50" : "hover:shadow-md"
                            )}
                        >
                            <div
                                className="cursor-pointer"
                                onClick={() => setExpandedId(expandedId === useCase.id ? null : useCase.id)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary font-serif font-bold text-xl">#{useCase.id}</div>
                                        <div className="p-3 bg-sand/30 rounded-xl text-primary">
                                            <useCase.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={cn(
                                            "h-6 w-6 text-gray-400 transition-transform duration-300",
                                            expandedId === useCase.id && "rotate-180"
                                        )}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-text-primary">{useCase.title}</h3>
                                <p className="text-gray-600 mb-4">{useCase.hook}</p>
                            </div>

                            <AnimatePresence>
                                {expandedId === useCase.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-gray-100 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-primary mb-2">Problem</h4>
                                                <p className="text-sm text-gray-600">{useCase.detail.problem}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary mb-2">Lösung</h4>
                                                <p className="text-sm text-gray-600">{useCase.detail.solution}</p>
                                            </div>
                                            <div className="bg-accent-green/10 p-4 rounded-xl border border-accent-green/20">
                                                <h4 className="font-bold text-accent-green mb-1">ROI</h4>
                                                <p className="text-sm text-gray-700 font-medium">{useCase.detail.roi}</p>
                                            </div>
                                            <div className="bg-sand/30 p-4 rounded-xl border border-sand">
                                                <h4 className="font-bold text-primary mb-1">Rechtliche Absicherung</h4>
                                                <p className="text-sm text-gray-700">{useCase.detail.legal}</p>
                                            </div>
                                            <Button variant="ghost" className="w-full justify-between group text-primary hover:text-primary-hover hover:bg-primary/5">
                                                Beratung anfragen
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
