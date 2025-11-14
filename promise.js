// creation in Promise  , how to create promises
 
const promiseOne = new Promise(function(resolve , reject){
    // do an async task 
    // DB calls , crytography , network 
    setTimeout(function(){
        console.log('async task is complete');
        // resolve() // iske bina promise consume ho ga hi nhi 
    },3000)
})


promiseOne.then(function(){    //.then sidha connection hai resolve ke sath 
  // jo bhi function settimeout ka hai uska value ya pr retun ho ga .then ka matlb yhi hai  
  console.log("promise consumed");
})


// // other way 

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("ye task bhi ho gya ");
        resolve()
    },2000)
    
}).then(function(){
    console.log("promise ka task kaam kr rha hai ")
})


// third promise

// const thirdPromise = new Promise (function(resolve , reject){
//     setTimeout(function(){
//         console.log("connect ho gya hai ")
//         resolve({username:"abhishek", email:"abhi@gmail.com"})
//     },1000)
// })

// thirdPromise.then(function(user){
//     console.log(user);
// })


// four promise 

// const fourPromise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true 
//         if(!error ){
//             resolve({username: "avhishek" , password : "123"})
//         }else{
//             reject('error : something went wrong')
//         }

        
//     }, 1000)

// })
// // chaining 
// fourPromise.then((user)=>{
//     console.log(user);
//     return user.username
// }) .then((username)=>{ // yaha pr chaining ho rha hai matlb .then .then 
//    console.log(username);
// }).catch(function(error){
//     console.log(error);
// })


const fourPromise = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error ){
            resolve({username: "avhishek" , password : "123"})
        }else{
            reject('error : something went wrong')
        }

        
    }, 1000)

})


// chaining 
fourPromise.then((user)=>{
    console.log(user);
    return user.username
}) .then((username)=>{ // yaha pr chaining ho rha hai matlb .then .then 
   console.log(username);
}).catch(function(error){
    console.log(error);
})


// for good readableity ke liye 

fourPromise
.then((user)=>{
    console.log(user);
    return user.username
}) 
.then((username)=>{ // yaha pr chaining ho rha hai matlb .then .then 
   console.log(username);
})
.catch(function(error){
    console.log(error);
})


// finally

// fourPromise
// .then((user)=>{
//     console.log(user);
//     return user.username
// }) 
// .then((username)=>{ // yaha pr chaining ho rha hai matlb .then .then 
//    console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("bata bhai finally ho gya kya "))



// async await similar to .then .catch 

// const promiseFive = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true 
//         if(!error ){
//             resolve({username: "avhishek" , password : "123"})
//         }else{
//             reject('error : something went wrong')
//         }

        
//     }, 1000)

// })

// async function consumePomiseFive(){
    
//   try {
//       const response = await promiseFive
//     console.log(response)
// } catch (error) {
//       console.log(error)
    
//   }

// }
// consumePomiseFive()



// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let user = await response.json() // isko bhi aane mai time lg tha hai isliye ye yaha pr bhi await lge ga 
//     console.log(user)  
//     } catch (error) {
//         console.log(`e:${error} ` )
//     }
    
// }

// getAllUser()



//similar to by .then . catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((resposne)=>{
    return resposne.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})