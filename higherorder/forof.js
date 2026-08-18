//for...of loop
let dishes = [
    "Paneer Tikka","Masala Dosa","Chole Bhature","Rajma Chawal","Palak Paneer","Aloo Paratha",
    "Pav Bhaji"]
for(const item of dishes){
    console.log(item)
}

let wel="welcome"
for(const letter of wel){
    console.log(letter)
}
//map is object that hold unique key value pair
let map= new Map()
map.set('paint','paint brush')
map.set('rubber','sharpener')
map.set('black board','rubber')

console.log(map)

for(const [key,value] of map){
    console.log(key,':',value)
}
//for..of can loop objects

