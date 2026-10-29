// Animate hero elements on page load

window.addEventListener("load", () => {

    const heading = document.querySelector("main p");
    const searchBox = document.querySelector("main input");

    setTimeout(() => {
        heading.classList.add("fade-up");
    }, 300);

    setTimeout(() => {
        searchBox.classList.add("fade-up");
    }, 700);

});

// Navbar background on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// Search box animation

const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.placeholder = "Search restaurants, cuisines, dishes...";
});

searchInput.addEventListener("blur", () => {
    searchInput.placeholder = "Search for restraunts,cuisine or dish";
});

// Typing cursor effect in placeholder

const placeholders = [
    "Search restaurants...",
    "Search pizza...",
    "Search burgers...",
    "Search biryani...",
    "Search cafes..."
];

let current = 0;

setInterval(() => {

    if(document.activeElement !== searchInput){
        searchInput.placeholder = placeholders[current];
        current = (current + 1) % placeholders.length;
    }

}, 2500);