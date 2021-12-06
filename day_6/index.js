const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyToggle)
const audio = document.getElementById("audio");

function playAudio() {
    audio.play();
};

function pauseAudio() {
    audio.pause();
};

function christmassifyToggle() {
    greeting.classList.toggle("christmassified")
    if (christmassifierBtn.innerText === "Christmassify") {
        christmassifierBtn.innerText = "De-christmassify"
        playAudio();
        setTimeout(() => {
            christmassifyToggle()
        }, 10000)
    } else {
        christmassifierBtn.innerText = "Christmassify"
        pauseAudio()
    }
};


// Task:
// - Add christmassify class to greeting.
//- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

// Stretch goals:
// - Play Christmas music when Christmas class is added. ✔️
// - Remove the Christmas class after a given time. ✔️
