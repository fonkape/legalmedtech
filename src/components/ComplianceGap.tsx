"use client";

import { AlertTriangle, Clock, ShieldOff, ShieldAlert } from "lucide-react";

export function ComplianceGap() {
    return (
        <section id="compliance-luecke" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full shadow-sm mb-8 border border-red-100">
                        <ShieldAlert className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">DIE COMPLIANCE-LÜCKE</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                        Ihr KI-Anbieter verkauft Features. <br /> Ich verkaufe Rechtssicherheit.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Column 1 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Die Haftungs-Falle</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Wenn die KI im Arztbrief halluziniert und Sie den Entwurf unbesehen signieren, haften Sie persönlich. Die Plausibilitätsprüfung ist nicht an Software delegierbar – das hat die Rechtsprechung (LG Kiel) bereits klargestellt. Ich sorge dafür, dass Ihre Prozesse diese Haftung technisch ausschließen.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Die 2026-Deadline (EU AI Act)</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Ab August 2026 greift der EU AI Act voll durch. Viele heutige 'Assistenzsysteme' werden über Nacht zu regulierten Hochrisiko-Systemen. Wer heute ohne Konformitäts-Roadmap unterschreibt, investiert in ein rechtliches Auslaufmodell. Ich auditiere Ihre Verträge auf Zukunftssicherheit.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                            <ShieldOff className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Die Schweigepflicht-Lücke</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Ein US-Cloud-Modell ohne technische Kapselung ist ein massives Risiko für die ärztliche Schweigepflicht (§ 203 StGB). 'DSGVO-konform' auf einer Marketing-Seite ist kein Schutzschild vor der Kammer oder der Staatsanwaltschaft. Ich baue die technische Architektur für echtes Privacy-by-Design.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
