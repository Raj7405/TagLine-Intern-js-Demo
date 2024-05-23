{
    console.log("case : 1")
    let first_resolved_promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve("Resolved after 1 second"); 
        }, 1000); 
    }); 
  
    let second_resolved_promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve("Resolved after 2 seconds"); 
        }, 2000); 
    }); 
  
    let third_resolved_promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve("Resolved after 3 seconds"); 
        }, 3000); 
    }); 
  
    try { 
        let result_1 = Promise.any([ 
            first_resolved_promise, 
            second_resolved_promise, 
            third_resolved_promise, 
        ]); 
  
        result_1.then((data) =>{
            console.log("case : 1")
            console.log("Any's data: " + data)
        }); 
  
        let result_2 = Promise.race([ 
            first_resolved_promise, 
            second_resolved_promise, 
            third_resolved_promise, 
        ]); 
  
        result_2.then((data) => console.log("Race's data: " + data)); 
    } catch (error) { 
        console.log(error); 
    } 
}

{
   
    let rejected_promise = new Promise((resolve, reject) => { 
        reject("Rejected Promise....."); 
    }); 
  
    let first_resolved_promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve("Resolved after 1 second"); 
        }, 1000); 
    }); 
  
    let second_resolved_promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve("Resolved after 2 seconds"); 
        }, 2000); 
    }); 
  
    try { 
        let result_1 = Promise.any([ 
            rejected_promise, 
            first_resolved_promise, 
            second_resolved_promise, 
        ]); 
  
        result_1.then((data) =>{
            console.log("case : 2")
            console.log("Any's data: " + data)
        }); 
  
        let result_2 = Promise.race([ 
            rejected_promise, 
            first_resolved_promise, 
            second_resolved_promise, 
        ]); 
  
        result_2.then((data) => console.log("Race's data: " + data)); 
    } catch (error) { 
        console.log(error); 
    } 
}

{
    console.log("case : 3")
    let first_rejected_promise = new Promise((resolve, reject) => { 
        reject("First Rejected Promise....."); 
    }); 
  
    let second_rejected_promise = new Promise((resolve, reject) => { 
        reject("Second Rejected Promise..."); 
    }); 
  
    let third_rejected_promise = new Promise((resolve, reject) => { 
        reject("Third Rejected Promise...."); 
    }); 
  
    try { 
        let result_1 = Promise.any([ 
            first_rejected_promise, 
            second_rejected_promise, 
            third_rejected_promise, 
        ]); 
  
        result_1.then((data) =>{
            console.log("case : 3")
            console.log("Any's data: " + data)
        }); 
  
        let result_2 = Promise.race([ 
            first_rejected_promise, 
            second_rejected_promise, 
            third_rejected_promise, 
        ]); 
  
        result_2.then((data) => console.log("Race's data: " + data)); 
    } catch (error) { 
        console.log(error); 
    } 
}