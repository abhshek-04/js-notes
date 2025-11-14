// noise type of conversion not recommeded

// console.log(3<2)//answer always in boolean
// // console.log(3=2)// ya pr = ka mtlb assin hai 
// console.log(3>2)//answer always in boolean
// console.log(3==2)//answer always in boolean
// console.log(3!=2)//answer always in boolean
// console.log(3>=2)//answer always in boolean
// console.log(3<=2)//answer always in boolean


//the reason is that an equality check == and comparisons >,<,>=,<= work differently 
//comprarisons convert null to a number , treating it as 0 

console.log(null > 0 );//false
console.log(null == 0 );//false


console.log(null >= 0 );//true



// === also cheack datatypes

console.log("3434"===3434)

