export function scrollToHash(hash?: string) {
  const id = (hash ?? window.location.hash).slice(1);

  if (!id) return;

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export async function copyAnchorShareUrl(id: string, pathname = window.location.pathname) {
  await navigator.clipboard.writeText(`${origin}${pathname}#${id}`);
}
