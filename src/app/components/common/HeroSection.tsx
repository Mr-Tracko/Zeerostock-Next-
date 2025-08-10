'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Type definitions
interface HeroSectionProps {
  id?: string;     
  name?: string;    
  email?: string; 
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const handleNavigation = (path: string): void => {
    console.log(`Navigate to: ${path}`);
    router.push(path);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (): void => {
    handleNavigation('/search-results');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <section className="h-screen flex items-center relative bg-gradient-to-r from-green-100 to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">

          {/* Left Content */}
          <div className="text-left -mt-8 lg:-mt-12">
            <h1 className="no-underline decoration-none text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 leading-tight mb-7 ml-10 mt-8">
              Unlock Capital, Accelerate <br className="hidden sm:inline" />
              <span className="no-underline text-green-400">Sustainability</span>
            </h1>

            <p className="no-underline decoration-none mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mb-10 ml-10">
              Liquidate & Procure Excess Manufacturing Inventory with Ease.
              Connect with a Global Network of Manufacturers and Buyers.
            </p>

            <div className="no-underline flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 ml-10">
              <button
                className="decoration-none w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-800 text-white border-0"
                onClick={() => router.push('/pages/public/Login')}
              >
                Sell Excess Inventory
              </button>
              <button
                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 text-green-400 hover:bg-green-600/10 bg-transparent hover:border-green-400/50"
                onClick={() => router.push('/pages/public/Login')}
              >
                Browse Inventory
              </button>
            </div>
          </div>

          {/* Right Content - Illustration (Original Green + Gray Styling) */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-full opacity-80 shadow-lg shadow-green-500/10"></div>
                  <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-gray-600 to-gray-500 rounded-full shadow-lg shadow-green-500/20"></div>
                </div>

                <div className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                  <span className="text-white font-bold text-lg">$</span>
                </div>

                <div className="absolute top-12 -right-12 w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                  <span className="text-white font-bold text-sm">€</span>
                </div>

                <div className="absolute -bottom-4 -right-16 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                  <span className="text-white font-bold text-lg">₹</span>
                </div>

                <div className="absolute top-1/3 -left-12 w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                  <span className="text-white font-bold text-xs">£</span>
                </div>

                <div className="absolute top-2/3 right-8 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                  <span className="text-white font-bold text-xs">¥</span>
                </div>

                <div className="absolute top-16 right-4 w-16 h-12 opacity-80">
                  <div className="flex items-end justify-between h-full">
                    <div className="w-2 bg-green-400 rounded-t shadow-sm shadow-green-500/20" style={{ height: '60%' }}></div>
                    <div className="w-2 bg-green-400 rounded-t shadow-sm shadow-green-500/20" style={{ height: '80%' }}></div>
                    <div className="w-2 bg-green-400 rounded-t shadow-sm shadow-green-500/20" style={{ height: '100%' }}></div>
                    <div className="w-2 bg-green-400 rounded-t shadow-sm shadow-green-500/20" style={{ height: '40%' }}></div>
                  </div>
                </div>

                <div className="absolute top-8 left-4 w-8 h-8 bg-gray-700/60 rounded-full flex items-center justify-center border border-green-400/30">
                  <div className="w-4 h-4 border-2 border-green-400 rounded-full"></div>
                </div>

                <div className="absolute bottom-12 left-8 w-6 h-6 bg-green-400/20 rounded-full border border-green-400/50"></div>
              </div>
            </div>

            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-green-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-green-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mr-1">
          <div className="bg-white border border-gray-300 shadow rounded-full flex items-center">
            <input
              type="text"
              placeholder="Type Part Number, Category, or Keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              className="flex-grow border-none outline-none text-gray-800 placeholder:text-gray-400 bg-transparent rounded-l-full text-sm px-3 py-2"
              aria-label="Search inventory"
            />
            <button
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full transition-all duration-200 text-sm font-medium shadow-md shadow-green-500/20"
              aria-label="Search"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;