import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-background via-white to-sand/20 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            <div className="container max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center h-full justify-center pt-20">

                {/* Headline */}
                <h1 className="font-serif font-medium tracking-tighter text-gray-900 mb-8 leading-[1.1] animate-fade-in-up">
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-4 text-gray-800">
                        Legal Engineering für
                    </span>
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] italic text-[#B85450]">
                        Healthcare-KI-Compliance
                    </span>
                </h1>

                {/* Tagline / Subheadline */}
                <div className="max-w-3xl mx-auto mb-10 animate-fade-in-up delay-100">
                    <p className="text-xl md:text-2xl text-gray-900 font-medium mb-4 leading-relaxed">
                        Doctolib für Termine. <br className="hidden md:block" />
                        Legal Engineering für Rechtssicherheit.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        Wenn Standard-Software Ihre Compliance-Fragen nicht beantwortet, kombiniere ich juristische Expertise mit AI Engineering – vom Datenschutzkonzept bis zum Code.
                    </p>
                </div>

                {/* Credentials */}
                <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-12 animate-fade-in-up delay-200">
                    Diplom-Jurist (WWU Münster) • AI Engineer • Spezialisiert auf EU AI Act, MDR, DSGVO
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
                    <Link href="#contact">
                        <Button size="lg" variant="primary" className="shadow-lg">
                            Compliance-Quickcheck buchen
                        </Button>
                    </Link>
                    <Link href="#insights">
                        <Button size="lg" variant="outline">
                            Artikel lesen
                        </Button>
                    </Link>
                </div>

            </div>

            {/* Static Scroll Arrow */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-300">
                <ArrowDown className="w-6 h-6" />
            </div>

            {/* Subtle Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -right-[5%] top-[15%] w-[600px] h-[600px] bg-sand/10 rounded-full blur-[120px]" />
                <div className="absolute -left-[10%] bottom-[10%] w-[800px] h-[800px] bg-gray-100/50 rounded-full blur-[150px]" />
            </div>
        </section>
    );
}
