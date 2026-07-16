import DestinoExplorer from "@/components/destinos/DestinoExplorer";
import CtaBanner from "@/components/home/ctaBannet";

export const metadata = {
  title: "Destinos nacionales",
  description:
    "Viaja por Colombia con Lusso Travel: Santa Marta, San Andrés, Cartagena, La Guajira y Coveñas. Planes a tu medida con acompañamiento completo.",
};

export default function DestinosNacionalesPage() {
  return (
    <main>
      <DestinoExplorer tipo="nacional" />
      <CtaBanner
        titulo="Colombia tiene más"
        tituloItalica="por mostrarte."
        subtitulo="Del Caribe al desierto de La Guajira — cuéntanos qué quieres vivir y lo hacemos realidad."
        mensajeWhatsApp="Hola, quiero viajar por Colombia"
        asset="/images/assets/asset_06.png"
      />
    </main>
  );
}