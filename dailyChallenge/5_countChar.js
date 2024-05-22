//"aabcccccaaa" would become "a2b1c5a3".

// function countChar(str){
//     let newStr = "";
//     let count = 1;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[i+1]){
//             count++
//         }else{
//             newStr +=`${str[i]}${count}`
//             console.log(newStr)
//             count = 1;
//         }
//     }
//     return newStr
// }
 function countChar(str){
    let newStr= '';
    let count = 1;
    str.split('').forEach((char,index, arr)=> {
        if(char == arr[index + 1] ){
            count++
        }else{
            newStr += `${char}${count}`
            count = 1
        }
    })
    return newStr
 }

let str = 'aabcccccaaa';
console.log(countChar(str))



