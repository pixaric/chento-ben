// --- CONFIGURACIÓN ---
    // Reemplaza este número con tu número de WhatsApp real, incluyendo el código de país sin el '+'.
    const WHATSAPP_NUMBER = '+34684792506'; 

    // Lista de excursiones. Puedes agregar, editar o eliminar elementos de esta lista.
    const excursions = [
        {
            name: 'Trekking en la Montaña',
            description: 'Una emocionante caminata por senderos de montaña con vistas panorámicas increíbles. Ideal para amantes de la naturaleza y la fotografía.',
            image: 'assets/images/barco/1.jpg',
            category: 'Excursiones',
            price: 45,
            originalPrice: 50,
            recommended: true
        },
        {
            name: 'Kayak en Lago Escondido',
            description: 'Rema por las aguas cristalinas de un lago virgen rodeado de bosques nativos. Una experiencia de paz y conexión total.',
            image: 'kayak.png',
            category: 'Barco',
            price: 45,
            originalPrice: 50,

            recommended: false
        },
        {
            name: 'Paseo en Velero al Atardecer',
            description: 'Disfruta de una tarde mágica navegando a vela mientras el sol se pone en el horizonte. Incluye bebidas y snacks.',
            image: 'velero-atardecer.png',
            category: 'Velero',
            price: 90,
            originalPrice: 150,
            recommended: true
        },
        {
            name: 'Tour Histórico por la Ciudad',
            description: 'Descubre los secretos y la rica historia de la ciudad con nuestro tour guiado. Visita monumentos y lugares emblemáticos.',
            image: 'city-tour.png',
            category: 'Excursiones',
            price: 35,
            originalPrice: 50,
            recommended: false
        },
        {
            name: 'Buceo en Arrecife de Coral',
            description: 'Sumérgete en un mundo submarino lleno de color. Explora un arrecife vibrante con abundante vida marina. Equipo incluido.',
            image: 'scuba-diving.png',
            category: 'Agua',
            price: 80,
            originalPrice: 100,
            recommended: true
        },
        {
            name: 'Aventura en Buggy por Dunas',
            description: 'Siente la adrenalina recorriendo dunas de arena en nuestros potentes buggies. Una experiencia off-road inolvidable.',
            image: 'buggy-dunas.png',
            category: 'Buggy',
            price: 75,
            originalPrice: 50,
            recommended: false
        },
        {
            name: 'Ruta en Quad por la Selva',
            description: 'Explora senderos exóticos y descubre cascadas escondidas en una emocionante ruta guiada en quad. Pura aventura.',
            image: 'quad-selva.png',
            category: 'Quad',
            price: 70,
            originalPrice: 50,
            recommended: false
        },
        {
            name: 'Adrenalina en Jetsky',
            description: 'Siente la velocidad y la libertad del mar abierto sobre una de nuestras modernas motos de agua. Diversión garantizada.',
            image: 'jetsky-mar.png',
            category: 'Jetsky',
            price: 60,
            originalPrice: 70,
            recommended: true
        }
    ];
    // --- FIN DE LA CONFIGURACIÓN ---