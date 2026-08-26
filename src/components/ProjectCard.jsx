
import { ExternalLink, Eye } from 'lucide-react';

export default function ProjectCard({ project, onQuickView }) {
  return (
    <div className="group relative bg-[#D8ECEB]/85 hover:bg-[#D8ECEB] backdrop-blur-md rounded-3xl p-6 border border-[#0E7C7B]/20 hover:border-[#0E7C7B]/50 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden">
      {/* Ambient background hover glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-linear-to-br from-[#0E7C7B]/20 to-[#1A6B8A]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* Title */}
        <h3 className="text-xl font-extrabold text-[#03363D] group-hover:text-[#0E7C7B] transition-colors mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#2E6B70] text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white/80 text-[#03363D] border border-[#0E7C7B]/20 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4 border-t border-[#0E7C7B]/15">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-[#03363D] bg-white hover:bg-white/90 rounded-xl border border-[#0E7C7B]/30 transition-all shadow-sm group/btn"
          >
            <i className="fa-brands fa-github text-sm" />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-white bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] hover:from-[#0A5E5D] hover:to-[#155A76] rounded-xl shadow-sm hover:shadow-md transition-all group/btn"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        </div>

        {/* Quick Modal Trigger */}
        <button
          onClick={() => onQuickView(project)}
          className="w-full py-1.5 text-xs font-semibold text-[#2E6B70] hover:text-[#0E7C7B] flex items-center justify-center gap-1.5 hover:underline transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          Quick View Details
        </button>
      </div>
    </div>
  );
}
