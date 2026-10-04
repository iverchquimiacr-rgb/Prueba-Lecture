import React from 'react';

interface PixelSceneIllustrationProps {
  sceneId: string;
  title: string;
  bookSlug: string;
}

// Dedicated 16-bit high-fidelity pixel art illustrations for EVERY single scene
const DEDICATED_SCENE_IMAGES: Record<string, string> = {
  // 1. Crimen y castigo (Fiódor Dostoievski)
  'cyp-s1': '/src/assets/images/scene_crime_attic_1790996240126.jpg', // 1. Ático sofocante de San Petersburgo
  'cyp-s2': '/src/assets/images/scene_cyp_crime_1791040984060.jpg', // 2. Escalera, hacha y el crimen consumado
  'cyp-s3': '/src/assets/images/scene_cyp_interrogatorio_1791040994562.jpg', // 3. Despacho e interrogatorio con Porfiri
  'cyp-s4': '/src/assets/images/scene_cyp_sonia_1791041017645.jpg', // 4. Confesión ante Sonia y lectura del Evangelio
  'cyp-s5': '/src/assets/images/scene_cyp_plaza_1791041027223.jpg', // 5. Beso a la tierra en la plaza Sennaya
  'cyp-s6': '/src/assets/images/scene_crime_siberia_1791040770616.jpg', // 6. Estepa siberiana y renacer moral

  // 2. Eruditus: El planeta de la vida eterna (Maritza Valle Tejeda)
  'eru-s1': '/src/assets/images/scene_eru_maxon_duda_1791080148182.jpg', // 1. Regenerador celular, dudas y archivos prohibidos
  'eru-s2': '/src/assets/images/scene_eru_nave_espacial_1791080158483.jpg', // 2. Misión por el mineral y desvío a la Tierra
  'eru-s3': '/src/assets/images/scene_eru_serrania_peru_1791080167933.jpg', // 3. Abandono de la nave y acogida andina en Perú
  'eru-s4': '/src/assets/images/scene_eru_amor_tierra_1791080176144.jpg', // 4. Arrepentimiento, amor andino y revelación
  'eru-s5': '/src/assets/images/scene_eru_altavoz_martir_1791080185632.jpg', // 5. Proclama por los altavoces de Eruditus
  'eru-s6': '/src/assets/images/scene_eru_revolucion_1791080198427.jpg', // 6. El primer mártir y la revolución triunfante

  // 3. Ensayo sobre la ceguera (José Saramago)
  'eslc-s1': '/src/assets/images/scene_eslc_cruce_1791041070881.jpg', // 1. Cruce vial y primer relámpago de ceguera blanca
  'eslc-s2': '/src/assets/images/scene_blindness_asylum_1790996259763.jpg', // 2. Confinamiento en el manicomio militar
  'eslc-s3': '/src/assets/images/scene_eslc_tirania_1791041079807.jpg', // 3. Tiranía de los ciegos armados y raciones
  'eslc-s4': '/src/assets/images/scene_eslc_incendio_1791041092934.jpg', // 4. Incendio del pabellón y fuga a la ciudad
  'eslc-s5': '/src/assets/images/scene_blindness_rain_1791040798628.jpg', // 5. La lluvia purificadora en el balcón

  // 4. Tres días para Mateo (José Antonio Galloso)
  'tdm-s1': '/src/assets/images/scene_tdm_pelea_colegio_1791081044318.jpg', // 1. La camisa del Chino y la pelea en el aula
  'tdm-s2': '/src/assets/images/scene_tdm_mirada_santo_1791081055510.jpg', // 2. Mirada de Santo: el microbús y el perro callejero
  'tdm-s3': '/src/assets/images/scene_tdm_kermesse_claudia_1791081065767.jpg', // 3. La Kermesse escolar y el encuentro con Claudia
  'tdm-s4': '/src/assets/images/scene_tdm_fiesta_noche_1791081075031.jpg', // 4. La fiesta nocturna: celos y el Chino Chung
  'tdm-s5': '/src/assets/images/scene_tdm_parque_revancha_1791081084198.jpg', // 5. La revancha en el parque y la liberación interior

  // 5. Mitos griegos contados otra vez (Nathaniel Hawthorne)
  'mg-s1': '/src/assets/images/scene_mg_vellocino_1791080707728.jpg', // 1. El vellocino de Oro: Jasón y los Argonautas
  'mg-s2': '/src/assets/images/scene_mg_pigmeos_1791080720327.jpg', // 2. Los pigmeos: El gigante Anteo y la diminuta nación
  'mg-s3': '/src/assets/images/scene_mg_circe_1791080729813.jpg', // 3. El palacio de Circe: Ulises y sus camaradas
  'mg-s4': '/src/assets/images/scene_mg_minotauro_1791080738734.jpg', // 4. El Minotauro: Teseo, Ariadna y el laberinto
  'mg-s5': '/src/assets/images/scene_mg_pandora_1791041131423.jpg', // 5. El paraíso de los niños: La caja y la Esperanza
};

export const PixelSceneIllustration: React.FC<PixelSceneIllustrationProps> = ({ sceneId, title, bookSlug }) => {
  const dedicatedImage = DEDICATED_SCENE_IMAGES[sceneId];

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center group select-none">
      {dedicatedImage ? (
        <img
          src={dedicatedImage}
          alt={`Momento narrativo: ${title}`}
          className="w-full h-full object-cover pixelated scale-100 transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      ) : (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center font-pixel text-xs text-amber-400">
          {title}
        </div>
      )}

      {/* Cinematic Vignette & Scanline overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-slate-950/10 to-slate-950/50 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

      {/* Retro Pixel Frame border */}
      <div className="absolute inset-0 border-2 border-slate-700/60 pointer-events-none group-hover:border-amber-400/70 transition-colors" />

      {/* Scene Title Badge in bottom-left */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
        <div className="bg-slate-950/90 border border-amber-400 px-2.5 py-1 text-[9px] sm:text-[10px] font-pixel text-amber-300 truncate max-w-[85%] shadow-[0_2px_8px_rgba(0,0,0,0.8)] backdrop-blur-xs">
          {title}
        </div>
        <div className="flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 border border-slate-700 text-[8px] font-silkscreen text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>16-BIT HD</span>
        </div>
      </div>
    </div>
  );
};
