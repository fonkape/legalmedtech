"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Send, Heart, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    // Lock body scroll when modal is open
    if (typeof window !== "undefined") {
        if (showImpressum || showPrivacy) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="font-mono text-xl font-bold text-primary tracking-tighter mb-6">
                            {"{ dk }"}
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Vom juristischen Bauplan bis zur technischen Umsetzung. Ich helfe der Gesundheitsbranche, digitale Entlastung zu schaffen – ohne Datenschutz-Risiko.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <span className="font-bold text-xs">in</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">
                            <Link href="#use-cases" className="hover:text-primary transition-colors">Angebot</Link>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="#use-cases" className="hover:text-primary transition-colors">Compliance-Check</Link></li>
                            <li><Link href="#use-cases" className="hover:text-primary transition-colors">Digital-Roadmap</Link></li>
                            <li><Link href="#use-cases" className="hover:text-primary transition-colors">Begleitete Umsetzung</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Rechtliches</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li>
                                <button onClick={() => setShowImpressum(true)} className="hover:text-primary transition-colors text-left">
                                    Impressum
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setShowPrivacy(true)} className="hover:text-primary transition-colors text-left">
                                    Datenschutzerklärung
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Kontakt & Vernetzen</h4>
                        <p className="text-sm text-gray-500 mb-6">
                            Keine Lust auf Formulare? Schreiben Sie mir direkt auf LinkedIn oder buchen Sie einen Slot.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="outline" className="w-full justify-start">
                                    <span className="font-bold text-xs mr-2">in</span> Auf LinkedIn vernetzen
                                </Button>
                            </a>
                            <a href="https://calendly.com/daniel-kleiboldt/potenzialanalyse" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="w-full justify-start bg-primary text-white hover:bg-primary/90">
                                    <Send className="w-4 h-4 mr-2" /> Termin buchen
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                        © 2025 Daniel Kleiboldt. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Germany.
                    </p>
                    <div className="flex gap-6">
                        {/* Trust Badges Mockup */}
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">DSGVO Konform</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">SSL Secured</span>
                    </div>
                </div>
            </div>

            {/* Impressum Modal */}
            <AnimatePresence>
                {showImpressum && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm"
                        onClick={() => setShowImpressum(false)}
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
                                <Button variant="ghost" size="sm" onClick={() => setShowImpressum(false)} className="rounded-full hover:bg-gray-100">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-4">
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Impressum</h2>

                                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Angaben gemäß § 5 TMG</h3>
                                    <p>Daniel Kleiboldt<br />Büro für Legal Engineering<br />Hülsbrockstraße 115<br />33334 Gütersloh</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Kontakt</h3>
                                    <p>Telefon: 05241/7082012<br />E-Mail: daniel.kleiboldt@gmail.com</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Redaktionell verantwortlich</h3>
                                    <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />Daniel Kleiboldt<br />Hülsbrockstraße 115<br />33334 Gütersloh</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">EU-Streitschlichtung</h3>
                                    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                                    <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Haftungsausschluss (Disclaimer)</h3>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Haftung für Inhalte</h4>
                                    <p>Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Haftung für Links</h4>
                                    <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Urheberrecht</h4>
                                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Privacy Modal */}
            <AnimatePresence>
                {showPrivacy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm"
                        onClick={() => setShowPrivacy(false)}
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
                                <Button variant="ghost" size="sm" onClick={() => setShowPrivacy(false)} className="rounded-full hover:bg-gray-100">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-4">
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Datenschutzerklärung</h2>

                                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">1. Datenschutz auf einen Blick</h3>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Allgemeine Hinweise</h4>
                                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Datenerfassung auf dieser Website</h4>
                                    <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                                    <p><strong>Wie erfassen wir Ihre Daten?</strong> Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei einer Terminbuchung angeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                                    <p><strong>Wofür nutzen wir Ihre Daten?</strong> Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden oder um Ihre Kontaktanfragen zu bearbeiten.</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2. Hosting</h3>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Hosting bei Vercel</h4>
                                    <p>Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend: Vercel). Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Vercel ist ein Tool zum Anzeigen und Bereitstellen von Websites. Vercel speichert Cookies oder sonstige Wiedererkennungstechnologien, die für die Darstellung der Seite, zur Funktionsfähigkeit und zur Gewährleistung der Sicherheit erforderlich sind.</p>
                                    <p>Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                                    <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/legal/privacy-policy</a>.</p>
                                    <p><strong>Auftragsverarbeitung</strong> Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h3>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Datenschutz</h4>
                                    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h4>
                                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                                    <p>Daniel Kleiboldt<br />Büro für Legal Engineering<br />Hülsbrockstraße 115<br />33334 Gütersloh</p>
                                    <p>Telefon: 05241/7082012<br />E-Mail: daniel.kleiboldt@gmail.com</p>
                                    <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Speicherdauer</h4>
                                    <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                                    <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                                    <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Recht auf Datenübertragbarkeit</h4>
                                    <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">SSL- bzw. TLS-Verschlüsselung</h4>
                                    <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4. Datenerfassung auf dieser Website</h3>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Kontaktformular & E-Mail-Kontakt</h4>
                                    <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen oder uns per E-Mail schreiben, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                                    <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
                                    <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">5. Tools und Dienste</h3>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Webanalyse durch Vercel Web Analytics</h4>
                                    <p>Wir nutzen auf unserer Website das Analysetool "Vercel Web Analytics" des Anbieters Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
                                    <p>Vercel Web Analytics ermöglicht es uns, die Nutzung unserer Website zu analysieren (z. B. Besucherzahlen, Absprungraten, Herkunftsländer), um unser Angebot technisch und inhaltlich zu optimieren. Die Erfassung erfolgt dabei ohne den Einsatz von Cookies. Die IP-Adresse der Besucher wird unmittelbar nach der Erhebung anonymisiert und nicht dauerhaft gespeichert. Es werden keine persönlichen Profile erstellt ("Privacy-First-Ansatz").</p>
                                    <p>Rechtsgrundlage: Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an der Analyse und Optimierung unseres Online-Angebotes gemäß Art. 6 Abs. 1 lit. f DSGVO. Da keine Cookies gesetzt werden und keine personenbezogenen Daten dauerhaft gespeichert werden, ist keine gesonderte Einwilligung (Consent) erforderlich.</p>
                                    <p>Datenübermittlung: Soweit Daten in die USA übertragen werden, stützt sich Vercel auf die Standardvertragsklauseln der EU-Kommission. Weitere Informationen zum Datenschutz bei Vercel finden Sie hier: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/legal/privacy-policy</a></p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Terminvereinbarung via Calendly</h4>
                                    <p>Auf unserer Website haben Sie die Möglichkeit, Termine für ein Erstgespräch ("Potenzial-Analyse") zu vereinbaren. Wir nutzen hierfür den Dienst Calendly des Anbieters Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA.</p>
                                    <p>Zum Zweck der Terminvereinbarung und Durchführung geben Sie die abgefragten Daten und den Wunschtermin in die Eingabemaske ein. Diese Daten werden bei Calendly gespeichert. Calendly versendet anschließend eine Bestätigung an Ihre E-Mail-Adresse.</p>
                                    <p>Die Daten, die Sie eingeben, verbleiben bei uns und Calendly, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                                    <p>Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst unkomplizierten Terminvereinbarung mit Interessenten und Kunden. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                                    <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://calendly.com/pages/dpa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://calendly.com/pages/dpa</a>.</p>

                                    <h4 className="font-bold text-gray-900 mt-4 mb-2">Videokonferenzen via Google Meet</h4>
                                    <p>Für die Durchführung von Online-Meetings nutzen wir den Dienst "Google Meet", einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
                                    <p>Wenn Sie an einem Meeting via Google Meet teilnehmen, werden verschiedene Datenarten verarbeitet. Der Umfang der Daten hängt dabei auch davon ab, welche Angaben Sie vor bzw. bei der Teilnahme an einem Online-Meeting machen. Google Meet verarbeitet Metadaten (z. B. IP-Adresse, Geräteinformationen), Verbindungsdaten und Inhaltsdaten (Audio- und Videodaten).</p>
                                    <p>Wir haben keinen Einfluss auf die weitere Datenverarbeitung durch Google. Weitere Informationen zu Datenschutz bei Google Meet finden Sie hier: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy?hl=de</a>.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
