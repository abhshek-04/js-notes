const myNums = [1,2,3,4,5,6,7,8,9]

// Use filter() when you want to keep/remove values

const newNums = myNums.filter( (item)=>{
    return item > 4
} )
// console.log(newNums);


myNums.forEach( (item) => { 
    if(item > 4){
        // console.log(item)
    }
})

// const bookPublic = books.filter( (bk) => bk.publish > 2000 )




const myNumers = [1,2,3,4,5,6,7,8,9]

myNumers.forEach( (item)=>
    {
        item = item + 10
        // console.log(typeof item)
        return
    })
//Use map() when you want to modify values

// const newMuns = myNumers.map ( (num) => num  + 10)

// console.log(typeof newMuns)


// this is chaning

const newMuns = myNumers
            .map((num) => num * 10)// [10, 20, 30, 40, 50, 60, 70, 80, 90]
            .map((num)=>num + 10)//[20, 30, 40,  50, 60,70, 80, 90, 100]

            // console.log(newMuns)



// reduce method

// const variablename = myNumers.reduce((acc , currval) =>{} ,0)
const totalNumber = myNumers.reduce((acc , currval)=>{
    // console.log(`acc : ${acc} and currval : ${currval}`)
    
          return acc + currval  
        } , 0) // 0 is acc
        
// console.log(totalNumber)



const shoppingCart = [

    {
        itemName : "stand",
        price    : 9
    },
    {
        itemName : "desk",
        price    : 8
    },
    {
        itemName : "keyboar",
        price    : 9
    },
    {
        itemName : "monitor",
        price    : 9
    },
    {
        itemName : "mouse",
        price    : 6
    }
]


const totalPrice = shoppingCart.reduce(( acc ,item) => 
(acc + item.price), 0 )

console.log(totalPrice)