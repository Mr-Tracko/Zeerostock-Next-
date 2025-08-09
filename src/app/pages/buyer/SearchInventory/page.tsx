// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Input } from '../../../components/ui/input';
// import { Button } from '../../../components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { SlidersHorizontal, ChevronDown, Sparkles, Search } from 'lucide-react';
// import BuyerSidebar from "../../../components/BuyerSidebar";

// // Type definitions
// interface SearchItem {
//   id: string;
//   name: string;
//   description: string;
//   price: string;
//   quantity: string;
//   imageUrl: string;
//   seller: string;
// }

// interface SearchFilters {
//   searchQuery: string;
//   category: string;
//   condition: string;
//   region: string;
// }

// interface FilterOption {
//   id: string;
//   name: string;
// }

// const SearchInventoryPage: React.FC = () => {
//   const router = useRouter();

//   // State for search filters
//   const [filters, setFilters] = useState<SearchFilters>({
//     searchQuery: '',
//     category: '',
//     condition: '',
//     region: ''
//   });

//   // Filter options with proper typing
//   const categories: FilterOption[] = [
//     { id: 'raw-materials', name: 'Raw Materials' },
//     { id: 'components', name: 'Components' },
//     { id: 'machinery', name: 'Machinery' },
//     { id: 'packaging', name: 'Packaging' },
//     { id: 'chemicals', name: 'Chemicals' },
//     { id: 'electronics', name: 'Electronics' }
//   ];

//   const conditions: FilterOption[] = [
//     { id: 'new', name: 'New' },
//     { id: 'used-like-new', name: 'Used - Like New' },
//     { id: 'used-good', name: 'Used - Good' },
//     { id: 'used-fair', name: 'Used - Fair' }
//   ];

//   const regions: FilterOption[] = [
//     { id: 'north-india', name: 'North India' },
//     { id: 'south-india', name: 'South India' },
//     { id: 'east-india', name: 'East India' },
//     { id: 'west-india', name: 'West India' },
//     { id: 'central-india', name: 'Central India' }
//   ];

//   // Search results data with proper typing
//   const searchResults: SearchItem[] = [
//     {
//       id: 'item-001',
//       name: 'High-Grade Steel Coils',
//       description: 'Excess prime steel coils, various gauges available.',
//       price: '₹55,000 / Ton',
//       quantity: '100 Tons',
//       imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop&crop=center',
//       seller: 'MetalFab India',
//     },
//     {
//       id: 'item-002',
//       name: 'Electronic Microcontrollers',
//       description: 'Batch of unused ATmega328P microcontrollers.',
//       price: '₹120 / Unit',
//       quantity: '5000 Units',
//       imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&crop=center',
//       seller: 'ElectroCorp Pvt Ltd',
//     },
//     {
//       id: 'item-003',
//       name: 'Industrial Bearings (SKF)',
//       description: 'Assorted SKF bearings, new in box.',
//       price: '₹800 / Piece',
//       quantity: '500 Pieces',
//       imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=250&fit=crop&crop=center',
//       seller: 'Precision Parts Co.',
//     },
//     {
//       id: 'item-004',
//       name: 'Plastic Granules (HDPE)',
//       description: 'Virgin HDPE granules, natural color.',
//       price: '₹95 / Kg',
//       quantity: '20 Tons',
//       imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=250&fit=crop&crop=center',
//       seller: 'PolyChem Solutions',
//     },
//     {
//       id: 'item-005',
//       name: 'CNC Machine Spares',
//       description: 'Various spare parts for XYZ brand CNC machines.',
//       price: '₹15,000',
//       quantity: '1 Lot',
//       imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop&crop=center',
//       seller: 'MechTools India',
//     },
//     {
//       id: 'item-006',
//       name: 'Packaging Cartons (Custom Size)',
//       description: 'Overstock of custom-sized corrugated cartons.',
//       price: '₹15 / Piece',
//       quantity: '10000 Pieces',
//       imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=250&fit=crop&crop=center',
//       seller: 'PackRight Solutions',
//     },
//   ];

//   // Event handlers
//   const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilters(prev => ({
//       ...prev,
//       searchQuery: e.target.value
//     }));
//   };

//   const handleCategoryChange = (value: string) => {
//     setFilters(prev => ({
//       ...prev,
//       category: value
//     }));
//   };

//   const handleConditionChange = (value: string) => {
//     setFilters(prev => ({
//       ...prev,
//       condition: value
//     }));
//   };

