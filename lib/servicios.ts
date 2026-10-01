export type Servicio = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  destacado: boolean;
  sinCotizar?: boolean; // true = no muestra el botón "Cotizar este plan"
};

export const servicios: Servicio[] = [
  {
    id: 1,
    slug: "paquetes-a-tu-medida",
    titulo: "Paquetes a tu medida",
    descripcion:
      "Ningún viaje es igual a otro. Diseñamos cada itinerario desde cero, según tu presupuesto, tus fechas y la forma en que quieres vivir tu viaje.",
    imagen: "/images/servicios-webp/aTuMedida.webp",
    destacado: true,
  },
  {
    id: 2,
    slug: "luna-de-miel",
    titulo: "Luna de miel",
    descripcion:
      "Escapadas románticas diseñadas para dos. Hoteles boutique, cenas privadas y momentos inolvidables.",
    imagen: "/images/servicios-webp/lunamiel.webp",
    destacado: true,
  },
  {
    id: 3,
    slug: "viajes-en-familia",
    titulo: "Viajes en familia",
    descripcion:
      "Planes pensados para todas las edades, con actividades, comodidad y seguridad para todo el grupo.",
    imagen: "/images/servicios-webp/familia.webp",
    destacado: true,
  },
  {
  id: 4, 
  slug: "tour-por-europa",
  titulo: "Tour por Europa",
  descripcion:
    "Circuitos de 7 a 20+ días por las capitales y rincones más encantadores del continente europeo.",
  imagen: "/images/servicios-webp/europa.webp",
  destacado: false,
},
  {
    id: 5,
    slug: "planes-para-empresa",
    titulo: "Planes para empresa",
    descripcion:
      "Congresos, incentivos y team building con toda la logística resuelta para tu equipo.",
    imagen: "/images/servicios-webp/empresa.webp",
    destacado: false,
  },
  {
    id: 6,
    slug: "pasadias",
    titulo: "Pasadías",
    descripcion:
      "Escapadas de un día para desconectarte sin salir mucho tiempo de casa. Ideal para planes cortos.",
    imagen: "/images/servicios-webp/pasadia.webp",
    destacado: false,
  },
  // {
  //   id: 7,
  //   slug: "circuitos-por-el-mundo",
  //   titulo: "Circuitos por el mundo",
  //   descripcion:
  //     "Rutas de varios destinos en un solo viaje. Europa, Asia y más, con cada detalle coordinado.",
  //   imagen: "/images/servicios/europa1.jpg",
  //   destacado: false,
  // },
  {
    id: 7,
    slug: "aventura",
    titulo: "Aventura",
    descripcion:
      "Senderismo, rafting, ecoturismo y experiencias para quienes viajan buscando adrenalina.",
    imagen: "/images/servicios-webp/aventura1.webp",
    destacado: false,
  },
  {
  id: 8,
  slug: "festivales",
  titulo: "Festivales",
  descripcion:
    "Vive los festivales y eventos más importantes del mundo. Música, cultura y energía en destinos que no querrás perderte.",
  imagen: "/images/servicios-webp/festivales.webp",
  destacado: false,
  },
  {
  id: 9,
  slug: "planes-para-amigos",
  titulo: "Planes para amigos",
  descripcion:
    "Escapadas para disfrutar con tu grupo de amigos. Aventura, playa o ciudad, siempre con la mejor organización.",
  imagen: "/images/servicios-webp/amigos.webp",
  destacado: false,
  },
  {
  id: 10,
  slug: "cruceros",
  titulo: "Cruceros",
  descripcion:
    "Varios destinos en un solo viaje, sin hacer y deshacer maletas. Te ayudamos a elegir la ruta, la naviera y la cabina ideal.",
  imagen: "/images/servicios-webp/crucero.webp",
  destacado: false,
},
{
  id: 11,
  slug: "asistencia-medica-internacional",
  titulo: "Asistencia médica internacional",
  descripcion:
    "Viaja protegido ante cualquier imprevisto de salud en el exterior. Te ayudamos a elegir la cobertura según tu destino y tu viaje.",
  imagen: "/images/servicios-webp/asistenciaMed.webp",
  destacado: false,
  sinCotizar: true,
},
{
  id: 12,
  slug: "esim",
  titulo: "eSIM",
  descripcion:
    "Internet desde que aterrizas, sin cambiar tu chip ni pagar roaming. Elegimos contigo el plan de datos según tu destino y tus días de viaje.",
  imagen: "/images/servicios-webp/eSim.webp",
  destacado: false,
  sinCotizar: true,
},
];

export const serviciosDestacados = servicios.filter((s) => s.destacado);