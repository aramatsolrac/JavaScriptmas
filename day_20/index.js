const colorEyes = document.getElementById("color");
const colorNose = document.getElementById("color3");
const colorButton = document.getElementById("color2");

const eyes = document.querySelectorAll(".eye");
const nose = document.querySelector(".nose");
const button = document.querySelectorAll(".button");

colorEyes.addEventListener("change", changeEyesColor);
colorNose.addEventListener("change", changeNoseColor);
colorButton.addEventListener("change", changeButtonColor);



function changeEyesColor() {
    eyes.forEach((eye) => (eye.style.backgroundColor = colorEyes.value));
}

function changeNoseColor() {
    nose.style.borderColor = `transparent  transparent transparent ${colorNose.value}`;
}

function changeButtonColor() {
    button.forEach((btn) => (btn.style.backgroundColor = colorButton.value));
}



// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.