//   const handleRegionChange = (value: string) => {
//     setFilters(prev => ({
//       ...prev,
//       region: value
//     }));
//   };

//   const handleSearch = () => {
//     // Handle search logic here
//     console.log('Search filters:', filters);
//     // You can add API calls or search logic here
//   };

//   const handleViewDetails = (itemId: string) => {
//     router.push(`/product/${itemId}`);
//   };

//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const target = e.target as HTMLImageElement;
//     target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex">
//       {/* Sidebar section */}
//       <div className="w-64 m-5">
//         <BuyerSidebar />
//       </div>

//       {/* Main content section */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-7xl mx-auto space-y-8">
//           {/* Search Bar and Filters */}
//           <Card className="bg-gradient-to-br from-purple-100 via-gray-300 to-purple-2000 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/20">
//               <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
//                 <Search className="h-6 w-6 mr-2 text-gray-900" /> Search Inventory
//               </CardTitle>
//               <CardDescription className="text-green-900">
//                 Find the excess manufacturing inventory you need.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-6">
//               {/* Main Search Input */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Input
//                   type="text"
//                   placeholder="Search by part number, category, or keyword..."
//                   value={filters.searchQuery}
//                   onChange={handleSearchInputChange}
//                   className="flex-grow bg-white border-gray-900/40 text-gray-600 placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-400/50 rounded-md px-4 py-2"
//                   aria-label="Search inventory"
//                 />
//                 <Button 
//                   onClick={handleSearch}
//                   className="shrink-0 bg-white hover:bg-gray-700 text-gray-600 rounded-md px-6 py-2 font-semibold transition-colors"
//                 >
//                   Search
//                 </Button>
//               </div>

