import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center">
            <nav className="flex items-center justify-between rounded-full border border-gray-200 bg-white/95 backdrop-blur-md shadow-sm py-3 px-6 w-full max-w-[95%]">
                {/* Left: Logo Area */}
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="font-mono text-xl font-bold text-primary tracking-tighter">
                        {"{ dk }"}
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="flex flex-col justify-center leading-[1.2]">
                        <span className="font-sans text-[18px] font-medium text-[#334155] normal-case">
                            Daniel Kleiboldt
                        </span>
                        <span className="font-sans text-[12px] font-normal text-[#64748b] uppercase tracking-[0.05em]">
                            BÜRO FÜR LEGAL ENGINEERING
                        </span>
                    </div>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link href="#solutions" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Lösung
                    </Link>
                    <Link href="#use-cases" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Use Cases
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Profil
                    </Link>
                    <Link href="#insights" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Insights
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Kontakt
                    </Link>
                </div>

            </nav>
        </div>
    );
}
