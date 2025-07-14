document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle for Mobile Navbar
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar");

    if (menu) {
        menu.onclick = () => {
            navbar.classList.toggle("active");
        };
    }

    // ScrollReveal 
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal().reveal(".choose__image img", {
            distance: "50px",
            origin: "left",
            duration: 1000,
            delay: 200,
        });

        ScrollReveal().reveal(".section__header", {
            distance: "50px",
            origin: "top",
            duration: 1000,
            delay: 600,
        });

        ScrollReveal().reveal(".section__description", {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
            delay: 800,
        });

        ScrollReveal().reveal(".choose__card", {
            interval: 150,
            distance: "30px",
            origin: "bottom",
            duration: 800,
            delay: 500,
        });
    } else {
        console.warn("ScrollReveal is not loaded. Ensure you have included it.");
    }

});
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
    }
});
if (menu && navbar) {
    menu.onclick = () => {
        navbar.classList.toggle("active");
    };
}






