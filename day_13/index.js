const btn = document.getElementById("btn")
let food = document.getElementById("food")
const result = document.getElementById("result")
const vegetarian = document.getElementById("vegetarian-input")

const guests = document.getElementById("num-input")
btn.addEventListener('click', dinner);



function dinner() {
    if (vegetarian.checked === true) {
        food.textContent = "Nut Roast"
    } else if (vegetarian.checked === false && guests.value <= 4) {
        food.textContent = "Turkey"
    } else if (vegetarian.checked === false && guests.value >= 5) {
        food.textContent = "Goose"
    }
};



// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. ✔️
//Don't forget to check whether the meal should be vegetarian! ✔️

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.


