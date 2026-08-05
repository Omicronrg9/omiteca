(function () {
  // Hola, esta función demuestra que la IA todavía me da papas en JS.
  // Aquí definimos el estilo para cada bloque de texto.
  // Si mañana quiero meter otra clase, añado uno a la lista y fuera. Ojo con las comas eh.
  const themes = [
    {
      selector: '.typewriter-text',
      darkColor: '#e8e8ff',
      lightColor: '#1a1a6e',
      darkShadow: `
        0 0 6px rgba(180, 180, 255, 1),
        0 0 15px rgba(180, 180, 255, 0.8),
        0 0 35px rgba(180, 180, 255, 0.5)
      `,
      lightShadow: `
        0 0 6px rgba(80, 80, 255, 0.7),
        0 0 15px rgba(80, 80, 255, 0.4),
        0 0 35px rgba(80, 80, 255, 0.2)
      `
    },
    {
      selector: '.subsection',
      darkColor: '#e8e8ff',
      lightColor: '#1a1a6e',
      darkShadow: `
        0 0 3px rgba(180, 180, 255, 0.5),
        0 0 8px rgba(180, 180, 255, 0.25)
      `,
      lightShadow: `
        0 0 2px rgba(80, 80, 255, 0.35),
        0 0 6px rgba(80, 80, 255, 0.15)
      `
    }
  ];

  function applyTheme() {
    try {
      // Miramos si el sistema está en modo oscuro.
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const isDark = mq.matches;

      // Fondo general de la página.
      document.body.style.background = isDark ? '#191919' : '#ffffff';

      // Recorremos cada bloque y le aplicamos su estilo.
      themes.forEach((theme) => {
        const el = document.querySelector(theme.selector);
        if (!el) return; // Si no existe en esta página, pues a otra cosa.

        el.style.color = isDark ? theme.darkColor : theme.lightColor;
        el.style.textShadow = isDark ? theme.darkShadow : theme.lightShadow;
      });
    } catch (e) {
      // Si algo se tuerce, al menos dejamos un fondo claro y algo rojo para saber que algo falla amigos.
      document.body.style.background = '#aa5555';
    }
  }

  // Si cambia el modo del sistema, reaplicamos el tema.
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) {
      mq.addEventListener('change', applyTheme);
    } else if (mq.addListener) {
      mq.addListener(applyTheme);
    }
  }

  // Si el DOM aún no está listo, esperamos.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
  } else {
    applyTheme();
  }
})();