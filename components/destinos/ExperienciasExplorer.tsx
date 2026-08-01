"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { experiencias, type Parque } from "@/lib/experiencias";

export default function ExperienciasExplorer() {
  const [index, setIndex] = useState(0);
  const [animando, setAnimando] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const experiencia = experiencias[index];

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

  // Precarga de la experiencia siguiente
  useEffect(() => {
    const siguiente = experiencias[(index + 1) % experiencias.length];
    const img = new window.Image();
    img.src = siguiente.imagen;

    siguiente.parques.slice(0, 3).forEach((p) => {
      const parqueImg = new window.Image();
      parqueImg.src = p.imagen;
    });
  }, [index]);

  const cambiar = (direccion: 1 | -1) => {
    if (animando) return;
    setAnimando(true);

    const contenido = contenedorRef.current;
    if (!contenido) return;

    gsap.to(contenido, {
      x: direccion === 1 ? -80 : 80,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {
        setIndex((prev) => (prev + direccion + experiencias.length) % experiencias.length);

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
      <div ref={contenedorRef} className="relative min-h-screen">
        {/* Foto de fondo — marca */}
        <Image
          key={experiencia.id}
          src={experiencia.imagen}
          alt={experiencia.marca}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-lusso-charcoal via-lusso-charcoal/60 to-transparent lg:bg-linear-to-r lg:from-lusso-charcoal lg:via-lusso-charcoal/50 lg:to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end gap-6 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-28">
          {/* Info de la marca */}
          <div ref={infoRef} className="max-w-xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-lusso-sage">
              Experiencias
            </p>
            <h1 className="mt-2 font-display font-bold text-5xl text-lusso-cream md:text-7xl">
              {experiencia.marca}
            </h1>
            <p className="mt-5 text-lusso-cream/80 line-clamp-2 lg:line-clamp-none">
              {experiencia.descripcionMarca}
            </p>
          </div>

          {/* Cards de parques — con descripción visible */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:snap-none lg:overflow-visible lg:pb-0 lg:pr-4">
            {experiencia.parques.slice(0, 3).map((parque) => (
              <div key={parque.nombre} className="snap-start">
                <ParqueCard parque={parque} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6 lg:bottom-10">
        <button
          onClick={() => cambiar(-1)}
          aria-label="Marca anterior"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-lusso-cream/30 text-lusso-cream transition-colors hover:bg-lusso-cream hover:text-lusso-charcoal active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-body text-sm text-lusso-cream/60">
          {index + 1} / {experiencias.length}
        </span>
        <button
          onClick={() => cambiar(1)}
          aria-label="Siguiente marca"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-lusso-cream/30 text-lusso-cream transition-colors hover:bg-lusso-cream hover:text-lusso-charcoal active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

/** Card de parque específico, con nombre + descripción visible sobre la foto */
function ParqueCard({ parque }: { parque: Parque }) {
  const [cargada, setCargada] = useState(false);

  return (
    <div className="group relative h-72 w-52 shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
      <Image
        src={parque.imagen}
        alt={parque.nombre}
        fill
        className={`object-cover transition-opacity duration-500 ${
          cargada ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setCargada(true)}
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-lusso-charcoal/95 via-lusso-charcoal/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-display font-semibold text-base text-lusso-cream">
          {parque.nombre}
        </p>
        <p className="mt-1 text-xs leading-snug text-lusso-cream/80 line-clamp-5">
          {parque.descripcion}
        </p>
      </div>
    </div>
  );
}