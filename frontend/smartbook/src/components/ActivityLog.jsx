import { G, LOG_COLORS } from '../constants/catalog.js'
import Section from './Section.jsx'

function LogItem({ entry }) {
  return (
    <div style={{
      display:      'flex',
      alignItems:   'flex-start',
      gap:          8,
      padding:      '7px 10px',
      borderRadius: 8,
      background:   G[50],
      border:       `1px solid ${G[100]}`,
      fontSize:     12,
    }}>
      <span style={{
        width:        7,
        height:       7,
        borderRadius: '50%',
        background:   LOG_COLORS[entry.type] || '#888',
        marginTop:    4,
        flexShrink:   0,
      }} />
      <span style={{ flex: 1, color: G[800], lineHeight: 1.5 }}>
        {entry.msg}
      </span>
      <span style={{ fontSize: 10, color: G[400], whiteSpace: 'nowrap' }}>
        {entry.time}
      </span>
    </div>
  )
}

export default function ActivityLog({ logs }) {
  return (
    <Section title="Log aktivitas">
      <div style={{
        display:       'flex',
        flexDirection: 'column',
        gap:           6,
        maxHeight:     200,
        overflowY:     'auto',
      }}>
        {logs.map((entry, i) => (
          <LogItem key={i} entry={entry} />
        ))}
      </div>
    </Section>
  )
}
