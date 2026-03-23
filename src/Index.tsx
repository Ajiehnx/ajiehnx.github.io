import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsSnapshot } from "@/components/home/SkillsSnapshot";
import { CertificationsStrip } from "@/components/home/CertificationsStrip";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProposition />
      <FeaturedProjects />
      <SkillsSnapshot />
      <CertificationsStrip />
      <CTASection />
    </Layout>
  );
};

export default function Index() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Ernest Ajieh</h1>
      <p>My portfolio website is now live on GitHub Pages.</p>
    </main>
  )
}
