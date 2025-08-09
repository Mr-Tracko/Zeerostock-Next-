// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Badge } from '../../../components/ui/badge';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
// import { Plus, Edit, Trash2, Eye, PauseCircle, PlayCircle, MoreHorizontal } from 'lucide-react';
// import SellerSidebar from "../../../components/SellerSidebar";

// // Type definitions
// interface Listing {
//   id: string;
//   productName: string;
//   category: string;
//   price: string;
//   quantity: string;
//   status: 'Active' | 'Paused' | 'Draft';
//   views: number;
//   offers: number;
//   lastUpdated: string;
// }

// type StatusVariant = 'default' | 'outline' | 'secondary';

// const ManageListingsPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy data for seller listings
//   const listings: Listing[] = [
//     {
//       id: 'LST-001',
//       productName: 'High-Grade Steel Coils',
//       category: 'Raw Materials',
//       price: '₹55,000 / Ton',
//       quantity: '100 Tons',
//       status: 'Active',
//       views: 1250,
//       offers: 5,
//       lastUpdated: '2024-07-20',
//     },
//     {
//       id: 'LST-002',
//       productName: 'Electronic Microcontrollers',
//       category: 'Components',
//       price: '₹120 / Unit',
//       quantity: '5000 Units',
//       status: 'Active',
//       views: 890,
//       offers: 12,
//       lastUpdated: '2024-07-18',
//     },
//     {
//       id: 'LST-003',
//       productName: 'Industrial Bearings (SKF)',
//       category: 'Machinery Parts',
//       price: '₹800 / Piece',
//       quantity: '500 Pieces',
//       status: 'Paused',
//       views: 340,
//       offers: 2,
//       lastUpdated: '2024-07-15',
//     },
//     {
//       id: 'LST-004',
//       productName: 'Plastic Granules (HDPE)',
//       category: 'Raw Materials',
//       price: '₹95 / Kg',
//       quantity: '20 Tons',
//       status: 'Draft',
//       views: 0,
//       offers: 0,
//       lastUpdated: '2024-07-10',
//     },
//     {
//       id: 'LST-005',
//       productName: 'CNC Machine Spares',
//       category: 'Machinery',
//       price: '₹15,000 / Lot',
//       quantity: '1 Lot',
//       status: 'Active',
//       views: 560,
//       offers: 7,
//       lastUpdated: '2024-07-05',
//     },
//   ];

//   const getStatusVariant = (status: Listing['status']): StatusVariant => {
//     switch (status) {
//       case 'Active':
//         return 'default'; // Will be styled as green
//       case 'Paused':
//         return 'outline'; // Will be styled as orange/yellow
//       case 'Draft':
//         return 'secondary'; // Will be styled as gray
//       default:
//         return 'default';
//     }
//   };

//   const getStatusClasses = (status: Listing['status']): string => {
//     switch (status) {
//       case 'Active':
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//       case 'Paused':
//         return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//       case 'Draft':
//         return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//       default:
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//     }
//   };

//   const handleEdit = (id: string): void => {
//     console.log('Editing listing:', id);
//     // In a real app, navigate to an edit listing page, pre-filling data
//     router.push(`/seller/edit-listing/${id}`);
//   };

//   const handleToggleStatus = (id: string, currentStatus: Listing['status']): void => {
//     console.log(`Toggling status for ${id} from ${currentStatus}`);
//     // In a real app, dispatch Redux action or API call to update status
//     alert(`Listing ${id} status toggled!`); // Replace with Shadcn Toast/Dialog
//   };

//   const handleDelete = (id: string): void => {
//     if (window.confirm(`Are you sure you want to delete listing ${id}? This action cannot be undone.`)) { // Replace with Shadcn AlertDialog
//       console.log('Deleting listing:', id);
//       // In a real app, dispatch Redux action or API call to delete listing
//       alert(`Listing ${id} deleted.`); // Replace with Shadcn Toast/Dialog
//     }
//   };

//   const handleNavigateToNewListing = (): void => {
//     router.push('/seller/list-new-item');
//   };

//   const handleViewPublicListing = (id: string): void => {
//     router.push(`/product/${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-white p-6 flex">
//       {/* Sidebar fixed width */}
//       <div className="w-64">
//         <SellerSidebar/>
//       </div>

//       {/* Main content takes remaining width */}
//       <div className="flex-1 max-w-7xl mx-auto space-y-8 pl-6">
//         <Card className="p-6 rounded-lg shadow-lg bg-gray-800 border-gray-700">
//           <CardHeader className="pb-4">
//             <CardTitle className="text-2xl font-bold text-white">Manage Listings</CardTitle>
//             <CardDescription className="text-gray-300">
//               View, edit, and manage your active, paused, and drafted inventory listings.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-end mb-4">
//               <Button
//                 className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 transition-colors duration-200"
//                 onClick={handleNavigateToNewListing}
//               >
//                 <Plus className="h-4 w-4 mr-2" /> Add New Listing
//               </Button>
//             </div>

