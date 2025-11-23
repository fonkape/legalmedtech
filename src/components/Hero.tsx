import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
    return (

        <section className="relative bg-background min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4">
            <div className="container max-w-6xl mx-auto text-center">

                {/* Badge */}
                <div className="mb-12 animate-fade-in">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] font-bold tracking-[0.15em] text-primary uppercase shadow-sm">
                        Legal Engineering für Arztpraxen
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium tracking-tight text-text-primary mb-12 leading-[1.1]">
                    Mehr Zeit für <br className="hidden md:block" />
                    <span className="italic text-primary">Patienten.</span>
                </h1>

                {/* Subheadline */}
                <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16">
                    Sie verbringen 3 Stunden täglich mit Arztbriefen, Telefon und Papierkram statt mit Ihren Patienten?
                    KI kann das ändern – rechtssicher und DSGVO-konform. Ich zeige Ihnen wie.
                </p>

                {/* CTA */}
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-8 py-6 rounded-full flex items-center gap-2 transition-all hover:scale-105">
                        Kostenlose Erstberatung
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
