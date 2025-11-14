// function orderTea(teaType){
//     function confirmOrder(){
//         return `"Order confirmed for chai ${teaType} `;
//     }
//      return confirmOrder();
// }

// let yourOrder = orderTea("lemon");
// console.log(yourOrder);

const calculateTotal = (price , quantity)=> price * quantity
    

// console.log(calculateTotal(23 ,54))


function returnMethod (gf){

   return `${gf} hellow meri jan kaise ho`
     
}

// console.log(returnMethod("abhiskek"))




// function calculateCartPrice(num1){
//     return num1
// }


//====== rest opretors  means hai ki sb ko ek sath kr do example see in calculatecartPrice==========




function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(299, 3434, 3434))

const objects = {
    name : "abhisek",
    email: "ejajdalkfjasjalsdjfd",
}


function greeting (anyobjects){
    return`your name is ${anyobjects.name} and your email is ${anyobjects.email} `
}

console.log(greeting(objects))

function greeting (anyobjects){
    console.log(`your name is ${anyobjects.name} and your email is ${anyobjects.email} `)
}

greeting(objects)