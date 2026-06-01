import { useState, useCallback, useEffect } from 'react'
import { G } from './constants/catalog.js'
import { nowTime } from './utils/time.js'

import StatCard    from './components/StatCard.jsx'
import BookForm    from './components/BookForm.jsx'
import BookList    from './components/BookList.jsx'
import ActivityLog from './components/ActivityLog.jsx'
import Toast       from './components/Toast.jsx'

export default function App() {
  const [books,  setBooks]  = useState([])
  const [logs,   setLogs]   = useState([
    { msg: 'Sistem SmartBook siap digunakan', type: 'info', time: nowTime() },
  ])
  const [toast, setToast] = useState(null)

  // ── Helpers ────────────────────────────────────────────────────────────────
  const addLog = useCallback((entries) => {
    const stamped = (Array.isArray(entries) ? entries : [entries])
      .map(e => ({ ...e, time: nowTime() }))
    setLogs(prev => [...prev, ...stamped])
  }, [])

  const showToast = useCallback((msg, err = false) => {
    setToast({ msg, err })
    setTimeout(() => setToast(null), 2500)
  }, [])

  const fetchBooks = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:8080/api/books')
      const data = await res.json()
      setBooks(data)
    } catch (err) {
      console.error(err)
      addLog({ msg: 'Gagal memuat buku dari backend.', type: 'error' })
    }
  }, [addLog])

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleAdd = useCallback(async (type, title) => {
    if (!type) return { errors: { type: 'Pilih jenis buku' } }
    if (!title || title.trim() === '') return { errors: { global: 'Judul buku tidak boleh kosong' } }

    try {
      const res = await fetch('http://localhost:8080/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, title }),
      })
      if (!res.ok) throw new Error('Gagal menambah buku')
      const book = await res.json()
      setBooks(prev => [...prev, book])
      addLog({ msg: `${book.title} berhasil ditambahkan via API`, type: 'success' })
      showToast(`"${book.title}" berhasil ditambahkan!`)
      return { success: true }
    } catch (err) {
      console.error(err)
      addLog({ msg: 'Gagal menambah buku.', type: 'error' })
      showToast('Gagal menambah buku', true)
      return { errors: { api: 'Gagal menambah buku' } }
    }
  }, [addLog, showToast])

  const handleRead = useCallback(async (id) => {
    const book = books.find(b => b.id === id)
    try {
      const res = await fetch(`http://localhost:8080/api/books/${id}/read`, {
        method: 'POST'
      })
      if (!res.ok) throw new Error('Gagal membaca buku')
      const updatedBook = await res.json()
      setBooks(prev => prev.map(b => b.id === id ? updatedBook : b))
      addLog({ msg: `Membaca ${book.title} via Backend Proxy`, type: 'info' })
      showToast(`Membaca: ${book.title}`)
    } catch (err) {
      console.error(err)
      addLog({ msg: 'Gagal membaca buku.', type: 'error' })
      showToast('Gagal membaca buku', true)
    }
  }, [books, addLog, showToast])

  const handleDelete = useCallback(async (id) => {
    const book = books.find(b => b.id === id)
    if (!book) return

    try {
      const res = await fetch(`http://localhost:8080/api/books/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error('Gagal menghapus buku')
      setBooks(prev => prev.filter(b => b.id !== id))
      addLog({ msg: `"${book.title}" dihapus dari koleksi`, type: 'warn' })
      showToast(`"${book.title}" dihapus`)
    } catch (err) {
      console.error(err)
      addLog({ msg: 'Gagal menghapus buku.', type: 'error' })
      showToast('Gagal menghapus buku', true)
    }
  }, [books, addLog, showToast])

  // ── Derived stats ──────────────────────────────────────────────────────────
  const totalRead   = books.reduce((s, b) => s + b.readCount, 0)
  const uniqueTypes = new Set(books.map(b => b.type)).size

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{
      maxWidth:  640,
      margin:    '0 auto',
      padding:   '1.5rem 1rem',
      minHeight: '100vh',
    }}>
      {/* Header */}
      <div style={{
        marginBottom:  '1.5rem',
        padding:       '1.25rem 1.5rem',
        background:    'white',
        border:        `1px solid ${G[200]}`,
        borderRadius:  14,
        borderLeft:    `5px solid ${G[400]}`,
      }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: G[800], margin: 0 }}>
          🌿 SmartBook System
        </h1>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
        <StatCard label="Total buku"    value={books.length} />
        <StatCard label="Total dibaca"  value={totalRead}   accent={G[400]} />
        <StatCard label="Tipe berbeda"  value={uniqueTypes} accent="#00897b" />
      </div>

      {/* Form */}
      <BookForm books={books} onAdd={handleAdd} />

      {/* Book List */}
      <BookList books={books} onRead={handleRead} onDelete={handleDelete} />

      {/* Log */}
      <ActivityLog logs={logs} />

      {/* Toast */}
      <Toast toast={toast} />
    </div>
  )
}
