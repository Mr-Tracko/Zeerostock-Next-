// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { Button } from '../../../components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { User, Building2, Mail, Phone, MapPin, UserCog } from 'lucide-react';
// import SellerSidebar from "../../../components/SellerSidebar";

// // Define TypeScript interfaces
// interface SellerProfile {
//   fullName: string;
//   email: string;
//   phone: string;
//   companyName: string;
//   businessType: string;
//   gstin: string;
//   addressLine1: string;
//   addressLine2: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   logisticsCapability: string;
// }

// const SellerProfileSetupPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy state for form fields (pre-filled for editing scenario)
//   const [profile, setProfile] = useState<SellerProfile>({
//     fullName: 'Ravi Kumar',
//     email: 'ravi.kumar@example.com', // Often not editable via profile setup
//     phone: '+91 99887 76655',
//     companyName: 'Sunrise Manufacturing Pvt Ltd',
//     businessType: 'Textile Mill',
//     gstin: '27ABCDE1234F1Z5',
//     addressLine1: 'Plot No. 45',
//     addressLine2: 'Industrial Area, Phase 1',
//     city: 'Gurgaon',
//     state: 'Haryana',
//     zipCode: '122001',
//     logisticsCapability: 'Pan-India Shipping, Buyer Pickup',
//   });

//   const businessTypes: string[] = [
//     'Electronics Manufacturer', 
//     'Automotive Supplier', 
//     'Textile Mill',
//     'Chemical Producer', 
//     'Machinery & Equipment', 
//     'Packaging Solutions',
//     'Raw Material Supplier', 
//     'Other'
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { id, value } = e.target;
//     setProfile(prevProfile => ({
//       ...prevProfile,
//       [id]: value,
//     }));
//   };

//   const handleSelectChange = (value: string, field: keyof SellerProfile): void => {
//     setProfile(prevProfile => ({
//       ...prevProfile,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log('Saving Seller Profile:', profile);
//     // In a real application, send this data to your backend API
//     alert('Seller profile updated successfully!'); // Replace with Shadcn Toast/Dialog
//     router.push('/seller-dashboard'); // Redirect to dashboard or a seller profile view
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <SellerSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <UserCog className="h-6 w-6 mr-2 text-green-400" /> Setup Your Seller Profile
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Provide your business and contact details to optimize your selling experience.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 {/* Contact Person Details */}
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
//                     <User className="h-5 w-5 mr-2" /> Contact Person Details
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="fullName" className="text-green-200 font-medium">Full Name</Label>
//                       <Input 
//                         id="fullName" 
//                         type="text" 
//                         value={profile.fullName} 
//                         onChange={handleInputChange} 
//                         required 
//                         className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email" className="text-green-200 font-medium">Email Address</Label>
//                       <Input 
//                         id="email" 
//                         type="email" 
//                         value={profile.email} 
//                         disabled 
//                         className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                       />
//                       <p className="text-xs text-gray-400">Email is typically not editable here.</p>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone" className="text-green-200 font-medium">Phone Number</Label>
//                     <Input 
//                       id="phone" 
//                       type="tel" 
//                       value={profile.phone} 
//                       onChange={handleInputChange} 
//                       required 
//                       className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                     />
//                   </div>
//                 </div>

//                 {/* Company Details */}
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
//                     <Building2 className="h-5 w-5 mr-2" /> Company Details
//                   </h3>
//                   <div className="space-y-2">
//                     <Label htmlFor="companyName" className="text-green-200 font-medium">Company Name</Label>
//                     <Input 
//                       id="companyName" 
//                       type="text" 
//                       value={profile.companyName} 
//                       onChange={handleInputChange} 
//                       required 
//                       className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="businessType" className="text-green-200 font-medium">Business Type</Label>
//                     <Select 
//                       value={profile.businessType} 
//                       onValueChange={(value: string) => handleSelectChange(value, 'businessType')}
//                     >
//                       <SelectTrigger 
//                         id="businessType" 
//                         className="bg-gray-700 border-gray-900/30 text-white focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                       >
//                         <SelectValue placeholder="Select your business type" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-gray-700 border-gray-900">
//                         {businessTypes.map((type: string) => (
//                           <SelectItem 
//                             key={type} 
//                             value={type}
//                             className="text-white hover:bg-gray-600 focus:bg-gray-600"
//                           >
//                             {type}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="gstin" className="text-green-200 font-medium">GSTIN</Label>
//                     <Input 
//                       id="gstin" 
//                       type="text" 
//                       value={profile.gstin} 
//                       onChange={handleInputChange} 
//                       placeholder="e.g., 27ABCDE1234F1Z5" 
//                       required 
//                       className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                     />
//                   </div>
//                 </div>

