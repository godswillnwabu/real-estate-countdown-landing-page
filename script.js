const hamburger = document.querySelector("#hamburgerPanel");
const displayNavigation = document.querySelector(".navigationWrapper");
const closure = document.querySelector(".navigationClosure");

hamburger.addEventListener("click", slideMenu);
closure.addEventListener("click", closeMenu);

function slideMenu() {
    hamburger.classList.toggle("active");
    displayNavigation.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    displayNavigation.classList.remove("active");
}

//adding more time to the countdown when you reload the page
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();


// const items = document.querySelectorAll(".countdown span");
const futureDate = new Date(2023, 7, 9, 16, 59, 0);
//const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 0); [for the more time]

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {

const today = new Date().getTime();
const t = futureTime - today;

//calculating time
//1s = 1000ms
//1min = 60s
//1hr = 60min
//1day = 24hr

//value in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

//calculate all values
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);

//set values array
const values = [days, hours, minutes, seconds];

//adding the zeros to digits below 10
function format(item) {
    if (item < 10) {
        return (item = `0${item}`);
    }
    return item;
}

items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
});

if (t < 0) {
    clearInterval(countdown);
    //displaying the expired session
   // Deadline.innerHTML = `<h2 class="expired"> This session has expired <h2>`;
}

//countdown
countdown = setInterval(getRemainingTime, 1000);
}

getRemainingTime();


