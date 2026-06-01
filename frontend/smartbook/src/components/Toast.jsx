import { G } from '../constants/catalog.js'

export default function Toast({ toast }) {
  if (!toast) return null

  return (
    <div style={{
      position:     'fixed',
      bottom:       20,
      right:        20,
      padding:      '10px 14px',
      borderRadius: 10,
      fontSize:     13,
      fontWeight:   500,
      zIndex:       999,
      pointerEvents:'none',
      animation:    'fadeUp 0.2s ease',
      color:        toast.err ? '#c62828' : G[800],
      background:   toast.err ? '#ffebee' : 'white',
      border:       `1px solid ${toast.err ? '#ef9a9a' : G[200]}`,
      boxShadow:    '0 4px 12px rgba(0,0,0,0.08)',
    }}>
      {toast.msg}
    </div>
  )
}
