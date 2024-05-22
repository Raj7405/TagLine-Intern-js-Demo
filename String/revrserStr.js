function reverseStr(str){
    // return Array.from(str).reverse().join("");
    return str.split(" ").reverse().join("");
}

console.log(reverseStr("Rajendra"))
console.log("Rajendra".reverse())