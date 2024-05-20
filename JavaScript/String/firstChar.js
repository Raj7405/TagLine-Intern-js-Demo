function upFirstChar(str){
    if(!str) return str;

    return str[0].toUpperCase().concat(str.slice(1))
}
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}
  

console.log(ucFirst("rajendra"))  
console.log(upFirstChar("rajendra"))
console.log(!undefined)