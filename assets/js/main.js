function activarCarruseles() {
  document.querySelectorAll('.carrusel-container').forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const tarjetas = carrusel.querySelectorAll('.tarjeta');
    let intervalo;

    
    // === Detectar tarjeta centrada y aplicar clase activa ===
    carrusel.addEventListener('scroll', () => {
      let centro = carrusel.scrollLeft + carrusel.clientWidth / 2;

      tarjetas.forEach(tarjeta => {
        const rect = tarjeta.getBoundingClientRect();
        const tarjetaCentro = rect.left + rect.width / 2;

        tarjeta.classList.toggle('activa', Math.abs(tarjetaCentro - window.innerWidth / 2) < rect.width / 2);
      });
    });

    
  });
}
