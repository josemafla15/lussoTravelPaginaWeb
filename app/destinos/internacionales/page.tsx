import DestinoExplorer from "@/components/destinos/DestinoExplorer";
import CtaBanner from "@/components/home/ctaBannet";

export const metadata = {
  title: "Destinos internacionales",
  description:
    "Descubre el mundo con Lusso Travel: Cancún, Punta Cana, Río de Janeiro, Ciudad de México, Panamá y circuitos por Europa. Cotiza tu viaje soñado.",
};

export default function DestinosInternacionalesPage() {
  return (
    <main>
      <DestinoExplorer tipo="internacional" />
      <CtaBanner
          titulo="El mundo entero"
          tituloItalica="te está esperando."
          subtitulo="Caribe, Europa, Latinoamérica — dinos a dónde soñaste ir y armamos el plan completo."
          mensajeWhatsApp="Hola, quiero un viaje internacional"
          asset="/images/assets/asset_04.png"
          color="blue"
        />
    </main>
  );
}