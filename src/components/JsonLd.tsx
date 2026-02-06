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
                        "name": "Mein KI-Anbieter sagt, alles ist DSGVO-konform. Reicht das nicht?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nein. 'DSGVO-konform' auf einer Marketing-Seite ist eine Zusicherung des Herstellers – nicht Ihre Absicherung als Betreiber. Der Hersteller liefert Software, Sie setzen sie ein und haften. Sie müssen u.a. eine Datenschutz-Folgenabschätzung durchführen und Human Oversight technisch umsetzen."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Kann ich nicht einfach einen Anwalt fragen?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ein Anwalt sagt Ihnen, ob etwas legal ist – nicht, wie Sie es technisch umsetzen. Ich bin Legal Engineer: Ich sage nicht nur 'was' rechtlich nötig ist, sondern auch 'wie' man es technisch implementiert."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Was kostet mich das?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quickcheck (Audit) ab 3.000 € (Festpreis). Sovereign AI Implementierung ab 15.000 € (Projekt). Retainer (laufende Beratung) ab 2.000 €/Monat. Zum Vergleich: Ein Datenschutzverstoß oder Haftungsfall ist meist deutlich teurer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Warum sollte ich Ihnen vertrauen?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "1. 10 Jahre Corporate Compliance Erfahrung. 2. Tiefes technisches Verständnis (Code & Architektur). 3. Unabhängige Beratung ohne Verkaufsdruck."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Ist das nicht alles übertrieben? Bisher ist doch nichts passiert.",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Der EU AI Act gilt seit August 2024. Wir sind in einer Übergangsphase ähnlich wie bei der DSGVO 2018. Wer sich jetzt vorbereitet, vermeidet später Hektik und Bußgelder."
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
