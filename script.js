// 1. DATOS DEL CATÁLOGO GENERAL
const productosGeneral = [
  {
    id: 'p1',
    nombre: 'Cachama Gourmet (Rellena)',
    puesto: 'ACUAS EL CIELO',
    precio: 28000,
    desc: 'Cachama fresca deshuesada/relajada, sazonada con aliños naturales, rellena con vegetales frescos y camarones al ajillo.',
    imagen: 'Fotos de la feria/Gourmet.jpg'
  },
  {
    id: 'p2',
    nombre: 'Tilapia Roja + Patacones Pre-cocidos',
    puesto: 'ACUAS EL CIELO',
    precio: 25000,
    desc: 'Tilapia roja fresca eviscerada y sazonada, acompañada de patacones precocidos listos para freír.',
    imagen: 'Fotos de la feria/Roja.jpg'
  },
  {
    id: 'p3',
    nombre: 'Cachama Blanca + Patacones',
    puesto: 'ACUAS EL CIELO',
    precio: 22000,
    desc: 'Cachama eviscerada, sin escamas y relajada, sazonada con sal y aliños naturales con patacones precocidos.',
    imagen: 'Fotos de la feria/Blanca.jpg'
  },
  {
    id: 'p4',
    nombre: 'Tilapia Roja Estelar (Al Vacío)',
    puesto: 'ACUAS EL CIELO',
    precio: 24000,
    desc: 'Tilapia roja fresca eviscerada y relajada empacada al vacío para máxima conservación.',
    imagen: 'Fotos de la feria/Roja1.jpg'
  },
  {
    id: 'p5',
    nombre: 'Cachama DUO PACK',
    puesto: 'ACUAS EL CIELO',
    precio: 30000,
    desc: 'Cachama blanca eviscerada en presentación platera mediana (pack doble), empacada al vacío.',
    imagen: 'Fotos de la feria/Duopack.jpg'
  },
  {
    id: 'p6',
    nombre: 'Cachama al Sartén',
    puesto: 'ACUAS EL CIELO',
    precio: 22000,
    desc: 'Cachama lista para preparar como prefieras, empacada al vacío.',
    imagen: 'Fotos de la feria/Sarten.jpg'
  },
  {
    id: 'g1',
    nombre: 'Torta de Ahuyama La Abuela',
    puesto: 'Torta de ahuyama la abuela',
    precio: 15000,
    desc: 'Torta artesanal húmeda y esponjosa a base de ahuyama cocida, harina de trigo, huevos, mantequilla y leche.',
    imagen: 'Fotos de la feria/Tortas la abuela.jpg'
  },
  {
    id: 'g2',
    nombre: 'Galletas Artesanales de Cacao',
    puesto: 'El Cacaotal',
    precio: 3000,
    desc: 'Galleta de harina, cacao y chispas de chocolate artesanal con textura crocante y empaque individual.',
    imagen: 'Fotos de la feria/Galletas.png'
  },
  {
    id: 'g3',
    nombre: 'Yogurt Casegur 1 Litro',
    puesto: 'El Cacaotal / Casegur',
    precio: 14000,
    desc: 'Yogurt artesanal 100% casero de finca, sin químicos. Sabores con pulpa natural: fresa, mora, piña o maracuyá.',
    imagen: 'Fotos de la feria/Yogur.jpeg'
  },
  {
    id: 'g4',
    nombre: 'Yogurt Casegur Personal (300ml)',
    puesto: 'El Cacaotal / Casegur',
    precio: 6000,
    desc: 'Vaso personal de yogurt cremoso especialidad de chocolate con vetas y chispas crujientes.',
    imagen: 'Fotos de la feria/Yogur.png'
  },
  {
    id: 'g5',
    nombre: 'Postres Caseros NAKASA',
    puesto: 'NAKASA',
    precio: 7000,
    desc: 'Postres caseros en vaso con tapa domo y moño. Sabores disponibles: Limón, Oreo y Maracuyá.',
    imagen: 'Fotos de la feria/Postres.png'
  },
  {
    id: 'g6',
    nombre: 'Mug Personalizado (11 oz)',
    puesto: 'Sky Blue Creaciones',
    precio: 18000,
    desc: 'Mug cerámico sublimado con fotografías, nombres, frases o diseños a tu elección.',
    imagen: 'Fotos de la feria/Mugs.jpg'
  },
  {
    id: 'g7',
    nombre: 'Soporte Matera Estrella, Luna y Sol',
    puesto: 'Metalux',
    precio: 35000,
    desc: 'Estructura decorativa en varilla de acero 3/8", soldada y pintada para alta resistencia en exteriores.',
    imagen: 'Fotos de la feria/Metalux.jpg'
  },
  {
    id: 'g8',
    nombre: 'Huevos Criollos y Semicriollos',
    puesto: 'Huevos Campoverde',
    precio: 18000,
    desc: 'Huevos de gallinas criollas criadas en pastoreo libre de jaulas. Selección de alta frescura e inocuidad.',
    imagen: 'Fotos de la feria/Huevos.jpg'
  },
  {
    id: 'g9',
    nombre: 'Plátano Verde al Vacío (1 Kg)',
    puesto: 'Platanitos Duraderos',
    precio: 8000,
    desc: 'Plátano verde seleccionado empacado al vacío para mantener su frescura por más tiempo.',
    imagen: 'Fotos de la feria/Platanos.jpg'
  },
  {
    id: 'g10',
    nombre: 'Cubeta de Huevos Ponedoras',
    puesto: 'Gallinas Felices',
    precio: 16000,
    desc: 'Cubeta de huevos de gallinas ponedoras criadas en ambiente natural.',
    imagen: 'Fotos de la feria/Huevos1.jpg'
  },
  {
    id: 'g11',
    nombre: 'Confección de Pijamas y Ropa Interior',
    puesto: 'Confección de pijamas, ropa interior y prendas de vestir',
    precio: 15000,
    desc: 'Pijamas para damas y niños, ropa interior para dama y accesorios para el cabello.',
    imagen: 'Fotos de la feria/pijama1.jpeg'
  },
  {
    id: 'g12',
    nombre: 'Nibs y Chocolate de Mesa MERLID',
    puesto: 'MERLID',
    precio: 3000,
    desc: 'Nibs de cacao con naranja/coco ($3.000) y Chocolate de mesa puro o con clavos y canela ($8.000 - $16.000).',
    imagen: 'Fotos de la feria/Nibs.jpeg'
  },
  {
    id: 'g13',
    nombre: 'Servicios Solvolt - Paneles Solares',
    puesto: 'Solvolt',
    precio: 50000,
    desc: 'Prestación de servicios eléctricos, planos y sistemas de paneles solares.',
    imagen: 'Fotos de la feria/Paneles.jpeg'
  },
  {
    id: 'g14',
    nombre: 'Soluciones Fotovoltaicas SOLARA',
    puesto: 'SOLARA S.A.S',
    precio: 50000,
    desc: 'Servicios eléctricos y kits fotovoltaicos (paneles solares, inversor, controlador y batería).',
    imagen: 'Fotos de la feria/Solara.jpeg'
  },
  {
    id: 'g15',
    nombre: 'RiegoPro - Riegos Agrícolas Solares',
    puesto: 'RiegoPro colombia S.A.S',
    precio: 45000,
    desc: 'Diseño e instalación de sistemas de riego automatizado con paneles solares y bombas sumergibles.',
    imagen: 'Fotos de la feria/Riego.jpeg'
  },
  {
    id: 'g16',
    nombre: 'VoltMax - Mantenimiento Eléctrico',
    puesto: 'VoltMax',
    precio: 35000,
    desc: 'Instalación, mantenimiento y reparación de sistemas eléctricos residenciales, comerciales y fotovoltaicos.',
    imagen: 'Fotos de la feria/Volt.jpeg'
  },
  {
    id: 'g17',
    nombre: 'EcoEnergía Arauca - Consultoría',
    puesto: 'EcoEnergia Arauca',
    precio: 30000,
    desc: 'Diagnóstico energético, planes de ahorro y evaluación de viabilidad para sistemas solares fotovoltaicos.',
    imagen: 'Fotos de la feria/Eco.jpeg'
  },
  {
    id: 'g18',
    nombre: 'La Parada del Ciclista - Chocolate y Tinto',
    puesto: 'LA PARADA DEL CICLISTA',
    precio: 5000,
    desc: 'Venta de chocolate artesanal en leche, café criollo tinto, torrejas de trigo y productos de GanoCafé.',
    imagen: 'Fotos de la feria/cafe.jpeg'
  },
  {
    id: 'g19',
    nombre: 'Frío Hogar HS - Servicios Técnicos',
    puesto: 'FRIO HOGAR HS',
    precio: 40000,
    desc: 'Mantenimiento preventivo y reparación de aires acondicionados, neveras, lavadoras y enfriadores.',
    imagen: 'Fotos de la feria/frio.jpeg'
  },
  {
    id: 'g20',
    nombre: 'Dulzura de Maná - Postres y Tortas',
    puesto: 'DULZURA DE MANÁ',
    precio: 8000,
    desc: 'Porciones de Torta Tres Leches, Chocoquesillo y Quesillo artesanal.',
    imagen: 'Fotos de la feria/Mana.jpeg'
  },
  {
    id: 'g21',
    nombre: 'Chocolate La Gallardera',
    puesto: 'CHOCOLATE LA GALLARDERA',
    precio: 20000,
    desc: 'Cacao puro en polvo (250g - $20.000) y Chocolate puro en cubos (250g - $20.000).',
    imagen: 'Fotos de la feria/Gallardera.jpeg'
  },
  {
    id: 'g22',
    nombre: 'Hayacas Criollas Araucanas',
    puesto: 'HAYACAS CRIOLLAS',
    precio: 5000,
    desc: 'Deliciosas hayacas criollas tradicionales de 200 gramos.',
    imagen: 'Fotos de la feria/Hayacas.jpeg'
  },
  {
    id: 'g23',
    nombre: 'Arepas Doña Inés (Paquete x5)',
    puesto: 'AREPAS DOÑA INÉS',
    precio: 9000,
    desc: 'Paquete de 5 arepas (600g total) rellenar de Queso o Jamón con Queso.',
    imagen: 'Fotos de la feria/Inés.jpeg'
  },
  {
    id: 'g24',
    nombre: 'Chorizos Araucanos',
    puesto: 'CHORIZOS ARAUCANOS',
    precio: 12000,
    desc: 'Chorizo artesanal natural y picante (16cm) y chorizo natural (7cm).',
    imagen: 'Fotos de la feria/chorizo.jpeg'
  },
  {
    id: 'g25',
    nombre: 'Chocofortul - Derivados del Cacao',
    puesto: 'Chocofortul',
    precio: 10000,
    desc: 'Chocolate de mesa 250g ($20k), chocolatinas 40g ($10k), cerveza artesanal ($10k), vino ($30k) y tortas ($30k).',
    imagen: 'Fotos de la feria/choco.jpeg'
  },
  {
    id: 'g26',
    nombre: 'Miel Pura Chapimiel',
    puesto: 'CHAPIMIEL',
    precio: 20000,
    desc: 'Miel 100% pura en presentaciones de 250g ($20k), 375g ($30k), 500g ($40k), 750g ($60k) y 1000g ($80k).',
    imagen: 'Fotos de la feria/Miel.jpeg'
  },
  {
    id: 'g27',
    nombre: 'Reposteria La Valenciana',
    puesto: 'LA VALENCIANA',
    precio: 20000,
    desc: 'Variedad de sabores y productos de panificación y repostería artesanal.',
    imagen: 'Fotos de la feria/valenciana.jpeg'
  },
  {
    id: 'g28',
    nombre: 'Cosesueños - Confección Textil',
    puesto: 'COSESUEÑOS',
    precio: 30000,
    desc: 'Pijamas ($30.000), uniformes deportivos ($45.000) y juegos de sábanas ($60.000).',
    imagen: 'Fotos de la feria/pijama.jpeg'
  },
  {
    id: 'g29',
    nombre: 'Huevos Avícola Las Margaritas',
    puesto: 'Avícola Las Margaritas S.A.S',
    precio: 13000,
    desc: 'Cubeta de 30 huevos de gallina frescos clasificados por tamaño ($11.000 - $15.000).',
    imagen: 'Fotos de la feria/avicola.jpeg'
  },
  {
    id: 'g30',
    nombre: 'Asproyusar - Derivados de la Yuca',
    puesto: 'Asproyusar',
    precio: 6000,
    desc: 'Yuca pelada empacada al vacío, tortas de yuca, chips y snacks artesanales.',
    imagen: 'Fotos de la feria/yuca.jpg'
  },
  {
    id: 'g31',
    nombre: 'Chocolate Sabores de Tame',
    puesto: 'Chocolate Sabores de Tame',
    precio: 15000,
    desc: 'Chocolate de mesa tradicional, chocolatinas artesanales y artesanías de la región.',
    imagen: 'Fotos de la feria/chocosabores .jpeg'
  },
  {
    id: 'g32',
    nombre: 'AMECSAR - Chocolatería del Sarare',
    puesto: 'AMECSAR',
    precio: 14000,
    desc: 'Chocolate de mesa 100% y 50% cacao, chocolatinas, arequipe de cacao y almendras garrapiñadas.',
    imagen: 'Fotos de la feria/amecsar.jpeg'
  },
  {
    id: 'g33',
    nombre: 'ASOPISFOR - Pescado Fresco',
    puesto: 'ASOPISFOR',
    precio: 12000,
    desc: 'Cachama y mojarra fresca de producción acuícola local.',
    imagen: 'Fotos de la feria/asopis.jpeg'
  },
  {
    id: 'g34',
    nombre: 'Artesanías Alexandra (Mostacilla)',
    puesto: 'Artesanías Alexandra',
    precio: 12000,
    desc: 'Collares ($80k+), aretes ($12k+) y manillas tejidas en mostacilla ($7k+).',
    imagen: 'Fotos de la feria/alexandra.jpeg'
  },
  {
    id: 'g35',
    nombre: 'Hilaturas a Corazón',
    puesto: 'Hilaturas a Corazon',
    precio: 15000,
    desc: 'Mochilas tejidas ($120k-$140k), jabones artesanales ($20k), cremas ($30k), amigurumis y accesorios.',
    imagen: 'Fotos de la feria/Hila.jpeg'
  },
  {
    id: 'g36',
    nombre: 'Panadería Artesanal SUMAQ',
    puesto: 'SUMAQ',
    precio: 12000,
    desc: 'Sourdough de arándanos o nibs, pan Babka de chocolate, pan serrano, tortas y café helado.',
    imagen: 'Fotos de la feria/sumaq.jpeg'
  },
  {
    id: 'g37',
    nombre: 'Apiario Laguna del Lipa',
    puesto: 'APIARIO LAGUNA DEL LIPA',
    precio: 20000,
    desc: 'Miel natural 250g ($20.000), miel 500g ($40.000) y propóleo purificado ($15.000).',
    imagen: 'Fotos de la feria/apiario.jpeg'
  },
  {
    id: 'g38',
    nombre: 'ASOPROCHA - Cachapas de Maíz',
    puesto: 'ASOPROCHA',
    precio: 9000,
    desc: 'Cachapas sencillas con queso ($9.000), con cerdo frito ($19.000) o con queso de mano y cerdo ($20.000).',
    imagen: 'Fotos de la feria/asoprocha.jpeg'
  },
  {
    id: 'g39',
    nombre: 'Café Roko - Café de Origen',
    puesto: 'CAFE ROKO',
    precio: 11000,
    desc: 'Café molido artesanal de 125g ($11.000), 250g ($22.000) y 500g ($42.000).',
    imagen: 'Fotos de la feria/cafe1.jpeg'
  },
  {
    id: 'g40',
    nombre: 'Champú Artesanal ASOPROCHA',
    puesto: 'ASOPROCHA - Champú',
    precio: 30000,
    desc: 'Champú natural de Romero y Linaza o Champú de Coco, Canela y Romero ($30.000).',
    imagen: 'Fotos de la feria/artesanal.jpeg'
  },
  {
    id: 'g41',
    nombre: 'Artes Corocora - Artesanías del Llano',
    puesto: 'ARTES COROCORA',
    precio: 15000,
    desc: 'Canastos, pocillos, figuras talladas de animales del llano y llaveros artesanales.',
    imagen: 'Fotos de la feria/artes.jpeg'
  },
  {
    id: 'g42',
    nombre: 'Apisabana - Mieles Especiales',
    puesto: 'Apisabana',
    precio: 16000,
    desc: 'Miel con Frutos Secos ($16k), Hot Honey picosita ($16k), Miel pura 350g ($24k) y 500g ($30k).',
    imagen: 'Fotos de la feria/api.jpeg'
  },
  {
    id: 'g43',
    nombre: 'El Rey del Chorizo Araucano',
    puesto: 'REY DEL CHORIZO ARAUCAN',
    precio: 10000,
    desc: 'Chorizo ahumado artesanal (cerdo, mixto o picante) servido con papa criolla y arepa con queso ($10.000 - $12.000).',
    imagen: 'Fotos de la feria/Rey.jpeg'
  },
  {
    id: 'g44',
    nombre: 'Dulce Antojo - Dulces Caseros',
    puesto: 'Dulce Antojo',
    precio: 12000,
    desc: 'Dulces de piña, coco, papaya, toronja, mamón, higo, tamarindo, arazá o mora en tarrina de 8 oz.',
    imagen: 'Fotos de la feria/dulce.jpeg'
  },
  {
    id: 'g45',
    nombre: 'Helados Cremositos y Paletas',
    puesto: 'HELADOS CREMOSITOS',
    precio: 4000,
    desc: 'Helados cremosos de maracuyá, frutos rojos, guanábana u oreo ($4.000) y paletas al agua ($3.000).',
    imagen: 'Fotos de la feria/helado.jpeg'
  },
  {
    id: 'g46',
    nombre: 'La Huerta Milagrosa - Cuidado Capilar',
    puesto: 'La Huerta Milagrosa',
    precio: 20000,
    desc: 'Champú ($35k), tónico capilar ($25k), jabones ($15k), aceites corporales ($20k) y cremas faciales ($20k).',
    imagen: 'Fotos de la feria/Huerta.jpeg'
  },
  {
    id: 'g47',
    nombre: 'Chocolate Artesanal La Sultana',
    puesto: 'Chocolate La Sultana',
    precio: 15000,
    desc: 'Chocolate de mesa tradicional, crema de whisky artesanal y arequipe de chocolate.',
    imagen: 'Fotos de la feria/sultana.jpeg'
  },
  {
    id: 'g48',
    nombre: 'Choco Oasis - Derivados de Cacao',
    puesto: 'Unidad Choco Oasis',
    precio: 10000,
    desc: 'Chocolate de mesa 200g ($10k), mucílago de cacao 150g ($8k), arequipe ($5k) y vino de cacao ($20k).',
    imagen: 'Fotos de la feria/oasis.jpeg'
  },
  {
    id: 'g49',
    nombre: 'TECAM TAME - Productos Apícolas',
    puesto: 'TECAM TAME',
    precio: 30000,
    desc: 'Miel pura litro ($60.000), medio litro ($30.000) y miel fresca en panal ($30.000).',
    imagen: 'Fotos de la feria/Tecam.jpeg'
  },
  {
    id: 'g50',
    nombre: 'Burbujas de Oasis - Jabonería',
    puesto: 'Burbujas de oasis',
    precio: 10000,
    desc: 'Jabones artesanales moldeados (100g) de Arroz, Carbón activado, Avena miel, Cúrcuma, Aloe vera y Maracuyá.',
    imagen: 'Fotos de la feria/jabon.jpeg'
  },
  {
    id: 'g51',
    nombre: 'Turismo Tame - Café, Miel y Crema',
    puesto: 'Asoc. Turismo Tame',
    precio: 20000,
    desc: 'Miel x libra ($20k), café tostado molido ($35k), crema de whisky ($60k), arequipe de café ($15k) y galletas ($2k).',
    imagen: 'Fotos de la feria/tame.jpeg'
  },
  {
    id: 'g52',
    nombre: 'Plátanos Don Víctor',
    puesto: 'PLATANOS DON VICTOR',
    precio: 1500,
    desc: 'Plátano verde fresco directo del campo por kilo.',
    imagen: 'Fotos de la feria/victor.jpeg'
  },
  {
    id: 'g53',
    nombre: 'Lácteos Campesina',
    puesto: 'Campesina',
    precio: 8000,
    desc: 'Suero costeño tradicional, yogurt casero y masato artesanal.',
    imagen: 'Fotos de la feria/campesina.jpeg'
  },
  {
    id: 'g54',
    nombre: 'Asolirios - Productos Agrícolas',
    puesto: 'Asociación Asolirios',
    precio: 4000,
    desc: 'Plátano ($3.000/kg), Yuca ($5.000/kg), Limón Tahití ($8.000/kg), Cilantrón ($4.000) y Zapotes ($4.000).',
    imagen: 'Fotos de la feria/Asolirios.jpg'
  },
  {
    id: 'g55',
    nombre: 'Abonos y Humus Fortul',
    puesto: 'Recicladores de Fortul',
    precio: 10000,
    desc: 'Humus de lombriz californiana ($10.000/kg), lixiviados ($15.000) y biol potásico/nitrogenado ($20.000).',
    imagen: 'Fotos de la feria/Humus.jpeg'
  },
  {
    id: 'g56',
    nombre: 'Productos El Paraíso',
    puesto: 'PRODUCTOS EL PARAISO',
    precio: 10000,
    desc: 'Miel natural, maíz, harina de maíz, chocolate integral y chicha criolla tradicional.',
    imagen: 'Fotos de la feria/paraiso.jpeg'
  },
  {
    id: 'g57',
    nombre: 'Chorizos y Génovas Fortul',
    puesto: 'ADC Fortul',
    precio: 3000,
    desc: 'Chorizos artesanales ahumados 100% cerdo y génovas picantes empacados al vacío ($3.000 c/u).',
    imagen: 'Fotos de la feria/chorizos artesanales.jpeg'
  },
  {
    id: 'g58',
    nombre: 'La Casita del Sabor',
    puesto: 'LA CASITA DEL SABOR',
    precio: 3000,
    desc: 'Tamales, empanadas, pasteles, papas rellenas, jugos naturales, avena, café y chocolate caliente.',
    imagen: 'Fotos de la feria/sabor.jpeg'
  }
];

