var c=30
let a=300
num()
function num(){
    let a=40
    const b=45
    console.log("inner",a)
}
num()


console.log(a)
console.log(c)

//var a=10
// a->undefined but still accessible
//let a=10
//a-> uninitialized  not acessible
//TDZ = temporal dead zone
//var let const are block scope

//as per block scope var avriable shouldn't be accessed outside the scope but it is still accessible 
// thus we used let and const 
//here a =300 is in global scope