document.addEventListener('DOMContentLoaded', () => {
  // --- CONFIGURACIÓN ---
  const WHATSAPP_NUMBER = '5491112345678';

  // --- ELEMENTOS DEL DOM ---
  const excursionsContainer = document.getElementById('excursions-container');
  const recommendedContainer = document.getElementById('recommended-container');
  const filterContainer = document.getElementById('filter-container');

  let excursions = [];

  // --- CARGAR EXCURSIONES DESDE GOOGLE SHEETS API ---
  fetch('https://script.google.com/macros/s/AKfycbzTHC6MZv-_dMOu40Ah1AdDHfPCHuNVoB8X3DpVEodWfAPipGkvBrsPMISrry6eBuJ0/exec')
    .then(response => response.json())
    .then(data => {
      excursions = data.map(item => ({
        ...item,
        price: parseFloat(item.price),
        originalPrice: parseFloat(item.originalPrice) || null,
        recommended: item.recommended === true || item.recommended === "true",
        activities: Array.isArray(item.activities)
          ? item.activities
          : typeof item.activities === "string"
            ? item.activities.split(',').map(a => a.trim())
            : [],
        origin: item.origin_lat && item.origin_lng
          ? { lat: item.origin_lat, lng: item.origin_lng }
          : null
      }));
      renderCards();
      setupFilters();
    })
    .catch(error => {
      console.error("Error al cargar excursiones:", error);
      excursionsContainer.innerHTML = '<p style="color:red;">No se pudieron cargar las excursiones.</p>';
    });

  // --- CREAR TARJETA ---
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

    // Animación de scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => observer.observe(card));
  };

  // --- FILTROS POR CATEGORÍA ---
  const setupFilters = () => {
    const categories = ['Todos', ...new Set(excursions.map(ex => ex.category))];
    filterContainer.innerHTML = categories.map(category =>
      `<button class="filter-btn ${category === 'Todos' ? 'active' : ''}" data-filter="${category}">${category}</button>`
    ).join('');

    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        const filter = e.target.dataset.filter;

        filterContainer.querySelector('.filter-btn.active')?.classList.remove('active');
        e.target.classList.add('active');

        const cards = excursionsContainer.querySelectorAll('.card');
        cards.forEach(card => {
          card.style.display = (filter === 'Todos' || card.dataset.category === filter) ? 'flex' : 'none';
        });
      }
    });
  };
});