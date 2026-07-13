var typed = new Typed("#typed", {
  strings: ["Developer", "Web Designer", "Problem solver"],
  typeSpeed: 90,
  backSpeed: 80,
  backDelay: 500,
  loop: true,
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
      ease: "power2.out",
    });
    gsap.fromTo(
      "#navLinks li",
      { y: 45, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out" },
    );
  } else {
    gsap.to("#navLinks li", {
      y: -30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.35,
      ease: "power2.in",
    });
    gsap.to("#navLinks", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      delay: 0.15,
      onComplete: () => {
        navLinks.classList.remove("active");
      },
    });
  }
};

menuBtn.addEventListener("click", toggleMenu);

// Auto close menu after click & smooth scroll to sections
document.querySelectorAll("#navLinks a").forEach((link) => {
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
  threshold: 0,
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
// const links = document.querySelectorAll("#navLinks a");

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const tl = gsap.timeline();

//Nav Animation
tl.from(
  "#navLinks li",
  {
    y: -60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
  },
  "anime",
);
tl.from(
  "nav h4",
  {
    y: -60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
  },
  "anime",
);

//Home Section Animation
const tl2 = gsap.timeline();
tl2.from(
  ".container .left",
  {
    y: 100,
    opacity: 0,
    duration: 0.8,
  },
  "main",
);

tl2.from(
  ".container .right",
  {
    y: 100,
    opacity: 0,
    duration: 0.8,
  },
  "main",
);

gsap.from(".hero-name .gradient-text", {
  y: 150,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  ease: "power3.out",
});

function scrollAnimation(trigger, target, xValue, start = "top 80%") {
  gsap.from(target, {
    x: xValue,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: trigger,
      start: start,
    },
  });
}

// About Section
scrollAnimation(".container1", ".container1 .bbox", 350, "top 65%");
scrollAnimation(".container1", ".container1 .abox", -350, "top 65%");

// Skills Section
scrollAnimation("#skill", ".askill", -350, "top 85%");
scrollAnimation("#skill", ".bskill", 350, "top 85%");


gsap.to("#navLinks li:nth-child(4)", {
  x: -4,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
  repeat: -1,
  borderBottom: "1px solid red",
  repeatDelay: 1,
});
const projectFlex = document.querySelector(".project-flex");
const wrapper = document.querySelector(".project-wrapper");


// Generating Projects cards
const projects = [
  {
    title: "Email and Password Validator",
    icon: "fa-envelope-circle-check",
    description:
      "A responsive Email & Password Validator built with HTML, CSS, and JavaScript. It performs real-time email format validation and checks password strength based on length, uppercase, lowercase, number, and special character requirements, providing instant feedback for a better user experience.",
    Plink: "https://github.com/Ritik70k/Minor-projects/tree/main/Email%20and%20Password%20validator",
    LiveLink:"https://ritik70k.github.io/Minor-projects/Email%20and%20Password%20validator/",
  },
  {
    title: "Kanban Board",
    icon: "fa-table-columns",
    description:
      "A responsive Kanban Board built with HTML, CSS, and JavaScript that helps users organize tasks into To Do, In Progress, and Done columns. It supports creating, deleting, and managing tasks with an intuitive drag-and-drop interface, allowing seamless movement between columns while automatically updating task counts.",
    Plink: "https://github.com/Ritik70k/Minor-projects/tree/main/kanban%20board",
    LiveLink:"https://ritik70k.github.io/Minor-projects/kanban%20board/",
  },
  {
    title: "Image Editor",
    icon: "fa-wand-magic-sparkles",
    description:
      "A browser-based Image Editor built with HTML, CSS, and JavaScript that allows users to enhance images using real-time filters such as brightness, contrast, saturation, blur, grayscale, sepia, hue rotation, opacity, and invert. It also includes preset effects, image upload, and download functionality, providing a fast and intuitive photo editing experience directly in the browser.",
    Plink: "https://github.com/Ritik70k/Minor-projects/tree/main/Image%20Editor",
    LiveLink:"https://ritik70k.github.io/Minor-projects/Image%20Editor/",
  },
  {
    title:"Image Slider",
    icon:"fa-images",
    description:"A responsive Image Slider built with HTML, CSS, and JavaScript that showcases images with smooth slide transitions, previous/next navigation, autoplay functionality, and responsive design. It provides an engaging viewing experience with intuitive controls and seamless animations across all devices.",
    Plink:"https://github.com/Ritik70k/Minor-projects/tree/main/img%20Slider",
    LiveLink:"https://ritik70k.github.io/Minor-projects/img%20Slider/"
  },
  {
    title:"Omnifood Website(Clone)",
    icon:"fa-bowl-food",
    description:"A frontend clone of the Omnifood landing page built with HTML and CSS. It recreates the original website's modern layout, smooth scrolling, interactive navigation, and visually appealing UI components to demonstrate frontend development and web design skills.",
    Plink:"https://github.com/Ritik70k/Web-clones/tree/main/omnifood-clone",
    LiveLink:"https://ritik70k.github.io/Web-clones/omnifood-clone/"
  },
  {
    title:"Notes App",
    icon:"fa-sticky-note",
    description:"A simple Notes App built with HTML, CSS, and ReactJS. It allows users to create and delete notes, and provides a user-friendly interface for managing notes effectively.",
    Plink:"https://github.com/Ritik70k/Notes-App-ReactJs",
    LiveLink:"https://ritik70k.github.io/Notes-App-ReactJs/"
  }
];



projects.forEach((project) => {
  projectFlex.innerHTML += `
    <div class="project-card">
      <div class="project-icon">
        <i class="fa-solid ${project.icon}"></i>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-btn-container">
        <a href="${project.Plink}" target="_blank" rel="noopener" class="project-btn">
            <i class="fa-brands fa-github"></i>
            Source Code
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        <a href="${project.LiveLink}" target="_blank" rel="noopener" class="project-btn">
            <i class="fa-solid fa-up-right-from-square"></i>
            Preview
            <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;

});

gsap.to(".project-section .project-flex",{
    x: () => -(projectFlex.scrollWidth - wrapper.clientWidth),
    ease: "none",
    scrollTrigger:{
        trigger:".project-section",
        start:"top top",
        end: () => "+=" + (projectFlex.scrollWidth - wrapper.clientWidth),
        scrub:1,
        pin:true,
        invalidateOnRefresh: true,
    }
})


//Contact Section

scrollAnimation(".contact-container", ".contact-left", -350, "top 70%");
scrollAnimation(".contact-container", ".contact-right", 350, "top 70%");