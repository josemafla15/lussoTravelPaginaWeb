"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const flyers = [
  {
    id: 1,
    src: "/images/flyers/pc1.jpeg",          // Escritorio
    srcMobile: "/images/flyers/movil2.png",  // Celular
    mobileWidth: 900,
    mobileHeight: 1600,
    alt: "Promoción destacada Lusso Travel",
  },
];

const AUTOPLAY_MS = 5000;

export default function DestinosDestacados() {
  const [current, setCurrent] = useState(0);
  const hayVarios = flyers.length > 1;

  const next = () => setCurrent((prev) => (prev + 1) % flyers.length);
  const prev = () => setCurrent((prev) => (prev - 1 + flyers.length) % flyers.length);

  // Autoplay: solo si hay más de un flyer
  useEffect(() => {
    if (!hayVarios) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current, hayVarios]);

  return (
    <section className="bg-lusso-cream py-16">
      <div className="mx-auto max-w-6xl px-3 md:px-6">
        {/* Carrusel: sin esquinas redondeadas y sin fondo */}
        <div className="relative overflow-hidden bg-transparent">
          {/* Pista de slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {flyers.map((flyer, i) => (
              <div
                key={flyer.id}
                className="relative w-full shrink-0 md:aspect-[21/9]"
              >
                {/* Versión celular: toma su propia proporción */}
                <Image
                  src={flyer.srcMobile}
                  alt={flyer.alt}
                  width={flyer.mobileWidth}
                  height={flyer.mobileHeight}
                  sizes="100vw"
                  priority={i === 0}
                  className="block h-auto w-full md:hidden"
                />

                {/* Versión escritorio */}
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  fill
                  sizes="(min-width: 1152px) 1104px, 100vw"
                  className="hidden object-contain md:block"
                />

                {/* Botón CTA */}
                <button className="absolute bottom-3 right-3 z-10 cursor-pointer rounded-full bg-lusso-sage px-3 py-1 text-xs font-semibold text-lusso-charcoal transition-opacity hover:opacity-90 md:bottom-6 md:right-6 md:px-6 md:py-2 md:text-sm">
                  Quiero saber más
                </button>
              </div>
            ))}
          </div>

          {hayVarios && (
            <>
              {/* Flecha izquierda */}
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lusso-charcoal transition-colors hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Flecha derecha */}
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lusso-charcoal transition-colors hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicadores (puntos) */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {flyers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Ir al slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}