export default {
  log(message: string) {
    process.stdout.write(`${date()}\t${message}\n`)
  }
}

function date() {
  const d = new Date()

  const year = d.getFullYear()
  const month = String(d.getMonth()).padStart(2, '0')
  const day = d.getDate()

  return `${year}-${month}-${day}`
}
