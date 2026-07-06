"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destinosOpen, setDestinosOpen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);

      if (hideTimer.current) clearTimeout(hideTimer.current);

      hideTimer.current = setTimeout(() => {
        // No ocultar si el menú móvil está abierto
        if (!mobileOpen) setVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // arranca el timer al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-lusso-charcoal transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-display text-lusso-cream text-lg font-semibold tracking-wide">
  lusso travel
</Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-lusso-cream">
          {/* Dropdown Destinos */}
          <li
            className="relative"
            onMouseEnter={() => setDestinosOpen(true)}
            onMouseLeave={() => setDestinosOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-lusso-sage transition-colors">
              Destinos <ChevronDown size={14} />
            </button>
            {destinosOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-lusso-charcoal py-2 shadow-lg">
                <li>
                  <Link
                    href="/destinos/nacionales"
                    className="block px-4 py-2 hover:text-lusso-sage transition-colors"
                  >
                    Nacionales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinos/internacionales"
                    className="block px-4 py-2 hover:text-lusso-sage transition-colors"
                  >
                    Internacionales
                  </Link>
                </li>
              </ul>
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
            {/* En mobile, Destinos es un acordeón con tap, no hover */}
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