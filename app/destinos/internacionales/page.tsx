import DestinoExplorer from "@/components/destinos/DestinoExplorer";
import CtaBanner from "@/components/home/ctaBannet";

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