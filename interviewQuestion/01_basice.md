Q1: let, var, and const me difference?

🔹 var

Function scoped

Reassigned allowed

Redeclare allowed

Hoisted with value = undefined

Leak ho sakta hai (not safe)

🔹 let

Block scoped ({ } ke andar ka scope)

Reassign allowed

Redeclare not allowed

Hoisted but not initialized (Temporal Dead Zone)

🔹 const

Block scoped

Value cannot be reassigned

But objects can be changed internally

const user = {name: "Abhi"};
user.name = "Raj"; // allowed




Q2: Output kya hoga?

console.log(typeof null);// objects
console.log(typeof undefined);//undefined

console.log("5" - 1); // 4  converts to number and subtracts
console.log("5" + 1); // "51" (string concatenation) converts to string and joins

Q4: Hoisting kya hota hai?
Hoisting means JS moves declarations to the top before execution.

example
console.log(a);  // undefined
var a = 10;

JS internally behaves like:

var a;       // lifted up
console.log(a);
a = 10;


Q5: Output: // undefined
console.log(a);
var a = 10;