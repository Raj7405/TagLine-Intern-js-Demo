const school = {
    schoolName: "Lions School",
    schoolLocation: "Ankleshwar",
    year:"2001",
    printInfo: function(){
        console.log(`${this.schoolName} established in ${this.year} at ${school.schoolLocation}`)   
    } 
}
school.printInfo();

let num = Math.floor(Math.random()*((100 - 1 + 1) + 1))
let fruit = 'apple'

const obj = {
    [ 'Compueter_' + num]  : 5,
    [fruit] : [num],
}

console.log(obj)