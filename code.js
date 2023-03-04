function validateForm(){
    const fnameEl = document.getElementById("fname");
    const lnameEl = document.getElementById("lname");
    const emailEl = document.getElementById("email");
    const passwordEl = document.getElementById("password")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // adding error classlist to html input 
    let inputEl = document.querySelectorAll("input")
    for(let i =0; i < inputEl.length; i++){
        if(inputEl[i].value.trim() === ''){
            inputEl[i].classList. add("error")
        } else {
            inputEl[i].classList.remove("error")
        }
    }

    
    let emptyField = false;

    if(fnameEl.value == ""){
        fnameError.innerHTML = "First name cannot be empty";
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fname").classList.add("active");
        emptyField = true;
    } else{
        fnameError.innerHTML = "";
        document.getElementById("fname").style.borderColor = "Grayish Blue";
        document.getElementById("fname").classList.remove("active");
        emptyField = false;
    }

    if(lnameEl.value == ""){
        lnameError.innerHTML = "last name cannot be empty";
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lname").classList.add("active");
        emptyField = true;
    } else {
        lnameError.innerHTML = "";
        document.getElementById("lname").style.borderColor = "Grayish Blue";
        document.getElementById("lname").classList.remove("active");
        emptyField = false;
    }


    // to validate the email input if it is correct according to email input standard
    if (emailRegex.test(emailEl.value)) {
        emailError.innerHTML = "";
        document.getElementById("email").style.borderColor = "Grayish Blue";
        document.getElementById("email").classList.remove("active");
        emptyField = false;
    } else {
        emailError.innerHTML = "looks like this is not an email";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").classList.add("active");
        emptyField = true;
    }

    if(passwordEl.value == ""){
        passwordError.innerHTML = "password can not be empty";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").classList.add("active");
        emptyField = true;
    } else {
        passwordError.innerHTML = "";
        document.getElementById("password").style.borderColor = "Grayish Blue";
        document.getElementById("password").classList.remove("active");
        emptyField = false
    }

    return true;
}