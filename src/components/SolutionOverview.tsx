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
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">1. Analyse & Beratung</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Wir prüfen Ihre bestehende Infrastruktur (PVS, Telefonie) und identifizieren Automatisierungspotenziale. Sie erhalten eine ehrliche Einschätzung zur Machbarkeit.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">2. Implementierung</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Installation der KI-Modelle – entweder auf deutschen Servern oder lokal in Ihrer Praxis. Anbindung an Ihr PVS über Standard-Schnittstellen (GDT/BDT/FHIR).
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-primary">
                            <Rocket className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">3. Schulung & Start</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            Wir schulen Ihr Team im Umgang mit dem System. Sie erhalten alle notwendigen Dokumente für Ihre DSGVO- und MDR-Compliance-Mappe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
