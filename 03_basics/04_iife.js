//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named iife
    console.log('DB CONNECTED');
})();

// ()() //Used to declare iife 
// always use ; at the ending so the compiler can understand that it's breakpoint

(() => {
    //unnamed iife
    console.log('DB CONNECTED TWO');
})();

((name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO, ${name}`);
})('aditya'); // used with parameters

