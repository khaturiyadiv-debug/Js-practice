let subscription="Free"
let age=25
let email="skvs523@gmail.com"

if(subscription!="Free" && age>18 && email.includes(".com")){
    console.log("Welcome to premium members")
}
else if( subscription="Free"&& age>18 && email.includes(".com")){
    console.log("welcome dear member")
}
else{
    console.log("Sorry we can't fetch your data")
}