export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizza' | 'sides' | 'drinks' | 'desserts';
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}
