
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'BIM Coordination',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: 'BIM Coordination', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 overflow-hidden relative">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="w-full lg:w-1/2 relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Get in Touch</h2>
            <p className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to bring technical precision to your next project?</p>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-md">
              Fill out the form to request a proposal or book a 30-minute discovery call to discuss your BIM and coordination requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="font-semibold">hello@beltagistudio.com</span>
              </div>
              <div className="flex items-center text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="font-semibold">EMEA • North America • Remote</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                    placeholder="Design Firm Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Interested In</label>
                  <select
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>BIM Coordination</option>
                    <option>Technical Packages</option>
                    <option>Code Compliance</option>
                    <option>Consulting</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Brief Project Overview</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about the project scale, location, and key technical challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center space-x-2 ${
                  status === 'success' ? 'bg-green-600' : 'bg-zinc-900 hover:bg-zinc-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {status === 'submitting' ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : status === 'success' ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Message Sent</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
