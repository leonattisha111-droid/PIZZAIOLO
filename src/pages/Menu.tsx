import { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Plus, Star } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'pizza' | 'sides' | 'drinks' | 'desserts'>('pizza');
  const categories = ['pizza', 'sides', 'desserts', 'drinks'];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="pt-32 pb-32 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">OUR MENU.</h1>
          <p className="text-paper/60 max-w-2xl mx-auto text-lg">
            From our signature wood-fired pizzas to our hand-made desserts, every item is prepared fresh daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-8 py-3 rounded-full font-display font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                : 'glass hover:border-brand/50 text-paper/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                      <Star size={10} className="text-brand fill-brand" />
                      POPULAR
                    </div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-display font-bold tracking-tight">{item.name}</h3>
                      <span className="text-xl font-display text-brand">${item.price}</span>
                    </div>
                    <p className="text-paper/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <button className="btn-primary w-full py-3">
                    <Plus size={18} />
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Upsell / Promotion */}
        <div className="mt-32 glass p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 border-brand/20">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-display font-bold">MAKE IT A FEAST?</h3>
            <p className="text-paper/60">Add any 2 sides and a dessert to your pizza for just $15 more.</p>
          </div>
          <button className="btn-primary px-10">Add Bundle Offer</button>
        </div>
      </div>
    </main>
  );
}
