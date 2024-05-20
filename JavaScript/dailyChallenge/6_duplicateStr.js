// Input:- "teeetttttsssaaa"
// output:- "tesa"

function removeDuplicate(str){ 
    let newStr= '';
    str.split('').forEach((char,index)=> {
        if(!newStr.includes(char)){     
            newStr+=str[index] 
        }
    })
    return newStr
}
console.log(removeDuplicate('teeetttttsssaaa'))
console.log(removeDuplicate('rraaajjeenndrraaa'))

{
let str = 'teeetttttsssaaa'
let arrMap = new Set(str.split(''))
console.log(Array.from(arrMap).join(''))
}



   
