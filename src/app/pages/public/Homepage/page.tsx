// app/buyer/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from '../../../components/common/HeroSection';
import FeaturedCategories from '../../../components/common/FeaturedSignals';
import NewArrivals from '../../../components/common/NewArrivals';
import Testimonials from '../../../components/common/Testimonials';

type TrustedCompany = {
  name: string;
  industry: string;
  logo: string;
};

const HomePage: React.FC = () => {
  const router = useRouter();

  const trustedCompanies: TrustedCompany[] = [
    { name: 'Tata Steel', industry: 'Steel & Metals', logo: 'TS' },
    { name: 'Mahindra Group', industry: 'Automotive', logo: 'MG' },
    { name: 'Reliance Industries', industry: 'Petrochemicals', logo: 'RI' },
    { name: 'Bajaj Auto', industry: 'Manufacturing', logo: 'BA' },
    { name: 'Larsen & Toubro', industry: 'Engineering', logo: 'L&T' },
    { name: 'Infosys', industry: 'Technology', logo: 'IN' },
    { name: 'Godrej Group', industry: 'Consumer Goods', logo: 'GG' },
    { name: 'Asian Paints', industry: 'Chemicals', logo: 'AP' },
  ];
  
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
      <Testimonials />

      <section className="min-h-screen bg-gradient-to-r from-green-100 to-white py-20 font-inter overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-16 left-16 w-36 h-36 border border-green-400/20 rounded-full" />
          <div className="absolute top-1/4 right-20 w-20 h-20 border border-green-400/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 border border-green-400/20 rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-green-400/10 rounded-full" />
          <div className="absolute bottom-16 right-16 w-16 h-16 bg-green-400/10 rounded-full" />
          <div className="absolute top-1/3 left-1/2 w-24 h-24 border border-green-400/15 rounded-full" />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-4">
              Trusted by <span className="text-green-500">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Join thousands of manufacturers and procurement teams who trust ZeeroStock for their inventory optimization needs.
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '500+', label: 'Active Partners' },
              { value: '₹100M+', label: 'Inventory Moved' },
              { value: '15+', label: 'Industries Served' },
              { value: '99%', label: 'Success Rate' },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 p-6 rounded-xl border border-green-500/20 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-3xl font-bold text-green-500 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-700">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
            {trustedCompanies.map((company, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 p-6 rounded-xl border border-green-500/20 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 cursor-pointer"
              >
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-800 font-bold text-sm group-hover:text-green-700 transition-colors duration-300">
                      {company.logo}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-gray-800 font-semibold text-sm group-hover:text-green-600 transition-colors duration-300 mb-1">
                      {company.name}
                    </h3>
                    <p className="text-xs text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      {company.industry}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5 rounded-xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-800 mb-6 text-lg">
              Ready to join most trusted inventory marketplace in India?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 text-green-400 hover:bg-green-600/10 bg-transparent hover:border-green-400/50"
                onClick={() => router.push('/pages/public/Login')}
              >
                Become a Partner
              </button>
              <button
                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 text-green-400 hover:bg-green-600/10 bg-transparent hover:border-green-400/50"
                onClick={() => router.push('/pages/public/Login')}
              >
                View Case Studies
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
            {[
              { text: 'ISO Certified', iconPath: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
              { text: 'Secure Platform', iconPath: 'M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' },
              { text: 'Verified Partners', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2 bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 px-4 py-2 rounded-full border border-green-500/20">
                <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d={badge.iconPath} />
                  </svg>
                </div>
                <span className="text-sm text-gray-800">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
