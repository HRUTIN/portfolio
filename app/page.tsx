import { SiteShell } from "@/components/site-shell";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { JourneySection } from "@/sections/journey-section";
import { ProfileSection } from "@/sections/profile-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ProofSection } from "@/sections/proof-section";
import { SkillsSection } from "@/sections/skills-section";

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <ProfileSection />
      <AboutSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <ProofSection />
      <ContactSection />
    </SiteShell>
  );
}
