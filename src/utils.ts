export const readingTime = (text: string) => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

export const formatDate = (d: Date) =>
  d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

/**
 * Gambar di dalam artikel: gambar yang berdiri sendiri dalam satu paragraf dijadikan
 * <figure class="photo"> dengan keterangan (figcaption) dari teks alternatifnya, dan dimuat
 * belakangan (lazy) supaya halaman tetap cepat.
 * Di Markdown cukup tulis: ![Keterangan gambar](/images/artikel/slug/nama.webp)
 */
export function figureize(html: string): string {
  return html.replace(/<p>\s*(<img\b[^>]*>)\s*<\/p>/g, (_m, img: string) => {
    const alt = (img.match(/\balt="([^"]*)"/) || [])[1] || '';
    let tag = img;
    if (!/\bloading=/.test(tag)) tag = tag.replace(/<img\b/, '<img loading="lazy" decoding="async"');
    return `<figure class="photo">${tag}${alt.trim() ? `<figcaption>${alt}</figcaption>` : ''}</figure>`;
  });
}
