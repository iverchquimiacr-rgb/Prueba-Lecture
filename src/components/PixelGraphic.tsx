import React from 'react';

interface PixelGraphicProps {
  type: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

// High-fidelity 16-bit JRPG character portraits for all literary characters
const CHARACTER_PORTRAIT_IMAGES: Record<string, string> = {
  // Crimen y castigo (Fiódor Dostoievski)
  'avatar-raskolnikov': '/src/assets/images/portrait_raskolnikov_1791041167324.jpg',
  'char-raskolnikov': '/src/assets/images/portrait_raskolnikov_1791041167324.jpg',
  'avatar-sonia': '/src/assets/images/portrait_sonia_1791041177396.jpg',
  'char-sonia': '/src/assets/images/portrait_sonia_1791041177396.jpg',
  'avatar-porfiri': '/src/assets/images/portrait_porfiri_1791041279586.jpg',
  'char-porfiri': '/src/assets/images/portrait_porfiri_1791041279586.jpg',
  'avatar-aliona': '/src/assets/images/portrait_aliona_1791041349852.jpg',
  'char-aliona': '/src/assets/images/portrait_aliona_1791041349852.jpg',
  'avatar-razumijin': '/src/assets/images/portrait_razumijin_1791041431788.jpg',
  'char-razumijin': '/src/assets/images/portrait_razumijin_1791041431788.jpg',

  // Eruditus (Maritza Valle Tejeda)
  'avatar-mexon-eruditus': '/src/assets/images/portrait_mexon_eruditus_1791080207545.jpg',
  'char-mexon-eruditus': '/src/assets/images/portrait_mexon_eruditus_1791080207545.jpg',
  'avatar-alex-eruditus': '/src/assets/images/portrait_mexon_eruditus_1791080207545.jpg',
  'avatar-maximo-arquitecto': '/src/assets/images/portrait_maximo_arquitecto_1791080214637.jpg',
  'char-maximo-arquitecto': '/src/assets/images/portrait_maximo_arquitecto_1791080214637.jpg',
  'avatar-copiloto-eruditus': '/src/assets/images/portrait_copiloto_eruditus_1791080224922.jpg',
  'char-copiloto-eruditus': '/src/assets/images/portrait_copiloto_eruditus_1791080224922.jpg',
  'avatar-bibliotecario-eruditus': '/src/assets/images/portrait_bibliotecario_eruditus_1791080234647.jpg',
  'char-bibliotecario-eruditus': '/src/assets/images/portrait_bibliotecario_eruditus_1791080234647.jpg',
  'avatar-joven-andina': '/src/assets/images/portrait_joven_andina_1791080245904.jpg',
  'char-joven-andina': '/src/assets/images/portrait_joven_andina_1791080245904.jpg',

  // Ensayo sobre la ceguera (José Saramago)
  'avatar-mujer-medico': '/src/assets/images/portrait_mujer_medico_1791041204353.jpg',
  'char-mujer-medico': '/src/assets/images/portrait_mujer_medico_1791041204353.jpg',
  'avatar-medico': '/src/assets/images/portrait_medico_1791041291073.jpg',
  'char-medico': '/src/assets/images/portrait_medico_1791041291073.jpg',
  'avatar-chica-gafas': '/src/assets/images/portrait_chica_gafas_1791041382254.jpg',
  'char-chica-gafas': '/src/assets/images/portrait_chica_gafas_1791041382254.jpg',
  'avatar-primer-ciego': '/src/assets/images/portrait_primer_ciego_1791041754575.jpg',
  'char-primer-ciego': '/src/assets/images/portrait_primer_ciego_1791041754575.jpg',
  'avatar-lider-ciegos': '/src/assets/images/portrait_lider_ciegos_1791041764907.jpg',
  'char-lider-ciegos': '/src/assets/images/portrait_lider_ciegos_1791041764907.jpg',

  // Tres días para Mateo (José Antonio Galloso)
  'avatar-mateo-valdivia': '/src/assets/images/portrait_mateo_1791041216345.jpg',
  'char-mateo-valdivia': '/src/assets/images/portrait_mateo_1791041216345.jpg',
  'avatar-mateo-galloso': '/src/assets/images/portrait_mateo_1791041216345.jpg',
  'char-mateo-galloso': '/src/assets/images/portrait_mateo_1791041216345.jpg',
  'avatar-julio-cesar': '/src/assets/images/portrait_julio_cesar_1791081095801.jpg',
  'char-julio-cesar': '/src/assets/images/portrait_julio_cesar_1791081095801.jpg',
  'avatar-chino-chung': '/src/assets/images/portrait_chino_chung_1791081104690.jpg',
  'char-chino-chung': '/src/assets/images/portrait_chino_chung_1791081104690.jpg',
  'avatar-claudia-rivera': '/src/assets/images/portrait_claudia_rivera_1791081114441.jpg',
  'char-claudia-rivera': '/src/assets/images/portrait_claudia_rivera_1791081114441.jpg',
  'avatar-romi': '/src/assets/images/portrait_romi_1791081123788.jpg',
  'char-romi': '/src/assets/images/portrait_romi_1791081123788.jpg',
  'avatar-mariana-mateo': '/src/assets/images/portrait_mariana_1791041234188.jpg',
  'char-mariana-mateo': '/src/assets/images/portrait_mariana_1791041234188.jpg',
  'avatar-chino-amigo': '/src/assets/images/portrait_chino_1791041317153.jpg',
  'char-chino-amigo': '/src/assets/images/portrait_chino_1791041317153.jpg',

  // Mitos griegos contados otra vez (Nathaniel Hawthorne)
  'avatar-jason': '/src/assets/images/portrait_jason_1791080754185.jpg',
  'char-jason': '/src/assets/images/portrait_jason_1791080754185.jpg',
  'avatar-teseo': '/src/assets/images/portrait_teseo_1791080764623.jpg',
  'char-teseo': '/src/assets/images/portrait_teseo_1791080764623.jpg',
  'avatar-ulises': '/src/assets/images/portrait_ulises_1791080776715.jpg',
  'char-ulises': '/src/assets/images/portrait_ulises_1791080776715.jpg',
  'avatar-circe': '/src/assets/images/portrait_circe_1791080785952.jpg',
  'char-circe': '/src/assets/images/portrait_circe_1791080785952.jpg',
  'avatar-pandora': '/src/assets/images/portrait_pandora_1791041265175.jpg',
  'char-pandora': '/src/assets/images/portrait_pandora_1791041265175.jpg',
  'avatar-maximo-arch': '/src/assets/images/portrait_maximo_arquitecto_1791080214637.jpg',
  'char-maximo-arch': '/src/assets/images/portrait_maximo_arquitecto_1791080214637.jpg',
  'avatar-perseo': '/src/assets/images/portrait_perseo_1791041244382.jpg',
  'char-perseo': '/src/assets/images/portrait_perseo_1791041244382.jpg',
  'avatar-midas': '/src/assets/images/portrait_midas_1791041253925.jpg',
  'char-midas': '/src/assets/images/portrait_midas_1791041253925.jpg',
  'avatar-marygold': '/src/assets/images/portrait_marygold_1791041466715.jpg',
  'char-marygold': '/src/assets/images/portrait_marygold_1791041466715.jpg',
  'avatar-hercules': '/src/assets/images/portrait_hercules_1791041335570.jpg',
  'char-hercules': '/src/assets/images/portrait_hercules_1791041335570.jpg',
  'avatar-belerofonte': '/src/assets/images/portrait_belerofonte_1791041405208.jpg',
  'char-belerofonte': '/src/assets/images/portrait_belerofonte_1791041405208.jpg',
  'avatar-epimeteo': '/src/assets/images/portrait_pandora_1791041265175.jpg',
};

export const PixelGraphic: React.FC<PixelGraphicProps> = ({ type, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    hero: 'w-full h-full'
  };

  // If a high-fidelity 16-bit RPG character portrait exists for this type, render it!
  const portraitImg = CHARACTER_PORTRAIT_IMAGES[type];
  if (portraitImg) {
    return (
      <div className={`relative overflow-hidden bg-slate-950 border-2 border-slate-700/80 shadow-md ${sizeClasses[size]} ${className}`}>
        <img
          src={portraitImg}
          alt={type}
          className="w-full h-full object-cover pixelated select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Subtle scanline and ambient lighting */}
        <div className="absolute inset-0 scanlines opacity-25 pointer-events-none" />
        <div className="absolute inset-0 border border-amber-400/30 pointer-events-none" />
      </div>
    );
  }

  // Fallback landmarks or icon graphics
  return (
    <div className={`relative flex items-center justify-center bg-slate-900 border border-slate-700 ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 24 24" className="w-2/3 h-2/3 text-amber-400 pixelated" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
};
