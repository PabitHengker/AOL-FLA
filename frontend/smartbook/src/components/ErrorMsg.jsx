export default function ErrorMsg({ msg }) {
  if (!msg) return null

  return (
    <div style={{
      marginTop:    8,
      padding:      '7px 10px',
      background:   '#ffebee',
      border:       '1px solid #ef9a9a',
      borderRadius: 8,
      fontSize:     12,
      color:        '#c62828',
      display:      'flex',
      alignItems:   'center',
      gap:          6,
    }}>
      ⚠ {msg}
    </div>
  )
}
