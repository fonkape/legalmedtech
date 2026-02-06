"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const articles = [
    {
        id: "update-risk",
        tag: "PRAXISSOFTWARE",
        date: "FEB 2026",
        title: "Ihre IT hat gestern ein Update installiert. Heute sind Sie Betreiber eines Hochrisiko-KI-Systems.",
        preview: "Donnerstagmorgen. Ihr IT-Dienstleister hat nachts routinemäßig Updates eingespielt. Alles läuft. Keine Störung. Kein Ticket im System. Was Sie nicht wissen: Mit diesem Update hat sich die rechtliche Einordnung Ihrer Praxissoftware fundamental geändert.",
        content: (
            <>
                <p className="mb-4">Donnerstagmorgen. Ihr IT-Dienstleister hat nachts routinemäßig Updates eingespielt. Alles läuft. Keine Störung. Kein Ticket im System.</p>
                <p className="mb-4">Was Sie nicht wissen: Mit diesem Update hat sich die rechtliche Einordnung Ihrer Praxissoftware fundamental geändert.</p>
                <p className="mb-4">Gestern war Ihr Terminverwaltungssystem ein Kalendertool. Heute analysiert eine KI im Hintergrund Patienteneingaben, priorisiert automatisch Notfälle und schlägt basierend auf Symptombeschreibungen den passenden Facharzt vor.</p>
                <p className="mb-4">Ihr Datenschutzkonzept beschreibt noch die alte Version. Ihre Auftragsverarbeitungsverträge decken die neuen Datenflüsse nicht ab. Ihre Ärzte wissen nicht, dass sie jetzt KI-generierte Entscheidungsvorschläge nutzen.</p>
                <p className="mb-4 font-bold">Sie haften trotzdem.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Das Problem: Wer kontrolliert die Updates?</h3>
                <p className="mb-4">Die zentrale Frage lautet: Wer bei Ihnen prüft, ob ein Software-Update die rechtliche Einordnung Ihres Systems verändert?</p>
                <p className="mb-4">Wenn die Antwort "Niemand, das macht der Anbieter" lautet, haben wir ein Problem.</p>
                <p className="mb-4">Der Software-Hersteller liefert Technik. Er trägt die Produkthaftung für sein Tool. Aber Sie entscheiden, dieses Tool in der Patientenversorgung einzusetzen. Sie sind der Betreiber. Und als Betreiber tragen Sie die Verantwortung dafür, dass der Einsatz rechtssicher erfolgt.</p>
                <p className="mb-4">Der Hersteller kennt Ihre Prozesse nicht. Er weiß nicht, wie Ihre Ärzte die Software nutzen. Er kann nicht beurteilen, ob sein neues Feature in Ihrem spezifischen Kontext ein Compliance-Risiko erzeugt.</p>
                <p className="mb-4">Das können nur Sie.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Drei konkrete Probleme</h3>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">1) Das DSFA-Dilemma</h4>
                <p className="mb-4">Eine Datenschutz-Folgenabschätzung bildet die tatsächliche Datenverarbeitung ab. Wenn Ihre Software nach einem Update plötzlich Gesundheitsdaten an einen Sub-Prozessor zur KI-Analyse sendet oder automatisierte Priorisierungen vornimmt, beschreibt Ihre DSFA von 2023 nicht mehr die Realität.</p>
                <p className="mb-4">Das ist kein Papierkram-Problem. Das ist ein Haftungsrisiko.</p>
                <p className="mb-4">Wenn Ihr Landesdatenschutzbeauftragter prüft – und die prüfen inzwischen gezielt Healthcare-KI –, kann er feststellen: "Ihre dokumentierte Datenverarbeitung stimmt nicht mit der tatsächlichen überein."</p>
                <p className="mb-4">Die Folge sind aufsichtsrechtliche Maßnahmen, die Ihren Betrieb empfindlich stören können. Bußgelder sind dabei oft noch das kleinere Übel im Vergleich zum Reputationsschaden.</p>
                <p className="mb-4">Was ich in der Praxis sehe: Viele Betreiber gehen davon aus, dass der Software-Anbieter die DSFA aktualisiert. Das ist ein Missverständnis. Der Anbieter kann eine Muster-DSFA liefern. Aber die konkrete Folgenabschätzung für Ihren Betrieb müssen Sie durchführen.</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">2) Heterogene IT-Landschaften (bei lokalen Installationen)</h4>
                <p className="mb-4">Das größte Risiko in MVZs mit lokalen Servern oder zeitversetzten Rollouts: nicht synchronisierte IT-Systeme.</p>
                <p className="mb-4">Standort A nutzt Software X in Version 3.2. Standort B hat Version 3.5, weil deren IT-Dienstleister schneller updated. Standort C läuft noch auf 3.1, weil ein kritisches Modul inkompatibel ist.</p>
                <p className="mb-4">Jede Version hat andere Features. Unterschiedliche Datenflüsse. Unterschiedliche Risikoprofile. Ihre Compliance-Dokumentation geht aber von "der Software" aus.</p>
                <p className="mb-4">Im Schadensfall müssen Sie beweisen können: "Wir wussten, welche Systeme wo liefen. Wir haben die Risiken bewertet." Wenn Sie das nicht können, deutet die fehlende Dokumentation darauf hin, dass Sie die Kontrolle nicht hatten.</p>
                <p className="mb-4 text-sm text-gray-600 italic">(Hinweis: Bei reinen Cloud-Lösungen (SaaS) haben alle Nutzer meist die gleiche Version. Das Problem verschiebt sich dort auf die Frage: Wer prüft die Release Notes, bevor das Update automatisch ausgerollt wird?)</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">3) Die schleichende Mutation der Zweckbestimmung</h4>
                <p className="mb-4">Der EU AI Act unterscheidet KI-Systeme nach ihrer Zweckbestimmung. Ein reines Dokumentationswerkzeug unterliegt anderen Anforderungen als ein System, das klinische Entscheidungen beeinflusst.</p>
                <p className="mb-4">Die Grenze ist messerscharf: Sobald Software nicht mehr nur dokumentiert, sondern Entscheidungen vorbereitet, ändert sich die Risikoklasse.</p>
                <p className="mb-4">Ein Beispiel: Ihr Terminverwaltungssystem hat bisher Anrufe entgegengenommen und Termine nach Verfügbarkeit vergeben. Nach dem Update analysiert es Freitext-Eingaben ("starke Brustschmerzen seit heute Morgen"), erkennt potenzielle Notfälle und priorisiert diese automatisch.</p>
                <p className="mb-4">Was sich technisch wie ein nützliches Feature anfühlt, ist juristisch eine Änderung der Zweckbestimmung. Aus Admin-Software wird ein Medizinprodukt.</p>
                <p className="mb-4">Das Problem: Viele Software-Anbieter kommunizieren das nicht. Nicht aus Böswilligkeit – sondern weil sie selbst oft nicht wissen, wie ihr Feature rechtlich einzuordnen ist.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was jetzt zu tun ist</h3>
                <p className="mb-4">Hier sind drei Schritte für ein pragmatisches Change-Management:</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">1) Release-Review vor Rollout</h4>
                <p className="mb-4">Bevor ein Major-Update eingespielt wird, prüft jemand – intern oder extern –, ob sich etwas Wesentliches ändert:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Ändert sich die Zweckbestimmung?</li>
                    <li>Neue Datenflüsse?</li>
                    <li>Neue Automatismen?</li>
                </ul>
                <p className="mb-4">Das muss keine vierstündige Analyse sein. In den meisten Fällen reicht ein strukturiertes 30-Minuten-Review der Release Notes.</p>
                <p className="mb-4 font-bold">Wichtig: Fragen Sie Ihren Anbieter proaktiv nach den Release Notes, wenn diese nicht automatisch kommen.</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">2) DSFA-Update-Trigger</h4>
                <p className="mb-4">Wenn eine der Fragen oben mit "Ja" beantwortet wird, löst das eine DSFA-Aktualisierung aus. Das ist deutlich weniger Aufwand als ein Bußgeldverfahren, in dem Sie nicht nachweisen können, dass Sie die Datenverarbeitung unter Kontrolle hatten.</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">3) Dokumentierte Freigabe pro Standort</h4>
                <p className="mb-4">Wer hat wann welches Update für welche Standorte freigegeben? Das muss nachvollziehbar sein. Eine einfache Tabelle reicht: Datum, Standort, Software-Version, freigebende Person, Bemerkungen.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Das eigentliche Problem</h3>
                <p className="mb-4">Das Grundproblem ist nicht technisch. Es ist organisatorisch.</p>
                <p className="mb-4">IT-Sicherheit ist nicht dasselbe wie Compliance. Ihr IT-Dienstleister kann nicht beurteilen, ob ein Software-Update Ihre Datenschutzkonzepte obsolet macht oder Ihre Haftungsrisiken verändert.</p>
                <p className="mb-4">Die Frage ist: Wessen Job ist es dann?</p>
                <p className="mb-4">In vielen Organisationen lautet die ehrliche Antwort: "Niemandes." Es gibt eine Lücke zwischen IT-Betrieb und rechtlicher Verantwortung. Und diese Lücke wird größer, je komplexer Ihre IT-Landschaft wird.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was das für Sie bedeutet</h3>
                <p className="mb-4">Wenn Sie eine heterogene IT-Landschaft über mehrere Standorte betreiben und sich gerade fragen, ob Ihre Compliance mit Ihren Updates Schritt hält – Sie sind nicht allein.</p>
                <p className="mb-4">Sie brauchen einen Prozess. Einen schlanken, pragmatischen Governance-Mechanismus, der Software-Changes nicht blockiert, sondern rechtssicher macht.</p>
                <p className="mb-4">Genau dafür gibt es Legal Engineering.</p>
                <p className="mb-4">Wenn Sie wissen wollen, wie das konkret bei Ihnen aussehen könnte – lassen Sie uns reden. Bevor Ihr Datenschutzbeauftragter es tut.</p>

                <p className="text-sm text-gray-500 mt-8">#Praxissoftware #Update #Haftung #Compliance #LegalEngineering</p>
            </>
        )
    },
    {
        id: "due-diligence",
        tag: "Due Dilligence",
        date: "JAN 2026",
        title: "Ihr KI-Anbieter weiß nicht, ob sein Produkt legal ist. (Und Sie haften trotzdem.)",
        preview: "Dienstagvormittag. Verkaufsgespräch. Ein junger Mann in Sneakers und Hoodie sitzt Ihnen gegenüber. Sein Laptop glänzt mit Stickern von Tech-Konferenzen, die Sie nicht kennen.",
        content: (
            <>
                <p className="mb-4">Dienstagvormittag. Verkaufsgespräch. Ein junger Mann in Sneakers und Hoodie sitzt Ihnen gegenüber. Sein Laptop glänzt mit Stickern von Tech-Konferenzen, die Sie nicht kennen.</p>
                <p className="mb-4">Er zeigt Ihnen eine Demo. Eine KI, die Ihre Anrufe annimmt, Termine vergibt, Rezeptbestellungen entgegennimmt. Alles automatisch. Die Stimme klingt erstaunlich menschlich. Die MFA neben Ihnen sagt: "Das wäre ein Traum."</p>
                <p className="mb-4">Sie fragen: "Wo genau liegen die Patientendaten während der Verarbeitung?"</p>
                <p className="mb-4">Der junge Mann blinzelt. "Äh... in der Cloud?"</p>
                <p className="mb-4">"Welche Cloud? Wo steht der Server?"</p>
                <p className="mb-4">"Das muss ich nachschauen. Aber keine Sorge, wir sind voll DSGVO-konform."</p>
                <p className="mb-4">Sie nicken höflich. Das Gespräch geht weiter. Zwei Wochen später unterschreiben Sie einen Zweijahresvertrag für €24.000.</p>
                <p className="mb-4">Drei Monate später sitzt ein Brief vom Landesdatenschutzbeauftragten auf Ihrem Schreibtisch. Die gute Nachricht: Das KI-Tool funktioniert technisch einwandfrei. Die schlechte: Sie dürfen es nicht benutzen.</p>
                <p className="mb-4">Das ist keine Dystopie. Das ist Alltag.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Die unbequeme Wahrheit über KI-Anbieter im Gesundheitswesen</h3>
                <p className="mb-4">Hier ist, was Ihnen niemand beim Verkaufsgespräch erzählt:</p>
                <p className="mb-4">Die meisten KI-Anbieter, die gerade auf den Healthcare-Markt drängen, sind technisch brillant. Ihre Software funktioniert. Ihre Demos beeindrucken. Ihre Versprechen klingen verlockend.</p>
                <p className="mb-4">Aber viele von ihnen haben ihre juristische Hausaufgaben nicht gemacht.</p>
                <p className="mb-4">Nicht aus Bosheit. Sondern weil sie aus einer Welt kommen, in der "DSGVO-konform" ein Buzzword auf der Landing Page ist. Kein Konzept. Keine Architektur-Entscheidung. Kein Design-Prinzip.</p>
                <p className="mb-4">In anderen Branchen mag das funktionieren. In Healthcare nicht.</p>
                <p className="mb-4">Und hier kommt der Punkt, an dem es unangenehm wird: Wenn etwas schiefgeht, haften nicht die. Sie haften Sie.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Warum "DSGVO-konform" auf der Website nichts bedeutet</h3>
                <p className="mb-4">Sie kennen das vom Autokauf. Verkäufer verspricht: "Unfallfrei, Originalzustand, TÜV-frisch." Dann schauen Sie in die Papiere. Oder lassen es jemanden anschauen, der sich auskennt. Und plötzlich stellt sich heraus: Wurde mal seitlich touchiert, Motor läuft unrund, TÜV läuft in zwei Monaten ab.</p>
                <p className="mb-4">Bei Software ist es dasselbe. Nur dass niemand unter die Motorhaube schaut.</p>
                <p className="mb-4">"DSGVO-konform" ist das neue "klimaneutral". Jeder schreibt es auf die Website. Die wenigsten können erklären, was das konkret bedeutet. Und noch weniger können es beweisen.</p>
                <p className="mb-4">Hier ist, was in vielen Fällen dahintersteckt:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Ein Anwalt hat die Datenschutzerklärung geschrieben. (Gut.)</li>
                    <li>Niemand hat geprüft, ob die tatsächliche Software macht, was die Datenschutzerklärung verspricht. (Weniger gut.)</li>
                    <li>Der Server steht irgendwo. Keiner weiß genau wo. Aber "Cloud" klingt modern. (Katastrophe.)</li>
                </ul>
                <p className="mb-4">Das Problem ist nicht, dass die Anbieter böse sind. Das Problem ist, dass sie nicht aus Healthcare kommen.</p>
                <p className="mb-4">In der normalen Tech-Welt ist Datenschutz ein Compliance-Thema. Etwas, das man abhakt, bevor man launcht. In Healthcare ist es Betriebsgrundlage.</p>
                <p className="mb-4">Und das bedeutet: Sie müssen die Fragen stellen, die der Anbieter nicht von sich aus beantwortet. Weil er sie entweder nicht kennt. Oder nicht beantworten kann.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Die vier Fragen, die Ihr Anbieter beantworten können muss (und oft nicht kann)</h3>
                <p className="mb-4">Wenn Sie das nächste Mal in einem KI-Verkaufsgespräch sitzen, stellen Sie diese vier Fragen. In dieser Reihenfolge. Und beobachten Sie die Reaktion.</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">Frage 1: "Wo genau liegen meine Patientendaten während der Verarbeitung?"</h4>
                <p className="mb-4">Die Antwort "in der Cloud" ist keine Antwort. Das ist wie "irgendwo in Europa".</p>
                <p className="mb-4">Was Sie wissen müssen:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Steht der Server in der EU? (Wenn nicht: rote Flagge.)</li>
                    <li>Welcher Anbieter hostet? AWS, Google Cloud, Microsoft Azure? (Legitim, aber dann brauchen Sie Details.)</li>
                    <li>Werden Daten in Drittländer übertragen? (USA ist kompliziert. Andere Länder ohne Angemessenheitsbeschluss: vergessen Sie es.)</li>
                </ul>
                <p className="mb-4">Die richtige Antwort klingt so: "Wir nutzen Server in Frankfurt, gehostet bei diesem konkreten Anbieter, Daten verlassen nie die EU. Hier ist unser Datenschutzkonzept."</p>
                <p className="mb-4">Die falsche Antwort klingt so: "Das muss ich nachschauen. Aber keine Sorge, ist alles sicher."</p>
                <p className="mb-4">Wenn Ihr Anbieter nicht in 30 Sekunden erklären kann, wo Ihre Patientendaten landen, ist das Gespräch vorbei. Höflich verabschieden, Tür zu.</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">Frage 2: "Wer haftet, wenn Ihre KI einen Fehler macht?"</h4>
                <p className="mb-4">Die unbequeme Wahrheit: Sie. Nicht der Anbieter.</p>
                <p className="mb-4">Das hat das Landgericht Kiel 2024 sehr klar gesagt: Wer ein Werkzeug nutzt, haftet für das Ergebnis. Die KI ist ein Werkzeug. Wenn das Skalpell abrutscht, können Sie auch nicht den Hersteller verklagen. Aber – und das ist wichtig – Ihr Anbieter muss Ihnen die Möglichkeit geben, die KI zu kontrollieren.</p>
                <p className="mb-4">Das bedeutet konkret:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Kann ich jeden Output der KI prüfen, bevor er rausgeht? (Wenn nicht: rote Flagge.)</li>
                    <li>Gibt es eine "Auto-Send"-Funktion? (Wenn ja: noch größere rote Flagge.)</li>
                    <li>Kann ich nachvollziehen, was die KI gemacht hat? (Audit-Logs, Versionierung, Dokumentation.)</li>
                </ul>
                <p className="mb-4">Die richtige Antwort klingt so: "Alle KI-Outputs müssen von einem Menschen freigegeben werden. Wir loggen jeden Schritt. Hier ist unser Konzept für Human Oversight."</p>
                <p className="mb-4">Die falsche Antwort klingt so: "Unsere KI ist sehr zuverlässig, da passiert nichts."</p>
                <p className="mb-4">Spoiler: Doch, passiert. Und wenn es passiert, stehen Sie vor Gericht. Nicht der Typ im Hoodie.</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">Frage 3: "Haben Sie ein Datenschutzkonzept nach EU AI Act?"</h4>
                <p className="mb-4">Seit August 2024 gilt der AI Act. KI im Gesundheitsbereich ist Hochrisiko-Kategorie. Das bedeutet: Dokumentationspflichten, Konformitätsbewertungen, menschliche Aufsicht. Ab dem 2. August 2026 wird das voll durchgesetzt.</p>
                <p className="mb-4">Wenn Ihr Anbieter jetzt sagt: "Machen wir bis dahin", übersetzen Sie das mental mit: "Haben wir noch nicht." Und fragen Sie sich: Will ich meine Praxis auf ein Versprechen bauen?</p>
                <p className="mb-4">Die richtige Antwort klingt so: "Wir haben ein AI-Act-Compliance-Konzept. Unsere Zweckbestimmung ist die Unterstützung der medizinischen Dokumentation ohne Diagnosevorschläge. Unsere Risikoklasse ist Hochrisiko nach Anhang III. Hier sind die Unterlagen."</p>
                <p className="mb-4">Die falsche Antwort klingt so: "Wir sind voll compliant." (Ohne Details. Ohne Unterlagen. Nur Buzzwords.)</p>
                <p className="mb-4">Noch eine Variante der falschen Antwort: "Der AI Act betrifft uns nicht." (Spoiler: Doch. Tut er.)</p>

                <h4 className="font-bold text-gray-900 mt-4 mb-2">Frage 4: "Wie dokumentiere ich, dass ich die KI-Outputs geprüft habe?"</h4>
                <p className="mb-4">Das ist die Frage, die kaum jemand stellt. Aber sie ist die wichtigste. Denn im Haftungsfall reicht es nicht zu sagen: "Ich hab's geprüft." Sie müssen es beweisen.</p>
                <p className="mb-4">Das bedeutet:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Gibt es Logs, die zeigen, wann ich welches Dokument freigegeben habe?</li>
                    <li>Kann ich nachweisen, dass mein Team im Umgang mit der KI geschult wurde?</li>
                    <li>Kann ich dokumentieren, dass ich die Grenzen der KI kenne?</li>
                </ul>
                <p className="mb-4">Die richtige Antwort klingt so: "Jede Freigabe wird geloggt. Wir bieten Schulungen an. Hier ist unsere Dokumentationsvorlage für Ihre Praxis."</p>
                <p className="mb-4">Die falsche Antwort klingt so: "Müssen Sie nicht dokumentieren, ist ja nur ein Tool."</p>
                <p className="mb-4">Falsch. Müssen Sie. Und wenn der Anbieter das nicht weiß, weiß er auch sonst nicht viel.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was die Antworten über Ihren Anbieter verraten</h3>
                <p className="mb-4">Hier ist die Wahrheit: Die meisten KI-Anbieter sind keine Betrüger. Sie sind Optimisten. Sie glauben fest daran, dass ihr Produkt brillant ist. Und oft stimmt das sogar. Technisch.</p>
                <p className="mb-4">Aber viele von ihnen haben nie in einer Arztpraxis gearbeitet. Sie wissen nicht, was passiert, wenn der Datenschutzbeauftragte anruft. Sie haben noch nie einen Haftungsfall erlebt. Sie denken, Compliance ist ein Häkchen auf der To-Do-Liste. Bis es das nicht mehr ist. Und dann stehen nicht die vor Gericht. Sondern Sie.</p>
                <p className="mb-4">Deshalb: Stellen Sie die vier Fragen oben. Nicht, weil Sie misstrauisch sein müssen. Sondern weil Sie Ihre Praxis schützen müssen. Ein guter Anbieter wird Ihnen dankbar sein für die Fragen. Weil er weiß, dass Sie verstanden haben, worum es geht. Ein schlechter Anbieter wird ausweichen. Oder mit Buzzwords antworten.</p>
                <p className="mb-4">Ihre Aufgabe ist es nicht, das Produkt zu verstehen. Ihre Aufgabe ist es zu verstehen, ob Sie es nutzen dürfen. Und ob Sie im Ernstfall beweisen können, dass Sie sorgfältig gehandelt haben.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Der eigentliche Produktivitätsgewinn</h3>
                <p className="mb-4">Hier ist die Ironie: Die KI, die wirklich Zeit spart, ist nicht die mit der beeindruckendsten Demo. Es ist die, bei der Sie nachts ruhig schlafen können. Weil Sie wissen: Die Daten liegen richtig. Die Haftung ist geklärt. Die Dokumentation steht. Wenn etwas schiefgeht – und irgendwann geht immer etwas schief –, können Sie beweisen, dass Sie alles richtig gemacht haben.</p>
                <p className="mb-4">Das ist der wahre Produktivitätsgewinn. Nicht zwei Stunden mehr am Tag. Sondern null Stunden vor Gericht. KI in der Praxis ist keine Frage von "ob". Es ist eine Frage von "wie". Und "wie" beginnt mit den richtigen Fragen.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was Sie jetzt tun können</h3>
                <p className="mb-4"><strong>Wenn Sie gerade KI evaluieren:</strong> Drucken Sie sich die vier Fragen aus. Nehmen Sie sie mit ins nächste Verkaufsgespräch. Stellen Sie sie. Alle vier. Und beobachten Sie, was passiert.</p>
                <p className="mb-4"><strong>Wenn Sie schon KI nutzen:</strong> Stellen Sie die Fragen Ihrem Anbieter. Jetzt. Nicht morgen. Nicht nächsten Monat. Jetzt. Wenn er sie nicht beantworten kann, haben Sie ein Problem. Aber besser, Sie wissen es jetzt als in zwei Jahren, wenn der Brief vom Anwalt kommt.</p>
                <p className="mb-4"><strong>Wenn Sie unsicher sind:</strong> Lassen Sie es jemanden anschauen, der beide Seiten versteht. Technik und Recht. Produktivität und Compliance. Begeisterung und Vorsicht. Das kostet ein paar Stunden Beratung. Das ist deutlich günstiger als ein Bußgeld. Oder ein Haftungsfall. Oder ein Produkt, das Sie nach zwei Jahren nicht mehr nutzen dürfen.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Das Fazit</h3>
                <p className="mb-4">KI ist keine Magie. Sie ist Werkzeug. Und wie bei jedem Werkzeug gilt: Wer es nutzt, muss wissen, was es kann. Und was es nicht kann. Und wer haftet, wenn es schiefgeht. Ihr Anbieter verkauft Ihnen das Werkzeug. Aber die Verantwortung verkauft er nicht mit. Die behalten Sie. Also stellen Sie die Fragen. Bevor Sie unterschreiben.</p>

                <p className="text-sm text-gray-500 mt-8">#LegalEngineering #KI #Arztpraxis #DSGVO #Compliance</p>
            </>
        )
    },
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
        id: "haftung",
        tag: "HAFTUNG",
        date: "Nov 2025",
        title: "Der Arztbrief lügt. Wer zahlt? (Spoiler: Nicht die KI.)",
        preview: "Freitagnachmittag, 16:30 Uhr. Der Kopf raucht, das Wartezimmer leert sich endlich. Das neue KI-Tool hat den Arztbrief für Herrn Müller schon fertiggeschrieben. Ein kurzer Blick, digital signiert, raus damit. Feierabend.",
        content: (
            <>
                <p className="mb-4">Freitagnachmittag, 16:30 Uhr. Der Kopf raucht, das Wartezimmer leert sich endlich.</p>
                <p className="mb-4">Das neue KI-Tool hat den Arztbrief für Herrn Müller schon fertiggeschrieben. Ein kurzer Blick, digital signiert, raus damit. Feierabend.</p>
                <p className="mb-4">Zwei Wochen später liegt Post auf dem Tisch. Nicht von Herrn Müller, sondern von seinem Anwalt. Ein Befund wurde falsch übertragen, die Weiterbehandlung war fehlerhaft.</p>
                <p className="mb-4">Und jetzt kommt der Punkt, an dem viele Ärzte denken: „Dafür haftet doch der Software-Hersteller, oder?“</p>
                <p className="mb-4 font-bold">Spoiler: Nein. Tut er nicht.</p>
                <p className="mb-4">Das ist der Moment, in dem aus einem digitalen Komfort-Feature ein existenzbedrohendes Risiko wird.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Reden wir kurz über die Illusion der „intelligenten“ Verantwortung.</h3>
                <p className="mb-4">Wir sind es gewohnt, dass Technologie funktioniert. Wenn das MRT kaputt ist, rufen wir den Techniker. Wenn die KI halluziniert (also Dinge erfindet), rufen wir niemanden – wir merken es oft gar nicht.</p>
                <p className="mb-4">Das Landgericht Kiel hat im November 2024 das ausgesprochen, was Juristen schon lange predigen: Wer KI einsetzt, haftet für das Ergebnis. Ohne Wenn und Aber.</p>
                <p className="mb-4">Das Urteil stellt klar: Die Plausibilitätsprüfung ist nicht delegierbar. Nicht an die Software. Nicht an den Hersteller. Und auch nicht an die MFA, die „nur mal schnell drüberschauen“ soll.</p>
                <p className="mb-4">Das klingt hart. Ist es auch. Aber es ist konsequent.</p>
                <p className="mb-4">KI ist im juristischen Sinne kein Kollege, den man um Rat fragt. Sie ist ein Werkzeug. Wie ein Skalpell. Wenn das Skalpell abrutscht, können Sie auch nicht sagen: „Der Stahl war schuld.“ Sie führen die Hand.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was heißt das für die Praxis?</h3>
                <p className="mb-4">Das bedeutet nicht, dass Sie KI wieder abschaffen müssen (das wäre bei dem aktuellen Personalmangel auch Wahnsinn). Es bedeutet aber, dass sich Ihr Workflow ändern muss.</p>
                <p className="mb-4">Der Satz „Die KI hat das so geschrieben“ ist vor Gericht keine Verteidigung. Er ist ein Schuldeingeständnis. Er beweist nämlich, dass Sie ein Werkzeug benutzt haben, dessen Grenzen Sie nicht verstanden haben.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Hier sind die drei Dinge, die Sie tun müssen, damit Sie nachts ruhig schlafen können:</h3>
                <p className="mb-4"><strong>1. Human Oversight (Der menschliche Veto-Knopf)</strong><br />Jeder, wirklich jeder Output einer KI braucht einen menschlichen Prüfschritt. Und zwar nicht pro forma („Häkchen setzen“), sondern inhaltlich. Sie müssen den Arztbrief lesen, bevor Sie ihn signieren. Klingt nach Arbeit? Ja. Aber es geht immer noch schneller, als ihn selbst zu tippen. Der Zeitgewinn liegt im Entwurf, nicht in der Endkontrolle.</p>
                <p className="mb-4"><strong>2. Dokumentation ist Ihre Lebensversicherung</strong><br />Wenn etwas schiefgeht, müssen Sie beweisen können, dass Sie sorgfältig gearbeitet haben. Audit-Logs, Prüfprotokolle, Nachweise darüber, dass Sie und Ihr Team im Umgang mit den Grenzen der KI geschult wurden. Ohne Dokumentation ist es im Haftungsfall so, als hätten Sie nie geprüft.</p>
                <p className="mb-4"><strong>3. Verträge lesen (Ja, wirklich)</strong><br />Schauen Sie in die AGB Ihres KI-Anbieters. Viele schließen jede Haftung für inhaltliche Fehler aus. Das ist branchenüblich, aber für Sie ein Warnsignal. Wenn der Anbieter keine Verantwortung übernimmt, müssen Ihre internen Sicherheitsnetze umso engmaschiger sein.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Das Fazit:</h3>
                <p className="mb-4">KI in der Praxis ist ein kalkulierbares Risiko – keine unkontrollierbare Gefahr.</p>
                <p className="mb-4">Gefährlich wird es nur, wenn man „Automatisierung“ mit „blindem Vertrauen“ verwechselt. Wer die KI als das behandelt, was sie ist – ein extrem leistungsfähiger, aber manchmal verwirrter Assistent –, der gewinnt Zeit. Wer sie als Orakel behandelt, verliert im Zweifel seine Zulassung.</p>
                <p className="mb-4 font-bold">Nutzen Sie die Technologie. Aber behalten Sie die Verantwortung.</p>
                <p className="text-sm text-gray-500 mt-8">#KI #Haftung #Arztpraxis #DigitalHealth #LegalEngineering</p>
            </>
        )
    },
    {
        id: "ai-act",
        tag: "AI ACT",
        date: "Okt 2025",
        title: "Ihr Software-Vertrag läuft bis 2026? Dann haben wir ein Thema.",
        preview: "Ab August 2026 gelten neue Regeln für KI in der Medizin. Was müssen Praxen wissen, und wann wird Software zum Hochrisiko-System?",
        content: (
            <>
                <p className="mb-4">2. August 2026. Das klingt nach ferner Zukunft. Für den Praxisalltag ist das eine Ewigkeit. Aber für Ihre IT-Strategie ist es morgen.</p>
                <p className="mb-4">An diesem Stichtag greift der EU AI Act voll durch. Und wenn Sie heute Software einkaufen oder Lizenzverträge verlängern, die über dieses Datum hinauslaufen, sollten Sie jetzt genau hinschauen.</p>
                <p className="mb-4">Denn viele Tools, die heute noch als "innovative Assistenzsysteme" verkauft werden, wachen 2026 in einer neuen Realität auf: Sie sind plötzlich regulierte Hochrisiko-Systeme.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was das Gesetz eigentlich will</h3>
                <p className="mb-4">Der AI Act teilt KI nicht nach Intelligenz ein, sondern nach Risiko. Und Medizin ist – wenig überraschend – fast immer Hochrisiko. Das bedeutet für die Hersteller: Massive Anforderungen an Transparenz, Dokumentation und menschliche Aufsicht.</p>
                <p className="mb-4">Aber hier liegt das Detail, das Ihnen kaum ein Vertriebler erzählt: Nicht jede KI in der Praxis ist automatisch betroffen. Es kommt nicht auf die Technik an. Es kommt auf den Zweck an.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Die entscheidende Frage: Schreibt sie nur, oder denkt sie schon?</h3>
                <p className="mb-4">Die Grenze ist dünn, aber juristisch messerscharf.</p>
                <p className="mb-4">Ein Beispiel: Ein Diktiersystem, das Ihre gesprochenen Worte in Text umwandelt, ist ein Werkzeug. Es dokumentiert. Risiko: Niedrig. Ein System, das aus Ihren Notizen mitliest und automatisch Diagnosevorschläge oder Therapieoptionen generiert, ist eine Entscheidungshilfe. Risiko: Hoch.</p>
                <p className="mb-4">Die Grenze verläuft genau dort, wo die Software aufhört, Sekretär zu sein, und anfängt, Assistenzarzt zu spielen. Sobald klinische Entscheidungen beeinflusst werden, greifen die strengen Regeln.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Was Sie jetzt tun müssen</h3>
                <p className="mb-4">Wenn Sie gerade dabei sind, Ihre Praxis zu digitalisieren, stellen Sie Ihrem Anbieter eine simple Frage: "Wie ist die Zweckbestimmung Ihrer Software nach dem AI Act definiert?"</p>
                <p className="mb-4">Es gibt zwei mögliche Reaktionen.</p>
                <p className="mb-4">Die gute: Der Anbieter legt Ihnen eine Roadmap vor, wie er bis 2026 die Konformität sicherstellt. Die schlechte (und häufige): Betretenes Schweigen.</p>
                <p className="mb-4 font-bold">Spoiler: Wenn Ihr Anbieter nicht weiß, ob sein Produkt in 18 Monaten noch legal betreibbar ist, sollten Sie keinen 24-Monats-Vertrag unterschreiben.</p>
                <p className="mb-4">Der AI Act ist keine bürokratische Schikane, um Ärzte zu ärgern. Er ist eine Chance zur Professionalisierung. Er zwingt den Markt, die "Black Box" zu öffnen.</p>
                <p className="mb-4">Wer jetzt plant, hat 18 Monate Vorsprung. Das ist genug Zeit, um die Spreu vom Weizen zu trennen. Nutzen Sie sie.</p>
                <p className="text-sm text-gray-500 mt-8">#AIAct #Compliance #DigitalHealth #Medizinrecht #LegalEngineering</p>
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
        <section id="insights" className="py-[var(--section-padding)] bg-background border-t border-border-subtle transition-theme">
            <div className="container mx-auto px-4">
                <div className="text-left mb-16 max-w-4xl">
                    <ScrollReveal as="h2" className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight mx-0">
                        Klartext zu Recht & Technik.
                    </ScrollReveal>
                    <p className="text-text-primary/70 max-w-2xl text-lg mt-4">
                        Gedanken zu KI, DSGVO und dem Alltag in der Arztpraxis.
                    </p>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="w-[380px] flex-none bg-card p-8 rounded-custom border border-border-subtle hover:border-primary transition-theme cursor-pointer group snap-center"
                            onClick={() => setActiveArticle(article.id)}
                        >
                            <div className="flex items-center gap-3 mb-6 transition-theme tech-label">
                                <span className="text-primary">{article.tag}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-400">{article.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-text-primary/60 text-sm leading-relaxed mb-8 line-clamp-4">
                                {article.preview}
                            </p>
                            <div className="flex items-center text-sm font-bold text-foreground group-hover:translate-x-1 transition-transform">
                                Artikel lesen <ArrowRight className="w-4 h-4 ml-2 text-primary" />
                            </div>
                        </div>
                    ))}


                </div>

                <div className="text-center mt-12 theme-precision:text-left">
                    <a href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-foreground/50 hover:text-primary transition-colors">
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
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
                            onClick={() => setActiveArticle(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-card w-full max-w-3xl max-h-[90vh] rounded-custom shadow-2xl border border-border-subtle flex flex-col relative"
                            >
                                {/* Header / Close Button */}
                                <div className="flex-none p-4 flex justify-end border-b border-border-subtle z-10">
                                    <Button variant="ghost" size="sm" onClick={() => setActiveArticle(null)} className="rounded-custom hover:bg-gray-100">
                                        <X className="w-5 h-5" />
                                    </Button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-16 pt-8" data-lenis-prevent>
                                    <div className="flex items-center gap-3 mb-8 transition-theme theme-precision:tech-label">
                                        <span className="text-primary border border-primary px-3 py-1 rounded-custom">{activeData.tag}</span>
                                        <span className="opacity-40">{activeData.date}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 leading-[1.1]">
                                        {activeData.title}
                                    </h2>

                                    <div className="prose prose-gray max-w-none text-foreground/80 leading-relaxed text-lg">
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
