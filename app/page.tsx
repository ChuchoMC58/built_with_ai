import Hero from "@/components/client/hero";
import Showcase from "@/components/client/showcase";
import Features from "@/components/client/features";
import Prompts from "@/components/client/prompts";
import Benefits from "@/components/client/benefits";
import Cta from "@/components/client/cta";
import SiteFooter from "@/components/client/site-footer";
import Navbar from "@/components/client/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
  <Benefits />
  <Cta />
  <SiteFooter />
    </main>
  );
}
