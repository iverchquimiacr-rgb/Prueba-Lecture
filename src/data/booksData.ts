import { Book } from '../types/book';

export const BOOKS_DATA: Book[] = [
  {
    id: 'crimen-y-castigo',
    slug: 'crimen-y-castigo',
    title: 'Crimen y castigo',
    author: 'Fiódor Dostoievski',
    genre: 'Novela psicológica / Realismo ruso',
    coverImage: '/src/assets/images/crime_punishment_pixel_cover_1790994979274.jpg',
    tagline: '¿Es lícito cometer un crimen en nombre de una supuesta grandeza superior?',
    shortSummary: 'En el San Petersburgo imperial, el joven estudiante Rodión Raskólnikov planea y ejecuta el asesinato de una vieja usurera para probar su teoría del hombre extraordinario. Su acto desata una demoledora tormenta de culpa, fiebre y búsqueda de redención.',
    dioramaStation: 'Estación 1 · San Petersburgo (Maqueta histórica)',
    mapCoords: { x: 18, y: 24 },
    mapVisualType: 'antique-building',
    mapTooltip: 'San Petersburgo: El ático de Raskólnikov y las calles neblinosas',
    scenes: [
      {
        id: 'cyp-s1',
        number: 1,
        title: 'El delirio en el ático de San Petersburgo',
        image: 'cyp-atico',
        description: 'En una buhardilla sofocante parecida a un armario, el exestudiante Rodión Raskólnikov rumia su tesis filosófica: los hombres extraordinarios tendrían el derecho moral de traspasar las leyes ordinarias para impulsar a la humanidad.',
        dioramaDetail: 'Representado en la maqueta como la habitación diminuta de techos bajos con papeles y un catre destartalado.'
      },
      {
        id: 'cyp-s2',
        number: 2,
        title: 'El hacha y el crimen consumado',
        image: 'cyp-crimen',
        description: 'Armado con un hacha oculta bajo el gabán, Raskólnikov sube la escalera hasta el apartamento de la usurera Aliona Ivánovna. La inesperada llegada de su hermana Lizaveta convierte su cálculo frío en una pesadilla caótica.',
        dioramaDetail: 'Representado en la maqueta en la puerta entreabierta con el cordel de la campanilla y la penumbra del pasillo.'
      },
      {
        id: 'cyp-s3',
        number: 3,
        title: 'La fiebre y el duelo con Porfiri',
        image: 'cyp-interrogatorio',
        description: 'Preso de fiebres y delirios paranoicos, Rodión asiste a los interrogatorios del juez de instrucción Porfiri Petróvich, quien sin acusarlo directamente teje una tela de araña psicológica a su alrededor.',
        dioramaDetail: 'Escena de la oficina con el escritorio de madera maciza, expedientes judiciales y el reloj de pared.'
      },
      {
        id: 'cyp-s4',
        number: 4,
        title: 'La confesión ante Sonia y el Evangelio',
        image: 'cyp-sonia',
        description: 'Incapaz de soportar el peso de su aislamiento, Rodión se arrodilla ante Sonia Marmeládova, quien se ha sacrificado por su familia. Juntos leen la resurrección de Lázaro, marcando el despertar de su conciencia.',
        dioramaDetail: 'Representado por la mesa iluminada con una sola vela de cera y el libro sagrado ajado.'
      },
      {
        id: 'cyp-s5',
        number: 5,
        title: 'El beso a la tierra en la plaza Sennaya',
        image: 'cyp-plaza',
        description: 'Siguiendo el ruego de Sonia, Raskólnikov sale a la concurrida plaza pública, besa la tierra que ha mancillado pidiendo perdón a todos, y camina hacia la comisaría para entregarse.',
        dioramaDetail: 'Representado en el adoquín húmedo de la plaza y los faroles de gas de San Petersburgo.'
      },
      {
        id: 'cyp-s6',
        number: 6,
        title: 'La estepa siberiana y el renacer',
        image: 'cyp-siberia',
        description: 'Condenado al presidio en Siberia, Rodión contempla la inmensidad del río Irtysh. Con Sonia a su lado, comprende que su verdadero castigo no fueron las cadenas, sino su desarraigo moral, comenzando una regeneración gradual.',
        dioramaDetail: 'Representado en la maqueta mediante la cerca de madera, la nieve perpetua y el horizonte abierto.'
      }
    ],
    characters: [
      {
        id: 'cyp-c1',
        name: 'Rodión Raskólnikov',
        image: 'avatar-raskolnikov',
        role: 'Protagonista',
        importance: 'principal',
        traits: ['Intelectual atormentado', 'Orgullo filosófico', 'Capaz de gran generosidad', 'Fiebre moral'],
        teaching: 'Demuestra que la ley moral humana no puede ser soslayada por ninguna justificación intelectual de grandeza.',
        quote: '«¿Acaso maté a la vieja? ¡Me maté a mí mismo!»'
      },
      {
        id: 'cyp-c2',
        name: 'Sonia Marmeládova',
        image: 'avatar-sonia',
        role: 'Conciencia moral y Redención',
        importance: 'principal',
        traits: ['Fe inquebrantable', 'Humildad pura', 'Capacidad infinita de sacrificio', 'Compasión'],
        teaching: 'Encarna la idea de que el amor desinteresado y la compasión activa son las fuerzas que pueden sanar un alma fracturada.',
        quote: '«¡Acepta el sufrimiento y te redimirás por él!»'
      },
      {
        id: 'cyp-c3',
        name: 'Porfiri Petróvich',
        image: 'avatar-porfiri',
        role: 'Antagonista intelectual / Juez',
        importance: 'secundario',
        traits: ['Psicólogo perspicaz', 'Paciente y metódico', 'Ironía sutil', 'Conocedor de la mente'],
        teaching: 'Representa la ley como un espejo implacable donde el culpable debe reconocer su propia caída.',
        quote: '«¿Quién no se considera hoy un Napoleón en Rusia?»'
      },
      {
        id: 'cyp-c4',
        name: 'Aliona Ivánovna',
        image: 'avatar-aliona',
        role: 'Catalizador / Víctima',
        importance: 'clave',
        traits: ['Prestamista avara', 'Desconfiada', 'Explotadora', 'Fría'],
        teaching: 'Cuestiona la falacia de juzgar la vida ajena como un número prescindible en un balance utilitarista.',
        quote: '«El dinero no se presta sin prenda garantizada.»'
      },
      {
        id: 'cyp-c5',
        name: 'Dmitri Razumijin',
        image: 'avatar-razumijin',
        role: 'Amigo leal y Voz de la cordura',
        importance: 'secundario',
        traits: ['Nobleza instintiva', 'Optimista incansable', 'Trabajador íntegro', 'Lealtad'],
        teaching: 'Evidencia el valor de la amistad sincera, el trabajo honrado y la conexión con el prójimo frente al aislamiento.',
        quote: '«Equivocarse por cuenta propia es mejor que acertar por cuenta ajena.»'
      }
    ],
    themes: [
      {
        id: 'cyp-t1',
        name: 'La falacia del Hombre Extraordinario',
        icon: '👑',
        description: 'La pretensión de estar por encima del bien y del mal. Raskólnikov intenta probarse que pertenece a los "hombres superiores", pero descubre que la transgresión destruye su humanidad interior.',
        literaryReflection: 'La obra advierte contra los dogmas que pretenden sacrificar vidas concretas en aras de abstracciones teóricas.'
      },
      {
        id: 'cyp-t2',
        name: 'La culpa como infierno psicológico',
        icon: '⚖️',
        description: 'Mucho antes de que intervenga la justicia humana, la propia psique del culpable ejecuta la condena: pesadillas, delirios y un insoportable aislamiento de la comunidad.',
        literaryReflection: 'El aislamiento de los demás es el verdadero castigo; la confesión es el primer paso para volver a pertenecer a la humanidad.'
      },
      {
        id: 'cyp-t3',
        name: 'La redención por la compasión',
        icon: '🕊️',
        description: 'Dostoievski propone que la salida de la oscuridad no proviene de la razón soberbia, sino del corazón humilde, personificado en Sonia y en el compromiso del sufrimiento purificador.',
        literaryReflection: 'Frente al nihilismo cínico, el autor contrapone el misterio de la resurrección moral.'
      }
    ]
  },
  {
    id: 'eruditus',
    slug: 'eruditus',
    title: 'Eruditus: El planeta de la vida eterna',
    author: 'Maritza Valle Tejeda',
    genre: 'Novela juvenil de ciencia ficción, reflexión ética y valores',
    coverImage: '/src/assets/images/scene_eru_altavoz_martir_1791080185632.jpg',
    tagline: '«¿Se puede vivir sin amor? La verdadera inmortalidad no está en la carne regenerada por la ciencia, sino en el alma que sabe amar y entregarse.»',
    shortSummary: 'Obra cumbre de la destacada escritora peruana Maritza Valle Tejeda. En el lejano planeta Eruditus habita una civilización extraterrestre avanzada (seres no humanos) que ha conquistado la vida eterna biológica mediante un regenerador celular. Viven sometidos rígidamente a los mandamientos del Máximo Arch, un líder supremo que prohíbe pensar diferente bajo pena de desintegración. El joven extraterrestre Mexón, inquieto por citas sagradas sobre la resurrección y Jesús, es enviado a buscar un mineral vital para sus naves y el regenerador. Se desvía hacia la Tierra, donde queda varado en una aldea de la serranía del Perú y descubre, a través de los seres humanos campesinos, la humildad, el perdón y el verdadero amor. Al volver para liberar a su mundo, es condenado y sacrificado, convirtiéndose en el primer mártir de la revolución.',
    dioramaStation: 'Estación 2 · Eruditus y la Serranía Andina (Maqueta dual: Domos extraterrestres y pueblo andino)',
    mapCoords: { x: 50, y: 19 },
    mapVisualType: 'scifi-planet',
    mapTooltip: 'Eruditus: El cráter con tecnología alienígena y vida eterna',
    scenes: [
      {
        id: 'eru-s1',
        number: 1,
        title: 'El regenerador celular y las dudas de Mexón',
        image: 'eru-duda',
        description: 'En el planeta Eruditus, los habitantes (una raza extraterrestre de vida eterna gracias a un regenerador celular) acatan ciegamente los dogmas del Máximo Arch. Ningún ciudadano puede pensar por cuenta propia ni cuestionar su rol asignado, so pena de ser desintegrado. Mexón comienza a sentir un vacío insoportable ante esa existencia fría y acude en secreto al anciano bibliotecario, quien le confía textos prohibidos sobre las enseñanzas de Jesús y la vida eterna del alma.',
        dioramaDetail: 'Representado en la maqueta por las torres del regenerador celular y la cámara de archivos prohibidos.'
      },
      {
        id: 'eru-s2',
        number: 2,
        title: 'La misión estelar por el mineral y el desvío a la Tierra',
        image: 'eru-nave',
        description: 'Mexón y su copiloto son enviados en una nave interestelar a buscar un mineral imprescindible para reparar las flotas y mantener activo el regenerador celular de Eruditus. En pleno vuelo cósmico, Mexón convence a su compañero de cambiar el rumbo hacia la Tierra, el planeta de donde provenían las sagradas enseñanzas de Jesús.',
        dioramaDetail: 'Representado por la cabina de mandos estelar con la pantalla fijada en la trayectoria hacia la Tierra.'
      },
      {
        id: 'eru-s3',
        number: 3,
        title: 'El abandono y la acogida en la serranía del Perú',
        image: 'eru-serrania',
        description: 'Al aterrizar en la Tierra, Mexón descubre con asombro que no es una superpotencia tecnológica, sino un planeta sencillo. Su compañero de tripulación huye aterrorizado llevándose la nave y dejándolo varado. Sin embargo, los campesinos de una humilde comunidad en la serranía del Perú lo rescatan y acogen con generosidad, brindándole sopa caliente, abrigo y un hogar fraterno.',
        dioramaDetail: 'Representado en la maqueta por las casitas de piedra y teja en los Andes y el calor del fogón campesino.'
      },
      {
        id: 'eru-s4',
        number: 4,
        title: 'El descubrimiento del amor y el pacto de los dos mundos',
        image: 'eru-amor',
        description: 'El copiloto regresa compungido y arrepentido de su deserción. Al integrarse a la vida andina, se enamora de Flora, una joven del pueblo, y decide renunciar a su planeta natal para quedarse a vivir como un ser humano más y formar una familia. Mexón comprende la verdad suprema: la inmortalidad técnica de Eruditus es una mentira sin amor. Decide volver a su planeta para llevar la Biblia y el mensaje de Jesús.',
        dioramaDetail: 'Representado por los campos andinos florecidos y la despedida fraterna entre Mexón y su compañero.'
      },
      {
        id: 'eru-s5',
        number: 5,
        title: 'El mensaje final en los altavoces planetarios',
        image: 'eru-altavoz',
        description: 'Al aterrizar en Eruditus, Mexón es sentenciado a la desintegración por el Máximo Arch. Antes de la ejecución, Mexón evade la custodia y toma la consola central de altavoces planetarios. Con voz firme, proclama ante todo Eruditus que su vida eterna sin sentimientos es un engaño y que la verdadera existencia reside en el amor, el perdón y la libertad.',
        dioramaDetail: 'Representado por la torre de transmisión planetaria bajo luces rojas de alarma y guardias avanzando.'
      },
      {
        id: 'eru-s6',
        number: 6,
        title: 'El primer mártir y el despertar de la revolución',
        image: 'eru-revolucion',
        description: 'Mexón es acribillado por los guardias del Máximo Arch, entregando su vida con paz en el corazón. Con los años, sus palabras calan hondo en los habitantes de Eruditus, quienes inician una rebelión pacífica que derroca el régimen y consagra a Mexón como el primer mártir de un nuevo mundo con amor y libertad.',
        dioramaDetail: 'Representado por el monumento al mártir Mexón con el libro sagrado en la plaza principal de Eruditus.'
      }
    ],
    characters: [
      {
        id: 'eru-c1',
        name: 'Mexón',
        image: 'avatar-mexon-eruditus',
        role: 'Protagonista y Primer Mártir',
        importance: 'principal',
        traits: ['Ser extraterrestre disidente', 'Pensamiento crítico', 'Buscador de la verdad', 'Corazón compasivo'],
        teaching: 'Enseña que la existencia pierde todo sentido si no hay amor; y que defender la verdad y la dignidad espiritual vale más que la propia vida física.',
        quote: '«¡La vida eterna que nos prometieron en Eruditus es una mentira si no conocemos el amor!»'
      },
      {
        id: 'eru-c2',
        name: 'El Máximo Arch',
        image: 'avatar-maximo-arch',
        role: 'Antagonista Supremo / Gobernante Absoluto',
        importance: 'principal',
        traits: ['Líder supremo no humano', 'Dogmatismo tiránico', 'Custodio del regenerador', 'Terror a la disidencia'],
        teaching: 'Advierte cómo el control tecnológico absoluto y el fanatismo dogmático despojan a cualquier sociedad de su libertad y de su alma.',
        quote: '«Nadie en Eruditus tiene derecho a pensar diferente a los mandamientos del Máximo Arch.»'
      },
      {
        id: 'eru-c3',
        name: 'El Compañero de nave (Copiloto)',
        image: 'avatar-copiloto-eruditus',
        role: 'Extraterrestre transformado por el amor',
        importance: 'secundario',
        traits: ['Arrepentimiento sincero', 'Enamorado de la vida humana', 'Renuncia a la inmortalidad fría'],
        teaching: 'Muestra que el arrepentimiento sincero redime nuestros errores y que el amor familiar y comunitario puede transformar nuestro destino.',
        quote: '«He decidido quedarme aquí en la Tierra... por primera vez siento que mi corazón late de verdad.»'
      },
      {
        id: 'eru-c4',
        name: 'El Anciano Bibliotecario',
        image: 'avatar-bibliotecario-eruditus',
        role: 'Mentor clandestino de Eruditus',
        importance: 'secundario',
        traits: ['Sabio extraterrestre', 'Custodio de textos sagrados', 'Prudente y bondadoso'],
        teaching: 'Evidencia que la memoria histórica, la lectura reflexiva y la búsqueda espiritual son las semillas que germinan la libertad.',
        quote: '«En estos libros antiguos sobre Jesús está la respuesta que el regenerador celular jamás podrá darte.»'
      },
      {
        id: 'eru-c5',
        name: 'Flora (La Joven Andina)',
        image: 'avatar-joven-andina',
        role: 'Símbolo del amor y la ternura humana',
        importance: 'clave',
        traits: ['Humana campesina peruana', 'Hospitalidad generosa', 'Ternura desinteresada', 'Pilar familiar'],
        teaching: 'Encarna el amor cotidiano y la acogida fraterna de los Andes peruanos, demostrando a los seres de Eruditus qué significa amar.',
        quote: '«Aquí en nuestra tierra nadie es forastero si viene con el corazón abierto.»'
      }
    ],
    themes: [
      {
        id: 'eru-t1',
        name: '¿Se puede vivir sin amor?: La trampa de la inmortalidad biológica',
        icon: '💔',
        description: 'Maritza Valle Tejeda confronta la ilusión de prolongar los años físicos mediante la ciencia si se carece de empatía, afecto y propósito ético. Un cuerpo inmortal sin amor es un cascarón vacío.',
        literaryReflection: 'Cuestiona a los lectores sobre qué valoramos más: la seguridad tecnológica o la capacidad de amar y ser amados.'
      },
      {
        id: 'eru-t2',
        name: 'El mensaje de Jesús: Humildad, servicio y perdón',
        icon: '📖',
        description: 'Frente a la soberbia del Máximo Arch, Mexón encuentra en la serranía peruana la verdadera esencia del Evangelio: la sencillez campesina, el perdón fraterno y el sacrificio desinteresado.',
        literaryReflection: 'La obra resalta cómo las verdades más trascendentes florecen en los hogares más humildes de la Tierra.'
      },
      {
        id: 'eru-t3',
        name: 'La libertad de conciencia y el valor del mártir',
        icon: '🕊️',
        description: 'El derecho inalienable a pensar por uno mismo y a no acatar órdenes injustas. La voz de Mexón ante los altavoces demuestra que la verdad no muere con quien la proclama, sino que inspira a las generaciones futuras.',
        literaryReflection: 'Mexón personifica el valor cívico de alzar la voz contra el pensamiento único y la tiranía.'
      }
    ]
  },
  {
    id: 'ensayo-sobre-la-ceguera',
    slug: 'ensayo-sobre-la-ceguera',
    title: 'Ensayo sobre la ceguera',
    author: 'José Saramago',
    genre: 'Parábola social / Distopía humanista',
    coverImage: '/src/assets/images/blindness_pixel_cover_1790994989092.jpg',
    tagline: '«Creo que no nos quedamos ciegos, creo que estamos ciegos, ciegos que ven, ciegos que, viendo, no ven.»',
    shortSummary: 'Novela cumbre del premio Nobel portugués José Saramago. Una repentina epidemia de ceguera blanca y lechosa contagia a los habitantes de una ciudad. Encerrados en un manicomio por un gobierno temeroso, los internos caen en la degradación, excepto un grupo sostenido por la única mujer que aún conserva los ojos.',
    dioramaStation: 'Estación 3 · El Manicomio en Cuarentena (Maqueta de la niebla blanca)',
    mapCoords: { x: 50, y: 76 },
    mapVisualType: 'white-city',
    mapTooltip: 'Ensayo sobre la ceguera: La ciudad en caos, fuego, basura y niebla blanca',
    scenes: [
      {
        id: 'eslc-s1',
        number: 1,
        title: 'El primer relámpago blanco en el cruce',
        image: 'eslc-cruce',
        description: 'En medio del tráfico cotidiano, un conductor se queda repentinamente sumido no en la oscuridad, sino en una blancura luminosa y densa, como un mar de leche que se extiende sin previo aviso por la ciudad.',
        dioramaDetail: 'Representado en la maqueta mediante el automóvil detenido frente al semáforo en blanco lechoso.'
      },
      {
        id: 'eslc-s2',
        number: 2,
        title: 'El encierro en el manicomio desierto',
        image: 'eslc-manicomio',
        description: 'Las autoridades sanitarias y el ejército confinan a los primeros ciegos en un antiguo manicomio militar abandonado. Con altavoces y armas, los soldados prohíben cruzar el umbral bajo pena de muerte.',
        dioramaDetail: 'Representado en la maqueta por los muros perimetrales, camas de hierro y la garita de vigilancia militar.'
      },
      {
        id: 'eslc-s3',
        number: 3,
        title: 'La tiranía de los ciegos malvados',
        image: 'eslc-tirania',
        description: 'La escasez de alimentos desata la ley de la fuerza: una facción de ciegos armados con pistolas monopoliza la comida, exigiendo las pertenencias y la humillación de los demás pabellones.',
        dioramaDetail: 'Representado por las cajas de racionamiento bloqueadas en el corredor central del manicomio.'
      },
      {
        id: 'eslc-s4',
        number: 4,
        title: 'El incendio purificador y la fuga',
        image: 'eslc-incendio',
        description: 'Una interna valiente prende fuego al pabellón de los opresores. En medio del humo y el derrumbe, los ciegos descubren que los soldados han huido y salen a una ciudad en ruinas donde todos han perdido la vista.',
        dioramaDetail: 'Representado por las llamas rojas y cenizas que rompen la blancura del recinto.'
      },
      {
        id: 'eslc-s5',
        number: 5,
        title: 'La lluvia en el balcón y la comunidad',
        image: 'eslc-lluvia',
        description: 'La mujer del médico guía a su pequeña familia adoptiva por las calles silenciosas hasta su hogar. En el balcón, bajo un aguacero torrencial, se lavan la suciedad del encierro, preservando la ternura y la esperanza.',
        dioramaDetail: 'Representado en el balcón con plantas, gotas de lluvia translúcidas y ropa tendida al viento.'
      }
    ],
    characters: [
      {
        id: 'eslc-c1',
        name: 'La mujer del médico',
        image: 'avatar-mujer-medico',
        role: 'Protagonista y Testigo lúcido',
        importance: 'principal',
        traits: ['Única que conserva la vista', 'Valentía serena', 'Compasión incansable', 'Guía moral'],
        teaching: 'Demuestra que ver conlleva una inmensa responsabilidad ética: cuando los demás no pueden, quien tiene lucidez debe cuidar y no someter.',
        quote: '«Tener ojos cuando los otros los han perdido no puede ser una casualidad.»'
      },
      {
        id: 'eslc-c2',
        name: 'El médico oftálmico',
        image: 'avatar-medico',
        role: 'Esposo / Apoyo moral',
        importance: 'principal',
        traits: ['Vocación de servicio', 'Vulnerabilidad sentida', 'Humildad', 'Compañero fiel'],
        teaching: 'Enseña que los títulos y saberes académicos se vuelven inútiles sin la solidaridad elemental frente a la fragilidad compartida.',
        quote: '«Es una ceguera que no duele en los ojos, sino en lo que somos.»'
      },
      {
        id: 'eslc-c3',
        name: 'La chica de las gafas oscuras',
        image: 'avatar-chica-gafas',
        role: 'Personaje clave / Ternura',
        importance: 'secundario',
        traits: ['Protectora del niño estrábico', 'Sensibilidad oculta', 'Reconciliación afectiva', 'Solidaria'],
        teaching: 'Ilustra cómo los afectos y el cuidado hacia los más desvalidos florecen incluso en los escenarios más deshumanizados.',
        quote: '«No te sueltes de mi mano, aquí estamos juntos.»'
      },
      {
        id: 'eslc-c4',
        name: 'El primer ciego',
        image: 'avatar-primer-ciego',
        role: 'Primera víctima',
        importance: 'secundario',
        traits: ['Inocencia inicial', 'Desconcierto', 'Acompañado por su esposa', 'Paciencia'],
        teaching: 'Nos recuerda que nadie está a salvo de los reveses fortuitos de la vida y que la vulnerabilidad nos iguala a todos.',
        quote: '«¡Estoy ciego, veo todo blanco, ayúdenme!»'
      },
      {
        id: 'eslc-c5',
        name: 'El líder de los ciegos armados',
        image: 'avatar-lider-ciegos',
        role: 'Antagonista / La degradación',
        importance: 'clave',
        traits: ['Corrupción del poder', 'Crueldad oportunista', 'Ceguera espiritual absoluta'],
        teaching: 'Advierte cómo la falta de normas sociales puede despertar los instintos más mezquinos cuando el ser humano renuncia a la empatía.',
        quote: '«La comida es para quien tiene con qué pagarla.»'
      }
    ],
    themes: [
      {
        id: 'eslc-t1',
        name: 'La ceguera moral de la sociedad',
        icon: '👁️',
        description: 'La ceguera física es una metáfora de nuestra indiferencia cotidiana: vivimos en una sociedad que ve, pero elige no mirar el sufrimiento, la pobreza y la marginación que la rodea.',
        literaryReflection: 'Saramago interroga directamente al lector: ¿somos realmente videntes o simplemente ignoramos lo que no queremos atender?'
      },
      {
        id: 'eslc-t2',
        name: 'La dignidad y la solidaridad como resistencia',
        icon: '🤝',
        description: 'Frente a la barbarie del manicomio, la mujer del médico y su grupo demuestran que compartir un pedazo de pan y limpiarse mutuamente es el acto supremo de resistencia humana.',
        literaryReflection: 'La civilización no reside en los edificios ni en los gobiernos, sino en el cuidado mutuo.'
      },
      {
        id: 'eslc-t3',
        name: 'La responsabilidad del que puede ver',
        icon: '🕯️',
        description: 'Tener ojos en un mundo de ciegos no es un privilegio de dominio, sino una pesada carga de servicio y verdad testimonial.',
        literaryReflection: 'La maqueta física en la exposición destaca los contrastes de blanco y luz de esta metáfora.'
      }
    ]
  },
  {
    id: 'tres-dias-para-mateo',
    slug: 'tres-dias-para-mateo',
    title: 'Tres días para Mateo',
    author: 'José Antonio Galloso',
    genre: 'Novela juvenil urbana / Realismo contemporáneo limeño',
    coverImage: '/src/assets/images/scene_tdm_pelea_colegio_1791081044318.jpg',
    tagline: '«Tres días decisivos en la Lima de los 90: entre la violencia escolar, el primer amor y el coraje de asumir la propia libertad.»',
    shortSummary: 'Aclamada novela juvenil del escritor peruano José Antonio Galloso (publicada en el 2000). A través de la voz directa de Mateo Valdivia, un estudiante de cuarto de secundaria en Lima, la historia recorre 72 horas cruciales: una intempestiva pelea en el aula para defender a su amigo Julio César del temido Chino Chung, el flechazo con Claudia Rivera en la kermesse escolar, la culpa y soledad en las calles limeñas y la revancha final en el parque, donde Mateo descubre que la verdadera victoria consiste en madurar y liberarse de la absurda espiral de la violencia.',
    dioramaStation: 'Estación 4 · Lima Escolar y Urbana (Maqueta del salón de clases, la kermesse y el parque limeño)',
    mapCoords: { x: 82, y: 78 },
    mapVisualType: 'clock-monument',
    mapTooltip: 'Tres días para Mateo: Barrio urbano tradicional, casas, parque y kermesse',
    scenes: [
      {
        id: 'tdm-s1',
        number: 1,
        title: 'La camisa del Chino: La pelea en el aula y la defensa de Julio',
        image: 'tdm-pelea',
        description: 'En el salón de clases, el Chino Chung (el muchacho más pendenciero del colegio) encuentra su camisa arrugada donde estaba sentado el estudioso Julio César Rodríguez y lo increpa violentamente. Mateo interviene en defensa de su amigo y se trenza a golpes con Chung. Para sorpresa de todos, Mateo gana la pelea escolar y es aclamado como héroe, pero Chung le jura una revancha inmediata.',
        dioramaDetail: 'Representado en la maqueta escolar con las carpetas de madera volcadas, la pizarra del aula y la camisa arrugada.'
      },
      {
        id: 'tdm-s2',
        number: 2,
        title: 'Mirada de Santo: El microbús, el perro y la culpa en las calles de Lima',
        image: 'tdm-santo',
        description: 'Aturdido por la violencia desatada, Mateo camina por las calles limeñas y le entrega su lonchera a un perro callejero. Poco después presencia con desconsuelo cómo el animal es atropellado en la pista, sintiéndose culpable. En el microbús de regreso sueña que él mismo es un mendigo del que Chung se burla, evidenciando su fragilidad e incertidumbre adolescente.',
        dioramaDetail: 'Representado por la vereda limeña, el emblemático microbús blanco y rojo y el perro callejero.'
      },
      {
        id: 'tdm-s3',
        number: 3,
        title: 'La Kermesse escolar y el encuentro con Claudia Rivera',
        image: 'tdm-kermesse',
        description: 'En la concurrida kermesse del colegio, Mateo conoce a Claudia Rivera, una simpática alumna de segundo de secundaria de la que se enamora al instante. Mateo se atreve a pedirle ser enamorados, pero Claudia, con tierna sensatez, le pide calma y le propone conocerse primero como amigos. Julio le advierte además que el Chino Chung también anda tras de ella.',
        dioramaDetail: 'Representado en la maqueta por los banderines de fiesta, la tómbola y los puestos de dulces de la kermesse.'
      },
      {
        id: 'tdm-s4',
        number: 4,
        title: 'La fiesta nocturna: Música, celos y la sombra de Chung',
        image: 'tdm-fiesta',
        description: 'En la fiesta juvenil de fin de semana, Mateo busca con impaciencia a Claudia, pero se le encoge el pecho al verla bailando con el Chino Chung. Entre la música estridente, el alcohol juvenil y las luces de colores, la confusión y los celos lo acorralan, mientras la inminencia de la pelea revancha se torna inevitable.',
        dioramaDetail: 'Representado por las luces de colores de la fiesta, los vasos plásticos y la tensión en la pista de baile.'
      },
      {
        id: 'tdm-s5',
        number: 5,
        title: 'La revancha en el parque y la liberación interior de Mateo',
        image: 'tdm-revancha',
        description: 'Chino Chung y su grupo interceptan a Mateo en el parque para la revancha pactada. Desganado de la violencia y comprendiendo la vacuidad de pelear por orgullo o apariencia, Mateo es derribado y golpeado. Sin embargo, tendido sobre el pasto húmedo mirando la noche limeña, Mateo experimenta una honda paz y libertad: se ha librado del miedo al qué dirán y ha dado el paso definitivo hacia la madurez.',
        dioramaDetail: 'Representado en la maqueta por la farola del parque iluminando el césped y las sombras de los muchachos marchándose.'
      }
    ],
    characters: [
      {
        id: 'tdm-c1',
        name: 'Mateo Valdivia',
        image: 'avatar-mateo-valdivia',
        role: 'Protagonista (Estudiante de 4to de secundaria)',
        importance: 'principal',
        traits: ['Sensible y reflexivo', 'Leal con sus amigos', 'Enamorado de Claudia', 'Valiente al madurar'],
        teaching: 'Enseña que la verdadera hombría y madurez no radica en ganar peleas callejeras ni en buscar la aprobación de los demás, sino en vencer los propios miedos y elegir la paz interior.',
        quote: '«Tirado en el pasto, con el cuerpo adolorido, sentí por primera vez que era completamente libre.»'
      },
      {
        id: 'tdm-c2',
        name: 'Julio César Rodríguez',
        image: 'avatar-julio-cesar',
        role: 'Mejor amigo de Mateo / Colegial estudioso',
        importance: 'principal',
        traits: ['Alegre y bondadoso', 'Estudioso y pacífico', 'Lealtad entrañable', 'Inocente'],
        teaching: 'Representa el valor de la amistad incondicional que despierta en otros el coraje para proteger a quien lo necesita.',
        quote: '«¡Mateo, gracias por defenderme! ¡En verdad eres el hombre del colegio!»'
      },
      {
        id: 'tdm-c3',
        name: 'Chino Chung',
        image: 'avatar-chino-chung',
        role: 'Antagonista escolar ("El bravo" de 5to año)',
        importance: 'principal',
        traits: ['Agresivo y pendenciero', 'Temeroso de perder estatus', 'Obsesionado con la revancha', 'Inseguro'],
        teaching: 'Advierte cómo el machismo escolar y el temor al ridículo empujan a muchos jóvenes a atrapar a otros y a sí mismos en espirales de violencia sin sentido.',
        quote: '«Esto no se queda así, Valdivia... me la vas a pagar en el parque.»'
      },
      {
        id: 'tdm-c4',
        name: 'Claudia Rivera',
        image: 'avatar-claudia-rivera',
        role: 'El primer amor de Mateo (2do de secundaria)',
        importance: 'principal',
        traits: ['Inteligente y sensata', 'Ternura sincera', 'Claridad de ideas', 'Rechaza la prisa'],
        teaching: 'Muestra que el afecto maduro requiere tiempo, respeto y conocimiento mutuo, sin presiones ni poses fingidas.',
        quote: '«Me caes muy bien, Mateo, pero no te apures... primero seamos amigos para conocernos de verdad.»'
      },
      {
        id: 'tdm-c5',
        name: 'Romi',
        image: 'avatar-romi',
        role: 'Amiga de la hermana de Mateo / Rebeldía juvenil',
        importance: 'secundario',
        traits: ['Despreocupada y rebelde', 'Curiosa ante lo prohibido', 'Reflejo de la crisis adolescente'],
        teaching: 'Ilustra las dudas, las tentaciones urbanas y la búsqueda de identidad que experimenta la juventud de los años 90.',
        quote: '«Todos en este barrio están preocupados por las apariencias... relájate un poco.»'
      }
    ],
    themes: [
      {
        id: 'tdm-t1',
        name: 'La violencia escolar y la falsa noción de hombría',
        icon: '🥊',
        description: 'José Antonio Galloso desmantela el mito del "peleador" como modelo a seguir, demostrando que la presión por demostrar fuerza solo engendra dolor, miedo y cadenas sociales.',
        literaryReflection: 'Un tema de debate fundamental sobre la convivencia escolar, el acoso y la resolución pacífica de conflictos.'
      },
      {
        id: 'tdm-t2',
        name: 'El primer amor y la autenticidad frente a la pose',
        icon: '💌',
        description: 'La relación entre Mateo y Claudia destaca la belleza de la sencillez y el respeto mutuo frente a la fanfarronería y las pretensiones de Chung.',
        literaryReflection: 'La kermesse escolar en la maqueta física representa el despertar afectivo y las ilusiones adolescentes.'
      },
      {
        id: 'tdm-t3',
        name: 'La libertad interior y el rito de paso a la madurez',
        icon: '🌿',
        description: 'La derrota física en el parque se transforma en una victoria espiritual: Mateo comprende que ya no necesita pelear para demostrar quién es.',
        literaryReflection: 'Una poderosa conclusión que inspira a los estudiantes a tomar el control consciente de sus propias vidas.'
      }
    ]
  },
  {
    id: 'mitos-griegos',
    slug: 'mitos-griegos',
    title: 'Mitos griegos contados otra vez',
    author: 'Nathaniel Hawthorne',
    genre: 'Mitología clásica / Cuentos maravillosos',
    coverImage: '/src/assets/images/greek_myths_pixel_cover_1790994998800.jpg',
    tagline: '«Cinco fábulas inmortales de la Grecia clásica recreadas por Nathaniel Hawthorne con asombro, poesía y belleza moral.»',
    shortSummary: 'La célebre recreación del gran escritor estadounidense Nathaniel Hawthorne que reúne cinco relatos clásicos fundamentales: "El vellocino de Oro", "Los pigmeos", "El palacio de Circe", "El Minotauro" y "El paraíso de los niños". Hawthorne despoja los mitos de su frialdad marmórea y los transforma en lecciones conmovedoras sobre el heroísmo, la amistad fraternal, la dignidad humana y la presencia luminosa de la esperanza.',
    dioramaStation: 'Estación 5 · El Olimpo y los Mitos de Hawthorne (Maqueta helénica)',
    mapCoords: { x: 82, y: 22 },
    mapVisualType: 'greek-temple',
    mapTooltip: 'Mitos griegos: Los monumentos y templos helénicos en la colina',
    scenes: [
      {
        id: 'mg-s1',
        number: 1,
        title: 'El vellocino de Oro: Jasón y la hazaña de los Argonautas',
        image: 'mg-vellocino',
        description: 'El noble príncipe Jasón comanda a los héroes de Grecia a bordo de la nave Argo hasta las costas de Cólquida para recuperar el sagrado vellocino de oro. Con la ayuda de Medea, quien adormece al terrible dragón insomne, Jasón descuelga el resplandeciente vellón de oro del roble sagrado para devolver la gloria a su patria.',
        dioramaDetail: 'Representado en la maqueta por la proa del Argo, las ramas del roble sagrado y el resplandor dorado del vellocino.'
      },
      {
        id: 'mg-s2',
        number: 2,
        title: 'Los pigmeos: El gigante Anteo y la diminuta nación',
        image: 'mg-pigmeos',
        description: 'Hawthorne relata la entrañable fraternidad entre el colosal gigante Anteo y el laborioso pueblo de los pigmeos, hombrecillos diminutos a quienes Anteo protege como a hermanos menores. Cuando el héroe Hércules arriba a la comarca y sostiene un colosal duelo con el gigante, los pigmeos demuestran una conmovedora lealtad y valentía defendiendo a su protector.',
        dioramaDetail: 'Representado por las minúsculas fortalezas de los pigmeos a los pies del gigante recostado en el prado verde.'
      },
      {
        id: 'mg-s3',
        number: 3,
        title: 'El palacio de Circe: Ulises y el rescate de sus camaradas',
        image: 'mg-circe',
        description: 'Al desembarcar en la isla de Eea, los marineros de Ulises caen seducidos ante los banquetes de la hechicera Circe, quien los transforma en cerdos. Guiado por Quicksilver (Hermes) y protegido por la flor mágica de Moly, el astuto Ulises desafía el cáliz embrujado y obliga a Circe a devolver la condición humana a sus hombres.',
        dioramaDetail: 'Representado en la maqueta por las columnas de mármol, las fieras encantadas y la flor luminosa de Moly.'
      },
      {
        id: 'mg-s4',
        number: 4,
        title: 'El Minotauro: Teseo, Ariadna y el laberinto de Creta',
        image: 'mg-minotauro',
        description: 'Para librar a Atenas del tributo sangriento exigido por el rey Minos, el valiente príncipe Teseo viaja a Creta. Con la ayuda del amor de la princesa Ariadna, quien le entrega una espada y un ovillo de hilo dorado, Teseo desciende a los pasillos tenebrosos del laberinto, vence al feroz Minotauro y rescata a sus compañeros.',
        dioramaDetail: 'Representado por los muros de piedra del laberinto, el hilo dorado extendido y la silueta del Minotauro.'
      },
      {
        id: 'mg-s5',
        number: 5,
        title: 'El paraíso de los niños: La caja de Pandora y el destello de la Esperanza',
        image: 'mg-pandora',
        description: 'En una era dichosa donde la Tierra no conocía pesares, los niños Epimeteo y Pandora custodian una misteriosa caja tallada. Vencida por la curiosidad, Pandora abre el broche liberando una nube alada de aflicciones sobre el mundo; pero en el fondo del cofre resplandece la criatura más dulce: la Esperanza, consuelo eterno de la humanidad.',
        dioramaDetail: 'Representado en la maqueta por el cofre tallado, las sombras de los pesares y la luz dorada y pura de la Esperanza.'
      }
    ],
    characters: [
      {
        id: 'mg-c1',
        name: 'Jasón',
        image: 'avatar-jason',
        role: 'Protagonista de «El vellocino de Oro» / Capitán del Argo',
        importance: 'principal',
        traits: ['Liderazgo audaz', 'Espíritu expedicionario', 'Nobleza heroica', 'Perseverancia'],
        teaching: 'Nos enseña que las grandes metas de la vida demandan valor ante lo desconocido y la capacidad de unir a los mejores talentos en un propósito común.',
        quote: '«¡Remos al agua, argonautas! El vellocino de oro aguarda al final del horizonte.»'
      },
      {
        id: 'mg-c2',
        name: 'Teseo',
        image: 'avatar-teseo',
        role: 'Protagonista de «El Minotauro» / Príncipe Libertador',
        importance: 'principal',
        traits: ['Coraje desinteresado', 'Amor a su pueblo', 'Confianza en la razón', 'Lealtad'],
        teaching: 'Demuestra que el verdadero héroe no busca la gloria personal, sino arriesgar la vida para liberar a los demás de la tiranía y el miedo.',
        quote: '«Seguiré el hilo dorado en la oscuridad; ningún monstruo doblegará la libertad de Atenas.»'
      },
      {
        id: 'mg-c3',
        name: 'Ulises (Odiseo)',
        image: 'avatar-ulises',
        role: 'Protagonista de «El palacio de Circe» / Rey Sabio y Prudente',
        importance: 'principal',
        traits: ['Astucia e inteligencia', 'Prudencia moral', 'Lealtad hacia su tripulación', 'Resistencia a la tentación'],
        teaching: 'Enseña que la fuerza física es ciega sin sabiduría, y que la templanza moral es el mejor escudo contra los vicios que deshumanizan al hombre.',
        quote: '«La belleza y el banquete son una trampa si nos arrebatan la dignidad humana.»'
      },
      {
        id: 'mg-c4',
        name: 'Circe',
        image: 'avatar-circe',
        role: 'Antagonista de «El palacio de Circe» / La Hechicera de Eea',
        importance: 'principal',
        traits: ['Magia y encanto seductor', 'Poder transformador', 'Vencida por la sabiduría'],
        teaching: 'Advierte cómo los placeres desmedidos pueden transformar a las personas en bestias si olvidan su razón y sus valores.',
        quote: '«Bebe de mi cáliz de oro y olvida las fatigas del mundo mortal.»'
      },
      {
        id: 'mg-c5',
        name: 'Pandora',
        image: 'avatar-pandora',
        role: 'Protagonista de «El paraíso de los niños» / Custodia de la Esperanza',
        importance: 'principal',
        traits: ['Curiosidad inocente', 'Arrepentimiento sincero', 'Custodia de la última luz'],
        teaching: 'Nos recuerda que, aunque el ser humano cometa errores por descuido o curiosidad, la Esperanza siempre permanece para iluminar el camino.',
        quote: '«¡Miren qué hermosa luz quedó en el fondo de la caja! Dice que nunca nos abandonará.»'
      }
    ],
    themes: [
      {
        id: 'mg-t1',
        name: 'El heroísmo, la lealtad y el viaje iniciático',
        icon: '⚔️',
        description: 'En "El vellocino de Oro" y "El Minotauro", Jasón y Teseo encarnan la superación de pruebas aparentemente imposibles gracias a la lealtad, la perseverancia y el sacrificio por el bien de su pueblo.',
        literaryReflection: 'Hawthorne invita a los jóvenes a asumir sus propios retos con entereza moral y espíritu solidario.'
      },
      {
        id: 'mg-t2',
        name: 'La dignidad humana frente a la degradación instintiva',
        icon: '🌿',
        description: 'En "El palacio de Circe", la transformación de los marineros en bestias simboliza el peligro de sucumbir a los apetitos sin control, mientras la flor Moly de Ulises representa la razón y la integridad.',
        literaryReflection: 'Un debate ético sobre cómo preservar los valores y la humanidad ante las tentaciones externas.'
      },
      {
        id: 'mg-t3',
        name: 'La fraternidad de los diferentes y la lealtad mutua',
        icon: '🤝',
        description: 'En "Los pigmeos", la relación entre el gigante Anteo y los pequeños hombrecillos celebra cómo la verdadera fuerza radica en la protección mutua y en respetar el valor de cada ser, sin importar su tamaño.',
        literaryReflection: 'La maqueta física en la exposición recrea la escala diminuta y la armonía entre el gigante y los pigmeos.'
      },
      {
        id: 'mg-t4',
        name: 'La Esperanza como faro inquebrantable del alma',
        icon: '✨',
        description: 'En "El paraíso de los niños", la criatura alada de la Esperanza consuela a los niños y sella el mensaje de Hawthorne: no hay oscuridad que no pueda ser sanada por la fe y el optimismo.',
        literaryReflection: 'Un mensaje reconfortante y formativo para los alumnos y visitantes de la feria escolar.'
      }
    ]
  }
];

export function getBookBySlug(slug: string): Book | undefined {
  const normalized = slug.toLowerCase().trim();
  return BOOKS_DATA.find(b => b.slug.toLowerCase() === normalized || b.id.toLowerCase() === normalized);
}
