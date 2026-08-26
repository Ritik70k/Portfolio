
import { Code, Sliders, Layers } from 'lucide-react';

export default function ProjectMockup({ thumbnail, image, type, title }) {
  const imgSrc = thumbnail || image;

  if (imgSrc) {
    return (
      <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-[#0E7C7B]/20 bg-[#03363D]">
        <img
          src={imgSrc}
          alt={title}
          className="block w-full h-auto object-contain"
        />
      </div>
    );
  }

  const getMockupContent = () => {
    switch (type) {
      case 'editor':
        return (
          <div className="w-full h-full bg-[#03363D] text-[#BDD9D7] flex flex-col justify-between p-4 sm:p-6 font-mono text-xs select-none">
            <div className="flex items-center justify-between border-b border-[#0E7C7B]/40 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-bold text-[#BDD9D7]/80 text-[11px]">image-editor-studio.v1</span>
              </div>
              <span className="text-[#0E7C7B] font-bold text-[10px] uppercase tracking-wider">Canvas 2D Engine</span>
            </div>

            <div className="grid grid-cols-12 gap-4 my-auto py-2">
              <div className="col-span-4 space-y-2 border-r border-[#0E7C7B]/30 pr-3 hidden sm:block">
                <div className="text-[10px] text-[#2E6B70] uppercase font-bold tracking-wider">Filters</div>
                <div className="bg-[#0E7C7B]/20 p-2 rounded border border-[#0E7C7B]/40 flex justify-between items-center text-[10px]">
                  <span>Brightness</span> <span className="text-[#0E7C7B] font-bold">120%</span>
                </div>
                <div className="bg-[#0E7C7B]/20 p-2 rounded border border-[#0E7C7B]/40 flex justify-between items-center text-[10px]">
                  <span>Contrast</span> <span className="text-[#0E7C7B] font-bold">105%</span>
                </div>
                <div className="bg-[#0E7C7B]/20 p-2 rounded border border-[#0E7C7B]/40 flex justify-between items-center text-[10px]">
                  <span>Saturation</span> <span className="text-[#0E7C7B] font-bold">140%</span>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-8 flex flex-col items-center justify-center bg-[#BDD9D7]/10 rounded-xl p-4 border border-[#0E7C7B]/30 min-h-35">
                <Sliders className="w-8 h-8 text-[#0E7C7B] mb-2 animate-pulse" />
                <span className="text-white font-bold text-sm tracking-wide">Image Processing Viewport</span>
                <span className="text-[10px] text-[#BDD9D7]/60 mt-1">Real-time HTML5 Canvas Pixel Pipeline</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#0E7C7B]/30 pt-2 text-[10px] text-[#BDD9D7]/60">
              <span>Ready for Export</span>
              <span>1920 x 1080 px</span>
            </div>
          </div>
        );

      case 'notes':
        return (
          <div className="w-full h-full bg-[#0E7C7B]/10 bg-linear-to-br from-[#03363D] to-[#0E7C7B]/90 text-white p-5 flex flex-col justify-between font-sans text-xs select-none">
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-extrabold tracking-wider text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#BDD9D7]" /> React Notes Workspace
              </span>
              <span className="px-2 py-0.5 rounded bg-white/20 text-[10px] font-bold">LocalStorage Sync</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto py-2">
              <div className="bg-white/10 p-3 rounded-xl border border-white/15 space-y-1">
                <div className="font-bold text-xs text-[#BDD9D7]">Project Roadmap 2026</div>
                <div className="text-[10px] opacity-80 line-clamp-2">Component optimization and clean state refactoring...</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/15 space-y-1">
                <div className="font-bold text-xs text-[#BDD9D7]">CS Core Architecture</div>
                <div className="text-[10px] opacity-80 line-clamp-2">Data structures & OOP patterns review...</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] opacity-70 border-t border-white/20 pt-2">
              <span>Filter: All Notes</span>
              <span>Saved to Browser</span>
            </div>
          </div>
        );

      case 'finance':
        return (
          <div className="w-full h-full bg-[#03363D] text-white p-5 flex flex-col justify-between font-sans text-xs select-none">
            <div className="flex justify-between items-center border-b border-[#0E7C7B]/40 pb-3">
              <span className="font-bold text-sm tracking-wide text-[#BDD9D7]">Financial Dashboard</span>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">+ Net Balance Active</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto py-2">
              <div className="bg-[#0E7C7B]/20 p-2.5 rounded-xl border border-[#0E7C7B]/40 text-center">
                <div className="text-[9px] uppercase text-[#BDD9D7] font-bold">Income</div>
                <div className="text-xs font-black text-emerald-400 mt-0.5">$3,450</div>
              </div>
              <div className="bg-[#0E7C7B]/20 p-2.5 rounded-xl border border-[#0E7C7B]/40 text-center">
                <div className="text-[9px] uppercase text-[#BDD9D7] font-bold">Expense</div>
                <div className="text-xs font-black text-rose-400 mt-0.5">$1,210</div>
              </div>
              <div className="bg-[#0E7C7B]/30 p-2.5 rounded-xl border border-[#0E7C7B]/60 text-center">
                <div className="text-[9px] uppercase text-[#BDD9D7] font-bold">Balance</div>
                <div className="text-xs font-black text-[#BDD9D7] mt-0.5">$2,240</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-[#BDD9D7]/70 border-t border-[#0E7C7B]/30 pt-2">
              <span>Real-time Dynamic State</span>
              <span>React Reducer Logic</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-linear-to-br from-[#03363D] via-[#0E7C7B] to-[#1A6B8A] text-white p-6 flex flex-col items-center justify-center text-center select-none">
            <Code className="w-10 h-10 text-[#BDD9D7] mb-2 animate-bounce" />
            <h4 className="font-extrabold text-base tracking-wide">{title}</h4>
            <span className="text-xs text-[#BDD9D7]/80 mt-1">Interactive Project Preview</span>
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-[#0E7C7B]/20 transition-transform duration-500 hover:scale-[1.02]">
      {getMockupContent()}
    </div>
  );
}
