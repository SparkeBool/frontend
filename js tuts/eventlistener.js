
let container = document.getElementById('container')

function checkEvent(event){
    console.log(event)
    container.style.backgroundColor = "blue"
}

function checkLeave(event){
    console.log(event)
    container.style.backgroundColor = "red"
}

container.addEventListener('mousedown', (event)=>{
    
    container.style.backgroundColor = "purple"

})

container.addEventListener('mouseup', (event)=>{
    
    container.style.backgroundColor = "grey"

})

// function keyEvent(event) {
//     console.log(event.key)

//     if(event.key == 'c'){
//         console.log('you just entered c')
//     }else{
//         console.log(`you just entered ${event.key}`)
//     }
    
// }

// document.getElementById('userInput').addEventListener('keypress', (e)=>{
//     // alert(e.key);
//     userInput.style.backgroundColor ='red'
// })
document.getElementById('userInput').addEventListener('focus', ()=>{
   console.log('you clicked the input')
    
})

//ticktactoe game