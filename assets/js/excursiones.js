// Lista de excursiones. Puedes agregar, editar o eliminar elementos de esta lista.
    const excursions = [
    {
        name: 'Trekking en la Montaña',
        description: 'Una emocionante caminata por senderos de montaña con vistas panorámicas increíbles. Ideal para amantes de la naturaleza y la fotografía.',
        image: 'assets/images/barco/1.jpg',
        category: 'Excursiones',
        price: 55,
        originalPrice: 60,
        recommended: true,
        schedule: "Salidas 8:00 AM, Regreso 4:00 PM",
        activities: ["Senderismo guiado", "Vistas panorámicas", "Picnic en la cumbre"],
        origin: { lat: 28.0873, lng: -16.6624 }
    },
    {
        name: 'Kayak en Lago Escondido',
        description: 'Rema por las aguas cristalinas de un lago virgen rodeado de bosques nativos. Una experiencia de paz y conexión total.',
        image: 'assets/images/barco/2.jpg',
        category: 'Barco',
        price: 45,
        recommended: false,
        schedule: "Turnos: 10AM / 2PM (Duración: 3hs)",
        activities: ["Paseo en kayak", "Observación de aves", "Natación en el lago"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=hidden+lake+kayak"
    },
    {
        name: 'Paseo en Velero al Atardecer',
        description: 'Disfruta de una tarde mágica navegando a vela mientras el sol se pone en el horizonte. Incluye bebidas y snacks.',
        image: 'assets/images/barco/3.jpg',
        category: 'Velero',
        price: 90,
        recommended: true,
        schedule: "Salida 6:00 PM, Regreso 9:00 PM",
        activities: ["Navegación a vela", "Bebidas y snacks", "Vistas del atardecer"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=marina"
    },
    {
        name: 'Tour Histórico por la Ciudad',
        description: 'Descubre los secretos y la rica historia de la ciudad con nuestro tour guiado. Visita monumentos y lugares emblemáticos.',
        image: 'assets/images/barco/4.jpg',
        category: 'Excursiones',
        price: 35,
        recommended: false,
        schedule: "Todos los días: 10:00 AM y 3:00 PM",
        activities: ["Recorrido a pie", "Visita a monumentos", "Guía profesional"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=historic+city+center"
    },
    {
        name: 'Buceo en Arrecife de Coral',
        description: 'Sumérgete en un mundo submarino lleno de color. Explora un arrecife vibrante con abundante vida marina. Equipo incluido.',
        image: 'assets/images/barco/6.jpg',
        category: 'Agua',
        price: 80,
        originalPrice: 100,
        recommended: true,
        schedule: "Turnos de inmersión: 9AM / 1PM",
        activities: ["Clase de iniciación", "Inmersión guiada", "Fotografía submarina"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=coral+reef+diving+spot"
    },
    {
        name: 'Aventura en Buggy por Dunas',
        description: 'Siente la adrenalina recorriendo dunas de arena en nuestros potentes buggies. Una experiencia off-road inolvidable.',
        image: 'assets/images/buggy-dunas.png',
        category: 'Buggy',
        price: 75,
        recommended: false,
        schedule: "Alquiler por horas, de 10AM a 6PM",
        activities: ["Conducción en dunas", "Paradas para fotos", "Briefing de seguridad"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=sand+dunes+buggy"
    },
    {
        name: 'Ruta en Quad por la Selva',
        description: 'Explora senderos exóticos y descubre cascadas escondidas en una emocionante ruta guiada en quad. Pura aventura.',
        image: 'assets/images/quad-selva.png',
        category: 'Quad',
        price: 70,
        recommended: false,
        schedule: "Tours de 2hs. Salidas cada hora.",
        activities: ["Ruta guiada en quad", "Visita a cascada", "Puntos de vista"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=jungle+quad+tour"
    },
    {
        name: 'Adrenalina en Jetsky',
        description: 'Siente la velocidad y la libertad del mar abierto sobre una de nuestras modernas motos de agua. Diversión garantizada.',
        image: 'assets/images/jetsky-mar.png',
        category: 'Jetsky',
        price: 60,
        originalPrice: 70,
        recommended: true,
        schedule: "Alquiler de 30 o 60 minutos",
        activities: ["Circuito de velocidad", "Paseo libre", "Monitor de seguridad"],
        mapLink: "https://www.google.com/maps/search/?api=1&query=jetski+rental+beach"
    }
];