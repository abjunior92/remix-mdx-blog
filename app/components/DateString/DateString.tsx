export function transformDate(dateStr: string): string {
  const dateObj = new Date(dateStr)
  const transformedDate = dateObj.toLocaleDateString('it-IT', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  })
  return transformedDate
}

const DateString = ({ dateString }: { dateString: string }) => {
  return (
    <time className="text-sm text-cyan-200" dateTime={dateString}>
      {transformDate(dateString)}
    </time>
  )
}

export default DateString
