console.log("JacketsZone website loaded successfully");

// Dark/Light mode toggle (agar future me add karna ho)
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Simple smooth scroll enhancement (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
