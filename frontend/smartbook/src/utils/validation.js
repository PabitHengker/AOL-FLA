import { MAX_PER_TYPE, MAX_TOTAL } from '../constants/catalog.js'

/**
 * Validate before creating a new book.
 * Returns an object with field-level error messages.
 */
export function validateCreate(selectedType, books) {
  const errors = {}

  if (!selectedType) {
    errors.type = 'Pilih tipe buku terlebih dahulu.'
    return errors
  }

  const countOfType = books.filter(b => b.type === selectedType).length
  if (countOfType >= MAX_PER_TYPE) {
    errors.type = `Maksimal ${MAX_PER_TYPE} buku per tipe sudah tercapai.`
  }

  if (books.length >= MAX_TOTAL) {
    errors.global = `Kapasitas maksimal ${MAX_TOTAL} buku sudah penuh.`
  }

  return errors
}

/**
 * Validate before reading a book.
 */
export function validateRead(book) {
  const errors = {}
  if (!book) errors.book = 'Buku tidak ditemukan.'
  return errors
}
