"use client";

import { useEffect } from "react";
import { destinos } from "@/lib/destinos";

/**
 * Precarga en segundo plano las fotos de la página de Destinos, para
 * que cuando el usuario llegue ahí (navegando desde el home) ya estén
 * en caché del navegador. No bloquea nada -- usa fetchPriority "low"
 * y espera a que la página ya haya terminado de cargar antes de
 * empezar, para no competir por ancho de banda con el contenido real
 * del home.
 */
export default function PrecargaDestinos() {
  useEffect(() => {
    const precargar = () => {
      destinos.forEach((d) => {
        const img = new window.Image();
        img.fetchPriority = "low";
        img.src = d.imagen;

        d.imperdibles.slice(0, 3).forEach((imp) => {
          if (imp.imagen) {
            const impImg = new window.Image();
            impImg.fetchPriority = "low";
            impImg.src = imp.imagen;
          }
        });
      });
    };

    const tieneIdleCallback = typeof window.requestIdleCallback === "function";

    if (document.readyState === "complete") {
      if (tieneIdleCallback) {
        const id = window.requestIdleCallback(precargar);
        return () => window.cancelIdleCallback(id);
      } else {
        const id = window.setTimeout(precargar, 1000);
        return () => window.clearTimeout(id);
      }
    } else {
      window.addEventListener("load", precargar, { once: true });
      return () => window.removeEventListener("load", precargar);
    }
  }, []);

  return null; // no renderiza nada, solo dispara el efecto
}