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
    <time
      className="text-coders51 dark:text-coders51dark text-sm"
      dateTime={dateString}
    >
      {transformDate(dateString)}
    </time>
  )
}

export default DateString
