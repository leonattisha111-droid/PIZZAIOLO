import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-3xl text-center space-y-6"
      >
        <div className="w-20 h-20 bg-brand/20 text-brand rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-display font-bold">Reservation Requested!</h3>
        <p className="text-paper/60">We've received your request. We'll send a confirmation email shortly. Ciao!</p>
        <button onClick={() => setSubmitted(false)} className="btn-outline">Make Another Booking</button>
      </motion.div>
    );
  }

  return (
    <div className="glass p-8 md:p-12 rounded-3xl">
      <h3 className="text-3xl font-display font-bold mb-8">BOOK YOUR TABLE</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-paper/40 flex items-center gap-2">
              <Calendar size={14} /> Date
            </label>
            <input 
              required
              type="date" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-paper/40 flex items-center gap-2">
              <Clock size={14} /> Time
            </label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors appearance-none">
              <option className="bg-ink">18:00</option>
              <option className="bg-ink">18:30</option>
              <option className="bg-ink">19:00</option>
              <option className="bg-ink">19:30</option>
              <option className="bg-ink">20:00</option>
              <option className="bg-ink">20:30</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-paper/40 flex items-center gap-2">
              <Users size={14} /> Guests
            </label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors appearance-none">
              <option className="bg-ink">2 People</option>
              <option className="bg-ink">3 People</option>
              <option className="bg-ink">4 People</option>
              <option className="bg-ink">5+ People</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-paper/40">Special Requests (Optional)</label>
          <textarea 
            rows={3}
            placeholder="Birthday, allergies, etc."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full py-4 text-lg">
          Confirm Reservation
          <ArrowRight size={20} />
        </button>
        <p className="text-center text-xs text-paper/40">
          By booking, you agree to our terms. We hold tables for 15 minutes.
        </p>
      </form>
    </div>
  );
}
