//getter is a function that gets called automatically when you try to access a property.Getters allow you to retrieve the value of a property, perform actions on it if needed, and then return it.
//They get called automatically when you try to assign a new value to a property. 
//we use getters and setters to control how we access and modify the properties of an object.

const user = {
    // _firstName : "Raju",
    get firstName(){
        return this._firstName;
    },
    set firstName(value){
        if(value.length >= 3){
            this._firstName = value;
        }else{
            console.log("name is too short!!")
        }
    }
}
user.firstName = "Ra"
console.log(user.firstName)

Object.defineProperties(user, {
    location:{
        get(){
            return this._location
        },
        set(value){
            this._location = value
        }
    }
})

user.location = "ankleshwar"
console.log(user["location"])

console.log(user)