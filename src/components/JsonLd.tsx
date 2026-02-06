export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Daniel Kleiboldt",
        "url": "https://kleiboldt.de",
        "jobTitle": "Legal Engineer & Healthcare AI Architect",
        "sameAs": [
            "https://www.linkedin.com/in/daniel-kleiboldt/"
        ],
        "description": "Expert for Legal Engineering in Healthcare AI Compliance. Sovereign AI & Governance.",
        "knowsAbout": ["Healthcare AI", "Legal Engineering", "Medical Device Regulation", "AI Governance"]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
