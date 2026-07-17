"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destinosOpen, setDestinosOpen] = useState(false);

  useEffect(() => {
  const esDesktop = () => window.matchMedia("(min-width: 768px)").matches;

  if (!esDesktop()) {
    // En mobile no hacemos nada — visible ya es true por defecto
    return;
  }

  let lastScrollY = window.scrollY;
  let quietTime = 0;

  const interval = setInterval(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY !== lastScrollY) {
      setVisible(true);
      quietTime = 0;
      lastScrollY = currentScrollY;
    } else {
      quietTime += 200;
      if (quietTime >= 2000 && !mobileOpen && !destinosOpen) {
        setVisible(false);
      }
    }
  }, 200);

  return () => clearInterval(interval);
}, [mobileOpen, destinosOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-lusso-charcoal border-b border-lusso-blue/40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-6 py-2 md:py-4">
        {/* Logotipo */}
        <Link href="/" aria-label="Ir al inicio">
          <div className="relative h-12 w-32 md:h-24 md:w-64">
            <Image
              src="/images/brand/logotipo2.png"
              alt="Lusso Travel"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-semibold text-lusso-cream">
          {/* Dropdown Destinos */}
          <li
            className="relative"
            onMouseEnter={() => setDestinosOpen(true)}
            onMouseLeave={() => setDestinosOpen(false)}
          >
            <button className="flex items-center gap-1 py-2 hover:text-lusso-sage transition-colors">
              Destinos <ChevronDown size={18} />
            </button>
            {destinosOpen && (
              <div className="absolute top-full left-0 pt-2">
                <ul className="w-56 rounded-lg bg-lusso-charcoal py-2 shadow-lg ring-1 ring-lusso-cream/10">
                  <li>
                    <Link
                      href="/destinos/nacionales"
                      className="block px-4 py-2 hover:text-lusso-sage transition-colors"
                      onClick={() => setDestinosOpen(false)}
                    >
                      Nacionales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/destinos/internacionales"
                      className="block px-4 py-2 hover:text-lusso-sage transition-colors"
                      onClick={() => setDestinosOpen(false)}
                    >
                      Internacionales
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/servicios" className="hover:text-lusso-sage transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-lusso-sage transition-colors">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-lusso-sage transition-colors">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden text-lusso-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menú mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-lusso-charcoal px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lusso-cream">
            <li>
              <button
                className="flex w-full items-center justify-between"
                onClick={() => setDestinosOpen(!destinosOpen)}
              >
                Destinos
                <ChevronDown
                  size={16}
                  className={`transition-transform ${destinosOpen ? "rotate-180" : ""}`}
                />
              </button>
              {destinosOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2 text-sm text-lusso-cream/80">
                  <li>
                    <Link href="/destinos/nacionales" onClick={() => setMobileOpen(false)}>
                      Nacionales
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinos/internacionales" onClick={() => setMobileOpen(false)}>
                      Internacionales
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/servicios" onClick={() => setMobileOpen(false)}>Servicios</Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={() => setMobileOpen(false)}>Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto" onClick={() => setMobileOpen(false)}>Contacto</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}