import { AlertTriangle, ShieldCheck, Scale, FileCheck, Lock, Gavel } from "lucide-react";

export function LegalAssurance() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Warum Sie einen Legal Engineer brauchen
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        KI ohne rechtliche Absicherung ist ein Bußgeld-Risiko.
                        KI mit Legal Engineering ist ein Wettbewerbsvorteil.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Risks Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-bold text-red-600 flex items-center gap-3 mb-8">
                            <AlertTriangle className="h-8 w-8" />
                            Die Risiken
                        </h3>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-red-600">
                                    <Gavel className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">DSGVO-Bußgelder bis €20 Mio.</h4>
                                    <p className="text-red-800/80 text-sm leading-relaxed">
                                        Gesundheitsdaten (DSGVO Art. 9) sind besonders geschützt. US-Cloud = Cloud Act = Verstoß.
                                        Ohne AVV, DSFA, Rechtsgrundlage: Bußgeld + Datenschutzbehörde stoppt Betrieb.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-red-600">
                                    <AlertTriangle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Illegales Medizinprodukt</h4>
                                    <p className="text-red-800/80 text-sm leading-relaxed">
                                        KI mit diagnostischer Funktion = Medizinprodukt (MDR Klasse IIa/IIb).
                                        Ohne CE-Kennzeichnung: Strafrecht + Abrechnungsausschluss §372 SGB V.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-red-600">
                                    <Scale className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Haftung bei KI-Fehler</h4>
                                    <p className="text-red-800/80 text-sm leading-relaxed">
                                        LG Kiel (Nov. 2024): Wer KI einsetzt, haftet für Ergebnisse.
                                        Fehler im AI-Arztbrief = Behandlungsfehler = Schadensersatz + Strafrecht.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-bold text-accent-green flex items-center gap-3 mb-8">
                            <ShieldCheck className="h-8 w-8" />
                            Unsere Lösung
                        </h3>

                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-accent-green">
                                    <FileCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Legal Engineering: Recht als Code</h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed">
                                        Wir bauen DSGVO-Konformität direkt in die Software-Architektur ein.
                                        Pseudonymisierung, EU-Cloud, AVV, DSFA – alles von Tag 1. Kein nachträgliches &apos;Flicken&apos;.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-accent-green">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">MDR/AI Act Dual-Compliance</h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed">
                                        Wir definieren Zweckbestimmung so, dass Ihr Tool KEIN Medizinprodukt ist (wo möglich).
                                        Oder bereiten MDR-Konformität vor. Ab 2026: AI Act parallel erfüllt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-accent-green">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Haftungsverträge & Versicherung</h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed">
                                        Ich regle vertraglich: Wer haftet wofür. Prüfe Ihre Berufshaftpflicht.
                                        Erstellen Patientenaufklärungsbögen. Human-Oversight-Workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl font-serif italic text-gray-700">
                        &quot;Technologie ohne Recht ist gefährlich. Recht ohne Technologie-Verständnis ist nutzlos. Legal Engineering verbindet beides.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
