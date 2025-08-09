// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Button } from '../../../components/ui/button';
// import { Label } from '../../../components/ui/label';
// import { Input } from '../../../components/ui/input';
// import { User, Building2, Mail, Phone, MapPin } from 'lucide-react';
// import BuyerSidebar from "../../../components/BuyerSidebar";

// // Type definitions
// interface BuyerProfile {
//   fullName: string;
//   email: string;
//   phone: string;
//   companyName: string;
//   companyAddress: string;
//   businessType: string;
//   kycVerified: boolean;
// }

// // ✅ Removed the problematic interface with required props
// const BuyerProfilePage = () => {
//   const router = useRouter();

//   // Buyer profile data with proper typing
//   const buyerProfile: BuyerProfile = {
//     fullName: 'Priya Singh',
//     email: 'priya.singh@example.com',
//     phone: '+91 98765 12345',
//     companyName: 'TechSolutions India Pvt Ltd',
//     companyAddress: '101, Cyber City, Phase 8, Mohali, Punjab',
//     businessType: 'Electronics Manufacturer',
//     kycVerified: true,
//   };

//   const handleViewKycStatus = (): void => {
//     router.push('/buyer/kyc-status');
//   };

//   const handleEditProfile = (): void => {
//     router.push('/buyer/profile-setup');
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <BuyerSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <User className="h-6 w-6 mr-2 text-green-400" /> My Profile
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 View and manage your personal and company information.
//               </CardDescription>
//             </CardHeader>

//             <CardContent className="p-6 space-y-8">
//               {/* Personal Information */}
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
//                   <User className="h-5 w-5 mr-2" /> Personal Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="fullName" className="text-green-200 font-medium">Full Name</Label>
//                     <Input 
//                       id="fullName" 
//                       value={buyerProfile.fullName} 
//                       disabled 
//                       className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email" className="text-green-200 font-medium">Email Address</Label>
//                     <Input 
//                       id="email" 
//                       value={buyerProfile.email} 
//                       disabled 
//                       className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="phone" className="text-green-200 font-medium">Phone Number</Label>
//                   <Input 
//                     id="phone" 
//                     value={buyerProfile.phone} 
//                     disabled 
//                     className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                   />
//                 </div>
//               </div>

//               {/* Company Information */}
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
//                   <Building2 className="h-5 w-5 mr-2" /> Company Details
//                 </h3>
//                 <div className="space-y-2">
//                   <Label htmlFor="companyName" className="text-green-200 font-medium">Company Name</Label>
//                   <Input 
//                     id="companyName" 
//                     value={buyerProfile.companyName} 
//                     disabled 
//                     className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="companyAddress" className="text-green-200 font-medium">Company Address</Label>
//                   <Input 
//                     id="companyAddress" 
//                     value={buyerProfile.companyAddress} 
//                     disabled 
//                     className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="businessType" className="text-green-200 font-medium">Business Type</Label>
//                   <Input 
//                     id="businessType" 
//                     value={buyerProfile.businessType} 
//                     disabled 
//                     className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Label className="text-green-200 font-medium">KYC/KYB Status:</Label>
//                   <span className={`font-semibold ${buyerProfile.kycVerified ? 'text-green-400' : 'text-yellow-400'}`}>
//                     {buyerProfile.kycVerified ? 'Verified' : 'Pending'}
//                   </span>
//                   <Button 
//                     variant="link" 
//                     size="sm" 
//                     onClick={handleViewKycStatus}
//                     className="text-green-400 hover:text-green-300 underline"
//                   >
//                     View KYC Status
//                   </Button>
//                 </div>
//               </div>

//               <Button
//                 className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8"
//                 onClick={handleEditProfile}
//               >
//                 Edit Profile
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerProfilePage;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { User, Building2, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
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

const BuyerProfilePage = () => {
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
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-800 text-base">View and manage your personal and company information.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=PS" alt="Priya Singh" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-gray-800 hidden sm:block">Priya Singh</span>
            </div>
          </div>
        </div>

        {/* KYC Status */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <span><span className="font-semibold text-green-800">KYC Status: Verified</span> - Your account is fully verified and ready for trading</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
            <CardHeader className="pb-4 border-b border-green-500/20">
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <User className="h-6 w-6 mr-2 text-green-500" /> Personal Details
              </CardTitle>
              <CardDescription className="text-gray-700">
                Your personal information and contact details.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-900 font-medium flex items-center">
                  <User className="h-4 w-4 mr-2 text-green-500" />
                  Full Name
                </Label>
                <Input 
                  id="fullName" 
                  value={buyerProfile.fullName} 
                  disabled 
                  className="bg-white border-green-500/30 text-gray-700 rounded-md cursor-not-allowed" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 font-medium flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-green-500" />
                  Email Address
                </Label>
                <Input 
                  id="email" 
                  value={buyerProfile.email} 
                  disabled 
                  className="bg-white border-green-500/30 text-gray-700 rounded-md cursor-not-allowed" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-900 font-medium flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-500" />
                  Phone Number
                </Label>
                <Input 
                  id="phone" 
                  value={buyerProfile.phone} 
                  disabled 
                  className="bg-white border-green-500/30 text-gray-700 rounded-md cursor-not-allowed" 
                />
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
            <CardHeader className="pb-4 border-b border-green-500/20">
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-green-500" /> Company Details
              </CardTitle>
              <CardDescription className="text-gray-700">
                Your business and company information.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-gray-900 font-medium flex items-center">
                  <Building2 className="h-4 w-4 mr-2 text-green-500" />
                  Company Name
                </Label>
                <Input 
                  id="companyName" 
                  value={buyerProfile.companyName} 
                  disabled 
                  className="bg-white border-green-500/30 text-gray-700 rounded-md cursor-not-allowed" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyAddress" className="text-gray-900 font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-500" />
                  Company Address
                </Label>
                <Input 
                  id="companyAddress" 
                  value={buyerProfile.companyAddress} 
                  disabled 
                  className="bg-white border-green-500/30 text-gray-700 rounded-md cursor-not-allowed" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-gray-900 font-medium">Business Type</Label>
                <Input 
                  id="businessType" 
                  value={buyerProfile.businessType} 
                  disabled 
                  className="bg-white border-green-500/30 text-gray-700 rounded-md cursor-not-allowed" 
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KYC Status and Actions */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
              Account Verification & Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-green-500/20">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900">KYC/KYB Status</p>
                  <p className="text-sm text-gray-700">Your verification is complete</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-900/30 text-green-900 border border-green-500/30">
                  Verified
                </span>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={handleViewKycStatus}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  View Details
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors"
                onClick={handleEditProfile}
              >
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-green-500/30 text-gray-900 hover:bg-green-50 rounded-md py-3 text-base font-semibold transition-colors"
                onClick={handleViewKycStatus}
              >
                View KYC Status
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerProfilePage;