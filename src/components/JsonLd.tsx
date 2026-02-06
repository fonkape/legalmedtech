export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://kleiboldt.de/#person",
                "name": "Daniel Kleiboldt",
                "url": "https://kleiboldt.de",
                "image": "https://kleiboldt.de/profile_freigestellt.png",
                "jobTitle": "Legal Engineer & Healthcare AI Architect",
                "sameAs": [
                    "https://www.linkedin.com/in/daniel-kleiboldt-306a75123/",
                    "https://www.linkedin.com/in/daniel-kleiboldt/"
                ],
                "description": "Expert for Legal Engineering in Healthcare AI Compliance. Sovereign AI & Governance.",
                "knowsAbout": ["Healthcare AI", "Legal Engineering", "Medical Device Regulation", "AI Governance", "EU AI Act", "DSGVO"]
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://kleiboldt.de/#organization",
                "name": "Daniel Kleiboldt - Büro für Legal Engineering",
                "url": "https://kleiboldt.de",
                "logo": "https://kleiboldt.de/logo-master.svg",
                "image": "https://kleiboldt.de/profile_freigestellt.png",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Hülsbrockstraße 115",
                    "addressLocality": "Gütersloh",
                    "postalCode": "33334",
                    "addressCountry": "DE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.907,
                    "longitude": 8.38
                },
                "telephone": "+49 5241 7082012",
                "email": "mail@kleiboldt.de",
                "priceRange": "$$$",
                "description": "Rechtssichere Architektur für KI in der Medizin. Wir unterstützen Arztpraxen und Health-Tech bei der Umsetzung von EU AI Act, MDR und DSGVO.",
                "founder": { "@id": "https://kleiboldt.de/#person" },
                "areaServed": "Germany",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Legal Engineering Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Compliance Quickcheck",
                                "description": "Auditierung bestehender KI-Lösungen und Prozesse auf EU AI Act & DSGVO Konformität."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Sovereign AI Implementierung",
                                "description": "Technische Umsetzung von Open Source KI-Modellen auf eigener Infrastruktur für maximale Datensouveränität."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Legal Engineering Retainer",
                                "description": "Laufende technische und rechtliche Begleitung bei KI-Projekten."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Ist der Einsatz von ChatGPT in der Arztpraxis DSGVO-konform?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Die kostenlose Standard-Version von ChatGPT speichert Eingaben zum Training und hostet Daten in den USA. Die Eingabe von Patientendaten dort ist ein schwerer Datenschutzverstoß. Für eine rechtssichere Nutzung benötigen Sie: Eine explizite Einwilligung (oder Anonymisierung), einen AV-Vertrag mit OpenAI, und die Enterprise-Version mit 'Zero Data Retention'-Policy. Empfehlung: Setzen Sie auf lokale LLMs ('Sovereign AI'), die Ihre Praxis-IT nie verlassen."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Wer haftet, wenn KI in der Praxis einen Fehler macht?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Immer der Arzt. Auch der EU AI Act ändert am Grundsatz des 'Human in the Loop' nichts. Sie haften für Behandlungsfehler (§ 630a BGB), auch wenn die KI den falschen Vorschlag gemacht hat. Der EU AI Act verschärft jedoch Ihre Überwachungspflicht (Human Oversight): Sie müssen verstehen, wie die KI zu ihrem Ergebnis kommt, Sie müssen in der Lage sein, die KI jederzeit zu überstimmen, und Sie müssen Ihre Kontrolle dokumentieren."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Welche Bußgelder drohen bei Nichteinhaltung des EU AI Act?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Die Sanktionen gehen deutlich über die DSGVO hinaus: Bis 35 Mio. € (oder 7% Umsatz) für verbotene KI-Praktiken, bis 15 Mio. € (oder 3% Umsatz) für Verstöße gegen Hochrisiko-KI-Pflichten, bis 7,5 Mio. € (oder 1,5% Umsatz) für falsche Angaben. Für Ärzte besonders relevant: Der Einsatz von nicht-konformen Hochrisiko-Systemen (z.B. unzulässige Diagnosesoftware) fällt unter die 15 Mio. € Kategorie."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Muss ich als Arzt eine Schulungspflicht für KI erfüllen? (AI Literacy)",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ja. Nach Art. 4 EU AI Act sind Betreiber verpflichtet, Maßnahmen zur 'KI-Kompetenz' (AI Literacy) sicherzustellen. Das bedeutet: Sie und Ihr Praxispersonal müssen die Funktionsweise und Grenzen der eingesetzten KI verstehen und Risiken (z.B. Halluzinationen, Bias) erkennen können. Ohne nachweisbare Schulung kann im Schadensfall ein Organisationsverschulden angenommen werden."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Brauche ich eine Datenschutz-Folgenabschätzung (DSFA) für KI in meiner Praxis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In den meisten Fällen: Ja. Nach Art. 35 DSGVO ist eine DSFA zwingend, wenn 'neue Technologien' mit einem voraussichtlich hohen Risiko für die Rechte Betroffener eingesetzt werden. KI in der Gesundheitsversorgung erfüllt diese Kriterien fast immer (Verarbeitung sensibler Gesundheitsdaten gem. Art. 9 DSGVO + automatisierte Analyse). Starten Sie kein KI-Projekt ohne schriftliche Risikoanalyse."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
