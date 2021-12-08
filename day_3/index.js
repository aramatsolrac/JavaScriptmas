const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
btn.addEventListener("click", snow)
// Task:
// - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
// - Run the function when the Fix button is clicked.

function snow() {
    greeting.style.font = "bold 3rem 'Mountains of Christmas', cursive";
    greeting.innerText = "🎁 Merry Christmas! 🎄"
    document.body.classList.add('fix');
}
