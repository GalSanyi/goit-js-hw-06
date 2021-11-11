const inputValid = document.querySelector('#validation-input');
console.log(inputValid);


inputValid.addEventListener('blur', oninputValid);

function oninputValid() {
    console.log('click blur');
    if (inputValid.getAttribute('data-length') === inputValid.value.lenght) {
        inputValid.classList.remove('valid');
        inputValid.classList.add('invalid');

    } else {
        inputValid.classList.remove('invalid');
        inputValid.classList.add('valid');

    }
};