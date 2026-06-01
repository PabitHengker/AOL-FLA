import { useState, useCallback } from 'react'
import { G } from './constants/catalog.js'
import { createBookViaFactory } from './utils/factory.js'
import { readViaProxy }         from './utils/proxy.js'
import { validateCreate, validateRead } from './utils/validation.js'
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

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleAdd = useCallback((selectedType) => {
    const errors = validateCreate(selectedType, books)
    if (Object.keys(errors).length > 0) {
      addLog({ msg: `Validasi gagal: ${Object.values(errors).join('; ')}`, type: 'error' })
      showToast(Object.values(errors)[0], true)
      return { errors }
    }

    const book = createBookViaFactory(selectedType)
    setBooks(prev => [...prev, book])
    addLog({ msg: `${book.title} berhasil ditambahkan via factory`, type: 'success' })
    showToast(`"${book.title}" berhasil ditambahkan!`)
    return { success: true }
  }, [books, addLog, showToast])

  const handleRead = useCallback((id) => {
    const book   = books.find(b => b.id === id)
    const errors = validateRead(book)
    if (Object.keys(errors).length > 0) {
      showToast(Object.values(errors)[0], true)
      return
    }

    const proxyLogs = readViaProxy(book)
    addLog(proxyLogs)
    setBooks(prev => prev.map(b => b.id === id ? { ...b, readCount: b.readCount + 1 } : b))
    showToast(`Membaca: ${book.title}`)
  }, [books, addLog, showToast])

  const handleDelete = useCallback((id) => {
    const book = books.find(b => b.id === id)
    if (!book) return

    setBooks(prev => prev.filter(b => b.id !== id))
    addLog({ msg: `"${book.title}" dihapus dari koleksi`, type: 'warn' })
    showToast(`"${book.title}" dihapus`)
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
        {/* <p style={{ fontSize: 13, color: G[600], marginTop: 4 }}>
          Implementasi Factory · Proxy · Adapter Pattern — React + Validasi
        </p> */}
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
