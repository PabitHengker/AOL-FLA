import { CATALOG } from '../constants/catalog.js'

/**
 * Factory Pattern
 * Mirrors Java: BookFactory → ComicFactory / NovelFactory / MagazineFactory
 * Each factory calls createBook() and returns a ReadContent object.
 */
export function createBookViaFactory(type) {
  if (!CATALOG[type]) throw new Error(`Unknown book type: ${type}`)

  // Simulate factory instantiation
  return {
    id:        Date.now(),
    type,
    title:     CATALOG[type].title,
    readCount: 0,
    createdAt: new Date().toISOString(),
  }
}
