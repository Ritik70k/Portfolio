var typed = new Typed('#typed', {
    strings: ['Developer', 'Web Designer', 'Problem solver'],
    typeSpeed: 90,
    backSpeed: 80,
    backDelay: 500,
    loop: true
});

// Mobile Navbar Toggle

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Auto close menu after click

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});