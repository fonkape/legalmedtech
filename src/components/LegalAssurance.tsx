import { AlertTriangle, Gavel, Scale, CheckCircle2 } from "lucide-react";

export function LegalAssurance() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Die 3 teuersten Fehler, die Ärzte mit KI machen
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
                        Ohne Legal Engineering drohen Bußgelder, Abrechnungsausschluss, Haftungsrisiken.
                        Ein einziger Fehler kann Ihre Praxis existenziell bedrohen. So schützen Sie sich.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Risk 1 */}
                    <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-100 rounded-xl text-red-600">
                                <Gavel className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded-full">
                                Risiko: HOCH
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">DSGVO-Bußgeld: €20 Millionen</h3>
                        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                            Real Case: Eine Klinik nutzte US-Cloud für Patientendaten. Aufsichtsbehörde: €4,5 Mio. Bußgeld + Datenverarbeitung gestoppt. Ohne DSGVO-Audit VOR KI-Einsatz riskieren Sie alles.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
                            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Die Lösung
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Legal Audit VOR Implementierung
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> EU-Cloud (Azure DE / AWS Frankfurt)
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> AVV + DSFA für jeden Anbieter
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Risk 2 */}
                    <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                                Risiko: EXISTENZ
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Illegales Medizinprodukt</h3>
                        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                            KI mit diagnostischer Funktion = Medizinprodukt (MDR Klasse IIa). Ohne CE-Kennzeichnung: Strafrecht + §372 SGB V: Abrechnungsausschluss. Ihre Praxis kann nicht mehr mit Kassen abrechnen.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
                            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Die Lösung
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Zweckbestimmung strategisch definieren
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> KEIN Medizinprodukt (wo möglich)
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> AI Act Roadmap bis 2026
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Risk 3 */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gray-200 rounded-xl text-gray-700">
                                <Scale className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                Risiko: HAFTUNG
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Sie zahlen den Schaden</h3>
                        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                            LG Kiel (Nov. 2024): Arzt haftet für KI-Fehler, auch wenn Software fehlerhaft. Plausibilitätsprüfung nicht delegierbar. Ohne Haftungsverträge: Persönliche Haftung unbegrenzt.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
                            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Die Lösung
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Haftungsvertrag (Hersteller vs. Arzt)
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Berufshaftpflicht-Check
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Human-Oversight-Workflows
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
