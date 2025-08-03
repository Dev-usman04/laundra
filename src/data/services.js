import { Droplets, Shirt, Zap } from 'lucide-react';

export const services = [
  {
    id: 'wash',
    name: 'Wash & Fold',
    description: 'Regular washing and folding service',
    basePrice: 3.50,
    icon: Droplets,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    id: 'dry-clean',
    name: 'Dry Clean',
    description: 'Professional dry cleaning service',
    basePrice: 8.00,
    icon: Shirt,
    color: 'bg-gradient-to-br from-emerald-500 to-teal-500'
  },
  {
    id: 'ironing',
    name: 'Ironing',
    description: 'Professional pressing and ironing',
    basePrice: 2.50,
    icon: Zap,
    color: 'bg-gradient-to-br from-orange-500 to-red-500'
  }
];