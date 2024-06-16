export function anchorGo() {
  const anchor = window.location.hash.slice(1);

  if (anchor) {
    const findElement = document.getElementById(anchor);

    if (findElement) return window.scrollTo({ top: findElement.offsetTop });
  }
}
