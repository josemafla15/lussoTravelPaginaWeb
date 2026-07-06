import Image from "next/image";
import Link from "next/link";
import { serviciosDestacados } from "@/lib/servicios";

const servicios = [
  {
    id: 1,
    titulo: "Luna de miel",
    descripcion:
      "Escapadas románticas diseñadas para dos. Hoteles boutique, cenas privadas y momentos inolvidables.",
    imagen: "/images/servicios/luna-de-miel.jpg",
  },
  {
    id: 2,
    titulo: "Viajes en familia",
    descripcion:
      "Planes pensados para todas las edades, con actividades, comodidad y seguridad para todo el grupo.",
    imagen: "/images/servicios/familia.jpg",
  },
  {
    id: 3,
    titulo: "Planes para empresa",
    descripcion:
      "Congresos, incentivos y team building con toda la logística resuelta para tu equipo.",
    imagen: "/images/servicios/empresa.jpg",
  },
];

export default function ServiciosDestacados() {
  return (
    <section className="flex min-h-screen items-center bg-lusso-charcoal py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="font-display font-semibold text-3xl text-lusso-cream md:text-4xl">
            Los servicios que nuestros clientes{" "}
            <span className="italic">más eligen</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {serviciosDestacados.map((servicio) => (
            <article
              key={servicio.id}
              className="overflow-hidden rounded-2xl bg-lusso-cream"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover"
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
                  className="mt-4 inline-block rounded-full bg-lusso-sage px-5 py-2 text-sm font-semibold text-lusso-charcoal hover:opacity-90 transition-opacity"
                >
                  Conocer más
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Ver más servicios */}
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-block rounded-full border border-lusso-cream/40 px-8 py-3 text-sm font-semibold text-lusso-cream hover:bg-lusso-cream hover:text-lusso-charcoal transition-colors"
          >
            Ver más servicios
          </Link>
        </div>
      </div>
    </section>
  );
}