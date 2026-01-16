import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Check, Send, ShieldCheck, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-8">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">NÄCHSTE SCHRITTE</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Der erste Schritt: Klarheit statt Haftungsrisiko.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sie müssen keine fertige IT-Strategie haben. Erzählen Sie mir, welche KI-Systeme Sie planen oder bereits nutzen. Im kostenlosen 15-minütigen Erstgespräch klären wir, wo Ihre regulatorischen Fallstricke liegen und wie wir diese technisch lösen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <Card className="border-none shadow-lg order-2 lg:order-1">
                        <CardContent className="p-8">
                            <form className="space-y-6" action="mailto:daniel.kleiboldt@gmail.com" method="post" encType="text/plain">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Ihr Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="Dr. Max Mustermann"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Ihre E-Mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="praxis@beispiel.de"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Ihre Nachricht</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                        placeholder="Welche KI-Tools nutzen Sie? (z.B. Doctolib-Assistent, Telefon-KI, LLMs)"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="privacy" required className="rounded border-gray-300 accent-primary focus:ring-primary" />
                                    <label htmlFor="privacy" className="text-sm text-gray-600">
                                        Ich akzeptiere die Datenschutzerklärung
                                    </label>
                                </div>

                                <Button className="w-full group bg-black text-white hover:bg-gray-800">
                                    Anfrage senden
                                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span>100% Diskretion & Datenschutz nach DSGVO</span>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Calendly / Direct Booking */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                        <div className="bg-[#2D2D2D] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Kostenlose Compliance-Erstprüfung</h3>
                            <p className="text-white/90 mb-8 relative z-10">
                                15 Minuten via Google Meet oder Telefon. Wir bewerten Ihren Status Quo im Hinblick auf den AI Act und die ärztliche Schweigepflicht.
                            </p>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Kurz-Check Ihrer KI-Landschaft</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Identifikation akuter Haftungsrisiken</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Kein Marketing-Pitch – Fokus auf Rechtssicherheit</span>
                                </div>
                            </div>

                            <a href="https://calendly.com/daniel-kleiboldt/potenzialanalyse" target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button variant="secondary" size="lg" className="w-full relative z-10 bg-white text-[#2D2D2D] hover:bg-gray-100 font-bold">
                                    <Calendar className="mr-2 h-5 w-5" />
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
