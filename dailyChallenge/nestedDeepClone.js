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

const deepClone = (obj) => {
    let newObj = Array.isArray(obj) ? [...obj] : {...obj}
    Object.keys(obj).forEach(item => {
        console.log(item);
        if(typeof newObj[item] == 'object'){
            newObj[item] = deepClone(obj[item])     
        }else{
            newObj[item] = obj[item]
        }
    })
    return newObj
}
const deepClone2 = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

const deepClone3 = (input) => {
    if(input == null || typeof input !== 'object')
        return input
    
    let intialState = Array.isArray(input) ? [] : {}

    return Object.keys(input).reduce((acc, key) => {
        acc[key] = deepClone3(input[key])
        return acc
    }, intialState)
}


const user = deepClone(userOne)
console.log(user);

console.log(userOne.location.fav === user.location.fav);


const user2 = deepClone2(userOne)
console.log('user2',user2);

console.log(userOne.location.fav === user.location.fav);
user.location.fav.push('denmark')

console.log(userOne);
console.log(user);

const user3 = deepClone3(userOne)
console.log(user3);

console.log(userOne.location.fav === user3.location.fav);