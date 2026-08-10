console.log("Hello World");
// we use const and let to define variable insted of var because of block and functional scope
let a=56;
const num=89;
const name="Coder";

console.log(a);
console.log(num);


//***************************************DATA TYPES************************ */
//NUMBER
//BIG INT
//STRING
//BOOLEAN
//NULL=> STANDALONE VALUE
//UNDEFINED
//SYMBOL=> UNIQUE
//OBJECT
//ARRAY

// Data types are of two types :-
//1.primitive
//2.non-primitive

//Primitive => Stack memory => we get copy
//Non-primitive => Heap memory => we get reference 

console.log(typeof a);
console.log(typeof undefined);
console.log(typeof null)
console.table([a,num,name])