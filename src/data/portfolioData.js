import musicAppThumb from './projectThumbnail/musicApplication.png';
import plagiarismThumb from './projectThumbnail/plagiarism.png';

export const profileInfo = {
  name: "Ritik Kumar",
  title: "Computer Science Student & Full-Stack Developer",
  roleTagline: "Full-Stack Web Developer & CS Undergrad",
  greeting: "Hello, World! 🙋‍♂️",
  bio: "Computer Science Engineering student at Parul University dedicated to crafting high-performance, responsive web applications. Specialized in modern JavaScript, React, Java, and Database Systems with a focus on clean code and robust user experiences.",
  location: "Vadodara, Gujarat, India",
  email: "ritik707086@gmail.com",
  status: "Open for Internships & Collaborations",
  resumeUrl: "/assets/resume.pdf",
  profileImg: "/images/profile.png",
  socials: {
    github: "https://github.com/Ritik70k",
    linkedin: "#",
    leetcode: "https://leetcode.com/u/Ritik707086/",
    instagram: "https://www.instagram.com/priyadar_shi_ritik/"
  }
};

export const heroTechStack = [
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "SQL", icon: "fa-solid fa-database" },
];

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: "fa-solid fa-laptop-code",
      skills: [
        { name: "HTML5", icon: "fa-brands fa-html5", level: "Advanced", color: "#E34F26" },
        { name: "CSS3 / Flexbox & Grid", icon: "fa-brands fa-css3-alt", level: "Advanced", color: "#1572B6" },
        { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", level: "Proficient", color: "#F7DF1E" },
        { name: "React.js", icon: "fa-brands fa-react", level: "Proficient", color: "#61DAFB" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind", level: "Proficient", color: "#38BDF8" }
      ]
    },
    {
      id: "programming",
      title: "Programming & Computer Science",
      icon: "fa-solid fa-code",
      skills: [
        { name: "Java", icon: "fa-brands fa-java", level: "Proficient", color: "#ED8B00" },
        { name: "Object Oriented Programming (OOP)", icon: "fa-solid fa-cube", level: "Advanced", color: "#0E7C7B" },
        { name: "Data Structures & Algorithms", icon: "fa-solid fa-sitemap", level: "Intermediate", color: "#1A6B8A" }
      ]
    },
    {
      id: "database",
      title: "Database Management & Storage",
      icon: "fa-solid fa-database",
      skills: [
        { name: "Relational SQL", icon: "fa-solid fa-database", level: "Proficient", color: "#00758F" },
        { name: "DBMS Concepts", icon: "fa-solid fa-server", level: "Proficient", color: "#0E7C7B" },
        { name: "Browser Web Storage (LocalStorage)", icon: "fa-solid fa-hard-drive", level: "Advanced", color: "#2E6B70" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Environment",
      icon: "fa-solid fa-wrench",
      skills: [
        { name: "Git & Version Control", icon: "fa-brands fa-git-alt", level: "Proficient", color: "#F05032" },
        { name: "VS Code", icon: "fa-solid fa-code", level: "Advanced", color: "#007ACC" }
      ]
    }
  ],
  currentlyLearning: [
    { name: "Advanced React Design Patterns", icon: "fa-brands fa-react", tag: "Frontend" },
    { name: "Backend APIs & Node.js", icon: "fa-brands fa-node-js", tag: "Backend" },
    { name: "Advanced Algorithms & Problem Solving", icon: "fa-solid fa-brain", tag: "DSA" },
    { name: "Full-Stack Application Architecture", icon: "fa-solid fa-layer-group", tag: "Architecture" }
  ]
};


export const projectsData = [
  {
    id: "rhythm-music-app",
    slug: "rhythm-music-app",
    number: "02",
    title: "Rhythm Music Studio",
    category: "FULL STACK",
    categoryDisplay: "Full Stack · Music Streaming",
    badge: "Role-Based Music Platform",
    shortDescription: "A full-stack role-based music streaming platform where listeners can discover, search, play, favorite, and revisit music while artists can upload tracks, artwork, and create albums through a dedicated studio dashboard.",
    fullDescription: "A production-oriented full-stack music streaming application built with React, Node.js, Express, MongoDB, and ImageKit. The platform provides separate experiences for listeners and artists with JWT-based authentication, protected role-based routes, cloud-hosted audio and artwork, real-time browser audio playback, favorites, recently played history, album management, and responsive dashboards.",
    problemStatement: "Basic music web applications often provide only a static collection of songs without proper authentication, artist management, personalized libraries, cloud media storage, or persistent playback-related data. Artists also need a dedicated interface to publish music and organize releases.",
    solutionStatement: "Built a role-based full-stack music platform with secure authentication and protected APIs. Listeners can discover, search, stream, favorite, and revisit tracks, while artists can upload audio with custom artwork and organize songs into albums. Media files are stored through ImageKit and application data is persisted in MongoDB.",
    keyFeatures: [
      "Role-based registration and authentication for Listeners and Artists",
      "JWT authentication with HTTP-only cookie-based session management",
      "Protected user and artist dashboards with role-based route authorization",
      "Music discovery with real-time search by song title and artist name",
      "Browser-based audio player with play, pause, progress control, volume and track navigation",
      "Automatic recently played tracking with a persistent history of up to 15 tracks",
      "Favorite / liked songs functionality with persistent MongoDB storage",
      "Artist studio dashboard for uploading audio tracks and custom cover artwork",
      "Album creation and album detail views for organizing published tracks",
      "Cloud media storage using ImageKit for audio files and thumbnails",
      "Responsive dashboard interfaces for both listeners and artists",
      "Automatic track switching when the current song finishes"
    ],
    techStack: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios",
      "Multer",
      "ImageKit",
      "CSS3"
    ],
    techStackText: "React · Node.js · Express · MongoDB · JWT · ImageKit",
    architecture: [
      { step: "Authentication", detail: "React authentication forms communicate with Express auth APIs, while JWT tokens are stored in HTTP-only cookies for protected sessions" },
      { step: "Role Authorization", detail: "Express middleware validates JWT credentials and restricts artist-only operations such as music uploads and album creation" },
      { step: "Media Upload", detail: "Multer processes audio and thumbnail files in memory before they are uploaded to ImageKit cloud storage" },
      { step: "Data Layer", detail: "Mongoose models persist users, music tracks, albums, favorites, artist relationships, and recently played history in MongoDB" },
      { step: "Music Playback", detail: "The React dashboard uses the native HTML5 Audio API to stream cloud-hosted tracks with progress, volume, navigation, and automatic next-track playback" }
    ],
    challenges: [
      "Designing secure role-based authentication and authorization for separate Listener and Artist workflows",
      "Handling simultaneous audio and image uploads efficiently using multipart form data and cloud storage",
      "Synchronizing browser audio state with React state for progress, duration, volume, playback status, and automatic track switching",
      "Maintaining persistent favorites and recently played history while keeping the user dashboard responsive",
      "Connecting frontend protected routes with backend JWT middleware and cross-origin HTTP-only cookie authentication"
    ],
    result: "Delivered a complete role-based music streaming platform with persistent user accounts, cloud-hosted media, artist publishing tools, album management, personalized music libraries, and an interactive browser-based audio player.",
    githubLink: "https://github.com/Ritik70k/RoleBasedMusicApplication",
    liveLink: "",
    featured: true,
    thumbnail: musicAppThumb,
    mockupType: "music"
  },
  {
    id: "image-editor",
    slug: "image-editor",
    number: "01",
    title: "Image Editor Studio",
    category: "JAVASCRIPT",
    categoryDisplay: "JavaScript · Utility Tool",
    badge: "Interactive Studio",
    shortDescription: "A browser-based real-time photo editor allowing instant filter adjustments, preset effects, rotation, and high-res canvas exports.",
    fullDescription: "A high-performance browser-based Image Editor built with HTML, CSS, and pure JavaScript Canvas API. Enables users to upload custom images, tweak brightness, contrast, saturation, blur, grayscale, sepia, hue rotation, and opacity in real-time, apply preset filters, and download high-resolution edited images directly.",
    problemStatement: "Traditional image editing tools require bulky desktop software installation or slow server-side processing for simple adjustments like cropping, contrast tweaks, or filter presets.",
    solutionStatement: "Built a zero-latency client-side Canvas processing pipeline using native HTML5 Canvas APIs, allowing users to modify pixel arrays instantly in the browser without sending data to any external server.",
    keyFeatures: [
      "Real-time parameter manipulation (Brightness, Contrast, Saturation, Blur, Grayscale, Hue, Sepia)",
      "Instant preset filters & one-click reset capabilities",
      "Dynamic file uploader with drag-and-drop support",
      "High-resolution PNG / JPEG client-side export via Canvas toDataURL",
      "Responsive canvas container with aspect-ratio preservation"
    ],
    techStack: ["JavaScript (ES6+)", "HTML5 Canvas API", "CSS Grid & Custom Props", "DOM Manipulation"],
    techStackText: "JavaScript · HTML5 Canvas · CSS3 · DOM API",
    architecture: [
      { step: "Image Upload", detail: "FileReader API converts local file into Image Object" },
      { step: "State Pipeline", detail: "CSS Filter & Canvas Context parameters updated on slider input" },
      { step: "Canvas Render", detail: "2D Rendering Context applies transformations in real-time" },
      { step: "Export Engine", detail: "Generates Blob / DataURL link for zero-delay download" }
    ],
    challenges: [
      "Optimizing real-time redraw performance on large 4K image uploads without freezing UI thread",
      "Ensuring color fidelity and exact slider range conversions across different display pixel densities"
    ],
    result: "Delivered a lightweight zero-dependency web utility that processes image manipulations under 16ms per frame.",
    githubLink: "https://github.com/Ritik70k/Minor-projects/tree/main/Image%20Editor",
    liveLink: "https://ritik70k.github.io/Minor-projects/Image%20Editor/",
    featured: true,
    // thumbnail: musicAppThumb,
    mockupType: "editor"
  },
  {
    id: "notes-app",
    slug: "notes-app",
    number: "02",
    title: "React Notes Application",
    category: "REACT",
    categoryDisplay: "React · SPA App",
    badge: "React Application",
    shortDescription: "A clean, modern React note-taking application supporting persistent storage, live search, and dynamic note categorization.",
    fullDescription: "Built with React.js and modern state management, this Notes App provides instant note creation, editing, deletion, and categorized search. Designed with responsive layouts and local storage persistence so notes are saved seamlessly across browser sessions.",
    problemStatement: "Users need a frictionless, distraction-free tool to draft quick notes, organize thoughts, and filter memories without login barriers or complex database setups.",
    solutionStatement: "Designed a lightweight React single-page application utilizing React Hooks (useState, useEffect) paired with browser LocalStorage to provide instantaneous state persistence and real-time substring search.",
    keyFeatures: [
      "Instant note creation, editing, and deletion with smooth state transitions",
      "Real-time search bar filtering across title and body content",
      "Automatic synchronization with browser LocalStorage",
      "Formatted timestamps and category color tagging",
      "Clean responsive grid layout optimized for mobile and desktop"
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "LocalStorage API"],
    techStackText: "React · JavaScript · Tailwind CSS · LocalStorage",
    architecture: [
      { step: "React Component Hierarchy", detail: "App Shell → SearchBar → NoteList → NoteItem" },
      { step: "State Synchronization", detail: "useEffect hook serializes state array into LocalStorage JSON" },
      { step: "Filter Engine", detail: "Derived array state filters matching query without re-fetching" }
    ],
    challenges: [
      "Managing clean state updates during dynamic deletion without mutating existing array references",
      "Handling edge cases like empty string notes and browser storage quota limits"
    ],
    result: "Created a highly reliable personal productivity web app used daily for quick note capturing.",
    githubLink: "https://github.com/Ritik70k/Notes-App-ReactJs",
    liveLink: "https://ritik70k.github.io/Notes-App-ReactJs/",
    featured: true,
    mockupType: "notes"
  },
  {
    id: "expense-tracker",
    slug: "expense-tracker",
    number: "03",
    title: "Financial Expense Tracker",
    category: "REACT",
    categoryDisplay: "React · Financial SPA",
    badge: "Financial Dashboard",
    shortDescription: "A financial dashboard application for tracking income and expenses with automatic real-time balance calculations.",
    fullDescription: "An intuitive React.js financial tracker application that enables users to manage cashflow, categorize incomes and expenses, auto-calculate balances in real time, store transaction logs in Local Storage, and view transaction history cards with timestamps.",
    problemStatement: "Tracking daily micro-expenses manually leads to unorganized financial logs and unclear net balance calculations.",
    solutionStatement: "Engineered a financial calculator dashboard in React that segregates transactions into Income (+) vs Expense (-), dynamically recalculating running total balance and rendering chronologically organized logs.",
    keyFeatures: [
      "Real-time cashflow balance calculation (Total Income, Total Expense, Net Balance)",
      "Color-coded transaction logging (Green for Income, Red for Expense)",
      "Local Storage persistence for all historical transaction records",
      "One-click transaction deletion with instant metric updates",
      "Clean modern financial UI with dark-teal glassmorphism accents"
    ],
    techStack: ["React.js", "State Management", "Tailwind CSS", "LocalStorage API"],
    techStackText: "React · State Management · LocalStorage · CSS",
    architecture: [
      { step: "Income/Expense State", detail: "Array of transaction objects {id, text, amount, date}" },
      { step: "Reducer Logic", detail: "Array reduce methods calculate total positive vs negative sums" },
      { step: "Persistence Layer", detail: "Synced to window.localStorage on every mutation" }
    ],
    challenges: [
      "Ensuring accurate floating point decimal formatting for financial numbers",
      "Designing responsive balance summary cards that adapt seamlessly across small screens"
    ],
    result: "Delivered a clean financial management SPA with zero latency transaction tracking.",
    githubLink: "https://github.com/Ritik70k/Expense-Tracker",
    liveLink: "https://ritik70k.github.io/Expense-Tracker/",
    featured: false,
    mockupType: "finance"
  },
  {
    id: "kanban-board",
    slug: "kanban-board",
    number: "04",
    title: "Kanban Task Board",
    category: "JAVASCRIPT",
    categoryDisplay: "JavaScript · Productivity Tool",
    badge: "Productivity Tool",
    shortDescription: "Interactive task management Kanban board featuring drag-and-drop workflow across To Do, In Progress, and Done.",
    fullDescription: "A responsive Kanban task board built with Vanilla JS and HTML5 Drag and Drop API. Organize workflow into structured columns, create dynamic task cards, update task statuses on the fly, and automatically maintain column counters.",
    problemStatement: "Project task management requires smooth status transitions between stages without page refreshes or tedious forms.",
    solutionStatement: "Implemented native HTML5 Drag & Drop event listeners (`dragstart`, `dragover`, `drop`) on dynamic task cards to enable intuitive column movement with real-time DOM re-ordering.",
    keyFeatures: [
      "Drag-and-drop workflow across To Do, In Progress, and Completed columns",
      "Dynamic task creation with custom titles and detailed descriptions",
      "Column counters automatically updating card quantities",
      "LocalStorage persistence for maintaining workflow state across sessions",
      "Minimalist responsive board layout with crisp column indicators"
    ],
    techStack: ["JavaScript (ES6+)", "HTML5 Drag & Drop API", "CSS Grid & Flexbox", "LocalStorage API"],
    techStackText: "JavaScript · HTML5 Drag & Drop · CSS Grid · LocalStorage",
    architecture: [
      { step: "Event Listener Hooking", detail: "Drag handles assigned to dynamic card element nodes" },
      { step: "Drop Zone Processing", detail: "e.preventDefault() on dragover enables target column drop" },
      { step: "DOM Mutator", detail: "Appends card node to target container & updates array state" }
    ],
    challenges: [
      "Handling drag-over visual indicator styles smoothly across mobile touch vs desktop pointer events",
      "Preventing duplicate drops and maintaining consistent task ordering within columns"
    ],
    result: "Built a zero-dependency task board offering desktop-grade drag and drop usability.",
    githubLink: "https://github.com/Ritik70k/Minor-projects/tree/main/kanban%20board",
    liveLink: "https://ritik70k.github.io/Minor-projects/kanban%20board/",
    featured: false,
    mockupType: "kanban"
  },
  {
    id: "email-validator",
    slug: "email-validator",
    number: "05",
    title: "Email & Password Validator",
    category: "EXPERIMENTS",
    categoryDisplay: "JavaScript · Security Experiment",
    badge: "Security Utility",
    shortDescription: "Real-time client-side authentication validator with live password strength metrics and visual regex feedback.",
    fullDescription: "A sleek security component built with HTML, CSS, and JS. Evaluates real-time regex format compliance for email addresses and tests password strength across uppercase, lowercase, numbers, special characters, and minimum length requirements.",
    problemStatement: "Poor form validation feedback leads to bad user experiences and security vulnerabilities during signup/login workflows.",
    solutionStatement: "Constructed an interactive validation engine using regular expressions (Regex) that feeds instant visual progress indicators as the user types.",
    keyFeatures: [
      "Real-time regex evaluation for valid email format structure",
      "Dynamic password strength meter (Weak, Medium, Strong)",
      "Visual rule checkers for uppercase, lowercase, digits, and special characters",
      "Toggleable password visibility feature",
      "Accessible error messaging and clean minimal container"
    ],
    techStack: ["JavaScript (ES6+)", "Regular Expressions (Regex)", "CSS Animations", "UX Validation"],
    techStackText: "JavaScript · Regex · CSS Animations · UX Validation",
    architecture: [
      { step: "Input Event Stream", detail: "Listens to input events on target text fields" },
      { step: "Regex Evaluation Matrix", detail: "Tests pattern array against current value string" },
      { step: "UI Indicator Update", detail: "Toggles checkmark classes & calculates strength bar width" }
    ],
    challenges: [
      "Formulating comprehensive Regex patterns that cover international email formats without edge-case false negatives"
    ],
    result: "Created a reusable authentication UI utility component for web forms.",
    githubLink: "https://github.com/Ritik70k/Minor-projects/tree/main/Email%20and%20Password%20validator",
    liveLink: "https://ritik70k.github.io/Minor-projects/Email%20and%20Password%20validator/",
    featured: false,
    thumbnail: plagiarismThumb,
    mockupType: "validator"
  },
  {
    id: "image-slider",
    slug: "image-slider",
    number: "06",
    title: "Interactive Carousel Slider",
    category: "EXPERIMENTS",
    categoryDisplay: "JavaScript · UI Component",
    badge: "UI Showcase",
    shortDescription: "A responsive image slider with smooth slide animations, prev/next controls, dot indicators, and autoplay.",
    fullDescription: "A modern responsive slider library crafted with Vanilla JavaScript and CSS keyframes. Offers fluid carousel transitions, touch swipe gesture support, thumbnail indicators, pause-on-hover autoplay, and lightweight code footprint.",
    problemStatement: "Heavy third-party carousel plugins bloat bundle size and introduce layout shifts on mobile devices.",
    solutionStatement: "Designed a 2KB Vanilla JavaScript carousel leveraging CSS transforms and `requestAnimationFrame` for buttery-smooth 60fps slide transitions.",
    keyFeatures: [
      "Fluid 60fps CSS transform slide transitions",
      "Autoplay feature with pause-on-hover logic",
      "Interactive dot navigation indicators & manual prev/next arrows",
      "Fully responsive touch gesture support",
      "Zero external dependency footprint"
    ],
    techStack: ["JavaScript (ES6+)", "CSS Transforms & Animations", "HTML5"],
    techStackText: "JavaScript · CSS Transforms · HTML5",
    architecture: [
      { step: "Index Pointer", detail: "Tracks active slide index (0 to N-1)" },
      { step: "Transform Offset", detail: "Computes translateX(-index * 100%) on slide container" },
      { step: "Timer Loop", detail: "setInterval handles automatic slide progression" }
    ],
    challenges: [
      "Preventing slide skip glitches when rapid clicking previous/next buttons during transition animations"
    ],
    result: "Engineered an ultra-fast reusable carousel component.",
    githubLink: "https://github.com/Ritik70k/Minor-projects/tree/main/img%20Slider",
    liveLink: "https://ritik70k.github.io/Minor-projects/img%20Slider/",
    featured: false,
    mockupType: "slider"
  },
  {
    id: "omnifood-clone",
    slug: "omnifood-clone",
    number: "07",
    title: "Omnifood Web Landing Page",
    category: "UI / CLONES",
    categoryDisplay: "HTML / CSS · Web Clone",
    badge: "Frontend Clone",
    shortDescription: "A full-scale frontend clone of the Omnifood meal delivery landing page featuring modern responsive layouts.",
    fullDescription: "A detailed frontend recreation of Omnifood's landing page using HTML5 and semantic CSS. Recreates modern hero sections, pricing tables, testimonials slider, responsive navigation grid, and call-to-action sections.",
    problemStatement: "Demonstrating mastery of complex responsive CSS layouts, semantic HTML structure, and typography without relying on CSS frameworks.",
    solutionStatement: "Hand-crafted pure CSS Flexbox and Grid layouts replicating modern SaaS landing page patterns, responsive breakpoints, and UI design principles.",
    keyFeatures: [
      "Pixel-perfect responsive layout across mobile, tablet, and wide desktop",
      "Semantic HTML5 document outline with accessible headings",
      "Custom CSS Grid pricing cards & feature breakdown tables",
      "Interactive mobile navigation toggle menu",
      "Optimized web typography & visual whitespace hierarchy"
    ],
    techStack: ["HTML5", "CSS3 Flexbox & Grid", "Web Design"],
    techStackText: "HTML5 · CSS Flexbox & Grid · Web Design",
    architecture: [
      { step: "Semantic Layout", detail: "Header → Hero → Featured In → How It Works → Meals → Pricing → CTA" },
      { step: "Responsive Breakpoints", detail: "Custom media queries for 1200px, 944px, 704px, and 544px viewports" }
    ],
    challenges: [
      "Building a complex multi-column responsive pricing matrix purely using CSS Grid without breaking on narrow devices"
    ],
    result: "Successfully built a complete, production-grade SaaS landing page frontend.",
    githubLink: "https://github.com/Ritik70k/Web-clones/tree/main/omnifood-clone",
    liveLink: "https://ritik70k.github.io/Web-clones/omnifood-clone/",
    featured: false,
    mockupType: "omnifood"
  }
];

