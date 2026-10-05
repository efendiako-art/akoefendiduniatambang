export const readingTime = (text: string) => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

export const formatDate = (d: Date) =>
  d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
