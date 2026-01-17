import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 overflow-hidden transition-theme theme-legacy:bg-gradient-to-b theme-legacy:from-background theme-legacy:via-white theme-legacy:to-sand/20 theme-precision:bg-[#121212] theme-precision:text-white theme-precision:py-[160px]">
            <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">

                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:mx-0">
                    {/* Headline */}
                    <h1 className="font-bold tracking-tight mb-8 leading-[1.1] transition-theme">
                        <span className="block text-3xl sm:text-4xl md:text-5xl mb-4 theme-legacy:text-gray-800 theme-precision:text-white/60">
                            Legal Engineering für
                        </span>
                        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] theme-legacy:italic theme-legacy:text-[#2563EB] theme-precision:text-white uppercase tracking-tighter">
                            Healthcare-KI-Compliance
                        </span>
                    </h1>

                    {/* Tagline / Subheadline */}
                    <div className="mb-10 transition-theme">
                        <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed theme-legacy:text-gray-900 theme-precision:text-white">
                            Doctolib für Termine. <br className="hidden md:block" />
                            Legal Engineering für Rechtssicherheit.
                        </p>
                        <p className="text-lg md:text-xl font-light leading-relaxed theme-legacy:text-gray-600 theme-precision:text-white/70">
                            Wenn Standard-Software Ihre Compliance-Fragen nicht beantwortet, kombiniere ich juristische Expertise mit AI Engineering – vom Datenschutzkonzept bis zum Code.
                        </p>
                    </div>

                    {/* Credentials */}
                    <p className="mb-12 transition-theme theme-legacy:text-sm theme-legacy:font-medium theme-legacy:tracking-wide theme-legacy:uppercase theme-legacy:text-gray-500 theme-precision:tech-label theme-precision:text-primary">
                        Diplom-Jurist (WWU Münster) • AI Engineer • Spezialisiert auf EU AI Act, MDR, DSGVO
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="#contact">
                            <Button size="lg" variant="primary" className="theme-legacy:shadow-lg">
                                Compliance-Quickcheck buchen
                            </Button>
                        </Link>
                        <Link href="#insights">
                            <Button size="lg" variant="outline" className="theme-precision:border-white theme-precision:text-white theme-precision:hover:bg-white/10">
                                Artikel lesen
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Profile Image (Precision Design) */}
                <div className="hidden lg:block flex-shrink-0 animate-fade-in transition-theme theme-precision:opacity-100 theme-legacy:hidden opacity-0">
                    <div className="relative w-[400px] h-[500px] border border-white/20">
                        <Image
                            src="/profile2.jpg"
                            alt="Daniel Kleiboldt"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 border-[12px] border-[#121212] pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Static Scroll Arrow */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 theme-legacy:text-gray-300 theme-precision:text-primary">
                <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Subtle Background (Legacy Only) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 theme-precision:hidden">
                <div className="absolute -right-[5%] top-[15%] w-[600px] h-[600px] bg-sand/10 rounded-full blur-[120px]" />
                <div className="absolute -left-[10%] bottom-[10%] w-[800px] h-[800px] bg-gray-100/50 rounded-full blur-[150px]" />
            </div>
        </section>
    );
}
