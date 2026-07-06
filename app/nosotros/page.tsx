import Image from "next/image";
import CtaBanner from "@/components/home/ctaBannet";

const equipo = [
  { nombre: "Nombre Apellido", cargo: "Fundadora & CEO", foto: "/images/nosotros/equipo-1.jpg" },
  { nombre: "Nombre Apellido", cargo: "Asesora de viajes", foto: "/images/nosotros/equipo-2.jpg" },
  { nombre: "Nombre Apellido", cargo: "Asesor de viajes", foto: "/images/nosotros/equipo-3.jpg" },
];

const numeros = [
  { cifra: "+5", label: "Años de experiencia" },
  { cifra: "+500", label: "Viajeros felices" },
  { cifra: "+30", label: "Destinos" },
  { cifra: "24/7", label: "Acompañamiento" },
];

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero compacto */}
      <section className="flex min-h-[40vh] items-center bg-lusso-charcoal pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-lusso-cream md:text-5xl">
            Somos <span className="italic">Lusso Travel</span>
          </h1>
          <p className="mt-4 text-lg text-lusso-cream/80">
            Diseñamos viajes a la medida porque creemos que ningún viajero es
            igual a otro.
          </p>
        </div>
      </section>

      {/* Historia y misión */}
      <section className="bg-lusso-cream py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display font-semibold text-3xl text-lusso-charcoal">
              Nuestra <span className="italic">historia</span>
            </h2>
            <p className="mt-4 text-lusso-charcoal/80">
              [PLACEHOLDER — historia real de la agencia: cómo nació, quién la
              fundó, qué la mueve. 2-3 párrafos cortos.]
            </p>
            <p className="mt-4 text-lusso-charcoal/80">
              [PLACEHOLDER — misión: qué promete Lusso a sus viajeros y qué la
              hace distinta de una agencia tradicional.]
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/nosotros/historia.jpg"
              alt="Equipo Lusso Travel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Números clave */}
      <section className="bg-lusso-sage py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {numeros.map((item) => (
            <div key={item.label}>
              <span className="font-display font-bold text-4xl text-lusso-charcoal md:text-5xl">
                {item.cifra}
              </span>
              <p className="mt-2 text-sm text-lusso-charcoal/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-lusso-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display font-semibold text-3xl text-lusso-charcoal">
            El equipo detrás de cada <span className="italic">viaje</span>
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {equipo.map((persona) => (
              <div key={persona.nombre + persona.cargo} className="text-center">
                <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full">
                  <Image
                    src={persona.foto}
                    alt={persona.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg text-lusso-charcoal">
                  {persona.nombre}
                </h3>
                <p className="text-sm text-lusso-charcoal/60">{persona.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas y sellos */}
      <section className="bg-lusso-charcoal py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display font-semibold text-2xl text-lusso-cream">
            Respaldados por
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12 opacity-70">
            {/* PLACEHOLDER — logos de RNT, IATA, aerolíneas, hoteles */}
            <div className="h-12 w-32 rounded bg-lusso-cream/10" />
            <div className="h-12 w-32 rounded bg-lusso-cream/10" />
            <div className="h-12 w-32 rounded bg-lusso-cream/10" />
            <div className="h-12 w-32 rounded bg-lusso-cream/10" />
          </div>
        </div>
      </section>

      {/* CTA reutilizado */}
      <CtaBanner />
    </main>
  );
}