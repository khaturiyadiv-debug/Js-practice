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