import { G } from '../constants/catalog.js'

export default function Section({ title, children }) {
  return (
    <div style={{
      background:    'white',
      border:        `1px solid ${G[200]}`,
      borderRadius:  12,
      padding:       '1.25rem',
      marginBottom:  '1rem',
    }}>
      <div style={{
        fontSize:      11,
        fontWeight:    700,
        color:         G[400],
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        marginBottom:  '1rem',
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}
