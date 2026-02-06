"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle, MessageSquare, Calculator, ShieldCheck, ShieldAlert } from "lucide-react";

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
                    {/* Item 1: ChatGPT & DSGVO */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Ist der Einsatz von ChatGPT in der Arztpraxis DSGVO-konform?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        <strong>Vorsicht:</strong> Die kostenlose Standard-Version von ChatGPT speichert Eingaben zum Training und hostet Daten in den USA. Die Eingabe von Patientendaten dort ist ein <span className="font-semibold">schwerer Datenschutzverstoß</span>.
                                    </p>
                                    <p>
                                        Für eine rechtssichere Nutzung benötigen Sie:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1 bg-white/50 p-4 rounded-lg border border-gray-100">
                                        <li>Eine explizite Einwilligung (oder Anonymisierung).</li>
                                        <li>Einen AV-Vertrag (Auftragsverarbeitung) mit OpenAI.</li>
                                        <li>Die Enterprise-Version mit &quot;Zero Data Retention&quot;-Policy.</li>
                                    </ul>
                                    <p>
                                        <strong>Empfehlung:</strong> Setzen Sie auf lokale LLMs (&quot;Sovereign AI&quot;), die Ihre Praxis-IT nie verlassen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Haftung */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Wer haftet, wenn KI in der Praxis einen Fehler macht?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Immer der Arzt. Auch der EU AI Act ändert am Grundsatz des <strong>„Human in the Loop“</strong> nichts.
                                    </p>
                                    <p>
                                        Sie haften für Behandlungsfehler (§ 630a BGB), auch wenn die KI den falschen Vorschlag gemacht hat. Der EU AI Act verschärft jedoch Ihre <strong>Überwachungspflicht (Human Oversight)</strong>:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Sie müssen verstehen, wie die KI zu ihrem Ergebnis kommt.</li>
                                        <li>Sie müssen in der Lage sein, die KI jederzeit zu überstimmen.</li>
                                        <li>Dokumentieren Sie Ihre Kontrolle, um Organisationsverschulden auszuschließen.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Bußgelder AI Act */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <Calculator className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Welche Bußgelder drohen bei Nichteinhaltung des EU AI Act?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Die Sanktionen gehen deutlich über die DSGVO hinaus und können existenzbedrohend sein:
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-sm">
                                        <div className="bg-white p-3 rounded border border-gray-200 flex justify-between">
                                            <span>Verbotene KI-Praktiken</span>
                                            <span className="font-bold">Bis 35 Mio. € (oder 7% Umsatz)</span>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-gray-200 flex justify-between">
                                            <span>Verstoß gegen Pflichten (Hochrisiko-KI)</span>
                                            <span className="font-bold">Bis 15 Mio. € (oder 3% Umsatz)</span>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-gray-200 flex justify-between">
                                            <span>Falsche Angaben</span>
                                            <span className="font-bold">Bis 7,5 Mio. € (oder 1,5% Umsatz)</span>
                                        </div>
                                    </div>
                                    <p>
                                        Für Ärzte besonders relevant: Der Einsatz von nicht-konformen Hochrisiko-Systemen (z.B. unzulässige Diagnosesoftware) fällt unter die 15 Mio. € Kategorie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 4: Schulungspflicht */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Muss ich als Arzt eine Schulungspflicht für KI erfüllen? (AI Literacy)
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Ja. Nach <strong>Art. 4 EU AI Act</strong> sind Betreiber verpflichtet, Maßnahmen zur „KI-Kompetenz“ (AI Literacy) sicherzustellen.
                                    </p>
                                    <p>
                                        Das bedeutet konkret:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Sie und Ihr Praxispersonal müssen die Funktionsweise und Grenzen der eingesetzten KI verstehen.</li>
                                        <li>Sie müssen Risiken (z.B. Halluzinationen, Bias) erkennen können.</li>
                                    </ul>
                                    <p>
                                        Ohne nachweisbare Schulung kann im Schadensfall ein Organisationsverschulden angenommen werden.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 5: DSFA */}
                    <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent transition-theme hover:border-border-subtle">
                        <div className="flex gap-4 items-start">
                            <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-[#2563EB] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#2563EB] mb-4">
                                    Brauche ich eine Datenschutz-Folgenabschätzung (DSFA) für KI in meiner Praxis?
                                </h3>
                                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        In den meisten Fällen: <strong>Ja.</strong>
                                    </p>
                                    <p>
                                        Nach Art. 35 DSGVO ist eine DSFA zwingend, wenn „neue Technologien“ mit einem voraussichtlich hohen Risiko für die Rechte Betroffener eingesetzt werden. KI in der Gesundheitsversorgung erfüllt diese Kriterien fast immer (Verarbeitung sensibler Gesundheitsdaten gem. Art. 9 DSGVO + automatisierte Analyse).
                                    </p>
                                    <p>
                                        Starten Sie kein KI-Projekt ohne schriftliche Risikoanalyse.
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
