export function handleAnchorProjects(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
  event.preventDefault();

  const link = event.currentTarget;
  const anchor = new URL(link.href).hash;

  const findByAnchor = document.getElementById(anchor.slice(1));

  if (findByAnchor) {
    const { children } = findByAnchor.children[0].children[3];
    const findShareBtn = children[children.length - 1];

    navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

    findShareBtn.innerHTML = "[Copied]";

    setTimeout(() => {
      findShareBtn.innerHTML = "[Share]";
    }, 2000);
  }
}
