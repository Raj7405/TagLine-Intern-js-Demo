const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const newArr1 = arr1.concat(arr2)
const newArr2 = [...arr1, ...arr2]
const newArr3 = arr1.splice(arr1.length, 0 , ...arr2)


console.log(newArr1)
console.log(newArr2)
console.log(newArr3)

// arr2.forEach((item)=>{
//     arr1.push(item)
// })

console.log(arr1)