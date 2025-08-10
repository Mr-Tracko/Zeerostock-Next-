'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type MenuItem = {
  label: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'How it works', path: '/pages/public/HowItWorks' },
  { label: 'For Sellers', path: '/pages/public/Login' },
  { label: 'For Buyers', path: '/pages/public/Login' },
  { label: 'ROI Calculator', path: '/pages/public/RoiCalculator' },
  { label: 'Support', path: '/pages/public/Support' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-lg py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => router.push('/')}>
          <img src="/logo3.png" alt="Logo" className="w-42 h-10 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="relative text-gray-900 hover:text-green-700 text-sm font-medium px-3 py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => router.push('/pages/public/Login')}
            className="px-6 py-2 rounded-md text-white bg-gray-900 hover:bg-green-600 transition"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/pages/public/Register')}
            className="px-6 py-2 rounded-md text-white bg-gray-900 hover:bg-green-600 transition"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-3 rounded-md text-green-400 bg-gray-700 hover:text-green-300"
          >
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-800 hover:bg-green-500 hover:text-white transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => { router.push('/pages/public/Login'); setIsMobileMenuOpen(false); }}
                className="flex-1 px-4 py-2 rounded-md text-white bg-gray-900 hover:bg-green-600"
              >
                Login
              </button>
              <button
                onClick={() => { router.push('/pages/public/Register'); setIsMobileMenuOpen(false); }}
                className="flex-1 px-4 py-2 rounded-md text-white bg-gray-900 hover:bg-green-600"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;