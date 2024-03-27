import { transformDate } from '~/utils/dates'

const DateString = ({ dateString }: { dateString: string }) => {
  return (
    <time
      className="text-sm text-coders51 dark:text-coders51dark"
      dateTime={dateString}
    >
      {transformDate(dateString)}
    </time>
  )
}

export default DateString
