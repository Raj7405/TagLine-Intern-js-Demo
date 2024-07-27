//Write a function argumentsLength that returns the count of arguments passed to it.
let argsNumber = function(...args){
    return args.length
}

console.log(argsNumber(3,4,null,6,[]));