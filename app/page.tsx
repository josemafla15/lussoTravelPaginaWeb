import HeroSection from "@/components/home/HeroSection";
import DestinosDestacados from "@/components/home/DestinosDestacados";
import CtaBanner from "@/components/home/ctaBannet";
import ServiciosDestacados from "@/components/home/ServiciosDestacados";
import PorQueNosotros from "@/components/home/PorQueNosotros";
import CtaFinal from "@/components/home/CtaFinal";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DestinosDestacados />
      <CtaBanner />
      <ServiciosDestacados />
      <PorQueNosotros />
      <CtaFinal />

      
    </main>
  );
}