// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Linkedin, Twitter } from 'lucide-react';

// const Footer = () => {
//   const router = useRouter();

//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info / Logo */}
//           <div className="space-y-4">
//             <a href="/" className="flex items-center space-x-2">
//               <span className="text-blue-400 font-bold text-2xl">ZeeroStock</span>
//             </a>
//             <p className="text-sm">
//               Your trusted B2B marketplace for excess manufacturing inventory.
//               Unlock capital and accelerate sustainability.
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
//                 <Twitter className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a onClick={() => router.push('/how-it-works')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">How It Works</a></li>
//               <li><a onClick={() => router.push('/for-sellers')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">For Sellers</a></li>
//               <li><a onClick={() => router.push('/for-buyers')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">For Buyers</a></li>
//               <li><a onClick={() => router.push('/support')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">Support</a></li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
//             <ul className="space-y-2">
//               <li><a onClick={() => router.push('/category/raw-materials')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">Raw Materials</a></li>
//               <li><a onClick={() => router.push('/category/components')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">Components</a></li>
//               <li><a onClick={() => router.push('/category/machinery')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">Machinery</a></li>
//               <li><a onClick={() => router.push('/search-inventory')} className="cursor-pointer text-gray-300 hover:text-white text-sm transition-colors duration-200">All Categories</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
//             <address className="not-italic space-y-2 text-sm">
//               <p>123 ZeeroStock Lane,</p>
//               <p>Industrial Area, Chandigarh, India</p>
//               <p>Email: <a href="mailto:info@zeerostock.com" className="text-gray-300 hover:text-white transition-colors duration-200">info@zeerostock.com</a></p>
//               <p>Phone: <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors duration-200">+91 12345 67890</a></p>
//             </address>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} ZeeroStock. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

// Type definitions
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  const handleNavigation = (path: string): void => {
    router.push(path);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info / Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-blue-400 font-bold text-2xl">ZeeroStock</span>
              {/* If you have the actual logo image, you'd use it here: */}
              {/* <img src="/path/to/your/logo-white.svg" alt="ZeeroStock Logo" className="h-8 w-auto" /> */}
            </Link>
            <p className="text-sm">
              Your trusted B2B marketplace for excess manufacturing inventory.
              Unlock capital and accelerate sustainability.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons using Lucide React */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" /> {/* Lucide LinkedIn Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-6 w-6" /> {/* Lucide Twitter Icon */}
              </a>
              {/* You can add more social media icons here, e.g., <Facebook className="h-6 w-6" /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/how-it-works" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/how-it-works')}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-sellers" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/for-sellers')}
                >
                  For Sellers
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-buyers" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/for-buyers')}
                >
                  For Buyers
                </Link>
              </li>
              <li>
                <Link 
                  href="/support" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/support')}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/category/raw-materials" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/category/raw-materials')}
                >
                  Raw Materials
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/components" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/category/components')}
                >
                  Components
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/machinery" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/category/machinery')}
                >
                  Machinery
                </Link>
              </li>
              <li>
                <Link 
                  href="/search-inventory" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  onClick={() => handleNavigation('/search-inventory')}
                >
                  All Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>123 ZeeroStock Lane,</p>
              <p>Industrial Area, Chandigarh, India</p>
              <p>
                Email: {' '}
                <a 
                  href="mailto:info@zeerostock.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@zeerostock.com
                </a>
              </p>
              <p>
                Phone: {' '}
                <a 
                  href="tel:+911234567890" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 12345 67890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ZeeroStock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;