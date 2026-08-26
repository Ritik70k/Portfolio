import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Send, CheckCircle2 } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-[#03363D]">
          Get <span className="bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] bg-clip-text text-transparent">In Touch</span>
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] rounded-full" />
        <p className="max-w-7xl text-base text-[#2E6B70]">
          Have a project, internship opportunity, or question? Feel free to reach out directly using the form below!
        </p>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Details */}
          <div className="lg:col-span-5 bg-[#D8ECEB]/90 backdrop-blur-md rounded-3xl p-8 border border-[#0E7C7B]/30 shadow-xl space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#03363D] mb-3">
                Let's Build Something Together...
              </h2>
              <p className="text-sm text-[#2E6B70] leading-relaxed">
                I'm currently looking for internship opportunities, collaborations, and exciting web development projects where I can learn, contribute, and grow as a developer.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#0E7C7B]/20">
                <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-[#0E7C7B] to-[#1A6B8A] text-white flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#2E6B70] font-semibold uppercase block">Email Address</span>
                  <a href={`mailto:${profileInfo.email}`} className="text-sm font-bold text-[#03363D] hover:text-[#0E7C7B] transition-colors">
                    {profileInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#0E7C7B]/20">
                <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-[#0E7C7B] to-[#1A6B8A] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#2E6B70] font-semibold uppercase block">Location</span>
                  <span className="text-sm font-bold text-[#03363D]">
                    {profileInfo.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#0E7C7B]/20">
                <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-[#0E7C7B] to-[#1A6B8A] text-white flex items-center justify-center shadow-md">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#2E6B70] font-semibold uppercase block">Availability</span>
                  <span className="text-sm font-bold text-[#0E7C7B]">
                    {profileInfo.status}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Web3Forms Form */}
          <div className="lg:col-span-7 bg-[#D8ECEB]/90 backdrop-blur-md rounded-3xl p-8 border border-[#0E7C7B]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#0E7C7B] mx-auto animate-bounce" />
                <h3 className="text-2xl font-extrabold text-[#03363D]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#2E6B70] max-w-md mx-auto">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0E7C7B] text-white font-bold text-sm shadow-md hover:bg-[#0A5E5D] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={() => setTimeout(() => setSubmitted(true), 800)}
                className="space-y-5"
              >
                <input type="hidden" name="access_key" value="66be6636-f9f8-4985-8d81-5dd6fc4acfb4" />
                <input type="hidden" name="from_name" value="Ritik Portfolio" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#03363D] uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#03363D] placeholder-[#2E6B70]/60 font-medium border border-[#0E7C7B]/30 focus:outline-none focus:ring-2 focus:ring-[#0E7C7B] shadow-sm text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#03363D] uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#03363D] placeholder-[#2E6B70]/60 font-medium border border-[#0E7C7B]/30 focus:outline-none focus:ring-2 focus:ring-[#0E7C7B] shadow-sm text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#03363D] uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Internship Opportunity"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#03363D] placeholder-[#2E6B70]/60 font-medium border border-[#0E7C7B]/30 focus:outline-none focus:ring-2 focus:ring-[#0E7C7B] shadow-sm text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#03363D] uppercase tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#03363D] placeholder-[#2E6B70]/60 font-medium border border-[#0E7C7B]/30 focus:outline-none focus:ring-2 focus:ring-[#0E7C7B] shadow-sm text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-base font-bold text-white bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] hover:from-[#0A5E5D] hover:to-[#155A76] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
