const heading = document.getElementById('main-heading')

const subHeading = document.querySelector('.info')
const button = document.querySelector("button")

console.log(heading.textContent)
console.log(subHeading.textContent)
console.log(button.textContent)


// heading.textContent = "Sparke is king"
// subHeading.textContent = "under the sun"
// subHeading.style.color ='blue'
// subHeading.style.fontSize ='30px'


const newDiv = document.createElement('div')
newDiv.innerHTML=`<h1 class="text-danger"> Lovet is a good person</h1>
<img  width="200" src="image1.jpg" >

`
newDiv.style.border = '2px solid green'
newDiv.style.width ="80%"
newDiv.style.padding ="10px"
newDiv.style.margin ="auto"

document.body.appendChild(newDiv)
 