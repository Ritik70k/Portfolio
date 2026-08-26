import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { aboutCards, timelineEvents } from '../data/portfolioData';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 space-y-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-[#03363D]">
          About <span className="bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] bg-clip-text text-transparent">ME</span>
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] rounded-full" />
        <p className="max-w-7xl text-base sm:text-lg text-[#2E6B70] leading-relaxed pt-2 font-medium">
          Computer Science student and aspiring Full-Stack Developer passionate about building modern, responsive, and user-friendly web applications that solve real-world problems and deliver meaningful digital experiences.
        </p>
      </section>

      {/* Quick Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#D8ECEB]/90 backdrop-blur-md rounded-2xl p-5 border border-[#0E7C7B]/20 text-center shadow-md">
            <span className="block text-3xl font-black text-[#0E7C7B]">7+</span>
            <span className="text-xs font-bold text-[#03363D] uppercase tracking-wider">Web Projects Built</span>
          </div>
          <div className="bg-[#D8ECEB]/90 backdrop-blur-md rounded-2xl p-5 border border-[#0E7C7B]/20 text-center shadow-md">
            <span className="block text-3xl font-black text-[#1A6B8A]">Sem 5</span>
            <span className="text-xs font-bold text-[#03363D] uppercase tracking-wider">CS Undergrad</span>
          </div>
          <div className="bg-[#D8ECEB]/90 backdrop-blur-md rounded-2xl p-5 border border-[#0E7C7B]/20 text-center shadow-md">
            <span className="block text-3xl font-black text-[#0E7C7B]">Parul</span>
            <span className="text-xs font-bold text-[#03363D] uppercase tracking-wider">University</span>
          </div>
          <div className="bg-[#D8ECEB]/90 backdrop-blur-md rounded-2xl p-5 border border-[#0E7C7B]/20 text-center shadow-md">
            <span className="block text-3xl font-black text-[#03363D]">100%</span>
            <span className="text-xs font-bold text-[#03363D] uppercase tracking-wider">Commitment</span>
          </div>
        </div>
      </section>

      {/* College Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b-2 pb-2 border-[#0E7C7B]/25">
          <h2 className="text-3xl font-extrabold text-[#03363D] flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#0E7C7B] shrink-0" />
            <span>Academic Progress & Milestones</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="bg-[#BDD9D7] hover:bg-[#cae5e3] backdrop-blur-md p-6 border-b border-[#0E7C7B]/25 transition-all flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-2xl font-bold text-[#03363D] leading-snug mb-1">{event.title}</h3>
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#0E7C7B] text-white mb-2">
                    {event.date}
                  </span>
                </div>
                <p className="text-md font-semibold text-[#1A6B8A] mb-2">{event.institution}</p>
                <p className="text-sm text-[#2E6B70] leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 pb-3">
          <h2 className="text-2xl font-extrabold text-[#03363D] flex  gap-2">
            Profile Snapshot
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#D8ECEB]/80 hover:bg-[#D8ECEB] backdrop-blur-md rounded-3xl p-6 border border-[#0E7C7B]/20 hover:border-[#0E7C7B]/50 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#0E7C7B]/20">
                  <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-[#0E7C7B] to-[#1A6B8A] text-white flex items-center justify-center shadow-md">
                    <i className={`fa-solid ${card.icon} text-lg`} />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#03363D]">{card.title}</h3>
                </div>

                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#03363D]/90 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
