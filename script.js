let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 5000);

btn.addEventListener('click' , () => {
    btn.style.pointerEvents = 'none';
	container.style.transform = `rotate(${number}deg)`;
	number += Math.ceil(Math.random() * 5000);
})

container.addEventListener('transitionend' , () => {
    btn.style.pointerEvents = 'auto';
})