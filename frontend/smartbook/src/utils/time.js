export function nowTime() {
  return new Date().toLocaleTimeString('id-ID', {
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
