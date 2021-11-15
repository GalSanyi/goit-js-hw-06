const refs = {
    loginForm: document.querySelector(".login-form"),
    email: document.querySelector(".login-form input[name='email']"),
    password: document.querySelector(".login-form input[name='password']"),
    button: document.querySelector(".login-form button"),
};

refs.loginForm.addEventListener("submit", onFormSubmit);


function onFormSubmit(event) {

    event.preventDefault();


    if (!checkField(refs)) return;


    // ---------------------------------------------------------
    const resObject = new FormData(event.currentTarget);

    console.log({ resObject });
    // ---------------------------------------------------------


    refs.loginForm.reset();
}

function checkField({ email, password }) {
    if (email.value === "") {
        alert("Email field is empty");
        return false;
    }
    if (password.value === "") {
        alert(" Password field is empty");
        return false;
    }
    return true;
}