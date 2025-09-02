document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURACIÓN ---
    // Reemplaza este número con tu número de WhatsApp real, incluyendo el código de país sin el '+'.
    const WHATSAPP_NUMBER = '5491112345678'; 

    // Lista de excursiones. Puedes agregar, editar o eliminar elementos de esta lista.
    const excursions = [
        {
            name: 'Trekking en la Montaña',
            description: 'Una emocionante caminata por senderos de montaña con vistas panorámicas increíbles. Ideal para amantes de la naturaleza y la fotografía.',
            image: 'trekking.png',
            category: 'Excursiones',
            price: 55,
            originalPrice: 65,
            recommended: true,
            schedule: "Salidas 8:00 AM, Regreso 4:00 PM",
            activities: ["Senderismo guiado", "Vistas panorámicas", "Picnic en la cumbre"],
            
            
            origin: { lat: 28.0873, lng: -16.6624 } ,   // punto de partida
        },
        {
            name: 'Kayak en Lago Escondido',
            description: 'Rema por las aguas cristalinas de un lago virgen rodeado de bosques nativos. Una experiencia de paz y conexión total.',
            image: 'kayak.png',
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
            image: 'velero-atardecer.png',
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
            image: 'city-tour.png',
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
            image: 'scuba-diving.png',
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
            image: 'buggy-dunas.png',
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
            image: 'quad-selva.png',
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
            image: 'jetsky-mar.png',
            category: 'Jetsky',
            price: 60,
            originalPrice: 70,
            recommended: true,
            schedule: "Alquiler de 30 o 60 minutos",
            activities: ["Circuito de velocidad", "Paseo libre", "Monitor de seguridad"],
            mapLink: "https://www.google.com/maps/search/?api=1&query=jetski+rental+beach"
        }
    ];
    // --- FIN DE LA CONFIGURACIÓN ---

    const excursionsContainer = document.getElementById('excursions-container');
    const recommendedContainer = document.getElementById('recommended-container');
    const filterContainer = document.getElementById('filter-container');

    const createCard = (excursion) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.category = excursion.category;

        const message = `Hola! Quiero reservar la excursión "${excursion.name}". ¿Podrían darme más información?`;
        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        
        let priceHTML = '';
        if (excursion.originalPrice) {
            const discount = Math.round(((excursion.originalPrice - excursion.price) / excursion.originalPrice) * 100);
            priceHTML = `
                <div class="price-container">
                    <span class="current-price">€${excursion.price}</span>
                    <span class="original-price">€${excursion.originalPrice}</span>
                    <span class="discount-badge">${discount}% OFF</span>
                </div>
            `;
        } else {
            priceHTML = `
                <div class="price-container">
                    <span class="current-price">€${excursion.price}</span>
                </div>
            `;
        }
        
let mapLink = '#';
if (excursion.origin) {
  mapLink = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${excursion.origin.lat},${excursion.origin.lng}&travelmode=driving`;

}

        

        card.innerHTML = `
            ${excursion.recommended ? '<div class="card-badge">Recomendado</div>' : ''}
            <img src="${excursion.image}" alt="${excursion.name}" class="card-img">
            <div class="card-content">
                <h3>${excursion.name}</h3>
                <p>${excursion.description}</p>
                <div class="card-details">
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${excursion.schedule}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-tasks"></i>
                        <ul class="activities-list">
                            ${excursion.activities.map(activity => `<li>${activity}</li>`).join('')}
                        </ul>
                    </div>
<div class="detail-item">
  <a href="${mapLink}" target="_blank" rel="noopener noreferrer" class="map-link">
    <i class="fas fa-directions"></i> Cómo llegar al punto de inicio
  </a>
</div>
                </div>
                ${priceHTML}
                <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="whatsapp-button">
                    <i class="fab fa-whatsapp"></i> Reservar por WhatsApp
                </a>
            </div>
        `;
        return card;
    };

    
    // --- iniciar mapas ---

    function initMaps() {
  excursions.forEach(excursion => {
    const mapId = `map-${excursion.name.replace(/\s+/g, '-')}`;
    const mapElement = document.getElementById(mapId);
    if (mapElement && excursion.location) {
      const map = new google.maps.Map(mapElement, {
        zoom: 14,
        center: excursion.location
      });

      new google.maps.Marker({
        position: excursion.location,
        map: map,
        title: excursion.name
      });
    }
  });
}
    // --- RENDERIZAR TARJETAS ---
    const renderCards = () => {
        excursionsContainer.innerHTML = '';
        recommendedContainer.innerHTML = '';
        
        excursions.forEach(excursion => {
            const card = createCard(excursion);
            excursionsContainer.appendChild(card);
            if (excursion.recommended) {
                const recommendedCard = createCard(excursion);
                recommendedContainer.appendChild(recommendedCard);
            }
        });
    };

    // --- LÓGICA DE FILTROS ---
    const setupFilters = () => {
        const categories = ['Todos', ...new Set(excursions.map(ex => ex.category))];
        filterContainer.innerHTML = categories.map(category => 
            `<button class="filter-btn ${category === 'Todos' ? 'active' : ''}" data-filter="${category}">${category}</button>`
        ).join('');

        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const filter = e.target.dataset.filter;
                
                // Actualizar botón activo
                filterContainer.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');

                // Filtrar tarjetas
                const cards = excursionsContainer.querySelectorAll('.card');
                cards.forEach(card => {
                    if (filter === 'Todos' || card.dataset.category === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    };

    renderCards();
    setupFilters();

    // --- ANIMACIÓN DE SCROLL ---
    const allCards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que es visible
            }
        });
    }, {
        threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
    });

    allCards.forEach(card => {
        observer.observe(card);
    });
});