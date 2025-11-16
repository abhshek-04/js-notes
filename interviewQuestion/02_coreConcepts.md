## map vs forEach

map() → value ko change/transform karta hai aur new array return karta hai.
forEach() → sirf loop chalata hai, kuch return nahi karta (undefined).


## == vs ===

== → only value check (type conversion hoti hai)

=== → value + type dono check (strict)


let x = [1,2,3];
let y = x;
y.push(4);
console.log(x);//[1, 2, 3, 4]
console.log(y);//[1, 2, 3, 4]


## Closure

Easy Definition (yaad rakhna):

Closure tab banta hai jab ek function apne outer function ke variables ko yaad rakhe — even after outer function has finished.

Simple words:

Ek function ke andar dusra function

Inner function outer function ka data use kar sakta hai

Outer function return ho jaye, tab bhi data yaad rehta hai!

Example:
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  }
}


inner() ko count yaad rehta hai — this is closure.


## const a = outer(); a(); a();

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  }
}
const a = outer();
a();//1
a();//2

Why?
outer() ek closure return karta hai
count variable uske memory me store rehta hai
Har a() call count ko badha deta hai

## Async JavaScript

## promise // Promise ek object hota hai jo future me result dega — success ya failure.

Promise ke 3 states hote hain:

Pending
Fulfilled (success)
Rejected (error)

const p = new Promise((resolve, reject) => {
  resolve("Success");
});

Use kab hota hai?

 API calls
 DB calls
 File read/write
 Network operations


## setTimeout

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

Why?
JS line by line execute hota hai
setTimeout callback queue me chala jata hai, event loop ke baad run hota hai
Isliye B last me print hota hai
This is Event Loop concept.

output:-
A
C
B

## async/await
async/await se asynchronous code ko simple normal code ki tarah likhte hain.(async/await makes asynchronous code look simple and readable.)

Instead of:
fetch().then().catch();

we can write
const data = await fetch();

Async/await:
Code clean banata hai
Error handling easy hoti hai
Promises ko easy banata hai