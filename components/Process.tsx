
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Align',
      description: 'Clarify scope, constraints, and deliverables. We start by ensuring everyone has the same definition of success.',
    },
    {
      id: '02',
      title: 'Coordinate',
      description: 'Model, review, clash-detect, and resolve. Iterative technical refinement to bake reliability into the design.',
    },
    {
      id: '03',
      title: 'Deliver',
      description: 'Issue clean packages ready for tender or site execution. No loose ends, just high-performance documentation.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">The Methodology</h2>
          <p className="text-4xl md:text-5xl font-bold">How It Works</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <div key={step.id} className="relative z-10 group">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-6xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors">{step.id}</span>
                <div className="w-4 h-4 rounded-full bg-zinc-700 group-hover:bg-zinc-100 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
