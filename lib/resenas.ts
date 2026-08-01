export type Resena = {
  id: number;
  nombre: string;
  destino: string;
  texto: string;
  calificacion: number;
  fecha: string;
  asset: string;
  fotos?: string[];
};
// PLACEHOLDER — reemplazar con reseñas reales del cliente antes del lanzamiento
export const resenas: Resena[] = [
{
  id: 1,
  nombre: "Carolina M.",
  destino: "San Andrés",
  texto:
    "Tuve una experiencia excelente con Lusso Travel. El equipo fue muy atento y profesional, ayudándome a organizar cada detalle del viaje según mi presupuesto. Durante el viaje todo salió perfecto: itinerarios bien planificados y servicios de alta calidad, sin ningún inconveniente. Recomiendo esta agencia a cualquiera que quiera viajar con confianza. ¡Definitivamente volveré!",
  calificacion: 5,
  fecha: "Mayo 2026",
  asset: "/images/assets/asset_02.png",
  fotos: [
    "/images/resenas/ejemplo.jpeg",
    "/images/resenas/ejemplo2.jpeg",
    "/images/resenas/ejemplo3.jpeg",
  ],
},
  // {
  //   id: 2,
  //   nombre: "Andrés R.",
  //   destino: "Cancún",
  //   texto:
  //     "Nuestra luna de miel fue un sueño. La asesoría fue muy personalizada — sentimos que el viaje estaba hecho exactamente para nosotros.",
  //   calificacion: 5,
  //   fecha: "Abril 2026",
  //   asset: "/images/assets/asset_07.png",
  // },
  // {
  //   id: 3,
  //   nombre: "Familia Gómez",
  //   destino: "Santa Marta",
  //   texto:
  //     "Viajamos con niños y todo estuvo pensado para ellos. La atención del equipo Lusso durante el viaje nos dio muchísima tranquilidad.",
  //   calificacion: 5,
  //   fecha: "Junio 2026",
  //   asset: "/images/assets/asset_09.png",
  // },
];