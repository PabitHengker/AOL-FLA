// ── Green / Natural Color Palette ─────────────────────────────────────────────
export const G = {
  50:  '#f0faf0',
  100: '#d6f0d6',
  200: '#aadaaa',
  400: '#5ab85a',
  600: '#2e7d32',
  800: '#1b4d1e',
  900: '#0d2b0f',
}

// ── Per-type Book Colors ───────────────────────────────────────────────────────
export const BOOK_COLORS = {
  comic:    { bg: '#e8f5e9', text: '#2e7d32', border: '#a5d6a7', icon: '📖' },
  magazine: { bg: '#f1f8e9', text: '#558b2f', border: '#c5e1a5', icon: '📰' },
  novel:    { bg: '#e0f2f1', text: '#00695c', border: '#80cbc4', icon: '📚' },
}

// ── Log Dot Colors ─────────────────────────────────────────────────────────────
export const LOG_COLORS = {
  info:    '#43a047',
  success: '#2e7d32',
  warn:    '#f9a825',
  error:   '#c62828',
}

// ── Book Catalog (mirrors Java model defaults) ─────────────────────────────────
export const CATALOG = {
  comic: {
    title:   'One Piece',
    pattern: 'ComicFactory → Comic',
    // detail:  'ComicFactory.createBook()',
  },
  magazine: {
    title:   'National Geographic',
    pattern: 'MagazineFactory → MagazineAdapter → Magazine',
    // detail:  'MagazineAdapter.read()',
  },
  novel: {
    title:   'Laskar Pelangi',
    pattern: 'NovelFactory → Novel',
    // detail:  'NovelFactory.createBook()',
  },
}

export const BOOK_TYPES = Object.keys(CATALOG)
export const MAX_PER_TYPE = 5
export const MAX_TOTAL    = 15
