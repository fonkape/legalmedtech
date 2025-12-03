"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";

const articles = [
    {
        id: "fachkraftemangel",
        tag: "Fachkräftemangel",
        date: "DEZ 2025",
        title: "Die Arzthelferin kündigt. Schon wieder. Kann KI helfen? (Kommt drauf an.)",
        preview: "Montagmorgen, 8:02 Uhr. Das Telefon klingelt. Niemand nimmt ab, weil die eine MFA, die heute da ist, gerade einem Patienten erklärt, dass seine Überweisung abgelaufen ist.",
        content: (
            <>
                <p className="mb-4">Montagmorgen, 8:02 Uhr. Das Telefon klingelt. Niemand nimmt ab, weil die eine MFA, die heute da ist, gerade einem Patienten erklärt, dass seine Überweisung abgelaufen ist. Im Wartezimmer wächst die Schlange. Um 8:15 Uhr ist der Tag bereits verloren.</p>
                <p className="mb-4">Diese Szene kennt jeder, der schon mal in einer deutschen Arztpraxis war – auf beiden Seiten des Tresens.</p>
                <p className="mb-4">Und jetzt kommt der Punkt, an dem normalerweise jemand sagt: „KI kann das lösen!" Spoiler: Kann sie nicht. Zumindest nicht so, wie es die LinkedIn-Posts der Tech-Bros versprechen.</p>
                <p className="mb-4">Aber – und das ist der interessante Teil – sie kann etwas anderes tun. Etwas, das tatsächlich hilft. Wenn man es richtig macht. Was selten passiert.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Reden wir kurz über den Elefanten im Wartezimmer: Fachkräftemangel.</h3>
                <p className="mb-4">Jede dritte Arztpraxis findet keine MFAs mehr. In manchen Regionen ist es jede zweite. Das liegt nicht daran, dass der Beruf so unattraktiv wäre – okay, doch, auch daran – sondern an einer simplen demografischen Rechnung: mehr Patienten, weniger Arbeitskräfte, keine Besserung in Sicht.</p>
                <p className="mb-4">Die Standardlösung heißt: „Wir müssen attraktiver werden, besser bezahlen, mehr ausbilden." Stimmt alles. Wird aber auch nicht reichen.</p>
                <p className="mb-4">Denn das Problem ist nicht nur die Zahl der Leute. Es ist das, womit sie ihre Zeit verbringen.</p>
                <p className="mb-4">Eine MFA in einer durchschnittlichen Praxis verbringt – je nach Studie – 40 bis 60 Prozent ihrer Arbeitszeit mit Dingen, die nichts mit Patienten zu tun haben. Telefon. Formulare. Überweisungen suchen. Befunde einscannen. Termine jonglieren. Der ganze administrative Wahnsinn, der zwischen „Patient kommt rein" und „Patient geht raus" passiert.</p>
                <p className="mb-4">Das ist die unsichtbare Zeitfresser-Maschine. Und genau hier wird KI interessant.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Ich rede nicht von Science-Fiction. Ich rede von Technologie, die jetzt existiert und im Einsatz ist:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Telefonassistenz:</strong> Eine KI nimmt Anrufe an, versteht natürliche Sprache, beantwortet die ewig gleichen Fragen (Öffnungszeiten, Rezeptbestellung, „Hat der Doktor noch einen Termin frei?") und leitet nur die komplizierten Fälle an einen Menschen weiter. Ergebnis: 60 bis 80 Prozent weniger Unterbrechungen für die MFA. Das klingt nach Marketing-Versprechen, ist aber nachvollziehbar, wenn man sich anschaut, wie repetitiv die meisten Praxis-Anrufe sind.</li>
                    <li><strong>Digitale Patientenaufnahme:</strong> Der Patient füllt den Anamnesebogen vor dem Termin auf dem Handy aus. Die KI strukturiert die Angaben, erkennt Muster, bereitet eine Zusammenfassung vor. Keine Klemmbrett-Zettel mehr, die jemand entziffern und abtippen muss. Klingt banal, spart aber 10 bis 15 Minuten pro Neupatient – und die Daten sind lesbar.</li>
                    <li><strong>Dokumentationsunterstützung:</strong> Die KI hört beim Arzt-Patienten-Gespräch zu, erstellt automatisch eine strukturierte Dokumentation, schlägt ICD-Codes vor. Der Arzt prüft, korrigiert, bestätigt. Statt nach Feierabend noch eine Stunde Diktate abzutippen.</li>
                </ul>
                <p className="mb-4">Klingt gut, oder? Ist es auch. Theoretisch.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Und jetzt der Teil, den einem keiner erzählt:</h3>
                <p className="mb-4">Hier wird es juristisch – aber bleiben Sie dran, das ist der wichtige Teil.</p>
                <p className="mb-4">Gesundheitsdaten sind keine normalen Daten. Sie fallen unter Artikel 9 DSGVO, „besondere Kategorien personenbezogener Daten". Die Verarbeitung ist grundsätzlich verboten. Mit Ausnahmen, ja – aber diese Ausnahmen sind eng. Sehr eng.</p>
                <p className="mb-4">Und seit August 2024 gilt der EU AI Act. KI im Gesundheitsbereich gilt als Hochrisiko-Kategorie. Dokumentationspflichten, Konformitätsbewertungen, menschliche Aufsicht. Das volle Programm.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was heißt das praktisch?</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Einwilligung ist nicht „Häkchen setzen".</strong> Der Patient muss verstehen, was passiert. Dass eine KI zuhört. Dass seine Daten verarbeitet werden. Von wem, wo, wie lange. „Ich hab die AGB akzeptiert" reicht nicht.</li>
                    <li><strong>Serverstandort ist kein Technik-Detail.</strong> Viele KI-Tools laufen über amerikanische Cloud-Dienste. Nach dem Schrems-II-Urteil ist Datentransfer in die USA ein juristisches Minenfeld. Fragen Sie mal Ihren KI-Anbieter, wo genau die Daten verarbeitet werden. Die Antwort ist oft: betretenes Schweigen.</li>
                    <li><strong>Black-Box-KI ist ein Haftungsproblem.</strong> Wenn die KI etwas dokumentiert oder empfiehlt, müssen Sie erklären können, wie sie zu diesem Ergebnis kam. „Der Algorithmus hat das gesagt" ist keine Dokumentation, die vor der Ärztekammer oder im Haftungsfall Bestand hat.</li>
                </ul>
                <p className="mb-4">Die meisten KI-Lösungen, die gerade auf den Markt drängen, sind technisch brilliant und rechtlich ein Himmelfahrtskommando. Nicht, weil KI schlecht ist. Sondern weil die Entwickler das Produkt gebaut haben – und dann erst gefragt haben, ob es legal ist.</p>
                <p className="mb-4">Das ist kein Vorwurf. So funktioniert Tech-Entwicklung oft. Erst bauen, dann fragen.</p>
                <p className="mb-4">Im Gesundheitsbereich ist das nur leider keine Option. Hier kann „erst bauen, dann fragen" bedeuten: Bußgeld vom Landesdatenschutzbeauftragten. Oder ein Patient, der klagt. Oder eine Ärztekammer, die Fragen stellt.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Aber – und das ist wichtig – KI in der Arztpraxis kann funktionieren.</h3>
                <p className="mb-4">Rechtssicher, sinnvoll, ohne Albträume.</p>
                <p className="mb-4">Das funktioniert allerdings nur, wenn man aufhört, es als reines Tech-Projekt zu behandeln. Wenn Compliance nicht nachträglich draufgeklebt wird, sondern von Anfang an mitgedacht. Privacy by Design statt Privacy by Panik.</p>
                <p className="mb-4">Das bedeutet: Bevor Sie investieren, klären Sie, wo die Daten liegen. Wie die Einwilligung eingeholt wird. Was passiert, wenn die KI Unsinn macht. Wer haftet.</p>
                <p className="mb-4">Das klingt nach Aufwand. Ist es auch. Aber es ist deutlich weniger Aufwand als der Brief vom Anwalt, nachdem Sie schon 50.000 Euro in eine Lösung investiert haben, die Sie nicht nutzen dürfen.</p>
                <p className="mb-4">Wenn Sie eine Praxis gründen, umbauen oder erweitern – jetzt ist der Moment, das von Anfang an richtig zu machen. Greenfield-Projekte sind selten. Nutzen Sie die Chance.</p>
                <p className="mb-4">Und wenn Sie eine KI-Lösung für den Gesundheitsbereich anbieten: Sprechen Sie mit jemandem, der beide Seiten versteht. Bevor Ihre Kunden es tun müssen.</p>
                <p className="text-sm text-gray-500 mt-8">#KI #Gesundheitswesen #DSGVO #Fachkräftemangel #LegalEngineering</p>
            </>
        )
    },
    {
        id: "ai-act",
        tag: "AI ACT",
        date: "Okt 2025",
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
        <section id="insights" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8">
                        <Lightbulb className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">INSIGHTS</span>
                    </div>
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        Klartext zu Recht & Technik.
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Gedanken zu KI, DSGVO und dem Alltag in der Arztpraxis.
                    </p>
                </div>

                <div className="flex overflow-x-auto gap-8 pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="w-[350px] flex-none bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group snap-center"
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
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                                {article.preview}
                            </p>
                            <div className="flex items-center text-sm font-bold text-gray-900 group-hover:translate-x-1 transition-transform">
                                Artikel lesen <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    ))}

                    {/* Coming Soon Card */}
                    <div className="w-[350px] flex-none bg-gray-50 p-8 rounded-2xl border border-gray-100 opacity-70 flex flex-col justify-between snap-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold tracking-wider uppercase">
                                <span className="text-gray-400 bg-gray-200 px-2 py-1 rounded">Coming Soon</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-gray-400 mb-3">
                                Haftungsfalle ePA: Was Praxisinhaber jetzt technisch wissen müssen
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors">
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
