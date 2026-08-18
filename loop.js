for(let i=0;i<=10;i++){
    console.log(i)
}

let ar1=['batman','superman','flash']
for(let j=0;j<=(ar1.length);j++){
    console.log(ar1[j])
}
for (let i = 0; i <= 10; i++) {

    if (i === 9) {
        break;
    }

    for (let k = 0; k <= 10; k++) {

        if (i === 6) {
            continue;
        }

        console.log(i, '*', k, '=', i * k);
    }
}

flower=['marigold','dandelion','rose','tulip']
let i=0
while(i<flower.length){
    console.log(flower[i])
    i++
}

// diff between while and do while is
//in while firstly condition and checked then loop performs action
//in do while firstly code runs then coding is checked

let f=0
do{
    console.log(`welcome to js practice repo`)
    f++
}while(f<5);