const data = 3;
const valueToFill = 'a';
const fill2 = (arraySize, value) => new Array(arraySize).fill(value);

console.log(fill2(data, valueToFill)) // ['a', 'a', 'a']
console.log(fill2(data, valueToFill)) // ['a', 'a', 'a']

function fill(size, value){
    var arr = []
    for(let i = 0; i<size; i++){
        arr.push(value)
    }
    return arr;
}
