const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
spanEl.style.fontSize = `${inputEl.value}px`;



inputEl.addEventListener("input", (event) => {





    spanEl.style.fontSize = `${event.currentTarget.value}px`;
});


// function onRangeInput(event) {
// };