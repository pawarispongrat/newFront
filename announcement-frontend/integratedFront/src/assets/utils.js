
const TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone
const formatInteger = (time, places) => time.toString().padStart(places, "0")

function getDate(dateStr) {
    const timeZoneDate = new Date(new Date(dateStr).toLocaleString('en-US', { timeZone: TIMEZONE }))
    const day = timeZoneDate.toLocaleString('default', { day: 'numeric' })
    const month = timeZoneDate.toLocaleString('default', { month: 'short' })
    const year = timeZoneDate.toLocaleString('default', { year: 'numeric' })
    const hour = formatInteger(timeZoneDate.getHours(), 2)
    const minute = formatInteger(timeZoneDate.getMinutes(), 2)
  
    return `${day} ${month} ${year}, ${hour}:${minute}`
  
}

const formatDate = (date) => date ? getDate(date) : '-'

export { formatDate,TIMEZONE }