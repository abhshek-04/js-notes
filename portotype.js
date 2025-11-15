// js default behavior is prototypeila behavior    --- parant -> grandparant -> grandGrandParant

// what is the meaning of portotype -> 


/*
array ------> object ------> null

string ------> object ------> null

function ---------> function and also object bhi hai 
*/


function multipleBy5(sum){
    return sum*5
}

// console.log(multipleBy5(5))

// console.log(typeof multipleBy5)
// console.log(multipleBy5.prototype)//{}


function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++  // this means jisne bhi bula hai 
    console.log(this.score)
}

createUser.prototype.printMe = function(){
    console.log(`username ${this.score}`);
}


// const a =  createUser("abhi" , 23)

// function se value transfer kiye a mai pr bataye nhi ki poperty update  kiya hunn  toh uske liye (new word use kr the hai)
const a = new createUser("kumar" , 23)


const b = new createUser("kumar" , 25)


a.increment()
b.increment()