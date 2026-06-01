import { G } from '../constants/catalog.js'

export default function StatCard({ label, value, accent }) {
  return (
    <div style={{
      flex:         1,
      background:   G[50],
      border:       `1px solid ${G[200]}`,
      borderRadius: 10,
      padding:      '10px 14px',
      textAlign:    'center',
    }}>
      <div style={{ fontSize: 22, fontWeight: 600, color: accent || G[600] }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: G[600], marginTop: 2 }}>
        {label}
      </div>
    </div>
  )
}
