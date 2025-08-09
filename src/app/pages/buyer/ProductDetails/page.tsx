// 'use client';

// import React, { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { Button } from '../../../components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
// import { Heart, MessageSquare, ShoppingCart, Tag, ArrowLeft, Star, Shield } from 'lucide-react';
// import BuyerSidebar from "../../../components/BuyerSidebar";

// // TypeScript interfaces
// interface Seller {
//   name: string;
//   rating: number;
//   verified: boolean;
//   location: string;
// }

// interface Specification {
//   label: string;
//   value: string;
// }

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   longDescription: string;
//   images: string[];
//   price: string;
//   minOrderQuantity: string;
//   availableQuantity: string;
//   condition: string;
//   category: string;
//   seller: Seller;
//   specifications: Specification[];
//   returnPolicy: string;
//   shippingInfo: string;
// }

// const ProductDetailPage: React.FC = () => {
//   const params = useParams();
//   const router = useRouter();
//   const [selectedImage, setSelectedImage] = useState<number>(0);
  
//   const productId = params?.productId as string;

//   // Dummy product data (replace with actual data fetching later)
//   const product: Product = {
//     id: productId,
//     name: 'High-Grade Steel Coils',
//     description: 'Excess prime steel coils, various gauges available. Ideal for construction and heavy manufacturing. Certified to IS 2062:2011 standards.',
//     longDescription: 'These are high-quality, excess prime steel coils, perfect for immediate industrial use. Available in various gauges and widths to suit diverse manufacturing needs. Each coil comes with full documentation and quality certifications, ensuring reliability and performance. Stored in a climate-controlled warehouse, they are free from rust and damage. Bulk discounts available for large orders.',
//     images: [
//       '/coil1.jpeg',
//       '/coil2.jpeg',
//       '/coil3.jpeg',
//     ],
//     price: '₹55,000 / Ton',
//     minOrderQuantity: '5 Tons',
//     availableQuantity: '100 Tons',
//     condition: 'New',
//     category: 'Raw Materials',
//     seller: {
//       name: 'MetalFab India',
//       rating: 4.8,
//       verified: true,
//       location: 'Pune, Maharashtra',
//     },
//     specifications: [
//       { label: 'Material', value: 'Mild Steel' },
//       { label: 'Grade', value: 'IS 2062 E250BR' },
//       { label: 'Thickness', value: '2mm - 10mm' },
//       { label: 'Width', value: '1000mm - 1500mm' },
//       { label: 'Coil Weight', value: '5-10 Tons' },
//       { label: 'Certifications', value: 'ISO 9001, IS 2062:2011' },
//     ],
//     returnPolicy: '30-day return policy for manufacturing defects.',
//     shippingInfo: 'Seller-managed shipping, pan-India delivery available. Buyer can arrange pickup.',
//   };

//   // Handle image error
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
//     const target = e.target as HTMLImageElement;
//     target.onerror = null;
//     target.src = 'https://placehold.co/800x600/4ade80/000000?text=Image+Error';
//   };

//   const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
//     const target = e.target as HTMLImageElement;
//     target.onerror = null;
//     target.src = 'https://placehold.co/100x100/4ade80/000000?text=Thumb';
//   };

//   const handleBackClick = (): void => {
//     router.back();
//   };

//   const handleThumbnailClick = (index: number): void => {
//     setSelectedImage(index);
//   };

//   // If product not found (in a real app, you'd fetch from API and handle 404)
//   if (!product.id) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <Card className="bg-gray-800 border-gray-700 p-8 text-center">
//           <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
//           <p className="text-gray-300 mb-6">The product you are looking for does not exist.</p>
//           <Button onClick={() => router.push('/search-inventory')} className="bg-green-600 hover:bg-green-700">
//             Back to Search
//           </Button>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <BuyerSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-7xl mx-auto space-y-8">
//           {/* Breadcrumbs or Back button */}
//           <Button 
//             variant="ghost" 
//             onClick={handleBackClick}
//             className="text-green-400 hover:text-green-300 hover:bg-green-500/10 px-0 transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2" /> Back to Search Results
//           </Button>

//           {/* Product Overview Section */}
//           <Card className="bg-gray-800 border-green-500/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardContent className="p-6">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Product Images */}
//                 <div className="space-y-4">
//                   <img
//                     src={product.images[selectedImage]}
//                     alt={product.name}
//                     className="w-full h-96 object-cover object-center rounded-lg shadow-lg border border-green-500/20"
//                     onError={handleImageError}
//                   />
//                   <div className="flex space-x-2 overflow-x-auto pb-2">
//                     {product.images.map((img: string, index: number) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt={`${product.name} thumbnail ${index + 1}`}
//                         className={`w-24 h-24 object-cover object-center rounded-md cursor-pointer border-2 transition-all duration-200 ${
//                           selectedImage === index 
//                             ? 'border-green-400 ring-2 ring-green-400/50' 
//                             : 'border-gray-600 hover:border-green-400/70'
//                         }`}
//                         onClick={() => handleThumbnailClick(index)}
//                         onError={handleThumbnailError}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Product Details & Actions */}
//                 <div className="space-y-6">
//                   <h1 className="text-3xl font-bold text-white">{product.name}</h1>
//                   <p className="text-gray-300 text-lg">{product.description}</p>

