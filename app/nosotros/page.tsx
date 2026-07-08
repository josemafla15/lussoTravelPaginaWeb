import Image from "next/image";
import CtaBanner from "@/components/home/ctaBannet";

const equipo = [
  { nombre: "Julio Insuasty", foto: "/images/nosotros/julio.jpeg" },
  { nombre: "Luis Solarte", foto: "/images/nosotros/luis.jpeg" },
];

const WHATSAPP = "573000000000";

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero compacto */}
      <section className="flex min-h-[40vh] items-center bg-lusso-charcoal pt-32 pb-16">
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

            {/* Quote destacado */}
            <div className="rounded-2xl bg-lusso-sage p-10">
              <p className="font-display font-semibold text-2xl leading-snug text-lusso-charcoal md:text-3xl">
                &quot;No vendemos paquetes.{" "}
                <span className="italic">Creamos experiencias </span>a la medida
                de tus sueños, tu presupuesto y tu forma de viajar.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-lusso-charcoal py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display font-semibold text-3xl text-lusso-cream">
            El equipo detrás de cada <span className="italic">viaje</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lusso-cream/70">
            Detrás de cada viaje hay un equipo que disfruta hacer que viajar
            sea fácil, seguro e inolvidable. Creemos que la mejor atención nace
            de la cercanía, la dedicación y el conocimiento.
          </p>

          <div className="mt-12 flex flex-wrap items-start justify-center gap-14">
            {equipo.map((persona) => (
              <div key={persona.nombre} className="text-center">
                <div className="relative mx-auto aspect-square w-52 overflow-hidden rounded-full ring-2 ring-lusso-sage/40">
                  <Image
                    src={persona.foto}
                    alt={persona.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl text-lusso-cream">
                  {persona.nombre}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas y sellos — placeholder */}
      <section className="bg-lusso-cream py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display font-semibold text-2xl text-lusso-charcoal">
            Respaldados por
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
            <div className="h-12 w-32 rounded bg-lusso-charcoal/10" />
            <div className="h-12 w-32 rounded bg-lusso-charcoal/10" />
            <div className="h-12 w-32 rounded bg-lusso-charcoal/10" />
            <div className="h-12 w-32 rounded bg-lusso-charcoal/10" />
          </div>
        </div>
      </section>

      {/* CTA propio de Nosotros */}
      <section className="bg-lusso-blue py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
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
            className="mt-8 inline-block rounded-full bg-lusso-charcoal px-10 py-4 font-semibold text-lusso-cream transition-opacity hover:opacity-90"
          >
            Hablemos
          </a>
        </div>
      </section>
    </main>
  );
}