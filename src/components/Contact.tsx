import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Check, Send, ShieldCheck } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Kontakt
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Bei Fragen oder Interesse an einem Erstgespräch erreichen Sie mich hier.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Ihr Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="Dr. Max Mustermann"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="praxis@beispiel.de"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Ihre Nachricht</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                        placeholder="Worum geht es? Welches Problem möchten Sie lösen?"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="privacy" required className="rounded border-gray-300 text-primary focus:ring-primary" />
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
                    <div className="flex flex-col justify-center">
                        <div className="bg-primary rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Oder direkt Termin buchen</h3>
                            <p className="text-white/90 mb-8 relative z-10">
                                15 Minuten Erstberatung via Zoom – kostenlos & unverbindlich. Finden Sie direkt einen passenden Slot.
                            </p>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Video-Call oder Telefon</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Keine Vorbereitung nötig</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Unverbindlich & kostenfrei</span>
                                </div>
                            </div>

                            <Button variant="secondary" size="lg" className="w-full relative z-10 bg-white text-primary hover:bg-gray-100 font-bold">
                                <Calendar className="mr-2 h-5 w-5" />
                                Termin wählen
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
