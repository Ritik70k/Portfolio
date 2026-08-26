const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ margin: 50, size: 'A4' });

const pdfPathAssets = path.join(process.cwd(), 'assets', 'Portfolio_Project_Documentation.pdf');
const pdfPathPublic = path.join(process.cwd(), 'public', 'Portfolio_Project_Documentation.pdf');
const pdfPathRoot = path.join(process.cwd(), 'Portfolio_Project_Documentation.pdf');

// Ensure assets & public directories exist
if (!fs.existsSync(path.join(process.cwd(), 'assets'))) {
  fs.mkdirSync(path.join(process.cwd(), 'assets'), { recursive: true });
}
if (!fs.existsSync(path.join(process.cwd(), 'public'))) {
  fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
}

const writeStreamRoot = fs.createWriteStream(pdfPathRoot);
doc.pipe(writeStreamRoot);

// Helper for section headings
function addHeading(text, level = 1) {
  doc.moveDown(0.5);
  if (level === 1) {
    doc.fillColor('#0E7C7B').fontSize(15).font('Helvetica-Bold').text(text);
    doc.moveDown(0.2);
    doc.strokeColor('#0E7C7B').lineWidth(1).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
    doc.moveDown(0.4);
  } else if (level === 2) {
    doc.fillColor('#03363D').fontSize(12).font('Helvetica-Bold').text(text);
    doc.moveDown(0.2);
  } else {
    doc.fillColor('#1A6B8A').fontSize(10.5).font('Helvetica-Bold').text(text);
    doc.moveDown(0.1);
  }
}

function addParagraph(text) {
  doc.fillColor('#03363D').fontSize(9.5).font('Helvetica').text(text, { leading: 3, align: 'justify' });
  doc.moveDown(0.3);
}

function addBullet(title, desc) {
  doc.fillColor('#0E7C7B').fontSize(9.5).font('Helvetica-Bold').text(`•  ${title}: `, { continued: true });
  doc.fillColor('#03363D').font('Helvetica').text(desc, { leading: 2 });
  doc.moveDown(0.2);
}

// Header / Title Page Element
doc.fillColor('#03363D').fontSize(22).font('Helvetica-Bold').text('Ritik Kumar — Portfolio Documentation');
doc.fillColor('#0E7C7B').fontSize(12).font('Helvetica').text('Complete Codebase Architecture, Directory Map & Feature Purpose');
doc.moveDown(0.5);
doc.strokeColor('#0E7C7B').lineWidth(2).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
doc.moveDown(0.8);

// 1. EXECUTIVE SUMMARY
addHeading('1. Executive Technical Summary', 1);
addParagraph('This project is a high-performance React Single Page Application (SPA) built for Ritik Kumar, a Computer Science Engineering student at Parul University. The application serves as an editorial developer portfolio and case-study showcase, featuring modern web technologies, client-side routing, responsive Tailwind CSS styling, dynamic data modeling, and interactive case study pages.');
addBullet('Tech Stack', 'React 18, Vite 5, React Router v6 (with v7 opt-in future flags), Tailwind CSS, Lucide React, FontAwesome 6, and GSAP.');
addBullet('Design System', 'Soft teal/mint color identity (#BDD9D7 background, #0E7C7B primary, #1A6B8A secondary, #03363D dark text) with editorial typography and whitespace layout.');

// 2. ROOT CONFIGURATION FILES
addHeading('2. Root Configuration & Project Files', 1);
addBullet('index.html', 'Main HTML entry file containing HTML5 document shell, Google Fonts (Outfit & Inter), FontAwesome 6 CDN links, and the #root React mounting element.');
addBullet('package.json', 'Project manifest defining npm scripts (dev, build, preview), application dependencies (react, react-router-dom, tailwindcss, lucide-react, gsap), and development tools.');
addBullet('package-lock.json', 'Automatically generated lockfile maintaining exact version trees for all npm dependencies for reproducible builds.');
addBullet('vite.config.js', 'Vite build tool configuration setup with @vitejs/plugin-react, development server port (3000), and production asset optimization.');
addBullet('tailwind.config.js', 'Tailwind CSS configuration file defining color palette extensions (tealTheme), custom fonts, keyframe animations, and content scanning paths.');
addBullet('postcss.config.js', 'PostCSS pipeline configuration file integrating Tailwind CSS and Autoprefixer plugins.');

// 3. DIRECTORY STRUCTURE & FEATURE PURPOSE
addHeading('3. Source Directory (src/) Structure & Feature Mapping', 1);
addParagraph('All application source code is contained within the src/ directory, organized cleanly into dedicated feature layers:');

addHeading('Root Source Files', 2);
addBullet('src/main.jsx', 'JavaScript entry point. Mounts the React root element, wraps App inside React.StrictMode, and configures BrowserRouter with React Router v7 opt-in future flags (v7_startTransition & v7_relativeSplatPath).');
addBullet('src/App.jsx', 'Master Application shell. Defines top Navbar, main route switcher (<Routes>), bottom Footer, ScrollToTop navigation listener, and Quick View project modal trigger.');
addBullet('src/index.css', 'Global CSS stylesheet declaring Tailwind CSS directives (@tailwind base, @tailwind components, @tailwind utilities), custom gradient classes, glassmorphism panel styles, and custom webkit scrollbar formatting.');

