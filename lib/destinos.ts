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
      { nombre: "Mar de los Siete Colores" },
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
      { nombre: "Islas del Rosario" },
      { nombre: "Getsemaní" },
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
      { nombre: "Cenotes de la Riviera Maya" },
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
      { nombre: "Playa Bávaro" },
      { nombre: "Isla Saona" },
      { nombre: "Hoyo Azul" },
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
];