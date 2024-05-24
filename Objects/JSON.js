//object to JSON string

let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

console.log(user)

let jsonUser = JSON.stringify(user)

let jsonUser2 = JSON.stringify(user, null, 2)

let jsonUser3 =JSON.stringify(user,['name', 'age'],2)

let jsonUser4 = JSON.stringify(user, function replacer(key, value){
    return (key == 'age') ? undefined : value
},2)

let jsonUser5 =JSON.stringify(user,['name', 'age'],'&&')

console.log(jsonUser)
console.log(jsonUser2)
console.log(jsonUser3)
console.log(jsonUser4)
console.log(jsonUser5)


let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
};

let meetup = {
    title: "Conference",
    room
};

console.log(JSON.stringify(meetup, null, 2))


// JSON string to object

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let obj = JSON.parse(str)
let obj2 = JSON.parse(str, function(key, value){
    if(key == 'date') return new Date(value)
    
    return value
})

console.log(obj)
console.log(obj2)
console.log(obj2.date.getDate())

//task
let room1 = {
    number: 23
  };
  
  let meetup1 = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place1: room1
  };
  
  // circular references
  room1.occupiedBy = meetup1;
  meetup1.self = meetup1;
  console.log(room1)
  console.log(meetup1)
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  
  


  
  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */