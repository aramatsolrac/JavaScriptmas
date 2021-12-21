const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0
time.addEventListener("change", calculateSpeed)
select.addEventListener("change", calculateSpeed)

let destination = [{
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
    {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]


function calculateSpeed() {
    if (time.value === "0" || !time.value) {
        alert("Please enter the journey time. ⌛")
    } else {
        let speed = time.value
        currentLocation = select.value
        const distance = destination.find(destine => destine.name === currentLocation);
        const totalSpeed = Math.floor(distance.distanceFromPrevDestination / speed);
        speedometer.innerHTML = `The avarage Reindeer speed is: ${totalSpeed}`;
    }
}

// Task:
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.