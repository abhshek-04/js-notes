async function test(){
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
console.log("3");
test();
console.log("4");

## solution
console.log("3") → runs first
test() starts → prints "1"
await ke baad wala code microtask queue me chala jata hai
console.log("4") → normal code hai so runs next
Last me "2" print hota hai

output // 3,1,4,2


## this

Wo jis scope me likha hota hai, uska this use karta hai.(Isko kehte hain:

Lexical this)

Q
const obj = {
  name: "Abhi",
  fn: () => {
    console.log(this.name); 
  }
}
this yaha obj ko point nahi karega.
It will point to global scope.
output:- //undefined

Why?
fn is an arrow function
Arrow function ka this = global
Global me koi name nahi hota
So output: undefined


## importent

console.log([1,2,3] == [1,2,3]); // false

Reason (very important):
Arrays (and objects) reference type hote hain.
So:
  [1,2,3] ek new memory
  [1,2,3] ek dusri new memory
Even though values same hain, memory (reference) alag hai → false
Easy line yaad rakhna:
  Objects and arrays compare by reference, not value.

## event loop (Event Loop accepts tasks from queues and decides what to run next in JavaScript.)

Or
Event loop async code ko manage karta hai — pehle sync code run karta hai, phir callbacks/microtasks run karta hai.

