import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80" 
          alt="Authentic Pizza" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex text-brand">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium tracking-widest uppercase text-paper/60">Top Rated in Foodie City</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
          >
            AUTHENTIC <br />
            <span className="text-brand">PIZZA</span> CRAFTED <br />
            WITH PASSION.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-paper/70 mb-10 max-w-xl leading-relaxed"
          >
            Experience the true taste of Naples. Hand-stretched dough, San Marzano tomatoes, and 24-hour fermentation for the perfect crust.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/order" className="btn-primary text-lg px-8 py-4">
              Order Online Now
              <ArrowRight size={20} />
            </Link>
            <Link to="/reservations" className="btn-outline text-lg px-8 py-4">
              Book a Table
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="w-40 h-40 rounded-full glass flex flex-col items-center justify-center text-center p-4 rotate-12 border-brand/30">
          <span className="text-brand font-display font-bold text-3xl">24H</span>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Dough Fermentation</span>
        </div>
      </motion.div>
    </section>
  );
}
