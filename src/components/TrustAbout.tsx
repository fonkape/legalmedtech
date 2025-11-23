import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TrustAbout() {
    return (
        <section className="py-24 bg-sand/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Über mich
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                            Kein Anwalt. Kein reiner Technologe. <br />
                            <span className="text-primary">Der Übersetzer.</span>
                        </h3>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Ich bin Daniel Kleiboldt, 41, Diplom-Jurist mit 10 Jahren Erfahrung in Corporate Law –
                                und aktuell in der Ausbildung zum AI Engineer.
                            </p>
                            <p>
                                Ich habe gesehen, wie brillante KI-Projekte scheitern, weil Rechtsabteilungen sie blockieren.
                                Und ich habe gesehen, wie Ärzte sich nicht trauen, KI einzusetzen, weil niemand ihnen sagen kann:
                                &quot;Das ist rechtssicher.&quot;
                            </p>
                            <p className="font-medium text-text-primary">
                                Meine Mission: Die Lücke schließen zwischen dem, was technisch möglich ist, und dem, was rechtlich erlaubt ist.
                            </p>
                        </div>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-700">Diplom-Jurist, WWU Münster (10 Jahre Corporate Law)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-700">AI Engineering Bootcamp, Masterschool (Abschluss Juli 2025)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-700">Spezialisierung: DSGVO Art. 9, MDR, AI Act</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <Card className="w-full max-w-md aspect-[3/4] overflow-hidden relative border-none shadow-xl">
                            <img
                                src="/profile.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
