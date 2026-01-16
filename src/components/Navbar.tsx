import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 transition-theme theme-precision:top-0 theme-precision:px-0">
            <nav className="flex items-center justify-between transition-theme bg-white/95 backdrop-blur-md py-4 px-6 md:px-12 w-full border-b border-gray-100 theme-precision:bg-card/95 theme-precision:border-border-subtle theme-legacy:rounded-full theme-legacy:mt-6 theme-legacy:mx-auto theme-legacy:max-w-[95%] theme-legacy:border">
                {/* Left: Logo Area */}
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="font-mono text-2xl font-bold text-primary tracking-tighter">
                        {"{ dk }"}
                    </div>
                    <div className="h-8 w-px bg-border-subtle"></div>
                    <div className="h-8 flex flex-col justify-between">
                        <span className="font-sans text-[14px] font-bold text-foreground leading-none">
                            Daniel Kleiboldt
                        </span>
                        <span className="font-sans text-[10px] font-bold text-foreground/50 uppercase tracking-[0.2em] leading-none">
                            LEGAL ENGINEERING
                        </span>
                    </div>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <Link href="#about" className="text-xs font-bold text-foreground/60 hover:text-primary transition-all uppercase tracking-widest">
                        Über mich
                    </Link>
                    <Link href="#methodik" className="text-xs font-bold text-foreground/60 hover:text-primary transition-all uppercase tracking-widest">
                        Methodik
                    </Link>
                    <Link href="#angebot" className="text-xs font-bold text-foreground/60 hover:text-primary transition-all uppercase tracking-widest">
                        Angebot
                    </Link>
                    <Link href="#insights" className="text-xs font-bold text-foreground/60 hover:text-primary transition-all uppercase tracking-widest">
                        Insights
                    </Link>
                    <Link href="#contact" className="text-xs font-bold text-foreground/60 hover:text-primary transition-all uppercase tracking-widest">
                        Kontakt
                    </Link>
                </div>
            </nav>
        </div>
    );
}
