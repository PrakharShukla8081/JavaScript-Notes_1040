// “A function declaration is fully hoisted and can be invoked before its definition, whereas a function expression is assigned to a variable and cannot be used before initialization because only the variable is hoisted, not the function.”


// | Feature            | Function Declaration | Function Expression         |
// | ------------------ | -------------------- | --------------------------- |
// | Hoisting           | ✅ Fully hoisted      | ❌ Not fully (only variable) |
// | Call before define | ✅ Yes                | ❌ No                        |
// | Name               | Required             | Optional (anonymous)        |
// | Use case           | General functions    | Callbacks, dynamic usage    |


//function decleration
// function greet() {
//   console.log("Hello");
// }
// 
//function expression



// const greet = function () {
//   console.log("Hello");};



  function greet(){
    console.log("Prakhar This Side ");
  }


greet()































