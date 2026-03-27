import { motion } from 'motion/react';
import { Star, Heart, Users, History } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-32 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="text-brand font-display font-bold uppercase tracking-[0.2em] text-sm block">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-tight">PASSION IN <br /> EVERY SLICE.</h1>
            <p className="text-xl text-paper/60 leading-relaxed">
              Founded in 2018, Pizzaiolo was born from a simple dream: to bring the authentic, wood-fired taste of Naples to the heart of Foodie City.
            </p>
            <p className="text-paper/60 leading-relaxed">
              Our founder, Giovanni, spent years traveling across Italy, learning from the masters. He brought back not just recipes, but a philosophy: respect the dough, honor the ingredients, and never rush the process.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" 
                alt="Our Kitchen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl max-w-[240px] hidden md:block">
              <p className="text-sm font-medium italic text-paper/80">"Pizza isn't just food; it's a language of love and tradition."</p>
              <p className="text-xs font-bold mt-4 text-brand uppercase tracking-widest">— Giovanni, Founder</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight">CRAFTED WITH LOVE</h3>
            <p className="text-paper/60 text-sm leading-relaxed">Every pizza is hand-stretched and fired in our custom-built 900°F wood oven for that perfect leopard-spotted crust.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight">PREMIUM INGREDIENTS</h3>
            <p className="text-paper/60 text-sm leading-relaxed">We source only the best: DOP San Marzano tomatoes, fresh Fior di Latte mozzarella, and 24-month aged prosciutto.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight">COMMUNITY FIRST</h3>
            <p className="text-paper/60 text-sm leading-relaxed">We're more than a restaurant; we're a gathering place for families, friends, and pizza lovers alike.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
