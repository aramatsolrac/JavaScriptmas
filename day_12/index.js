const input = document.getElementById("input")
const btnAdd = document.getElementById("btnAdd")
const btnRemove = document.getElementById("btnRemove")


let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]


btnAdd.addEventListener('click', newGuest);
btnRemove.addEventListener('click', removeGuest);


function addGuests() {
    guests.splice(3, 1)
    for (let i = 0; i < guests.length; i++) {
        const li = document.createElement("li");
        li.textContent = guests[i]
        guestList.appendChild(li);
    }
};

addGuests();


function newGuest() {
    const inputVal = input.value
    if (inputVal.toLowerCase().includes("evil")) {
        const evil = confirm("Are you sure?")
        if (evil === false) {
            input.value = ""
            return
        }
    }

    if (inputVal.length > 0) {
        const li = document.createElement("li");
        li.textContent = inputVal
        guestList.appendChild(li);
        input.value = ""
    }
};


function removeGuest() {
    guestList.removeChild(guestList.lastChild);
};


// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element. ✔️
// - Add the functionality to add new guests. ✔️

// Stretch goals:
// - Add a button to remove the most recently added guests. ✔️
// - What about if you want to remove the evil relative? ✔️
