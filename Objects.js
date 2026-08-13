//declaration
const user={
    name:"Divya",
    repocount:2
}
console.log(user)
//accessing values
console.log(user.name)
console.log(user["name"])
// second one is better as Symbol can be accessed by earlier method
user.age=18//adding new property
user.repocount=5// updating value
console.log(user)
delete user.age //deleting property
console.log(user)
//singleton
const newuser= new Object()

const s1= Symbol("id")
const s2=Symbol("id")
console.log(s1==s2)
// Symbol is always unique

//Symbol in object
newuser.s3= Symbol("key")
console.log(newuser)
//freezing a object
Object.freeze(newuser)
//no update,no delete,no add
//Objects can also store functions
const jsUser= new Object()
jsUser.greeting=function(){
    console.log("Hello JSuser")
}
console.log(jsUser.greeting())