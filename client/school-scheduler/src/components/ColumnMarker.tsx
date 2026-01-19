import './Table.scss'

export default function ColumnMarker() {
  
  const columnStyles: string[] = []
  const today = new Date().toLocaleDateString('en-EN', { weekday: 'short' })
  const weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  for (let i = 0; i < weekDays.length; i++) {
    if (today == weekDays[i]) {
      columnStyles.push('today-column')
    }
    else {
      columnStyles.push('regular-column')
    }
  }

  return (
    <>
      <col className={columnStyles[0]}/> 
      <col className={columnStyles[1]}/>
      <col className={columnStyles[2]}/>
      <col className={columnStyles[3]}/>
      <col className={columnStyles[4]}/>
      <col className={columnStyles[5]}/>
      <col className={columnStyles[6]}/>
    </>
  )
}