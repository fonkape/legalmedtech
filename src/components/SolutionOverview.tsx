import { MessageSquare, Code2, Rocket } from "lucide-react";

export function SolutionOverview() {
    return (
        <section id="methodik" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">METHODIK</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Erst die Compliance. Dann der Code.
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Die meisten scheitern, weil sie Software kaufen, bevor das rechtliche Fundament steht. Ich drehe den Prozess um. Wir bauen zuerst den juristischen Bauplan.
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
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Technische Leitplanken</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Wir definieren technisch, welche Daten wo fließen dürfen. Wir bauen "Guardrails", die verhindern, dass sensible Patientendaten ungewollt das sichere Netz verlassen.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="relative w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <Code2 className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">2</div>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Rechtliche Kapselung</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Wir "verpacken" moderne KI-Modelle in ein juristisches Korsett. So wird leistungsstarke KI nutzbar, ohne gegen die ärztliche Schweigepflicht (§ 203 StGB) zu verstoßen.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="relative w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <Rocket className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">3</div>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Bauleitung & Abnahme</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Erst wenn der Plan steht, wird gebaut. Ich steuere die Entwickler oder Ihr IT-Systemhaus und überwache, dass der Code exakt den Datenschutzvorgaben entspricht.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
