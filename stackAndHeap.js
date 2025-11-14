// two types of stack and heap memory

// stack (primitive) hmesa value  ka copy mil tha hai 

let userName = "abhisek"
let anotherUserName = userName

anotherUserName = "shreya"
console.log(userName);
console.log(anotherUserName);



// heap (non-Primitive) hmesa original copy mil tha hai 


let userOne = {
    email: "usersdfasdf",
    upi:"uerisdkfj"
}

let userTwo = userOne

userTwo.email = "abhiske@gamil.com"

console.log(userOne);
console.log(userTwo);
