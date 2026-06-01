import { CATALOG } from '../constants/catalog.js'

/**
 * Proxy Pattern
 * Mirrors Java: BookProxy wraps RealBook, checks access, then delegates read().
 * MagazineAdapter is applied when type === 'magazine'.
 */
export function readViaProxy(book) {
  const logs = []

  // Proxy: access check
  logs.push({
    msg:  `BookProxy → memeriksa akses ke "${book.title}"`,
    type: 'info',
  })

  // Proxy: simulate DB fetch
  logs.push({
    msg:  `BookProxy → mengakses database...`,
    type: 'info',
  })

  // Adapter Pattern for Magazine
  if (book.type === 'magazine') {
    logs.push({
      msg:  `MagazineAdapter.read() → "Reading Magazine: ${book.title}"`,
      type: 'warn',
    })
  } else {
    const typeName = book.type.charAt(0).toUpperCase() + book.type.slice(1)
    logs.push({
      msg:  `${CATALOG[book.type].detail} → "Reading ${typeName}: ${book.title}"`,
      type: 'success',
    })
  }

  return logs
}
