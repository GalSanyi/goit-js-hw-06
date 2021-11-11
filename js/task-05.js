const input = document.querySelector('#name-input');
console.log(input);
const span = document.querySelector('#name-output');
console.log(span);


input.addEventListener('input', onInput);


function onInput(event) {
    if (input.value === '') {
        span.textContent = "Anonymous";
    } else {

        span.textContent = event.currentTarget.value;
    }
}