// 2. ESTRUCTURA DE DATOS DE PUESTO Y PROPIETARIO
const datosPuestos = {
  'ACUAS EL CIELO': { contacto: 'María Sánchez', numero: '302 647 7853', correo: 'maria.sanchez@ejemplo.com' },
  'Torta de ahuyama la abuela': { contacto: 'Angie Molero', numero: '302 723 2012', correo: 'angie.molero@ejemplo.com' },
  'El Cacaotal': { contacto: 'Representante El Cacaotal', numero: '311 353 7992', correo: 'cacaotal@ejemplo.com' },
  'El Cacaotal / Casegur': { contacto: 'Luis Martínez', numero: '312 264 9498', correo: 'luis.martinez@ejemplo.com' },
  'NAKASA': { contacto: 'Stefany Estupiñán', numero: '311 891 6046', correo: 'stefany.nakasa@ejemplo.com' },
  'Sky Blue Creaciones': { contacto: 'Yariana Colina', numero: '320 237 4303', correo: 'yariana.skyblue@ejemplo.com' },
  'Metalux': { contacto: 'Mirta Yamile', numero: '322 282 6462', correo: 'mirta.metalux@ejemplo.com' },
  'Huevos Campoverde': { contacto: 'Karelis Benítez', numero: '321 272 4151', correo: 'karelis.campoverde@ejemplo.com' },
  'Platanitos Duraderos': { contacto: 'Representante Platanitos', numero: '314 441 2707', correo: 'platanitos@ejemplo.com' },
  'Gallinas Felices': { contacto: 'Representante Gallinas Felices', numero: '314 441 2707', correo: 'gallinasfelices@ejemplo.com' },
  'Confección de pijamas, ropa interior y prendas de vestir': { contacto: 'Ingrid Yohana Rojas Luna', numero: '316 759 3303', correo: 'ingrid.rojas@ejemplo.com' },
  'MERLID': { contacto: 'Fernando Macías', numero: '323 280 9407', correo: 'fernando.merlid@ejemplo.com' },
  'Solvolt': { contacto: 'Frainner Alexis Díaz Yustre', numero: '313 467 6015', correo: 'frainner.solvolt@ejemplo.com' },
  'SOLARA S.A.S': { contacto: 'Jholman David Tabarquino Sarmiento', numero: '322 431 8976', correo: 'jholman.solara@ejemplo.com' },
  'RiegoPro colombia S.A.S': { contacto: 'Wilman Orduña Florez', numero: '321 438 8773', correo: 'wilman.riegopro@ejemplo.com' },
  'VoltMax': { contacto: 'Freddy René Anis Guerrero', numero: '304 463 1510', correo: 'freddy.voltmax@ejemplo.com' },
  'EcoEnergia Arauca': { contacto: 'Adrian Eliecer Blanco Anija', numero: '322 750 6878', correo: 'adrian.ecoenergia@ejemplo.com' },
  'LA PARADA DEL CICLISTA': { contacto: 'Ayde Ibarra', numero: '302 617 1220', correo: 'ayde.ciclista@ejemplo.com' },
  'FRIO HOGAR HS': { contacto: 'Joel Santos', numero: '320 569 3511', correo: 'joel.friohogar@ejemplo.com' },
  'DULZURA DE MANÁ': { contacto: 'Yognia Mora', numero: '313 598 5288', correo: 'yognia.mana@ejemplo.com' },
  'CHOCOLATE LA GALLARDERA': { contacto: 'Consuelo Camejo', numero: '313 276 7692', correo: 'consuelo.gallardera@ejemplo.com' },
  'HAYACAS CRIOLLAS': { contacto: 'Glady Sánchez', numero: '320 409 3479', correo: 'glady.hayacas@ejemplo.com' },
  'AREPAS DOÑA INÉS': { contacto: 'Inés Teresa Arias Mora', numero: '315 364 4341', correo: 'ines.arepas@ejemplo.com' },
  'CHORIZOS ARAUCANOS': { contacto: 'Yessica Julieth Quiroga Reyes', numero: '321 479 6174', correo: 'yessica.chorizos@ejemplo.com' },
  'Chocofortul': { contacto: 'Elian David Alarcón Alvarado', numero: '310 789 7860', correo: 'elian.chocofortul@ejemplo.com' },
  'CHAPIMIEL': { contacto: 'Vidal Galíndez', numero: '322 919 5852', correo: 'vidal.chapimiel@ejemplo.com' },
  'LA VALENCIANA': { contacto: 'Eulalia Gómez', numero: '317 464 0927', correo: 'eulalia.valenciana@ejemplo.com' },
  'COSESUEÑOS': { contacto: 'Luz Dary Ruiz', numero: '300 971 6717', correo: 'luzdary.cosesuenos@ejemplo.com' },
  'Avícola Las Margaritas S.A.S': { contacto: 'Avelina Espinosa Godoy', numero: '321 372 7850', correo: 'avelina.margaritas@ejemplo.com' },
  'Asproyusar': { contacto: 'Patricia Monroy', numero: '320 887 6784', correo: 'patricia.asproyusar@ejemplo.com' },
  'Chocolate Sabores de Tame': { contacto: 'Gloris Romero Ovejero', numero: '323 841 9663', correo: 'gloris.sabores@ejemplo.com' },
  'AMECSAR': { contacto: 'Paola Reina', numero: '324 569 1639', correo: 'paola.amecsar@ejemplo.com' },
  'ASOPISFOR': { contacto: 'Luz Dani Martínez Quintero', numero: '313 822 6483', correo: 'luzdani.asopisfor@ejemplo.com' },
  'Artesanías Alexandra': { contacto: 'Jiceth Alexandra Gelvez Trillos', numero: '314 437 3355', correo: 'jiceth.alexandra@ejemplo.com' },
  'Hilaturas a Corazon': { contacto: 'Flor María Trillos Carranza', numero: '313 394 5140', correo: 'flor.hilaturas@ejemplo.com' },
  'SUMAQ': { contacto: 'Nataly Bragagnini', numero: '317 301 6057', correo: 'nataly.sumaq@ejemplo.com' },
  'APIARIO LAGUNA DEL LIPA': { contacto: 'Sandra Ascanio', numero: '304 444 7559', correo: 'sandra.lipa@ejemplo.com' },
  'ASOPROCHA': { contacto: 'María Alejandra Parales', numero: '312 564 2742', correo: 'maria.asoprocha@ejemplo.com' },
  'CAFE ROKO': { contacto: 'Katherine Guzmán', numero: '302 329 9409', correo: 'katherine.roko@ejemplo.com' },
  'ASOPROCHA - Champú': { contacto: 'Hilda Rodríguez', numero: '312 564 2742', correo: 'hilda.champu@ejemplo.com' },
  'ARTES COROCORA': { contacto: 'Inés Clarena Solórzano Anave', numero: '310 556 7384', correo: 'ines.corocora@ejemplo.com' },
  'Apisabana': { contacto: 'Brenda Garcés', numero: '322 842 6842', correo: 'brenda.apisabana@ejemplo.com' },
  'REY DEL CHORIZO ARAUCAN': { contacto: 'Kevin Fernández García', numero: '314 286 3873', correo: 'kevin.reydelchorizo@ejemplo.com' },
  'Dulce Antojo': { contacto: 'Saira Martínez Cepeda', numero: '314 249 5840', correo: 'saira.dulceantojo@ejemplo.com' },
  'HELADOS CREMOSITOS': { contacto: 'Yuly Marcela González Parra', numero: '314 393 1353', correo: 'yuly.cremositos@ejemplo.com' },
  'La Huerta Milagrosa': { contacto: 'Bardelia Mejía Isaza', numero: '320 364 5885', correo: 'bardelia.lahuerta@ejemplo.com' },
  'Chocolate La Sultana': { contacto: 'Nini Johana Hernández Croffort', numero: '301 632 0048', correo: 'nini.lasultana@ejemplo.com' },
  'Unidad Choco Oasis': { contacto: 'Nancy Jiménez', numero: '314 429 0158', correo: 'nancy.chocooasis@ejemplo.com' },
  'TECAM TAME': { contacto: 'Bernabé Ortiz Lizcano', numero: '312 342 5233', correo: 'bernabe.tecam@ejemplo.com' },
  'Burbujas de oasis': { contacto: 'Nancy Jiménez', numero: '314 429 0158', correo: 'nancy.burbujas@ejemplo.com' },
  'Asoc. Turismo Tame': { contacto: 'Katherine Rincón', numero: '313 241 2198', correo: 'katherine.turismotame@ejemplo.com' },
  'PLATANOS DON VICTOR': { contacto: 'Víctor Cárdenas', numero: '313 893 6775', correo: 'victor.platanos@ejemplo.com' },
  'Campesina': { contacto: 'Deyra Yascceny Sandoval Julios', numero: '322 955 3090', correo: 'deyra.campesina@ejemplo.com' },
  'Asociación Asolirios': { contacto: 'Jhon Edinsson Varón Rojas', numero: '310 697 8154', correo: 'jhon.asolirios@ejemplo.com' },
  'Recicladores de Fortul': { contacto: 'Omaira Torres Barrios', numero: '322 884 7974', correo: 'omaira.recicladores@ejemplo.com' },
  'PRODUCTOS EL PARAISO': { contacto: 'Saudy Gómez', numero: '350 289 8122', correo: 'saudy.elparaiso@ejemplo.com' },
  'ADC Fortul': { contacto: 'María Josefa Suárez Villamizar', numero: '320 485 9393', correo: 'maria.adcfortul@ejemplo.com' },
  'LA CASITA DEL SABOR': { contacto: 'Inelda Sánchez', numero: '320 950 7048', correo: 'inelda.lacasita@ejemplo.com' }
};

