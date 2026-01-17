import { AlertTriangle, FileText, Shield } from "lucide-react";

export function UrgencySection() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">SICHERHEIT</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Keine Kompromisse beim Patientenschutz.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Pillar 1: DSGVO & Art. 9 */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-medium text-white">DSGVO & Art. 9</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Verarbeitung besonderer Kategorien personenbezogener Daten (Gesundheitsdaten). Wir bauen Systeme, die Datenminimierung ernst nehmen.
                        </p>
                    </div>

                    {/* Pillar 2: Ärztliche Schweigepflicht */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-medium text-white">Ärztliche Schweigepflicht</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Technische Umsetzung des § 203 StGB. Wir verhindern, dass KI zum "stillen Zuhörer" wird, der Geheimnisse ausplaudert.
                        </p>
                    </div>

                    {/* Pillar 3: EU AI Act */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-medium text-white">EU AI Act</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Klassifizierung Ihrer Anwendung (oft Hochrisiko-KI) und Erfüllung der Transparenz- und Dokumentationspflichten.
                        </p>
                    </div>

                    {/* Pillar 4: KBV-Konformität */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-medium text-white">KBV-Konformität</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Berücksichtigung der IT-Sicherheitsrichtlinie der Kassenärztlichen Bundesvereinigung (KBV) für die technische Infrastruktur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
