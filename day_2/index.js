const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
// - Add the functionality to switch the theme between 'Christmas' and 'snow'.
document.getElementById('christmas').onclick = function changeChristmas() {
    body.classList.add("christmas")
    body.classList.remove("snow")
    greeting.innerText = "Merry Christmas! 🎄"
};

document.getElementById('snow').onclick = function changeSnow() {
    body.classList.add("snow")
    body.classList.remove("christmas")
    greeting.innerText = "Let it Snow! ☃️"
};