//                 {/* Address Details */}
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold text-green-400 flex items-center border-b border-gray-900/30 pb-2">
//                     <MapPin className="h-5 w-5 mr-2" /> Address Details
//                   </h3>
//                   <div className="space-y-2">
//                     <Label htmlFor="addressLine1" className="text-green-200 font-medium">Address Line 1</Label>
//                     <Input 
//                       id="addressLine1" 
//                       type="text" 
//                       value={profile.addressLine1} 
//                       onChange={handleInputChange} 
//                       placeholder="Street address, P.O. Box" 
//                       required 
//                       className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="addressLine2" className="text-green-200 font-medium">Address Line 2 (Optional)</Label>
//                     <Input 
//                       id="addressLine2" 
//                       type="text" 
//                       value={profile.addressLine2} 
//                       onChange={handleInputChange} 
//                       placeholder="Apartment, suite, unit, building, floor, etc." 
//                       className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="city" className="text-green-200 font-medium">City</Label>
//                       <Input 
//                         id="city" 
//                         type="text" 
//                         value={profile.city} 
//                         onChange={handleInputChange} 
//                         required 
//                         className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="state" className="text-green-200 font-medium">State</Label>
//                       <Input 
//                         id="state" 
//                         type="text" 
//                         value={profile.state} 
//                         onChange={handleInputChange} 
//                         required 
//                         className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="zipCode" className="text-green-200 font-medium">Zip Code</Label>
//                       <Input 
//                         id="zipCode" 
//                         type="text" 
//                         value={profile.zipCode} 
//                         onChange={handleInputChange} 
//                         required 
//                         className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="logisticsCapability" className="text-green-200 font-medium">Logistics Capabilities (Optional)</Label>
//                     <Input 
//                       id="logisticsCapability" 
//                       type="text" 
//                       value={profile.logisticsCapability} 
//                       onChange={handleInputChange} 
//                       placeholder="e.g., Pan-India shipping, Buyer pickup only" 
//                       className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                     />
//                   </div>
//                 </div>

//                 <Button 
//                   type="submit" 
//                   className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8"
//                 >
//                   Save Seller Profile
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerProfileSetupPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { User, Building2, Mail, Phone, MapPin, UserCog, CheckCircle } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// Define TypeScript interfaces
interface SellerProfile {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: string;
  gstin: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  logisticsCapability: string;
}

