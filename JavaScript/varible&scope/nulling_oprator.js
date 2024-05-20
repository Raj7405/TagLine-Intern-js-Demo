let a = 5;
let b = 10;
let c = "hello";
let d = null;
let e;
let f = "";
result = (a > b) ? (c || "world") : (d ?? (e ?? f) ?? "default");
console.log(result)


for(let i = 0; i<5;){
    console.log(i);
    i++;
}


console.log("hello"||"")
console.log(""||"world")
console.log(" "||"g3")
console.log(""||"")

console.log("hello"&&"")
console.log(""&&"world")
console.log(" "&&"g3")
console.log(""&&"")

