'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '../ui/card';

interface Category {
  name: string;
  description: string;
  icon: string;
  gradient: string;
  image: string;
}

const FeaturedCategories: React.FC = () => {
  const router = useRouter();

  const categories: Category[] = [
    {
      name: 'Raw Materials',
      description: 'Steel, aluminum, plastics, and chemical compounds',
      icon: '🏭',
      gradient: 'from-green-400/20 to-green-600/20',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&crop=center',
    },
    {
      name: 'Electronic Components',
      description: 'Semiconductors, circuits, PCBs, and assemblies',
      icon: '⚡',
      gradient: 'from-green-500/20 to-green-700/20',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center',
    },
    {
      name: 'Industrial Machinery',
      description: 'Manufacturing equipment, tools, and automation systems',
      icon: '⚙️',
      gradient: 'from-green-400/20 to-green-500/20',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center',
    },
    {
      name: 'Automotive Parts',
      description: 'Engine components, body parts, and electrical systems',
      icon: '🚗',
      gradient: 'from-green-600/20 to-green-400/20',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&crop=center',
    },
    {
      name: 'Textiles & Fabrics',
      description: 'Industrial fabrics, yarns, and textile materials',
      icon: '🧵',
      gradient: 'from-green-500/20 to-green-600/20',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=center',
    },
    {
      name: 'Packaging Materials',
      description: 'Containers, wrapping materials, and packaging solutions',
      icon: '📦',
      gradient: 'from-green-400/20 to-green-700/20',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-green-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 border border-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border border-green-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400/10 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-green-400/10 rounded-full"></div>
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-green-400">Categories</span>
          </h2>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Explore our most popular inventory categories and discover quality excess materials from trusted manufacturers worldwide.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <CardContent className="relative p-8 h-full flex flex-col">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                      {category.icon}
                    </span>
                  </div>
                </div>

                <div className="flex-grow text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-100 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-green-100 transition-colors duration-300 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center text-green-400 text-sm font-semibold">
                    <span>Explore Category</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-green-100 mb-6">
            Don't see your category? We have thousands more inventory types available.
          </p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
            onClick={() => router.push('/login')}
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
