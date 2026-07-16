"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { resenas } from "@/lib/resenas";

export default function Resenas() {
  const [index, setIndex] = useState(0);
  const [animando, setAnimando] = useState(false);
  const contenidoRef = useRef<HTMLDivElement>(null);

  const resena = resenas[index];

  const cambiar = (direccion: 1 | -1) => {
    if (animando) return;
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
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display font-semibold text-3xl text-lusso-charcoal md:text-4xl">
          Lo que dicen nuestros <span className="italic">viajeros</span>
        </h2>

        {/* Testimonio — desplazamiento horizontal */}
        <div ref={contenidoRef} className="mt-12">
          <div className="flex justify-center gap-1">
            {Array.from({ length: resena.calificacion }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-lusso-charcoal text-lusso-charcoal"
              />
            ))}
          </div>

          <blockquote className="mt-6 font-display text-2xl leading-relaxed text-lusso-charcoal md:text-3xl">
            &quot;{resena.texto}&quot;
          </blockquote>

          <p className="mt-6 font-semibold text-lusso-charcoal">
            {resena.nombre}
          </p>
          <p className="text-sm text-lusso-charcoal/60">
            Viajó a {resena.destino} · {resena.fecha}
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-10 flex items-center justify-center gap-6">
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
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-lusso-charcoal/30 text-lusso-charcoal transition-colors hover:bg-lusso-charcoal hover:text-lusso-cream active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}