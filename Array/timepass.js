let str = 'hi , hello thedfhgfhfghbre! my self rajendra'


function longestString(str){
    let longestStr = '';
    str.split(' ').forEach(item => {
        longestStr = item.length > longestStr.length? item : longestStr;
    });
    return longestStr
}

console.log(longestString(str));