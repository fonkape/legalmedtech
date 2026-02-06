import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, ArrowRight, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
    return (
        <section id="contact" className="py-[var(--section-padding)]" style={{ backgroundColor: '#2563EB', color: '#ffffff' }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column: Text & CTA */}
                    <div className="w-full md:w-[60%] text-left">
                        <div className="max-w-4xl mr-auto mb-12 text-left">
                            <ScrollReveal as="h2" className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight mr-auto text-white">
                                Der erste Schritt: Klarheit statt Haftungsrisiko.
                            </ScrollReveal>
                            <p className="text-xl text-white/90 max-w-2xl mr-auto leading-relaxed">
                                Sie planen KI-Einsatz in Ihrer Praxis? Oder nutzen bereits Tools wie Doctolib?
                            </p>
                            <div className="text-lg text-white/80 max-w-2xl mr-auto mt-6 space-y-2">
                                <p>Im kostenlosen 20-Minuten-Gespräch klären wir:</p>
                                <ul className="list-disc list-inside text-left inline-block">
                                    <li>Wo liegen Ihre Haftungsrisiken?</li>
                                    <li>Welche Betreiberpflichten gelten für Sie?</li>
                                    <li>Wie setzen Sie das technisch um?</li>
                                </ul>
                                <p className="pt-4 font-medium text-white">Kein Verkaufsgespräch. Nur Klarheit.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start text-left">
                            {/* Primary CTA */}
                            <a
                                href="https://calendly.com/daniel-kleiboldt/potenzialanalyse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="text-lg md:text-xl px-8 py-6 h-auto bg-white text-[#2563EB] hover:bg-white/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <Calendar className="w-5 h-5 mr-3" />
                                    Erstgespräch buchen
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </a>

                            {/* Separator */}
                            <div className="flex items-center gap-4 my-8 text-white/60 text-sm font-medium w-full max-w-xs">
                                <div className="h-px bg-white/20 flex-grow"></div>
                                <span>oder</span>
                                <div className="h-px bg-white/20 flex-grow"></div>
                            </div>

                            {/* Secondary Options */}
                            <div className="flex flex-col items-start gap-4">
                                <a
                                    href="mailto:mail@kleiboldt.de"
                                    className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-base font-medium py-2 pr-4 rounded hover:bg-white/10"
                                    style={{ color: '#ffffff' }}
                                >
                                    <Mail className="w-4 h-4" />
                                    mail@kleiboldt.de
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/daniel-kleiboldt-306a75123/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-[#0077b5] transition-colors text-base font-medium py-2 pr-4 rounded hover:bg-white/10"
                                    style={{ color: '#ffffff' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-8 md:mt-0">
                        {/* Using standard img tag as Next/Image might complicate things if width/height not perfectly known, 
                            but for best practice Next/Image is better. User specified width constraints. 
                            I'll use a standard img tag for simplicity and exact control as requested. */}
                        <img
                            src="/profile_freigestellt.png"
                            alt="Daniel Kleiboldt – Legal Engineer für Healthcare-KI-Compliance"
                            className="w-[250px] md:w-[350px] lg:w-[400px] h-auto object-contain"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