const SellerProfileSetupPage: React.FC = () => {
  const router = useRouter();

  // Dummy state for form fields (pre-filled for editing scenario)
  const [profile, setProfile] = useState<SellerProfile>({
    fullName: 'Ravi Kumar',
    email: 'ravi.kumar@example.com', // Often not editable via profile setup
    phone: '+91 99887 76655',
    companyName: 'Sunrise Manufacturing Pvt Ltd',
    businessType: 'Textile Mill',
    gstin: '27ABCDE1234F1Z5',
    addressLine1: 'Plot No. 45',
    addressLine2: 'Industrial Area, Phase 1',
    city: 'Gurgaon',
    state: 'Haryana',
    zipCode: '122001',
    logisticsCapability: 'Pan-India Shipping, Buyer Pickup',
  });

  const businessTypes: string[] = [
    'Electronics Manufacturer', 
    'Automotive Supplier', 
    'Textile Mill',
    'Chemical Producer', 
    'Machinery & Equipment', 
    'Packaging Solutions',
    'Raw Material Supplier', 
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string, field: keyof SellerProfile): void => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Saving Seller Profile:', profile);
    // In a real application, send this data to your backend API
    alert('Seller profile updated successfully!'); // Replace with Shadcn Toast/Dialog
    router.push('/seller-dashboard'); // Redirect to dashboard or a seller profile view
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <SellerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Profile Setup</h1>
            <p className="text-gray-800 text-base">Welcome back, Ravi. Complete your seller profile to start selling.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=RK" alt="Ravi Kumar" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-gray-900 hidden sm:block">Ravi Kumar</span>
            </div>
          </div>
        </div>

        {/* KYC Status */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <span><span className="font-semibold text-green-800">KYC Status: Verified</span> - Your account is fully verified and ready for selling</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        {/* Profile Setup Card */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4 border-b border-green-500/10">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <UserCog className="h-6 w-6 mr-2 text-green-400" /> Setup Your Seller Profile
            </CardTitle>
            <CardDescription className="text-gray-700">
              Provide your business and contact details to optimize your selling experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Person Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center border-b border-green-500/10 pb-2">
                  <User className="h-5 w-5 mr-2 text-green-500" /> Contact Person Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-900 font-medium">Full Name</Label>
                    <Input 
                      id="fullName" 
                      type="text" 
                      value={profile.fullName} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={profile.email} 
                      disabled 
                      className="bg-gray-100 border-gray-300 text-gray-500 rounded-md cursor-not-allowed" 
                    />
                    <p className="text-xs text-gray-600">Email is typically not editable here.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-900 font-medium">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={profile.phone} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
              </div>

              {/* Company Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center border-b border-green-500/10 pb-2">
                  <Building2 className="h-5 w-5 mr-2 text-green-500" /> Company Details
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-gray-900 font-medium">Company Name</Label>
                  <Input 
                    id="companyName" 
                    type="text" 
                    value={profile.companyName} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-gray-900 font-medium">Business Type</Label>
                  <Select 
                    value={profile.businessType} 
                    onValueChange={(value: string) => handleSelectChange(value, 'businessType')}
                  >
                    <SelectTrigger 
                      id="businessType" 
                      className="bg-white border-green-500/20 text-gray-900 focus:border-green-500/30 focus:ring-green-400/50 rounded-md"
                    >
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      {businessTypes.map((type: string) => (
                        <SelectItem 
                          key={type} 
                          value={type}
                          className="text-gray-900 hover:bg-green-50 focus:bg-green-50"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gstin" className="text-gray-900 font-medium">GSTIN</Label>
                  <Input 
                    id="gstin" 
                    type="text" 
                    value={profile.gstin} 
                    onChange={handleInputChange} 
                    placeholder="e.g., 27ABCDE1234F1Z5" 
                    required 
                    className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center border-b border-green-500/10 pb-2">
                  <MapPin className="h-5 w-5 mr-2 text-green-500" /> Address Details
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="addressLine1" className="text-gray-900 font-medium">Address Line 1</Label>
                  <Input 
                    id="addressLine1" 
                    type="text" 
                    value={profile.addressLine1} 
                    onChange={handleInputChange} 
                    placeholder="Street address, P.O. Box" 
                    required 
                    className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressLine2" className="text-gray-900 font-medium">Address Line 2 (Optional)</Label>
                  <Input 
                    id="addressLine2" 
                    type="text" 
                    value={profile.addressLine2} 
                    onChange={handleInputChange} 
                    placeholder="Apartment, suite, unit, building, floor, etc." 
                    className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-900 font-medium">City</Label>
                    <Input 
                      id="city" 
                      type="text" 
                      value={profile.city} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-900 font-medium">State</Label>
                    <Input 
                      id="state" 
                      type="text" 
                      value={profile.state} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-gray-900 font-medium">Zip Code</Label>
                    <Input 
                      id="zipCode" 
                      type="text" 
                      value={profile.zipCode} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logisticsCapability" className="text-gray-900 font-medium">Logistics Capabilities (Optional)</Label>
                  <Input 
                    id="logisticsCapability" 
                    type="text" 
                    value={profile.logisticsCapability} 
                    onChange={handleInputChange} 
                    placeholder="e.g., Pan-India shipping, Buyer pickup only" 
                    className="bg-white border-green-500/20 text-gray-900 placeholder:text-gray-400 focus:border-green-500/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8"
              >
                Save Seller Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerProfileSetupPage;