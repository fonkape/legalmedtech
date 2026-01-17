import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Check, Send, ShieldCheck, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-[var(--section-padding)] transition-theme theme-legacy:bg-background theme-precision:section-slate">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 theme-precision:text-left theme-precision:max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-custom shadow-sm mb-8 transition-theme theme-precision:bg-white theme-precision:border-primary theme-precision:border theme-precision:text-primary">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold tracking-wide uppercase">NÄCHSTE SCHRITTE</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Der erste Schritt: Klarheit statt Haftungsrisiko.
                    </h2>
                    <p className="text-lg text-text-primary/70 max-w-2xl">
                        Sie müssen keine fertige IT-Strategie haben. Erzählen Sie mir, welche KI-Systeme Sie planen oder bereits nutzen. Im kostenlosen 15-minütigen Erstgespräch klären wir, wo Ihre regulatorischen Fallstricke liegen und wie wir diese technisch lösen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto bento-grid">
                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-custom border border-border-subtle order-2 lg:order-1 transition-theme shadow-sm hover:border-primary">
                        <form className="space-y-6" action="mailto:daniel.kleiboldt@gmail.com" method="post" encType="text/plain">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground uppercase tracking-wider">Ihr Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-custom border border-border-subtle focus:border-primary outline-none transition-all bg-background"
                                    placeholder="Dr. Max Mustermann"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground uppercase tracking-wider">Ihre E-Mail *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-custom border border-border-subtle focus:border-primary outline-none transition-all bg-background"
                                    placeholder="praxis@beispiel.de"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground uppercase tracking-wider">Ihre Nachricht</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-custom border border-border-subtle focus:border-primary outline-none transition-all resize-none bg-background"
                                    placeholder="Welche KI-Tools nutzen Sie? (z.B. Doctolib-Assistent, Telefon-KI, LLMs)"
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="privacy" required className="rounded-none border-border-subtle accent-primary focus:ring-primary h-4 w-4" />
                                <label htmlFor="privacy" className="text-sm text-foreground/60">
                                    Ich akzeptiere die Datenschutzerklärung
                                </label>
                            </div>

                            <Button className="w-full group" size="lg">
                                Anfrage senden
                                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <div className="flex items-center justify-center gap-2 text-xs opacity-40 mt-4">
                                <ShieldCheck className="w-3 h-3" />
                                <span>100% Diskretion & Datenschutz nach DSGVO</span>
                            </div>
                        </form>
                    </div>

                    {/* Calendly / Direct Booking */}
                    <div className="flex flex-col justify-stretch order-1 lg:order-2 h-full">
                        <div className="bg-[#121212] rounded-custom p-8 text-white border border-white/10 relative overflow-hidden flex flex-col h-full transition-theme hover:border-primary">
                            <h3 className="text-3xl font-semibold mb-6 relative z-10">Kostenlose Compliance-Erstprüfung</h3>
                            <p className="text-white/70 text-lg mb-8 relative z-10 leading-relaxed">
                                15 Minuten via Google Meet oder Telefon. Wir bewerten Ihren Status Quo im Hinblick auf den AI Act und die ärztliche Schweigepflicht.
                            </p>

                            <div className="space-y-6 mb-12 relative z-10 flex-1">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 bg-primary/10 border border-primary/20 rounded-custom group-hover:bg-primary transition-colors">
                                        <Check className="h-5 w-5 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-lg">Kurz-Check Ihrer KI-Landschaft</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 bg-primary/10 border border-primary/20 rounded-custom group-hover:bg-primary transition-colors">
                                        <Check className="h-5 w-5 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-lg">Identifikation akuter Haftungsrisiken</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 bg-primary/10 border border-primary/20 rounded-custom group-hover:bg-primary transition-colors">
                                        <Check className="h-5 w-5 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-lg">Fokus auf technische Rechtssicherheit</span>
                                </div>
                            </div>

                            <a href="https://calendly.com/daniel-kleiboldt/potenzialanalyse" target="_blank" rel="noopener noreferrer" className="block w-full mt-auto">
                                <Button variant="primary" size="lg" className="w-full relative z-10 uppercase tracking-widest font-bold">
                                    <Calendar className="mr-3 h-5 w-5" />
                                    Termin direkt buchen
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
