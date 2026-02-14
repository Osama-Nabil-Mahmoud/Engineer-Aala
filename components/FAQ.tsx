
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">{question}</span>
        <span className="ml-6 flex-shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-all">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const items = [
    {
      question: "Which BIM software platforms do you support?",
      answer: "We primarily work within Autodesk's ecosystem (Revit, Navisworks Manage, BIM 360/Construction Cloud). We also provide clash reporting and coordination services across IFC files from Tekla or ArchiCAD users."
    },
    {
      question: "Can you lead a full multidisciplinary coordination process?",
      answer: "Yes. We act as the technical architect/BIM manager, hosting coordination meetings, managing clash matrices, and ensuring all disciplines (MEP, Structural, Architecture) are aligned before sign-off."
    },
    {
      question: "What is your typical lead time for a tender package?",
      answer: "Lead times depend on the complexity and scale (m²), but we typically require a 2-4 week mobilization period to align standards before delivering major submittals."
    },
    {
      question: "Do you offer on-site support?",
      answer: "While we are primarily a remote studio, we can arrange for key milestone site visits and technical inspections for high-stakes projects within EMEA and North America."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Common Queries</h2>
          <p className="text-4xl font-bold text-zinc-900">FAQ</p>
        </div>
        <div className="bg-white px-8 rounded-3xl border border-zinc-200 shadow-sm">
          {items.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