//             {listings.length === 0 ? (
//               <div className="text-center py-12 text-gray-400">
//                 <p className="text-lg mb-4">You have no listings yet.</p>
//                 <Button 
//                   className="bg-green-600 hover:bg-green-700 text-white"
//                   onClick={handleNavigateToNewListing}
//                 >
//                   Create Your First Listing
//                 </Button>
//               </div>
//             ) : (
//               <div className="bg-gray-800 rounded-lg border border-gray-700">
//                 <Table>
//                   <TableHeader>
//                     <TableRow className="border-gray-700 hover:bg-gray-700/50">
//                       <TableHead className="text-gray-300 font-semibold">Product Name</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Category</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Price</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Quantity</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Status</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Views</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Offers</TableHead>
//                       <TableHead className="text-gray-300 font-semibold">Last Updated</TableHead>
//                       <TableHead className="text-right text-green-500 font-semibold">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {listings.map((listing: Listing) => (
//                       <TableRow key={listing.id} className="border-gray-700 hover:bg-gray-700/30 transition-colors duration-150">
//                         <TableCell className="font-medium text-green-500">{listing.productName}</TableCell>
//                         <TableCell className="text-gray-300">{listing.category}</TableCell>
//                         <TableCell className="text-gray-300">{listing.price}</TableCell>
//                         <TableCell className="text-gray-300">{listing.quantity}</TableCell>
//                         <TableCell>
//                           <Badge 
//                             className={`rounded-full px-3 py-1 text-sm font-medium border ${getStatusClasses(listing.status)}`}
//                           >
//                             {listing.status}
//                           </Badge>
//                         </TableCell>
//                         <TableCell className="text-gray-300">{listing.views}</TableCell>
//                         <TableCell className="text-gray-300">{listing.offers}</TableCell>
//                         <TableCell className="text-gray-300">{listing.lastUpdated}</TableCell>
//                         <TableCell className="text-right">
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button 
//                                 variant="ghost" 
//                                 className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
//                               >
//                                 <span className="sr-only">Open menu</span>
//                                 <MoreHorizontal className="h-4 w-4" />
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent 
//                               align="end" 
//                               className="bg-gray-800 border-gray-700 text-gray-200"
//                             >
//                               <DropdownMenuItem 
//                                 onClick={() => handleViewPublicListing(listing.id)}
//                                 className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
//                               >
//                                 <Eye className="h-4 w-4 mr-2" /> View Public Listing
//                               </DropdownMenuItem>
//                               <DropdownMenuItem 
//                                 onClick={() => handleEdit(listing.id)}
//                                 className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
//                               >
//                                 <Edit className="h-4 w-4 mr-2" /> Edit
//                               </DropdownMenuItem>
//                               {listing.status === 'Active' ? (
//                                 <DropdownMenuItem 
//                                   onClick={() => handleToggleStatus(listing.id, 'Active')}
//                                   className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
//                                 >
//                                   <PauseCircle className="h-4 w-4 mr-2" /> Pause
//                                 </DropdownMenuItem>
//                               ) : (
//                                 <DropdownMenuItem 
//                                   onClick={() => handleToggleStatus(listing.id, 'Paused')}
//                                   className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
//                                 >
//                                   <PlayCircle className="h-4 w-4 mr-2" /> Activate
//                                 </DropdownMenuItem>
//                               )}
//                               <DropdownMenuItem 
//                                 className="text-red-400 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer" 
//                                 onClick={() => handleDelete(listing.id)}
//                               >
//                                 <Trash2 className="h-4 w-4 mr-2" /> Delete
//                               </DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ManageListingsPage;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
import { Plus, Edit, Trash2, Eye, PauseCircle, PlayCircle, MoreHorizontal } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// Type definitions
interface Listing {
  id: string;
  productName: string;
  category: string;
  price: string;
  quantity: string;
  status: 'Active' | 'Paused' | 'Draft';
  views: number;
  offers: number;
  lastUpdated: string;
}

type StatusVariant = 'default' | 'outline' | 'secondary';

