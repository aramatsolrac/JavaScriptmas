const sign = document.getElementById("sign");
const message = document.getElementById("text-input");

message.addEventListener('change', messageSanta);

function messageSanta() {
    if (message.value.length <= 140) {
        sign.innerText = "🎅 " + message.value + " ☃️";
        message.value = ""
    } else {
        alert("Sorry, Santa can read only 140 characters. 🎅")
    }
}


// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.