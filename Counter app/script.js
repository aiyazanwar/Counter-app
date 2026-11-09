let count = 0;

let number = document.getElementById("number");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");

// plus button 
plusBtn.onclick = function() {
    count = count + 1;
    number.innerHTML = count;
}

// minus button
minusBtn.onclick = function() {
    count = count - 1;
    number.innerHTML = count;
}

// reset button 
resetBtn.onclick = function() {
    count = 0;
    number.innerHTML = count;
}