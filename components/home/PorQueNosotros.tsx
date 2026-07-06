import Image from "next/image";
import { Plane, Building2, Map, HeartPulse, Users } from "lucide-react";

const razones = [
  {
    icono: Plane,
    titulo: "Desde cualquier ciudad",
    descripcion: "Tiquetes con salida desde la ciudad donde te encuentres.",
  },
  {
    icono: Building2,
    titulo: "Hoteles de alto nivel",
    descripcion: "Categoría superior, boutique, de lujo y ultra lujo.",
  },
  {
    icono: Map,
    titulo: "Asesoría experta",
    descripcion: "Tours recomendados con conocimiento real de cada destino.",
  },
  {
    icono: HeartPulse,
    titulo: "Asistencia médica",
    descripcion: "Viaja siempre con respaldo y tranquilidad.",
  },
];

export default function PorQueNosotros() {
  return (
    <section className="flex min-h-screen items-center bg-lusso-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <h2 className="font-display font-semibold text-3xl text-lusso-charcoal md:text-4xl">
            ¿Por qué viajar con <span className="italic">nosotros?</span>
          </h2>
        </div>

        {/* Grilla de razones */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {razones.map((razon) => (
            <div key={razon.titulo} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lusso-blue/30">
                <razon.icono size={26} className="text-lusso-charcoal" />
              </div>
              <h3 className="font-display font-semibold text-lg text-lusso-charcoal">
                {razon.titulo}
              </h3>
              <p className="mt-2 text-sm text-lusso-charcoal/70">
                {razon.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Diferenciador principal */}
        <div className="relative mt-14 overflow-hidden rounded-2xl bg-lusso-sage px-8 py-10 text-center">
          {/* Asset decorativo al lado derecho */}
          <div className="pointer-events-none absolute -right-6 top-1/2 hidden h-56 w-56 -translate-y-1/2 lg:block">
            <Image
              src="/images/assets/asset_03.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Contenido — no se mueve */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lusso-charcoal">
            <Users size={26} className="text-lusso-sage" />
          </div>
          <h3 className="font-display font-bold text-2xl text-lusso-charcoal">
            Acompañamiento Lusso durante todo el viaje
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-lusso-charcoal/80">
            No te vendemos un paquete y desaparecemos. Nuestro equipo te asesora
            de forma personalizada antes, durante y después de tu viaje.
          </p>
        </div>
      </div>
    </section>
  );
}