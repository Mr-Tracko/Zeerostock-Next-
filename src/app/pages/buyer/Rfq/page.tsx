// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { Textarea } from '../../../components/ui/textarea';
// import { Button } from '../../../components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { FileText } from 'lucide-react';
// import BuyerSidebar from "../../../components/BuyerSidebar";

// // Type definitions
// interface FormData {
//   itemName: string;
//   category: string;
//   quantity: string;
//   specifications: string;
//   deliveryDate: string;
//   contactEmail: string;
// }

// interface Category {
//   id: string;
//   name: string;
// }

// const RequestQuotePage: React.FC = () => {
//   const router = useRouter();

//   // State for form data
//   const [formData, setFormData] = useState<FormData>({
//     itemName: '',
//     category: '',
//     quantity: '',
//     specifications: '',
//     deliveryDate: '',
//     contactEmail: ''
//   });

//   // Categories data with proper typing
//   const categories: Category[] = [
//     { id: 'raw-materials', name: 'Raw Materials' },
//     { id: 'components', name: 'Components' },
//     { id: 'machinery', name: 'Machinery' },
//     { id: 'packaging', name: 'Packaging' },
//     { id: 'chemicals', name: 'Chemicals' },
//     { id: 'electronics', name: 'Electronics' },
//     { id: 'other', name: 'Other' }
//   ];

//   // Form submission handler
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     // You can add API calls or navigation logic here
//   };

//   // Generic input change handler
//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   // Select change handler
//   const handleSelectChange = (value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       category: value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <BuyerSidebar/>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
//             <CardHeader className="pb-4 border-b border-green-500/20">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <FileText className="h-6 w-6 mr-2 text-green-400" /> Request for Quote (RFQ)
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Submit a request for a custom quote for specific items or bulk needs.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="space-y-2">
//                   <Label htmlFor="itemName" className="text-gray-300 font-medium">
//                     Item Name / Part Number
//                   </Label>
//                   <Input
//                     id="itemName"
//                     type="text"
//                     placeholder="e.g., Stainless Steel Sheets, XYZ-123 Bearing"
//                     required
//                     value={formData.itemName}
//                     onChange={handleInputChange}
//                     className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="category" className="text-gray-300 font-medium">
//                     Category
//                   </Label>
//                   <Select value={formData.category} onValueChange={handleSelectChange}>
//                     <SelectTrigger 
//                       id="category" 
//                       className="bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring-green-400 rounded-md"
//                     >
//                       <SelectValue placeholder="Select a category" className="text-gray-400" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-gray-700 border-gray-600">
//                       {categories.map((cat: Category) => (
//                         <SelectItem 
//                           key={cat.id} 
//                           value={cat.id}
//                           className="text-white hover:bg-gray-600 focus:bg-gray-600"
//                         >
//                           {cat.name}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="quantity" className="text-gray-300 font-medium">
//                     Required Quantity
//                   </Label>
//                   <Input
//                     id="quantity"
//                     type="text"
//                     placeholder="e.g., 500 units, 10 tons, 1 lot"
//                     required
//                     value={formData.quantity}
//                     onChange={handleInputChange}
//                     className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="specifications" className="text-gray-300 font-medium">
//                     Detailed Specifications / Requirements
//                   </Label>
//                   <Textarea
//                     id="specifications"
//                     placeholder="Provide detailed information about the item, including dimensions, material grade, condition, certifications, etc."
//                     rows={5}
//                     value={formData.specifications}
//                     onChange={handleInputChange}
//                     className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md resize-none"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="deliveryDate" className="text-gray-300 font-medium">
//                     Desired Delivery Date (Optional)
//                   </Label>
//                   <Input
//                     id="deliveryDate"
//                     type="date"
//                     value={formData.deliveryDate}
//                     onChange={handleInputChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring-green-400 rounded-md"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="contactEmail" className="text-gray-300 font-medium">
//                     Your Contact Email
//                   </Label>
//                   <Input
//                     id="contactEmail"
//                     type="email"
//                     placeholder="Enter your email for communication"
//                     required
//                     value={formData.contactEmail}
//                     onChange={handleInputChange}
//                     className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8"
//                 >
//                   Submit RFQ
//                 </Button>
//               </form>

//               <p className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
//                 Your request will be sent to relevant sellers who can provide a quote.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestQuotePage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { FileText, CheckCircle } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
interface FormData {
  itemName: string;
  category: string;
  quantity: string;
  specifications: string;
  deliveryDate: string;
  contactEmail: string;
}

interface Category {
  id: string;
  name: string;
}

const RequestQuotePage: React.FC = () => {
  const router = useRouter();

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    itemName: '',
    category: '',
    quantity: '',
    specifications: '',
    deliveryDate: '',
    contactEmail: ''
  });

  // Categories data with proper typing
  const categories: Category[] = [
    { id: 'raw-materials', name: 'Raw Materials' },
    { id: 'components', name: 'Components' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'chemicals', name: 'Chemicals' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'other', name: 'Other' }
  ];

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API calls or navigation logic here
  };

  // Generic input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Select change handler
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Request for Quote</h1>
            <p className="text-gray-800 text-base">Submit a request for a custom quote for specific items or bulk needs.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=JS" alt="John Smith" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-white hidden sm:block">John Smith</span>
            </div>
          </div>
        </div>

        {/* KYC Status */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <span><span className="font-semibold text-green-800">KYC Status: Verified</span> - Your account is fully verified and ready for trading</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        {/* RFQ Form Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg hover:border-green-500/30 transition-all">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <div className="w-1 h-8 bg-green-500 rounded-full mr-3"></div>
                <FileText className="h-6 w-6 mr-2 text-green-500" /> 
                Request for Quote (RFQ)
              </CardTitle>
              <CardDescription className="text-gray-700 ml-4">
                Fill out the form below to receive competitive quotes from verified sellers.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="itemName" className="text-gray-900 font-semibold">
                    Item Name / Part Number
                  </Label>
                  <Input
                    id="itemName"
                    type="text"
                    placeholder="e.g., Stainless Steel Sheets, XYZ-123 Bearing"
                    required
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-900 font-semibold">
                    Category
                  </Label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger 
                      id="category" 
                      className="bg-white border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500 rounded-md"
                    >
                      <SelectValue placeholder="Select a category" className="text-gray-500" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      {categories.map((cat: Category) => (
                        <SelectItem 
                          key={cat.id} 
                          value={cat.id}
                          className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                        >
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-gray-900 font-semibold">
                    Required Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="text"
                    placeholder="e.g., 500 units, 10 tons, 1 lot"
                    required
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specifications" className="text-gray-900 font-semibold">
                    Detailed Specifications / Requirements
                  </Label>
                  <Textarea
                    id="specifications"
                    placeholder="Provide detailed information about the item, including dimensions, material grade, condition, certifications, etc."
                    rows={5}
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500 rounded-md resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryDate" className="text-gray-900 font-semibold">
                    Desired Delivery Date (Optional)
                  </Label>
                  <Input
                    id="deliveryDate"
                    type="date"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-gray-900 font-semibold">
                    Your Contact Email
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="Enter your email for communication"
                    required
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500 rounded-md"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8 shadow-lg"
                >
                  Submit RFQ
                </Button>
              </form>

              <div className="mt-8 bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex items-center backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Your request will be sent to relevant verified sellers who can provide competitive quotes. You will receive responses directly to your email within 24-48 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;