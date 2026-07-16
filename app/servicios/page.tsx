import Image from "next/image";
import CtaBanner from "@/components/home/ctaBannet";
import ServiciosInteractivos from "./ServiciosInteractivos";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Servicios",
  description:
    "Luna de miel, viajes en familia, planes para empresa, pasadías, circuitos por el mundo y aventura. Cada viaje diseñado a tu medida.",
};

export default function ServiciosPage() {
  return (
    <main>
      {/* Hero compacto */}
      <section className="relative flex min-h-[45vh] items-center justify-center pt-32 pb-16">
        <Image
          src="/images/servicios/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-lusso-charcoal/60" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-lusso-cream md:text-5xl">
            Nuestros <span className="italic">servicios</span>
          </h1>
          <p className="mt-3 text-lusso-cream/80">
            Cada viaje se diseña a tu medida. Elige cómo quieres viajar.
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <ServiciosInteractivos />

      {/* Proceso */}
      <section className="bg-lusso-charcoal py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display font-semibold text-3xl text-lusso-cream md:text-4xl">
              ¿Cómo <span className="italic">funciona?</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                paso: "01",
                titulo: "Cuéntanos tu sueño",
                texto: "Escríbenos por WhatsApp y dinos qué viaje imaginas.",
              },
              {
                paso: "02",
                titulo: "Recibe tu cotización",
                texto: "Diseñamos un plan a tu medida, sin paquetes genéricos.",
              },
              {
                paso: "03",
                titulo: "Viaja sin preocupaciones",
                texto: "Te acompañamos antes, durante y después del viaje.",
              },
            ].map((item) => (
              <div key={item.paso}>
                <span className="font-display font-bold text-4xl text-lusso-sage">
                  {item.paso}
                </span>
                <h3 className="mt-3 font-display font-semibold text-xl text-lusso-cream">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-lusso-cream/70">{item.texto}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA reutilizado */}
      <CtaBanner />
    </main>
  );
}