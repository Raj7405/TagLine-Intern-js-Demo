{//using slice
const num =  [1,2,4,5,6]

let index = 2
const newNum = [...num.slice(0,index), 3, ...num.slice(index)]

console.log(newNum)
}

{//using splice
    const num =  [1,2,4,5,6]
    let index = 2;
    num.splice(index, 0, 3)
    console.log(num)
}
{
    const num =  [1,2,4,5,6]
    let index = 2;
    const newNum = num.toSplice(index, 0, 3)
    console.log(newNum)
}