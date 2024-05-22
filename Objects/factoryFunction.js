function user(firstName, lastName, age, location, isLoggedIn){
    return {
        firstName : firstName,
        lastName : lastName,
        age : age,
        location : location,
        isLoggedIn : isLoggedIn,
        alertOnLogIn : function(){
            if(!isLoggedIn){
                console.log('user is ofline')
            }   
            else{
                console.log(`welcome ${firstName} ${lastName}`)
            }
        }
    }
}

const user1 = user('raj', 'chaudhari', '21', 'Ankleshwar', false)
console.log(user1.alertOnLogIn()) 

    function Car(make, model, year, origin){
        this.make = make
        this.model = model;
        this.year = year;
        this.origin = origin
        this.getFullName = ()=>{
            return this.make + ' ' + this.model + ' ' + this.year
        }
    }
    const userOneCar = new Car('Tata', 'XUV700', '2023', 'India')
    Car.prototype.sentance  =  function() { return `${this.make} brand is from ${this.origin}`}
    // console.log(userOneCar.sentance())
    // console.log(Car.prototype)
    // console.log(userOneCar.getFullName())
    console.log(Car.prototype)