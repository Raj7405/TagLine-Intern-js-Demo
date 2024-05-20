let arr = [["userName","RAJK"],["age",22],["isLogged",true]] 

let obj1 = Object.assign(arr)
let obj2 = Object.fromEntries(arr)
let map = new Map(arr)


console.log("obj1",obj1)
console.log("obj2",obj2)
console.log(map)