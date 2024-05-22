const person = {
    firstName : 'vi',
    lastName : 'li',
    dateOfbirth: 2001,
    currentAge : 22,
    increment : function(){
        return ++this.currentAge
    }
}


let{firstName ,dateOfbirth : dob, currentAge: age = 21, increment} = person;

let{lastName : ls} = person

firstName = 'Raj';
lastName = 'Chaudhari'
person.age = 1 + age
person.email = "r@gmail.com"
console.log(firstName, dob , ++age)
// console.log(person.increment())


function getUp(){
    return null;
}
//as func is returning null we can use fall back for preventing error
let{name, status} = getUp() || {}
console.log(name, status)


//destructuring nested object
const user = {
    userName: {
        userfirstName : 'sonu',
        userlastName : 'D'
    },
    isLoggd : true,
}

let{userName:{userfirstName, userlastName}, userName, isLoggd : online} = user

console.log(`welcome ${userfirstName} ${userlastName}`)
console.log(userName)