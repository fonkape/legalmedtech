"use client";

import { Check, ShieldAlert, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EuAiActPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 font-sans relative">

            {/* Clickable Backdrop to go home */}
            <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => router.push('/')}
                title="Zurück zur Startseite"
            />

            {/* Content Card */}
            <main className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-gray-200 z-10 flex flex-col animate-fade-in-up">

                {/* Close Button */}
                <div className="absolute top-6 right-6 z-20">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full hover:bg-gray-100 p-2">
                            <X className="w-6 h-6 text-gray-400 hover:text-gray-900" />
                        </Button>
                    </Link>
                </div>

                {/* Header Section */}
                <section className="py-16 px-8 bg-[#2563EB] text-white rounded-t-3xl relative overflow-hidden">
                    <div className="relative z-10 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">EU AI Act Quick-Check 2026</h1>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto">
                            Exklusiver Compliance-Guide für Ärzte & Kliniken.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <div className="p-8 md:p-12 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#2563EB] border-b pb-2">1. Risikoklassen-Tabelle</h2>
                        <p className="mb-6 text-gray-600">Nach Anhang III EU AI Act fallen typische medizinische Anwendungen in die Hochrisiko-Klasse:</p>

                        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="p-4 font-bold text-gray-900 text-sm uppercase tracking-wider">Anwendung</th>
                                        <th className="p-4 font-bold text-gray-900 text-sm uppercase tracking-wider">Risiko</th>
                                        <th className="p-4 font-bold text-gray-900 text-sm uppercase tracking-wider">Pflicht</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4">Chatbot / Terminplanung</td>
                                        <td className="p-4 text-green-600 font-bold">Gering</td>
                                        <td className="p-4">Transparenz (Art. 50)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4">Bildanalyse (Röntgen/MRT)</td>
                                        <td className="p-4 text-red-600 font-bold">Hoch</td>
                                        <td className="p-4">Zertifizierung + Human Oversight</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4">Diagnose-Support</td>
                                        <td className="p-4 text-red-600 font-bold">Hoch</td>
                                        <td className="p-4">Qualitätsmanagement + DSFA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#2563EB] border-b pb-2">2. Checkliste für Betreiber</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                                <Check className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-gray-900">Human Oversight</h3>
                                    <p className="text-sm text-gray-600">Ist technisch sichergestellt, dass ein Arzt jede Entscheidung korrigieren kann?</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                                <Check className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-gray-900">AI Literacy</h3>
                                    <p className="text-sm text-gray-600">Ist das Personal für die spezifischen Risiken dieser KI geschult?</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="pt-8 text-center border-t border-gray-100">
                        <Link href="/#contact">
                            <Button size="lg" className="bg-[#2563EB] hover:bg-blue-700 text-white w-full md:w-auto shadow-lg shadow-blue-500/20">
                                Kostenlose Ersteinschätzung anfordern
                            </Button>
                        </Link>
                        <p className="mt-4 text-sm text-gray-400">
                            Dies ist ein Auszug aus dem Beratungsangebot. <Link href="/" className="underline hover:text-blue-600">Zur Hauptseite</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