const ManageListingsPage: React.FC = () => {
  const router = useRouter();

  // Dummy data for seller listings
  const listings: Listing[] = [
    {
      id: 'LST-001',
      productName: 'High-Grade Steel Coils',
      category: 'Raw Materials',
      price: '₹55,000 / Ton',
      quantity: '100 Tons',
      status: 'Active',
      views: 1250,
      offers: 5,
      lastUpdated: '2024-07-20',
    },
    {
      id: 'LST-002',
      productName: 'Electronic Microcontrollers',
      category: 'Components',
      price: '₹120 / Unit',
      quantity: '5000 Units',
      status: 'Active',
      views: 890,
      offers: 12,
      lastUpdated: '2024-07-18',
    },
    {
      id: 'LST-003',
      productName: 'Industrial Bearings (SKF)',
      category: 'Machinery Parts',
      price: '₹800 / Piece',
      quantity: '500 Pieces',
      status: 'Paused',
      views: 340,
      offers: 2,
      lastUpdated: '2024-07-15',
    },
    {
      id: 'LST-004',
      productName: 'Plastic Granules (HDPE)',
      category: 'Raw Materials',
      price: '₹95 / Kg',
      quantity: '20 Tons',
      status: 'Draft',
      views: 0,
      offers: 0,
      lastUpdated: '2024-07-10',
    },
    {
      id: 'LST-005',
      productName: 'CNC Machine Spares',
      category: 'Machinery',
      price: '₹15,000 / Lot',
      quantity: '1 Lot',
      status: 'Active',
      views: 560,
      offers: 7,
      lastUpdated: '2024-07-05',
    },
  ];

  const getStatusVariant = (status: Listing['status']): StatusVariant => {
    switch (status) {
      case 'Active':
        return 'default'; // Will be styled as green
      case 'Paused':
        return 'outline'; // Will be styled as orange/yellow
      case 'Draft':
        return 'secondary'; // Will be styled as gray
      default:
        return 'default';
    }
  };

  const getStatusClasses = (status: Listing['status']): string => {
    switch (status) {
      case 'Active':
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
      case 'Paused':
        return 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30';
      case 'Draft':
        return 'bg-gray-900/30 text-gray-900 border border-gray-500/30';
      default:
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
    }
  };

  const handleEdit = (id: string): void => {
    console.log('Editing listing:', id);
    // In a real app, navigate to an edit listing page, pre-filling data
    router.push(`/seller/edit-listing/${id}`);
  };

  const handleToggleStatus = (id: string, currentStatus: Listing['status']): void => {
    console.log(`Toggling status for ${id} from ${currentStatus}`);
    // In a real app, dispatch Redux action or API call to update status
    alert(`Listing ${id} status toggled!`); // Replace with Shadcn Toast/Dialog
  };

  const handleDelete = (id: string): void => {
    if (window.confirm(`Are you sure you want to delete listing ${id}? This action cannot be undone.`)) { // Replace with Shadcn AlertDialog
      console.log('Deleting listing:', id);
      // In a real app, dispatch Redux action or API call to delete listing
      alert(`Listing ${id} deleted.`); // Replace with Shadcn Toast/Dialog
    }
  };

  const handleNavigateToNewListing = (): void => {
    router.push('/seller/list-new-item');
  };

  const handleViewPublicListing = (id: string): void => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <SellerSidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Manage Listings</h1>
            <p className="text-gray-800 text-base">View, edit, and manage your active, paused, and drafted inventory listings.</p>
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

        {/* Main Card */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="w-1 h-8 bg-green-500 rounded-full mr-3"></div>
                  Your Listings
                </CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  Manage all your product listings from one place
                </CardDescription>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 transition-colors duration-200"
                onClick={handleNavigateToNewListing}
              >
                <Plus className="h-4 w-4 mr-2" /> Add New Listing
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {listings.length === 0 ? (
              <div className="text-center py-12 text-gray-700">
                <p className="text-lg mb-4">You have no listings yet.</p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={handleNavigateToNewListing}
                >
                  Create Your First Listing
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-white hover:bg-slate-800/50">
                      <TableHead className="text-gray-900 font-semibold">Product Name</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Category</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Price</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Quantity</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Views</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Offers</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Last Updated</TableHead>
                      <TableHead className="text-right text-gray-900 font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listings.map((listing: Listing) => (
                      <TableRow key={listing.id} className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-medium text-gray-700">{listing.productName}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{listing.category}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{listing.price}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{listing.quantity}</TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClasses(listing.status)}`}>
                            {listing.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-700 text-sm">{listing.views}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{listing.offers}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{listing.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                className="h-8 w-8 p-0 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                              >
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="bg-white border-gray-200 text-gray-700"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleViewPublicListing(listing.id)}
                                className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                              >
                                <Eye className="h-4 w-4 mr-2" /> View Public Listing
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleEdit(listing.id)}
                                className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                              >
                                <Edit className="h-4 w-4 mr-2" /> Edit
                              </DropdownMenuItem>
                              {listing.status === 'Active' ? (
                                <DropdownMenuItem 
                                  onClick={() => handleToggleStatus(listing.id, 'Active')}
                                  className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                                >
                                  <PauseCircle className="h-4 w-4 mr-2" /> Pause
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem 
                                  onClick={() => handleToggleStatus(listing.id, 'Paused')}
                                  className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                                >
                                  <PlayCircle className="h-4 w-4 mr-2" /> Activate
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem 
                                className="text-red-600 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer" 
                                onClick={() => handleDelete(listing.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManageListingsPage;