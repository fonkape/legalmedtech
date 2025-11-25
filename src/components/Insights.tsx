"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const articles = [
    {
        id: "ai-act",
        tag: "AI ACT",
        date: "Nov 2025",
        title: "Der AI Act kommt – was das für Ihre Dokumentationssoftware bedeutet.",
        preview: "Ab August 2026 gelten neue Regeln für KI in der Medizin. Was müssen Praxen wissen, und wann wird Software zum Hochrisiko-System?",
        content: (
            <>
                <p className="mb-4">Am 2. August 2026 tritt der EU AI Act vollständig in Kraft. Für Arztpraxen klingt das weit weg – aber wenn Sie heute Software einsetzen, die bei Diagnosen oder Dokumentation unterstützt, sollten Sie genauer hinschauen.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was der AI Act regelt</h3>
                <p className="mb-4">Der AI Act teilt KI-Systeme in Risikoklassen ein. Medizinische Anwendungen fallen fast immer unter "Hochrisiko" – das bedeutet: strengere Anforderungen an Transparenz, Dokumentation und menschliche Aufsicht.</p>
                <p className="mb-4">Aber hier wird es interessant: Nicht jede Software, die in einer Praxis läuft, ist automatisch Hochrisiko-KI. Es kommt auf die Zweckbestimmung an.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Die entscheidende Frage: Was tut die Software?</h3>
                <p className="mb-4">Ein Diktiersystem, das Ihre Worte in Text umwandelt, ist kein Hochrisiko-System. Ein System, das aus Ihren Notizen automatisch Diagnosevorschläge generiert, ist es möglicherweise schon.</p>
                <p className="mb-4">Die Grenze verläuft dort, wo die KI anfängt, klinische Entscheidungen zu beeinflussen. Reine Dokumentation: unproblematisch. Entscheidungsunterstützung: Hochrisiko.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was das für bestehende Software bedeutet</h3>
                <p className="mb-4">Wenn Sie bereits KI-gestützte Tools nutzen – etwa für Arztbriefe oder Spracherkennung – sollten Sie prüfen, wie der Anbieter die Zweckbestimmung definiert hat. Seriöse Anbieter werden bis 2026 ihre Dokumentation anpassen und Konformitätsnachweise liefern.</p>
                <p className="mb-4">Wenn Ihr Anbieter auf Nachfrage nicht erklären kann, ob sein Produkt unter den AI Act fällt, ist das ein Warnsignal.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Die gute Nachricht</h3>
                <p className="mb-4">Wer jetzt plant, hat 18 Monate Vorlauf. Das ist genug Zeit, um bestehende Systeme zu prüfen und bei Neuanschaffungen auf Anbieter zu setzen, die Compliance von Anfang an mitdenken.</p>
                <p>Der AI Act ist keine Bedrohung, sondern eine Chance zur Professionalisierung. Praxen, die ihre digitalen Werkzeuge verstehen, werden langfristig besser aufgestellt sein.</p>
            </>
        )
    },
    {
        id: "haftung",
        tag: "HAFTUNG",
        date: "Nov 2025",
        title: "Was passiert, wenn Ihre Praxis-KI einen Fehler macht?",
        preview: "KI verspricht Effizienz. Aber wer haftet, wenn der Arztbrief einen falschen Befund enthält oder der Telefonassistent einen Notfall nicht erkennt?",
        content: (
            <>
                <p className="mb-4">Stellen Sie sich vor: Ihr KI-Dokumentationssystem erstellt einen Arztbrief. Sie überfliegen ihn, signieren, schicken ihn raus. Zwei Wochen später stellt sich heraus: Ein Befund war falsch übertragen. Der Patient wurde falsch weiterbehandelt. Wer haftet?</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Die kurze Antwort: Sie.</h3>
                <p className="mb-4">Das Landgericht Kiel hat im November 2024 klargestellt, was viele ahnten: Wer KI einsetzt, haftet für die Ergebnisse. Die Plausibilitätsprüfung ist nicht delegierbar – nicht an die Software, nicht an den Hersteller, nicht an die MFA.</p>
                <p className="mb-4">Das klingt hart, ist aber konsequent. KI ist ein Werkzeug. Wie beim Skalpell gilt: Das Werkzeug schneidet, aber der Arzt trägt die Verantwortung.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was das praktisch bedeutet</h3>
                <p className="mb-4">Jeder KI-generierte Output muss geprüft werden, bevor er die Praxis verlässt. "Die KI hat das so geschrieben" ist keine Verteidigung. Im Gegenteil: Es zeigt, dass Sie ein Werkzeug genutzt haben, dessen Grenzen Sie nicht verstanden haben.</p>
                <p className="mb-4">Das bedeutet nicht, dass KI zu riskant ist. Es bedeutet, dass der Workflow stimmen muss.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Drei Prinzipien für rechtssicheren KI-Einsatz</h3>
                <p className="mb-4"><strong>Erstens: Human Oversight.</strong> Jeder KI-Output braucht einen menschlichen Prüfschritt. Nicht pro forma, sondern inhaltlich. Arztbriefe lesen, bevor Sie signieren. Anrufe stichprobenartig kontrollieren.</p>
                <p className="mb-4"><strong>Zweitens: Dokumentation.</strong> Wenn etwas schiefgeht, müssen Sie nachweisen können, dass Sie sorgfältig gearbeitet haben. Audit-Logs, Prüfprotokolle, Schulungsnachweise.</p>
                <p className="mb-4"><strong>Drittens: Klare Haftungsverträge.</strong> Mit dem KI-Anbieter sollte vertraglich geregelt sein, wer für was haftet. Wenn der Anbieter jede Haftung ausschließt, ist Vorsicht geboten.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Der Unterschied zwischen Risiko und Gefahr</h3>
                <p className="mb-4">KI in der Praxis ist ein kalkulierbares Risiko. Wenn Sie die Werkzeuge verstehen, die Workflows richtig aufsetzen und die Dokumentation ernst nehmen, reduzieren Sie Ihre Haftungsrisiken – nicht erhöhen sie.</p>
                <p>Gefährlich wird es nur, wenn Sie KI blind vertrauen. Aber das gilt für jedes Werkzeug.</p>
            </>
        )
    }
];