export const timelineEvents = [
  {
    date: "Aug 2024",
    title: "Enrolled in B.Tech Computer Science Engineering",
    institution: "Parul University",
    description: "Built foundational knowledge in core programming concepts, C language, Data Structures, and Computer Science fundamentals."
  },
  {
    date: "March 2025",
    title: "Advanced Frontend Mastery & Web Development",
    institution: "Self-Directed & Projects",
    description: "Proficient in HTML5, CSS3, modern JavaScript (ES6+), DOM manipulation, dynamic layouts, and web storage APIs."
  },
  {
    date: "Present Focus",
    title: "React.js SPAs & System Design",
    institution: "Parul University & Hands-on Dev",
    description: "Designing modern React Single Page Applications with Tailwind CSS, expanding Java OOP concepts, and preparing for software engineering roles."
  }
];

export const aboutCards = [
  {
    id: "education",
    title: "Education",
    icon: "fa-graduation-cap",
    items: [
      "B.Tech in Computer Science & Engineering",
      "Parul University (5th Semester)",
      "Strong foundation in Programming & OOP",
      "Academic & Personal Software Projects"
    ]
  },
  {
    id: "location",
    title: "Location & Mobility",
    icon: "fa-location-dot",
    items: [
      "Vadodara, Gujarat, India",
      "Open to Remote Opportunities",
      "Available for Hybrid & On-Site Roles",
      "Open to Relocation for Internships"
    ]
  },
  {
    id: "focus",
    title: "Technical Focus",
    icon: "fa-code",
    items: [
      "React.js & Full-Stack Web Development",
      "Java, OOP & Data Structures",
      "Node.js, Express & REST APIs",
      "PostgreSQL & Git/GitHub"
    ]
  },
  {
    id: "goals",
    title: "Career Objective",
    icon: "fa-bullseye",
    items: [
      "Software Engineering Internship",
      "Building scalable real-world applications",
      "Strengthening DSA & problem-solving skills",
      "Growing as a Full-Stack Software Engineer"
    ]
  }
];
