export interface Scene {
  id: string;
  number: number;
  title: string;
  image: string;
  description: string;
  dioramaDetail?: string; // Observación sobre la maqueta física
}

export interface Character {
  id: string;
  name: string;
  image: string;
  role: string; // e.g. Protagonista, Antagonista, Conciencia moral, Mentor
  importance: 'principal' | 'secundario' | 'clave';
  archetype?: string; // Arquetipo literario retro RPG (e.g. 'Intelectual Atormentado', 'Guía Ética')
  stats?: {
    wisdom: number; // 0 - 100
    courage: number; // 0 - 100
    empathy: number; // 0 - 100
  };
  traits: string[];
  teaching: string; // ¿Qué nos enseña?
  quote?: string;
}

export interface ThemeItem {
  id: string;
  name: string;
  icon: string;
  image?: string;
  description: string;
  literaryReflection?: string;
}

export type BookSectionKey = 'historia' | 'personajes' | 'temas' | 'analisis' | string;

export interface BookSectionDefinition {
  key: BookSectionKey;
  label: string;
  icon: string;
  description?: string;
}

export interface LiteraryAnalysis {
  workTitle: string; // Nombre de la obra
  author: string; // Nombre del autor
  publicationYear: string | number; // Año de publicación
  compositionType: string; // Tipo de composición (prosaica o en verso)
  literaryMovement: string; // Corriente literaria a la que pertenece
  structure: string; // Estructura (división por capítulos, partes, etc.)
  narratorType: string; // Característica 1: Tipo de narrador y punto de vista
  predominantTone: string; // Característica 2: Tono y atmósfera predominante
  literaryGenre?: string; // Característica adicional: Género y subgénero literario
  stylisticNotes?: string; // Recursos estilísticos y lenguaje
}

export interface Book {
  id: string;
  slug: string; // e.g. 'crimen-y-castigo', 'eruditus', 'ensayo-sobre-la-ceguera', etc.
  title: string;
  author?: string;
  genre: string;
  coverImage: string;
  tagline: string;
  shortSummary: string;
  dioramaStation: string; // Estación / Maqueta escolar asociada
  mapCoords: { x: number; y: number }; // Posición relativa en el mapa (0 a 100%)
  mapVisualType: 'antique-building' | 'scifi-planet' | 'white-city' | 'clock-monument' | 'greek-temple';
  mapTooltip: string;
  scenes: Scene[]; // Entre 4 y 7 escenas
  characters: Character[];
  themes: ThemeItem[];
  analysis?: LiteraryAnalysis; // Ficha de análisis literario formal
  // Arquitectura extensible para futuras secciones solicitadas (Contexto, Símbolos, Lugares, etc.)
  extraSections?: Record<string, unknown>;
}

