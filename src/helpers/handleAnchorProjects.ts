export function handleAnchorProjects(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
  event.preventDefault();

  const link = event.currentTarget;
  const anchor = new URL(link.href).hash;

  const getAnchor = document.getElementById(anchor.slice(1));

  if (getAnchor) {
    const { children } = getAnchor.children[0].children[3];
    const getShareBtn = children[children.length - 1];

    navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

    getShareBtn.innerHTML = "[Copied]";

    setTimeout(() => {
      getShareBtn.innerHTML = "[Share]";
    }, 2000);
  }
}
