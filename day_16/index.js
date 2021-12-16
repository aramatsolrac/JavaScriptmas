const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")
const movieDisplay = document.getElementById("movie-display")
const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

btn.addEventListener("click", movieSuggestion)

const moviesArr = [{
        name: "Die Hard",
        age: "18+",
        genre: "Action",
        id: "die"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance",
        id: "love"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action",
        id: "polar"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance",
        id: "shrek"
    }
]

let currentMovieId = "..."

function movieSuggestion(movie) {
    const found = moviesArr.find(movie => movie.genre === genreSelector.value && movie.age === ageSelector.value)
    suggestedMovie.innerHTML = found.name;

    movieDisplay.classList.remove(currentMovieId);
    movieDisplay.classList.add(found.id);
    currentMovieId = found.id;
};


// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.