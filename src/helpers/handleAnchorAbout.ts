function handleAnchorAbout(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }, id: string) {
  event.preventDefault();

  const link = event.currentTarget;
  const anchor = new URL(link.href).hash;

  const shareElement = document.getElementById(id);

  if (!shareElement) return;

  navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

  shareElement.innerHTML = "[Copied]";

  setTimeout(() => {
    shareElement.innerHTML = "[Share]";
  }, 2000);
}

export { handleAnchorAbout };
