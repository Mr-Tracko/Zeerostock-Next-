'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '../ui/card'; // Import Shadcn Card components

// Type definitions
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  savings: string;
  industry: string;
}

interface StatItem {
  value: string;
  label: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "ZeeroStock has been instrumental in helping us liquidate our excess inventory efficiently. A truly transparent and trustworthy marketplace!",
      author: "Priya Sharma",
      title: "CEO, InnovateTech Solutions India",
      company: "InnovateTech Solutions",
      rating: 5,
      savings: "₹2.5M saved",
      industry: "Technology"
    },
    {
      id: 2,
      quote: "We found exactly what we needed at competitive prices. Global reach of the Platform helped us source materials we could not find locally.",
      author: "Rahul Verma",
      title: "Procurement Head, Bharat Manufacturing Co.",
      company: "Bharat Manufacturing",
      rating: 5,
      savings: "₹1.8M saved",
      industry: "Manufacturing"
    },
    {
      id: 3,
      quote: "The platform transformed our inventory management. Discovering new buyers has never been easier, and the process is completely seamless.",
      author: "Anjali Singh",
      title: "Operations Director, Shakti Industries",
      company: "Shakti Industries",
      rating: 5,
      savings: "₹3.2M saved",
      industry: "Industrial"
    },
    {
      id: 4,
      quote: "Outstanding service and incredible cost savings. ZeeroStock connected us with premium suppliers we never would have found otherwise.",
      author: "Vikram Patel",
      title: "Supply Chain Manager, Gujarat Steel Works",
      company: "Gujarat Steel Works",
      rating: 5,
      savings: "₹4.1M saved",
      industry: "Steel & Metals"
    },
    {
      id: 5,
      quote: "The sustainability aspect is what drew us in, but the cost savings kept us here. Excellent platform for responsible business practices.",
      author: "Meera Krishnan",
      title: "Sustainability Officer, EcoTech Industries",
      company: "EcoTech Industries",
      rating: 5,
      savings: "₹1.4M saved",
      industry: "Green Tech"
    },
    {
      id: 6,
      quote: "Fast, reliable, and transparent. ZeeroStock has become an integral part of our procurement strategy and inventory optimization.",
      author: "Arjun Reddy",
      title: "COO, Hyderabad Auto Components",
      company: "Hyderabad Auto Components",
      rating: 5,
      savings: "₹2.9M saved",
      industry: "Automotive"
    },
  ];

  const stats: StatItem[] = [
    { value: "₹50M+", label: "Total Savings" },
    { value: "1000+", label: "Happy Clients" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" }
  ];

  const router = useRouter();

  const handleGetStarted = (): void => {
    router.push('/pages/public/Login');
  };

  const handleReadReviews = (): void => {
    router.push('/pages/public/Login');
  };

  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 w-40 h-40 border border-green-400/20 rounded-full"></div>
        <div className="absolute top-1/4 right-16 w-24 h-24 border border-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-green-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-400/10 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-28 h-28 border border-green-400/15 rounded-full"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-4" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            What Our <span className="text-green-400">Partners</span> Say
          </h2>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Trusted by leading manufacturers and buyers across India. Join thousands of satisfied customers who have transformed their inventory management.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50">
              <div className="text-2xl font-bold text-green-400">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <Card 
              key={testimonial.id} 
              className="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 flex flex-col justify-between"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>

              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Section */}
                <div className="flex-grow mb-6">
                  {/* Quote Icon */}
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center mb-4 border border-green-400/30">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  <p className="text-lg text-gray-200 italic mb-4 leading-relaxed group-hover:text-green-100 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_: undefined, i: number) => (
                      <svg key={i} className="w-4 h-4 text-green-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex items-center mb-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full flex items-center justify-center mr-4 border border-green-400/40">
                      <span className="text-white font-bold text-sm">
                        {getInitials(testimonial.author)}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-300 group-hover:text-green-200 transition-colors duration-300">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Company & Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                      <span className="text-xs text-green-400 font-semibold">
                        {testimonial.savings}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>

              {/* Side glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-green-100 mb-6">
            Ready to join thousands of successful businesses? Start optimizing your inventory today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
              onClick={handleGetStarted}
              type="button"
            >
              Get Started Today
            </button>
            <button 
              className="px-8 py-3 border-2 border-green-400/30 text-green-400 hover:bg-green-400/10 bg-transparent hover:border-green-400/50 font-semibold rounded-lg transition-all duration-300"
              onClick={handleReadReviews}
              type="button"
            >
              Read All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;