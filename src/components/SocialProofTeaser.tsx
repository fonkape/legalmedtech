import { Clock, TrendingUp, Phone } from "lucide-react";

export function SocialProofTeaser() {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Was KI in Arztpraxen heute leistet
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Stat 1 */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-4xl font-serif font-medium text-gray-900">78%</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            der Ärzte sehen KI als Chance, aber nur 15% nutzen sie – der Grund: <span className="font-medium text-gray-900">rechtliche Unsicherheit</span>.
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-4xl font-serif font-medium text-gray-900">90 Min</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-medium text-gray-900">Ø 90 Minuten Zeitersparnis</span> pro Tag für das Praxisteam. KI reduziert die Dokumentationszeit drastisch und schafft Raum für Patienten.
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-4xl font-serif font-medium text-gray-900">70%</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            aller Praxisanrufe sind Routine und automatisierbar. Entlasten Sie Ihr Team von Terminvereinbarungen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
