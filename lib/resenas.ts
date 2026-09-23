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

export const resenas: Resena[] = [
  {
    id: 1,
    nombre: "Jimena L.",
    destino: "Coveñas",
    texto:
      "Tuve una experiencia excelente con Lusso Travel. El equipo fue muy atento y profesional, ayudándome a organizar cada detalle del viaje según mi presupuesto. Durante el viaje todo salió perfecto: itinerarios bien planificados y servicios de alta calidad, sin ningún inconveniente. Recomiendo esta agencia a cualquiera que quiera viajar con confianza. ¡Definitivamente volveré!",
    calificacion: 5,
    fecha: "2026",
    asset: "/images/assets/asset_08.png",
    fotos: [
      "/images/resenas/ejemplo.jpeg",
      "/images/resenas/ejemplo2.jpeg",
      "/images/resenas/ejemplo3.jpeg",
    ],
  },
  {
    id: 2,
    nombre: "Maria Rayo",
    destino: "México",
    texto:
      "Viajar a México con Lusso Travel fue una experiencia inolvidable. Me sentí acompañada en cada detalle, viví una cultura increíble y creé recuerdos para toda la vida. ¡Sin duda los recomiendo y espero volver a viajar con ustedes!",
    calificacion: 5,
    fecha: "2026",
    asset: "/images/assets/asset_04.png",
    fotos: [
      "/images/resenas/mariaRayo1.jpeg",
      "/images/resenas/mariaRayo2.jpeg",
      "/images/resenas/mariaRayo3.jpeg",
    ],
  },
  {
    id: 3,
    nombre: "Marcela Córdoba",
    destino: "Europa",
    texto:
      "Viajar a Europa con la tranquilidad de que Lusso Travel organizó cada detalle no tiene precio. Una logística increíble que hizo de este viaje una aventura inolvidable. ¡Los mejores!",
    calificacion: 5,
    fecha: "2026",
    asset: "/images/assets/asset_08.png",
    fotos: [
      "/images/resenas/marcelaCordobaEuro1.jpeg",
      "/images/resenas/marcelaCordobaEuro2.jpeg",
      "/images/resenas/marcelaCordobaEuro3.jpeg",
    ],
  },
  {
    id: 4,
    nombre: "Marcela Córdoba",
    destino: "San Andrés",
    texto:
      "San Andrés fue espectacular: brisa caribeña, reggae y un mar de siete colores para el recuerdo. Lusso Travel te acompaña de principio a fin — sin duda, mi mejor agencia de viajes.",
    calificacion: 5,
    fecha: "2026",
    asset: "/images/assets/asset_04.png",
    fotos: [
      "/images/resenas/marcelaCordobaSanAn1.jpeg",
      "/images/resenas/marcelaCordobaSanAn2.jpeg",
      "/images/resenas/marcelaCordobaSanAn3.jpeg",
    ],
  },
  {
    id: 5,
    nombre: "Adriana Moreno",
    destino: "Coveñas",
    texto:
      "Tuve la oportunidad de viajar a Coveñas con Lusso Travel y fue una experiencia excelente. Destaco su organización, atención y acompañamiento en cada momento del viaje. Una agencia muy recomendada para disfrutar con tranquilidad y confianza.",
    calificacion: 5,
    fecha: "2026",
    asset: "/images/assets/asset_08.png",
    fotos: [
      "/images/resenas/adrianaMoreno1.jpeg",
      "/images/resenas/adrianaMoreno2.jpeg",
      "/images/resenas/adrianaMoreno3.jpeg",
    ],
  },
];