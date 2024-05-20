{
const userOne = {
    firstName : 'Raj',
    lastName : 'Chaudhari',
    logIn : false,
    userAlert: function(){
        console.log(`welcome ${this.firstName} ${this.lastName}!!`)
    }  
}

const userTwo = {
    firstName : 'Indra',
    lastName : 'Chaudhari',
    logIn : false,
    userLogged : function(){
        this.logIn = true;
    }
}


let userTwoAlert = userOne.userAlert.bind(userTwo)
userTwoAlert()

let userStatus = userTwo.userLogged.bind(userOne)
userStatus()

console.log(userOne)
}
{
    function mul(a, b){
        return a * b;
    }

    let double = mul.bind(null,2);
    let triple = mul.bind(null,3)

    console.log(double(50))
    console.log(triple(50))
}