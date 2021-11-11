const counterValue = {
    value: 0,
    increment() {
        this.value += 1;

    },


    decrement() {
        this.value -= 1;
    }

};




const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const velueEl = document.querySelector('#value');


decrementBtn.addEventListener('click', () => {
    console.log('click-decrement');
    counterValue.decrement();
    velueEl.textContent = counterValue.value;

});
incrementBtn.addEventListener('click', () => {
    console.log('click-increment');
    counterValue.increment();
    velueEl.textContent = counterValue.value;
});