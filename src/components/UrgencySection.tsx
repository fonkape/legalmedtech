import { AlertTriangle, FileText, Shield } from "lucide-react";

export function UrgencySection() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-white mb-6">
                        Regulatorische Änderungen 2026
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Wichtige Fristen und Anforderungen für medizinische Einrichtungen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-medium text-white">ePA für alle</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Ab Januar 2026 müssen alle Praxen in der Lage sein, die elektronische Patientenakte zu befüllen. KI-gestützte Strukturierung hilft bei der Umsetzung.
                        </p>
                        <div className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded inline-block">
                            Deadline: 01.01.2026
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-medium text-white">EU AI Act</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Der AI Act tritt voll in Kraft. Medizinische KI-Systeme fallen unter Hochrisiko-Anforderungen. Bestands-Software muss geprüft werden.
                        </p>
                        <div className="text-xs font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded inline-block">
                            Deadline: 02.08.2026
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-medium text-white">SAP IS-H Ende</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Wartungsende für SAP IS-H. Viele Kliniken und MVZs müssen ihre IT-Landschaft neu ordnen. Eine Chance für moderne, modulare Architekturen.
                        </p>
                        <div className="text-xs font-mono text-orange-400 bg-orange-400/10 px-3 py-1 rounded inline-block">
                            Start Migration: Jetzt
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
