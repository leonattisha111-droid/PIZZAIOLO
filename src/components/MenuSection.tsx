import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MenuSection() {
  const featuredItems = MENU_ITEMS.filter(item => item.popular).slice(0, 3);

  return (
    <section className="py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand font-display font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Specialties</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter">CRAFTED TO PERFECTION.</h2>
          </div>
          <Link to="/menu" className="btn-outline">
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} className="text-brand fill-brand" />
                  POPULAR
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <button className="btn-primary w-full">Add to Order</button>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-display font-bold tracking-tight">{item.name}</h3>
                <span className="text-xl font-display text-brand">${item.price}</span>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
