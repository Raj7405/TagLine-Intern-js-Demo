const arr = [1,2,3,4,5,6]

console.log(arr.at(-1))
console.log(arr[arr.length-1])


const fruite = ['apple']
console.log('before adding',fruite)

fruite.push(...['banana','orange'])
fruite.unshift('pineapple', 'strawberry')

console.log('after adding',fruite)

fruite.shift()
fruite.pop()

console.log('after removing',fruite)

for(let item of fruite){
    console.log(item)
}
fruite.forEach((i) => console.log(i) )

for(let item in fruite){
    console.log(item)
}

//array.lenght

let arr2 = [1,2,3,4,5,6]
arr2[150] = "raj"
console.log(arr2.length)

arr2.length = 2;
console.log(arr2)

arr2.length = 5;
console.log(arr2)

//array to string

console.log(String(arr))
console.log(String(fruite))
