const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
console.log(compact2(data))


function compact(arr){
    let cleamArr = [];
    for(let i = 0; i < arr.length; i++){
     
        if(arr[i] === 0 || arr[i] === false || arr[i] === undefined || arr[i] === null || arr[i] === true || arr[i] === ''){
            continue;
        }
        else{
            cleamArr.push(arr[i])

        }
    }
    return cleamArr
}

function compact2(arr){
    let cleamArr = [];
    let pattern =/[1-9] /
    for(let i = 0; i < arr.length; i++){
        let flag = pattern.test(arr[i])
        if(flag){
            cleamArr.push(arr[i])
        }
    }
    return cleamArr
}

    const compact3 = (array) => array.filter((el) => el);
console.log(compact3(data))