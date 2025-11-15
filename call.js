// excution context jb katam ho jata hai toh value nhi mil tha hai isliye call method ka use kr the hai 

// line no 17 mai this isliye use kr rhe hai kyu ki wo phle katam ho ja rha hai 


function setUsername(username){
    //complex DB calls 
    this.username = username
    console.log("called");

}




function createUser(username , email , password){
    setUsername.call(this , username) // call is hold the referance valriable 

    this.email = email
    this.password = password 
}

const chai = new createUser("chai " , "chai@fb.con" , "34")
console.log(chai);