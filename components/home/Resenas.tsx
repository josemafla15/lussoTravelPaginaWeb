"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { resenas } from "@/lib/resenas";
import GaleriaResena from "@/components/home/GaleriaResena";

// Reseña que define el "tope" de altura — actualmente la más larga (Jimena, índice 0)
const RESENA_MAS_LARGA = resenas[0];

export default function Resenas() {
  const [index, setIndex] = useState(0);
  const [animando, setAnimando] = useState(false);
  const [alturaEstandar, setAlturaEstandar] = useState<number | null>(null);
  const contenidoRef = useRef<HTMLDivElement>(null);
  const medidorRef = useRef<HTMLDivElement>(null);

  const resena = resenas[index];
  const hayVarias = resenas.length > 1;

  // Mide la altura natural de la reseña más larga (invisible, fuera de flujo)
  // y la usa como altura fija estándar para todas — se recalcula si cambia
  // el texto o el ancho de pantalla (mobile/desktop).
  useEffect(() => {
    const el = medidorRef.current;
    if (!el) return;

    const medir = () => setAlturaEstandar(el.offsetHeight);
    medir();

    const observer = new ResizeObserver(medir);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cambiar = (direccion: 1 | -1) => {
    if (animando || !hayVarias) return;
    setAnimando(true);

    const el = contenidoRef.current;
    if (!el) return;

    gsap.to(el, {
      x: direccion === 1 ? -60 : 60,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setIndex((prev) => (prev + direccion + resenas.length) % resenas.length);

        gsap.fromTo(
          el,
          { x: direccion === 1 ? 60 : -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => setAnimando(false),
          }
        );
      },
    });
  };

  const siguiente = () => cambiar(1);
  const anterior = () => cambiar(-1);

  return (
    <section className="bg-lusso-blue py-24">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display font-semibold text-3xl text-lusso-charcoal md:text-4xl">
          Lo que dicen nuestros <span className="italic">viajeros</span>
        </h2>

        {/* Medidor invisible — renderiza la reseña más larga fuera de flujo para
            calcular la altura estándar. No se ve ni ocupa espacio real. */}
        <div
          ref={medidorRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute left-0 top-0 -z-10 mt-12 flex w-full max-w-4xl flex-col justify-center px-6"
        >
          {RESENA_MAS_LARGA.fotos && RESENA_MAS_LARGA.fotos.length > 0 && (
            <GaleriaResena fotos={RESENA_MAS_LARGA.fotos} />
          )}
          <div className="flex justify-center gap-1">
            {Array.from({ length: RESENA_MAS_LARGA.calificacion }).map((_, i) => (
              <Star key={i} size={20} className="fill-lusso-charcoal text-lusso-charcoal" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-sm leading-relaxed text-lusso-charcoal md:text-3xl">
            &quot;{RESENA_MAS_LARGA.texto}&quot;
          </blockquote>
          <p className="mt-3 font-semibold text-lusso-charcoal md:mt-6">{RESENA_MAS_LARGA.nombre}</p>
          <p className="text-sm text-lusso-charcoal/60">
            Viajó a {RESENA_MAS_LARGA.destino} · {RESENA_MAS_LARGA.fecha}
          </p>
          <div className="relative mx-auto mt-3 h-28 w-28 md:mt-6 md:h-36 md:w-36 lg:hidden">
            <Image src={RESENA_MAS_LARGA.asset} alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Testimonio — desplazamiento horizontal */}
        <div
          ref={contenidoRef}
          className="mt-6 flex flex-col justify-center overflow-hidden md:mt-12"
          style={alturaEstandar ? { height: alturaEstandar } : undefined}
        >
          {resena.fotos && resena.fotos.length > 0 && (
            <GaleriaResena fotos={resena.fotos} />
          )}

          <div className="flex justify-center gap-1">
            {Array.from({ length: resena.calificacion }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-lusso-charcoal text-lusso-charcoal"
              />
            ))}
          </div>

          <blockquote className="mt-3 font-display text-sm leading-relaxed text-lusso-charcoal md:mt-6 md:text-3xl">
            &quot;{resena.texto}&quot;
          </blockquote>

          <p className="mt-3 font-semibold text-lusso-charcoal md:mt-6">
            {resena.nombre}
          </p>
          <p className="text-sm text-lusso-charcoal/60">
            Viajó a {resena.destino} · {resena.fecha}
          </p>

          {/* Asset — visible en mobile, centrado debajo */}
          <div className="relative mx-auto mt-3 h-28 w-28 md:mt-6 md:h-36 md:w-36 lg:hidden">
            <Image src={resena.asset} alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Navegación + asset desktop — solo si hay más de una reseña */}
        {hayVarias ? (
          <div className="relative mt-4 flex items-center justify-center gap-6 md:mt-10">
            <button
              onClick={anterior}
              aria-label="Reseña anterior"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-lusso-charcoal/30 text-lusso-charcoal transition-colors hover:bg-lusso-charcoal hover:text-lusso-cream active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-lusso-charcoal/60">
              {index + 1} / {resenas.length}
            </span>
            <button
              onClick={siguiente}
              aria-label="Siguiente reseña"
              className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-lusso-charcoal/30 text-lusso-charcoal transition-colors hover:bg-lusso-charcoal hover:text-lusso-cream active:scale-95"
            >
              <ChevronRight size={18} />

              {/* Asset pegado al botón — solo desktop */}
              <div className="pointer-events-none absolute left-full top-1/2 ml-4 hidden h-64 w-64 -translate-y-1/2 lg:block">
                <Image src={resena.asset} alt="" fill className="object-contain" />
              </div>
            </button>
          </div>
        ) : (
          // Con una sola reseña: el asset se muestra igual, sin controles de navegación
          <div className="relative mt-10 hidden justify-center lg:flex">
            <div className="relative h-64 w-64">
              <Image src={resena.asset} alt="" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}