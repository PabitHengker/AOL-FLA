import { useState } from 'react'
import { G, BOOK_COLORS, CATALOG } from '../constants/catalog.js'

export default function BookItem({ book, onRead, onDelete }) {
  const c = BOOK_COLORS[book.type]
  const [hoverRead,   setHoverRead]   = useState(false)
  const [hoverDelete, setHoverDelete] = useState(false)

  return (
    <div style={{
      display:      'flex',
      alignItems:   'center',
      gap:          12,
      padding:      '10px 12px',
      border:       `1px solid ${G[200]}`,
      borderRadius: 10,
      background:   G[50],
      transition:   'box-shadow 0.15s',
    }}>
      {/* Icon */}
      <div style={{
        width:          36,
        height:         36,
        borderRadius:   8,
        background:     c.bg,
        border:         `1px solid ${c.border}`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontSize:       16,
        flexShrink:     0,
      }}>
        {c.icon}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize:     14,
          fontWeight:   600,
          color:        G[800],
          whiteSpace:   'nowrap',
          overflow:     'hidden',
          textOverflow: 'ellipsis',
        }}>
          {book.title}
        </div>
        <div style={{ fontSize: 11, color: G[600], marginTop: 1 }}>
          {CATALOG[book.type].pattern} · dibaca {book.readCount}×
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(book.id)}
        onMouseEnter={() => setHoverDelete(true)}
        onMouseLeave={() => setHoverDelete(false)}
        title="Hapus buku"
        style={{
          padding:      '5px 8px',
          border:       'none',
          borderRadius: 8,
          background:   hoverDelete ? '#ffebee' : 'transparent',
          cursor:       'pointer',
          fontSize:     13,
          transition:   'all 0.15s',
        }}
      >
        🗑
      </button>

      {/* Read Button */}
      <button
        onClick={() => onRead(book.id)}
        onMouseEnter={() => setHoverRead(true)}
        onMouseLeave={() => setHoverRead(false)}
        style={{
          padding:      '5px 12px',
          borderRadius: 8,
          cursor:       'pointer',
          fontSize:     12,
          fontWeight:   600,
          whiteSpace:   'nowrap',
          transition:   'all 0.15s',
          border:       hoverRead ? `1px solid ${G[400]}` : `1px solid ${G[200]}`,
          background:   hoverRead ? G[400] : 'white',
          color:        hoverRead ? 'white' : G[600],
        }}
      >
        ▶ Baca
      </button>
    </div>
  )
}
