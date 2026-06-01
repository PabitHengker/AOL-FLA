import { G, BOOK_COLORS, CATALOG } from '../constants/catalog.js'

export default function TypeCard({ type, selected, onClick }) {
  const c   = BOOK_COLORS[type]
  const sel = selected === type
  const label = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <button
      onClick={() => onClick(type)}
      aria-pressed={sel}
      style={{
        flex:       1,
        padding:    '12px 8px',
        border:     sel ? `2px solid ${G[400]}` : `1px solid ${G[200]}`,
        borderRadius: 10,
        background: sel ? c.bg : G[50],
        cursor:     'pointer',
        textAlign:  'center',
        outline:    'none',
        transition: 'all 0.15s',
        boxShadow:  sel ? `0 0 0 3px ${G[100]}` : 'none',
      }}
    >
      <div style={{ fontSize: 22, marginBottom: 4 }}>{c.icon}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: sel ? c.text : G[800] }}>
        {label}
      </div>
      <div style={{ fontSize: 10, color: sel ? c.text : G[400], marginTop: 2, opacity: 0.9 }}>
        {CATALOG[type].detail}
      </div>
    </button>
  )
}
