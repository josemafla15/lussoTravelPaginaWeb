"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const flyers = [
  { id: 1, src: "/images/flyers/lusoPromo.jpeg", alt: "Promoción 1" },
];

const AUTOPLAY_MS = 5000;

export default function DestinosDestacados() {
  const [current, setCurrent] = useState(0);
  const hayVarios = flyers.length > 1;

  const next = () => setCurrent((prev) => (prev + 1) % flyers.length);
  const prev = () => setCurrent((prev) => (prev - 1 + flyers.length) % flyers.length);

  // Autoplay — solo si hay más de un flyer
  useEffect(() => {
    if (!hayVarios) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current, hayVarios]);

  return (
    <section className="bg-lusso-cream py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Carrusel */}
        <div className="relative overflow-hidden rounded-2xl bg-lusso-charcoal">
          {/* Pista de slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {flyers.map((flyer) => (
              <div key={flyer.id} className="relative w-full shrink-0 aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  fill
                  className="object-contain"
                />
                {/* Botón CTA */}
                <button className="absolute bottom-6 right-6 z-10 cursor-pointer rounded-full bg-lusso-sage px-6 py-2 text-sm font-semibold text-lusso-charcoal hover:opacity-90 transition-opacity">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lusso-charcoal hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Flecha derecha */}
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lusso-charcoal hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicadores (puntos) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
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