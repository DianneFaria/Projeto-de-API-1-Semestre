const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");


function toggleDarkMode() {
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
}

function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

toggle.addEventListener("change", function () {
    toggleDarkMode();

    // Save or remove dark mode from localStorage
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
    
});