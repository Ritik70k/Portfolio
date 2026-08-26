import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const navCategories = [
  { id: 'all', label: 'ALL' },
  { id: 'frontend', label: 'FRONTEND' },
  { id: 'programming', label: 'PROGRAMMING' },
  { id: 'database', label: 'DATABASES' },
  { id: 'tools', label: 'TOOLS' },
];

const categoryDescriptions = {
  frontend: 'Core technologies I use to build responsive interfaces, modern web applications, and interactive user experiences.',
  programming: 'Fundamental programming languages, object-oriented concepts, and algorithmic problem solving.',
  database: 'Data persistence solutions, relational database management, and client-side browser storage.',
  tools: 'Developer environment, version control workflows, and build automation tooling.',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-[#BDD9D7] text-[#03363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ==================================================
            1. SKILLS HERO (Tightened Spacing & Strong Typography)
           ================================================== */}
        <header className="space-y-4 pt-4">

          <div className="max-w-5xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#03363D] leading-[1.1]">
              The tools and concepts behind what I build.
            </h1>
            <p className="text-sm sm:text-base text-[#2E6B70] leading-relaxed font-medium max-w-5xl">
              A structured overview of the technologies, programming concepts, databases and developer tools I'm currently working with.
            </p>
          </div>
        </header>

        {/* ==================================================
            2. CATEGORY NAVIGATION (Minimal Horizontal Text Navigation)
           ================================================== */}
        <div className="border-y border-[#0E7C7B]/20 py-3.5 overflow-x-auto scrollbar-none">
          <nav className="flex items-center gap-8 min-w-max text-xs sm:text-sm font-bold tracking-widest font-mono">
            {navCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#03363D] font-extrabold' : 'text-[#2E6B70] hover:text-[#03363D]'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0E7C7B]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* ==================================================
            3, 4, 5, 6, 7 & 8. MAIN SKILLS LAYOUT (Editorial Header & Polished Rows)
           ================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-2">
          {filteredCategories.map((category, catIdx) => {
            const numPrefix = String(catIdx + 1).padStart(2, '0');

            return (
              <div key={category.id} className="space-y-4">
                {/* Category Header (Strong Editorial Hierarchy) */}
                <div className="border-b border-[#0E7C7B]/30 pb-3 space-y-1">
                  <span className="font-mono text-xs font-extrabold text-[#0E7C7B] tracking-widest block uppercase">
                    {numPrefix}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#03363D] uppercase tracking-tight block">
                    {category.title}
                  </h2>
                </div>

                {/* Skill Rows List */}
                <div className="divide-y divide-[#0E7C7B]/15 border-b border-[#0E7C7B]/15">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group py-3.5 px-3 flex items-center justify-between transition-colors duration-200 hover:bg-white/40 rounded-lg cursor-default"
                    >
                      {/* Left: Icon Accent + Prominent Skill Name with Hover Slide */}
                      <div className="flex items-center gap-3.5">
                        <i
                          className={`${skill.icon} text-base text-[#0E7C7B] transition-opacity opacity-85 group-hover:opacity-100`}
                          style={{ color: skill.color || '#0E7C7B' }}
                        />
                        <span className="text-base sm:text-lg font-bold text-[#03363D] group-hover:translate-x-1.5 transition-transform duration-200">
                          {skill.name}
                        </span>
                      </div>

                      {/* Right: Hover Arrow + Muted Uppercase Level */}
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0E7C7B] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        <span className="font-mono text-[11px] font-extrabold tracking-widest text-[#2E6B70] uppercase group-hover:text-[#03363D] transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ==================================================
            9 & 10. CONTINUOUS LEARNING SECTION (Minimal Roadmap List)
           ================================================== */}
        <section className="pt-8 border-t border-[#0E7C7B]/30 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0E7C7B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E7C7B] animate-pulse" />
              CONTINUOUSLY LEARNING
            </span>
            <span className="text-xs font-mono font-bold text-[#2E6B70] uppercase tracking-wider">
              CURRENT TECHNICAL ROADMAP
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#03363D]">
              Currently exploring
            </h2>

            {/* Clean Minimal Roadmap Rows (No Pill Cards) */}
            <div className="divide-y divide-[#0E7C7B]/15 border-y border-[#0E7C7B]/20">
              {skillsData.currentlyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="group py-3.5 px-3 flex items-center justify-between hover:bg-white/40 transition-all duration-200 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-extrabold text-[#0E7C7B]">
                      0{idx + 1}
                    </span>
                    <i className={`${item.icon} text-base text-[#0E7C7B] transition-transform group-hover:scale-110`} />
                    <span className="text-sm sm:text-base font-bold text-[#03363D] group-hover:translate-x-1.5 transition-transform duration-200">
                      {item.name}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] font-extrabold text-[#2E6B70] uppercase tracking-wider group-hover:text-[#03363D]">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm font-medium text-[#2E6B70] max-w-3xl pt-4">
              Building projects, experimenting with new technologies, and continuously improving my development workflow.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
