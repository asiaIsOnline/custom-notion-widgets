// Document Elements
let hmsDisplay= document.getElementById('hours-minutes-seconds');
let msDisplay = document.getElementById('milliseconds');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// Global Variables
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let int = null; 

function stopwatch () {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Adds an additional 0 so the times don't display as single digits
    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    hmsDisplay.innerHTML = `${h}:${m}:${s}`
    msDisplay.innerHTML = `${ms}`
}

// Event Listeners
startBtn.addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }

    int = setInterval(stopwatch, 10);
})

stopBtn.addEventListener("click", () => {
    clearInterval(int);
})

resetBtn.addEventListener("click", () => {
    clearInterval(int);
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    hmsDisplay.innerHTML = "00:00:00"
    msDisplay.innerHTML = "000"
})