"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { WHATSAPP } from "@/lib/config";
import { supabase } from "@/lib/supabase";

const destinos = [
  "Santa Marta",
  "San Andrés",
  "Cartagena",
  "La Guajira",
  "Coveñas",
  "Río de Janeiro",
  "Cancún",
  "Otro destino",
];

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [destino, setDestino] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [autoriza, setAutoriza] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle");

  const enviar = async () => {
    if (!nombre.trim() || !contacto.trim() || !autoriza) {
      setEstado("error");
      return;
    }

    setEnviando(true);
    setEstado("idle");

    const { error } = await supabase.from("leads").insert({
      nombre: nombre.trim(),
      contacto: contacto.trim(),
      destino_interes: destino || null,
      mensaje: mensaje.trim() || null,
      origen: "contacto",
    });

    setEnviando(false);

    if (error) {
      console.error(error);
      setEstado("error");
      return;
    }

    setEstado("ok");
    setNombre("");
    setContacto("");
    setDestino("");
    setMensaje("");
    setAutoriza(false);
  };

  return (
    <main>
      {/* Hero claro con asset */}
      <section className="relative overflow-hidden bg-lusso-blue pt-32 pb-16">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-52 w-52 -translate-y-1/2 lg:block">
            <Image src="/images/assets/asset_05.png" alt="" fill className="object-contain" />
          </div>
          <h1 className="font-display font-bold text-4xl text-lusso-charcoal md:text-5xl">
            Hablemos de tu <span className="italic">próximo viaje</span>
          </h1>
          <p className="mt-4 text-lusso-charcoal/70">
            Escríbenos por el canal que prefieras. Respondemos rápido.
          </p>
        </div>
      </section>

      {/* Bloque principal — todo charcoal */}
      <section className="bg-lusso-charcoal py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          {/* Imagen */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl">
            <Image
              src="/images/contacto/vuelo.jpg"
              alt="Viaja con Lusso Travel"
              fill
              className="object-cover"
            />
          </div>

          {/* Formulario */}
          <div className="rounded-2xl bg-lusso-charcoal p-8 ring-1 ring-lusso-cream/10">
            <h2 className="font-display font-semibold text-2xl text-lusso-cream">
              Déjanos tus datos
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <div>
                <label className="text-sm font-semibold text-lusso-cream">Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="mt-1.5 w-full rounded-lg border border-lusso-cream/15 bg-lusso-cream/5 px-4 py-3 text-sm text-lusso-cream placeholder:text-lusso-cream/30 outline-none focus:border-lusso-blue transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-lusso-cream">
                  Email o WhatsApp
                </label>
                <input
                  type="text"
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                  placeholder="¿Cómo te contactamos?"
                  className="mt-1.5 w-full rounded-lg border border-lusso-cream/15 bg-lusso-cream/5 px-4 py-3 text-sm text-lusso-cream placeholder:text-lusso-cream/30 outline-none focus:border-lusso-blue transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-lusso-cream">
                  Destino de interés
                </label>
                <select
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-lusso-cream/15 bg-lusso-cream/5 px-4 py-3 text-sm text-lusso-cream outline-none focus:border-lusso-blue transition-colors [&>option]:bg-lusso-charcoal"
                >
                  <option value="">Selecciona un destino</option>
                  {destinos.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-lusso-cream">Mensaje</label>
                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos qué viaje tienes en mente..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-lusso-cream/15 bg-lusso-cream/5 px-4 py-3 text-sm text-lusso-cream placeholder:text-lusso-cream/30 outline-none focus:border-lusso-blue transition-colors"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-lusso-cream/60">
                <input
                  type="checkbox"
                  checked={autoriza}
                  onChange={(e) => setAutoriza(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-lusso-cream/30 bg-lusso-cream/5 accent-lusso-sage"
                />
                <span>
                  Autorizo el tratamiento de mis datos personales conforme a la{" "}
                  <Link href="/privacidad" className="underline hover:text-lusso-sage">
                    política de privacidad
                  </Link>
                  .
                </span>
              </label>

              <button
                type="button"
                onClick={enviar}
                disabled={enviando || !autoriza}
                className="mt-2 rounded-full bg-lusso-sage px-8 py-3.5 text-sm font-semibold text-lusso-charcoal transition-opacity hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </button>

              {estado === "ok" && (
                <p className="text-center text-sm text-lusso-sage">
                  ¡Gracias! Te contactaremos pronto.
                </p>
              )}
              {estado === "error" && (
                <p className="text-center text-sm text-red-400">
                  Completa nombre, contacto y acepta la política de privacidad.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Datos de contacto */}
        <div className="mx-auto mt-16 max-w-6xl border-t border-lusso-cream/10 px-6 pt-12">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-lusso-cream/80 transition-colors hover:text-lusso-sage"
            >
              <MessageCircle size={22} className="text-lusso-sage" />
              <span className="text-sm">WhatsApp — respuesta inmediata</span>
            </a>
            <div className="flex flex-col items-center gap-2 text-lusso-cream/80">
              <Mail size={22} className="text-lusso-sage" />
              <span className="text-sm">contacto@lussotravel.co</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-lusso-cream/80">
              <MapPin size={22} className="text-lusso-sage" />
              <span className="text-sm">Pasto, Colombia</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-lusso-cream/80">
              <Clock size={22} className="text-lusso-sage" />
              <span className="text-sm">Lun a sáb · 8:00 a. m. – 6:00 p. m.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}