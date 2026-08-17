"use client";

import { useEffect } from "react";
import { destinos } from "@/lib/destinos";
import { experiencias } from "@/lib/experiencias";

/**
 * Precarga en segundo plano las fotos de Destinos y Experiencias, para
 * que cuando el usuario navegue a esas páginas ya estén en caché del
 * navegador. No bloquea nada -- corre después de que el home terminó
 * de cargar, con prioridad baja, para no competir por ancho de banda
 * con el contenido que el usuario está viendo en ese momento.
 */
export default function PrecargaImagenes() {
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

      experiencias.forEach((e) => {
        const img = new window.Image();
        img.fetchPriority = "low";
        img.src = e.imagen;

        e.parques.forEach((p) => {
          const parqueImg = new window.Image();
          parqueImg.fetchPriority = "low";
          parqueImg.src = p.imagen;
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

  return null;
}