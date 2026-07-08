import Image from "next/image";

type Props = {
  titulo?: string;
  tituloItalica?: string;
  subtitulo?: string;
  mensajeWhatsApp?: string;
  asset?: string;
  color?: "sage" | "blue";
};

export default function CtaBanner({
  titulo = "¿No sabes a dónde ir?",
  tituloItalica = "Nosotros sí.",
  subtitulo = "Cuéntanos qué sueñas y armamos el viaje perfecto para ti.",
  mensajeWhatsApp = "Hola, quiero planear un viaje",
  asset = "/images/assets/asset_01.png",
  color = "sage",
}: Props) {
  return (
    <section className={color === "blue" ? "bg-lusso-blue py-16" : "bg-lusso-sage py-16"}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        {/* Mensaje + CTA */}
        <div className="text-center md:text-left">
          <h2 className="font-display font-semibold text-3xl text-lusso-charcoal md:text-4xl">
            {titulo} <span className="italic">{tituloItalica}</span>
          </h2>
          <p className="mt-3 text-lusso-charcoal/80">{subtitulo}</p>
          <a
            href={`https://wa.me/573000000000?text=${encodeURIComponent(mensajeWhatsApp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-lusso-charcoal px-8 py-3 text-sm font-semibold text-lusso-cream hover:opacity-90 transition-opacity"
          >
            Hablemos por WhatsApp
          </a>
        </div>

        {/* Mascota / asset */}
        <div className="relative h-48 w-48 md:h-56 md:w-56 shrink-0">
          <Image src={asset} alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}