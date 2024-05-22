let billion = 1000000000;
let billion2 = 1_000_000_000;
let billion3 = 1e9

console.log("Same Same, no difference only syntatical sugar")
console.log([billion === billion2, billion2])
console.log([billion === billion3, billion3.toLocaleString()])

let decimal = 0.0003;
let decimal2 = 3.e-4   

console.log(decimal2)
console.log(1e-5)

console.log(23724348734..toString(32))

// If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.