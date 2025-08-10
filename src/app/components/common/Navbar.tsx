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
            className="inline-flex items-center justify-center p-3 rounded-md text-green-400 bg-gray-700 hover:text-green-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 border border-white/20 backdrop-blur-sm"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Heroicon menu icon */}
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, will be shown with state management) */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {/* <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-green-500" onClick={() => { router.push('/') }}>
            Home
          </button> */}
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform"
            onClick={() => { router.push('/') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="relative">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform"
            onClick={() => { router.push('/pages/public/HowItWorks') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="relative">
              How it works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform"
            onClick={() => { router.push('/pages/public/Login') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="relative">
              For Sellers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform"
            onClick={() => { router.push('/pages/public/Login') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span className="relative">
              For Buyers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform"
            onClick={() => { router.push('/pages/public/RoiCalculator') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="relative">
              Roi Calculator
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform"
            onClick={() => { router.push('/pages/public/Support') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
            </svg>
            <span className="relative">
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 hover:bg-gray-700 mt-2" onClick={() => { router.push('/pages/public/Login') }}>
            Login
          </button> */}
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform mt-2"
            onClick={() => { router.push('/pages/public/Login') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span className="relative">
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 hover:bg-gray-700 mt-2" onClick={() => { router.push('/pages/public/Register') }}>
            Register
          </button> */}
          <button
            className="group relative w-full flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 transform mt-2"
            onClick={() => { router.push('/pages/public/Register') }}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span className="relative">
              Register
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;