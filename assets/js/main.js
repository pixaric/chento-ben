function activarCarruseles() {
  document.querySelectorAll('.carrusel-container').forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const tarjetas = carrusel.querySelectorAll('.tarjeta');

    if (!carrusel || tarjetas.length === 0) return;

    // Detectar la tarjeta más cercana al centro de la pantalla
    function detectarTarjetaActiva() {
      const centroPantalla = window.innerWidth / 2;

      tarjetas.forEach(tarjeta => {
        const rect = tarjeta.getBoundingClientRect();
        const tarjetaCentro = rect.left + rect.width / 2;
        const distancia = Math.abs(tarjetaCentro - centroPantalla);

        tarjeta.classList.toggle('activa', distancia < rect.width / 2);
      });
    }

    // Activar detección al hacer scroll
    carrusel.addEventListener('scroll', () => {
      detectarTarjetaActiva();
    });

    // Activar detección al cargar y al redimensionar
    window.addEventListener('load', detectarTarjetaActiva);
    window.addEventListener('resize', detectarTarjetaActiva);
  });
}
