"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { MessageCircle } from "lucide-react";

export function FAQ() {
    return (
        <section className="py-[var(--section-padding)] transition-theme theme-legacy:bg-background theme-precision:section-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-custom shadow-sm mb-8 theme-precision:bg-white theme-precision:border-primary theme-precision:border theme-precision:text-primary transition-theme">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold tracking-wide uppercase">KLARTEXT</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Antworten auf Ihre Fragen.
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-0 border-t border-border-subtle transition-theme">
                    <AccordionItem value="item-1" className="border-b border-border-subtle px-0 transition-theme theme-legacy:px-6 theme-legacy:bg-white theme-legacy:rounded-2xl theme-legacy:shadow-sm theme-legacy:mb-4">
                        <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline text-left py-6">
                            Warum reicht "DSGVO-konform" auf der Anbieter-Website nicht aus?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-lg">
                            "DSGVO-konform" ist oft ein Marketing-Buzzword ohne technische Tiefe. Während Anbieter die Konformität ihrer Software versprechen, bleiben die Betreiberpflichten (DSFA, AI Literacy, Human Oversight) vollumfänglich bei Ihnen hängen. Ich prüfe nicht nur das Versprechen, sondern die tatsächliche Architektur.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-b border-border-subtle px-0 transition-theme theme-legacy:px-6 theme-legacy:bg-white theme-legacy:rounded-2xl theme-legacy:shadow-sm theme-legacy:mb-4">
                        <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline text-left py-6">
                            Was ist das Risiko bei KI-Assistenten von großen Plattformen wie Doctolib?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-lg">
                            Doctolib liefert Technologie, aber keine individuelle Rechtsberatung – das schließt das Unternehmen in seiner Dokumentation explizit aus. Da diese Systeme auf US-Cloud-Infrastrukturen basieren, besteht ein latentes Risiko für die ärztliche Schweigepflicht (§ 203 StGB). Zudem haften Sie persönlich, wenn die KI halluziniert und Sie das Ergebnis ungeprüft übernehmen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-b border-border-subtle px-0 transition-theme theme-legacy:px-6 theme-legacy:bg-white theme-legacy:rounded-2xl theme-legacy:shadow-sm theme-legacy:mb-4">
                        <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline text-left py-6">
                            Bieten Sie auch Lösungen ohne Cloud-Anbindung an?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-lg">
                            Ja, das ist mein "Goldstandard": Sovereign AI. Ich implementiere leistungsstarke Open-Source-Modelle direkt auf Ihrer eigenen Hardware in der Praxis oder in souveränen deutschen Clouds. So verlassen Patientendaten nie Ihre physische Kontrolle, was die maximale Sicherheit für § 203 StGB bietet.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-b border-border-subtle px-0 transition-theme theme-legacy:px-6 theme-legacy:bg-white theme-legacy:rounded-2xl theme-legacy:shadow-sm theme-legacy:mb-4">
                        <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline text-left py-6">
                            Mein Vertrag läuft bis 2027 – warum muss ich jetzt wegen des AI Act handeln?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-lg">
                            Am 2. August 2026 greift der EU AI Act voll durch. Viele heutige Systeme werden dann als "Hochrisiko-KI" eingestuft und unterliegen strengsten Dokumentationspflichten. Wer heute Verträge ohne Konformitäts-Garantie unterschreibt, investiert in eine Lösung, die 2026 möglicherweise nicht mehr legal betreibbar ist.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-b border-border-subtle px-0 transition-theme theme-legacy:px-6 theme-legacy:bg-white theme-legacy:rounded-2xl theme-legacy:shadow-sm theme-legacy:mb-4">
                        <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline text-left py-6">
                            Was genau macht ein Legal Engineer anders als ein Anwalt?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-lg">
                            Ein Anwalt sagt Ihnen, was nicht geht. Ich baue Ihnen die Lösung, die geht. Legal Engineering verschmilzt juristische Exzellenz mit technischer Umsetzung. Ich schreibe das Datenschutzkonzept und implementiere gleichzeitig die technischen Guardrails (Compliance-as-Code), die Verstöße technisch verhindern, statt sie nur zu verbieten.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
