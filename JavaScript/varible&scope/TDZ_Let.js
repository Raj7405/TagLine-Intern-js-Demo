
//for let

//Therefore, a let (or const) variable’s TDZ ends when JavaScript fully initializes it with the value specified during its declaration.
//However, a var variable’s TDZ ends immediately after its hoisting—not when the variable gets fully initialized with the value specified during its declaration.

//here will give refrence error
{
    // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
}
//here will give undefied
{
  //TDZ start
  //continue
  //continue
  let name; // 

}

//here will we can access
{
    // TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
  }


