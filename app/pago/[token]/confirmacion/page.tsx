"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Confirmacion() {
  const { token } = useParams<{ token: string }>();
  const [estado, setEstado] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    fetch(`${backendUrl}/pago/${token}/`)
      .then((res) => res.json())
      .then((json) => setEstado(json.estado ?? null))
      .catch(() => setEstado(null))
      .finally(() => setCargando(false));
  }, [token]);

  function mensaje() {
    switch (estado) {
      case "pendiente":
        return "Tu pago está siendo confirmado. Te avisaremos por WhatsApp.";
      case "aprobado":
        return "Recibimos tu pago. Un asesor de Lusso te confirmará los detalles por WhatsApp.";
      case "declinado":
        return "Tu pago no pudo procesarse. Por favor intenta de nuevo o contacta a tu asesor de Lusso.";
      case "error":
        return "Ocurrió un error al procesar tu pago. No se realizó ningún cobro. Contacta a tu asesor de Lusso para intentarlo de nuevo.";
      case "anulado":
        return "Este pago fue anulado.";
      default:
        return "No pudimos verificar el estado de tu pago. Contacta a tu asesor de Lusso.";
    }
  }

  function titulo() {
    if (estado === "declinado" || estado === "error") return "Algo salió mal";
    if (estado === "pendiente") return "¡Casi listo!";
    if (estado === "aprobado") return "¡Gracias!";
    return "Verificando...";
  }

  if (cargando) {
    return (
      <div className="min-h-screen bg-lusso-charcoal flex items-center justify-center px-6">
        <p className="text-lusso-cream font-body">Confirmando tu pago...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lusso-charcoal flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-lusso-cream rounded-2xl p-8 text-center">
        <p className="font-display text-2xl text-lusso-charcoal mb-2">
          {titulo()}
        </p>
        <p className="text-lusso-charcoal/70 font-body">{mensaje()}</p>
      </div>
    </div>
  );
}