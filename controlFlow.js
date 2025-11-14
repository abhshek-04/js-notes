// sara true or false pr hi hai sb controlflow jaise if{ huaa tho } chle ga nhi tho nhi chle ga 



if(1==2){
    console.log("skdfj")

}
if(4!=2){
    console.log("skdfj")
}

//logical oprator ///
//     && ----> and  oprator means sari value true ho nhi chaiye 
//     || -----> means ki koi ek oprator shi ho na chahiye 
// implicit scope 

const balance = 1000

//if (balance > 344) console.log("test");never use this type  of code 


// fasly values


// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


// truthy values

// true , "0" , 'false  , " " , [] , {} , function(){}


// *****************************************

/*
false == 0 ----> true 

false == '' -----> true


0 == '' -----> true

*/



// Nullish Coalescing Operator (??) isme sari khani do hi keywords pr hai null undefined pr hai 

let val1 ;
val1 = 5 ?? 10 //5
val1 = null?? 19 //19
val1 = undefined?? 19 //19
val1 = undefined?? 19?? 10 //19 first value ko lega 
// use case agar null aaya hai tho 19 print ho kyu agar in future koi code me null hai or  hum ne ye use nhi kiya hai tho ?? aage ka code nhi chle ga 
console.log(val1)


// Terniary Operator

//  condition ? true : false


const iceTeaPrice = 100

// iceTeaPrice <= 80 ? console.log("les than 80") : console.log("more than 80")

