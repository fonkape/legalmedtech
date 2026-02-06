"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle, MessageSquare, Calculator, ShieldCheck, AlertTriangle } from "lucide-react";

export function FAQ() {
    return (
        <section className="py-[var(--section-padding)] bg-background">
            <div className="container mx-auto px-4">
                <div className="text-left mb-16 max-w-4xl">
                    <ScrollReveal as="h2" className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight mx-0">
                        Antworten auf Ihre Fragen.
                    </ScrollReveal>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Item 1 */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Mein KI-Anbieter sagt, alles ist DSGVO-konform. Reicht das nicht?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Nein. "DSGVO-konform" auf einer Marketing-Seite ist eine Zusicherung des Herstellers – nicht Ihre Absicherung als Betreiber.
                                    </p>
                                    <p>
                                        Der Hersteller liefert Software. Sie setzen sie ein. Und Sie haften, wenn etwas schiefgeht.
                                    </p>
                                    <p>
                                        Beispiel: Doctolib hat C5-Testat und ISO-Zertifizierungen. Trotzdem müssen SIE als Praxis:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Datenschutz-Folgenabschätzung durchführen</li>
                                        <li>Human Oversight technisch umsetzen</li>
                                        <li>Patienteninformation rechtskonform gestalten</li>
                                    </ul>
                                    <p>
                                        Ich prüfe, was der Anbieter liefert – und was Sie selbst tun müssen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Kann ich nicht einfach einen Anwalt fragen?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Klar. Aber der sagt Ihnen, ob etwas legal ist – nicht, wie Sie es technisch umsetzen.
                                    </p>
                                    <p>
                                        Klassisches Beispiel:
                                    </p>
                                    <ul className="list-none space-y-2">
                                        <li>- Jurist: "Sie brauchen Human Oversight."</li>
                                        <li>- Sie: "Okay... und wie bau ich das?"</li>
                                        <li>- Jurist: "Keine Ahnung, fragen Sie Ihren IT-Dienstleister."</li>
                                        <li>- IT-Dienstleister: "Keine Ahnung, fragen Sie einen Juristen."</li>
                                    </ul>
                                    <p>
                                        Ich bin beides. Ich sage nicht nur "was", sondern auch "wie".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <Calculator className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Was kostet mich das?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Kommt drauf an, was Sie brauchen:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong>Quickcheck (Audit):</strong> Ab 3.000 € (Festpreis)</li>
                                        <li><strong>Sovereign AI (Implementierung):</strong> Ab 15.000 € (Projekt)</li>
                                        <li><strong>Retainer (laufende Beratung):</strong> Ab 2.000 €/Monat</li>
                                    </ul>
                                    <p>
                                        Vergleich: Eine falsche Compliance-Entscheidung kostet Sie entweder:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>50.000 € (Bußgeld Datenschutzbeauftragter)</li>
                                        <li>100.000+ € (Haftungsfall)</li>
                                        <li>Ihre Zulassung (Ärztekammer)</li>
                                    </ul>
                                    <p className="font-medium text-[#2563EB]">
                                        Ich bin günstiger als jedes dieser Szenarien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Warum sollte ich Ihnen vertrauen?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Gute Frage. Drei Gründe:
                                    </p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        <li>Ich habe 10 Jahre Corporate Compliance gemacht. Ich weiß, wie Haftung funktioniert.</li>
                                        <li>Ich verstehe KI technisch. Ich kann Code lesen und Architektur beurteilen.</li>
                                        <li>Ich bin kein Verkäufer. Wenn Ihre Lösung rechtssicher ist, sage ich das. Wenn nicht, sage ich das auch.</li>
                                    </ol>
                                    <p className="italic text-gray-500">
                                        Referenzen auf Anfrage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Ist das nicht alles übertrieben? Bisher ist doch nichts passiert.
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Antwort: Noch nicht.
                                    </p>
                                    <p>
                                        Der EU AI Act gilt seit August 2024. Die Hochrisiko-Anforderungen greifen ab August 2026.
                                    </p>
                                    <p>
                                        Wir sind in der Übergangsphase. Aktuell passiert wenig – aber das ändert sich.
                                    </p>
                                    <p>
                                        Vergleich: DSGVO galt ab Mai 2018. Die ersten großen Bußgelder kamen 2019/2020. Wer vorher compliance war, hatte Ruhe. Der Rest zahlte.
                                    </p>
                                    <p className="font-bold">
                                        Gleiches Muster beim AI Act.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
