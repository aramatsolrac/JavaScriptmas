const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

for (let i = 0; i < items.length; i++) {
    const div = document.createElement("div");
    div.classList.add("checklist-item");
    const input = document.createElement("input");
    input.type = "checkbox"
    const label = document.createElement("label");
    label.textContent = items[i]
    div.appendChild(input);
    div.appendChild(label);
    checklist.appendChild(div);
}