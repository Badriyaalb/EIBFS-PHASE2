

function validateForm(){
    let userName = document.forms["loginForm"]["userName"].value;
    if(userName.length==0){
        document.getElementById("userNameError").innerText = "Please enter a username";
        
    } else if(userName.length<=8 || userName.length >=20){
        document.getElementById("userNameError").innerText = "Please enter a username between 8 and 20 characters";
        return false;
    }

    let userPassword = document.forms["loginForm"]["userPassword"].value;
    if(userPassword.length==0){
        document.getElementById("userPasswordError").innerText = "Please enter a password";
        
    } else if(userPassword.length<=8 || userPassword.length >=20){
        document.getElementById("userPasswordError").innerText = "Please enter a password between 8 and 20 characters";
        return false;
    }
}


    