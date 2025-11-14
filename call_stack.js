// important for interview 

/*
javascript execution context 

1. Global execution context

{} ----> #global execution context  ----> this  (broweser mai window object ho tha hai or node , bun , etc mai undefine object ho tha hai )

js is a single thread 


2. function execution context 



3. eval execution context 
*/





/* let understand with example 
 let val1 = 10
 let val2 = 5
 function addNum(num1 , num2){
    let total = num1 + num2 
    return total
 
 }
let result = addNum(val1 , val2)
let resrult = addNum(10, 2)



1 global execution 

2 memory phase 

val1 --> undefined
val2 --> undefined
addnum --> undefined
result1 --> undefined
result2 --> undefined

3 execution Phase 

val1 <----10
val1 <----10
add Num   ------  is a function so in every function  create sandBox  --->  new variable enviroment + execution thread  


same process in create sandBox  

1. memory Phase
val1 -----> undefined 
val2 ----> undefined 
total ---> undefined

2. execution context 
num1 ------> 10
num2 ---------> 5
total -------> 15

*/