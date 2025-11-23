import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Phone, FileText, ShieldAlert, ArrowDown } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Kennen Sie das?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Der tägliche Spagat zwischen Patientenversorgung und Bürokratie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <Card className="border-none shadow-lg bg-background/50 hover:bg-white transition-colors duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl mb-2">Warteschleife statt Sprechstunde</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Ihre MFA verbringt 4-6 Stunden täglich am Telefon. Patienten warten 15 Minuten in der Warteschleife.
                                50% aller Praxen finden keine neuen Mitarbeiter.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-none shadow-lg bg-background/50 hover:bg-white transition-colors duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-primary">
                                <FileText className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl mb-2">Dokumentations-Hölle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Sie schreiben bis Mitternacht Arztbriefe. 3 Stunden täglich verschwinden in Bürokratie statt bei Patienten.
                                Burnout droht bei 59% aller Ärzte.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
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
                        <p className="text-primary font-serif italic text-lg">
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
