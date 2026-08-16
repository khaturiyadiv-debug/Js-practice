//IIFE means Immediately Invoked Function Execution
//run code without getting polluted by Global variable pollution


(function welcome(){ console.log(`Welcome to Js practice repository`);
} )();
//named IIFE 
(()=>(console.log(`Welcome to Immediately Invoked Function Execution`)))();