const pagoGeneral = {
  contacto: 'Feria Empresarial - Arauca (cuenta general)',
  numero: '320 738 6998 / 302 647 7853',
  correo: 'coordinacion.feriapay@gmail.com'
};

function obtenerDatosPago(puesto) {
  const datos = datosPuestos[puesto];
  if (datos) return { ...datos, esGeneral: false };
  return { ...pagoGeneral, esGeneral: true };
}

let carrito = [];

function renderizarProductos() {
  const gridGeneral = document.getElementById('grid-productos');
  if (gridGeneral) {
    gridGeneral.innerHTML = productosGeneral.map(p => `
      <div class="tarjeta-producto">
        <div>
          <div class="tp-imagen-wrapper">
            <img src="${p.imagen}" alt="${p.nombre}" class="tp-imagen" loading="lazy" onerror="this.src='https://via.placeholder.com/300x160?text=Sin+Imagen'">
          </div>
          <div class="tp-puesto">${p.puesto}</div>
          <h4 class="tp-nombre">${p.nombre}</h4>
          <p class="tp-descripcion">${p.desc}</p>
        </div>
        <div class="tp-pie">
          <span class="tp-precio">$${p.precio.toLocaleString()} COP</span>
          <button class="btn-anadir" onclick="agregarAlCarrito('${p.id}')">Añadir</button>
        </div>
      </div>
    `).join('');
  }
}

