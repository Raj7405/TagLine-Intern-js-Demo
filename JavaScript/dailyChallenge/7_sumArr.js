// input:- [0,1, 2, 3, 4, 5, 6]
// example:-
// [0,1, 2, 3, 4, 5, 6] =21
// [1, 2, 3, 4, 5, 6]=21
// [2, 3, 4, 5, 6]=20
// [3, 4, 5, 6]=18
// [4,5, 6]=15
// [5, 6]=11
// [6]=6
// []=0
// output:- [21,21,20,18,15,11,6,0]


function arrOfSum(arr, newArr){
    if(arr.length == 0) return newArr.push(0)
    let sum = arr.reduce((acc, crr)=>{
        acc+=crr
        return acc
    },0)
    newArr.push(sum);
    arr.shift()
    arrOfSum(arr,newArr)
}
let arr = [0,1, 2, 3, 4, 5, 6,7,8]
let newArr = []
arrOfSum(arr,newArr)
console.log(newArr)
console.log(typeof "📁")


let arr2 = [0,1, 2, 3, 4, 5, 6,7,8]
function arrOfSumTwo(arr, sum){
    let newArr = [];
    let currSum = sum
    arr.forEach((element,index) => {
          newArr.push(currSum);
          currSum -= arr[index]  
          console.log(element,currSum)       
    });  
    return newArr  
}
let sum = arr2.reduce((acc, crr)=>{
    acc+=crr
    return acc
},0)

console.log(arrOfSumTwo(arr2, sum))