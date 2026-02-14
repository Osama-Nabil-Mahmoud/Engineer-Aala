
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 py-16 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-xl font-bold tracking-tight text-zinc-900 font-heading">BELTAGI STUDIO</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Technical Architecture</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              A specialized studio dedicated to technical precision, BIM management, and the seamless delivery of complex architectural projects.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Instagram', 'Behance'].map((social) => (
                <a key={social} href="#" className="text-zinc-400 hover:text-zinc-900 font-bold text-xs uppercase tracking-widest transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Process', 'Work'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              {['FAQ', 'Pricing', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs font-medium space-y-4 md:space-y-0">
          <p>© 2024 Beltagi Studio. All rights reserved.</p>
          <p>Designed for Performance & Technical Precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