function agregarAlCarrito(id) {
  const producto = productosGeneral.find(p => p.id === id);
  const existe = carrito.find(item => item.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarritoUI();
  abrirCanasta();
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (item) {
    item.cantidad += delta;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(i => i.id !== id);
    }
  }
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const countEl = document.getElementById('cart-count');
  const contenidoEl = document.getElementById('canasta-contenido');
  const footerEl = document.getElementById('panel-footer');
  const totalEl = document.getElementById('total-monto');

  const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, i) => acc + (i.precio * i.cantidad), 0);

  if (countEl) countEl.innerText = totalItems;

  if (carrito.length === 0) {
    if (contenidoEl) contenidoEl.innerHTML = '<p style="text-align: center; color: var(--gris-piedra); margin-top: 40px;">El carrito está vacío.</p>';
    if (footerEl) footerEl.style.display = 'none';
  } else {
    if (contenidoEl) {
      contenidoEl.innerHTML = carrito.map(item => `
        <div class="item-canasta">
          <div class="ic-info">
            <h5>${item.nombre}</h5>
            <p>$${item.precio.toLocaleString()} x ${item.cantidad}</p>
            <div class="stepper">
              <button onclick="cambiarCantidad('${item.id}', -1)">-</button>
              <span style="font-family: var(--font-mono); font-size: 13px;">${item.cantidad}</span>
              <button onclick="cambiarCantidad('${item.id}', 1)">+</button>
            </div>
          </div>
          <strong style="font-family: var(--font-mono); font-size: 14px;">$${(item.precio * item.cantidad).toLocaleString()}</strong>
        </div>
      `).join('');
    }

    if (totalEl) totalEl.innerText = `$${totalPrecio.toLocaleString()} COP`;
    if (footerEl) footerEl.style.display = 'block';
  }
}

