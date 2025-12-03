"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { MessageCircle } from "lucide-react";

export function FAQ() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-8">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">KLARTEXT</span>
                    </div>
                    <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">
                        Antworten auf Ihre Fragen.
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Muss ich technisches Wissen mitbringen?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Nein. Das ist mein Job. Sie erklären mir Ihre medizinischen Abläufe und Probleme. Ich übersetze das in technische Anforderungen und juristische Vorgaben. Sie müssen nicht programmieren können, Sie müssen nur wissen, was Sie verbessern wollen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Lohnt sich der Aufwand für eine einzelne Hausarztpraxis?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Absolut. Ein rechtssicherer KI-Telefonassistent kann Ihrem Team täglich 60 bis 90 Minuten Telefonzeit abnehmen. Die Investition in eine saubere Planung amortisiert sich meist innerhalb weniger Monate durch entlastetes Personal und zufriedenere Patienten.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Bauen Sie die Software selbst?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ich arbeite nach dem Architekten-Prinzip. Ich verantworte die Konzeption, die Rechtssicherheit und die Architektur. Für die reine Programmierung (Coding) arbeite ich bei Bedarf mit spezialisierten Entwicklern zusammen. Sie haben aber immer nur mich als verantwortlichen Ansprechpartner.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Warum kann ich nicht einfach ChatGPT nutzen?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            In der Standard-Version ist das datenschutzrechtlich hochriskant (Server in den USA, Nutzung Ihrer Daten zum Training). Ich zeige Ihnen Wege, wie Sie moderne KI-Modelle nutzen können, die technisch "gekapselt" sind, sodass keine Patientendaten abfließen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Was genau regelt der AI Act für Arztpraxen?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Der AI Act klassifiziert KI-Systeme nach Risiko. Vieles, was in Arztpraxen zum Einsatz kommt, fällt in die Hochrisiko-Kategorie – etwa Software, die bei Diagnosen unterstützt oder Patientendaten verarbeitet. Das bedeutet: Dokumentationspflichten, menschliche Aufsicht, Transparenz gegenüber Patienten. Die gute Nachricht: Wer heute sauber plant, erfüllt die Anforderungen fast nebenbei. Wer erst 2026 aufwacht, hat ein Problem.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Wann ist eine KI ein Medizinprodukt?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Sobald Software dazu dient, Krankheiten zu diagnostizieren, zu behandeln oder zu überwachen, kann sie unter die Medizinprodukteverordnung (MDR) fallen – auch wenn sie "nur" Empfehlungen ausspricht. Ein KI-Telefonassistent, der Termine vergibt, ist kein Medizinprodukt. Eine KI, die aus Symptomen eine Triage-Empfehlung ableitet, möglicherweise schon. Die Abgrenzung ist nicht trivial, aber entscheidend: Medizinprodukte brauchen eine CE-Kennzeichnung und müssen ein Konformitätsbewertungsverfahren durchlaufen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Darf meine MFA die KI-Dokumentation freigeben?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Das kommt auf die Dokumentation an. Reine Verwaltungsdaten (Termine, Stammdaten) sind unproblematisch. Bei medizinischer Dokumentation – also allem, was in die Patientenakte fließt – bleibt die ärztliche Verantwortung bestehen. Die MFA kann vorarbeiten, aber die Freigabe medizinischer Inhalte sollte durch den Arzt erfolgen. Das ist keine KI-Frage, sondern Berufsrecht. Die KI ändert daran nichts – sie macht es nur sichtbarer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
