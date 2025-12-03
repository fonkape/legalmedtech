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
                            Jurist. Entwickler. Architekt.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Ich bin Daniel Kleiboldt. 10 Jahre war ich Konzernjurist – Compliance, Vertragsrecht, die Schnittstelle zwischen "geht nicht" und "muss aber". Ich habe gesehen, wie gute Ideen an Rechtsabteilungen sterben. Und wie schlechte Ideen durchgewunken werden, weil niemand die richtigen Fragen stellt.
                            </p>
                            <p>
                                Heute baue ich selbst mit. Ich absolviere gerade eine intensive Ausbildung im AI Engineering – nicht um Entwickler zu werden, sondern um beide Seiten zu verstehen. Mein Ziel: KI-Lösungen, die von Anfang an rechtssicher gebaut sind. Nicht nachträglich geflickt.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Jurist (WWU Münster)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">AI Engineer (in training)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">10 Jahre Corporate Law & Compliance</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Spezialisierung: Medizin (DSGVO Art. 9, MDR, AI Act)</span>
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
