(function () {
  function applyTheme() {
    try {
      const text = document.querySelector('.typewriter-text');
      if (!text) return;

      const isDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      document.body.style.background = isDark ? '#191919' : '#ffffff';

      if (isDark) {
        text.style.color = '#e8e8ff';
        text.style.textShadow = `
          0 0 6px rgba(180, 180, 255, 1),
          0 0 15px rgba(180, 180, 255, 0.8),
          0 0 35px rgba(180, 180, 255, 0.5)
        `;
      } else {
        text.style.color = '#1a1a6e';
        text.style.textShadow = `
          0 0 6px rgba(80, 80, 255, 0.7),
          0 0 15px rgba(80, 80, 255, 0.4),
          0 0 35px rgba(80, 80, 255, 0.2)
        `;
      }
    } catch (e) {
      const text = document.querySelector('.typewriter-text');
      if (text) {
        document.body.style.background = '#ffffff';
        text.style.color = '#1a1a1a';
      }
    }
  }

  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    // API moderna
    if (mq.addEventListener) {
      mq.addEventListener('change', applyTheme); // [web:73][web:78]
    } else if (mq.addListener) {
      // Fallback para navegadores antiguos
      mq.addListener(applyTheme);                // [web:76][web:80]
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
  } else {
    applyTheme();
  }
})();
