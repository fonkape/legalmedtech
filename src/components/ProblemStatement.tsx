import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PhoneOff, FileClock, ShieldAlert, ArrowDown } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Der stille Burnout
                    </h2>
                    <Card className="border-none shadow-lg bg-background/50 hover:bg-white transition-colors duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-primary">
                                <ShieldAlert className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl mb-2">DSGVO-Unsicherheit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                ChatGPT für Patientendaten? Ihre Datenschutzbeauftragte droht mit Kündigung.
                                Cloud-Lösungen aus den USA = Bußgeldrisiko. Aber wie geht es rechtssicher?
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl font-medium text-gray-800 mb-8">
                        Diese Probleme kosten Sie nicht nur Zeit – sondern auch Gesundheit, Patientenzufriedenheit und Umsatz.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-primary italic text-lg">
                            Aber es gibt eine Lösung. Und sie ist näher, als Sie denken.
                        </p>
                        <Button size="lg" className="group">
                            Entdecken Sie Ihre Praxis der Zukunft
                            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
