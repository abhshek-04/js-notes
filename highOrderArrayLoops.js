// for of 


// (element) ka matlb hai yaha pr variable ka baat ho rha hai 
// (object) ka mantlb arr ka baat ho rha hai 
const arr = [1 , 2 , 3 , 4 , 5 , 6 ]


// for (const element of object) {
    
// }


for (const num of arr) {
//   console.log(num);
}



const greetings = "hello world"

for (const hello of greetings) {
    // console.log(hello);
}

// Map unique value ke liye jana ja tha hai mtlb repeat value nhi aaye ga


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
// map.set('Fr' , "France")


// console.log(map);

//loop in map 
for (const  key of map) {
    // console.log(key);
    
}

// de-structure in map 

for (const [key , value]  of map) {
    // console.log(`${key} :- ${value}`)
    
}


const myObject = {
    avh : 'erueru',
    name : 'abhiske'
}

// not work in Object for (forof)

// for (const obj of myObject) {

//     console.log(obj)
    
// }


// in object we use (forin)


for (const key in myObject) {
    //   console.log(key)
}

// de-structure

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}

const value = ['lskdf' , 'dskf', 'dklf']
// yaha pr key ka mtlb hai index value
for (const key in value) {
//    console.log(key);  
}
// value find 
for (const key in value) {
//    console.log(value[key]);  
}



// for each loop 



coding = ["js" , "ruby" , "java" , "cpp" , ]


coding.forEach(function (item){
    
    // console.log(`ho gya re`)
    // console.log(item)
    
})


coding.forEach( (item)=>{
    // console.log(item)
})


function printMe(item){
   console.log(item);

}
// ya pr hum refrence pass ke rhe hai execue nhi kr rhe hai wo print khud kr le ga
// coding.forEach(printMe)





const myConding =[
    {
        language : "javascript",
        fileName : "js"
    },
    {
        language : "java",
        fileName : "java"
    },
    {
        language : "python",
        fileName : "py"
    },
]


myConding.forEach(
    function (kuchBhiNameDo){
        console.log(kuchBhiNameDo.fileName);
    }
)