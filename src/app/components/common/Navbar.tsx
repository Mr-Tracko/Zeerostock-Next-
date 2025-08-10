'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Type definitions


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (): void => {
    router.push('/pages/public/Login');
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo S
        ection */}
        <div className="flex-shrink-0">
          <button className="flex items-center space-x-3">
            {/* Logo image from public folder */}
            <img src="/logo3.png" alt="Logo" className="w-42 h-10 object-contain" onClick={() => { router.push('/') }} />
            <span className="text-white font-bold text-xl">ZeeroStock</span>
          </button>
        </div>

        {/* Navigation Links (Hidden on small screens, shown on medium and up) */}
        <div className="hidden md:flex space-x-4">
          <button className="relative no-underline text-gray-900 hover:text-green-700 text-sm font-medium transition-colors duration-200 px-3 py-2 group" onClick={() => { router.push('/') }}>
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </button>
          <button className="relative no-underline text-gray-900 hover:text-green-700 text-sm font-medium transition-colors duration-200 px-3 py-2 group" onClick={() => { router.push('/pages/public/HowItWorks') }}>
            How it works
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </button>
          <button
            className="relative no-underline text-gray-900 hover:text-green-700 text-sm font-medium transition-colors duration-200 px-3 py-2 group" onClick={handleClick}
          >
            For Sellers
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </button>
          <button className="relative no-underline text-gray-900 hover:text-green-700 text-sm font-medium transition-colors duration-200 px-3 py-2 group" onClick={handleClick}>
            For Buyers
           <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </button>
          <button className="relative no-underline text-gray-900 hover:text-green-700 text-sm font-medium transition-colors duration-200 px-3 py-2 group" onClick={() => { router.push('/pages/public/RoiCalculator') }}>
            ROI Calculator
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </button>
          <button className="relative no-underline text-gray-900 hover:text-green-700 text-sm font-medium transition-colors duration-200 px-3 py-2 group" onClick={() => { router.push('/pages/public/Support') }}>
            Support
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </button>
        </div>

        {/* Auth Buttons (Hidden on small screens, shown on medium and up) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-green-600 transition-colors duration-200"
          >
            Login
          </button>
          <button

            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-green-600 transition-colors duration-200" onClick={() => { router.push('/pages/public/Register') }}
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button (Shown on small screens, hidden on medium and up) */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Heroicon menu icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, will be shown with state management) */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/') }}>
            Home
          </button>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/pages/public/HowItWorks`') }}>
            How it works
          </button>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/pages/public/Login') }}>
            For Sellers
          </button>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/pages/public/Login') }}>
            For Buyers
          </button>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/pages/public/RoiCalculator') }}>
            Roi Calculator
          </button>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/pages/public/Support') }}>
            Support
          </button>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-300 hover:bg-blue-700" onClick={() => { router.push('/pages/public/Login') }}>
            Login
          </button>
          <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-green-500 hover:bg-green-600 mt-2" onClick={() => { router.push('/pages/public/Register') }}>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;