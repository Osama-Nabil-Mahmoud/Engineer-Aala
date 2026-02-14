
import React from 'react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Project Basis',
      description: 'Full delivery of a specific technical package or BIM stage.',
      price: 'Custom',
      features: ['LOD 350+ Modeling', 'Tender Documentation', 'Full Clash Reports', 'RFI Support'],
      cta: 'Request Quote',
      popular: false,
    },
    {
      name: 'Technical Retainer',
      description: 'Ongoing technical leadership and coordination for long-term projects.',
      price: 'Contact',
      features: ['Priority Support', 'Daily Model Reviews', 'On-call Technical Lead', 'Design Management'],
      cta: 'Start Engagement',
      popular: true,
    },
    {
      name: 'Audit / Consulting',
      description: 'Review existing models or documentation for compliance and quality.',
      price: 'Day Rate',
      features: ['Quality Assurance Check', 'BIM Strategy Review', 'Gap Analysis Report', 'Workflow Optimization'],
      cta: 'Book Session',
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Engagement</h2>
          <p className="text-4xl md:text-5xl font-bold text-zinc-900">Engagement Models</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all ${
                tier.popular ? 'border-zinc-900 shadow-2xl scale-105 z-10' : 'border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Preferred
                </span>
              )}
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{tier.name}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{tier.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-zinc-900">{tier.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start text-sm text-zinc-600 font-medium">
                    <svg className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  tier.popular ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
