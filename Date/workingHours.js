function calculateWorkingDay(startDate, endDate){
    let weekEnds = {6 : 'saturday', 0: 'sunday'}
    let monthDay = (endDate.getDate() - startDate.getDate()) + 1 ;
    let workingDay = 0;
    let day = 0; 
    while(day <= monthDay){
        !weekEnds[startDate.getDay()] ? workingDay++ : undefined ;
        startDate.setDate(startDate.getDate() + 1)
        day++
    }
    return workingDay;
}
function calculateWorkingHours(startDate, endDate){
    let totalHours = (24 - startDate.getHours()) + endDate.getHours()
    return totalHours
}
let startDate = new Date("2024-05-23 00:00:00");  
let endDate = new Date("2024-05-24 23:00:00");  
 

console.log(calculateWorkingHours(startDate,endDate))

//avoid 23 to 6 value of hours
console.log(startDate.getHours())
console.log(endDate.getHours())