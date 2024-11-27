

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let displayError = document.getElementById('smallText')

    let getUsers = localStorage.getItem('registeredUsers');

    let  registerUsers = JSON.parse(getUsers);
    const user = registerUsers.find(user => user.email == email)
      
      if (!user){  
        displayError.style.display ="block";
        displayError.innerHTML ="Invalid email or password"
        return;
      }

      if(password != user.password){
        displayError.style.display ="block";
        displayError.innerHTML ="invalid email or password";
        return;
      }

    alert('Login Successful!')
    window.location.href = `welcome.html?user=${user.email}`;


}


