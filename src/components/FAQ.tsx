"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

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
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            CGM und Medatixx bieten doch auch KI an – warum zu Ihnen kommen?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Die großen PVS-Anbieter haben oft Compliance-Lücken: US-Cloud-Anbindung (Cloud Act-Risiko), unklare MDR-Klassifizierung, fehlende AI Act-Vorbereitung. Ich baue DSGVO-konform von Anfang an – auf EU-Infrastruktur oder on-premise in Ihrer Praxis. Sie erhalten vollständige Dokumentation für MDR und AI Act. Kein Vendor-Lock-In: Quellcode geht in Escrow.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Ist es nicht zu früh für KI? Sollte ich warten?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Die regulatorischen Deadlines sind bereits gesetzt: ePA-Befüllungspflicht ab Januar 2026, EU AI Act ab August 2026. Wer jetzt plant, hat ausreichend Vorlauf für eine saubere Implementierung. Wer kurzfristig reagieren muss, zahlt erfahrungsgemäß mehr – zeitlich und finanziell.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Was passiert, wenn Sie Ihr Geschäft aufgeben?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Alle Ihre Daten sind jederzeit in Standardformaten (HL7v2, FHIR) exportierbar. Der Quellcode liegt bei einem Rechtsanwalt als Treuhänder in Escrow. Im Exit-Fall können Sie einen anderen Entwickler beauftragen oder zu einem anderen Anbieter wechseln. Es gibt keine Vendor-Lock-In-Klauseln.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Wie garantieren Sie DSGVO-Konformität?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ich arbeite nach dem Prinzip "Privacy by Design". Daten werden pseudonymisiert, bevor sie die KI erreichen. Die Server stehen ausschließlich in Deutschland (ISO 27001 zertifiziert) oder on-premise in Ihrer Praxis. Sie erhalten eine vollständige Datenschutz-Folgenabschätzung (DSFA) für Ihre Unterlagen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Funktioniert das mit meinem PVS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ja. Die Systeme nutzen standardisierte Schnittstellen (GDT/BDT, FHIR, HL7), die mit allen gängigen PVS kompatibel sind – Tomedo, Medatixx, CGM, Duria und andere. Die KI arbeitet als Schicht über Ihrem bestehenden System, ohne in den Kern einzugreifen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Was kostet eine Implementierung?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Das hängt vom Umfang ab. Ein einfacher KI-Empfang beginnt bei ca. €2.500 Setup plus monatlicher Wartung. Komplexere Integrationen liegen höher. Im Erstgespräch klären wir den Bedarf, danach erhalten Sie ein konkretes Angebot.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
