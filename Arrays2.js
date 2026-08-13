//Array2=> concat(),spread operator,flat(),isArray(),from()
const arr1=[0,1,2,3]
const arr2=[4,5,6,7,8]
let arr3= arr1.concat(arr2)
console.log(arr3)
const nums=[...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(nums)
//spread is better is cleaner readable and ES6
let arr4=[1,[23,45,[2,3,4]],44,32]
console.log(arr4.flat(1))
console.log(Array.isArray(arr4))
console.log(Array.from("Divya"))
