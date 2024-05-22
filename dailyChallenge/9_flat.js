// Inout:- [1,2,3,[4,5],[6,7,8]]
// output:- [1,2,3,4,5,6,7,8]

function flatArr(arr, newArr){
    arr.forEach((item) => {
        if(typeof item ===  'object'){
            flatArr(item, newArr)
        }else{
            newArr.push(item) 
        }
    })
    return newArr
}
function flatArr2(arr){
    return [].concat(...arr)
}
function flatArr3(arr){
    return arr.join().split(',')
}

let arr = [1,2,3,[4,5],[6,7,8]]
let newArr = []
console.log(flatArr(arr, newArr))
console.log(flatArr2(arr))
console.log(flatArr3(arr))
// console.log(arr.join())










const flat =  arr.reduce((acc, curr) => {
}, [])
function func(...arr){
    let newArr = []
    return function flat(...num){
        if(typeof num === 'object'){
            return flat
        }else{
            newArr.push(num)
        }
    }
}

// console.log(func(arr))