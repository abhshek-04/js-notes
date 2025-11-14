// this is object literal
const user ={
  username: "hitesh",
  loginCount: 8,
  signedIn: true
}

// - constructor function 

function User(username , loginCount , isLoggedIn){
    this.usernmae = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    // return this
}

const userOne = new User("abhishek" , 13 , true)
const usertwo = new User("shreya" , 1 , false)


console.log(userOne)