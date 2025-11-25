import { Phone, FileText, ShieldCheck, Database } from "lucide-react";

export function UseCases() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        Was ich anbiete
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Maßgeschneiderte KI-Lösungen für medizinische Prozesse.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Use Case 1: Telefon-Assistent */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">KI-Telefonassistenz</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Automatische Annahme und Vorqualifizierung von Patientenanrufen. Das System erkennt Anliegen (Rezept, Termin, Notfall) und entlastet Ihr Team um bis zu 70% bei Routineanfragen.
                        </p>
                        <p className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-4">
                            <span className="font-medium text-gray-700">Rechtssicherheit:</span> DSGVO-konforme Verarbeitung auf deutschen Servern. Kein Mithören durch Dritte.
                        </p>
                    </div>

                    {/* Use Case 2: Arztbrief-Generator */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">Automatisierte Arztbriefe</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Erstellung von Arztbriefen in Sekunden statt Minuten. Die KI strukturiert Ihre Notizen und Befunde automatisch in das korrekte Format. Reduziert die Dokumentationszeit von ca. 30 Minuten auf 90 Sekunden.
                        </p>
                        <p className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-4">
                            <span className="font-medium text-gray-700">Compliance:</span> Berücksichtigung der MDR-Klassifizierung für klinische Entscheidungsunterstützung.
                        </p>
                    </div>

                    {/* Use Case 3: DSGVO & Compliance */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">Datenschutz & Compliance</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Implementierung nach "Privacy by Design". Wir nutzen ausschließlich EU-Infrastruktur oder On-Premise-Lösungen, um Konflikte mit dem US Cloud Act zu vermeiden.
                        </p>
                        <p className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-4">
                            <span className="font-medium text-gray-700">Standard:</span> Volle Konformität mit DSGVO Art. 9 (Gesundheitsdaten) und AVV-Anforderungen.
                        </p>
                    </div>

                    {/* Use Case 4: PVS-Integration */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <Database className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">Nahtlose Integration</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Keine Insellösungen. Die KI-Module werden direkt an Ihr bestehendes Praxisverwaltungssystem (z.B. Tomedo, Medatixx, CGM) angebunden.
                        </p>
                        <p className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-4">
                            <span className="font-medium text-gray-700">Technik:</span> Nutzung standardisierter Schnittstellen (GDT/BDT, FHIR, HL7) für maximale Kompatibilität.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
