"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDE_MS = 6500;

const slides = [
  { id: 1, src: "/images/brand/hero-1.jpg", alt: "Caribe colombiano" },
  { id: 2, src: "/images/brand/hero-2.jpg", alt: "Europa" },
  { id: 3, src: "/images/brand/hero-3.jpg", alt: "Aventura" },
  { id: 4, src: "/images/brand/hero-4.jpg", alt: "Viajes en familia" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fotos apiladas con crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-lusso-charcoal/30" />

      {/* Texto central */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display font-bold text-4xl text-lusso-cream drop-shadow-lg md:text-6xl">
          Tu viaje, <span className="italic">exactamente</span>
          <br />
          como lo imaginas
        </h1>
        <p className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-lusso-cream/80 md:text-base">
          Agencia de viajes · Destinos nacionales e internacionales
        </p>
      </div>

      {/* Indicador vertical derecha — desktop */}
      <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-body text-xs text-lusso-cream/80">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className="relative h-14 w-0.5 overflow-hidden bg-lusso-cream/25"
            >
              {i === current && (
                <span
                  key={current}
                  className="absolute inset-x-0 top-0 block w-full bg-lusso-cream animate-fill-bar"
                />
              )}
            </button>
          ))}
        </div>
        <span className="font-body text-xs text-lusso-cream/80">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Indicador horizontal — mobile, con barra de progreso */}
      <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className="relative h-1.5 w-8 overflow-hidden rounded-full bg-lusso-cream/25"
          >
            {i === current && (
              <span
                key={current}
                className="absolute inset-y-0 left-0 block h-full bg-lusso-cream animate-fill-bar-h"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}