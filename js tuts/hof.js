/**
 * HOF
 * map
 * find
 * filter
 * reduce
 * forEach
 */

let arry = ["milk", "sugar", "milo", "kuli"]
let arryB = [1,2,3,4,5,6,7,8,9,11]

const value = arry.map((items, index)=>{
    
    return "My Favorite Beverage "+ items+ ' index: '+ index
});

// console.log(value)

const squared = arryB.map(arryB => arryB*arryB)

// console.log(arryB)

//filter

const filteredArray = arryB.filter(arryB => arryB%2 ===0)
console.log(filteredArray)
//find
let found = arryB.find((item)=> item >4)
console.log(found)
//foreach
const forEch = arry.forEach((item, index)=>
     console.log(index, item)
)

//reduce

const sum = arryB.reduce((val,acc) => acc + val,0)
console.log(sum)

//some
const somethings = arryB.some((item)=>item > 12);

console.log(somethings)