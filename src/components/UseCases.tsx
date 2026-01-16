import { ShieldCheck, Database, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function UseCases() {
    return (
        <section id="angebot" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-8">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">LEISTUNGEN</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
                        Rechtssicherheit durch Architektur. <br className="hidden md:block" /> Nicht durch Verträge.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Block 1: KI-Compliance-Audit & Roadmap */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4 text-primary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">KI-Compliance-Audit & Roadmap</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Der Schmerz</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Standard-SaaS-Lösungen verschieben Haftungsrisiken per AGB auf Sie. Ich identifiziere die Lücken, bevor sie zum Haftungsfall werden.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Inhalt</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Tiefenprüfung Ihrer KI-Systeme (z.B. Doctolib-Assistenten) auf Betreiberpflichten nach dem EU AI Act. Prüfung der Zweckbestimmung und Abgrenzung zum Medizinprodukt (MDR).</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6 border-t border-gray-200 mb-6">
                                <p className="text-sm text-gray-700 font-bold">Ergebnis: <span className="font-normal text-gray-600">Ein rechtssicherer technischer Bauplan für Ihre Praxis-IT 2026.</span></p>
                            </div>
                            <Link href="#contact">
                                <Button className="w-full" variant="outline">Compliance prüfen</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Block 2: Sovereign AI: Lokale KI-Systeme */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4 text-primary">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sovereign AI: Lokale KI-Systeme</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Der USP</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Absolute Datensouveränität. Während Cloud-KI ein „gefahrgeneigtes Handeln“ bleibt, baue ich Lösungen, die Ihre Praxis nie verlassen.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Inhalt</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Implementierung von State-of-the-Art KI-Modellen (Open Source) auf Ihrer eigenen Hardware oder in souveränen deutschen Clouds. Volle Wahrung der ärztlichen Schweigepflicht (§ 203 StGB) durch technische Kapselung.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6 border-t border-gray-200 mb-6">
                                <p className="text-sm text-gray-700 font-bold">Ergebnis: <span className="font-normal text-gray-600">Ein digitales „Fort Knox“ für Ihre Patientendaten.</span></p>
                            </div>
                            <Link href="#contact">
                                <Button className="w-full">Souveränität anfragen</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Block 3: Technical Compliance Engineering */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4 text-primary">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Compliance Engineering</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Die Lösung</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Ich liefere Code, der per Definition compliant ist („Compliance-as-Code“). Ich schließe die Lücke zwischen IT-Entwicklern und Anwälten.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Inhalt</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Entwicklung maßgeschneiderter Middleware und "Privacy-Proxies", die Daten filtern und anonymisieren, bevor sie Drittsysteme erreichen. Begleitung von Zertifizierungsprozessen (MDR/AI Act) direkt auf Code-Ebene.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6 border-t border-gray-200 mb-6">
                                <p className="text-sm text-gray-700 font-bold">Ergebnis: <span className="font-normal text-gray-600">Implementierung von Rechtssicherheit ohne Reibungsverluste.</span></p>
                            </div>
                            <Link href="#contact">
                                <Button className="w-full" variant="outline">Engineering buchen</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
