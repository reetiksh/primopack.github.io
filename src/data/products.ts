import strappingMachine from '@/assets/strapping-machine.jpg';
import wrappingMachine from '@/assets/wrapping-machine.jpg';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  rating?: number;
  features: string[];
  specs?: Record<string, string>;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'AUTO-STRAP 5000',
    category: 'Automatic Strapping Machines',
    image: strappingMachine,
    price: 'Contact for pricing',
    rating: 4.9,
    features: ['800+ straps/hour', 'PET & PP compatible', 'Touch screen control', 'Auto tension adjustment'],
    specs: {
      'Speed': '800 straps/hour',
      'Strap Width': '9-16mm',
      'Power': '220V/50Hz',
      'Weight': '180kg',
    },
    description:
      'High-speed automatic strapping machine with advanced control systems for maximum efficiency and reliability.',
  },
  {
    id: 2,
    name: 'SEMI-STRAP 300',
    category: 'Semi-automatic Strapping Machines',
    image: strappingMachine,
    price: 'Contact for pricing',
    rating: 4.7,
    features: ['Manual feed operation', 'Compact design', 'Easy maintenance', 'Cost-effective'],
    specs: {
      'Speed': '300 straps/hour',
      'Strap Width': '12-16mm',
      'Power': '220V/50Hz',
      'Weight': '85kg',
    },
    description:
      'Reliable semi-automatic strapping solution for medium-volume operations with user-friendly design.',
  },
  {
    id: 3,
    name: 'WRAP-PRO 2000',
    category: 'Wrapping Machines',
    image: wrappingMachine,
    price: 'Contact for pricing',
    rating: 4.8,
    features: ['Variable speed control', 'Film break detection', 'Energy efficient', 'Pre-stretch system'],
    specs: {
      'Wrapping Speed': '0-12 RPM',
      'Film Width': '500mm',
      'Power': '380V/50Hz',
      'Weight': '320kg',
    },
    description:
      'Advanced pallet wrapping machine with intelligent control systems for secure and efficient packaging.',
  },
  {
    id: 4,
    name: 'PET Strapping Band',
    category: 'PET Straps',
    image: strappingMachine,
    price: 'Contact for pricing',
    rating: 4.6,
    features: ['High tensile strength', 'Weather resistant', 'Recyclable material', 'Various widths'],
    specs: {
      'Tensile Strength': '280kg',
      'Width': '9-32mm',
      'Thickness': '0.5-1.27mm',
      'Length': '1000-2000m/roll',
    },
    description:
      'Premium quality PET strapping bands offering superior strength and reliability for heavy-duty applications.',
  },
  {
    id: 5,
    name: 'Stretch Film Roll',
    category: 'Wrapping Material',
    image: wrappingMachine,
    price: 'Contact for pricing',
    rating: 4.5,
    features: ['High stretch ratio', 'Puncture resistant', 'Clear visibility', 'Multiple thicknesses'],
    specs: {
      'Width': '500mm',
      'Thickness': '17-25 microns',
      'Length': '1500m/roll',
      'Stretch Ratio': '250%',
    },
    description:
      'Professional grade stretch film providing excellent load containment and protection during transport.',
  },
  {
    id: 6,
    name: 'Manual Strapping Tool',
    category: 'Hand Tools',
    image: strappingMachine,
    price: 'Contact for pricing',
    rating: 4.4,
    features: ['Lightweight design', 'Ergonomic handle', 'High durability', 'Easy operation'],
    specs: {
      'Strap Width': '13-19mm',
      'Weight': '2.5kg',
      'Material': 'Steel construction',
      'Warranty': '2 years',
    },
    description:
      'Professional manual strapping tool for precise tensioning and sealing in manual operations.',
  },
];

export const getProductById = (id: number) => products.find(p => p.id === id);
