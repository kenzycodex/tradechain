export const metadata = {
  title: "TradeChain",
  description: "TradeChain is a cutting-edge platform that enables seamless, secure, and transparent commodity trading.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import StatsSection from "@/components/stats";
import About from "@/components/about";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/FAQ";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <StatsSection />
      <About />
      <Workflows />
      <Features />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}
