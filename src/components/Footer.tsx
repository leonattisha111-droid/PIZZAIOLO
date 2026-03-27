import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-brand">
            PIZZAIOLO.
          </Link>
          <p className="text-paper/60 text-sm leading-relaxed">
            Authentic Neapolitan pizza crafted with passion and the finest ingredients. Experience the true taste of Italy in every bite.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-paper/40 hover:text-brand transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-paper/40 hover:text-brand transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-paper/40 hover:text-brand transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs text-paper/40">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/menu" className="hover:text-brand transition-colors">Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-brand transition-colors">Reservations</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs text-paper/40">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-paper/60"><MapPin size={18} className="text-brand shrink-0" /> 123 Pizza Lane, Foodie City, FC 54321</li>
            <li className="flex gap-3 text-paper/60"><Phone size={18} className="text-brand shrink-0" /> (555) 123-4567</li>
            <li className="flex gap-3 text-paper/60"><Mail size={18} className="text-brand shrink-0" /> ciao@pizzaiolo.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs text-paper/40">Hours</h4>
          <ul className="space-y-2 text-sm text-paper/60">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>11:00 - 22:00</span></li>
            <li className="flex justify-between text-paper"><span>Fri - Sat</span> <span>11:00 - 23:00</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>12:00 - 21:00</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper/40">
        <p>&copy; 2026 Pizzaiolo Restaurant. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
