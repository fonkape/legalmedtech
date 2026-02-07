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
                "description": "Diplom-Jurist und Software Engineer spezialisiert auf rechtssichere KI-Integration im Gesundheitswesen. 10 Jahre Konzernerfahrung in Compliance und Change Management.",
                "hasCredential": [
                    {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "degree",
                        "name": "Diplom-Jurist"
                    }
                ],
                "hasOccupation": [
                    {
                        "@type": "Occupation",
                        "name": "Legal Engineer",
                        "occupationLocation": { "@type": "Country", "name": "Germany" }
                    },
                    {
                        "@type": "Occupation",
                        "name": "Software Engineer",
                        "occupationLocation": { "@type": "Country", "name": "Germany" }
                    }
                ],
                "knowsAbout": [
                    "Healthcare AI",
                    "Legal Engineering",
                    "Medical Device Regulation (MDR)",
                    "AI Governance",
                    "EU AI Act",
                    "DSGVO",
                    "§ 203 StGB",
                    "Software Engineering",
                    "LLM Architecture",
                    "Privacy by Design",
                    "Compliance by Design",
                    "Data Protection Impact Assessment (DSFA)",
                    "Human Oversight",
                    "AI Literacy",
                    "Sovereign AI",
                    "Open Source LLM",
                    "HIPAA equivalent German regulations",
                    "CE Marking for Medical Software"
                ]
            },
            {
                "@type": ["ProfessionalService", "LegalService"],
                "@id": "https://kleiboldt.de/#organization",
                "name": "Daniel Kleiboldt - Büro für Legal Engineering",
                "alternateName": "Kleiboldt Legal Engineering",
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
                "description": "Rechtssichere Architektur für KI in der Medizin. Wir unterstützen Kliniken, Arztpraxen, MVZs und Health-Tech-Unternehmen bei der Umsetzung von EU AI Act, MDR und DSGVO. Compliance by Design statt nachträglichem Audit.",
                "slogan": "Rechtssichere KI-Integration für Kliniken und Praxen",
                "founder": { "@id": "https://kleiboldt.de/#person" },
                "areaServed": {
                    "@type": "Country",
                    "name": "Germany"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Healthcare Professionals",
                    "geographicArea": { "@type": "Country", "name": "Germany" }
                },
                "serviceType": [
                    "Healthcare AI Compliance",
                    "Legal Engineering",
                    "EU AI Act Beratung",
                    "MDR Compliance",
                    "DSGVO Beratung",
                    "KI-Compliance für Arztpraxen",
                    "Sovereign AI Implementation"
                ],
                "knowsAbout": [
                    "EU AI Act Betreiberpflichten",
                    "Hochrisiko-KI im Gesundheitswesen",
                    "Medical Device Regulation",
                    "Datenschutz-Folgenabschätzung",
                    "Human Oversight für KI",
                    "AI Literacy Schulungen",
                    "Privacy by Design",
                    "Lokale LLM-Installation"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Legal Engineering Services für Healthcare AI",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI-Readiness & Potenzialanalyse",
                                "description": "Workflow-Analyse, IT-Infrastruktur-Assessment, Datenschutz-Erstbewertung und Use-Case-Priorisierung mit Roadmap für Praxen am Anfang der KI-Reise.",
                                "serviceType": "AI Strategy Consulting",
                                "provider": { "@id": "https://kleiboldt.de/#organization" }
                            },
                            "price": "1900",
                            "priceCurrency": "EUR",
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "price": "1900",
                                "priceCurrency": "EUR",
                                "valueAddedTaxIncluded": false
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Compliance-Quickcheck",
                                "description": "Auditierung bestehender KI-Lösungen (Doctolib, CGM, Microsoft Dragon Copilot) auf EU AI Act, DSGVO und MDR Konformität. Betreiberpflichten-Analyse, Human Oversight Bewertung, DSFA-Notwendigkeitsprüfung.",
                                "serviceType": "AI Compliance Audit",
                                "provider": { "@id": "https://kleiboldt.de/#organization" }
                            },
                            "price": "3000",
                            "priceCurrency": "EUR"
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Sovereign AI Implementation",
                                "description": "Lokale LLM-Installation (Llama, Mistral, Phi) auf eigener Infrastruktur. Privacy-by-Design-Architektur, Zero-Knowledge-Deployment, § 203 StGB konforme Lösung für maximale Datensouveränität.",
                                "serviceType": "AI Implementation",
                                "provider": { "@id": "https://kleiboldt.de/#organization" }
                            },
                            "price": "15000",
                            "priceCurrency": "EUR"
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Technical Compliance Engineering",
                                "description": "Compliance-as-Code für Health-Tech Startups und KI-Anbieter. Privacy-Proxy-Entwicklung, MDR-Zertifizierungsbegleitung, AI Act Technical Documentation, CE-Marking Vorbereitung.",
                                "serviceType": "Regulatory Compliance Engineering",
                                "provider": { "@id": "https://kleiboldt.de/#organization" }
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Klinik-Leistungspaket",
                                "description": "Drei-Phasen-Ansatz für Kliniken: A) Technische Lastenheft-Spezifikation (Risikoklassifizierung, Data Governance, Logging), B) Procurement & Vendor Management (Ausschreibungen, Vendor Due Diligence, Vertragsgestaltung), C) Implementation Oversight (QMS, Post-Market Monitoring, AI Literacy).",
                                "serviceType": "Enterprise AI Governance",
                                "provider": { "@id": "https://kleiboldt.de/#organization" }
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
                    },
                    {
                        "@type": "Question",
                        "name": "Was ist Legal Engineering und warum brauche ich es für KI im Gesundheitswesen?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Legal Engineering bedeutet, Compliance von Anfang an in die Systemarchitektur einzubauen – nicht nachträglich draufzukleben. Im Gesundheitswesen überschneiden sich EU AI Act, MDR und DSGVO, teilweise widersprechen sie sich. Ein Legal Engineer spricht sowohl die Sprache der IT als auch des Rechts und kann rechtssichere Architektur von Tag 1 an liefern – mit einem Ansprechpartner statt drei."
                        }
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://kleiboldt.de/#website",
                "url": "https://kleiboldt.de",
                "name": "Kleiboldt Legal Engineering",
                "description": "Healthcare AI Compliance - Rechtssichere KI-Integration für Kliniken und Praxen",
                "publisher": { "@id": "https://kleiboldt.de/#organization" },
                "inLanguage": "de-DE"
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
