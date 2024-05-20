//.create(prototype_object, propertiesObject)   //return object update propeties and inherited property
let mainObj = {
    firstName : 'Raj',
    fullname : function(){
        return  `welcome ${this.firstName} ${this.lastName}`
    },
}
let userOne = Object.create(mainObj, {
    lastName : {
        value : 'Chaudhari',
        writable : true,
        enumerable : true,
    }
})
console.log(mainObj.fullname())
console.log(userOne.fullname())

//.assign(targte, source)   //return target object

let person2 = Object.assign({}, userOne)
console.log("person2: ",person2.firstName)

console.log("person2: ",person2.fullname())  //here u can see we can not able inherited prototype of userOne 