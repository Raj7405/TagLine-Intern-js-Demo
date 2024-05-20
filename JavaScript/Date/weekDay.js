let startDate = new Date("05/01/2024");  
let endDate = new Date("05/31/2024");  

 
let dayDiff = endDate.getDay()- startDate.getDay()
console.log(dayDiff)


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


console.log(calculateWorkingDay(startDate,endDate) )
