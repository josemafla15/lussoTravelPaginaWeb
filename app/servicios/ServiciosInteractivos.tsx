"use client";

import { useState } from "react";
import Image from "next/image";
import { servicios } from "@/lib/servicios";
import { WHATSAPP } from "@/lib/config";

export default function ServiciosInteractivos() {
  const [activo, setActivo] = useState(servicios[0]);

  return (
    <section className="bg-lusso-charcoal py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Desktop: lista + panel ── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-12">
          {/* Columna izquierda: encabezado + lista */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display font-bold text-4xl text-lusso-cream">
                Nuestros <span className="italic">servicios</span>
              </h2>
              <p className="mt-4 text-lusso-cream/70">
                Cada plan se diseña a la medida. Elige el tuyo y cotízalo en un
                mensaje.
              </p>
            </div>

            <ul className="mt-12 flex flex-col">
              {servicios.map((servicio) => {
                const esActivo = servicio.id === activo.id;
                return (
                  <li key={servicio.id}>
                    <button
                      onClick={() => setActivo(servicio)}
                      className={`w-full border-b py-4 text-left font-display text-lg transition-colors ${
                        esActivo
                          ? "border-lusso-sage text-lusso-cream"
                          : "border-lusso-cream/10 text-lusso-cream/40 hover:text-lusso-cream/70"
                      }`}
                    >
                      {servicio.titulo}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Columna derecha: imagen + card flotante */}
          <div className="relative min-h-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                key={activo.id}
                src={activo.imagen}
                alt={activo.titulo}
                fill
                className="object-cover"
              />
            </div>

            {/* Card flotante */}
            <div className="absolute -left-16 bottom-10 w-100 rounded-2xl bg-lusso-cream/60 p-8 shadow-xl backdrop-blur-md">
              <h3 className="font-display font-semibold text-2xl text-lusso-charcoal">
                {activo.titulo}
              </h3>
              <p className="mt-3 text-sm text-lusso-charcoal/70">
                {activo.descripcion}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  `Hola, me interesa el plan de ${activo.titulo.toLowerCase()}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-lusso-sage px-6 py-2.5 text-sm font-semibold text-lusso-charcoal hover:opacity-90 transition-opacity"
              >
                Cotizar este plan
              </a>
            </div>
          </div>
        </div>

        {/* ── Mobile: cards apiladas ── */}
        <div className="lg:hidden">
          <h2 className="font-display font-bold text-3xl text-lusso-cream text-center">
            Nuestros <span className="italic">servicios</span>
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {servicios.map((servicio) => (
              <article
                key={servicio.id}
                className="overflow-hidden rounded-2xl bg-lusso-cream"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-lusso-charcoal">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-lusso-charcoal/70">
                    {servicio.descripcion}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Hola, me interesa el plan de ${servicio.titulo.toLowerCase()}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full bg-lusso-sage px-5 py-2 text-sm font-semibold text-lusso-charcoal hover:opacity-90 transition-opacity"
                  >
                    Cotizar este plan
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}