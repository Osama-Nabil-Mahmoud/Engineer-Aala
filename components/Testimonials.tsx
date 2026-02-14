
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Beltagi Studio transformed our coordination workflow. The clarity of the tender packages saved us weeks of RFI cycles.",
      author: "Sarah Chen",
      role: "Director, Urban Architects",
    },
    {
      text: "Technical architecture is often the bottleneck. With this studio, it became our competitive advantage on site.",
      author: "Marcus Thorne",
      role: "Lead Contractor, Thorne Group",
    },
    {
      text: "Deep expertise in BIM. Their Navisworks reporting alone reduced our clash list from thousands to critical zero.",
      author: "Amina Al-Sayed",
      role: "Project Manager, Core Dev",
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-zinc-200 mb-6">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V7C13.017 5.89543 13.9124 5 15.017 5H19.017C20.1216 5 21.017 5.89543 21.017 7V10C21.017 11.1046 20.1216 12 19.017 12H17.017C17.017 12.5523 17.4647 13 18.017 13H19.017C21.2261 13 23.017 14.7909 23.017 17V21H14.017ZM3.01692 21L3.01692 18C3.01692 16.8954 3.91235 16 5.01692 16H8.01692V14H6.01692C3.80778 14 2.01692 12.2091 2.01692 10V7C2.01692 5.89543 2.91235 5 4.01692 5H8.01692C9.12149 5 10.0169 5.89543 10.0169 7V10C10.0169 11.1046 9.12149 12 8.01692 12H6.01692C6.01692 12.5523 6.46463 13 7.01692 13H8.01692C10.2261 13 12.0169 14.7909 12.0169 17V21H3.01692Z" /></svg>
              </div>
              <p className="text-lg text-zinc-700 leading-relaxed mb-6 flex-grow">"{review.text}"</p>
              <div>
                <p className="font-bold text-zinc-900">{review.author}</p>
                <p className="text-sm text-zinc-500 font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
