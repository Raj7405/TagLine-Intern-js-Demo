let users = [
    {id: 1, name: "John", group: 'A'},
    {id: 2, name: "Pete", group: 'B'},
    {id: 3, name: "Mary", group: 'A'}
  ];

let userGroup = users.find((obj) => obj.group == 'A')    //The value of undefined   is returned if nothing is found.
let user2 = users.find((obj) => obj.id == 1)
console.log(users.findIndex((obj)=> obj.name == 'Pete'))   //The value of -1 is returned if nothing is found.
console.log(userGroup)


//filter Method
console.log(users.filter((item) => item.group == 'A'))
console.log(users)