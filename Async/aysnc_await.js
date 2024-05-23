//The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
//The keyword await makes JavaScript wait until that promise settles and returns its result.

async function f() {
    let promise = new Promise((resolve, reject) => {
      // setTimeout(() => resolve("done!"), 1000)
      reject("ERROR: something went wrong!")
    });
    try{
      let result = await promise; // wait until the promise resolves (*)  
      console.log(result); // "done!"
    }catch(err){
      console.log(err)
    }
  }
  
f();