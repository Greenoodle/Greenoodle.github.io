const mybtn = document.getElementById("btn");

let maximum = 6;

mybtn.addEventListener("click", function(e) {
    let x = Math.random() * maximum;
    let y = Math.floor(x) + 1;
    document.getElementById("number").innerHTML = y;
    
});


