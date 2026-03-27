import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import ReservationForm from '../components/ReservationForm';
import { motion } from 'motion/react';
import { Star, Quote, MapPin, Clock, Phone } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Social Proof / Trust Signals */}
      <section className="py-20 border-y border-white/5 bg-ink/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-display font-bold text-brand">4.9</div>
            <div className="space-y-1">
              <div className="flex text-brand">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-paper/40">Google Reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-display font-bold text-brand">15k+</div>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest font-bold text-paper/40">Happy Customers</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-display font-bold text-brand">100%</div>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest font-bold text-paper/40">Authentic Ingredients</div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      {/* Visual Showcase */}
      <section className="py-32 bg-ink/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1000&q=80" 
                alt="Pizza Oven" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-3xl overflow-hidden border-8 border-ink hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=500&q=80" 
                alt="Fresh Ingredients" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-brand font-display font-bold uppercase tracking-[0.2em] text-sm block">The Craft</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-tight">BORN IN NAPLES, <br /> MADE FOR YOU.</h2>
            <p className="text-lg text-paper/70 leading-relaxed">
              Our master pizzaiolos use traditional techniques passed down through generations. We source our flour from Molino Caputo and our tomatoes from the slopes of Mount Vesuvius.
            </p>
            <ul className="space-y-4">
              {['Wood-fired at 900°F', 'Hand-stretched daily', 'Local farm-to-table toppings'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-paper/80 font-medium">
                  <div className="w-2 h-2 rounded-full bg-brand"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand font-display font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-5xl font-display font-bold tracking-tighter">WHAT OUR GUESTS SAY.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass p-10 rounded-3xl space-y-6 relative overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 -rotate-12" />
                <div className="flex text-brand">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl italic text-paper/80 leading-relaxed">"{t.text}"</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="font-display font-bold text-lg">{t.name}</span>
                  <span className="text-xs text-paper/40 uppercase tracking-widest">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section id="reservations" className="py-32 bg-ink/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight">JOIN US FOR <br /> DINNER TONIGHT.</h2>
            <p className="text-xl text-paper/60 leading-relaxed">
              Whether it's a family gathering or a romantic date, we've got the perfect spot for you. Book your table in advance to avoid the wait.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <MapPin className="text-brand mb-2" />
                <h4 className="font-bold">Location</h4>
                <p className="text-sm text-paper/60">123 Pizza Lane, Foodie City</p>
              </div>
              <div className="space-y-2">
                <Clock className="text-brand mb-2" />
                <h4 className="font-bold">Opening Hours</h4>
                <p className="text-sm text-paper/60">Daily from 11:00 AM</p>
              </div>
            </div>
          </div>
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
