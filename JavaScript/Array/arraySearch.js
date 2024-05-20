const fruits2 = ["Apple", "Orange", "Apple", "Mango","Orange"];
let num = new Map()
let arrNum = []
let count = 0
fruits2.forEach((item)=>{
    if(fruits2.includes(item)){
        count++
    }
        num.set(item, count)
        arrNum.push([item,count])
        count = 0
 
    console.log(count)
})
console.log(num)
console.log(arrNum)