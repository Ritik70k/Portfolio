import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#03363D]/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#D8ECEB] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0E7C7B]/30 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#2E6B70] hover:text-[#03363D] hover:bg-white/50 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-[#0E7C7B] to-[#1A6B8A] text-white flex items-center justify-center shadow-lg">
            <i className={`fa-solid ${project.icon} text-2xl`} />
          </div>
          <div>
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#0E7C7B]/15 text-[#0E7C7B] border border-[#0E7C7B]/30">
              {project.category}
            </span>
            <h2 className="text-2xl font-extrabold text-[#03363D] mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-[#03363D]">
          <div>
            <h4 className="text-sm font-bold text-[#2E6B70] uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-base leading-relaxed text-[#03363D]/90 bg-white/50 p-4 rounded-2xl border border-[#0E7C7B]/20">
              {project.longDescription}
            </p>
          </div>

          {/* Key Technologies */}
          <div>
            <h4 className="text-sm font-bold text-[#2E6B70] uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-white text-[#0E7C7B] shadow-sm border border-[#0E7C7B]/30"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#0E7C7B]/20">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] hover:from-[#0A5E5D] hover:to-[#155A76] rounded-2xl shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Open Live Preview
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-bold text-[#03363D] bg-white hover:bg-white/80 rounded-2xl border border-[#0E7C7B]/30 shadow-sm transition-all"
            >
              <i className="fa-brands fa-github text-lg" />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
