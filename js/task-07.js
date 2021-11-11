const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
inputEl.addEventListener("input", onRangeInput)

function onRangeInput() {
    spanEl.style.fontSize = inputEl.value + 'px'
};
console.log(inputEl.value);