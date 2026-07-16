export type Servicio = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  destacado: boolean; // los 3 que aparecen en el inicio
};

export const servicios: Servicio[] = [
  {
    id: 1,
    slug: "luna-de-miel",
    titulo: "Luna de miel",
    descripcion:
      "Escapadas románticas diseñadas para dos. Hoteles boutique, cenas privadas y momentos inolvidables.",
    imagen: "/images/servicios/lunamiel.jpg",
    destacado: true,
  },
  {
    id: 2,
    slug: "viajes-en-familia",
    titulo: "Viajes en familia",
    descripcion:
      "Planes pensados para todas las edades, con actividades, comodidad y seguridad para todo el grupo.",
    imagen: "/images/servicios/familia.jpg",
    destacado: true,
  },
  {
    id: 3,
    slug: "planes-para-empresa",
    titulo: "Planes para empresa",
    descripcion:
      "Congresos, incentivos y team building con toda la logística resuelta para tu equipo.",
    imagen: "/images/servicios/empresa.jpg",
    destacado: true,
  },
  {
    id: 4,
    slug: "pasadias",
    titulo: "Pasadías",
    descripcion:
      "Escapadas de un día para desconectarte sin salir mucho tiempo de casa. Ideal para planes cortos.",
    imagen: "/images/servicios/pasadia.jpg",
    destacado: false,
  },
  {
    id: 5,
    slug: "circuitos-por-el-mundo",
    titulo: "Circuitos por el mundo",
    descripcion:
      "Rutas de varios destinos en un solo viaje. Europa, Asia y más, con cada detalle coordinado.",
    imagen: "/images/servicios/europa1.jpg",
    destacado: false,
  },
  {
    id: 6,
    slug: "aventura",
    titulo: "Aventura",
    descripcion:
      "Senderismo, rafting, ecoturismo y experiencias para quienes viajan buscando adrenalina.",
    imagen: "/images/servicios/aventura1.jpg",
    destacado: false,
  },
  {
  id: 7,
  slug: "festivales",
  titulo: "Festivales",
  descripcion:
    "Vive los festivales y eventos más importantes del mundo. Música, cultura y energía en destinos que no querrás perderte.",
  imagen: "/images/servicios/festivales.jpg",
  destacado: false,
  },
  {
  id: 8,
  slug: "planes-para-amigos",
  titulo: "Planes para amigos",
  descripcion:
    "Escapadas para disfrutar con tu grupo de amigos. Aventura, playa o ciudad, siempre con la mejor organización.",
  imagen: "/images/servicios/amigos.jpg",
  destacado: false,
  },
];

export const serviciosDestacados = servicios.filter((s) => s.destacado);