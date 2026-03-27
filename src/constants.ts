import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Classica',
    description: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.',
    price: 14,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: '2',
    name: 'Diavola',
    description: 'Spicy salami, San Marzano tomatoes, mozzarella, chili flakes.',
    price: 16,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: '3',
    name: 'Tartufo e Funghi',
    description: 'Black truffle cream, wild mushrooms, mozzarella, parsley.',
    price: 18,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Burrata & Prosciutto',
    description: 'Fresh burrata, 24-month aged prosciutto, arugula, balsamic glaze.',
    price: 19,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593504049359-74330189a355?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: '5',
    name: 'Garlic Knots',
    description: 'House-made dough, roasted garlic butter, parmesan, marinara dip.',
    price: 8,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1619531038896-9818817730e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Tiramisu',
    description: 'Classic Italian pick-me-up with espresso and mascarpone.',
    price: 9,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marco Rossi',
    text: 'The best authentic Neapolitan pizza in the city. The crust is perfect!',
    rating: 5,
    date: '2 days ago'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    text: 'Love the modern vibe and the online ordering is so smooth. My go-to Friday dinner.',
    rating: 5,
    date: '1 week ago'
  }
];
