const btn = document.getElementById("btn")
const audio = new Audio('https://www.soundjay.com/nature/sounds/rain-07.mp3')
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;
let mins = 15;
let secs = mins * 60;
let currentSeconds = 0;
let currentMinutes = 0;


btn.addEventListener("click", countdown)

function countdown() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;

    if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;

    secs--;
    audio.play()
    audio.loop = true;
    timer.innerHTML = currentMinutes + ":" + currentSeconds;

    timeout = setTimeout(countdown, 1000);

    if (secs < 0) {
        clearTimeout(timeout)
        timer.innerHTML = "15:00"
            // btn.disabled = false;
        audio.pause()
        audio.currentTime = 0;
    }
}

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.