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

];