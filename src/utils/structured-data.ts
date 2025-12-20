export function generateISODateWithTimezone(date?: Date): string {
  const targetDate = date || new Date()
  // Get timezone offset in minutes and convert to ±HH:mm format
  const timezoneOffset = -targetDate.getTimezoneOffset()
  const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
  const offsetMinutes = Math.abs(timezoneOffset) % 60
  const offsetSign = timezoneOffset >= 0 ? '+' : '-'
  const offsetString = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`
  
  // Format the date
  const year = targetDate.getFullYear()
  const month = (targetDate.getMonth() + 1).toString().padStart(2, '0')
  const day = targetDate.getDate().toString().padStart(2, '0')
  const hours = targetDate.getHours().toString().padStart(2, '0')
  const minutes = targetDate.getMinutes().toString().padStart(2, '0')
  const seconds = targetDate.getSeconds().toString().padStart(2, '0')
  
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetString}`
}

export function generateImageUrls(articleSlug: string, siteUrl: string = 'https://conversioncalc.tech') {
  return [
    `${siteUrl}/images/${articleSlug}-1x1.jpg`,
    `${siteUrl}/images/${articleSlug}-4x3.jpg`,
    `${siteUrl}/images/${articleSlug}-16x9.jpg`
  ]
}

export function calculateWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
}

export function truncateText(text: string, maxLength: number = 300): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}
