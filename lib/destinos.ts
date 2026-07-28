export type Imperdible = {
  nombre: string;
  imagen?: string;
};

export type Destino = {
  id: number;
  slug: string;
  nombre: string;
  tipo: "nacional" | "internacional";
  categorias: string[];
  descripcion: string;
  imperdibles: Imperdible[];
  frase: string;
  imagen: string;
};

export const destinos: Destino[] = [
  {
    id: 1,
    slug: "santa-marta",
    nombre: "Santa Marta",
    tipo: "nacional",
    categorias: ["Playa", "Aventura"],
    descripcion:
      "Donde la naturaleza, el mar y la cultura se unen. Puerta de entrada al Tayrona y hogar de la Sierra Nevada.",
    imperdibles: [
      { nombre: "Parque Tayrona", imagen: "/images/destinos/parque_tayrona.jpg" },
      { nombre: "Centro Histórico", imagen: "/images/destinos/centro_historico.jpg" },
      { nombre: "Sierra Nevada", imagen: "/images/destinos/sierra_nevada.jpg" },
    ],
    frase:
      "Santa Marta lo tiene todo: playas paradisíacas, naturaleza, historia y experiencias inolvidables.",
    imagen: "/images/destinos/santa_marta.webp",
  },
  {
    id: 2,
    slug: "san-andres",
    nombre: "San Andrés",
    tipo: "nacional",
    categorias: ["Playa"],
    descripcion:
      "El paraíso del Mar de los Siete Colores. Arrecifes, playas de arena blanca y excursiones inolvidables.",
    imperdibles: [
      { nombre: "Johnny Cay", imagen: "/images/destinos/johnny.svg" },
      { nombre: "Acuario Natural", imagen: "/images/destinos/acuario.jpg" },
      { nombre: "Snorkel y buceo", imagen: "/images/destinos/snorkel.jpg" },
    ],
    frase: "Déjese cautivar por el Mar de los Siete Colores y playas de ensueño.",
    imagen: "/images/destinos/sanAndres.webp",
  },
  {
    id: 3,
    slug: "cartagena",
    nombre: "Cartagena",
    tipo: "nacional",
    categorias: ["Playa", "Cultura"],
    descripcion:
      "Ciudad Patrimonio de la Humanidad. Historia colonial, playas de Barú y el encanto único del Caribe.",
    imperdibles: [
      { nombre: "Ciudad Amurallada", imagen: "/images/destinos/ciudadamurallada.jpg" },
      { nombre: "Islas del Rosario", imagen: "/images/destinos/islasRosario.jpg" },
      { nombre: "Getsemaní", imagen: "/images/destinos/getsemani.jpg" },
    ],
    frase:
      "Cartagena combina historia, cultura y el encanto del Caribe en un destino que enamora.",
    imagen: "/images/destinos/cartagena.webp",
  },
  {
    id: 4,
    slug: "la-guajira",
    nombre: "La Guajira",
    tipo: "nacional",
    categorias: ["Aventura"],
    descripcion:
      "Donde el desierto se encuentra con el mar. Playas vírgenes, dunas doradas y la cultura Wayuu.",
    imperdibles: [
      { nombre: "Cabo de la Vela", imagen: "/images/destinos/cabo.jpg" },
      { nombre: "Punta Gallinas", imagen: "/images/destinos/puntagallinas.jpg" },
      { nombre: "Salares de Manaure", imagen: "/images/destinos/salar.jpg" },
    ],
    frase:
      "Un destino donde la naturaleza, la cultura y el Caribe crean una experiencia inolvidable.",
    imagen: "/images/destinos/guajira.webp",
  },
  {
    id: 5,
    slug: "covenas",
    nombre: "Coveñas",
    tipo: "nacional",
    categorias: ["Playa"],
    descripcion:
      "Playas tranquilas, mar sereno y las Islas de San Bernardo. El plan perfecto para desconectarse.",
    imperdibles: [
      { nombre: "Islas de San Bernardo", imagen: "/images/destinos/sanBernardo.jpg" },
      { nombre: "Atardeceres sobre el Caribe", imagen: "/images/destinos/atardecer.jpg" },
      { nombre: "Paseos en lancha", imagen: "/images/destinos/lancha.jpg" },
    ],
    frase:
      "El destino perfecto para quienes buscan tranquilidad y el encanto auténtico del Caribe.",
    imagen: "/images/destinos/covenas.webp",
  },
  {
    id: 6,
    slug: "rio-de-janeiro",
    nombre: "Río de Janeiro",
    tipo: "internacional",
    categorias: ["Playa", "Ciudad", "Cultura"],
    descripcion:
      "La ciudad más vibrante de Sudamérica. Copacabana, el Cristo Redentor y la energía única de Brasil.",
    imperdibles: [
      { nombre: "Cristo Redentor", imagen: "/images/destinos/cristo.jpg" },
      { nombre: "Pan de Azúcar", imagen: "/images/destinos/panazucar.jpg" },
      { nombre: "Copacabana", imagen: "/images/destinos/copacabana.jpg" },
    ],
    frase: "Déjese sorprender por la magia de Río, donde el mar y la cultura se unen.",
    imagen: "/images/destinos/rio.webp",
  },
  {
    id: 7,
    slug: "cancun",
    nombre: "Cancún",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "Arena blanca, aguas turquesas y resorts todo incluido de clase mundial en el Caribe mexicano.",
    imperdibles: [
      { nombre: "Isla Mujeres", imagen: "/images/destinos/islamujeres.jpg" },
      { nombre: "Chichén Itzá", imagen: "/images/destinos/chichen.jpg" },
      { nombre: "Museo Subacuático de Arte", imagen: "/images/destinos/museoSub.jpg" },
    ],
    frase:
      "Descubra el encanto del Caribe mexicano y haga realidad el destino de sus sueños.",
    imagen: "/images/destinos/cancun.webp",
  },
  {
    id: 8,
    slug: "ciudad-de-mexico",
    nombre: "Ciudad de México",
    tipo: "internacional",
    categorias: ["Ciudad", "Cultura"],
    descripcion:
      "Historia, cultura y gastronomía en el corazón de México. De Teotihuacán a la Basílica de Guadalupe.",
    imperdibles: [
      { nombre: "Teotihuacán", imagen: "/images/destinos/teoti.jpg" },
      { nombre: "Basílica de Guadalupe", imagen: "/images/destinos/basilica.jpg" },
      { nombre: "Centro Histórico", imagen: "/images/destinos/centromexico.jpg" },
    ],
    frase:
      "Descubra la grandeza de CDMX, donde la historia milenaria y la cultura vibrante se unen.",
    imagen: "/images/destinos/ciudadmexico.webp",
  },
  {
    id: 9,
    slug: "punta-cana",
    nombre: "Punta Cana",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "El corazón del Caribe dominicano. Resorts de lujo, playas de ensueño y descanso total.",
    imperdibles: [
      { nombre: "Playa Bávaro", imagen: "/images/destinos/playabavaro.jpg" },
      { nombre: "Isla Saona", imagen: "/images/destinos/playaSaona.jpg" },
      { nombre: "Marina Cap Cana", imagen: "/images/destinos/capcana.jpg" },
    ],
    frase:
      "Déjese envolver por la belleza del Caribe dominicano y viva unas vacaciones inolvidables.",
    imagen: "/images/destinos/puntacana.webp",
  },
  {
    id: 10,
    slug: "panama",
    nombre: "Panamá",
    tipo: "internacional",
    categorias: ["Ciudad", "Playa"],
    descripcion:
      "Donde se unen dos océanos. Ciudad moderna, compras libres de impuestos e islas paradisíacas.",
    imperdibles: [
      { nombre: "Canal de Panamá", imagen: "/images/destinos/canalPanama.jpg" },
      { nombre: "San Blas", imagen: "/images/destinos/sanBlas.jpg" },
      { nombre: "Casco Antiguo", imagen: "/images/destinos/cascoAntiguo.jpg" },
    ],
    frase:
      "Un destino que lo tiene todo: modernidad, historia, naturaleza y playas espectaculares.",
    imagen: "/images/destinos/ciudadPanama.webp",
  },
  {
    id: 11,
    slug: "tour-por-europa",
    nombre: "Tour por Europa",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Circuitos de 7 a 20+ días por las capitales y rincones más encantadores del continente.",
    imperdibles: [
      { nombre: "Francia" },
      { nombre: "Italia" },
      { nombre: "España" },
    ],
    frase:
      "No importa cuál sea el viaje de sus sueños, siempre habrá un circuito diseñado para usted.",
    imagen: "/images/destinos/europa.webp",
  },
  {
    id: 12,
    slug: "japon",
    nombre: "Japón",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Donde la tradición milenaria y la innovación conviven en perfecta armonía. Templos, ciudades vibrantes y paisajes que parecen sacados de una postal.",
    imperdibles: [
      { nombre: "Monte Fuji", imagen: "/images/destinos/fuji.jpg" },
      { nombre: "Templos de Kioto", imagen: "/images/destinos/kyoto.jpg" },
      { nombre: "Tokio", imagen: "/images/destinos/tokio.jpg" },
    ],
    frase:
      "Descubra un destino donde cada rincón cuenta una historia de excelencia, tradición y asombro.",
    imagen: "/images/destinos/japon.webp",
  },
  {
    id: 13,
    slug: "francia",
    nombre: "Francia",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "El romance, el arte y la gastronomía en su máxima expresión. De la icónica París a la Riviera Francesa.",
    imperdibles: [
      { nombre: "París", imagen: "/images/destinos/paris.jpg" },
      { nombre: "Niza", imagen: "/images/destinos/niza.jpg" },
    ],
    frase: "Descubra la elegancia francesa, entre la capital del amor y la costa mediterránea.",
    imagen: "/images/destinos/francia.jpg",
  },
  {
    id: 14,
    slug: "espana",
    nombre: "España",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Historia, arte y una energía única. De la capital madrileña a la vibrante Barcelona.",
    imperdibles: [
      { nombre: "Madrid", imagen: "/images/destinos/madrid.jpg" },
      { nombre: "Barcelona", imagen: "/images/destinos/barcelona.jpg" },
    ],
    frase: "Viva la pasión española entre museos, arquitectura y vida nocturna inolvidable.",
    imagen: "/images/destinos/espana.webp",
  },
  {
    id: 15,
    slug: "italia",
    nombre: "Italia",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Cuna del arte y la historia. De la eterna Roma a los canales de Venecia.",
    imperdibles: [
      { nombre: "Roma", imagen: "/images/destinos/roma.jpg" },
      { nombre: "Venecia", imagen: "/images/destinos/venecia.jpg" },
    ],
    frase: "Enamórese de Italia, donde cada calle cuenta una historia milenaria.",
    imagen: "/images/destinos/italia.jpg",
  },
  {
    id: 16,
    slug: "portugal",
    nombre: "Portugal",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Encanto costero y tradición. De la colorida Lisboa a la histórica Oporto.",
    imperdibles: [
      { nombre: "Lisboa", imagen: "/images/destinos/lisboa.jpg" },
      { nombre: "Oporto", imagen: "/images/destinos/oporto.jpg" },
    ],
    frase: "Descubra Portugal, entre miradores, fado y el sabor del Atlántico.",
    imagen: "/images/destinos/portugal2.jpg",
  },
  {
    id: 17,
    slug: "reino-unido",
    nombre: "Reino Unido",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Historia real y modernidad. De la icónica Londres a la escocesa Edimburgo.",
    imperdibles: [
      { nombre: "Londres", imagen: "/images/destinos/londres.jpg" },
      { nombre: "Edimburgo", imagen: "/images/destinos/edimburgo.jpg" },
    ],
    frase: "Explore el Reino Unido, entre castillos, museos y paisajes de leyenda.",
    imagen: "/images/destinos/reinoUnido2.jpg",
  },
  {
    id: 18,
    slug: "alemania",
    nombre: "Alemania",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Historia, cerveza y arquitectura imponente. De la vibrante Berlín a la bávara Múnich.",
    imperdibles: [
      { nombre: "Berlín", imagen: "/images/destinos/berlin.jpg" },
      { nombre: "Múnich", imagen: "/images/destinos/munich.jpg" },
    ],
    frase: "Viva Alemania entre historia, cultura y tradición centroeuropea.",
    imagen: "/images/destinos/alemania.jpg",
  },
  {
    id: 19,
    slug: "paises-bajos",
    nombre: "Países Bajos",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Canales, bicicletas y tulipanes. Ámsterdam la convierte en una experiencia única.",
    imperdibles: [
      { nombre: "Ámsterdam", imagen: "/images/destinos/amsterdam.jpg" },
    ],
    frase: "Recorra Ámsterdam, ciudad de canales, arte y bicicletas.",
    imagen: "/images/destinos/paisesBajos.jpg",
  },
  {
    id: 20,
    slug: "grecia",
    nombre: "Grecia",
    tipo: "internacional",
    categorias: ["Cultura", "Playa"],
    descripcion:
      "Cuna de la civilización occidental. De la histórica Atenas a la paradisíaca Santorini.",
    imperdibles: [
      { nombre: "Atenas", imagen: "/images/destinos/atenas.jpg" },
      { nombre: "Santorini", imagen: "/images/destinos/santorini.jpg" },
    ],
    frase: "Descubra Grecia, entre ruinas milenarias y atardeceres inolvidables.",
    imagen: "/images/destinos/grecia.jpg",
  },
  {
    id: 21,
    slug: "finlandia",
    nombre: "Finlandia",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "Naturaleza nórdica y auroras boreales. De la moderna Helsinki a la mágica Rovaniemi.",
    imperdibles: [
      { nombre: "Helsinki", imagen: "/images/destinos/helsinki.jpg" },
      { nombre: "Rovaniemi", imagen: "/images/destinos/rovaniemi.jpg" },
    ],
    frase: "Viva la magia nórdica de Finlandia, tierra de auroras y de Papá Noel.",
    imagen: "/images/destinos/finlandia.jpg",
  },
];