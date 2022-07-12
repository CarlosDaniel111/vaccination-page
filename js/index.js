let scheduleText = document.getElementById("schedule-text");
let scheduleBox = document.getElementById("schedule-box");

scheduleText.addEventListener("click", () => {
    scheduleBox.classList.toggle("schedule-toggle");
})

let navBar = document.getElementById("nav__bar");
let navEnlaces = document.getElementById("nav__enlaces");

navBar.addEventListener("click", () => {
    navEnlaces.classList.toggle("nav__toggle");
})