//                   <div className="flex items-baseline space-x-4">
//                     <p className="text-4xl font-extrabold text-green-400">{product.price}</p>
//                     <span className="text-gray-400">({product.minOrderQuantity} Minimum Order)</span>
//                   </div>

//                   <div className="space-y-2 text-gray-300">
//                     <p><strong className="text-green-200">Available:</strong> <span className="text-green-300">{product.availableQuantity}</span></p>
//                     <p><strong className="text-green-200">Condition:</strong> <span className="font-semibold text-green-400">{product.condition}</span></p>
//                     <p><strong className="text-green-200">Category:</strong> <span className="text-gray-300">{product.category}</span></p>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                     <Button className="flex-grow bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-lg font-semibold transition-colors">
//                       <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
//                     </Button>
//                     <Button 
//                       variant="outline" 
//                       className="flex-grow border-green-500/50 text-green-300 hover:bg-green-500/10 hover:border-green-400 bg-transparent rounded-md py-3 text-lg transition-colors"
//                     >
//                       <Tag className="h-5 w-5 mr-2" /> Make Offer
//                     </Button>
//                     <Button 
//                       variant="ghost" 
//                       size="icon" 
//                       className="rounded-full self-center hover:bg-red-500/10 transition-colors"
//                     >
//                       <Heart className="h-6 w-6 text-gray-400 hover:text-red-400" />
//                     </Button>
//                     <Button 
//                       variant="ghost" 
//                       size="icon" 
//                       className="rounded-full self-center hover:bg-blue-500/10 transition-colors"
//                     >
//                       <MessageSquare className="h-6 w-6 text-gray-400 hover:text-blue-400" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Detailed Information Tabs */}
//           <Tabs defaultValue="description" className="w-full mt-8">
//             <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-green-500/30">
//               <TabsTrigger 
//                 value="description" 
//                 className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
//               >
//                 Description
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="specifications"
//                 className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
//               >
//                 Specifications
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="policies"
//                 className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
//               >
//                 Policies & Shipping
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="description" className="bg-gray-800 border border-green-500/30 border-t-0 p-6 rounded-b-lg">
//               <h3 className="text-xl font-semibold text-green-400 mb-4">Product Description</h3>
//               <p className="text-gray-300 leading-relaxed">{product.longDescription}</p>
//             </TabsContent>
//             <TabsContent value="specifications" className="bg-gray-800 border border-green-500/30 border-t-0 p-6 rounded-b-lg">
//               <h3 className="text-xl font-semibold text-green-400 mb-4">Technical Specifications</h3>
//               <div className="space-y-3">
//                 {product.specifications.map((spec: Specification, index: number) => (
//                   <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
//                     <span className="font-medium text-green-200">{spec.label}:</span>
//                     <span className="text-gray-300">{spec.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//             <TabsContent value="policies" className="bg-gray-800 border border-green-500/30 border-t-0 p-6 rounded-b-lg">
//               <h3 className="text-xl font-semibold text-green-400 mb-4">Return Policy & Shipping</h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-medium text-green-200 mb-2">Return Policy</h4>
//                   <p className="text-gray-300">{product.returnPolicy}</p>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-green-200 mb-2">Shipping Information</h4>
//                   <p className="text-gray-300">{product.shippingInfo}</p>
//                 </div>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Heart, MessageSquare, ShoppingCart, Tag, ArrowLeft, Star, Shield } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// TypeScript interfaces
interface Seller {
  name: string;
  rating: number;
  verified: boolean;
  location: string;
}

interface Specification {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  images: string[];
  price: string;
  minOrderQuantity: string;
  availableQuantity: string;
  condition: string;
  category: string;
  seller: Seller;
  specifications: Specification[];
  returnPolicy: string;
  shippingInfo: string;
}

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  const productId = params?.productId as string;

  // Dummy product data (replace with actual data fetching later)
  const product: Product = {
    id: productId,
    name: 'High-Grade Steel Coils',
    description: 'Excess prime steel coils, various gauges available. Ideal for construction and heavy manufacturing. Certified to IS 2062:2011 standards.',
    longDescription: 'These are high-quality, excess prime steel coils, perfect for immediate industrial use. Available in various gauges and widths to suit diverse manufacturing needs. Each coil comes with full documentation and quality certifications, ensuring reliability and performance. Stored in a climate-controlled warehouse, they are free from rust and damage. Bulk discounts available for large orders.',
    images: [
      '/coil1.jpeg',
      '/coil2.jpeg',
      '/coil3.jpeg',
    ],
    price: '₹55,000 / Ton',
    minOrderQuantity: '5 Tons',
    availableQuantity: '100 Tons',
    condition: 'New',
    category: 'Raw Materials',
    seller: {
      name: 'MetalFab India',
      rating: 4.8,
      verified: true,
      location: 'Pune, Maharashtra',
    },
    specifications: [
      { label: 'Material', value: 'Mild Steel' },
      { label: 'Grade', value: 'IS 2062 E250BR' },
      { label: 'Thickness', value: '2mm - 10mm' },
      { label: 'Width', value: '1000mm - 1500mm' },
      { label: 'Coil Weight', value: '5-10 Tons' },
      { label: 'Certifications', value: 'ISO 9001, IS 2062:2011' },
    ],
    returnPolicy: '30-day return policy for manufacturing defects.',
    shippingInfo: 'Seller-managed shipping, pan-India delivery available. Buyer can arrange pickup.',
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'https://placehold.co/800x600/4ade80/000000?text=Image+Error';
  };

  const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'https://placehold.co/100x100/4ade80/000000?text=Thumb';
  };

  const handleBackClick = (): void => {
    router.back();
  };

  const handleThumbnailClick = (index: number): void => {
    setSelectedImage(index);
  };

  // If product not found (in a real app, you'd fetch from API and handle 404)
  if (!product.id) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex items-center justify-center font-inter">
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 p-8 text-center rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-700 mb-6">The product you are looking for does not exist.</p>
          <Button onClick={() => router.push('/search-inventory')} className="bg-green-500 hover:bg-green-600 text-white">
            Back to Search
          </Button>
        </Card>
      </div>
    );
  }

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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Product Details</h1>
            <p className="text-gray-800 text-base">View detailed information about this product.</p>
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

        {/* Breadcrumbs or Back button */}
        <Button 
          variant="ghost" 
          onClick={handleBackClick}
          className="text-gray-700 hover:text-green-600 hover:bg-green-100 px-0 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Search Results
        </Button>

        {/* Product Overview Section */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover object-center rounded-lg shadow-lg border border-green-500/20"
                  onError={handleImageError}
                />
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((img: string, index: number) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className={`w-24 h-24 object-cover object-center rounded-md cursor-pointer border-2 transition-all duration-200 ${
                        selectedImage === index 
                          ? 'border-green-500 ring-2 ring-green-400/50' 
                          : 'border-gray-300 hover:border-green-400/70'
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                      onError={handleThumbnailError}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details & Actions */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gray-700 text-lg">{product.description}</p>

                <div className="flex items-baseline space-x-4">
                  <p className="text-4xl font-extrabold text-green-600">{product.price}</p>
                  <span className="text-gray-600">({product.minOrderQuantity} Minimum Order)</span>
                </div>

                <div className="space-y-2 text-gray-700">
                  <p><strong className="text-gray-900">Available:</strong> <span className="text-green-600 font-semibold">{product.availableQuantity}</span></p>
                  <p><strong className="text-gray-900">Condition:</strong> <span className="font-semibold text-green-600">{product.condition}</span></p>
                  <p><strong className="text-gray-900">Category:</strong> <span className="text-gray-700">{product.category}</span></p>
                </div>

                {/* Seller Info */}
                <div className="bg-white rounded-lg p-4 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                    Seller Information
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 flex items-center">
                        {product.seller.name}
                        {product.seller.verified && <Shield className="h-4 w-4 ml-2 text-green-500" />}
                      </p>
                      <p className="text-sm text-gray-600">{product.seller.location}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-gray-900">{product.seller.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="flex-grow bg-green-500 hover:bg-green-600 text-white rounded-md py-3 text-lg font-semibold transition-colors">
                    <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-grow border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 bg-white rounded-md py-3 text-lg transition-colors"
                  >
                    <Tag className="h-5 w-5 mr-2" /> Make Offer
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full self-center hover:bg-red-100 transition-colors"
                  >
                    <Heart className="h-6 w-6 text-gray-400 hover:text-red-500" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full self-center hover:bg-blue-100 transition-colors"
                  >
                    <MessageSquare className="h-6 w-6 text-gray-400 hover:text-blue-500" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white border-b border-gray-200 rounded-t-xl">
              <TabsTrigger 
                value="description" 
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-gray-700 hover:text-gray-900 transition-colors rounded-tl-xl"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="specifications"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-gray-700 hover:text-gray-900 transition-colors"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="policies"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-gray-700 hover:text-gray-900 transition-colors rounded-tr-xl"
              >
                Policies & Shipping
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="bg-white border-t-0 p-6 rounded-b-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                Product Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
            </TabsContent>
            <TabsContent value="specifications" className="bg-white border-t-0 p-6 rounded-b-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {product.specifications.map((spec: Specification, index: number) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}:</span>
                    <span className="text-gray-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="policies" className="bg-white border-t-0 p-6 rounded-b-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                Return Policy & Shipping
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Return Policy</h4>
                  <p className="text-gray-700">{product.returnPolicy}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Shipping Information</h4>
                  <p className="text-gray-700">{product.shippingInfo}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetailPage;