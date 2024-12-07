const mybtn = document.getElementById("btn");
const number = document.getElementById("number");

const maximum = 6;
const timer = 1000;
const milli = 100;
const count = Math.ceil(timer/milli);
let iterations = 0;

// <------------Randomly Generates Dice Roll on Click----------------->
mybtn.addEventListener("click", function(e) {
    number.innerHTML = Math.floor(Math.random() * maximum) + 1;
    number.style.width = "3%";

    const interval = setInterval(() => {
        randomGenerator(interval);
    }, milli);
});

function randomGenerator(interval) {
    number.innerHTML = Math.floor(Math.random() * maximum) + 1;
    if(iterations >= count) {
        iterations = 0;
        onEnd(interval);
    }
    iterations += 1;
}

function onEnd(interval) {
    let x = Math.random() * maximum;
    let y = Math.floor(x) + 1;
    number.innerHTML = y;
    clearInterval(interval);
}





