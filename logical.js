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

let year=2010
switch(true){
    case(year>1965&&year<=1980):
    console.log("Generation X")
    break;
    case(year>1980&& year<=1996):
    console.log("Millenials")
    break;
    case(year>1996&& year<=2012):
    console.log("GenZ")
    break;
    case(year>2012&&year<=2024):
    console.log("Gen-Alpha")
    break;
    
        
    
}