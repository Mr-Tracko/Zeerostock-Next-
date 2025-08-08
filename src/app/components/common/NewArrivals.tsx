'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'; // Import Shadcn Card components
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Type definitions
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  category: string;
  stock: string;
  urgent: boolean;
  image: string;
}

interface NewArrivalsProps {}

const NewArrivals: React.FC<NewArrivalsProps> = () => {
  const newProducts: Product[] = [
    {
      id: 'prod-001',
      name: 'Precision Machined Parts',
      description: 'High-quality CNC components for industrial applications',
      price: '₹1,250',
      originalPrice: '₹1,800',
      discount: '30%',
      category: 'Components',
      stock: 'In Stock',
      urgent: false,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'prod-002',
      name: 'Circuit Boards',
      description: 'Advanced PCB assemblies for automation systems',
      price: '₹8,500',
      originalPrice: '₹12,000',
      discount: '29%',
      category: 'Electronics',
      stock: 'Limited Stock',
      urgent: true,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'prod-003',
      name: 'Industrial Tools',
      description: 'Professional grade cutting tools for manufacturing',
      price: '₹22,000',
      originalPrice: '₹28,500',
      discount: '23%',
      category: 'Machinery',
      stock: 'In Stock',
      urgent: false,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'prod-004',
      name: 'Packaging Materials',
      description: 'Eco-friendly industrial packaging solutions',
      price: '₹3,500',
      originalPrice: '₹4,200',
      discount: '17%',
      category: 'Materials',
      stock: 'In Stock',
      urgent: false,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'prod-005',
      name: 'Steel Fabrication Parts',
      description: 'Custom steel components and structural elements',
      price: '₹15,500',
      originalPrice: '₹19,000',
      discount: '18%',
      category: 'Raw Materials',
      stock: 'In Stock',
      urgent: false,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'prod-006',
      name: 'Automotive Components',
      description: 'OEM quality automotive parts and assemblies',
      price: '₹6,750',
      originalPrice: '₹9,500',
      discount: '29%',
      category: 'Automotive',
      stock: 'Limited Stock',
      urgent: true,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&crop=center',
    },
  ];

  const router = useRouter();

  const handleViewAllClick = (): void => {
    router.push('/login');
  };

  const handlePriceAlertsClick = (): void => {
    router.push('/login');
  };

  return (
    <section className="relative bg-gradient-to-r from-green-100 to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-16 left-16 w-36 h-36 border border-green-400/20 rounded-full"></div>
        <div className="absolute top-1/4 right-20 w-20 h-20 border border-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 border border-green-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-green-400/10 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-green-400/10 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 border border-green-400/15 rounded-full"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-4" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient-to-r from-gray-900 to-gray-800 mb-4">
            New <span className="text-green-400">Arrivals</span>
          </h2>
          <p className="text-lg text-gradient-to-r from-gray-900 to-gray-800 max-w-3xl mx-auto">
            Discover the latest excess inventory additions from leading manufacturers. Premium quality at unbeatable prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product: Product) => (
            <Card 
              key={product.id} 
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
            >
              {/* Urgent Badge */}
              {product.urgent && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                  Limited Time
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                {product.discount} OFF
              </div>

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={false}
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="p-4 pb-2">
                {/* Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    product.stock === 'Limited Stock' 
                      ? 'text-red-400 bg-red-400/10' 
                      : 'text-green-400 bg-green-400/10'
                  }`}>
                    {product.stock}
                  </span>
                </div>

                <CardTitle className="text-lg font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-300 group-hover:text-green-100 transition-colors duration-300 mt-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4 pb-4">
                {/* Pricing */}
                <div className="flex items-center space-x-2 mb-3">
                  <p className="text-xl font-bold text-green-400">{product.price}</p>
                  <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-green-600/80 to-green-500/80 hover:from-green-600 hover:to-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-lg shadow-green-500/20">
                  View Details
                </button>
              </CardContent>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Side Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gradient-to-r from-gray-900 to-gray-800 mb-6">
            New inventory added daily. Be the first to discover premium excess stock.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300" 
              onClick={handleViewAllClick}
            >
              View All New Arrivals
            </button>
            <button 
              className="px-8 py-3 border-2 border-green-400/30 text-green-400 hover:bg-green-400/10 bg-transparent hover:border-green-400/50 font-semibold rounded-lg transition-all duration-300" 
              onClick={handlePriceAlertsClick}
            >
              Set Price Alerts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;