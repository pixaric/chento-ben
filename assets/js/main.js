function activarCarruseles() {
  document.querySelectorAll('.carrusel-container').forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const tarjetas = carrusel.querySelectorAll('.tarjeta');
    let intervalo;

    // === Autoplay infinito ===
    function iniciarAutoplay() {
      intervalo = setInterval(() => {
        const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
        const currentScroll = carrusel.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          carrusel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carrusel.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 4000);
    }

    iniciarAutoplay();

    // === Pausar autoplay al tocar una tarjeta ===
    tarjetas.forEach(tarjeta => {
      tarjeta.addEventListener('click', () => clearInterval(intervalo));
    });

    // === Detectar tarjeta centrada y aplicar clase activa ===
    carrusel.addEventListener('scroll', () => {
      let centro = carrusel.scrollLeft + carrusel.clientWidth / 2;

      tarjetas.forEach(tarjeta => {
        const rect = tarjeta.getBoundingClientRect();
        const tarjetaCentro = rect.left + rect.width / 2;

        tarjeta.classList.toggle('activa', Math.abs(tarjetaCentro - window.innerWidth / 2) < rect.width / 2);
      });
    });

    // === Reactivar autoplay al salir de la tarjeta activa ===
    carrusel.addEventListener('scrollend', () => {
      if (!carrusel.querySelector('.tarjeta.activa')) {
        iniciarAutoplay();
      }
    });
  });
}
