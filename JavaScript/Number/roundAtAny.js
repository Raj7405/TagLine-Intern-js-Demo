function roundAtAny(num, pos){
    if(!pos) return num
    return Math.round(num * `1e${pos}`)/`1e${pos}`
}

console.log(roundAtAny(1.234))

console.log(roundAtAny(1.23463,3))
console.log((1.23463).toFixed(8))
console.log("String",(1.23463).toFixed(3))  // its return string
console.log("coverted using uninary",+((1.23463).toFixed(3)))
console.log("explicit type cast",Number((1.23463).toFixed(5)))
