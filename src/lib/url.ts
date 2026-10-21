// Bouwt een link die werkt met en zonder `base` (GitHub Pages vs. eigen domein).
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