function abrirCanasta() {
  document.getElementById('panel-canasta')?.classList.add('abierto');
  document.getElementById('overlay')?.classList.add('visible');
}
function cerrarCanasta() {
  document.getElementById('panel-canasta')?.classList.remove('abierto');
  document.getElementById('overlay')?.classList.remove('visible');
}

function agruparCarritoPorPuesto() {
  const grupos = {};
  carrito.forEach(item => {
    if (!grupos[item.puesto]) grupos[item.puesto] = [];
    grupos[item.puesto].push(item);
  });
  return Object.entries(grupos).map(([puesto, items]) => ({
    puesto,
    items,
    subtotal: items.reduce((acc, i) => acc + (i.precio * i.cantidad), 0)
  }));
}

function idSeguro(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '-');
}

function abrirModalPago() {
  if (carrito.length === 0) return;
  cerrarCanasta();
  renderizarPagosPorPuesto();
  document.getElementById('modal-pago')?.classList.add('visible');
}
function cerrarModalPago() {
  document.getElementById('modal-pago')?.classList.remove('visible');
}

function renderizarPagosPorPuesto() {
  const grupos = agruparCarritoPorPuesto();
  const contenedorInfo = document.getElementById('lista-pagos-puesto');
  const contenedorArchivos = document.getElementById('contenedor-comprobantes');

  if (contenedorInfo) {
    contenedorInfo.innerHTML = grupos.map(g => {
      const datos = obtenerDatosPago(g.puesto);
      return `
        <div class="tarjeta-pago-puesto">
          <div class="tpp-encabezado">
            <span class="tpp-puesto">${g.puesto}</span>
            <span class="tpp-monto">$${g.subtotal.toLocaleString()} COP</span>
          </div>
          <p>Método de pago: <strong>Transferencia / Nequi</strong></p>
          <p>Número: <strong>${datos.numero}</strong></p>
          <p>A nombre de: <strong>${datos.contacto}</strong></p>
          ${datos.esGeneral ? '<p class="tpp-aviso">⚠️ Este puesto aún no registró su número individual; usa la cuenta general de la feria y conserva tu comprobante.</p>' : ''}
        </div>
      `;
    }).join('');
  }

  if (contenedorArchivos) {
    contenedorArchivos.innerHTML = grupos.map(g => {
      const id = 'comprobante-' + idSeguro(g.puesto);
      return `
        <div class="campo">
          <label for="${id}">Comprobante de pago para ${g.puesto} ($${g.subtotal.toLocaleString()} COP)</label>
          <input type="file" id="${id}" data-puesto="${g.puesto}" class="input-comprobante" accept="image/jpeg,image/png,image/jpg,application/pdf" required>
        </div>
      `;
    }).join('');
  }
}

