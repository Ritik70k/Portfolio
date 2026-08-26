import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Layers, Cpu, Check, Compass, Terminal, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from '../components/ProjectMockup';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = projectsData.findIndex((p) => p.id === id || p.slug === id);
  const project = projectsData[projectIndex] || projectsData[0];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#BDD9D7] text-[#03363D]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0E7C7B] hover:text-[#03363D] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xl sm:text-2xl font-bold text-[#0E7C7B]">
              {project.number}
            </span>
            <span className="w-8 h-0.5 bg-[#0E7C7B]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2E6B70]">
              {project.categoryDisplay || project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#03363D] leading-tight">
            {project.title}
          </h1>

          <p className="font-mono text-sm sm:text-base text-[#1A6B8A] font-semibold">
            {project.techStackText}
          </p>
        </div>

        {/* Hero Visual Mockup Banner */}
        <div className="w-full shadow-2xl rounded-3xl overflow-hidden border border-[#0E7C7B]/30">
          <ProjectMockup thumbnail={project.thumbnail} type={project.mockupType} title={project.title} />
        </div>

        {/* Quick Action Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-[#0E7C7B]/20 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E6B70]">
            Case Study Detail & Repository Links
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] hover:from-[#0A5E5D] hover:to-[#155A76] rounded-xl shadow-md transition-all"
            >
              <span>View Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#03363D] bg-white hover:bg-white/80 rounded-xl border border-[#0E7C7B]/30 shadow-sm transition-all"
            >
              <i className="fa-brands fa-github text-sm" />
              <span>View Source</span>
            </a>
          </div>
        </div>

        {/* Main Case Study Editorial Layout */}
        <div className="space-y-12 divide-y divide-[#0E7C7B]/20">
          
          {/* Overview */}
          <section className="space-y-3 pt-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B]">
              01 / OVERVIEW
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-medium text-[#03363D]/90">
              {project.fullDescription || project.description}
            </p>
          </section>

          {/* Problem & Solution Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3 bg-white/50 p-6 rounded-2xl border border-[#0E7C7B]/20">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-rose-700">
                THE PROBLEM
              </h3>
              <p className="text-sm leading-relaxed text-[#03363D]">
                {project.problemStatement}
              </p>
            </div>

            <div className="space-y-3 bg-white/50 p-6 rounded-2xl border border-[#0E7C7B]/20">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B]">
                THE SOLUTION
              </h3>
              <p className="text-sm leading-relaxed text-[#03363D]">
                {project.solutionStatement}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-4 pt-8">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B]">
              02 / KEY FEATURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures?.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-[#0E7C7B]/20"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#03363D]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Pipeline */}
          {project.architecture && (
            <section className="space-y-4 pt-8">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B]">
                03 / SYSTEM ARCHITECTURE & FLOW
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/80 border border-[#0E7C7B]/20 space-y-1">
                    <span className="font-mono text-xs font-bold text-[#0E7C7B]">Step 0{idx + 1}</span>
                    <h4 className="font-bold text-sm text-[#03363D]">{item.step}</h4>
                    <p className="text-[11px] text-[#2E6B70] leading-snug">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Stack Chips */}
          <section className="space-y-4 pt-8">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B]">
              04 / TECHNOLOGIES USED
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-xs font-extrabold rounded-xl bg-white text-[#03363D] border border-[#0E7C7B]/30 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges & Learnings */}
          <section className="space-y-4 pt-8">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B]">
              05 / CHALLENGES & RESULTS
            </h2>
            <div className="bg-white/60 p-6 rounded-2xl border border-[#0E7C7B]/20 space-y-4">
              <div>
                <h4 className="text-xs font-extrabold uppercase text-[#1A6B8A] mb-1">Key Technical Challenges</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#03363D]">
                  {project.challenges?.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-[#0E7C7B]/15">
                <h4 className="text-xs font-extrabold uppercase text-[#0E7C7B] mb-1">Achieved Result</h4>
                <p className="text-xs sm:text-sm font-semibold text-[#03363D]">{project.result}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-[#0E7C7B]/30 flex items-center justify-between">
          <Link
            to="/projects"
            className="text-xs font-bold text-[#2E6B70] hover:text-[#0E7C7B] transition-colors"
          >
            ← Back to Projects Gallery
          </Link>

          <Link
            to={`/projects/${nextProject.id}`}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0E7C7B] hover:text-[#03363D] transition-colors"
          >
            <span>Next Project ({nextProject.title})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
