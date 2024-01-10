let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let period = document.getElementById('period');
let weekday = document.getElementById('weekday');
let month = document.getElementById('month');
let day = document.getElementById('day');
let year = document.getElementById('year');

function updateClock() {
    let now = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    hour.innerHTML = now.getHours();
    minute.innerHTML = now.getMinutes();
    weekday.innerHTML = weekDays[now.getDay()]
    month.innerHTML = months[now.getMonth()]
    day.innerHTML = now.getDate()
    year.innerHTML = now.getFullYear()

    if(now.getHours() == 0) {
        hour.innerHTML = 12;
    }
    if(now.getHours() > 12) {
        hour.innerHTML = now.getHours() - 12;
        period.innerHTML = "PM"
    } else {
        period.innerHTML = "AM"
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

console.log(weekday)