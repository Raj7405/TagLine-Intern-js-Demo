const data = [1, 2, 3];
console.log(reverseArr(data)); // [3, 2, 1]

function reverseArr(arr){
    let i = 0, j = arr.length-1, temp; 
    
    while(j >= i ){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}