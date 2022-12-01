const countdownDisplay = document.getElementById("countdown-display");

// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.

function renderCountdown() {
    const christmas = 25;
    const today = new Date();
    const daysLeft = christmas - today.getDate();
    document.getElementById("countdown-display").innerHTML = daysLeft;
    if (daysLeft <= 0) {
        document.getElementById("countdown-display").innerHTML = "Merry Xmas";
    }
}

renderCountdown()