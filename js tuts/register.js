
window.addEventListener('load', ()=>{
    getUsers();
})


let registerArray = []

function registerUser(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let small = document.getElementById('smallText');
    if (password !== confirmPassword) {
        small.innerText = "Passwords do not Match!"
        
    } else{

   let registerObject ={
        firstName, 
        lastName, 
        email,
        phoneNo, 
        password, 
        confirmPassword
    }

    registerArray.push(registerObject)
}

    displayUser();
    saveUsers()
    // console.log(registerArray)
}

function displayUser(){
    let display = '';
    for (let i = 0; i < registerArray.length; i++) {
        display += `
            <tr>
            <td>${i+1}</td>
            <td>${registerArray[i].firstName +" " + registerArray[i].lastName} </td>
            <td>${registerArray[i].email}</td>
            <td>${registerArray[i].phoneNo}</td>
            <td>
            <button class="btn btn-sm btn-info">Edit </button>
            <button class="btn btn-sm btn-danger">Delete </button>
                  </td>


            </tr>
        
        `;

        document.getElementById('display-users').innerHTML =display;
        
    }
}

function saveUsers(){
    let stringifyUser = JSON.stringify(registerArray)

    localStorage.setItem('registeredUsers', stringifyUser)
}

function getUsers(){

    let getUsers = localStorage.getItem('registeredUsers');

    if(getUsers){
        registerArray = JSON.parse(getUsers);
        displayUser()
    }

}