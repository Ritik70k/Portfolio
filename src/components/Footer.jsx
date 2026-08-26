import React from 'react';
import { Link } from 'react-router-dom';
import { profileInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#03363D] text-[#CBE2E0] pt-12 pb-8 border-t border-[#0E7C7B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2E6B70]/30">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ritik <span className="text-[#0E7C7B]">Kumar</span>
            </h2>
            <p className="text-[#BDD9D7] max-w-md text-sm leading-relaxed">
              Computer Science student at Parul University passionate about Web Development, Java, DSA, and building modern digital experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-[#0E7C7B]/20 hover:bg-[#0E7C7B] text-white flex items-center justify-center transition-colors border border-[#0E7C7B]/40"
              >
                <i className="fa-brands fa-github text-lg" />
              </a>
              <a
                href={profileInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#0E7C7B]/20 hover:bg-[#0E7C7B] text-white flex items-center justify-center transition-colors border border-[#0E7C7B]/40"
              >
                <i className="fa-brands fa-linkedin text-lg" />
              </a>
              <a
                href={profileInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="w-10 h-10 rounded-full bg-[#0E7C7B]/20 hover:bg-[#0E7C7B] text-white flex items-center justify-center transition-colors border border-[#0E7C7B]/40"
              >
                <i className="fa-solid fa-code text-lg" />
              </a>
              <a
                href={profileInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#0E7C7B]/20 hover:bg-[#0E7C7B] text-white flex items-center justify-center transition-colors border border-[#0E7C7B]/40"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-[#0E7C7B]/40 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <span className="text-[#0E7C7B]">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <span className="text-[#0E7C7B]">›</span> About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <span className="text-[#0E7C7B]">›</span> Skills & Tools
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <span className="text-[#0E7C7B]">›</span> Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <span className="text-[#0E7C7B]">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-[#0E7C7B]/40 pb-2 inline-block">
              Profiles
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={profileInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <i className="fa-brands fa-github text-[#0E7C7B]" /> GitHub Profile
                </a>
              </li>
              <li>
                <a href={profileInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-code text-[#0E7C7B]" /> LeetCode Profile
                </a>
              </li>
              <li>
                <a href={profileInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#0E7C7B] transition-colors flex items-center gap-2">
                  <i className="fa-brands fa-instagram text-[#0E7C7B]" /> Instagram
                </a>
              </li>
              <li className="pt-2 text-xs text-[#BDD9D7]">
                <i className="fa-solid fa-location-dot text-[#0E7C7B] mr-2" />
                Vadodara, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#BDD9D7]/80 gap-3">
          <p>© {new Date().getFullYear()} Ritik Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
