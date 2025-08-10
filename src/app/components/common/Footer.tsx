'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

// Type definitions
interface FooterProps {
  id?: string;
  name?: string;
  email?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  const handleNavigation = (path: string): void => {
    router.push(path);
  };

  return (
    <footer className="bg-[#003f5c] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info / Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div
                className="bg-white p-1 cursor-pointer hover:shadow-lg transition-all duration-200 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <img
                  src="/logo3.png"
                  alt="ZeeroStock Logo"
                  className="h-20 w-42 object-contain"
                  style={{ borderRadius: '8px' }}
                />
              </div>
              {/* <span className="text-blue-400 font-bold text-2xl">ZeeroStock</span> */}
            </Link>
            <p className="text-sm">
              Your trusted B2B marketplace for excess manufacturing inventory.
              Unlock capital and accelerate sustainability.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons with actual links */}
              <a
                href="https://www.linkedin.com/company/zeerostock-ventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/zeerostock_ventures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/zeerostock?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  onClick={() => router.push('/pages/public/HowItWorks')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white cursor-pointer text-sm transition-colors duration-200"
                  onClick={() => router.push('/pages/public/Login')}
                >
                  For Sellers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white cursor-pointer text-sm transition-colors duration-200"
                  onClick={() => router.push('/pages/public/Login')}
                >
                  For Buyers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white cursor-pointer text-sm transition-colors duration-200"
                  onClick={() => router.push('/pages/public/RoiCalculator')}
                >
                  Roi Calculator
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white cursor-pointer text-sm transition-colors duration-200"
                  onClick={() => router.push('/pages/public/Support')}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"

                >
                  Raw Materials
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"

                >
                  Components
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"

                >
                  Machinery
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"

                >
                  All Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>Mahatma Nagar</p>
              <p>Nashik , 422007</p>
              <p>
                Email: {' '}
                <a
                  href="mailto:info@zeerostock.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  contact@zeerostock.com
                </a>
              </p>
              <p>
                Phone: {' '}
                <a
                  href="tel:+911234567890"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 91758 93763
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 font-bold text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ZeeroStock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;