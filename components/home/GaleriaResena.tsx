"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  fotos: string[];
};

export default function GaleriaResena({ fotos }: Props) {
  const [foto, setFoto] = useState(0);

  if (fotos.length === 0) return null;

  const siguiente = () => setFoto((prev) => (prev + 1) % fotos.length);
  const anterior = () => setFoto((prev) => (prev - 1 + fotos.length) % fotos.length);

  return (
    <div className="relative mx-auto mb-6 aspect-video w-full max-w-md overflow-hidden rounded-2xl">
      <Image
        key={fotos[foto]}
        src={fotos[foto]}
        alt=""
        fill
        className="object-cover"
      />

      {fotos.length > 1 && (
        <>
          {/* Flechas — solo si hay más de una foto */}
          <button
            onClick={anterior}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-lusso-charcoal/50 text-lusso-cream transition-colors hover:bg-lusso-charcoal active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={siguiente}
            aria-label="Siguiente foto"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-lusso-charcoal/50 text-lusso-cream transition-colors hover:bg-lusso-charcoal active:scale-95"
          >
            <ChevronRight size={16} />
          </button>

          {/* Puntos indicadores */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {fotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setFoto(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === foto ? "w-4 bg-lusso-cream" : "w-1.5 bg-lusso-cream/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}