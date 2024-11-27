/** Types of Loops
 * forloop
 * while loop
 * do while loop
*/

let object = {}
let arrayOfCars = ['Audi', 'Nissan', 'Tesla', 'Tesla', 'camry', 'Micra', 'SUV', 'Toyota', 'Benz', 'Volkswagen'];

function runLoop(){
for (let i = 0; i < 10; i++) {
    console.log("iteration: ",i);

    document.getElementById('display').innerHTML += `<li> ${arrayOfCars[i]}</li>`    
document.getElementById('display').style.color = "blue"
}
}

runLoop()