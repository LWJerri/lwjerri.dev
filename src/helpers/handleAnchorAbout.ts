export function handleAnchorAbout(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }, id: string) {
  event.preventDefault();

  const link = event.currentTarget;
  const anchor = new URL(link.href).hash;

  const findElement = document.getElementById(id);

  if (findElement) {
    navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

    findElement.innerHTML = "[Copied]";

    setTimeout(() => {
      findElement.innerHTML = "[#]";
    }, 2000);
  }
}
