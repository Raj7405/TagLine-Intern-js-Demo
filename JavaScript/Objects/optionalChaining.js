//The optional chaining operator implicitly checks if the user is not null or undefined before attempting to access the user.profile
// syntax: objectNAme ?. propName OR objectName ?. expression


//The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

function getUser(id) {
    if(id <= 0 ){
        return null;
    }

    return {
        id : id,
        userName: 'admin',
        profile : {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}


let user = getUser(-2);
// let profile = user ?. profile;
// let profile = (user !== null || user !== undefined) ? user.profile : undefined
// this is how optional chaining oprator is working in background 

// console.log(profile)

const person= {
    name : {
        firstName : 'Rajendra',
        lastName : 'Chaudhari',
    },
    location: {
        city : 'Ankleshwar',
        state : 'Gujarat',
    },
    getAddress(){
        return {
            address : `${this.location.city} in ${this.location.state}`
        }
    },
    getFullName(){
        return null;
        // return this.name.firstName + ' ' + this.name.lastName
    },
}

let address  = person?.getAddress?.()?.address || 'Unknown Address'
console.log(address)

let fullName = person?.getFullName?.() || 'Full Name is Unknown'
console.log(fullName)

let unknownFunc = person?.unknownFunc?.() || 'function is not present'
console.log(unknownFunc)


const users = [
    { id: 1, profile: { name: "Alice" } },
    { id: 2 },
    { id: 3, profile: { name: "Bob" } }
  ];

  let profileName = users.map(users => users?.profile?.name) || 'Unknown'
  console.log(profileName)