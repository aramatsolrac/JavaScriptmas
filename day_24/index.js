const crew = document.getElementById("crew")
const btn = document.getElementById("btn")
btn.addEventListener('click', sleigh)

function sleigh() {
    crew.classList.add("slide-out-fwd-right")
}


// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.