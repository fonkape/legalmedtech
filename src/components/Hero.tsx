import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-background via-white to-sand/20 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            <div className="container max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center h-full justify-center pt-20">

                {/* Headline */}
                <h1 className="font-serif font-medium tracking-tighter text-gray-900 mb-10 leading-[1.1] animate-fade-in-up">
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-4 text-gray-800">
                        Legal Engineering für die
                    </span>
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] italic text-[#B85450]">
                        medizinische Praxis.
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-600 font-light mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                    Ich baue KI-Systeme für Arztpraxen. <span className="text-gray-900 font-normal">Rechtssicher.</span>
                </p>

                {/* Credentials */}
                <div className="inline-flex items-center gap-3 border-t border-gray-200 pt-8 animate-fade-in-up delay-200">
                    <span className="text-sm font-bold text-gray-900 tracking-widest uppercase">Daniel Kleiboldt</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">Jurist & AI Engineer</span>
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
