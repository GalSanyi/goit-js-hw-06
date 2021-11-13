 const body = document.querySelector('body');
 const Background = document.querySelector('.color');
 const button = document.querySelector('.change-color');



 function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

 button.addEventListener('click', onGenerator);

 const color = getRandomHexColor();

 function onGenerator() {
     getRandomHexColor();
     body.style.background = color;
     button.style.color = color;
     Background.textContent = color;

 };