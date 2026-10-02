import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import PortalOptions from "@/components/home/PortalOptions";
import ProgramsSection from "@/components/home/ProgramsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortalOptions />
        <ProgramsSection />
      </main>
    </>
  );
}