// singleton

//const tinderUser = new Object()// singleton

const tinderUser = {}// non singleton


// object leterals

const mySym = Symbol('ksdf')

const user = {  // in object key is in string
    name: "abhishek",
    "another": "nowshek",
    email  : "alskdjf",
    age : 18 ,
    location : "bihar",
    [mySym] : "mykey1"// symbole
}

//console.log(user.another) // this is correct way but not right way but aap mostly esi method use kre ge
//console.log(user["name"]) // " " agar is mai key hua to usko bhi acces kr le ga pr phle wale mai nhi kr paye ga 
//console.log(user["another"])
// console.log(typeof user[mySym])//string
// console.log(typeof [mySym])//object
// console.log(typeof mySym)//symbol
// console.log( user[mySym])//string
// console.log( [mySym])//object
// console.log( mySym)//symbol



//object freeze

user.email = "sdjkfjskdjf@gamil.com"

//Object.freeze(user)

user.email = "abhishek@gamil.com"


user.greeting = function(){
//    console.log(`hello js user , ${this.name }`);
}

//console.log(user.greeting())



const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {4 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}
// const variable = Object.assign(target , source)
//const obj4 = Object.assign({}, obj1 , obj2,obj3)// empty {}object la matlb ye hai ki sara object usme jara hai or agar empty na do to phle jo ho ga usi me assign ho ga

// mostly use on object 
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

////////////////    de-structure            /////////////////////
const cource = {
    admin : "abhisek",
    courceInstructor : "shreya ",
}

const {courceInstructor} = cource

console.log(courceInstructor)//shreya

// change courseInstructor key in othername

const {courceInstructor : friend} = cource

console.log(friend)//shreya
