{
    // call is used when you want to control the scope that will be used in the function called. You might want the this keyword to be something else than the scope you assigned the function to, in those cases you can use call or apply to call the function with your own scope.
}


{
    let employee = {
        details: function (designation, experience) {
            return this.name
                + " "
                + this.id
                + designation
                + experience;
        }
    }
    
    // Objects declaration
    let emp1 = {
        name: "A",
        id: "123",
    }
    let emp2 = {
        name: "B",
        id: "456",
    }
    let x = employee.details.call(emp2, " Manager ", "4 years");
    console.log(x);
}


{
    function sayHi() {
        console.log(this.name);
      }
      
      let user = { name: "John" };
      let admin = { name: "Admin" };
      
      // use call to pass different objects as "this"
      sayHi.call( user ); // John
      sayHi.call( admin ); // Admin
}