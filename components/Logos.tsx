
import React from 'react';

const Logos: React.FC = () => {
  const logos = [
    'SKYLINE ARCH', 'URBAN DEV', 'CORE CONSULTS', 'VANGUARD BIM', 'STRATOS DESIGN', 'NOVA BUILDS'
  ];

  return (
    <section className="py-12 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10">
          Worked with teams similar to
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div key={logo} className="flex justify-center">
              <span className="text-sm font-black tracking-tighter text-zinc-900 border-2 border-zinc-900 px-3 py-1 uppercase">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
