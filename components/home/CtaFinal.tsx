import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CtaFinal() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center">
      {/* Foto de fondo */}
      <Image
        src="/images/brand/descarga3.jpg"
        alt=""
        fill
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-lusso-charcoal/50" />

      {/* Contenido */}
      <RevealOnScroll className="relative z-10 px-6 text-center">
        <h2 className="font-display font-bold text-4xl text-lusso-cream md:text-5xl">
          El mundo está esperando. <span className="italic">¿Y tú?</span>
        </h2>
        <a
          href="https://wa.me/573000000000?text=Hola%2C%20quiero%20planear%20mi%20viaje"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-lusso-sage px-10 py-4 font-semibold text-lusso-charcoal hover:opacity-90 transition-opacity active:scale-95"
        >
          Planear mi viaje
        </a>
      </RevealOnScroll>
    </section>
  );
}