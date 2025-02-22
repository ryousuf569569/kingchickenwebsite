document.addEventListener("DOMContentLoaded", () => {
    console.log("KING CHICKEN Website Loaded");

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6600";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#333";
        });
    });
});
