// sum(2)(3)(4)(5)()
// Output :- 14


function sum3(num){
    let sum = num;
    return function repeat(num){
        if(isNaN(num)) {
            return sum
        }
         sum += num
        return repeat
    }
}

console.log(sum3(2)(3)(4)(5)(6)())
// console.log(sum3(2)(3)(4)(5)(6)())
// console.log(sum3(2)(3))



function sum(num){
    let sum = 0;
    if(!isNaN(num)) sum += num
    return function(num){
        if(!isNaN(num)) sum += num
        return function(num){
            if(!isNaN(num)) sum += num
            return function(num){
                if(!isNaN(num)) sum += num
                return function(num){
                    if(!isNaN(num)) sum += num
                    return sum
                }
            }
        }
    }
}

console.log(sum(2)(3)(4)(5)())




function sum2(num1){
    let arr = []
    arr.push(num1)
    return function(num2){
        arr.push(num2)
        return function(num3){
            arr.push(num3)
            return function(num4){
                arr.push(num4)
                return function(num5){
                    arr.push(num5)
                    return arr.reduce((acc,item) => {
                        if(!isNaN(item)){
                            acc+=item
                        }
                        return acc
                    })
                }
            }
        }
    }
}

console.log(sum2(2)(3)(4)(5)())

