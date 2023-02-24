

function validatePassword(){
    let userPassword = document.forms["loginForm"]["userPassword"].value;
    let lowerCaseCheck = /[a-z]/g;
    let upperCaseCheck = /[A-Z]/g;
    let numberCheck = /[0-9]/g;
    
    document.getElementById("passwordError").innerText="";
    console.log("Test Change");

    if(!userPassword.match(lowerCaseCheck))
    {document.getElementById("passwordError").innerText="lowercase required";
    }
    if(!userPassword.match(upperCaseCheck))
    {document.getElementById("passwordError").innerText+=" uppercase required";
    }
    if(!userPassword.match(numberCheck))
    {document.getElementById("passwordError").innerText+=" number required";
    }
}