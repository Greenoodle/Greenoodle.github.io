const mybtn = document.getElementById("btn");
const number = document.getElementById("number");

let maximum = 6;

mybtn.addEventListener("click", function(e) {
    let x = Math.random() * maximum;
    let y = Math.floor(x) + 1;

    number.style.width = "3%";
    number.innerHTML = y;
});


