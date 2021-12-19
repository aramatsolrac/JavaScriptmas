const btn = document.getElementById("btn")
const foodHolder = document.getElementById("foodHolder");
btn.addEventListener("click", findYum)

async function findYum() {
    const dessert = await (await fetch("https://foodish-api.herokuapp.com/api/images/dessert")).json();
    foodHolder.innerHTML = `<img src=${dessert.image} alt="" />`
};





/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image:
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals:
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/