// Convertidor de archivos File a Base64 para envío seguro
function archivoABase64(archivo) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => resolve(lector.result);
    lector.onerror = error => reject(error);
  });
}

// 7. FORMULARIO Y ENVÍO A BACKEND SEGURO
async function confirmarPago(e) {
  e.preventDefault();

  const btnSubmit = document.getElementById('btn-submit-pago');
  const nombre = document.getElementById('nombre')?.value.trim();
  const telefono = document.getElementById('telefono')?.value.trim();
  const correo = document.getElementById('correo')?.value.trim();

  // Validaciones
  if (!nombre || !telefono || !correo) {
    alert("Por favor diligencie todos los campos requeridos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    alert("Por favor ingrese un correo electrónico válido.");
    return;
  }

  const inputsComprobante = document.querySelectorAll('.input-comprobante');
  const envios = [];
  const tiposPermitidos = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
  const maxTamanoBytes = 5 * 1024 * 1024; // 5MB

  for (let input of inputsComprobante) {
    const archivo = input.files[0];
    const puesto = input.dataset.puesto;

    if (!archivo) {
      alert(`Falta adjuntar el comprobante de pago del puesto "${puesto}".`);
      return;
    }

    if (!tiposPermitidos.includes(archivo.type)) {
      alert(`El archivo del puesto "${puesto}" debe ser JPG, PNG o PDF.`);
      return;
    }

    if (archivo.size > maxTamanoBytes) {
      alert(`El archivo del puesto "${puesto}" supera el límite de 5 MB.`);
      return;
    }

    const base64 = await archivoABase64(archivo);
    const datosPropietario = obtenerDatosPago(puesto);
    const productosDelPuesto = carrito.filter(i => i.puesto === puesto);
    const subtotal = productosDelPuesto.reduce((acc, i) => acc + (i.precio * i.cantidad), 0);

    envios.push({
      puesto: puesto,
      propietario: datosPropietario.contacto,
      correoPropietario: datosPropietario.correo,
      monto: `$${subtotal.toLocaleString()} COP`,
      cliente: {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        lugarEntrega: "Parque Simón Bolívar de Arauca"
      },
      comprobante: {
        nombreArchivo: archivo.name,
        tipo: archivo.type,
        contenidoBase64: base64
      }
    });
  }

  // Estado de Carga
  btnSubmit.disabled = true;
  btnSubmit.textContent = "Enviando comprobante...";

  try {
    // Reemplaza esta URL por la endpoint real de tu backend / Vercel Serverless Function
    const response = await fetch('/api/enviar-comprobante', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ compras: envios })
    });

    if (response.ok) {
      btnSubmit.textContent = "✓ Comprobante enviado correctamente";
      setTimeout(() => {
        alert(`¡Gracias por tu compra, ${nombre}!\nLos comprobantes han sido enviados exitosamente a los propietarios de cada puesto.`);
        carrito = [];
        actualizarCarritoUI();
        document.getElementById('form-pago')?.reset();
        cerrarModalPago();
        btnSubmit.disabled = false;
        btnSubmit.textContent = "Enviar Comprobantes y Finalizar";
      }, 1000);
    } else {
      throw new Error("Respuesta no válida del servidor");
    }
  } catch (err) {
    console.error("Error al enviar comprobante:", err);
    btnSubmit.textContent = "✕ No fue posible enviar el comprobante. Intenta nuevamente.";
    setTimeout(() => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Enviar Comprobantes y Finalizar";
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();
});