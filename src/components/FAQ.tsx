"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Was kostet eine Erstberatung?",
        answer: "Die ersten 15 Minuten sind kostenlos. Danach ab €150/Stunde oder Festpreis je nach Projekt. Ein Feasibility Check (48h) kostet €2.000-5.000."
    },
    {
        question: "Wie lange dauert die Implementierung?",
        answer: "AI-Empfang: 4-8 Wochen. Dokumentations-KI: 6-12 Wochen. Medikationsmanagement: 8-16 Wochen. Supply Chain: 12-24 Wochen. Abhängig von PVS-Integration."
    },
    {
        question: "Welche Praxisverwaltungssysteme unterstützen Sie?",
        answer: "CGM Albis, Medatixx x.concept, QUINCY, TurboMed, PraxisWinners. Falls Ihr PVS nicht dabei ist: Individuelle Integration möglich (API oder HL7v2/FHIR)."
    },
    {
        question: "Ist meine Praxis zu klein für KI?",
        answer: "Nein. Ab 2 Ärzten + 2 MFA lohnt sich KI bereits. Soloselbstständige: Je nach Spezialisierung (z.B. Radiologie mit hohem Dokumentationsaufwand). Ich berate ehrlich: Wenn ROI nicht gegeben, sage ich das."
    },
    {
        question: "Wer haftet, wenn die KI einen Fehler macht?",
        answer: "Sie behalten IMMER die letzte Kontrolle (Plausibilitätsprüfung). KI schlägt vor, Sie entscheiden. Haftung ist vertraglich geregelt: Ich (Hersteller) hafte für Software-Bugs, Sie (Arzt) für medizinische Entscheidungen."
    },
    {
        question: "Wie ist der Datenschutz gewährleistet?",
        answer: "EU-Cloud-Hosting (Azure Deutschland oder AWS Frankfurt), Pseudonymisierung, Ende-zu-Ende-Verschlüsselung (AES-256), AVV mit allen Anbietern, DSFA durchgeführt, Audit-Logs unveränderbar."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Häufige Fragen
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-background hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-lg text-text-primary">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-gray-400 transition-transform duration-300",
                                        openIndex === index && "rotate-180 text-primary"
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
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
