import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TrustAbout() {
    return (
        <section className="py-24 bg-sand/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8">
                            <User className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Über mich</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-8 leading-tight">
                            Über mich
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                10 Jahre als Jurist haben mir gezeigt: KI-Projekte scheitern nicht an Technologie, sondern an rechtlichen Fragen. Heute beantworte ich beide: Code und Gesetz.
                            </p>
                            <p>
                                Legal Engineering bedeutet: DSGVO-Konformität ist Teil der Software. MDR-Compliance ist Teil der Architektur. Keine nachträglichen Korrekturen. Keine Bußgeldrisiken.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Jurist (WWU Münster)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">AI Engineer</span>
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
                        <Card className="w-full max-w-md aspect-[3/4] overflow-hidden relative border-none shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/profile.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                <p className="text-white font-serif text-xl">Daniel Kleiboldt</p>
                                <p className="text-white/80 text-sm">Legal Engineer & Founder</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
