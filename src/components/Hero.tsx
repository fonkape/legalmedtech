import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sand/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <Badge variant="secondary" className="mb-8 animate-fade-in">
                    Legal Engineering für Arztpraxen
                </Badge>

                <h1 className="mx-auto max-w-5xl font-serif text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                    Mehr Zeit für Patienten.
                    <span className="block text-primary mt-2">Weniger Bürokratie-Stress.</span>
                </h1>

                <p className="mx-auto max-w-2xl text-xl text-gray-600 mb-12 md:text-2xl leading-relaxed">
                    Sie verbringen 3 Stunden täglich mit Arztbriefen, Telefon und Papierkram statt mit Ihren Patienten?
                    KI kann das ändern – rechtssicher und DSGVO-konform. Ich zeige Ihnen wie.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" className="w-full sm:w-auto group text-lg px-8 py-6 rounded-full">
                        Kostenlose Erstberatung (15 Min.)
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full">
                        Praxis-Simulator starten
                    </Button>
                </div>
            </div>
        </section>
    );
}
