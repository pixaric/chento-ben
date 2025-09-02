document.addEventListener('DOMContentLoaded', () => {
    

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

        card.innerHTML = `
            ${excursion.recommended ? '<div class="card-badge">Recomendado</div>' : ''}
            <img src="${excursion.image}" alt="${excursion.name}" class="card-img">
            <div class="card-content">
                <h3>${excursion.name}</h3>
                <p>${excursion.description}</p>
                ${priceHTML}
                <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="whatsapp-button">
                    <i class="fab fa-whatsapp"></i> Reservar por WhatsApp
                </a>
            </div>
        `;
        return card;
    };

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