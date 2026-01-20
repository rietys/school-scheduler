import './Table.scss'

export default function ColumnMarker() {
  
  const today: string = new Date().toLocaleDateString('en-EN', { weekday: 'short' })
  const weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const columnStyles: string[] = weekDays.map((weekDay) =>
    today == weekDay ? 'today-column' : 'regular-column'
  )

  return (
    <>
      {columnStyles.map(columnStyle => (
        <col className={columnStyle} />
      ))} 
    </>
  )
}