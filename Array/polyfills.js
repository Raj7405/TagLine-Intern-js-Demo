Array.prototype.myMap = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}
Array.prototype.myFilter = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this))
            temp.push(this[i])
    }
    return temp
}
Array.prototype.myReducer = function(cb, intialvalue){
    let temp = intialvalue;
    for(let i = 0; i < this.length; i++){
        temp = cb(temp, this[i], i , arr)
    }
    return temp
}
let arr = [1,2,3,4,5];

let sum = arr.reduce((acc,curr) => {
    return acc += curr
},0)
 console.log(sum)

let newSum = arr.myReducer((acc, curr) => {
    return acc += curr
},0)

console.log(newSum);

console.log(arr.myFilter((item) => item > 2));

const deepClone3 = (input) => {
    if(input == null || typeof input !== 'object')
        return input
    
    let intialState = Array.isArray(input) ? [] : {}

    return Object.keys(input).myReducer((acc, key) => {
        acc[key] = deepClone3(input[key])
        return acc
    }, intialState)
}

let userOne = {
    name: 'Rajendra',
    location: {
        fav : ['india', 'japan', 'korea'],
        city:'Ankleshwar',
        origin: {
            state: 'Gujarat',
            country: 'India'
        }
    }
}

let two = deepClone3(userOne)

console.log(two)


