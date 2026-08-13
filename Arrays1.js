//Arrays1=> declaration,data type,push(),pop(),unshift(),shift(),includes(),indexOf(),join(),slice(),splice()

//declaration of arrays
const myar=[0,1,2,3]
const newar= new Array(1,2,3,4)
console.log(typeof myar)
console.log(typeof newar)//type=> object
console.log(newar)

//methods
myar.push(3)//add element at the end of the array
console.log(myar)
console.log(myar.pop())// pop remove last element
newar.unshift(0)// add element in the beginning of array
console.log(newar)
console.log(newar.shift())//removes element from the starting of array
console.log(myar.includes(3))// checks whether element is present or not
console.log(myar.indexOf(2))//returns index and if not present -1
const joint= myar.join("-")
console.log(joint)//typeOf => string
let myn1=myar.slice(1,4)
console.log(myn1)
let removed = newar.splice(1,4)
console.log(newar)
console.log(removed)