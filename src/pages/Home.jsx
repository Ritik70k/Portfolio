import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Send, ArrowRight } from 'lucide-react';
import { profileInfo, heroTechStack, projectsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function Home({ onQuickViewProject }) {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="min-h-screen pt-20 pb-16 space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        {/* Ambient Glow & Grid background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-10 right-10 w-120 h-120 bg-linear-to-br from-[#0E7C7B]/25 to-transparent blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-[24rem] h-96 bg-linear-to-tr from-[#1A6B8A]/20 to-transparent blur-3xl rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#0E7C7B_1.5px,transparent_1.5px)] bg-size-[32px_32px] opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E7C7B]/15 text-[#03363D] border border-[#0E7C7B]/30 font-semibold text-sm shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0E7C7B] animate-ping" />
                {profileInfo.greeting}
              </div>

              {/* Title & Name */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-black text-[#03363D] tracking-tight leading-tight">
                  I'm <span className="bg-linear-to-r from-[#0E7C7B] via-[#1A6B8A] to-[#03363D] bg-clip-text text-transparent">Ritik Kumar</span>
                </h1>

                {/* Static Professional Role Badge (No Typewriter Simulation) */}
                <div className="pt-1">
                  <span className="inline-block px-4 py-1.5 rounded-xl bg-[#03363D] text-[#BDD9D7] font-bold text-base sm:text-lg border border-[#0E7C7B]/40 shadow-md">
                    Full-Stack Web Developer & CS Engineer
                  </span>
                </div>
              </div>

              {/* Professional Bio */}
              <p className="text-base sm:text-lg text-[#2E6B70] leading-relaxed max-w-2xl pt-1">
                Computer Science student at Parul University on a journey through modern software engineering — crafting high-performance, elegant solutions with <strong className="text-[#03363D]">JavaScript</strong>, <strong className="text-[#03363D]">React</strong>, <strong className="text-[#03363D]">Java</strong>, and <strong className="text-[#03363D]">SQL Databases</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={profileInfo.resumeUrl}
                  download="Ritik_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] hover:from-[#0A5E5D] hover:to-[#155A76] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#03363D] font-bold text-sm border border-[#0E7C7B]/30 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4 text-[#0E7C7B]" />
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#0E7C7B]/15">
                <span className="text-xs font-bold text-[#2E6B70] uppercase tracking-wider">Connect:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/80 hover:bg-[#0E7C7B] hover:text-white text-[#03363D] border border-[#0E7C7B]/20 flex items-center justify-center transition-all shadow-sm"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                  <a
                    href={profileInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/80 hover:bg-[#0E7C7B] hover:text-white text-[#03363D] border border-[#0E7C7B]/20 flex items-center justify-center transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-lg" />
                  </a>
                  <a
                    href={profileInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/80 hover:bg-[#0E7C7B] hover:text-white text-[#03363D] border border-[#0E7C7B]/20 flex items-center justify-center transition-all shadow-sm"
                    aria-label="LeetCode"
                  >
                    <i className="fa-solid fa-code text-lg" />
                  </a>
                  <a
                    href={profileInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/80 hover:bg-[#0E7C7B] hover:text-white text-[#03363D] border border-[#0E7C7B]/20 flex items-center justify-center transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Profile Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl bg-[#D8ECEB] border-2 border-white/80 p-4 overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    src={profileInfo.profileImg}
                    alt={profileInfo.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#03363D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white space-y-1">
                      <p className="font-extrabold text-sm">Ritik Kumar</p>
                      <p className="text-xs text-[#BDD9D7]">CS Undergrad @ Parul University</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Horizontal Pills */}
              <div className="flex flex-wrap justify-center gap-2 max-w-md">
                {heroTechStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 text-[#03363D] text-xs font-bold border border-[#0E7C7B]/25 shadow-sm hover:scale-105 transition-transform"
                  >
                    <i className={`${tech.icon} text-sm text-[#0E7C7B]`} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#0E7C7B]/20 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#03363D]">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0E7C7B] hover:text-[#0A5E5D] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onQuickView={onQuickViewProject} />
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl font-black">Open for Opportunities & Collaborations</h2>
            <p className="text-[#CBE2E0] text-sm sm:text-base leading-relaxed">
              Seeking software development internships, web projects, and team engineering roles where I can deliver impactful code.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="px-6 py-3 rounded-xl bg-white text-[#03363D] font-bold hover:bg-[#D8ECEB] transition-colors shadow-md text-sm"
            >
              Explore Experience
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#03363D] text-white font-bold hover:bg-[#03363D]/80 transition-colors shadow-md text-sm border border-[#0E7C7B]/40"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
