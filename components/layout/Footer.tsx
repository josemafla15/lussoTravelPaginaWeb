import Image from "next/image";
import Link from "next/link";
import {MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lusso-charcoal text-lusso-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="relative h-32 w-80">
  <Image
    src="/images/brand/logotipo2.png"
    alt="Lusso Travel"
    fill
    className="object-contain object-left"
  />
</div>
            <p className="mt-4 text-sm text-lusso-cream/60">
              Experiencias de viaje hechas a tu medida.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-lusso-sage">
              Explora
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-lusso-cream/70">
              <li><Link href="/destinos/nacionales" className="hover:text-lusso-sage transition-colors">Destinos nacionales</Link></li>
              <li><Link href="/destinos/internacionales" className="hover:text-lusso-sage transition-colors">Destinos internacionales</Link></li>
              <li><Link href="/servicios" className="hover:text-lusso-sage transition-colors">Servicios</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-lusso-sage">
              Lusso
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-lusso-cream/70">
              <li><Link href="/nosotros" className="hover:text-lusso-sage transition-colors">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-lusso-sage transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto + redes */}
          <div className="mt-4 flex gap-4">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-lusso-cream/70 hover:text-lusso-sage transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-lusso-cream/70 hover:text-lusso-sage transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* WhatsApp — se queda con lucide */}
              <a href="#" aria-label="WhatsApp" className="text-lusso-cream/70 hover:text-lusso-sage transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 border-t border-lusso-cream/10 pt-6 flex flex-col items-center justify-between gap-4 text-xs text-lusso-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Lusso Travel. Todos los derechos reservados.</p>
          <Link href="/privacidad" className="hover:text-lusso-sage transition-colors">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}