import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSnapshot } from "@/components/TrustSnapshot";
import { ProblemStatement } from "@/components/ProblemStatement";
import { TheMoment } from "@/components/TheMoment";
import { InteractivePraxis } from "@/components/InteractivePraxis";
import { SocialProofTeaser } from "@/components/SocialProofTeaser";
import { SolutionOverview } from "@/components/SolutionOverview";
import { UseCases } from "@/components/UseCases";
import { UrgencySection } from "@/components/UrgencySection";
import { LegalAssurance } from "@/components/LegalAssurance";
import { TrustAbout } from "@/components/TrustAbout";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/20">
      <StickyCTA />
      <Navbar />
      <Hero />
      <TrustSnapshot />
      <ProblemStatement />
      <TheMoment />
      <div id="interactive-praxis">
        <InteractivePraxis />
      </div>
      <SocialProofTeaser />
      <div id="solutions">
        <SolutionOverview />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <UrgencySection />
      <LegalAssurance />
      <div id="about">
        <TrustAbout />
      </div>
      <div id="insights">
        <FAQ />
      </div>
      <FinalCTA />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
