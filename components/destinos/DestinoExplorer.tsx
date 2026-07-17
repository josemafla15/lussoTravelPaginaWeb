"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { destinos, type Destino, type Imperdible } from "@/lib/destinos";
import { WHATSAPP } from "@/lib/config";

type Props = {
  tipo: Destino["tipo"];
};

export default function DestinoExplorer({ tipo }: Props) {
  const lista = destinos.filter((d) => d.tipo === tipo);
  const [index, setIndex] = useState(0);
  const [animando, setAnimando] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const destino = lista[index];

  // Animación de entrada — solo en la primera carga
  useGSAP(() => {
    if (!infoRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      Array.from(infoRef.current.children),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  // Precarga las fotos (principal + imperdibles) de los destinos vecinos
  useEffect(() => {
    const siguiente = lista[(index + 1) % lista.length];
    const anterior = lista[(index - 1 + lista.length) % lista.length];

    [siguiente, anterior].forEach((d) => {
      const img = new window.Image();
      img.src = d.imagen;

      d.imperdibles.slice(0, 3).forEach((imp) => {
        if (imp.imagen) {
          const impImg = new window.Image();
          impImg.src = imp.imagen;
        }
      });
    });
  }, [index, lista]);

  const cambiarDestino = (direccion: 1 | -1) => {
    if (animando) return; // evita clics dobles durante la animación
    setAnimando(true);

    const contenido = contenedorRef.current;
    if (!contenido) return;

    // Fase 1: el contenido actual se desliza y desvanece
    gsap.to(contenido, {
      x: direccion === 1 ? -80 : 80,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {
        // Cambia el destino cuando ya no se ve
        setIndex((prev) => (prev + direccion + lista.length) % lista.length);

        // Fase 2: el nuevo contenido entra desde el lado contrario
        gsap.fromTo(
          contenido,
          { x: direccion === 1 ? 80 : -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            onComplete: () => setAnimando(false),
          }
        );
      },
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-lusso-charcoal">
      {/* Contenido animable: foto + info + cards */}
      <div ref={contenedorRef} className="relative min-h-screen">
        {/* Foto de fondo */}
        <Image
          key={destino.id}
          src={destino.imagen}
          alt={destino.nombre}
          fill
          className="object-cover"
          priority
        />

        {/* Gradiente: vertical en mobile, lateral desde desktop */}
        <div className="absolute inset-0 bg-linear-to-t from-lusso-charcoal via-lusso-charcoal/60 to-transparent lg:bg-linear-to-r lg:from-lusso-charcoal lg:via-lusso-charcoal/50 lg:to-transparent" />

        {/* Layout del contenido */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end gap-8 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-28">
          {/* Info del destino */}
          <div ref={infoRef} className="max-w-xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-lusso-sage">
              Descubre
            </p>
            <h1 className="mt-2 font-display font-bold text-5xl text-lusso-cream md:text-7xl">
              {destino.nombre}
            </h1>
            <p className="mt-5 text-lusso-cream/80">{destino.descripcion}</p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                `Hola, me interesa viajar a ${destino.nombre}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-lusso-sage px-8 py-3 text-sm font-semibold text-lusso-charcoal transition-all hover:opacity-90 active:scale-95"
            >
              Cotizar este destino
            </a>
          </div>

          {/* Cards de imperdibles — scroll horizontal en mobile, fijas en desktop */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:snap-none lg:overflow-visible lg:pb-0 lg:pr-4">
            {destino.imperdibles.slice(0, 3).map((imperdible) => (
              <div key={imperdible.nombre} className="snap-start">
                <ImperdibleCard imperdible={imperdible} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controles de navegación — fuera del contenido animable */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6 lg:bottom-10">
        <button
          onClick={() => cambiarDestino(-1)}
          aria-label="Destino anterior"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-lusso-cream/30 text-lusso-cream transition-colors hover:bg-lusso-cream hover:text-lusso-charcoal active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-body text-sm text-lusso-cream/60">
          {index + 1} / {lista.length}
        </span>
        <button
          onClick={() => cambiarDestino(1)}
          aria-label="Siguiente destino"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-lusso-cream/30 text-lusso-cream transition-colors hover:bg-lusso-cream hover:text-lusso-charcoal active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

/** Card de imperdible con fade-in controlado por estado de React (evita hydration mismatch) */
function ImperdibleCard({ imperdible }: { imperdible: Imperdible }) {
  const [cargada, setCargada] = useState(false);

  return (
    <div className="group relative h-64 w-40 shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
      {imperdible.imagen ? (
        <Image
          src={imperdible.imagen}
          alt={imperdible.nombre}
          fill
          className={`object-cover transition-opacity duration-500 ${
            cargada ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setCargada(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-lusso-blue" />
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-lusso-charcoal/90 to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 font-display font-semibold text-sm text-lusso-cream">
        {imperdible.nombre}
      </p>
    </div>
  );
}