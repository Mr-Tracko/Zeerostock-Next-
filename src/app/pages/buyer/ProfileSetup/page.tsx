'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { User, Building2, Mail, Phone, MapPin } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
interface BuyerProfile {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyAddress: string;
  businessType: string;
  kycVerified: boolean;
}

interface BuyerProfilePageProps {}

const BuyerProfilePage: React.FC<BuyerProfilePageProps> = () => {
  const router = useRouter();

  // Buyer profile data with proper typing
  const buyerProfile: BuyerProfile = {
    fullName: 'Priya Singh',
    email: 'priya.singh@example.com',
    phone: '+91 98765 12345',
    companyName: 'TechSolutions India Pvt Ltd',
    companyAddress: '101, Cyber City, Phase 8, Mohali, Punjab',
    businessType: 'Electronics Manufacturer',
    kycVerified: true,
  };

  const handleViewKycStatus = (): void => {
    router.push('/buyer/kyc-status');
  };

  const handleEditProfile = (): void => {
    router.push('/buyer/profile-setup');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <User className="h-6 w-6 mr-2 text-green-400" /> My Profile
              </CardTitle>
              <CardDescription className="text-green-100">
                View and manage your personal and company information.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
                  <User className="h-5 w-5 mr-2" /> Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-green-200 font-medium">Full Name</Label>
                    <Input 
                      id="fullName" 
                      value={buyerProfile.fullName} 
                      disabled 
                      className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-green-200 font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      value={buyerProfile.email} 
                      disabled 
                      className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-green-200 font-medium">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={buyerProfile.phone} 
                    disabled 
                    className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
                  <Building2 className="h-5 w-5 mr-2" /> Company Details
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-green-200 font-medium">Company Name</Label>
                  <Input 
                    id="companyName" 
                    value={buyerProfile.companyName} 
                    disabled 
                    className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyAddress" className="text-green-200 font-medium">Company Address</Label>
                  <Input 
                    id="companyAddress" 
                    value={buyerProfile.companyAddress} 
                    disabled 
                    className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-green-200 font-medium">Business Type</Label>
                  <Input 
                    id="businessType" 
                    value={buyerProfile.businessType} 
                    disabled 
                    className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Label className="text-green-200 font-medium">KYC/KYB Status:</Label>
                  <span className={`font-semibold ${buyerProfile.kycVerified ? 'text-green-400' : 'text-yellow-400'}`}>
                    {buyerProfile.kycVerified ? 'Verified' : 'Pending'}
                  </span>
                  <Button 
                    variant="link" 
                    size="sm" 
                    onClick={handleViewKycStatus}
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    View KYC Status
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8"
                onClick={handleEditProfile}
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfilePage;