import ExperienciasExplorer from "../ExperienciasExplorer";
import CtaBanner from "@/components/home/ctaBannet";

export const metadata = {
  title: "Experiencias",
  description:
    "Vive Xcaret, Disney y Universal. Los parques temáticos más icónicos del mundo, ahora al alcance de tu próximo viaje con Lusso Travel.",
};

export default function ExperienciasPage() {
  return (
    <main>
      <ExperienciasExplorer />
      <CtaBanner
        titulo="La magia también"
        tituloItalica="es un destino."
        subtitulo="Cuéntanos qué parque sueñas visitar y armamos tu viaje completo."
        mensajeWhatsApp="Hola, quiero viajar a un parque temático"
        color="blue"
      />
    </main>
  );
}