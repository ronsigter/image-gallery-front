import { format, parse, isValid } from 'date-fns'

export const readableDate = (date_: string): string => {
  if (!date_) return ''
  const date = new Date(date_)
  if (!isValid(date)) return ''

  return format(new Date(date), 'M/dd/yyyy')
}
