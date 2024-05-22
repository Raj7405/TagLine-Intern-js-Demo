//the Object.freeze() method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties. Object.freeze() preserves the enumerability, configurability, writability, and prototype of the object. It returns the passed object and does not create a frozen copy.

let person = { 
    name: "xyz", 
    address: "noida", 
    language: "hindi",
}

console.log(Object.getOwnPropertyDescriptors(person))

Object.freeze(person)
// Object.seal(person)      //can change exiting property in .seal() but not in .freeze()
person.name = 'sonu'
console.log(person.name)

console.log(Object.getOwnPropertyDescriptors(person))

// Object.defineProperty(person, "address", {enumerable : false});
// console.log(Object.getOwnPropertyNames(person))
// console.log("KEY", Object.keys(person))
// console.log("KEY", Object.values(person))
// console.log("KEY", Object.entries(person))
