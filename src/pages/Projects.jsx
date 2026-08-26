import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from '../components/ProjectMockup';

const categories = ['ALL', 'FULL STACK', 'REACT', 'JAVASCRIPT', 'UI / CLONES', 'EXPERIMENTS'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on category and search query
  const filteredProjects = projectsData.filter((project) => {
    const catUpper = project.category.toUpperCase();
    const matchesCategory =
      selectedCategory === 'ALL' ||
      catUpper === selectedCategory ||
      (selectedCategory === 'FULL STACK' && (catUpper.includes('FULL') || project.badge.includes('Dashboard'))) ||
      (selectedCategory === 'UI / CLONES' && catUpper.includes('CLONES'));

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStackText.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#BDD9D7] text-[#03363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ==================================================
            3. PROJECT HERO
           ================================================== */}
        <header className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#0E7C7B]/20 pb-4">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0E7C7B]">
              SELECTED WORK
            </span>
            <span className="text-xs font-mono font-bold text-[#2E6B70]">
              {String(projectsData.length).padStart(2, '0')} PROJECTS
            </span>
          </div>

          <div className="max-w-6xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#03363D] leading-[1.1]">
              Projects I've built to learn, experiment & solve.
            </h1>
            <p className="text-base sm:text-lg text-[#2E6B70] leading-relaxed max-w-5xl pt-3 font-medium">
              A collection of frontend experiments, React applications, full-stack systems, UI recreations and interactive web experiences.
            </p>
          </div>
        </header>

        {/* ==================================================
            4. CATEGORY FILTER & 5. MINIMAL SEARCH
           ================================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-[#0E7C7B]/20 py-4">

          {/* Minimal Horizontal Navigation Category Filter */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-bold tracking-wider">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative py-1 transition-colors ${isActive ? 'text-[#03363D] font-extrabold' : 'text-[#2E6B70] hover:text-[#03363D]'
                    }`}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0E7C7B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Minimal Search Area */}
          <div className="relative min-w-60 sm:min-w-75">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-4 pr-10 py-2 rounded-lg bg-white/60 text-[#03363D] placeholder-[#2E6B70]/60 text-xs font-semibold border border-[#0E7C7B]/30 focus:outline-none focus:border-[#0E7C7B] transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2E6B70]" />
          </div>
        </div>

        {/* ==================================================
            6 & 7. FEATURED PROJECT SECTION (Alternating Asymmetric Layout)
           ================================================== */}
        {featuredProjects.length > 0 && (
          <section className="space-y-16 pt-4">

            <div className="space-y-20">
              {featuredProjects.map((project, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={project.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#0E7C7B]/20 ${isEven ? '' : 'lg:flex-row-reverse'
                      }`}
                  >
                    {/* Text Column */}
                    <div className={`lg:col-span-5 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-lg font-bold text-[#0E7C7B]">
                          {project.number}
                        </span>
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E6B70]">
                          {project.category}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#03363D] tracking-tight leading-tight">
                        {project.title}
                      </h2>

                      <p className="font-mono text-xs text-[#1A6B8A] font-semibold">
                        {project.techStackText}
                      </p>

                      <p className="text-sm text-[#2E6B70] leading-relaxed font-medium">
                        {project.shortDescription || project.description}
                      </p>

                      <div className="pt-2 flex items-center gap-6">
                        <Link
                          to={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0E7C7B] hover:text-[#03363D] transition-colors group"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E6B70] hover:text-[#03363D] transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Image Preview Column */}
                    <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <Link to={`/projects/${project.id}`} className="block group">
                        <ProjectMockup thumbnail={project.thumbnail} type={project.mockupType} title={project.title} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ==================================================
            8 & 9. OTHER PROJECTS SECTION (Clean 2-Column Responsive Grid)
           ================================================== */}
        {otherProjects.length > 0 && (
          <section className="space-y-10 pt-4">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0E7C7B]">
              MORE PROJECTS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group space-y-4 bg-white/40 hover:bg-white/60 p-5 rounded-2xl border border-[#0E7C7B]/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">

                    {/* Project Preview Image ======================================================== projectMockup */}

                    <Link to={`/projects/${project.id}`} className="block">
                      <ProjectMockup thumbnail={project.thumbnail} type={project.mockupType} title={project.title} />
                    </Link>

                    {/* Meta & Title */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-[#0E7C7B]">{project.number}</span>
                        <span className="text-[#2E6B70] uppercase">{project.category}</span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#03363D] group-hover:text-[#0E7C7B] transition-colors">
                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                      </h3>

                      <p className="font-mono text-xs text-[#1A6B8A] font-medium">
                        {project.techStackText}
                      </p>

                      <p className="text-xs text-[#2E6B70] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Link */}
                  <div className="pt-3 border-t border-[#0E7C7B]/15">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0E7C7B] group-hover:text-[#03363D] transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/40 rounded-2xl border border-[#0E7C7B]/20 space-y-3">
            <h3 className="text-lg font-bold text-[#03363D]">No matching projects found</h3>
            <p className="text-xs text-[#2E6B70]">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="text-xs font-bold text-[#0E7C7B] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
