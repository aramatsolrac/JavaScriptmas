const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const volumeBtn = document.getElementById("volume-btn")
const audio = document.getElementById("audio")

playBtn.addEventListener("click", playAudio)
pauseBtn.addEventListener("click", pauseAudio)
stopBtn.addEventListener("click", stopAudio)
volumeBtn.addEventListener('change', setVolume)
volumeBtn.addEventListener('input', setVolume)

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
function playAudio() {
    audio.play();
};

function pauseAudio() {
    audio.pause();
};

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
};

function setVolume() {
    audio.volume = this.value / 100;
};


// Stretch goals:
// - Add volume controls. ✔️
// - Allow the user to select different sounds.
