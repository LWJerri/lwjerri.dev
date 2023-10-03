export function handleAnchorAbout(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }, id: string) {
  event.preventDefault();

  const anchor = new URL(event.currentTarget.href).hash;

  const getAnchor = document.getElementById(id);

  if (getAnchor) {
    navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

    getAnchor.innerHTML = "[Copied]";

    setTimeout(() => {
      getAnchor.innerHTML = "[#]";
    }, 2000);
  }
}
