// immediately invoked function expresssions(IIFE)

// -- turand function execute ho jaye 
// -- globle fuctions distrube na ho 


// ()() denoted

// (function)(excute)


(function chai(){
    // named iife
    console.log(`db connected`);
})();

// jb bhi do iife laga the hai tho ; ye lagana hai 

((name)=>{
    console.log(`db connected two ${name}`)
})('abhishek')