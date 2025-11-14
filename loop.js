// for 

/*
step 1  : start with index = 0 and also initialise  
step 2 : check condition (index < 10 ) if condition check is true them in scope code is run and if false then no run code in scope 

now 

step 3 : line 15 mai aane ke phle index++ increment ho ga 
fir step2 : ho ga fir scope ka code chale ga fir same process tb tk jb (index < 10 ) ye false na ho jaye
*/

// for(let index = 0 ; index <= 10 ; index++){
//     const element = index ; 
//     console.log(element);
// }


// for(let index = 0 ; index <= 10 ; index++){
//     const element = index ;

//     console.log(element);
        
//     if(element == 3 ){
//         console.log("3 is best no.")
//     }
// }


for (let i = 0; i < 10; i++) {
   // console.log(`outer loop ${i} `)
    for (let j = 0; j < 10; j++) {
   // console.log(`inner loop ${j} `)
        
        
    }
    
}


let myArray = ["flash " , "batman" , "superman"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}




// break and constinue

// break ( mtlb ki aage nhi chle ha )
for (let index = 1; index < 20; index++) {
    if(index ==5 ){
        //console.log(`milga 5`)
        break
    }

    //console.log(index)
    
}


//continue (mtlb ki ek skip kr de ga fir continue chle ga aage fir )
for (let index = 1; index < 20; index++) {
    if(index ==5 ){
        console.log(`milga 5`)
        continue
    }

    console.log(index)
    
}