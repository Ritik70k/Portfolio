var typed = new Typed('#typed', {
    strings: ['Developer', 'Web Designer', 'Problem solver'],
    typeSpeed: 90,
    backSpeed: 80,
    backDelay: 500,
    loop: true
});

// Mobile Navbar Toggle & GSAP Full-Screen Overlay Animation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
let menuOpen = false;

const toggleMenu = () => {
    menuOpen = !menuOpen;
    menuBtn.classList.toggle("active");

    if (menuOpen) {
        navLinks.classList.add("active");
        gsap.to("#navLinks", {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.fromTo("#navLinks li",
            { y: 45, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out" }
        );
    } else {
        gsap.to("#navLinks li", {
            y: -30,
            opacity: 0,
            stagger: 0.05,
            duration: 0.35,
            ease: "power2.in"
        });
        gsap.to("#navLinks", {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            delay: 0.15,
            onComplete: () => {
                navLinks.classList.remove("active");
            }
        });
    }
};

menuBtn.addEventListener("click", toggleMenu);

// Auto close menu after click & smooth scroll to sections
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        if (menuOpen) {
            toggleMenu();
        }
    });
});

// Active Section Highlighting (Scroll Spy)
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#navLinks a");

const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -55% 0px",
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navItems.forEach((link) => {
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active-link");
                } else {
                    link.classList.remove("active-link");
                }
            });
        }
    });
}, observerOptions);

sections.forEach((section) => observer.observe(section));



//Selecting all necessary elements


// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const tl = gsap.timeline();

//Nav Animation
tl.from("#navLinks li", {
    y: -60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7
}, "anime");
tl.from("nav h4", {
    y: -60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7
}, "anime");

//Home Section Animation
const tl2 = gsap.timeline();
tl2.from(".container .left", {
    y: 100,
    opacity: 0,
    duration: .8,

}, "main");

tl2.from(".container .right", {
    y: 100,
    opacity: 0,
    duration: .8,

}, "main");

gsap.from(".hero-name .gradient-text", {
    y: 150,
    opacity:0,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out"
});


function scrollAnimation(trigger, target, xValue, start = "top 80%") {
    gsap.from(target, {
        x: xValue,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: trigger,
            start: start,
        }
    });
}


// About Section
scrollAnimation(".container1", ".container1 .bbox", 350, "top 65%");
scrollAnimation(".container1", ".container1 .abox", -350, "top 65%");

// Skills Section
scrollAnimation("#skill", ".askill", -350, "top 85%");
scrollAnimation("#skill", ".bskill", 350, "top 85%");
//Contact Section
scrollAnimation("#contact", ".contact-left", -350, "top 60%");
scrollAnimation("#contact", ".contact-right", 350, "top 60%");

gsap.to("#navLinks li:nth-child(4)", {
    x: -4,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
    repeat: -1,
    borderBottom:"1px solid red",
    repeatDelay: 1
});