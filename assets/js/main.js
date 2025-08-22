function activarCarruseles() {
  document.querySelectorAll('.carrusel-container').forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const tarjetas = carrusel.querySelectorAll('.tarjeta');

    if (!carrusel || tarjetas.length === 0) return;

    function detectarTarjetaActiva() {
      const centroPantalla = window.innerWidth / 2;

      tarjetas.forEach(tarjeta => {
        const rect = tarjeta.getBoundingClientRect();
        const tarjetaCentro = rect.left + rect.width / 2;
        const distancia = Math.abs(tarjetaCentro - centroPantalla);

        tarjeta.classList.toggle('activa', distancia < rect.width / 2);
      });
    }

    carrusel.addEventListener('scroll', detectarTarjetaActiva);
    window.addEventListener('load', detectarTarjetaActiva);
    window.addEventListener('resize', detectarTarjetaActiva);
  });
}
