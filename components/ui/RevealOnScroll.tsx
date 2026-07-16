"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  /** Retraso en segundos antes de iniciar (para escalonar manualmente) */
  delay?: number;
  /** Anima los hijos directos en cascada en vez del bloque completo */
  stagger?: boolean;
  className?: string;
};

export default function RevealOnScroll({
  children,
  delay = 0,
  stagger = false,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger ? Array.from(el.children) : el;

      // Estado inicial oculto
      gsap.set(targets, { opacity: 0, y: 30 });

      const anim = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power2.out",
        stagger: stagger ? 0.12 : 0,
        paused: true,
      });

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => anim.play(),
      });

      // Fallback: si a los 1.5s el elemento está en viewport y sigue oculto, fuerza la animación
      const fallback = setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const enViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (enViewport && anim.paused()) anim.play();
      }, 1500);

      return () => {
        st.kill();
        anim.kill();
        clearTimeout(fallback);
      };
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}