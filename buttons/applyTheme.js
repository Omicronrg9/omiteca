(function () {
      function applyTheme() {
        try {
          const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          const text = document.querySelector('.typewriter-text');

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
          document.body.style.background = '#ffffff';
          document.querySelector('.typewriter-text').style.color = '#1a1a1a';
        }
      }

      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(applyTheme);
      }

      applyTheme();
    })();