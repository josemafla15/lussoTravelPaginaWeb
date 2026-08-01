export type Parque = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

export type Experiencia = {
  id: number;
  slug: string;
  marca: string;
  descripcionMarca: string;
  imagen: string; // foto de portada de la marca
  parques: Parque[];
};

export const experiencias: Experiencia[] = [
  {
    id: 1,
    slug: "xcaret",
    marca: "Xcaret",
    descripcionMarca:
      "Un universo de parques mexicanos donde la naturaleza, la aventura y la cultura se viven de forma única. Nueve experiencias distintas en el corazón de la Riviera Maya.",
    imagen: "/images/experiencias/xcaret.webp",
    parques: [
      {
        nombre: "Xcaret Park",
        descripcion:
          "El parque más emblemático de México, donde naturaleza, cultura y aventura se unen con ríos subterráneos, fauna y espectáculos únicos.",
        imagen: "/images/experiencias/parqueXcaret.webp",
      },
      {
        nombre: "Xel-Há",
        descripcion:
          "Un paraíso natural todo incluido para practicar snorkel, disfrutar de una enorme caleta y vivir un día rodeado de aguas cristalinas y selva.",
        imagen: "/images/experiencias/xelHa.webp",
      },
      {
        nombre: "Xplor",
        descripcion:
          "El parque de aventura por excelencia con tirolesas, vehículos anfibios, cavernas y ríos subterráneos para explorar la Riviera Maya.",
        imagen: "/images/experiencias/xplor.webp",
      },
    ],
  },
  {
    id: 2,
    slug: "disney",
    marca: "Disney",
    descripcionMarca:
      "La magia más reconocida del mundo, con parques temáticos en distintos continentes que hacen realidad las historias que marcaron generaciones.",
    imagen: "/images/experiencias/disney.webp",
    parques: [
      {
        nombre: "Walt Disney World",
        descripcion:
          "El destino Disney más grande del mundo, con cuatro parques temáticos llenos de fantasía y aventura para toda la familia.",
        imagen: "/images/experiencias/disneyFlorida.webp",
      },
      {
        nombre: "Disneyland Paris",
        descripcion:
          "El reino mágico de Europa, con un castillo de cuento y la esencia Disney adaptada al encanto francés.",
        imagen: "/images/experiencias/disneyFrancia.webp",
      },
      {
        nombre: "Tokyo Disney Resort",
        descripcion:
          "La magia Disney con un toque japonés impecable, en dos parques únicos en el mundo.",
        imagen: "/images/experiencias/disneyJapon.webp",
      },
    ],
  },
  {
    id: 3,
    slug: "universal",
    marca: "Universal",
    descripcionMarca:
      "Vive tus películas y sagas favoritas en parques que combinan tecnología, cine y adrenalina en distintos rincones del planeta.",
    imagen: "/images/experiencias/universal.webp",
    parques: [
      {
        nombre: "Universal Orlando",
        descripcion:
          "Hogar del mundo mágico de Harry Potter y el nuevo Epic Universe, con parques que transportan a tus sagas favoritas.",
        imagen: "/images/experiencias/universalOrlando.webp",
      },
      {
        nombre: "Universal Studios Japan",
        descripcion:
          "La experiencia Universal más vibrante de Asia, con Super Nintendo World y atracciones de tecnología punta.",
        imagen: "/images/experiencias/universalJapon.webp",
      },
      {
        nombre: "Universal Studios Hollywood",
        descripcion:
          "Vive el cine de cerca en el estudio original de Universal, con el famoso tour de estudios.",
        imagen: "/images/experiencias/universalHollywood.webp",
      },
    ],
  },
];