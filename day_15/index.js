const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
const container = document.getElementById("container")
languageSelector.addEventListener("change", translate)

const greetingsArr = [{
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]

let currentLanguage = "English";

function translate(greet) {
    const found = greetingsArr.find(greet => greet.language === languageSelector.value)
    greetingDisplay.innerHTML = found.greeting;
    container.classList.remove(currentLanguage.toLowerCase());
    container.classList.add(languageSelector.value.toLowerCase());
    currentLanguage = languageSelector.value;
};





// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".