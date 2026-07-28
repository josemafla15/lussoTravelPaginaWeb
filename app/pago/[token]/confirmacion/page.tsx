"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Confirmacion() {
  const { token } = useParams<{ token: string }>();
  const [estado, setEstado] = useState<string | null>(null);

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    fetch(`${backendUrl}/pago/${token}/`)
      .then((res) => res.json())
      .then((json) => setEstado(json.estado ?? "aprobado"))
      .catch(() => setEstado(null));
  }, [token]);

  return (
    <div className="min-h-screen bg-lusso-charcoal flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-lusso-cream rounded-2xl p-8 text-center">
        <p className="font-display text-2xl text-lusso-charcoal mb-2">
          ¡Gracias!
        </p>
        <p className="text-lusso-charcoal/70 font-body">
          {estado === "pendiente"
            ? "Tu pago está siendo confirmado. Te avisaremos por WhatsApp."
            : "Recibimos tu pago. Un asesor de Lusso te confirmará los detalles por WhatsApp."}
        </p>
      </div>
    </div>
  );
}