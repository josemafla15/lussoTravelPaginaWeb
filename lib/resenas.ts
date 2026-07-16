export type Resena = {
  id: number;
  nombre: string;
  destino: string;
  texto: string;
  calificacion: number; // 1-5
  fecha: string;
};

// PLACEHOLDER — reemplazar con reseñas reales del cliente antes del lanzamiento
export const resenas: Resena[] = [
  {
    id: 1,
    nombre: "Carolina M.",
    destino: "San Andrés",
    texto:
      "Todo salió perfecto de principio a fin. Nos organizaron cada detalle del viaje y siempre estuvieron pendientes por WhatsApp. El hotel superó lo que esperábamos.",
    calificacion: 5,
    fecha: "Mayo 2026",
  },
  {
    id: 2,
    nombre: "Andrés R.",
    destino: "Cancún",
    texto:
      "Nuestra luna de miel fue un sueño. La asesoría fue muy personalizada — sentimos que el viaje estaba hecho exactamente para nosotros.",
    calificacion: 5,
    fecha: "Abril 2026",
  },
  {
    id: 3,
    nombre: "Familia Gómez",
    destino: "Santa Marta",
    texto:
      "Viajamos con niños y todo estuvo pensado para ellos. La atención del equipo Lusso durante el viaje nos dio muchísima tranquilidad.",
    calificacion: 5,
    fecha: "Junio 2026",
  },
];