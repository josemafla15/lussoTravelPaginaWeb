import Image from "next/image";
import Link from "next/link";
import { serviciosDestacados } from "@/lib/servicios";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ServiciosDestacados() {
  return (
    <section className="relative overflow-hidden bg-lusso-charcoal py-20">
      {/* Estrella — esquina superior izquierda
      <div className="pointer-events-none absolute left-8 top-4 hidden h-64 w-64 lg:block">
        <Image
          src="/images/formas/estrella.png"
          alt=""
          fill
          className="object-contain"
        />
      </div> */}

      {/* Swirl — esquina inferior derecha */}
      <div className="pointer-events-none absolute -right-30 -bottom-120 hidden h-[800px] w-[800px] lg:block">
        <Image
          src="/images/formas/swirl_transparente.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Encabezado */}
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <h2 className="font-display font-semibold text-3xl text-lusso-cream md:text-4xl">
              Los servicios que nuestros clientes{" "}
              <span className="italic">más eligen</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Cards — entrada en cascada + hover */}
        <RevealOnScroll stagger className="grid gap-8 md:grid-cols-3">
          {serviciosDestacados.map((servicio) => (
            <article
              key={servicio.id}
              className="group overflow-hidden rounded-2xl bg-lusso-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-lusso-charcoal">
                  {servicio.titulo}
                </h3>
                <p className="mt-2 text-sm text-lusso-charcoal/70">
                  {servicio.descripcion}
                </p>
                <Link
                  href="/servicios"
                  className="mt-4 inline-block rounded-full bg-lusso-sage px-5 py-2 text-sm font-semibold text-lusso-charcoal transition-all hover:opacity-90 active:scale-95"
                >
                  Conocer más
                </Link>
              </div>
            </article>
          ))}
        </RevealOnScroll>

        {/* Ver más servicios */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/servicios"
              className="inline-block rounded-full border border-lusso-cream/40 px-8 py-3 text-sm font-semibold text-lusso-cream transition-colors hover:bg-lusso-cream hover:text-lusso-charcoal active:scale-95"
            >
              Ver más servicios
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}