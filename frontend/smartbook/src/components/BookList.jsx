import { G } from '../constants/catalog.js'
import BookItem from './BookItem.jsx'
import Section from './Section.jsx'

export default function BookList({ books, onRead, onDelete }) {
  return (
    <Section title={`Koleksi buku (${books.length})`}>
      {books.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding:   '2rem 1rem',
          color:     G[400],
          fontSize:  14,
        }}>
          <div style={{ fontSize: 30, marginBottom: 8 }}>📭</div>
          Belum ada buku. Buat buku terlebih dahulu!
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {books.map(book => (
            <BookItem
              key={book.id}
              book={book}
              onRead={onRead}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </Section>
  )
}
