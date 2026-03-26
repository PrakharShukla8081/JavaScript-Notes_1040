// Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before code execution.

// Hoisting javaScript ka default behaviour hai jisme code execute hone se phle variables
//  aur function memory me upar utha deta hai  


// “For var, the variable is hoisted and initialized with undefined, so it prints undefined.
// For let, the variable is hoisted but stays in the Temporal Dead Zone until initialization, 
// so accessing it before that throws a ReferenceError.”

console.log(a); // undefined
var a = 10;
// -------------------------------------------------------------------------------


var a;
console.log(a); // undefined
a = 10;


// -------------------------------------------------------------------------------

//function example
greet();

function greet() {
  console.log("Hello");
}
// -------------------------------------------------------------------------------

// method example
greet(); // ❌ Error

var greet = function () {
  console.log("Hello");
};