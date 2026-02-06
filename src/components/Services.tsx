import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Services() {
    return (
        <section id="angebot" className="py-[var(--section-padding)] bg-background">
            <div className="container mx-auto px-4">
                <div className="text-left mb-16 max-w-4xl">
                    <ScrollReveal as="h2" className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight mx-0">
                        Drei Wege zur Rechtssicherheit. <br className="hidden md:block" /> Wählen Sie Ihren.
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {/* Card 1: Compliance-Quickcheck */}
                    <div className="bg-card p-8 rounded-custom border border-border-subtle flex flex-col h-full transition-theme hover:border-primary">
                        <div className="mb-6 flex-grow">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Compliance-Quickcheck</h3>
                            <p className="text-sm text-gray-400 italic mb-6">Für MVZs, Fachkliniken, die KI bereits nutzen</p>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Sie nutzen bereits Doctolib, CGM oder andere KI-Tools? <br />
                                Ich prüfe Ihre Systeme auf:
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Betreiberpflichten nach EU AI Act</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Haftungsrisiken (Human Oversight)</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>DSFA-Notwendigkeit (Art. 35 DSGVO)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto border-t border-border-subtle pt-6">
                            <div className="mb-6 space-y-2">
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Ergebnis:</span>
                                    <span className="font-bold text-foreground text-right w-2/3">Audit-Report + Prioritäten-Roadmap</span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Dauer:</span>
                                    <span className="font-bold text-foreground">3-5 Arbeitstage</span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Preis:</span>
                                    <span className="font-bold text-foreground">Ab 3.000 € (Festpreis)</span>
                                </div>
                            </div>

                            <Link href="#contact" className="block">
                                <Button size="lg" variant="primary" className="w-full group text-left justify-center">
                                    <ArrowRight className="w-4 h-4 mr-2" />
                                    Quickcheck buchen
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Sovereign AI Implementation */}
                    <div className="bg-card p-8 rounded-custom border border-border-subtle flex flex-col h-full transition-theme hover:border-primary">
                        <div className="mb-6 flex-grow">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Sovereign AI Implementation</h3>
                            <p className="text-sm text-gray-400 italic mb-6">Für Premium-Privatpraxen, spezialisierte MVZs</p>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Absolute Datensouveränität. Ihre KI verlässt niemals Ihre Hardware. <br />
                                Ich implementiere:
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Open-Source-Modelle (Llama, Mistral) lokal</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Privacy-by-Design-Architektur</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Volle Wahrung § 203 StGB (Schweigepflicht)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto border-t border-border-subtle pt-6">
                            <div className="mb-6 space-y-2">
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Ergebnis:</span>
                                    <span className="font-bold text-foreground text-right w-2/3">Ihr "digitales Fort Knox"</span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Dauer:</span>
                                    <span className="font-bold text-foreground">4-8 Wochen (je nach Scope)</span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Preis:</span>
                                    <span className="font-bold text-foreground">Ab 15.000 € (Projekt)</span>
                                </div>
                            </div>

                            <Link href="#contact" className="block">
                                <Button size="lg" variant="primary" className="w-full group text-left justify-center">
                                    <ArrowRight className="w-4 h-4 mr-2" />
                                    Erstgespräch vereinbaren
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3: Technical Compliance Engineering */}
                    <div className="bg-card p-8 rounded-custom border border-border-subtle flex flex-col h-full transition-theme hover:border-primary">
                        <div className="mb-6 flex-grow">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Technical Compliance Engineering</h3>
                            <p className="text-sm text-gray-400 italic mb-6">Für KI-Anbieter, Health-Tech Startups</p>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ihre Entwickler bauen Features. Ich baue Compliance in den Code. <br />
                                Leistungen:
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Privacy-Proxies & Middleware-Entwicklung</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>MDR/AI Act-Zertifizierungsbegleitung</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Compliance-as-Code (keine AGBs, echte Sicherheit)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto border-t border-border-subtle pt-6">
                            <div className="mb-6 space-y-2">
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Ergebnis:</span>
                                    <span className="font-bold text-foreground text-right w-2/3">Rechtssichere Architektur von Zeile 1</span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Dauer:</span>
                                    <span className="font-bold text-foreground">Projekt- oder Retainer-Basis</span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="text-gray-500">Preis:</span>
                                    <span className="font-bold text-foreground">Auf Anfrage (ab 2.000 €/Tag)</span>
                                </div>
                            </div>

                            <Link href="#contact" className="block">
                                <Button size="lg" variant="primary" className="w-full group text-left justify-center">
                                    <ArrowRight className="w-4 h-4 mr-2" />
                                    Projektanfrage senden
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
