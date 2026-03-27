import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-32 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">GET IN TOUCH.</h1>
          <p className="text-paper/60 max-w-2xl mx-auto text-lg">
            Have a question, feedback, or just want to say ciao? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass p-10 rounded-3xl text-center space-y-4">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold">VISIT US</h3>
            <p className="text-paper/60">123 Pizza Lane<br />Foodie City, FC 54321</p>
            <a href="#" className="text-brand font-bold hover:underline block pt-4">Get Directions</a>
          </div>

          <div className="glass p-10 rounded-3xl text-center space-y-4">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold">CALL US</h3>
            <p className="text-paper/60">Reservations & Orders<br />(555) 123-4567</p>
            <a href="tel:5551234567" className="text-brand font-bold hover:underline block pt-4">Call Now</a>
          </div>

          <div className="glass p-10 rounded-3xl text-center space-y-4">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold">EMAIL US</h3>
            <p className="text-paper/60">General Inquiries<br />ciao@pizzaiolo.com</p>
            <a href="mailto:ciao@pizzaiolo.com" className="text-brand font-bold hover:underline block pt-4">Send Email</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="glass rounded-3xl overflow-hidden min-h-[400px] relative">
            <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-center p-12">
              <div className="space-y-4">
                <MapPin size={48} className="text-brand mx-auto opacity-20" />
                <p className="text-paper/40 font-display font-bold text-xl uppercase tracking-widest">Interactive Map Integration</p>
                <p className="text-xs text-paper/20">Google Maps API would be loaded here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-10 rounded-3xl">
            <h3 className="text-3xl font-display font-bold mb-8 uppercase tracking-tight">SEND A MESSAGE</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors appearance-none">
                  <option className="bg-ink">General Inquiry</option>
                  <option className="bg-ink">Feedback</option>
                  <option className="bg-ink">Catering Request</option>
                  <option className="bg-ink">Career Opportunities</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
