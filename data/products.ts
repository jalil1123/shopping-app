export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  badge?: string;
  colors: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'AirMax Pulse',
    category: 'Running Shoes',
    price: 189,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight comfort with responsive cushioning for everyday performance.',
    badge: 'Best Seller',
    colors: ['#111827', '#7c3aed', '#f59e0b']
  },
  {
    id: 2,
    name: 'Urban Tote',
    category: 'Accessories',
    price: 96,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    description: 'A structured tote designed for work, travel, and everyday essentials.',
    badge: 'New',
    colors: ['#f8fafc', '#e2e8f0', '#1f2937']
  },
  {
    id: 3,
    name: 'Wave Headphones',
    category: 'Audio',
    price: 249,
    rating: 4.9,
    reviews: 204,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    description: 'Immersive sound, noise reduction, and all-day battery life.',
    badge: 'Popular',
    colors: ['#111827', '#8b5cf6', '#ef4444']
  },
  {
    id: 4,
    name: 'Aero Smartwatch',
    category: 'Wearables',
    price: 299,
    rating: 4.7,
    reviews: 172,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    description: 'Track workouts, heart rate, and notifications in a sleek premium design.',
    colors: ['#0f172a', '#cbd5e1', '#a855f7']
  },
  {
    id: 5,
    name: 'Cloud Knit',
    category: 'Apparel',
    price: 120,
    rating: 4.5,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Premium knitwear for elevated comfort and a clean everyday fit.',
    badge: 'Limited',
    colors: ['#e5e7eb', '#f472b6', '#1d4ed8']
  },
  {
    id: 6,
    name: 'Flex Bottle',
    category: 'Lifestyle',
    price: 39,
    rating: 4.4,
    reviews: 57,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    description: 'Insulated bottle with a leak-proof lid for hydration on the go.',
    colors: ['#f8fafc', '#22c55e', '#0f172a']
  }
];
