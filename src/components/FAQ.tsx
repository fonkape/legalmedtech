"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

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
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">
                        Häufige Fragen
                    </h2>
                    <p className="text-gray-600">
                        Alles, was Sie vor dem Start wissen müssen.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            CGM und Medatixx bieten doch auch KI an – warum zu Ihnen kommen?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            CGM/Medatixx haben massive Compliance-Defizite. 72% der TURBOMED-Nutzer wollen wechseln (Quelle: Bitkom 2024). Ihre KI-Tools sind oft US-Cloud-basiert (Cloud Act-Risiko). Ich baue DSGVO-konform ab Tag 1, on-premise oder EU-Private-Cloud, mit vollständiger MDR/AI Act-Dokumentation. Kein Vendor-Lock-In – Sie bekommen Quellcode in Escrow.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Ist es nicht zu früh für KI? Sollte ich warten?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Nein. Drei Gründe: 1. ePA-Pflicht ab 1.1.2026 – wer jetzt nicht plant, zahlt Sanktionen. 2. AI Act ab 2.8.2026 – wer jetzt startet, hat 18 Monate Vorlauf. 3. First-Mover-Vorteil – Patienten wählen Praxen mit kurzen Wartezeiten. Wer 2026 wartet, zahlt doppelt: Sanktionen + höhere Implementierungskosten.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Was passiert, wenn Sie Ihr Geschäft aufgeben?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Exit-Garantie: Alle Ihre Daten in Standard-Formaten (HL7v2, FHIR) exportierbar. Quellcode geht in Treuhand-Escrow (Rechtsanwalt als Treuhänder). Bei Exit: Sie können anderen Entwickler beauftragen oder zu anderem Anbieter wechseln. Keine Vendor-Lock-In-Klauseln in Verträgen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Wie garantieren Sie DSGVO-Konformität?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ich nutze "Privacy by Design". Daten werden pseudonymisiert, bevor sie die KI erreichen. Wir nutzen ausschließlich Server in Deutschland (ISO 27001 zertifiziert) oder On-Premise Lösungen in Ihrer Praxis. Zusätzlich erhalten Sie eine vollständige Datenschutz-Folgenabschätzung (DSFA) für Ihre Unterlagen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Funktioniert das mit meinem PVS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ja. Wir nutzen Schnittstellen (GDT/BDT, FHIR, HL7), die mit allen gängigen Systemen (Tomedo, Medatixx, CGM, Duria, etc.) kompatibel sind. Die KI arbeitet als "Layer" über Ihrem PVS, ohne in den Kern einzugreifen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Was kostet eine Implementierung?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Das hängt vom Umfang ab. Ein einfacher KI-Empfang startet bei ca. €2.500 Setup + monatliche Wartung. Komplexe Voll-Integrationen liegen höher. Im Feasibility-Check (kostenlos) erhalten Sie ein festes Angebot mit ROI-Berechnung. Meist amortisiert sich die Lösung in 3-6 Monaten.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
