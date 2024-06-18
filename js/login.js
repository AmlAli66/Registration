
var uEmail = document.querySelector("#uEmail")
var uPassword = document.querySelector("#password")
var loginBtn = document.querySelector("#loginBtn")
var welcomeBox = document.querySelector("#welcomeBox")
var loggedInUser = localStorage.getItem("loggedInUser");
var errorMessege = document.querySelector('.errorMessege')


loginBtn.addEventListener("click", function () {
    if (uPassword.value.trim() !== "") {
        loginFun();
        clearForm();
    } else {
        errorMessege.innerHTML = `<p style="color:red;">All input is required</p>`
    }
});


function loginFun() {
    var enteredEmail = uEmail.value.trim();
    var enteredPassword = uPassword.value.trim();

    var foundUser = usersList.find(user => user.uEmail === enteredEmail && user.uPassword === enteredPassword);

    if (foundUser) {
        // alert(`Welcome ${foundUser.uName}!`);
        setTimeout(function () {
            window.location.href = "home.html";
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        }, 1500)
    } else {
        errorMessege.innerHTML = `<p style="color:red;">Invalid email or password. Pleasetry again.</p>`
    }


    if (usersList.length === 0) {
        errorMessege.innerHTML = `<p style="color:red;">No users registered yet. Please sign up first.`
    }

}


