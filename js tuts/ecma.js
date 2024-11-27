/**
 * let, var, const
*/

/**
 * Hoisting
 * Block scoped
 * Mutable
 * re-Initialize
 * 
 */

var myName = "sparke"
let myAge = 30
const PI = Math.PI


console.log('myName')
console.log('myAge')
console.log(PI)



//spread

let arry = ["milk", "sugar", "milo", "kuli"]
let arrayA = [...arry, "honey", "boli"]

console.log(arrayA)

// for (let i = 0; i < arrayA.length; i++) {
//    console.log(arrayA[i])
    
// }

//for of
//for in

for (let index of arrayA) {
 console.log(index)
}
for (let index in arrayA) {
 console.log(arrayA[index] + index)
}