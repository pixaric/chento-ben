function activarCarruseles() {
  document.querySelectorAll('.carrusel-container').forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const izquierda = container.querySelector('.flecha.izquierda');
    const derecha = container.querySelector('.flecha.derecha');

    if (!carrusel) return;

    // === Navegación con flechas (solo si existen) ===
    if (izquierda && derecha) {
      izquierda.addEventListener('click', () => {
        carrusel.scrollBy({ left: -300, behavior: 'smooth' });
      });

      derecha.addEventListener('click', () => {
        const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
        const currentScroll = carrusel.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          carrusel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carrusel.scrollBy({ left: 300, behavior: 'smooth' });
        }
      });
    }

    // === Autoplay infinito ===
    let intervalo = setInterval(() => {
      const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
      const currentScroll = carrusel.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        carrusel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carrusel.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 4000);

    // === Pausar autoplay al pasar el cursor ===
    carrusel.addEventListener('mouseenter', () => clearInterval(intervalo));
    carrusel.addEventListener('mouseleave', () => {
      intervalo = setInterval(() => {
        const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
        const currentScroll = carrusel.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          carrusel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carrusel.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 4000);
    });
  });
}