//               {/* Advanced Filters */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Select value={filters.category} onValueChange={handleCategoryChange}>
//                   <SelectTrigger className="bg-white border-gray-900/40 text-gray-700 focus:border-gray-900 focus:ring-green-400/50 rounded-md">
//                     <SelectValue placeholder="Category" className="text-gray-400" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-gray-700 border-gray-600">
//                     {categories.map((cat: FilterOption) => (
//                       <SelectItem 
//                         key={cat.id} 
//                         value={cat.id}
//                         className="text-white hover:bg-gray-600 focus:bg-gray-600"
//                       >
//                         {cat.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 <Select value={filters.condition} onValueChange={handleConditionChange}>
//                   <SelectTrigger className="bg-gray-700 border-gray-900/40 text-white focus:border-gray-800 focus:ring-green-400/50 rounded-md">
//                     <SelectValue placeholder="Condition" className="text-gray-400" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-gray-700 border-gray-600">
//                     {conditions.map((cond: FilterOption) => (
//                       <SelectItem 
//                         key={cond.id} 
//                         value={cond.id}
//                         className="text-white hover:bg-gray-600 focus:bg-gray-600"
//                       >
//                         {cond.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 <Select value={filters.region} onValueChange={handleRegionChange}>
//                   <SelectTrigger className="bg-gray-700 border-green-500/40 text-white focus:border-green-400 focus:ring-green-400/50 rounded-md">
//                     <SelectValue placeholder="Region" className="text-gray-400" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-gray-700 border-gray-600">
//                     {regions.map((reg: FilterOption) => (
//                       <SelectItem 
//                         key={reg.id} 
//                         value={reg.id}
//                         className="text-white hover:bg-gray-600 focus:bg-gray-600"
//                       >
//                         {reg.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <Button 
//                 variant="outline" 
//                 className="w-full sm:w-auto flex items-center justify-center rounded-md border-green-500/40 text-green-200 hover:bg-green-500/10 hover:text-green-100 bg-transparent transition-colors"
//               >
//                 <SlidersHorizontal className="h-4 w-4 mr-2" /> More Filters
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Search Results */}
//           <h2 className="text-2xl font-bold text-green-400 mt-8 mb-6 flex items-center">
//             <span className="text-green-400 mr-2">●</span> Search Results
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {searchResults.map((item: SearchItem) => (
//               <Card key={item.id} className="bg-gray-800 border-green-500/30 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all duration-300 overflow-hidden hover:border-green-400/50">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.name}
//                   className="w-full h-48 object-cover object-center"
//                   onError={handleImageError}
//                 />
//                 <CardHeader className="p-4 pb-2">
//                   <CardTitle className="text-lg font-semibold text-green-400">{item.name}</CardTitle>
//                   <CardDescription className="text-sm text-gray-300">{item.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="px-4 pb-4 space-y-2">
//                   <p className="text-xl font-bold text-green-300">{item.price}</p>
//                   <p className="text-sm text-gray-300">Quantity: <span className="text-green-200">{item.quantity}</span></p>
//                   <Button
//                     className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white rounded-md py-2 text-sm font-semibold transition-colors"
//                     onClick={() => handleViewDetails(item.id)}
//                   >
//                     View Details
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Personalized Recommendations */}
//           <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
//             <Sparkles className="h-6 w-6 text-green-400 mr-2" /> 
//             <span className="text-green-400">Personalized Recommendations</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {searchResults.slice(0, 3).map((item: SearchItem) => (
//               <Card key={`rec-${item.id}`} className="bg-gray-800 border-green-400/40 rounded-lg shadow-lg hover:shadow-green-400/30 transition-all duration-300 overflow-hidden hover:border-green-400/70">
//                 <div className="relative">
//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     className="w-full h-48 object-cover object-center"
//                     onError={handleImageError}
//                   />
//                   <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                     Recommended
//                   </div>
//                 </div>
//                 <CardHeader className="p-4 pb-2">
//                   <CardTitle className="text-lg font-semibold text-green-400">{item.name}</CardTitle>
//                   <CardDescription className="text-sm text-gray-300">{item.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="px-4 pb-4">
//                   <p className="text-xl font-bold text-green-300">{item.price}</p>
//                   <p className="text-sm text-gray-300 mt-2">Quantity: <span className="text-green-200">{item.quantity}</span></p>
//                   <Button
//                     className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white rounded-md py-2 text-sm font-semibold transition-colors"
//                     onClick={() => handleViewDetails(item.id)}
//                   >
//                     View Item
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchInventoryPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { SlidersHorizontal, ChevronDown, Sparkles, Search } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
interface SearchItem {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  imageUrl: string;
  seller: string;
}

interface SearchFilters {
  searchQuery: string;
  category: string;
  condition: string;
  region: string;
}

interface FilterOption {
  id: string;
  name: string;
}

const SearchInventoryPage: React.FC = () => {
  const router = useRouter();

  // State for search filters
  const [filters, setFilters] = useState<SearchFilters>({
    searchQuery: '',
    category: '',
    condition: '',
    region: ''
  });

  // Filter options with proper typing
  const categories: FilterOption[] = [
    { id: 'raw-materials', name: 'Raw Materials' },
    { id: 'components', name: 'Components' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'chemicals', name: 'Chemicals' },
    { id: 'electronics', name: 'Electronics' }
  ];

  const conditions: FilterOption[] = [
    { id: 'new', name: 'New' },
    { id: 'used-like-new', name: 'Used - Like New' },
    { id: 'used-good', name: 'Used - Good' },
    { id: 'used-fair', name: 'Used - Fair' }
  ];

  const regions: FilterOption[] = [
    { id: 'north-india', name: 'North India' },
    { id: 'south-india', name: 'South India' },
    { id: 'east-india', name: 'East India' },
    { id: 'west-india', name: 'West India' },
    { id: 'central-india', name: 'Central India' }
  ];

  // Search results data with proper typing
  const searchResults: SearchItem[] = [
    {
      id: 'item-001',
      name: 'High-Grade Steel Coils',
      description: 'Excess prime steel coils, various gauges available.',
      price: '₹55,000 / Ton',
      quantity: '100 Tons',
      imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop&crop=center',
      seller: 'MetalFab India',
    },
    {
      id: 'item-002',
      name: 'Electronic Microcontrollers',
      description: 'Batch of unused ATmega328P microcontrollers.',
      price: '₹120 / Unit',
      quantity: '5000 Units',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&crop=center',
      seller: 'ElectroCorp Pvt Ltd',
    },
    {
      id: 'item-003',
      name: 'Industrial Bearings (SKF)',
      description: 'Assorted SKF bearings, new in box.',
      price: '₹800 / Piece',
      quantity: '500 Pieces',
      imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=250&fit=crop&crop=center',
      seller: 'Precision Parts Co.',
    },
    {
      id: 'item-004',
      name: 'Plastic Granules (HDPE)',
      description: 'Virgin HDPE granules, natural color.',
      price: '₹95 / Kg',
      quantity: '20 Tons',
      imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=250&fit=crop&crop=center',
      seller: 'PolyChem Solutions',
    },
    {
      id: 'item-005',
      name: 'CNC Machine Spares',
      description: 'Various spare parts for XYZ brand CNC machines.',
      price: '₹15,000',
      quantity: '1 Lot',
      imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop&crop=center',
      seller: 'MechTools India',
    },
    {
      id: 'item-006',
      name: 'Packaging Cartons (Custom Size)',
      description: 'Overstock of custom-sized corrugated cartons.',
      price: '₹15 / Piece',
      quantity: '10000 Pieces',
      imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=250&fit=crop&crop=center',
      seller: 'PackRight Solutions',
    },
  ];

  // Event handlers
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleConditionChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      condition: value
    }));
  };

  const handleRegionChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      region: value
    }));
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search filters:', filters);
    // You can add API calls or search logic here
  };

  const handleViewDetails = (itemId: string) => {
    router.push(`/product/${itemId}`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center';
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Search Inventory</h1>
            <p className="text-gray-800 text-base">Find the excess manufacturing inventory you need.</p>
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

        {/* Search Bar and Filters */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Search className="h-6 w-6 mr-2 text-gray-900" /> Search Inventory
            </CardTitle>
            <CardDescription className="text-gray-700">
              Find the excess manufacturing inventory you need.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Main Search Input */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Search by part number, category, or keyword..."
                value={filters.searchQuery}
                onChange={handleSearchInputChange}
                className="flex-grow bg-white border-gray-300 text-gray-600 placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-400/50 rounded-md px-4 py-2"
                aria-label="Search inventory"
              />
              <Button 
                onClick={handleSearch}
                className="shrink-0 bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-2 font-semibold transition-colors"
              >
                Search
              </Button>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={filters.category} onValueChange={handleCategoryChange}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-700 focus:border-green-500 focus:ring-green-400/50 rounded-md">
                  <SelectValue placeholder="Category" className="text-gray-400" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  {categories.map((cat: FilterOption) => (
                    <SelectItem 
                      key={cat.id} 
                      value={cat.id}
                      className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                    >
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.condition} onValueChange={handleConditionChange}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-700 focus:border-green-500 focus:ring-green-400/50 rounded-md">
                  <SelectValue placeholder="Condition" className="text-gray-400" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  {conditions.map((cond: FilterOption) => (
                    <SelectItem 
                      key={cond.id} 
                      value={cond.id}
                      className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                    >
                      {cond.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.region} onValueChange={handleRegionChange}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-700 focus:border-green-500 focus:ring-green-400/50 rounded-md">
                  <SelectValue placeholder="Region" className="text-gray-400" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  {regions.map((reg: FilterOption) => (
                    <SelectItem 
                      key={reg.id} 
                      value={reg.id}
                      className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                    >
                      {reg.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              variant="outline" 
              className="w-full sm:w-auto flex items-center justify-center rounded-md border-green-500/40 text-green-800 hover:bg-green-500/10 hover:text-green-700 bg-transparent transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" /> More Filters
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
            Search Results
          </CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((item: SearchItem) => (
              <Card key={item.id} className="bg-white border-green-500/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-green-500/30">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover object-center"
                  onError={handleImageError}
                />
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">{item.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-700">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4 space-y-2">
                  <p className="text-xl font-bold text-green-700">{item.price}</p>
                  <p className="text-sm text-gray-700">Quantity: <span className="text-green-800">{item.quantity}</span></p>
                  <p className="text-sm text-gray-600">Seller: <span className="font-medium">{item.seller}</span></p>
                  <Button
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white rounded-md py-2 text-sm font-semibold transition-colors"
                    onClick={() => handleViewDetails(item.id)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>

        {/* Personalized Recommendations */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Sparkles className="h-6 w-6 text-green-500 mr-3" />
            Personalized Recommendations
          </CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.slice(0, 3).map((item: SearchItem) => (
              <Card key={`rec-${item.id}`} className="bg-white border-green-400/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-green-400/60">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover object-center"
                    onError={handleImageError}
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Recommended
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">{item.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-700">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-xl font-bold text-green-700">{item.price}</p>
                  <p className="text-sm text-gray-700 mt-2">Quantity: <span className="text-green-800">{item.quantity}</span></p>
                  <p className="text-sm text-gray-600">Seller: <span className="font-medium">{item.seller}</span></p>
                  <Button
                    className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white rounded-md py-2 text-sm font-semibold transition-colors"
                    onClick={() => handleViewDetails(item.id)}
                  >
                    View Item
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchInventoryPage;