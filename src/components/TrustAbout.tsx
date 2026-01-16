import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TrustAbout() {
    return (
        <section id="about" className="py-24 bg-sand/20">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Über mich</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-8 leading-tight">
                            Jurist. Engineer. Architekt.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Ich bin Daniel Kleiboldt. 10 Jahre lang habe ich als Konzernjurist an der Schnittstelle zwischen Regulatorik und Business gearbeitet – von komplexem Vertragsrecht bis hin zur Konzern-Compliance. Ich habe erlebt, wie Innovationen in Rechtsabteilungen scheitern, weil das technische Verständnis fehlte, und wie riskante Lösungen durchgewunken wurden, weil niemand die richtigen Fragen stellte.
                            </p>
                            <p>
                                Heute baue ich die Brücke selbst. Als angehender AI Engineer verbinde ich tiefes juristisches Fachwissen mit technischer Umsetzungskompetenz. Mein Ziel: Healthcare-KI, die nicht nachträglich 'geflickt' wird, sondern von der ersten Codezeile an rechtssicher konzipiert ist – Privacy by Design statt Privacy by Panik.
                            </p>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-900 font-bold block">Jurist (WWU Münster):</span>
                                    <span className="text-gray-700">Diplom-Jurist mit Fokus auf Wirtschaftsrecht.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-900 font-bold block">10 Jahre Corporate Law:</span>
                                    <span className="text-gray-700">Tiefenexpertise in Compliance & Vertragsgestaltung.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-900 font-bold block">AI Engineer (in training):</span>
                                    <span className="text-gray-700">Fokus auf LLM-Architekturen und technische Kapselung.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-900 font-bold block">Spezialisierung Healthcare:</span>
                                    <span className="text-gray-700">Experte für DSGVO Art. 9, MDR und den EU AI Act.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <Card className="w-full max-w-md aspect-[3/4] overflow-hidden relative border-none shadow-xl">
                            <img
                                src="/profile2.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover brightness-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                <p className="text-white font-serif text-xl">Daniel Kleiboldt</p>
                                <p className="text-white/80 text-sm">Jurist & Software Engineer</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
