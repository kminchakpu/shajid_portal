import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import PortalOptions from "@/components/home/PortalOptions";
import ProgramsSection from "@/components/home/ProgramsSection";
import AdmissionSection from "@/components/home/AdmissionSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortalOptions />
        <ProgramsSection />
        <AdmissionSection />
      </main>
      <Footer />
    </>
  );
}