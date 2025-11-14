//                           there are two types of datatypes 

// 1 primitive(call by value (copy mai changes ho the hai original value mai change nhi ho tha hai  ) )

// 7 types : String , Number , Boolean , null , undefined , Symbol, BigInt

// const id = Symbol('123')
// console.log(typeof id)
// const anotherId = Symbol('123')
// console.log(typeof anotherId)
// // symbol always uniqe id de tha hai value kyu n same ho pr id always diffrence ho ga

// console.log(id === anotherId)//false 

// const bigNumber = 238974578457875n//bigInt


//                          ## javascript is dyanamic types

// 2. Reference (Non promitive)

// Array , Objects , Functions


// call by value 

a = 10 
 
 function changeValue(num){
    num = 20 
    // console.log(num + 1)
    // console.log(num)
    
}
// changeValue(a)

// console.log(a)


let obj = { 
    value: 10
 };

function changeObject(o) {
   o.value = 20; 
//   console.log("Inside function:", o);
}

changeObject(obj);
// console.log("Outside function:", obj);