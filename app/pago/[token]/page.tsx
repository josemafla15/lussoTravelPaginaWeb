"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Script from "next/script";

type DatosPago = {
  cliente_nombre: string;
  destino: string;
  descripcion: string;
  monto: string;
  widget: {
    public_key: string;
    currency: string;
    amount_in_cents: number;
    reference: string;
    signature_integrity: string;
    redirect_url: string;
  };
};

type WompiTransactionResult = {
  transaction?: {
    id: string;
    status: "APPROVED" | "DECLINED" | "VOIDED" | "ERROR" | "PENDING";
    reference: string;
  };
};

type WidgetCheckoutOptions = {
  currency: string;
  amountInCents: number;
  reference: string;
  publicKey: string;
  redirectUrl: string;
  signature: { integrity: string };
};

type WidgetCheckoutInstance = {
  open: (callback: (result: WompiTransactionResult) => void) => void;
};

declare global {
  interface Window {
    WidgetCheckout: new (options: WidgetCheckoutOptions) => WidgetCheckoutInstance;
  }
}

export default function PaginaPago() {
  const { token } = useParams<{ token: string }>();
  const [datos, setDatos] = useState<DatosPago | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);
  const [widgetListo, setWidgetListo] = useState(false);
  const [procesando, setProcesando] = useState(false);
  const [errorWidget, setErrorWidget] = useState(false);

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    fetch(`${backendUrl}/pago/${token}/`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "No se pudo cargar el pago");
        setDatos(json);
      })
      .catch((e) => setError(e instanceof Error ? e.message : "Error desconocido"))
      .finally(() => setCargando(false));
  }, [token]);

  useEffect(() => {
    if (widgetListo) return;
    const timeout = setTimeout(() => {
      if (!widgetListo) setErrorWidget(true);
    }, 8000);
    return () => clearTimeout(timeout);
  }, [widgetListo]);

  function abrirCheckout() {
    if (!datos || !window.WidgetCheckout) return;
    setProcesando(true);

    const checkout = new window.WidgetCheckout({
      currency: datos.widget.currency,
      amountInCents: datos.widget.amount_in_cents,
      reference: datos.widget.reference,
      publicKey: datos.widget.public_key,
      redirectUrl: datos.widget.redirect_url,
      signature: { integrity: datos.widget.signature_integrity },
    });

    checkout.open((result: WompiTransactionResult) => {
      setProcesando(false);
      if (result?.transaction?.status === "APPROVED") {
        window.location.href = datos.widget.redirect_url;
      }
    });
  }

  if (cargando) {
    return (
      <div className="min-h-screen bg-lusso-charcoal flex items-center justify-center">
        <p className="text-lusso-cream font-body">Cargando tu pago...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-lusso-charcoal flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-lusso-cream font-display text-2xl mb-2">
            Este link ya no está disponible
          </p>
          <p className="text-lusso-cream/70 font-body">{error}</p>
        </div>
      </div>
    );
  }

  if (!datos) return null;

  const montoFormateado = new Intl.NumberFormat("es-CO").format(
    Number(datos.monto)
  );

  return (
    <div className="min-h-screen bg-lusso-charcoal flex items-center justify-center px-6">
      <Script
        src="https://checkout.wompi.co/widget.js"
        onLoad={() => setWidgetListo(true)}
      />

      <div className="max-w-md w-full bg-lusso-cream rounded-2xl p-8">
        <p className="text-center text-xs tracking-widest text-lusso-charcoal/60 font-body mb-6">
          LUSSO TRAVEL
        </p>

        <div className="text-center mb-6">
          <p className="text-sm text-lusso-charcoal/70 font-body">
            Cotización de
          </p>
          <p className="font-display text-2xl text-lusso-charcoal">
            {datos.cliente_nombre}
          </p>
          <p className="text-lusso-charcoal/70 font-body">
            Viaje a {datos.destino}
          </p>
        </div>

        <div className="bg-lusso-charcoal/5 rounded-xl p-5 text-center mb-6">
          <p className="text-xs text-lusso-charcoal/50 font-body mb-1">
            Total a pagar
          </p>
          <p className="font-display text-3xl text-lusso-charcoal">
            ${montoFormateado}
          </p>
          <p className="text-xs text-lusso-charcoal/50 font-body">COP</p>
        </div>

        <button
          onClick={abrirCheckout}
          disabled={!widgetListo || procesando}
          className="w-full bg-lusso-charcoal text-lusso-cream font-body font-medium py-3 rounded-lg disabled:opacity-50"
        >
          {procesando
            ? "Procesando..."
            : widgetListo
            ? "Pagar ahora"
            : errorWidget
            ? "No disponible"
            : "Preparando pago..."}
        </button>

        {errorWidget && (
          <p className="text-center text-xs text-red-600 font-body mt-3">
            No pudimos cargar el sistema de pagos. Intenta recargar la página o
            contacta a tu asesor de Lusso.
          </p>
        )}

        <p className="text-center text-xs text-lusso-charcoal/50 font-body mt-4">
          Pago seguro procesado por Wompi
        </p>
      </div>
    </div>
  );
}