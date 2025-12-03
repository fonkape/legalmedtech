import { Phone, FileText, ShieldCheck, Database, Tablet } from "lucide-react";

export function UseCases() {
    return (
        <section id="angebot" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-8">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">ZUSAMMENARBEIT</span>
                    </div>
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        Klarheit statt Software-Abo.
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Sie buchen keine abstrakte Software, sondern ein Ergebnis. Wählen Sie den Einstieg, der zu Ihrem Status Quo passt.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Package 1: Der Compliance-Check */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">Der Compliance-Check</h3>
                            <p className="text-sm text-gray-500 font-medium">Für wen? Praxen, die schon Tools nutzen (Doctolib, Aaron, ChatGPT etc.).</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                            Ich auditiere Ihre bestehenden Einstellungen und Datenflüsse. Ich finde Sicherheitslücken und schließe sie, bevor der Landesdatenschützer fragt.
                        </p>
                        <div className="pt-6 border-t border-gray-200 mt-auto">
                            <p className="text-sm text-gray-700 font-bold">Ergebnis: <span className="font-normal text-gray-600">Rechtssicherheit für den Bestand.</span></p>
                        </div>
                    </div>

                    {/* Package 2: Die Digital-Roadmap */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">Die Digital-Roadmap</h3>
                            <p className="text-sm text-gray-500 font-medium">Für wen? Praxen, die automatisieren wollen, aber nicht wissen, wie.</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                            Analyse Ihrer Abläufe (Telefon, Empfang, Backoffice). Erstellung eines juristischen Lastenhefts: Welche Tools dürfen Sie nutzen? Wie müssen sie konfiguriert sein?
                        </p>
                        <div className="pt-6 border-t border-gray-200 mt-auto">
                            <p className="text-sm text-gray-700 font-bold">Ergebnis: <span className="font-normal text-gray-600">Ein fertiger Bauplan für Ihre Digitalisierung.</span></p>
                        </div>
                    </div>

                    {/* Package 3: Begleitete Umsetzung */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4">
                                <Database className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">Begleitete Umsetzung</h3>
                            <p className="text-sm text-gray-500 font-medium">Für wen? Praxen, die eine Komplettlösung wollen.</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                            Ich übernehme die Projektleitung. Ich koordiniere externe Entwickler oder Ihr Systemhaus, überwache die "Privacy by Design"-Standards im Code und schule Ihr Team.
                        </p>
                        <div className="pt-6 border-t border-gray-200 mt-auto">
                            <p className="text-sm text-gray-700 font-bold">Ergebnis: <span className="font-normal text-gray-600">Schlüsselfertige Integration ohne Haftungsrisiko.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
