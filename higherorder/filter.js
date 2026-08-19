let ar=['lily','rosemary','lotus','jasmine']
//The filter() method of Array instances creates a shallow copy of a portion of a given array,
//  filtered down to just the elements from the given array that pass the test implemented by the provided function.
let result=ar.filter((flower)=>(flower.length>4))
console.log(result)
let r2=ar.filter((flower)=>{
    return flower.length>4 && flower.includes("m")
})
console.log(r2)