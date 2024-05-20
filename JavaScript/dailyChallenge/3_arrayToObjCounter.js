// Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Output: 
// {
//   'apple': 3,
//   'banana': 2,
//   'orange': 1
// }
const arr =  ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

{
const obj1 = {}

let count = 0 
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j< arr.length; j++){
        if(arr[i] == arr[j]){
            count++
        }
    }
    obj1[arr[i]] = count
    count = 0;
}
// console.log(obj1)
}

{
const obj2 = {}
// arr.sort()
for(let i = 0; i < arr.length; i++){
    if(Object.keys(obj2).includes(arr[i])){
        obj2[arr[i]] =  obj2[arr[i]]+1
    }
    else{
        obj2[arr[i]] = 1
    }
}
console.log("fgergerger",obj2)
}
{
    function counter(val) {
        let abs = {};
        val.forEach((i) => {
            if (true) {
                abs[i] = (abs[i] || 0) + 1;
                // console.log(abs[i] === abs[i])
            }
        });
        console.log(abs);
      }
      counter(arr);   
}
{
    arr.sort()  
}