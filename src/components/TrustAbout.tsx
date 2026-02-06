import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustAbout() {
    return (
        <section id="about" className="py-[var(--section-padding)] transition-theme theme-legacy:bg-sand/20 theme-precision:section-onyx">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1 text-left">
                        <ScrollReveal as="h2" className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight transition-theme mx-0">
                            Jurist. AI Engineer. Architekt.
                        </ScrollReveal>

                        <div className="space-y-6 text-lg theme-legacy:text-gray-600 theme-precision:text-white/70 leading-relaxed transition-theme">
                            <p>
                                Ich bin Daniel Kleiboldt. 10 Jahre Konzernjurist, spezialisiert auf Compliance an der Schnittstelle zwischen Regulatorik und Business.
                            </p>
                            <p>
                                Ich habe erlebt, wie Innovationen in Rechtsabteilungen scheitern – nicht weil sie illegal waren, sondern weil niemand die richtigen Fragen stellte.
                            </p>
                            <p>
                                Heute schließe ich diese Lücke. Als Legal Engineer verbinde ich tiefes juristisches Fachwissen mit technischer Umsetzungskompetenz. Ich baue Healthcare-KI, die von der ersten Codezeile an rechtssicher konzipiert ist.
                            </p>
                            <p className="font-bold text-xl text-foreground pt-2">
                                Privacy by Design. Nicht Privacy by Panik.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 border border-border-subtle rounded-custom transition-theme theme-precision:bg-white/5">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block">Diplom-Jurist (WWU Münster):</span>
                                    <span className="text-sm opacity-70">Wirtschaftsrecht & Compliance</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 border border-border-subtle rounded-custom transition-theme theme-precision:bg-white/5">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block">10 Jahre Corporate Law:</span>
                                    <span className="text-sm opacity-70">Vertragsgestaltung & Risk Management</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 border border-border-subtle rounded-custom transition-theme theme-precision:bg-white/5">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block">AI Engineer:</span>
                                    <span className="text-sm opacity-70">Spezialisiert auf LLM-Architekturen & Privacy</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 border border-border-subtle rounded-custom transition-theme theme-precision:bg-white/5">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block">Healthcare-Compliance:</span>
                                    <span className="text-sm opacity-70">EU AI Act, DSGVO Art. 9, MDR</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[3/4] transition-theme theme-legacy:rounded-3xl theme-precision:rounded-none overflow-hidden border border-border-subtle theme-precision:border-white/20">
                            <img
                                src="/profile2.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover transition-all theme-precision:grayscale hover:grayscale-0 duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 theme-precision:bg-primary/20 theme-precision:backdrop-blur-sm theme-precision:border-t theme-precision:border-white/20 transition-theme">
                                <p className="text-white text-2xl font-bold">Daniel Kleiboldt</p>
                                <p className="text-white/80 text-sm tracking-widest uppercase mt-1">Legal Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
