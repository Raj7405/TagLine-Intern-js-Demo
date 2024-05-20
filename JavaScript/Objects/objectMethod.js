let person = { 
    name: "xyz", 
    address: "noida", 
    language: "hindi",
    undefined: undefined
} 
//.defineProperty()
Object.defineProperty(person, "address", {enumerable : false});

for(key in person){
    //console.log(key)
}
//By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable. In addition, Object.defineProperty() uses the [[DefineOwnProperty]] internal method, instead of [[Set]] , so it does not invoke setters, even when the property is already present.

Object.defineProperty(person, "age", {value : 22});
console.log(Object.keys(person))
console.log(person.age)

//.defineProperties()

const obj = {};

Object.defineProperties(obj, {
    firstName : {
        value : 'raj',
        writable : false,
        enumerable : false
    },
    lastName: {
        value : 'Chaudhari',
        writable : true,
        enumerable : true,
    },
    fullName: {
        value : function(){
        return this.firstName + " " + this.lastName;
        },
        writable : true,
        enumerable:true
    }
})
// obj.firstName = 'vijay'
// obj.lastName = 'vijay'
console.log(obj.firstName)
console.log(obj.lastName)
console.log(obj.fullName())


//Object.entries(objName)[index]
console.log(Object.entries(obj))
console.log(Object.entries(obj)[0])

