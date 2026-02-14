
import React from 'react';

const CaseHighlights: React.FC = () => {
  const projects = [
    {
      title: 'Office Complex — 25,000 m²',
      focus: 'Team Leadership + BIM + Tender Package',
      description: 'Led a team of technical architects to deliver the full construction package for a Grade-A office development.',
      metrics: ['Zero high-level clashes', '1400+ sheets generated'],
      image: 'https://picsum.photos/seed/arch1/800/600',
    },
    {
      title: 'Luxury Residential Tower',
      focus: 'Technical Detailing + Envelope Design',
      description: 'Detailed coordination of complex curtain wall systems and high-end interior interfaces.',
      metrics: ['LEED Platinum compliance', 'Modular detailing'],
      image: 'https://picsum.photos/seed/arch2/800/600',
    },
    {
      title: 'Industrial Warehouse Hub',
      focus: 'Coordination + Logistics Planning',
      description: 'Optimized structural coordination for rapid site assembly and automated warehousing logistics.',
      metrics: ['15% site waste reduction', '4D BIM planning'],
      image: 'https://picsum.photos/seed/arch3/800/600',
    },
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Portfolio</h2>
            <p className="text-4xl md:text-5xl font-bold text-zinc-900">Work Highlights</p>
          </div>
          <p className="text-zinc-600 max-w-md">
            Delivering technical excellence across residential, commercial, and industrial sectors with precision-first BIM.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 aspect-[4/3]"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-bold text-zinc-400 mb-2 uppercase tracking-widest">{project.focus}</p>
                <h3 className="text-3xl font-bold text-zinc-900 mb-6">{project.title}</h3>
                <p className="text-xl text-zinc-600 mb-8 leading-relaxed italic">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((metric, mIdx) => (
                    <span key={mIdx} className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-bold rounded-lg border border-zinc-200">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseHighlights;
