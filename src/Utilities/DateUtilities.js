export const CalculateTimeDifference = (date) => {
    const originalDate = new Date(date)
    const currentDate = new Date()
    
    const originalYear = originalDate.getFullYear()
    const curreentYear = currentDate.getFullYear()

    if(curreentYear - originalYear !== 0){
        return `${originalDate.toLocaleString('default', { month: 'long' })} ${originalYear}`
    }

    const originalMonth = originalDate.getMonth()
    const currentMonth = currentDate.getMonth()

    if(currentMonth - originalMonth !== 0){
        return `${originalDate.toLocaleString('default', { month: 'long' })} ${originalYear}`
    }

    const originalDay = originalDate.getDay()
    const currentDay = currentDate.getDay()

    if(currentDay - originalDay !== 0){
        return `${currentDay - originalDay} days ago`
    }

    const originalHours = originalDate.getHours()
    const currentHours = currentDate.getHours()

    return `${currentHours - originalHours} hrs ago`
     
  }

export const FormattedDate = (date) => {
   return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
}