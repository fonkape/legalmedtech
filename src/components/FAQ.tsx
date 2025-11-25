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
                            Ich liefere keine Massenware, sondern "Legal Engineering": Ich übersetze rechtliche Vorgaben (DSGVO, AI Act) direkt in Ihren individuellen Praxis-Workflow. Bei großen Anbietern ist Compliance oft nur ein Standard-Häkchen – bei mir ist sie Teil der Systemarchitektur. Zudem erhalten Sie eine technische Dokumentation, die Audits standhält.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Ist es nicht zu früh für KI? Sollte ich warten?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Die regulatorischen Deadlines stehen: ePA-Pflicht ab Januar 2026, EU AI Act ab August 2026. Wer jetzt plant, handelt souverän. Wer kurzfristig reagieren muss, zahlt erfahrungsgemäß mehr – sowohl finanziell als auch durch Reibungsverluste im Praxisalltag.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Was passiert, wenn Sie Ihr Geschäft aufgeben?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Sie gehen kein Risiko ein. Ihr Quellcode wird bei einem Treuhänder (Escrow) hinterlegt. Alle Daten sind jederzeit in Standardformaten (HL7/FHIR) exportierbar. Es gibt keinen Vendor-Lock-In.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Wie garantieren Sie DSGVO-Konformität?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Durch "Privacy by Design". Daten werden verarbeitet, bevor sie externe KI-Modelle erreichen. Ich bereite die technische Seite der Datenschutz-Folgenabschätzung (DSFA) so vor, dass die technischen und organisatorischen Maßnahmen (TOMs) lückenlos dokumentiert sind.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Funktioniert das mit meinem PVS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ja. Ich nutze ausschließlich offizielle Schnittstellen (GDT/BDT, FHIR, HL7). Die KI legt sich als intelligente Schicht über Ihr bestehendes System (z.B. Tomedo, Medatixx, CGM), ohne in den sensiblen Kern einzugreifen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
                            Was kostet eine Implementierung?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Das hängt von Ihren Anforderungen ab. Da ich maßgeschneiderte, rechtssichere Infrastruktur entwickle und keine Standard-Software von der Stange verkaufe, kalkulieren wir den Aufwand individuell nach unserem Erstgespräch.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
