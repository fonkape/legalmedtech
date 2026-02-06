import { AlertTriangle, Clock, ShieldOff, ShieldAlert, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ComplianceGap() {
    return (
        <section id="methodik" className="py-[var(--section-padding)]" style={{ backgroundColor: '#2563EB', color: '#ffffff' }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl text-left mb-16">
                    <ScrollReveal as="h2" className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight mx-0" style={{ color: '#ffffff' }}>
                        Ihr KI-Anbieter verkauft Features. <br /> Ich verkaufe Rechtssicherheit.
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mr-auto bento-grid">
                    {/* Column 1 */}
                    <div className="bg-white p-8 rounded-custom border border-transparent flex flex-col transition-theme hover:border-white/20 h-full">
                        <div className="w-12 h-12 bg-blue-50 rounded-custom flex items-center justify-center mb-6 text-blue-600">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Die KI halluziniert im Arztbrief → Sie haften persönlich.</h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
                            Ich baue technische Prüfprozesse, die Haftung ausschließen – nicht nur dokumentieren, sondern erzwingen.
                        </p>
                        <Link href="#contact" className="mt-auto">
                            <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent font-medium group">
                                <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                                Compliance-Audit buchen
                            </Button>
                        </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white p-8 rounded-custom border border-transparent flex flex-col transition-theme hover:border-white/20 h-full">
                        <div className="w-12 h-12 bg-blue-50 rounded-custom flex items-center justify-center mb-6 text-blue-600">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Ihr Vertrag läuft bis 2027 → Ihre Software wird ab 2026 illegal.</h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
                            Ich auditiere Verträge auf AI Act-Konformität und erstelle eine Compliance-Roadmap, bevor die Frist abläuft.
                        </p>
                        <Link href="#contact" className="mt-auto">
                            <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent font-medium group">
                                <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                                Vertrag prüfen lassen
                            </Button>
                        </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-8 rounded-custom border border-transparent flex flex-col transition-theme hover:border-white/20 h-full">
                        <div className="w-12 h-12 bg-blue-50 rounded-custom flex items-center justify-center mb-6 text-blue-600">
                            <ShieldOff className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">US-Cloud = Risiko für § 203 StGB (Schweigepflicht).</h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
                            Ich baue lokale KI-Systeme (Sovereign AI), die Ihre Praxis nie verlassen – absolute Datensouveränität.
                        </p>
                        <Link href="#contact" className="mt-auto">
                            <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent font-medium group">
                                <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                                Datensouveränität anfragen
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