addHeading('src/data/ (Centralized Data Layer)', 2);
addParagraph('Purpose: Stores all structured application data driving the portfolio dynamically without hardcoding content in component markup.');
addBullet('src/data/portfolioData.js', 'Primary data store containing profileInfo (personal bio, location, email, status, socials), heroTechStack, skillsData (categories, skill levels, learning roadmap), projectsData (rich case study details, problem statements, architectures, links), timelineEvents (B.Tech milestones), and aboutCards.');
addBullet('src/data/projectThumbnail/', 'Stores real project thumbnail screenshot images (musicApplication.png, plagiarism.png) imported by portfolioData.js to render project graphics.');

addHeading('src/components/ (Reusable UI Layer)', 2);
addParagraph('Purpose: Contains modular, reusable UI components shared across pages to maintain DRY code standards.');
addBullet('src/components/Navbar.jsx', 'Fixed top navigation bar with brand logo, desktop route links with active underline indicators, and responsive mobile drawer toggle menu.');
addBullet('src/components/Footer.jsx', 'Global site footer featuring brand bio summary, quick page navigation links, social profile badges (GitHub, LinkedIn, LeetCode, Instagram), and copyright info.');
addBullet('src/components/ProjectCard.jsx', 'Compact project card component used for displaying title, category, description, tech stack tags, live preview/source links, and quick view modal trigger.');
addBullet('src/components/ProjectMockup.jsx', 'Editorial graphic preview component that renders either real project thumbnail images or fallback custom SVG/CSS visual graphics.');
addBullet('src/components/ProjectModal.jsx', 'Interactive pop-up modal component displaying quick detailed overviews, key features, and technology stacks for projects.');
addBullet('src/components/SkillCard.jsx', 'Category skill component rendering technology items, icons, and proficiency level indicators.');

addHeading('src/pages/ (Page Views & Routes Layer)', 2);
addParagraph('Purpose: Houses top-level page views corresponding to application routes defined in App.jsx.');
addBullet('src/pages/Home.jsx (Route: /)', 'Main portfolio landing page featuring ambient background glows, greeting badge, static role badge ("Full-Stack Web Developer & CS Engineer"), bio summary, CTA buttons ("Download Resume", "Contact Me"), portrait photo card, tech stack pills, and featured projects highlight.');
addBullet('src/pages/About.jsx (Route: /about)', 'Detailed about page containing key academic metrics (7+ Web Projects, Sem 5 Undergrad, Parul University), academic timeline, and 4 information cards (Education, Location & Mobility, Technical Focus, Career Objectives).');
addBullet('src/pages/Skills.jsx (Route: /skills)', 'Editorial skills page featuring minimal horizontal category text filter (ALL, FRONTEND, PROGRAMMING, DATABASES, TOOLS), 2-column unboxed category grids, skill rows with right-aligned muted level tags (ADVANCED, PROFICIENT, INTERMEDIATE), arrow hover transitions, and a minimal continuous learning roadmap section.');
addBullet('src/pages/Projects.jsx (Route: /projects)', 'Editorial projects showcase gallery featuring editorial hero heading ("Projects I\'ve built to learn, experiment & solve."), minimal horizontal text filter, search input bar ([ Search projects... ⌕ ]), alternating asymmetric featured work section, and 2-column secondary project grid.');
addBullet('src/pages/ProjectDetail.jsx (Route: /projects/:id)', 'Dedicated full-page case study view for individual projects with ← Back to Projects link, overview, problem statement, solution statement, key features grid, system architecture pipeline, technology tags, challenges & results, live demo / source links, and Next Project → bottom navigation.');
addBullet('src/pages/Contact.jsx (Route: /contact)', 'Contact page featuring Web3Forms API integration, interactive contact form (Name, Email, Subject, Message), location card, email badge, availability status, and social buttons.');

// 4. OTHER ASSET DIRECTORIES
addHeading('4. Asset & Build Output Directories', 1);
addBullet('assets/', 'Contains static downloadable media files such as resume.PDF and generated PDF documentation.');
addBullet('images/', 'Contains site images such as profile.png used in the Home and About sections.');
addBullet('dist/', 'Generated production build folder output by Vite (npm run build) containing optimized, minified HTML, CSS, and JS bundles ready for deployment.');

// Final Footer Note
doc.moveDown(0.8);
doc.fillColor('#2E6B70').fontSize(8.5).font('Helvetica-Oblique').text(`Document generated automatically for Ritik Kumar Portfolio. All Rights Reserved. © ${new Date().getFullYear()}`, { align: 'center' });

doc.end();

writeStreamRoot.on('finish', () => {
  // Copy generated PDF to assets/ and public/ as well
  fs.copyFileSync(pdfPathRoot, pdfPathAssets);
  fs.copyFileSync(pdfPathRoot, pdfPathPublic);
  console.log('PDF documentation successfully created at:', pdfPathRoot);
});
