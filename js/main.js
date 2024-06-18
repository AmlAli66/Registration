
var username = document.querySelector("#userName")
var uEmail = document.querySelector("#useremail")
var uPassword = document.querySelector("#uPassword")
var signUpBtn = document.querySelector("#signUpBtn")
var errorMessege = document.querySelector('.errorMessege')
var usersList;


if (localStorage.getItem('list') != null) {
    usersList = JSON.parse(localStorage.getItem('list'));
}
else {
    usersList = []
}

signUpBtn.addEventListener("click", function () {

    if (validateUserName() && validateEmail() && validatePassword()) {
        if (isEmailUnique(uEmail.value)) {
            signUpFun();
            clearForm();
            errorMessege.innerHTML = "";
            console.log("done");
            window.location.href = "index.html";
        } else {
            errorMessege.innerHTML = `<p style="color:red;">This email is already registered. Please use a different email.</p>`;
        }
    }
    else {
        errorMessege.innerHTML = `<p style="color:red;">please fill the form correctly </p>`
    }

})


function signUpFun() {
    var userObj = {
        uName: username.value,
        uEmail: uEmail.value,
        uPassword: uPassword.value
    }
    usersList.push(userObj);
    localStorage.setItem('list', JSON.stringify(usersList))
    console.log("done done");
}

function clearForm() {
    username.value = ''
    uPassword.value = ''
    uEmail.value = ''
}

function isEmailUnique(email) {
    return !usersList.some(user => user.uEmail === email.toLowerCase());
}

function validateUserName() {
    var validateName = username.value.trim();
    return validateName.length >= 3;
}

function validateEmail() {
    const email = uEmail.value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log('ttttttttttttttttt')
    if (!email) {
        return false;
    } else if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }

}

function validatePassword() {
    const password = uPassword.value.trim();
    if (password.length < 8) {
        errorMessage.innerHTML = `<p style="color:red;">Password must be at least 8 characters long.</p>`;
        return false;
    }
    // Check for at least one uppercase letter, lowercase letter, number, and special character
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    if (!regex.test(password)) {
        errorMessage.innerHTML = `<p style="color:red;">Password must contain at least one uppercase letter, lowercase letter, number, and special character.</p>`;
        return false;
    }

    return true;
}
////////////////////////////////////////////////////////////////////
