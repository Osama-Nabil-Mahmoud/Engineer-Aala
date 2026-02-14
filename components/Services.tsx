
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'BIM Coordination',
      tools: '(Revit / Navisworks / BIM 360)',
      description: 'Ensure zero clashes before a single brick is laid with high-fidelity modeling.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
      ),
    },
    {
      title: 'Tender Documentation',
      tools: '& Technical Packages',
      description: 'Deliver robust, detailed packages that eliminate contractor guesswork and budget creep.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
    },
    {
      title: 'Clash Detection',
      tools: '& Issue Resolution',
      description: 'Identify and solve spatial conflicts early in the design cycle to prevent site delays.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      ),
    },
    {
      title: 'Design Development',
      tools: '& Technical Leadership',
      description: 'Bridge the gap between vision and technical feasibility with leadership you can trust.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
    },
    {
      title: 'Code Compliance',
      tools: '& Permit Submissions',
      description: 'Navigate complex local regulations with precision-focused documentation and checks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
    },
    {
      title: 'Shop Drawings Review',
      tools: '& RFI Support',
      description: 'Keep construction moving with fast, expert technical feedback on submittals.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Core Competencies</h2>
          <p className="text-4xl md:text-5xl font-bold text-zinc-900">Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-zinc-200 rounded-2xl hover:shadow-xl hover:border-zinc-300 transition-all group"
            >
              <div className="w-12 h-12 bg-zinc-100 text-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">{service.title}</h3>
              <p className="text-xs font-semibold text-zinc-400 mb-4 uppercase tracking-wider">{service.tools}</p>
              <p className="text-zinc-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
