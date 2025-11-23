import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TrustAbout() {
    return (
        <section className="py-24 bg-sand/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8">
                            <User className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Über mich</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-8 leading-tight">
                            Diplom-Jurist & <br />
                            <span className="text-primary italic">AI Engineer</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                "Als ich 2018 meine erste Kanzlei automatisierte, merkte ich:
                                <strong className="text-gray-900 font-medium"> Anwälte und Ärzte haben das gleiche Problem.</strong>
                                Zu viel Bürokratie, zu wenig Zeit für das Wesentliche."
                            </p>
                            <p>
                                Ich bin kein typischer Software-Entwickler. Ich habe Jura studiert (Uni Bonn) und danach Programmieren gelernt.
                                Diese Kombination ist Ihr Vorteil: Ich verstehe nicht nur den Code, sondern auch das Gesetz (DSGVO, MDR, Fernbehandlungsgesetz).
                            </p>
                            <p>
                                Meine Mission: Ich baue KI-Systeme, die nicht nur technisch funktionieren, sondern
                                <strong className="text-gray-900 font-medium"> rechtssicher</strong> sind.
                                Damit Sie ruhig schlafen können, während die KI Ihre Arbeit macht.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">7+ Jahre Legal Tech</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Zertifizierter Datenschutz</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Full-Stack Developer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Spezialisierung: Medizin</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <Card className="w-full max-w-md aspect-[3/4] overflow-hidden relative border-none shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/profile.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                <p className="text-white font-serif text-xl">Daniel Kleiboldt</p>
                                <p className="text-white/80 text-sm">Legal Engineer & Founder</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
