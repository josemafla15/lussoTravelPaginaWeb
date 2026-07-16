import Image from "next/image";
import { WHATSAPP } from "@/lib/config";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const equipo = [
  {
    nombre: "Julio Insuasty",
    cargo: "Cofundador de Lusso Travel",
    foto: "/images/nosotros/julio.jpeg",
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
  },
  {
    nombre: "Luis Solarte",
    cargo: "Cofundador de Lusso Travel",
    foto: "/images/nosotros/luis.jpeg",
    bio: [
      "Para mí, viajar es mucho más que llegar a un destino; es descubrir nuevas perspectivas, conectar con culturas fascinantes y encontrar inspiración en lugares que parecen sacados de una postal. Cada viaje representa una oportunidad para aprender, sorprenderse y crear recuerdos que permanecen para siempre.",
      "Mi mayor sueño es conocer Japón, un país que admiro por su perfecta armonía entre tradición, innovación y excelencia. Es un destino que inspira mi forma de entender los viajes y reafirma mi pasión por descubrir lugares capaces de sorprender, emocionar y dejar una huella imborrable.",
      "Como cofundador de Lusso Travel, mi compromiso es transformar cada viaje en una experiencia cuidadosamente diseñada, donde cada detalle aporte valor y cada itinerario refleje la esencia de quien lo vive. Creo que el verdadero lujo no está solo en el destino, sino en la forma en que se experimenta.",
      "Mi propósito es inspirar a más personas a descubrir el mundo con confianza, autenticidad y la certeza de que las mejores historias siempre comienzan con un viaje.",
    ],
  },
];

export const metadata = {
  title: "Nosotros",
  description:
    "Somos Lusso Travel: una agencia cercana y personalizada. No vendemos paquetes, creamos experiencias a la medida de tus sueños.",
};

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero con foto de fondo */}
      <section className="relative flex min-h-[45vh] items-center pt-32 pb-16">
        <Image
          src="/images/nosotros/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-lusso-charcoal/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display font-semibold text-3xl text-lusso-charcoal">
                Nuestra <span className="italic">historia</span>
              </h2>
              <p className="mt-5 text-lusso-charcoal/80">
                En Lusso Travel creemos que viajar es mucho más que llegar a un
                destino: es vivir experiencias que se convierten en recuerdos
                para toda la vida. Nacimos del sueño de crear una agencia
                diferente — cercana, transparente y altamente personalizada.
              </p>
              <p className="mt-4 text-lusso-charcoal/80">
                Una experiencia premium no significa inaccesible: significa
                atención a los detalles, asesoría experta y acompañamiento en
                cada etapa. Diseñamos viajes nacionales e internacionales para
                parejas, familias y grupos que buscan descubrir el mundo con
                total tranquilidad.
              </p>
            </div>

            {/* Quote destacado — único con animación de entrada en esta sección */}
            <RevealOnScroll className="rounded-2xl bg-lusso-sage p-10">
              <p className="font-display font-semibold text-2xl leading-snug text-lusso-charcoal md:text-3xl">
                &quot;No vendemos paquetes.{" "}
                <span className="italic">Creamos experiencias </span>a la medida
                de tus sueños, tu presupuesto y tu forma de viajar.&quot;
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-lusso-charcoal py-20">
        <div className="mx-auto max-w-5xl px-6">
          <RevealOnScroll className="text-center">
            <h2 className="font-display font-semibold text-3xl text-lusso-cream">
              El equipo detrás de cada <span className="italic">viaje</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lusso-cream/70">
              Detrás de cada viaje hay un equipo que disfruta hacer que viajar
              sea fácil, seguro e inolvidable. Creemos que la mejor atención
              nace de la cercanía, la dedicación y el conocimiento.
            </p>
          </RevealOnScroll>

          <div className="mt-16 flex flex-col gap-16">
            {equipo.map((persona, i) => (
              <div
                key={persona.nombre}
                className={`flex flex-col gap-8 md:items-center md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Foto */}
                <div className="mx-auto shrink-0 md:mx-0">
                  <div className="group relative aspect-square w-44 overflow-hidden rounded-full ring-2 ring-lusso-sage/40 transition-all duration-300 hover:ring-4 hover:ring-lusso-sage">
                    <Image
                      src={persona.foto}
                      alt={persona.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="text-center md:text-left">
                  <h3 className="font-display font-semibold text-2xl text-lusso-cream">
                    {persona.nombre}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-lusso-sage">
                    {persona.cargo}
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {persona.bio.map((parrafo, idx) => (
                      <p
                        key={idx}
                        className="text-sm leading-relaxed text-lusso-cream/70"
                      >
                        {parrafo}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoteles con los que trabajamos */}
      <section className="bg-lusso-cream py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display font-semibold text-2xl text-lusso-charcoal">
            Hoteles con los que <span className="italic">trabajamos</span>
          </h2>
          <RevealOnScroll
            stagger
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { nombre: "Aimarawa", logo: "/images/nosotros/aima.webp", tam: "h-10 w-24", invertir: true },
              { nombre: "RIU Hotels & Resorts", logo: "/images/nosotros/riu.svg", tam: "h-10 w-20" },
              { nombre: "Hard Rock Hotels", logo: "/images/nosotros/hard.jpg", tam: "h-12 w-20" },
              { nombre: "Grupo Xcaret", logo: "/images/nosotros/xcaret.png", tam: "h-10 w-24" },
              { nombre: "OSH Hotel Cartagena", logo: "/images/nosotros/osh.jpg", tam: "h-10 w-20" },
            ].map((hotel) => (
              <div
                key={hotel.nombre}
                className="flex h-20 items-center rounded-xl bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                title={hotel.nombre}
              >
                <div className={`relative ${hotel.tam}`}>
                  <Image
                    src={hotel.logo}
                    alt={hotel.nombre}
                    fill
                    className={hotel.invertir ? "object-contain invert" : "object-contain"}
                  />
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative overflow-hidden bg-lusso-blue py-20">
  <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center">
    {/* Asset al lado del texto */}
    <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-48 w-48 -translate-y-1/2 lg:block">
      <Image
        src="/images/assets/asset_04.png"
        alt=""
        fill
        className="object-contain"
      />
    </div>

    <h2 className="font-display font-bold text-3xl text-lusso-charcoal md:text-4xl">
      ¿Listo para dejar el viaje de tus sueños en las{" "}
      <span className="italic">mejores manos?</span>
    </h2>
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hola, quiero planear mi viaje con ustedes"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-block rounded-full bg-lusso-charcoal px-10 py-4 font-semibold text-lusso-cream transition-opacity hover:opacity-90 active:scale-95"
    >
      Hablemos
    </a>
  </RevealOnScroll>
</section>
    </main>
  );
}