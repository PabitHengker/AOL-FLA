import { useState } from 'react'
import { G, BOOK_TYPES } from '../constants/catalog.js'
import TypeCard from './TypeCard.jsx'
import ErrorMsg from './ErrorMsg.jsx'
import Section from './Section.jsx'

export default function BookForm({ books, onAdd, onError }) {
  const [selected,  setSelected]  = useState(null)
  const [errors,    setErrors]    = useState({})
  const [hoverBtn,  setHoverBtn]  = useState(false)

  function handleSelect(type) {
    setSelected(type)
    setErrors({})
  }

  function handleSubmit() {
    const result = onAdd(selected)

    if (result?.errors) {
      setErrors(result.errors)
      return
    }

    // Reset selection on success
    setSelected(null)
    setErrors({})
  }

  return (
    <Section title="Tambah buku baru">
      {/* Type selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {BOOK_TYPES.map(type => (
          <TypeCard
            key={type}
            type={type}
            selected={selected}
            onClick={handleSelect}
          />
        ))}
      </div>

      {/* Validation error */}
      <ErrorMsg msg={errors.type || errors.global} />

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        onMouseEnter={() => setHoverBtn(true)}
        onMouseLeave={() => setHoverBtn(false)}
        style={{
          marginTop:    8,
          width:        '100%',
          padding:      '11px',
          border:       `1px solid ${G[400]}`,
          borderRadius: 10,
          background:   hoverBtn ? G[400] : 'white',
          color:        hoverBtn ? 'white' : G[600],
          cursor:       'pointer',
          fontSize:     14,
          fontWeight:   600,
          transition:   'all 0.15s',
        }}
      >
        + Buat Buku
      </button>
    </Section>
  )
}
