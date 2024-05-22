
function midIndex(arr) {
    return Math.floor(arr.length/2) 
}
function task(arr){
    arr.push('Rock-n-Roll')
    console.log(arr)

    // arr.splice(midIndex(arr),midIndex(arr),'Classics')
    arr[midIndex(arr)] = 'Classics'
    console.log(arr)
    
    arr.shift()
    console.log(arr)
    
    arr.unshift('Rap', 'Raggas')
    console.log(arr)
}

let array  = ['jazz', 'blue']
// task(array)
let fruite =  ['apple', 'banana', 'orange', 'berry'];
task(fruite)

console.log(String(fruite) === fruite.toString())

let arr =  [[1,2],[3,4],[5,6,[7,8,[9,10]]]]
let flatarr = arr.flat()