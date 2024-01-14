const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const currentAmount = document.getElementById("currentAmount");
let count = 0;

increaseBtn.onclick = function() {
    count++
    currentAmount.innerHTML = count;
}

decreaseBtn.onclick = function() {
    count--;
    currentAmount.innerHTML = count;
}

resetBtn.onclick = function() {
    count = 0
    currentAmount.innerHTML = count;
}
