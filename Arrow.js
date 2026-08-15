//this function gives current context
const student={
    name:"divya",
    sno :12145,
    logIn:function(){
        console.log(`${this.name}, Just logged in`)
        console.log(this)
    }

}

student.logIn()

 function calling(){
    let user="Divya"
    let current="Registered"
    console.log(`user ${user} is currently ${current}`)
    console.log(this.user)
}
calling()
//this keyword doesn't perform it's action inside function without object


//************************Arrow Functions************************
//explicit arrow function
const mult=(n1,n2)=>{
    return n1*n2
}

console.log(mult(5,6))

const divide=(n3,n4)=>(n3/n4)
console.log(divide(60,2))