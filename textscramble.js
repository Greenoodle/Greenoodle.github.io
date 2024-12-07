const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-={}[]|?/>.<,";

const myname = document.querySelector(".bottom");
const inner = myname.innerText;
let iters = 0;
let text = ""

myname.addEventListener("mouseover", function (e) {
const interval = setInterval (() => {
    text = myname.innerText.split("").map((letter, index) => {
    if (index < iters) {
        return inner[index];
    }
    return letters[Math.floor(Math.random() * letters.length)];
    }).join("");
    myname.innerText = text;
    iters += 1 / 3;

    if (iters > inner.length) {
        iters = 0;
        myname.innerText = inner;
        clearInterval(interval);
    }
}, 35)
});

function mapper(iters, index) {
    if (index < iters) {
        return inner[index];
    } 
    return letters[Math.floor(Math.random() * letters.length)];
}


