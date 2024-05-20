// let arr = [];

// function cartCalculation(...num){
//     let price = num;
//     let total = 0;
//     price.forEach((item) => {
//         total+=item;
//     })
//     return total;
// }

// console.log(cartCalculation(100,200,300,400,500));
// for (let index = 0; index < 5; ){
//     console.log(index);
//     index++;
// }

// function map(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }

// const cube = function (x) {
//   return x * x * x;
// };

// const numbers = [0, 1, 2, 5, 10];
// console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

// let a = undefined;

// a++;

// console.log(a)

for (var i = 0; i < 3; i++) {
  setTimeout(() =>{
      console.log(i);    
  },1000)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() =>{
      console.log(i);    
  },1000)
}