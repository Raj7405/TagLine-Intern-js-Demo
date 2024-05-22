const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    f:{
      k:20
    }
  }
};

const obj2 = {
  a: 5,
  b: {
    c: 7,
    e: 8,
    f:{
      g:1,
      h:3
    }
  }
};

function deepAssign(obj1, obj2) {
  let newObj = {...obj1}  
  for(let keys in obj2){
      console.log(obj1[keys])
      if(typeof(obj2[keys]) == 'object' && !Array.isArray(obj2[keys])){
          newObj[keys] = deepAssign(obj1[keys],obj2[keys])
      }
      else{
         newObj[keys] = obj2[keys]
      }
  }
  return newObj
}
console.log(deepAssign(obj1,obj2))


// Object.assign(obj2.b,obj1.b)
// Object.assign(obj1, obj2)
// console.log(obj1)

// Object.assign(obj1, obj2)
// let objOneArr = Object.keys(obj1)
// let i = 0;
// console.log(objOneArr)
// console.log(typeof obj1.b == 'object')

// for(let keys in obj2){
//     console.log(obj1[keys])
//     if(typeof(obj1[keys]) == 'object'){
//         var keys = key
//         deepAssign(keys,obj1,obj2)
//     }
//     else{
//         Object.assign(obj1, obj2)
//     }
//      i++
// }

// function deep(key1, object1){
//     for(subkey1 in object1.key1 ){
//         if(typeof(object1.key1) === 'object'){
//             deepAssign(key1,object1)
//         }
//     }
// }
// let objArr = []
// function deep(object){
//     for(key in object){
//         if(typeof(object.key) === 'object'){
//             deep(object.key)
//         }
//         else{
//             Object.assign(object)
//         }
//     }
// }
// deep(obj1)
// console.log(objArr)