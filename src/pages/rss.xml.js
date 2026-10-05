import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const posts = await getCollection('artikel', ({ data }) => !data.draft);
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/artikel/${p.id}/` })),
  });
}
