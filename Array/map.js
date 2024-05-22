const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction).filter(x => x!= undefined);

function myFunction(value) {
  if( value%2 === 0)
  {
      return value;
  }
}
