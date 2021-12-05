const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

const randomItem = () => [Math.floor(Math.random() * greetings.length)];

function writeGreeting() {
    greetingDisplay.innerHTML = greetings[randomItem()];
};



