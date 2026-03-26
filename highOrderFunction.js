// 🔹 What is a Higher-Order Function?
// 👉 Definition:

// A Higher-Order Function (HOF) is a function that:

// Takes another function as an argument, OR
// Returns a function

// “A higher-order function is a function that either takes another function as an argument or returns a function. It is commonly used for abstraction, reusability, and functional programming patterns in JavaScript.”




// ⚡ Why HOF is Useful?
// Code reusable banata hai
// Clean & readable code
// Functional programming support
// Used heavily in:
// Callbacks
// Promises
// Middleware (Express.js)

// 🟢 1. Function as Argument
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Prakhar", sayBye);

//-------------------------------------------------------------------------------------------------------------
// 🔴 2. Function Returning Function
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10




// 👉
// “A higher-order function is a function that accepts or returns another function, while a callback is the function that is passed into a higher-order function to be executed later. They are not the same, but callbacks are used inside higher-order functions.”

// | Feature    | Higher-Order Function | Callback Function    |
// | ---------- | --------------------- | -------------------- |
// | Role       | Accepts/returns fn    | Passed as argument   |
// | Who is it? | Main function         | Helper function      |
// | Example    | `map`, `filter`       | function inside them |
0
