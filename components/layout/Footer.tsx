import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP } from "@/lib/config";


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
              Viajar es crear recuerdos emocionales visualmente inolvidables.
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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-lusso-cream/70 hover:text-lusso-sage transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-lusso-cream/70 hover:text-lusso-sage transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-wider text-lusso-cream/40">
            Pagos seguros con
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {[
              { nombre: "Visa", logo: "/images/pagos/visa.png", tam: "h-5 w-10 md:h-8 md:w-16" },
              { nombre: "Mastercard", logo: "/images/pagos/mastercard.webp", tam: "h-5 w-10 md:h-8 md:w-16" },
              { nombre: "American Express", logo: "/images/pagos/amex2.png", tam: "h-7 w-7 md:h-11 md:w-11" },
              { nombre: "PSE", logo: "/images/pagos/pse.png", tam: "h-5 w-9 md:h-8 md:w-14" },
              { nombre: "Nequi", logo: "/images/pagos/nequi.jpg", tam: "h-5 w-12 md:h-8 md:w-20" },
              { nombre: "Bancolombia", logo: "/images/pagos/bancolombia.svg", tam: "h-5 w-14 md:h-8 md:w-24" },
              { nombre: "Daviplata", logo: "/images/pagos/daviplata.svg", tam: "h-5 w-14 md:h-8 md:w-24" },
              { nombre: "Efectivo", logo: "/images/pagos/efectivo.png", tam: "h-5 w-10 md:h-8 md:w-16" },
            ].map((metodo) => (
              <div
                key={metodo.nombre}
                className="flex h-9 items-center rounded-md bg-white/95 px-2 md:h-14 md:px-4"
                title={metodo.nombre}
              >
                <div className={`relative ${metodo.tam}`}>
                  <Image
                    src={metodo.logo}
                    alt={metodo.nombre}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
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