import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractivePraxis } from "@/components/InteractivePraxis";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionOverview } from "@/components/SolutionOverview";
import { UseCases } from "@/components/UseCases";
import { LegalAssurance } from "@/components/LegalAssurance";
import { TrustAbout } from "@/components/TrustAbout";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-text-primary">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <InteractivePraxis />
      <SolutionOverview />
      <UseCases />
      <LegalAssurance />
      <TrustAbout />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
