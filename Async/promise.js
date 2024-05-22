//Promises are more flexible. We can add handlers any time: if the result is already there, they just execute.
let myPromise = new Promise(function(resolve, reject){
    if(false){
        reject(new Error("Whoops!"));
    }
    setTimeout(() => resolve("done 1"), 1000);
    
});
myPromise.then((resolve)=>{
    console.log(resolve)
}).catch(err => {
    console.log(err)
})



new Promise(function(resolve, reject) {
    if(false){
        reject(new Error("Whoops!"));
    }
    setTimeout(() => resolve("done 2"), 1000);
}).then(resovle => {console.log(resovle)}, reject=>{console.log(reject)})


let promiseThree = new Promise(function(resolve, reject) {
    if(true){
        reject(new Error("Whoops!"));
    }
    setTimeout(() => resolve("done 3"), 1000);
}).then(null, reject=>{console.log(reject)}) //only error handling using .then


let promiseFour = new Promise(function(resolve, reject) {
    if(true){
        reject("Whoops!");
    }
    setTimeout(() => resolve("done 4"), 1000);
}).finally(()=>{
    console.log("promise is ready!")
}).then(resolve => {
    console.log(resolve)
}).catch(reject=>{
    console.log(`ERROR: ${reject}`)
}) 