export function Insights() {
    const [activeArticle, setActiveArticle] = useState<string | null>(null);

    const activeData = articles.find(a => a.id === activeArticle);

    // Lock body scroll when modal is open
    if (typeof window !== "undefined") {
        if (activeArticle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        Insights
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Gedanken zu KI, Recht und dem Alltag in der Arztpraxis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => setActiveArticle(article.id)}
                        >
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold tracking-wider uppercase">
                                <span className="text-primary">{article.tag}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-400">{article.date}</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {article.preview}
                            </p>
                            <div className="flex items-center text-sm font-bold text-gray-900 group-hover:translate-x-1 transition-transform">
                                Artikel lesen <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                        Alle Artikel auf LinkedIn <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </div>

                {/* Article Modal */}
                <AnimatePresence>
                    {activeArticle && activeData && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm"
                            onClick={() => setActiveArticle(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl border border-gray-100 flex flex-col relative"
                            >
                                {/* Header / Close Button */}
                                <div className="flex-none p-4 flex justify-end border-b border-gray-50 bg-white rounded-t-2xl z-10">
                                    <Button variant="ghost" size="sm" onClick={() => setActiveArticle(null)} className="rounded-full hover:bg-gray-100">
                                        <X className="w-5 h-5" />
                                    </Button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-4">
                                    <div className="flex items-center gap-3 mb-6 text-xs font-bold tracking-wider uppercase">
                                        <span className="text-primary bg-primary/5 px-2 py-1 rounded">{activeData.tag}</span>
                                        <span className="text-gray-400">{activeData.date}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                                        {activeData.title}
                                    </h2>

                                    <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                                        {activeData.content}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
