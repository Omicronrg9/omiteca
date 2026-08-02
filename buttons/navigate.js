function navigate(id) {
  const prefix = getPrefixFromFilename();

  if (!prefix || !window.LINKS || !window.LINKS[prefix]) {
    console.error('No se pudo resolver el prefijo o no existe en window.LINKS:', prefix);
    return;
  }

  const target = window.LINKS[prefix];

  if (id === 'pdf' && target.PDF) {
    window.open(target.PDF, '_blank')?.focus();
  } else if (id === 'mp3' && target.MP3) {
    window.open(target.MP3, '_blank')?.focus();
  } else {
    console.warn('Tipo de navegación no válido o enlace inexistente:', id);
  }
}

window.navigate = navigate;