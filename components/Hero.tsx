
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-zinc-100/50 clip-path-hero"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Available for Q3/Q4 2024 Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8">
            From Design Intent to <br />
            <span className="text-zinc-400">Build-Ready Reality.</span>
          </h1>

          <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl">
            I help teams deliver technically precise architecture and BIM coordination—so projects move faster, clash less, and build cleaner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Request a Proposal
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-full transition-all shadow-sm"
            >
              View Work Highlights
            </a>
          </div>

          <div className="flex items-center space-x-4 border-t border-zinc-200 pt-8 max-w-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                   <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Avatar" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 font-medium">
              Trusted by multidisciplinary teams across complex developments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
