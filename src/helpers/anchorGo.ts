function anchorGo() {
  const anchor = window.location.hash.slice(1);

  if (!anchor) return;

  const anchorElement = document.getElementById(anchor);

  if (anchorElement) return window.scrollTo({ top: anchorElement.offsetTop });
}

export { anchorGo };
