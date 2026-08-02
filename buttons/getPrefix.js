function getPrefixFromFilename() {
  const filename = decodeURIComponent(
    window.location.pathname.split('/').pop() || ''
  );

  const match = filename.match(/^(A\d+)\s*-/);
  return match ? match[1] : null;
}