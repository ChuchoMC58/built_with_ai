import Hero from "@/components/client/hero";
import Showcase from "@/components/client/showcase";
import Features from "@/components/client/features";
import Prompts from "@/components/client/prompts";
import Benefits from "@/components/client/benefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <Features />
  <Benefits />
    </main>
  );
}
