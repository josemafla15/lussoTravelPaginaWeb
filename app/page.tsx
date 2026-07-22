import HeroSection from "@/components/home/HeroSection";
import DestinosDestacados from "@/components/home/DestinosDestacados";
import CtaBanner from "@/components/home/ctaBannet";
import ServiciosDestacados from "@/components/home/ServiciosDestacados";
import PorQueNosotros from "@/components/home/PorQueNosotros";
import CtaFinal from "@/components/home/CtaFinal";
import Resenas from "@/components/home/Resenas";

export const metadata = {
  title: "Lusso Travel | Agencia de viajes a tu medida",
  description:
    "Diseñamos viajes nacionales e internacionales a tu medida: Caribe, Europa, luna de miel y más. Asesoría personalizada y cotización por WhatsApp.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <DestinosDestacados /> */}
      <CtaBanner />
      <ServiciosDestacados />
      <Resenas />
      <PorQueNosotros />
      <CtaFinal />
    </main>
  );
}