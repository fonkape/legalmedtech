import { Search, Hammer, Rocket, Quote } from "lucide-react";

export function SolutionOverview() {
    return (
        <section className="py-24 bg-sand/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        Wie wir Ihre Praxis transformieren
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Kein 3-Jahres-Projekt. Keine IT-Abteilung nötig. Keine versteckten Kosten.
                        Nur 3 klare Schritte.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto mb-20">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <Search className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-4">
                                    €0 Kosten
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Woche 1: Feasibility Check</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    15 Min. Gespräch + 48h Analyse. Wir prüfen: Lohnt sich KI für Ihre Praxis? Welche Lösung passt? Was kostet es? Sie bekommen eine ehrliche Go/No-Go-Empfehlung.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <Hammer className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-4">
                                    4-8 Wochen
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Woche 2-8: Implementierung</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Wir bauen die Lösung DSGVO-konform. Integration mit Ihrem PVS (CGM, Medatixx, etc.). Schulung Ihres Teams (2h). Testphase mit 5 Patienten. Alles remote möglich.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <Rocket className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-4">
                                    Go-Live
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ab Woche 9: Live & Support</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Die KI läuft. Sie sparen 2-4 Stunden täglich. Wir monitoren Performance, beheben Bugs, optimieren weiter. Lifetime-Support inklusive – kein Vendor-Lock-In.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-sand/30 rounded-full text-primary mb-6">
                        <Quote className="w-5 h-5" />
                    </div>
                    <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-4">
                        "Legal Engineering bedeutet: Recht ist TEIL der Software – nicht ein Hindernis, das danach kommt."
                    </p>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        – Daniel Kleiboldt
                    </p>
                </div>
            </div>
        </section>
    );
}
