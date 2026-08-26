import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function SkillCard({ category }) {
  return (
    <div className="bg-[#D8ECEB]/80 hover:bg-[#D8ECEB] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#0E7C7B]/20 hover:border-[#0E7C7B]/50 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between">
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#0E7C7B]/20">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#0E7C7B] to-[#1A6B8A] text-white flex items-center justify-center shadow-lg">
            <i className={`${category.icon} text-xl`} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#03363D]">{category.title}</h3>
            <span className="text-xs text-[#2E6B70] font-semibold">
              {category.skills.length} Core Technologies
            </span>
          </div>
        </div>

        {/* Clean Skill Badge Grid (No Outdated Progress Bars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/80 hover:bg-white p-3.5 rounded-2xl border border-[#0E7C7B]/20 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#0E7C7B]/10 group-hover:bg-[#0E7C7B]/20 flex items-center justify-center transition-colors">
                  <i className={`${skill.icon} text-base`} style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-bold text-[#03363D] group-hover:text-[#0E7C7B] transition-colors">
                  {skill.name}
                </span>
              </div>

              {/* Professional Proficiency Tag */}
              <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-[#03363D]/10 text-[#03363D] border border-[#03363D]/15">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
