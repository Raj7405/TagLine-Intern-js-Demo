function truncate(str,length){
    // if(str.length > length){
    //     return str.slice(0, length-1) + "..."
    // }       
    return (str.length > length)?str.slice(0, length-1) + '...' : str
}


console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))