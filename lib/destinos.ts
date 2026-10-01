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
  // ─────────────────────────────────────────────
  // NACIONALES
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "narino",
    nombre: "Nariño",
    tipo: "nacional",
    categorias: ["Cultura"],
    descripcion:
      "Nariño es un destino lleno de tradición en el sur de Colombia, y su mayor tesoro es el Carnaval de Negros y Blancos, Patrimonio Cultural Inmaterial de la Humanidad. Cada enero, Pasto se llena de carrozas monumentales, comparsas, música andina y juegos con talco. Además, paisajes como la Laguna de la Cocha y el Santuario de Las Lajas completan una experiencia inolvidable.",
    imperdibles: [
      { nombre: "Carnaval de negros y blancos", imagen: "/images/destinosNuevos-webp/narinoCarnaval.webp" },
      { nombre: "Laguna de la cocha", imagen: "/images/destinosNuevos-webp/narinoLaguna.webp" },
      { nombre: "Santuario de Las Lajas", imagen: "/images/destinosNuevos-webp/narinoLajas.webp" },
    ],
    frase:
      "Vive la magia del Carnaval de Negros y Blancos y descubra la riqueza cultural de Nariño.",
    imagen: "/images/destinosNuevos-webp/narino.webp",
  },
  {
    id: 2,
    slug: "santa-marta",
    nombre: "Santa Marta",
    tipo: "nacional",
    categorias: ["Playa", "Aventura"],
    descripcion:
      "Santa Marta es la ciudad más antigua de Colombia y un paraíso donde el mar se encuentra con la montaña. Es la puerta de entrada al Parque Tayrona y a la Sierra Nevada, con playas vírgenes, selva tropical y cultura indígena viva, ideal para combinar descanso, naturaleza y aventura.",
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
    id: 3,
    slug: "san-andres",
    nombre: "San Andrés",
    tipo: "nacional",
    categorias: ["Playa"],
    descripcion:
      "San Andrés es el paraíso del Mar de los Siete Colores, una isla caribeña de aguas cristalinas y arena blanca. Sus arrecifes, cayos cercanos y la alegre cultura raizal hacen de este destino el plan perfecto para bucear, relajarse al sol y disfrutar del Caribe colombiano.",
    imperdibles: [
      { nombre: "Johnny Cay", imagen: "/images/destinos/johnny.jpg" },
      { nombre: "Acuario Natural", imagen: "/images/destinos/acuario.jpg" },
      { nombre: "Snorkel y buceo", imagen: "/images/destinos/snorkel.jpg" },
    ],
    frase: "Déjese cautivar por el Mar de los Siete Colores y playas de ensueño.",
    imagen: "/images/destinos/sanAndres.webp",
  },
  {
    id: 4,
    slug: "cartagena",
    nombre: "Cartagena",
    tipo: "nacional",
    categorias: ["Playa", "Cultura"],
    descripcion:
      "Cartagena es la joya del Caribe colombiano y Patrimonio de la Humanidad. Su ciudad amurallada, sus calles coloniales llenas de flores y balcones, y la cercanía a islas de aguas turquesas como Barú y el Rosario la convierten en un destino que mezcla historia, cultura y playa.",
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
    id: 5,
    slug: "la-guajira",
    nombre: "La Guajira",
    tipo: "nacional",
    categorias: ["Aventura"],
    descripcion:
      "La Guajira es el lugar donde el desierto se encuentra con el mar. Dunas doradas, playas vírgenes, atardeceres infinitos y la cultura ancestral del pueblo Wayuu hacen de este rincón del norte de Colombia una aventura auténtica para quienes buscan paisajes únicos.",
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
    id: 6,
    slug: "covenas",
    nombre: "Coveñas",
    tipo: "nacional",
    categorias: ["Playa"],
    descripcion:
      "Coveñas es el refugio ideal para desconectarse frente al Caribe. Sus playas tranquilas, su mar sereno y la cercanía a las Islas de San Bernardo, con aguas cristalinas y pueblos pesqueros, lo convierten en el destino perfecto para descansar en familia o en pareja sin prisas.",
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
    id: 7,
    slug: "amazonas",
    nombre: "Amazonas",
    tipo: "nacional",
    categorias: ["Aventura"],
    descripcion:
      "El Amazonas es naturaleza en su estado más puro. Recorrer el río más caudaloso del mundo, adentrarse en la selva, ver delfines rosados y conocer las comunidades indígenas que la habitan hacen de este destino una experiencia que se queda contigo para siempre.",
    imperdibles: [
      { nombre: "Avistamiento de aves", imagen: "/images/destinos/avistamiento.webp" },
      { nombre: "Atardeceres sobre el río amazonas", imagen: "/images/destinos/atardeceresAmazonas.webp" },
      { nombre: "Recorridos en lancha", imagen: "/images/destinos/recorridosLancha.webp" },
    ],
    frase:
      "El destino perfecto para quienes buscan aventura y una verdadera conexión con la naturaleza.",
    imagen: "/images/destinos/amazonas.webp",
  },
  {
    id: 8,
    slug: "eje-cafetero",
    nombre: "Eje cafetero",
    tipo: "nacional",
    categorias: ["Cultura"],
    descripcion:
      "El Eje Cafetero es el corazón verde de Colombia y Patrimonio de la Humanidad por su paisaje cultural cafetero. Entre montañas, fincas tradicionales y pueblos coloridos como Salento y Filandia, invita a vivir la cultura del café. Su joya es el Valle del Cocora, hogar de la palma de cera, el árbol nacional.",
    imperdibles: [
      { nombre: "Termales de Santa Rosa de Cabal", imagen: "/images/destinosNuevos-webp/ejeCafTermales.webp" },
      { nombre: "Valle del cocora", imagen: "/images/destinosNuevos-webp/ejeCafValle.webp" },
      { nombre: "Pueblos mágicos", imagen: "/images/destinosNuevos-webp/ejeCafPueblos.webp" },
    ],
    frase:
      "Montañas verdes, aroma a café y pueblos de colores en el corazón de Colombia.",
    imagen: "/images/destinosNuevos-webp/ejeCaf.webp",
  },

  // ─────────────────────────────────────────────
  // INTERNACIONALES — Latinoamérica y Caribe
  // ─────────────────────────────────────────────
  {
    id: 9,
    slug: "ecuador",
    nombre: "Ecuador",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "Ecuador está a un paso de Colombia y guarda sorpresas que enamoran. Su costa del Pacífico ofrece playas tranquilas, pueblos de pescadores y una cocina llena de sabor. Es el destino ideal para descansar frente al mar, desconectarse de la rutina y vivir unas vacaciones diferentes sin ir muy lejos de casa.",
    imperdibles: [
      { nombre: "Mompiche", imagen: "/images/destinosNuevos-webp/ecuadorMom.webp" },
      { nombre: "Decameron Mompiche", imagen: "/images/destinosNuevos-webp/ecuadorDeca.webp" },
      { nombre: "Gastronomía", imagen: "/images/destinosNuevos-webp/ecuadorGastro.webp" },
    ],
    frase:
      "Descubra el Pacífico ecuatoriano, un paraíso de mar y sabor a un paso de casa.",
    imagen: "/images/destinosNuevos-webp/ecuador.webp",
  },
  {
    id: 10,
    slug: "panama",
    nombre: "Panamá",
    tipo: "internacional",
    categorias: ["Ciudad", "Playa"],
    descripcion:
      "Panamá es el punto donde se unen dos océanos. Su capital moderna de rascacielos contrasta con el encanto colonial del Casco Antiguo, y a pocas horas esperan las islas paradisíacas de San Blas. Además, sus compras libres de impuestos lo hacen ideal para una escapada completa.",
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
    slug: "guatemala",
    nombre: "Guatemala",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "Guatemala es el corazón del mundo maya. Volcanes, lagos rodeados de montañas, pueblos coloniales y una cultura indígena viva hacen de este destino centroamericano una experiencia auténtica, colorida y llena de historia.",
    imperdibles: [
      { nombre: "Antigua Guatemala", imagen: "/images/destinosNuevos-webp/guatemalaAntigua.webp" },
      { nombre: "Lago de Atitlán", imagen: "/images/destinosNuevos-webp/guatemalaLago.webp" },
      { nombre: "Tikal", imagen: "/images/destinosNuevos-webp/guatemalaTikal.webp" },
    ],
    frase:
      "Déjese sorprender por Guatemala, tierra de volcanes, tradición maya y color.",
    imagen: "/images/destinosNuevos-webp/guatemala.webp",
  },
    {
    id: 12,
    slug: "peru",
    nombre: "Perú",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:"Perú combina historia, naturaleza y gastronomía. Es la cuna del Imperio Inca, con Machu Picchu, Cusco y el Valle Sagrado, y su geografía va de la costa a los Andes y la Amazonía. Lima es una de las capitales gastronómicas del mundo, ideal para quienes buscan cultura, aventura y comida.",
    imperdibles: [
      { nombre: "Machu Pichu", imagen: "/images/destinosNuevos-webp/peruMachu.webp" },
      { nombre: "Montaña de los 7 colores", imagen: "/images/destinosNuevos-webp/peruMontana.webp" },
      { nombre: "Gastronomía increíble", imagen: "/images/destinosNuevos-webp/peruGastronomia.webp" },
    ],
    frase:
      "Descubre la magia inca entre Machu Picchu, los Andes y la mejor gastronomía de Latinoamérica.",
    imagen: "/images/destinosNuevos-webp/peru.webp",
  },
    {
    id: 13,
    slug: "bolivia",
    nombre: "Bolivia",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "Bolivia es un destino auténtico y lleno de contrastes. Alberga el Salar de Uyuni, el espejo de sal más grande del mundo, y comparte con Perú el mítico lago Titicaca. Ciudades como La Paz y Sucre mezclan tradición indígena y herencia colonial, ideal para viajeros aventureros.",
    imperdibles: [
      { nombre: "Salar de Uyuni", imagen: "/images/destinosNuevos-webp/boliviaDesierto.webp" },
      { nombre: "Lago Titicaca", imagen: "/images/destinosNuevos-webp/boliviaTiticaca.webp" },
      { nombre: "La Paz", imagen: "/images/destinosNuevos-webp/boliviaPaz.webp" },
    ],
    frase:
      "Camina sobre el cielo en el Salar de Uyuni y déjate sorprender por la magia andina.",
    imagen: "/images/destinosNuevos-webp/bolivia.webp",
  },
  {
    id: 14,
    slug: "ciudad-de-mexico",
    nombre: "Ciudad de México",
    tipo: "internacional",
    categorias: ["Ciudad", "Cultura"],
    descripcion:
      "Ciudad de México es una de las capitales más vibrantes del mundo. Pirámides como Teotihuacán, un centro histórico lleno de museos y arquitectura colonial, y una gastronomía reconocida mundialmente hacen de esta metrópoli un destino imperdible para los amantes de la historia y la cultura.",
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
    id: 15,
    slug: "cancun",
    nombre: "Cancún",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "Cancún es sinónimo de arena blanca, aguas turquesas y resorts todo incluido de clase mundial. Además de sus playas, es la puerta de entrada a la Riviera Maya, con cenotes, islas cercanas y ruinas mayas como Chichén Itzá, ideal para combinar descanso y aventura.",
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
    id: 16,
    slug: "cuba",
    nombre: "Cuba",
    tipo: "internacional",
    categorias: ["Playa", "Cultura"],
    descripcion:
      "Cuba es una isla que parece detenida en el tiempo. Carros clásicos, calles coloniales, playas de ensueño y música en cada esquina hacen de este destino del Caribe una experiencia llena de alegría, historia y sabor.",
    imperdibles: [
      { nombre: "La Habana Vieja", imagen: "/images/destinosNuevos-webp/cubaVieja.webp" },
      { nombre: "Varadero", imagen: "/images/destinosNuevos-webp/cubaVaradero.webp" },
      { nombre: "Trinidad", imagen: "/images/destinosNuevos-webp/cubaTrinidad.webp" },
    ],
    frase:
      "Déjese llevar por el ritmo de Cuba, entre carros clásicos, música y playas de ensueño.",
    imagen: "/images/destinosNuevos-webp/cuba.webp",
  },
  {
    id: 17,
    slug: "jamaica",
    nombre: "Jamaica",
    tipo: "internacional",
    categorias: ["Playa", "Cultura"],
    descripcion:
      "Jamaica es sol, mar turquesa y buena vibra. Sus playas de arena blanca, su música contagiosa y la calidez de su gente hacen de esta isla del Caribe el lugar perfecto para relajarse, celebrar y vivir unas vacaciones llenas de ritmo.",
    imperdibles: [
      { nombre: "Montego Bay", imagen: "/images/destinosNuevos-webp/jamaicaMontego.webp" },
      { nombre: "Negril", imagen: "/images/destinosNuevos-webp/jamaicaNegril.webp" },
      { nombre: "Cultura reggae", imagen: "/images/destinosNuevos-webp/jamaicaMusic.webp" },
    ],
    frase:
      "Déjese llevar por el ritmo de Jamaica, donde el reggae y el mar turquesa lo esperan.",
    imagen: "/images/destinosNuevos-webp/jamaica.webp",
  },
  {
    id: 18,
    slug: "aruba",
    nombre: "Aruba",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "Aruba es un paraíso caribeño con sol garantizado, brisa constante y algunas de las playas más bellas del mundo. Entre mar turquesa, paisajes desérticos y una gran oferta de hoteles y restaurantes, es perfecta para desconectar.",
    imperdibles: [
      { nombre: "Oranjestad", imagen: "/images/destinosNuevos-webp/arubaCiudad.webp" },
      { nombre: "Eagle beach", imagen: "/images/destinosNuevos-webp/arubaEagle.webp" },
      { nombre: "Paseo en catamarán", imagen: "/images/destinosNuevos-webp/arubaPaseo.webp" },
    ],
    frase:
      "Sol todo el año, arena blanca y la calidez de la isla más feliz del Caribe.",
    imagen: "/images/destinosNuevos-webp/aruba.webp",
  },
    {
    id: 19,
    slug: "curazao",
    nombre: "Curazao",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "Curazao es una isla caribeña con aguas cristalinas, playas escondidas y una vibrante mezcla cultural. Su capital, Willemstad, es Patrimonio de la Humanidad por sus coloridas fachadas de estilo holandés. Es ideal para bucear, relajarse y disfrutar del Caribe más auténtico.",
    imperdibles: [
      { nombre: "Willemstad", imagen: "/images/destinosNuevos-webp/curazaoPueblo.webp" },
      { nombre: "Playa Kenepa (Grote Knip)", imagen: "/images/destinosNuevos-webp/curazaoIsla.webp" },
      { nombre: "Snorkel en arrecifes", imagen: "/images/destinosNuevos-webp/curazaoSnorkel.webp" },
    ],
    frase:
      "Colores, mar turquesa y sabor caribeño en la joya holandesa del Caribe.",
    imagen: "/images/destinosNuevos-webp/curazao.webp",
  },
    {
    id: 20,
    slug: "punta-cana",
    nombre: "Punta Cana",
    tipo: "internacional",
    categorias: ["Playa"],
    descripcion:
      "Punta Cana es el corazón del Caribe dominicano. Kilómetros de playas de arena blanca bordeadas de palmeras, resorts de lujo todo incluido y excursiones a islas paradisíacas como Saona la convierten en el destino ideal para descansar, celebrar en pareja o disfrutar en familia.",
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
    id: 21,
    slug: "rio-de-janeiro",
    nombre: "Río de Janeiro",
    tipo: "internacional",
    categorias: ["Playa", "Ciudad", "Cultura"],
    descripcion:
      "Río de Janeiro es la ciudad más vibrante de Sudamérica. Entre playas legendarias como Copacabana e Ipanema, el Cristo Redentor vigilando desde lo alto y la energía contagiosa de la samba, este destino brasileño combina naturaleza, cultura y alegría como ningún otro.",
    imperdibles: [
      { nombre: "Cristo Redentor", imagen: "/images/destinos/cristo.jpg" },
      { nombre: "Pan de Azúcar", imagen: "/images/destinos/panazucar.jpg" },
      { nombre: "Copacabana", imagen: "/images/destinos/copacabana.jpg" },
    ],
    frase: "Déjese sorprender por la magia de Río, donde el mar y la cultura se unen.",
    imagen: "/images/destinos/rio.webp",
  },
  {
    id: 22,
    slug: "argentina",
    nombre: "Argentina",
    tipo: "internacional",
    categorias: ["Ciudad", "Cultura", "Aventura"],
    descripcion:
      "Argentina es pasión, naturaleza y buena mesa. Desde la elegancia de Buenos Aires hasta los glaciares de la Patagonia, este país te sorprende con paisajes gigantes, tango, carnes a la parrilla y vinos de primer nivel.",
    imperdibles: [
      { nombre: "Buenos Aires y el tango", imagen: "/images/destinosNuevos-webp/argentinaBuenos.webp" },
      { nombre: "Bariloche", imagen: "/images/destinosNuevos-webp/argentinaBariloche.webp" },
      { nombre: "Glaciar Perito Moreno", imagen: "/images/destinosNuevos-webp/argentinaGlaciar.webp" },
    ],
    frase:
      "Viva la pasión argentina, del tango porteño a los glaciares de la Patagonia.",
    imagen: "/images/destinosNuevos-webp/argentina.webp",
  },
  {
    id: 23,
    slug: "chile",
    nombre: "Chile",
    tipo: "internacional",
    categorias: ["Aventura", "Ciudad"],
    descripcion:
      "Chile es un país de extremos que enamora. Del desierto más seco del mundo a los glaciares de la Patagonia, pasando por ciudades con vista a la cordillera y puertos llenos de color, es el destino ideal para los amantes de la naturaleza, el buen vino y la aventura.",
    imperdibles: [
      { nombre: "Santiago", imagen: "/images/destinosNuevos-webp/chileSantiago.webp" },
      { nombre: "Patagonía chilena", imagen: "/images/destinosNuevos-webp/chilePatagonia.webp" },
      { nombre: "Desierto de Atacama", imagen: "/images/destinosNuevos-webp/chileDesierto.webp" },
    ],
    frase:
      "Recorra Chile de punta a punta, entre desiertos, viñedos y la majestuosa cordillera.",
    imagen: "/images/destinosNuevos-webp/chile.webp",
  },

  // ─────────────────────────────────────────────
  // INTERNACIONALES — Norteamérica
  // ─────────────────────────────────────────────
  {
    id: 24,
    slug: "estados-unidos",
    nombre: "Estados Unidos",
    tipo: "internacional",
    categorias: ["Ciudad", "Playa"],
    descripcion:
      "Estados Unidos lo tiene todo: parques de diversiones de talla mundial, ciudades que nunca duermen, playas y compras para todos los gustos. Es el destino ideal para viajar en familia, en pareja o con amigos y vivir experiencias que solo has visto en las películas.",
    imperdibles: [
      { nombre: "Las vegas", imagen: "/images/destinosNuevos-webp/estadosVegas.webp" },
      { nombre: "Nueva York", imagen: "/images/destinosNuevos-webp/estadosNew.webp" },
      { nombre: "Miami", imagen: "/images/destinosNuevos-webp/estadosMiami.webp" },
    ],
    frase:
      "Haga realidad el viaje de sus sueños en Estados Unidos, donde la diversión no tiene límites.",
    imagen: "/images/destinosNuevos-webp/estados.webp",
  },
  {
    id: 25,
    slug: "canada",
    nombre: "Canadá",
    tipo: "internacional",
    categorias: ["Aventura", "Ciudad"],
    descripcion:
      "Canadá es naturaleza en estado puro combinada con ciudades modernas y acogedoras. Montañas nevadas, lagos de colores increíbles y cataratas impresionantes te esperan en un país ideal para quienes aman los paisajes y la aventura.",
    imperdibles: [
      { nombre: "Cataratas del Niágara", imagen: "/images/destinosNuevos-webp/canadaCataratas.webp" },
      { nombre: "Toronto", imagen: "/images/destinosNuevos-webp/canadaToronto.webp" },
      { nombre: "Montañas Rocosas y Parque Nacional Banff", imagen: "/images/destinosNuevos-webp/canadaParque.webp" },
    ],
    frase:
      "Descubra Canadá, donde las ciudades modernas conviven con paisajes de postal.",
    imagen: "/images/destinosNuevos-webp/canada.webp",
  },

  // ─────────────────────────────────────────────
  // INTERNACIONALES — Europa
  // ─────────────────────────────────────────────
  {
    id: 26,
    slug: "espana",
    nombre: "España",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "España es historia, arte y una energía única. De la elegante Madrid, con sus grandes museos y plazas, a la vibrante Barcelona, con la arquitectura de Gaudí y el Mediterráneo, el país enamora con su gastronomía, sus tapas y una vida nocturna inigualable.",
    imperdibles: [
      { nombre: "Madrid", imagen: "/images/destinos/madrid.webp" },
      { nombre: "Barcelona", imagen: "/images/destinos/barcelona.webp" },
    ],
    frase: "Viva la pasión española entre museos, arquitectura y vida nocturna inolvidable.",
    imagen: "/images/destinos/espana.webp",
  },
  {
    id: 27,
    slug: "portugal",
    nombre: "Portugal",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Portugal combina encanto costero, tradición y calidez. Lisboa enamora con sus tranvías amarillos, y miradores, mientras Oporto seduce con su ribera colorida y sus bodegas de vino. Un destino acogedor, con excelente gastronomía y el sabor del Atlántico.",
    imperdibles: [
      { nombre: "Lisboa", imagen: "/images/destinos/lisboa.webp" },
      { nombre: "Oporto", imagen: "/images/destinos/oporto.webp" },
    ],
    frase: "Descubra Portugal, entre miradores, fado y el sabor del Atlántico.",
    imagen: "/images/destinos/portugal2.jpg",
  },
  {
    id: 28,
    slug: "francia",
    nombre: "Francia",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Francia es el romance, el arte y la gastronomía en su máxima expresión. De París, con la Torre Eiffel, el Louvre y sus cafés, a la luminosa Riviera Francesa y sus playas mediterráneas, es un destino que se disfruta con todos los sentidos.",
    imperdibles: [
      { nombre: "París", imagen: "/images/destinos/paris.webp" },
      { nombre: "Niza", imagen: "/images/destinos/niza.webp" },
    ],
    frase: "Descubra la elegancia francesa, entre la capital del amor y la costa mediterránea.",
    imagen: "/images/destinos/francia.webp",
  },
  {
    id: 29,
    slug: "italia",
    nombre: "Italia",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Italia es la cuna del arte, la historia y la buena mesa. De la eterna Roma, con el Coliseo y el Vaticano, a los románticos canales de Venecia, cada ciudad es un museo al aire libre acompañado de pasta, helado y el encanto italiano.",
    imperdibles: [
      { nombre: "Roma", imagen: "/images/destinos/roma.webp" },
      { nombre: "Venecia", imagen: "/images/destinos/venecia.webp" },
    ],
    frase: "Enamórese de Italia, donde cada calle cuenta una historia milenaria.",
    imagen: "/images/destinos/italia.webp",
  },
  {
    id: 30,
    slug: "reino-unido",
    nombre: "Reino Unido",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "El Reino Unido combina historia real y modernidad. Londres sorprende con el Big Ben, el Palacio de Buckingham y museos de talla mundial, mientras Edimburgo enamora con su castillo, sus calles medievales y los paisajes escoceses. Un destino lleno de tradición y leyendas.",
    imperdibles: [
      { nombre: "Londres", imagen: "/images/destinos/londres.jpg" },
      { nombre: "Edimburgo", imagen: "/images/destinos/edimburgo.webp" },
    ],
    frase: "Explore el Reino Unido, entre castillos, museos y paisajes de leyenda.",
    imagen: "/images/destinos/reinoUnido2.webp",
  },
  {
    id: 31,
    slug: "paises-bajos",
    nombre: "Países Bajos",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Los Países Bajos son canales, bicicletas y campos de tulipanes. Ámsterdam enamora con sus casas angostas junto al agua, museos como el de Van Gogh y un ambiente relajado y cosmopolita. Un destino ideal para recorrer sin prisa y descubrir la cultura holandesa.",
    imperdibles: [
      { nombre: "Ámsterdam", imagen: "/images/destinos/amsterdam.webp" },
    ],
    frase: "Recorra Ámsterdam, ciudad de canales, arte y bicicletas.",
    imagen: "/images/destinos/paisesBajos.webp",
  },
  {
    id: 32,
    slug: "alemania",
    nombre: "Alemania",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Alemania combina historia, cultura y arquitectura imponente. Berlín sorprende con su pasado reciente, su arte urbano y su ambiente moderno, mientras Múnich conserva el encanto bávaro, sus cervecerías tradicionales y la cercanía a castillos de cuento. Un destino diverso y fascinante.",
    imperdibles: [
      { nombre: "Berlín", imagen: "/images/destinos/berlin.jpg" },
      { nombre: "Múnich", imagen: "/images/destinos/munich.webp" },
    ],
    frase: "Viva Alemania entre historia, cultura y tradición centroeuropea.",
    imagen: "/images/destinos/alemania.webp",
  },
  {
    id: 33,
    slug: "grecia",
    nombre: "Grecia",
    tipo: "internacional",
    categorias: ["Cultura", "Playa"],
    descripcion:
      "Grecia es la cuna de la civilización occidental. Atenas guarda tesoros como la Acrópolis y el Partenón, mientras Santorini enamora con sus casas blancas, cúpulas azules y atardeceres sobre el mar Egeo. Un destino que une historia milenaria, islas de ensueño y cocina mediterránea.",
    imperdibles: [
      { nombre: "Atenas", imagen: "/images/destinos/atenas.webp" },
      { nombre: "Santorini", imagen: "/images/destinos/santorini.webp" },
    ],
    frase: "Descubra Grecia, entre ruinas milenarias y atardeceres inolvidables.",
    imagen: "/images/destinos/grecia.webp",
  },
  {
    id: 34,
    slug: "noruega",
    nombre: "Noruega",
    tipo: "internacional",
    categorias: ["Aventura", "Cultura"],
    descripcion:
      "Noruega es uno de los países más bellos del planeta. Sus fiordos rodeados de montañas, sus cielos iluminados por auroras boreales y sus pueblos de cuento hacen de este destino una experiencia única para quienes sueñan con paisajes que parecen de otro mundo.",
    imperdibles: [
      { nombre: "Fiordos noruegos", imagen: "/images/destinosNuevos-webp/noruegaFiordos.webp" },
      { nombre: "Auroras boreales", imagen: "/images/destinosNuevos-webp/noruegaAuroras.webp" },
      { nombre: "Oslo", imagen: "/images/destinosNuevos-webp/noruegaOslo.webp" },
    ],
    frase:
      "Contemple la grandeza de Noruega, entre fiordos majestuosos y cielos de colores.",
    imagen: "/images/destinosNuevos-webp/noruega.webp",
  },
  {
    id: 35,
    slug: "finlandia",
    nombre: "Finlandia",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "Finlandia es naturaleza nórdica en estado puro. Helsinki sorprende con su diseño moderno y su vida junto al mar, mientras Rovaniemi, en Laponia, ofrece auroras boreales, paseos en trineo y la aldea oficial de Papá Noel. Un destino mágico, especialmente en invierno.",
    imperdibles: [
      { nombre: "Helsinki", imagen: "/images/destinos/helsinki.webp" },
      { nombre: "Rovaniemi", imagen: "/images/destinos/rovaniemi.webp" },
    ],
    frase: "Viva la magia nórdica de Finlandia, tierra de auroras y de Papá Noel.",
    imagen: "/images/destinos/finlandia.webp",
  },

  // ─────────────────────────────────────────────
  // INTERNACIONALES — Medio Oriente y África
  // ─────────────────────────────────────────────
  {
    id: 36,
    slug: "turquia",
    nombre: "Turquía",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "Turquía es el punto donde se encuentran Europa y Asia. Mezquitas imponentes, bazares llenos de color, paisajes que parecen de otro planeta y una gastronomía deliciosa hacen de este destino una mezcla perfecta de historia, cultura y aventura.",
    imperdibles: [
      { nombre: "Estambul", imagen: "/images/destinosNuevos-webp/turquiaEstambul.webp" },
      { nombre: "Capadocia", imagen: "/images/destinosNuevos-webp/turquiaCapadocia.webp" },
      { nombre: "Pamukkale", imagen: "/images/destinosNuevos-webp/turquiaPamu.webp" },
    ],
    frase:
      "Descubra Turquía, el encuentro mágico entre Oriente y Occidente.",
    imagen: "/images/destinosNuevos-webp/turquia.webp",
  },
  {
    id: 37,
    slug: "jordania",
    nombre: "Jordania",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "Jordania es un tesoro escondido de Medio Oriente. Ciudades talladas en la roca, desiertos de arena roja y un mar donde flotas sin esfuerzo hacen de este destino una aventura llena de historia y paisajes únicos.",
    imperdibles: [
      { nombre: "Petra", imagen: "/images/destinosNuevos-webp/jordaniaPetra.webp" },
      { nombre: "Desierto de Wadi Rum", imagen: "/images/destinosNuevos-webp/jordaniaDesierto.webp" },
      { nombre: "Mar Muerto", imagen: "/images/destinosNuevos-webp/jordaniaMar.webp" },
    ],
    frase:
      "Déjese asombrar por Jordania, un tesoro de historia tallado en el desierto.",
    imagen: "/images/destinosNuevos-webp/jordania.webp",
  },
  {
    id: 38,
    slug: "egipto",
    nombre: "Egipto",
    tipo: "internacional",
    categorias: ["Cultura"],
    descripcion:
      "Egipto es un viaje en el tiempo a una de las civilizaciones más fascinantes de la historia. Pirámides, templos milenarios y el majestuoso río Nilo te esperan en un destino que todos soñamos conocer al menos una vez en la vida.",
    imperdibles: [
      { nombre: "Pirámides de Giza y la Esfinge", imagen: "/images/destinosNuevos-webp/egiptoPiramides.webp" },
      { nombre: "Crucero por el río Nilo", imagen: "/images/destinosNuevos-webp/egiptoRio.webp" },
      { nombre: "Luxor", imagen: "/images/destinosNuevos-webp/egiptoLuxor.webp" },
    ],
    frase:
      "Viva la grandeza de Egipto, donde cada templo guarda miles de años de historia.",
    imagen: "/images/destinosNuevos-webp/egipto.webp",
  },
  {
    id: 39,
    slug: "dubai",
    nombre: "Dubái",
    tipo: "internacional",
    categorias: ["Ciudad", "Aventura"],
    descripcion:
      "Dubái es lujo, modernidad y tradición en un solo lugar. Rascacielos que tocan el cielo, centros comerciales gigantes y el desierto dorado a pocos minutos de la ciudad hacen de este destino una experiencia que supera cualquier expectativa.",
    imperdibles: [
      { nombre: "Burj Khalifa", imagen: "/images/destinosNuevos-webp/dubaiEdificio.webp" },
      { nombre: "Safari en el desierto", imagen: "/images/destinosNuevos-webp/dubaiDesierto.webp" },
      { nombre: "Palm Jumeirah", imagen: "/images/destinosNuevos-webp/dubaiIsla.webp" },
    ],
    frase:
      "Descubra Dubái, donde el lujo y la tradición se encuentran en medio del desierto.",
    imagen: "/images/destinosNuevos-webp/dubai.webp",
  },
  {
    id: 40,
    slug: "safari-africa",
    nombre: "Safari en África",
    tipo: "internacional",
    categorias: ["Aventura"],
    descripcion:
      "Un safari en África es la aventura de una vida. Recorrer la sabana al amanecer, ver a los animales salvajes en total libertad y dormir bajo cielos llenos de estrellas es una experiencia que te conecta con la naturaleza como ningún otro viaje.",
    imperdibles: [
      { nombre: "Los Cinco Grandes", imagen: "/images/destinosNuevos-webp/africaLeones.webp" },
      { nombre: "Masái Mara (Kenia)", imagen: "/images/destinosNuevos-webp/africaMigracion.webp" },
      { nombre: "Serengeti y cráter del Ngorongoro (Tanzania)", imagen: "/images/destinosNuevos-webp/africaSerengueti.webp" },
    ],
    frase:
      "Viva la aventura de una vida en la sabana africana, frente a la naturaleza en libertad.",
    imagen: "/images/destinosNuevos-webp/africa.webp",
  },

  // ─────────────────────────────────────────────
  // INTERNACIONALES — Asia
  // ─────────────────────────────────────────────
  {
    id: 41,
    slug: "ruta-de-la-seda",
    nombre: "Ruta de la Seda",
    tipo: "internacional",
    categorias: ["Cultura", "Aventura"],
    descripcion:
      "La Ruta de la Seda es el camino que durante siglos unió Oriente y Occidente, y hoy te invita a recorrerlo. Ciudades de cúpulas azules, bazares llenos de especias, capitales modernas y montañas con iglesias milenarias hacen de este viaje una aventura única para quienes buscan destinos auténticos y poco conocidos.",
    imperdibles: [
      { nombre: "Samarcanda (Uzbekistán)", imagen: "/images/destinosNuevos-webp/rutaSamar.webp" },
      { nombre: "Bujará y Jiva (Uzbekistán)", imagen: "/images/destinosNuevos-webp/rutaBuja.webp" },
      { nombre: "Bakú (Azerbaiyán)", imagen: "/images/destinosNuevos-webp/rutaBaku.webp" },
    ],
    frase:
      "Recorra la legendaria Ruta de la Seda, entre cúpulas azules, bazares y montañas milenarias.",
    imagen: "/images/destinosNuevos-webp/ruta.webp",
  },
  {
    id: 42,
    slug: "china",
    nombre: "China",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "China es un país de contrastes, donde miles de años de historia conviven con ciudades futuristas. Sus monumentos legendarios, su cultura milenaria y su gastronomía hacen de este viaje una experiencia que te cambiará la forma de ver el mundo.",
    imperdibles: [
      { nombre: "Gran Muralla China", imagen: "/images/destinosNuevos-webp/chinaMuralla.webp" },
      { nombre: "Shangai", imagen: "/images/destinosNuevos-webp/chinaShangai.webp" },
      { nombre: "Guerreros de terracota", imagen: "/images/destinosNuevos-webp/chinaGuerreros.webp" },
    ],
    frase:
      "Descubra China, donde la historia milenaria y el futuro conviven en cada rincón.",
    imagen: "/images/destinosNuevos-webp/china.webp",
  },
  {
    id: 43,
    slug: "tailandia",
    nombre: "Tailandia",
    tipo: "internacional",
    categorias: ["Playa", "Cultura"],
    descripcion:
      "Tailandia es exótica, alegre y llena de sabor. Templos dorados, islas de aguas turquesa, mercados llenos de vida y la famosa sonrisa de su gente hacen de este destino del sudeste asiático un viaje que despierta todos los sentidos.",
    imperdibles: [
      { nombre: "Bangkok y sus templos", imagen: "/images/destinosNuevos-webp/tailandiaTemplo.webp" },
      { nombre: "Phuket e islas Phi Phi", imagen: "/images/destinosNuevos-webp/tailandiaPlayas.webp" },
      { nombre: "Chiang Mai", imagen: "/images/destinosNuevos-webp/tailandiaTemplo2.webp" },
    ],
    frase:
      "Déjese conquistar por Tailandia, entre templos dorados e islas de ensueño.",
    imagen: "/images/destinosNuevos-webp/tailandia.webp",
  },
  {
    id: 44,
    slug: "japon",
    nombre: "Japón",
    tipo: "internacional",
    categorias: ["Cultura", "Ciudad"],
    descripcion:
      "Japón es el lugar donde la tradición milenaria y la innovación conviven en perfecta armonía. Los templos y jardines de Kioto, la energía futurista de Tokio y la silueta del Monte Fuji hacen de este destino una experiencia única, llena de cultura y paisajes de postal.",
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