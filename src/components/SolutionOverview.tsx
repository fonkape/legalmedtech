import { MessageSquare, Code2, Rocket } from "lucide-react";

export function SolutionOverview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        So läuft ein Projekt ab
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Transparent, planbar und ohne versteckte Kosten.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gray-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="relative w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <MessageSquare className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">1</div>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Workflow-Analyse</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Identifikation rechtlicher Risiken und ineffizienter Prozesse. Wir prüfen Ihre bestehende Infrastruktur und definieren klare Ziele.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="relative w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <Code2 className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">2</div>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Legal Engineering & Setup</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Implementierung der KI nach "Privacy by Design"-Prinzipien. Installation auf deutschen Servern oder lokal in Ihrer Praxis.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="relative w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <Rocket className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">3</div>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Audit & Übergabe</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Inbetriebnahme inklusive technischer Compliance-Dokumentation für Ihre Akten. Schulung Ihres Teams für den sicheren Umgang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
