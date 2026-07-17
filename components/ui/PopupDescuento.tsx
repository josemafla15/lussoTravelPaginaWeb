"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabase";

const RUTAS_EXCLUIDAS = ["/contacto", "/pago"];
const SCROLL_TRIGGER = 0.5;
const TIME_TRIGGER_MS = 28000;

export default function PopupDescuento() {
  const [visible, setVisible] = useState(false);
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [autoriza, setAutoriza] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const pathname = usePathname();

  const excluida = RUTAS_EXCLUIDAS.some((ruta) => pathname.startsWith(ruta));

  useEffect(() => {
    if (excluida) return;
    if (sessionStorage.getItem("popup-mostrado")) return;
    if (localStorage.getItem("popup-convertido")) return;

    const mostrar = () => {
      setVisible(true);
      sessionStorage.setItem("popup-mostrado", "1");
      limpiar();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) mostrar();
    };

    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_TRIGGER) mostrar();
    };

    const timer = setTimeout(mostrar, TIME_TRIGGER_MS);

    const limpiar = () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return limpiar;
  }, [excluida]);

  const cerrar = () => setVisible(false);

  const enviar = async () => {
    if (!nombre.trim() || !contacto.trim() || !autoriza) {
      setError(true);
      return;
    }

    setEnviando(true);
    setError(false);

    const { error: dbError } = await supabase.from("leads").insert({
      nombre: nombre.trim(),
      contacto: contacto.trim(),
      origen: "popup",
    });

    setEnviando(false);

    if (dbError) {
      console.error(dbError);
      setError(true);
      return;
    }

    localStorage.setItem("popup-convertido", "1");
    setEnviado(true);
    setTimeout(cerrar, 2500);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-lusso-charcoal/60 backdrop-blur-sm px-6"
      onClick={cerrar}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-lusso-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={cerrar}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 text-lusso-charcoal/50 transition-colors hover:text-lusso-charcoal"
        >
          <X size={22} />
        </button>

        <div className="relative flex h-32 items-center justify-center bg-lusso-sage">
          <div className="relative h-24 w-24">
            <Image
              src="/images/assets/asset_01.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="p-8">
          {enviado ? (
            <div className="py-6 text-center">
              <p className="font-display font-semibold text-2xl text-lusso-charcoal">
                ¡Listo! ✈️
              </p>
              <p className="mt-2 text-sm text-lusso-charcoal/70">
                Pronto recibirás tu beneficio para tu primer viaje.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display font-bold text-2xl text-lusso-charcoal">
                Tu primer viaje con{" "}
                <span className="italic">beneficio exclusivo</span>
              </h3>
              <p className="mt-2 text-sm text-lusso-charcoal/70">
                Déjanos tus datos y recibe un descuento especial en tu primera
                cotización con Lusso Travel.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-lusso-charcoal/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-lusso-blue"
                />
                <input
                  type="text"
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                  placeholder="WhatsApp o email"
                  className="w-full rounded-lg border border-lusso-charcoal/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-lusso-blue"
                />

                <label className="flex items-start gap-2 text-xs text-lusso-charcoal/60">
                  <input
                    type="checkbox"
                    checked={autoriza}
                    onChange={(e) => setAutoriza(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-lusso-charcoal/30 accent-lusso-charcoal"
                  />
                  <span>
                    Autorizo el tratamiento de mis datos según la{" "}
                    <Link href="/privacidad" className="underline hover:text-lusso-charcoal">
                      política de privacidad
                    </Link>
                    .
                  </span>
                </label>

                <button
                  onClick={enviar}
                  disabled={enviando || !autoriza}
                  className="rounded-full bg-lusso-charcoal px-8 py-3.5 text-sm font-semibold text-lusso-cream transition-opacity hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {enviando ? "Enviando..." : "Quiero mi descuento"}
                </button>

                {error && (
                  <p className="text-center text-xs text-red-500">
                    Completa tus datos y acepta la política de privacidad.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}