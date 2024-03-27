export function transformDate(dateStr: string): string {
  const dateObj = new Date(dateStr)
  const transformedDate = dateObj.toLocaleDateString('it-IT', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  })
  return transformedDate
}
