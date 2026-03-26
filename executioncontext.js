// Everything in JavaScript is wrapped inside an execution context, which is an abstract concept (can be treated as a container) that holds all the information about the environment within which the current JavaScript code is being executed.

// Phases of the JavaScript Execution Context

// Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigned undefined as a placeholder.
// Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of Execution) of the Execution Context. 


// let x = 2;

// let y = x*x;

// console.log(y);

// In the above JavaScript code, there are two variables named x and y. When we run this program, the Global Execution Context is created.

// 1. Memory Allocation Phase
// In this phase, memory is allocated for all variables. Since we are using let, the variables are hoisted but kept in the Temporal Dead Zone (TDZ) until they are initialized.


// 2. Code Execution Phase
// JavaScript, being a single-threaded language, runs the code line by line.
// Line 1: let x = 2; now x is assigned the value 2.
// Line 2: let y = x * x; JavaScript looks up x from memory, calculates 2 * 2, and assigns 4 to y.
// Line 3: console.log(y); prints 4 to the console.




// 🔥 TDZ (Temporal Dead Zone)
// Declaration ho jata hai
// But access allowed nahi hota initialization se pehle

console.log(a);

function a() {}
var a = 10;

console.log(a);








