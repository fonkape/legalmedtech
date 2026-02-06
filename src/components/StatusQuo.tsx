import { CloudOff, Lock, Scale, Activity } from "lucide-react";

export function StatusQuo() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-8">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">STATUS QUO</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                        Warum die Digitalisierung im Wartezimmer stecken bleibt.
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Technisch ist vieles möglich: KI am Telefon, automatisierte Anamnese, Chatbots. Die Tools sind da. Aber im deutschen Gesundheitswesen bremsen drei massive Hürden die Umsetzung:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Hürde 1 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                            <CloudOff className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Datenschutz & Cloud</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            "Dürfen Patientendaten überhaupt in die Cloud? Die meisten modernen KI-Modelle laufen auf US-Servern. Ohne technische Absicherung ist das ein DSGVO-Verstoß."
                        </p>
                    </div>

                    {/* Hürde 2 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Die ärztliche Schweigepflicht</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            "Der § 203 StGB ist kein Kavaliersdelikt. Ein 'stiller Zuhörer' (KI) im Behandlungsraum oder am Telefon ist strafbar, wenn keine saubere Kapselung vorliegt."
                        </p>
                    </div>

                    {/* Hürde 3 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                            <Scale className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Die Haftungsfrage</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            "Wer ist schuld, wenn der Bot einen Notfall falsch einschätzt? Solange diese Frage ungeklärt ist, scheuen Praxen das Risiko – zu Recht."
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg font-medium text-gray-900">
                        Die Folge: Praxen verzichten auf Entlastung oder nutzen Grauzonen-Lösungen. Beides ist keine Option.
                    </p>
                </div>
            </div>
        </section>
    );
}
