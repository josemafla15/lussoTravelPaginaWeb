"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    pregunta: "¿Por qué reservar con Lusso Travel?",
    respuesta:
      "En Lusso Travel diseñamos experiencias de viaje con atención personalizada, asesoría antes, durante y después del viaje. Trabajamos con operadores, hoteles y proveedores reconocidos para brindarte seguridad, respaldo y una experiencia inolvidable.",
  },
  {
    pregunta: "¿Qué incluye un plan turístico?",
    respuesta:
      "Cada viaje es diferente, pero generalmente nuestros planes pueden incluir tiquetes aéreos, alojamiento, traslados, asistencia médica, alimentación, tours y otros servicios. Siempre recibirás una cotización detallada con todo lo incluido.",
  },
  {
    pregunta: "¿Puedo pagar mi viaje por cuotas?",
    respuesta:
      "Sí. Dependiendo del valor del viaje y del destino, es posible acceder a opciones de pago por cuotas. Nuestro equipo evaluará tu solicitud y te presentará la alternativa que mejor se adapte a tu viaje.",
  },
  {
    pregunta: "¿Qué documentos necesito para viajar?",
    respuesta:
      "Depende del destino. Algunos países solo requieren pasaporte vigente, mientras que otros solicitan visa, vacunas o requisitos migratorios adicionales. Antes de viajar te informaremos exactamente qué documentos necesitas.",
  },
  {
    pregunta: "¿Con cuánto tiempo de anticipación debo reservar?",
    respuesta:
      "Lo ideal es reservar entre 2 y 6 meses antes, especialmente si viajas en temporada alta o a destinos internacionales. Reservar con anticipación permite acceder a mejores tarifas y mayor disponibilidad.",
  },
  {
    pregunta: "¿Los precios publicados pueden cambiar?",
    respuesta:
      "Sí. Las tarifas están sujetas a disponibilidad y cambios por parte de aerolíneas, hoteles y operadores hasta el momento de confirmar la reserva.",
  },
  {
    pregunta: "¿Qué pasa si necesito cancelar o modificar mi viaje?",
    respuesta:
      "Las condiciones dependen de las políticas de cada proveedor. Antes de confirmar tu reserva te explicaremos las condiciones de cambios, cancelaciones y posibles penalidades.",
  },
  {
    pregunta: "¿Es seguro reservar con Lusso Travel?",
    respuesta:
      "Sí. Te acompañamos durante todo el proceso de compra y viaje, brindando asesoría personalizada y trabajando con proveedores confiables para que viajes con tranquilidad.",
  },
  {
    pregunta: "¿Ofrecen asistencia durante el viaje?",
    respuesta:
      "Sí. Nuestro equipo estará disponible para ayudarte en caso de dudas o eventualidades antes y durante tu viaje.",
  },
  {
    pregunta: "¿Pueden diseñar un viaje a mi medida?",
    respuesta:
      "Por supuesto. Creamos experiencias totalmente personalizadas según tus gustos, presupuesto, fechas y estilo de viaje, ya sea en pareja, familia, con amigos o viajes corporativos.",
  },
  {
    pregunta: "¿Los niños pagan igual que los adultos?",
    respuesta:
      "No siempre. Las tarifas para menores dependen de la edad del niño, la aerolínea, el hotel y el destino. Te informaremos las condiciones específicas al momento de cotizar.",
  },
  {
    pregunta: "¿Es obligatorio adquirir asistencia médica de viaje?",
    respuesta:
      "En muchos destinos internacionales es un requisito de ingreso, y aunque no siempre sea obligatoria, recomendamos viajar con asistencia médica para contar con cobertura ante cualquier imprevisto.",
  },
  {
    pregunta: "¿Qué sucede si mi vuelo se retrasa o es cancelado?",
    respuesta:
      "Las aerolíneas son responsables de las reprogramaciones según sus políticas. En Lusso Travel te acompañaremos en el proceso para gestionar las alternativas disponibles.",
  },
  {
    pregunta: "¿Puedo regalar un viaje?",
    respuesta:
      "Sí. Podemos ayudarte a crear bonos de regalo o experiencias de viaje para sorprender a esa persona especial.",
  },
  {
    pregunta: "¿Cómo solicito una cotización?",
    respuesta:
      "Es muy sencillo. Solo debes indicarnos el destino, las fechas aproximadas, el número de viajeros y tus preferencias. Prepararemos una propuesta personalizada sin compromiso.",
  },
];

const VISIBLES_INICIAL = 5;

export default function FAQ() {
  const [abierta, setAbierta] = useState<number | null>(null);
  const [verTodas, setVerTodas] = useState(false);

  const faqsAMostrar = verTodas ? faqs : faqs.slice(0, VISIBLES_INICIAL);

  return (
    <section className="bg-lusso-cream py-20">
      <div className="mx-auto max-w-3xl px-6">
        <RevealOnScroll>
          <h2 className="text-center font-display font-semibold text-3xl text-lusso-charcoal md:text-4xl">
            Preguntas <span className="italic">frecuentes</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-12 flex flex-col gap-3">
          {faqsAMostrar.map((faq, i) => {
            const abierto = abierta === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl bg-white ring-1 ring-lusso-charcoal/5"
              >
                <button
                  onClick={() => setAbierta(abierto ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display font-semibold text-lusso-charcoal">
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-lusso-sage transition-transform duration-300 ${
                      abierto ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    abierto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-sm leading-relaxed text-lusso-charcoal/70">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!verTodas && faqs.length > VISIBLES_INICIAL && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVerTodas(true)}
              className="cursor-pointer rounded-full border border-lusso-charcoal/20 px-6 py-2.5 text-sm font-semibold text-lusso-charcoal transition-colors hover:bg-lusso-charcoal hover:text-lusso-cream active:scale-95"
            >
              Ver todas las preguntas
            </button>
          </div>
        )}
        
        {verTodas && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setVerTodas(false);
                setAbierta(null);
              }}
              className="cursor-pointer rounded-full border border-lusso-charcoal/20 px-6 py-2.5 text-sm font-semibold text-lusso-charcoal transition-colors hover:bg-lusso-charcoal hover:text-lusso-cream active:scale-95"
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}