const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const container = document.getElementsByClassName("container")
decorator.addEventListener("click", deckTheHalls)

function deckTheHalls() {
    if (decorator.checked === true) {
        house.textContent = "🎄" + house.innerHTML + " ☃️";
    } else {
        house.textContent = "🏡";
    }
};


// Task:
// Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 


// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.


