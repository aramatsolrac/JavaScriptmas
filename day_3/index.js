const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

// Task:
// - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
// - Run the function when the Fix button is clicked.

document.getElementById("btn").onclick = function fix() {
    document.getElementById("greeting").style.font = "bold 3rem 'Mountains of Christmas', cursive";
    document.getElementById("greeting").innerText = "🎁 Merry Christmas! 🎄"
}
