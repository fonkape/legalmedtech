import { Code, CheckSquare, Settings } from "lucide-react";

export function SolutionOverview() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Unser Ansatz: Legal Engineering
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Technologie und Recht aus einer Hand – für rechtssichere KI in Ihrer Praxis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {/* Pillar 1 */}
                    <div className="relative">
                        <div className="text-6xl font-serif font-bold text-primary/10 absolute -top-10 -left-4 z-0">01</div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-sand">
                                <Code className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Compliance by Design</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ich baue DSGVO, MDR und AI Act direkt in die Systemarchitektur ein – nicht als nachträglichen Zusatz.
                                Das Recht ist Teil des Codes.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="relative">
                        <div className="text-6xl font-serif font-bold text-primary/10 absolute -top-10 -left-4 z-0">02</div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-sand">
                                <CheckSquare className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Feasibility Check</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Bevor Sie investieren: Ich prüfe Ihre KI-Idee auf rechtliche Machbarkeit, technische Umsetzbarkeit und ROI.
                                Go/No-Go in 48 Stunden.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="relative">
                        <div className="text-6xl font-serif font-bold text-primary/10 absolute -top-10 -left-4 z-0">03</div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-sand">
                                <Settings className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Implementierung & Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ich liefere funktionierende Prototypen, schule Ihr Team und betreue Sie langfristig.
                                Keine PDF-Gutachten, sondern echte Systeme.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-sand/30 rounded-3xl p-8 md:p-12 text-center relative">
                    <div className="text-primary text-6xl font-serif absolute top-4 left-8 opacity-20">&quot;</div>
                    <blockquote className="text-xl md:text-2xl font-serif text-text-primary mb-6 relative z-10">
                        Legal Engineering bedeutet: Ihre Innovationen werden nicht von Juristen gebremst,
                        sondern von Anfang an rechtssicher gebaut.
                    </blockquote>
                    <cite className="not-italic font-medium text-gray-600 block">
                        – Daniel Kleiboldt, Legal Engineer
                    </cite>
                </div>
            </div>
        </section>
    );
}
