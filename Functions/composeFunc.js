let arrFuncDef = [x => x + 1, x => 2 * x]

function compose(functions){
    return function(x){
        return functions.reduceRight((acc, currFuncDef) => currFuncDef(acc), x)
    } 
} 

let finalFun = compose(arrFuncDef)

console.log(finalFun(4))