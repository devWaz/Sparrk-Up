const container = document.querySelector(".container");
const btn = document.getElementById("spin");
const number = Math.ceil(Math.random() * 5000);
const display = document.querySelector('.display');

let deg = 0;
let zoneSize = 45;

const wheelArea = {
    1: "1",
    2: "8",
    3: "lighter",
    4: "6",
    5: "5",
    6: "Pack of Cigarette",
    7: "Recharge Card",
    8: "2"
}

const handleWin = (actualDeg) => {
    const wheelAreaNo = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = wheelArea[wheelAreaNo];
}

btn.addEventListener('click' , () => {
    display.innerHTML = "-"
    btn.style.pointerEvents = 'none';
	container.style.transform = `rotate(${number}deg)`;
	number += Math.ceil(Math.random() * 5000);
});

container.addEventListener('transitionend' , () => {
    btn.style.pointerEvents = 'auto';

    // handleWin(actualDeg);
});