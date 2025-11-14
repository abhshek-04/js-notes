let score = "sdjf349857"


//two ways to prints
console.log(typeof score);
console.log(typeof(score));

//change the typre of valuse in number with word is (Number)
let valueInNumber = Number(score)

console.log(typeof valueInNumber)

//let score = "sdjf349857" convert in number but NaN

console.log(valueInNumber)//NaN


/*
"33" = 33
"333abc" = NaN
true = 1; false= 0
*/

let isLoggedIn = 1

let booleanInLoggedIn = Boolean(isLoggedIn)
console.log(booleanInLoggedIn)//true

console.log(typeof booleanInLoggedIn)//boolean
console.log(typeof isLoggedIn)//number
/*
 1 = true
 0 = false
"" = false,
"sdkjf"= true
*/

let number = 1

let numberToString = String(number)
console.log(numberToString)//1

console.log(typeof numberToString)//string




//*************operations******************


let x = 3;
console.log(x);//3

let y = x++;
console.log(y);//3

console.log("x: " + x);//4

console.log("y: " + y);//3

let a = 3;
console.log(a);//3

let b = ++a;//1+4
console.log(b);//4


console.log(a);//4
console.log(b);//4



