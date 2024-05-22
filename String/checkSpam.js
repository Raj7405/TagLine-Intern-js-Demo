const checkSpam = (str) => {
    if(str.match(/viagra/i) || str.match(/XXX/i)){
        return true
    }

    return false
}
const checkSpam2 = (str) => {
    let lowerStr = str.toLowerCase()
    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')){
        return true
    }

    return false
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx')) 
console.log(checkSpam("innocent rabbit"))

console.log(checkSpam2('buy ViAgRA now'))
console.log(checkSpam2('free xxxxx')) 
console.log(checkSpam2("innocent rabbit"))