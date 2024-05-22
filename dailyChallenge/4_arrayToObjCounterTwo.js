// Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange']
// Output:
// {
//   3: [‘apple’],
//   2: [‘banana’, ‘orange’]
// }

let fruite = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple','orange' ]
let entries = {}

function filterFruite(item, arr){
    let arrFruite = arr.filter((fruiteItem) => item == fruiteItem)
    return arrFruite.length;
}

fruite.forEach((item)=>{
    let count = filterFruite(item, fruite)
    if (!entries[count]) {
        entries[count] = [item]; 
    } else if(!entries[count].includes(item)) {
        entries[count].push(item); 
    }
})

console.log(entries)




{
    fruite.sort() 
}
// let fruite = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange']
// let object = Object.from
// console.log(object)

// let obj = {}
// let count = 0, i = 0;
// let single = createArr(fruite)
// fruite.forEach((item)=>{
//    if(single[i] == item){

//    }
// })


// function createObj(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j< arr.length; j++){
//             if(arr[i] == arr[j]){
//                 count++
//             }
//             return count
//         }

//     }
//     console.log(obj)
// }
// console.log(createObj(fruite))
// console.log(createArr(fruite))

// const obj2 = {}
// // arr.sort()
// for(let i = 0; i < fruite.length; i++){
//     let count = createObj(fruite)
//     if(Object.keys(obj2).includes(fruite[i])){
//         obj2[count] =  fruite[i]
//     }
//     else{
//         obj2[count] = fruite[i]
//     }
// }
// console.log(obj2)







