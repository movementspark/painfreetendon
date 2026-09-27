export const prerender = true;

const SITE = 'https://painfreetendon.com';

function toRoute(file: string) {
  let route = file
    .replace(/^\.\//, '')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '');

  if (route === 'index' || route === '') return '/';
  return `/${route}`;
}

export async function GET() {
  const pageModules = import.meta.glob('./**/*.astro');

  const routes = Object.keys(pageModules)
    .map(toRoute)
    .filter((route) => !route.includes('['))
    .filter((route) => route !== '/404')
    .sort();

  const urls = routes
    .map((route) => `  <url><loc>${SITE}${route}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
