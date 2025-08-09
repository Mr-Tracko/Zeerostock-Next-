// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Input } from '../../../components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { Badge } from '../../../components/ui/badge';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
// import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, CheckCircle, XCircle, Clock, List } from 'lucide-react';
// import AdminSidebar from '../../../components/AdminSidebar';

// const AdminListingsPage = () => {
//   const router = useRouter();

//   // Dummy data for listings
//   const [listings, setListings] = useState([
//     {
//       id: 'LST-001',
//       productName: 'High-Grade Steel Coils',
//       seller: 'MetalFab India',
//       category: 'Raw Materials',
//       status: 'Active',
//       reviewStatus: 'Approved',
//       postedDate: '2024-07-20',
//     },
//     {
//       id: 'LST-002',
//       productName: 'Electronic Microcontrollers',
//       seller: 'ElectroCorp Pvt Ltd',
//       category: 'Components',
//       status: 'Active',
//       reviewStatus: 'Approved',
//       postedDate: '2024-07-18',
//     },
//     {
//       id: 'LST-003',
//       productName: 'Industrial Bearings (SKF)',
//       seller: 'Precision Parts Co.',
//       category: 'Machinery Parts',
//       status: 'Paused',
//       reviewStatus: 'Approved',
//       postedDate: '2024-07-15',
//     },
//     {
//       id: 'LST-004',
//       productName: 'Plastic Granules (HDPE)',
//       seller: 'PolyChem Solutions',
//       category: 'Raw Materials',
//       status: 'Draft',
//       reviewStatus: 'Pending',
//       postedDate: '2024-07-10',
//     },
//     {
//       id: 'LST-005',
//       productName: 'CNC Machine Spares',
//       seller: 'MechTools India',
//       category: 'Machinery',
//       status: 'Active',
//       reviewStatus: 'Approved',
//       postedDate: '2024-07-05',
//     },
//     {
//       id: 'LST-006',
//       productName: 'Defective LED Displays',
//       seller: 'BrightTech Solutions',
//       category: 'Electronics',
//       status: 'Active',
//       reviewStatus: 'Rejected',
//       postedDate: '2024-07-01',
//     },
//     {
//       id: 'LST-007',
//       productName: 'Excess Copper Wire',
//       seller: 'Conductive Materials',
//       category: 'Raw Materials',
//       status: 'Pending Review',
//       reviewStatus: 'Pending',
//       postedDate: '2024-07-23',
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [filterReviewStatus, setFilterReviewStatus] = useState('all');

//   const categories = ['Raw Materials', 'Components', 'Machinery Parts', 'Electronics', 'Packaging', 'Chemicals'];

//   const filteredListings = listings.filter(listing => {
//     const matchesSearch = listing.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       listing.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       listing.id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = filterCategory === 'all' || listing.category.toLowerCase().replace(/\s/g, '-') === filterCategory;
//     const matchesStatus = filterStatus === 'all' || listing.status.toLowerCase() === filterStatus;
//     const matchesReviewStatus = filterReviewStatus === 'all' || listing.reviewStatus.toLowerCase() === filterReviewStatus;
//     return matchesSearch && matchesCategory && matchesStatus && matchesReviewStatus;
//   });

//   const getListingStatusBadgeClasses = (status:string) => {
//     switch (status) {
//       case 'Active': 
//         return 'bg-green-900/30 text-green-400 border-green-500/30';
//       case 'Paused': 
//         return 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30';
//       case 'Draft': 
//         return 'bg-gray-700/50 text-gray-400 border-gray-500/30';
//       case 'Pending Review': 
//         return 'bg-blue-900/30 text-blue-400 border-blue-500/30';
//       default: 
//         return 'bg-gray-700/50 text-gray-400 border-gray-500/30';
//     }
//   };

//   const getReviewStatusBadgeClasses = (status:string) => {
//     switch (status) {
//       case 'Approved': 
//         return 'bg-green-900/30 text-green-400 border-green-500/30';
//       case 'Pending': 
//         return 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30';
//       case 'Rejected': 
//         return 'bg-red-900/30 text-red-400 border-red-500/30';
//       default: 
//         return 'bg-gray-700/50 text-gray-400 border-gray-500/30';
//     }
//   };

//   const handleViewListing = (listingId:string) => {
//     console.log('Viewing public listing:', listingId);
//     router.push(`/product/${listingId}`);
//   };

//   const handleEditListing = (listingId:string) => {
//     console.log('Editing listing:', listingId);
//     router.push(`/admin/edit-listing/${listingId}`);
//   };

//   const handleApproveListing = (listingId:string) => {
//     console.log('Approving listing:', listingId);
//     setListings(prev => prev.map(l => l.id === listingId ? { ...l, reviewStatus: 'Approved', status: 'Active' } : l));
//     alert(`Listing ${listingId} approved and set to Active!`);
//   };

//   const handleRejectListing = (listingId:string) => {
//     console.log('Rejecting listing:', listingId);
//     setListings(prev => prev.map(l => l.id === listingId ? { ...l, reviewStatus: 'Rejected', status: 'Paused' } : l));
//     alert(`Listing ${listingId} rejected and set to Paused!`);
//   };

//   const handleDeleteListing = (listingId:string) => {
//     if (window.confirm(`Are you sure you want to delete listing ${listingId}? This action cannot be undone.`)) {
//       console.log('Deleting listing:', listingId);
//       setListings(prev => prev.filter(l => l.id !== listingId));
//       alert(`Listing ${listingId} deleted.`);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-slate-900 font-inter">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <AdminSidebar/>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
//             <CardHeader className="pb-4">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <List className="h-6 w-6 mr-2 text-green-400" /> All Listings
//               </CardTitle>
//               <CardDescription className="text-gray-400">
//                 Manage and moderate all product listings on the platform.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* Search and Filter Controls */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-6">
//                 <div className="relative flex-grow">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//                   <Input
//                     type="text"
//                     placeholder="Search by product, seller, or ID..."
//                     className="w-full pl-9 rounded-lg bg-slate-900 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 <Select value={filterCategory} onValueChange={setFilterCategory}>
//                   <SelectTrigger className="w-[180px] rounded-lg bg-slate-900 border-slate-600 text-white focus:border-green-500 focus:ring-green-500/20">
//                     <SelectValue placeholder="Filter by Category" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-slate-800 border-slate-600">
//                     <SelectItem value="all" className="text-white hover:bg-slate-700">All Categories</SelectItem>
//                     {categories.map(cat => (
//                       <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')} className="text-white hover:bg-slate-700">
//                         {cat}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <Select value={filterStatus} onValueChange={setFilterStatus}>
//                   <SelectTrigger className="w-[180px] rounded-lg bg-slate-900 border-slate-600 text-white focus:border-green-500 focus:ring-green-500/20">
//                     <SelectValue placeholder="Filter by Listing Status" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-slate-800 border-slate-600">
//                     <SelectItem value="all" className="text-white hover:bg-slate-700">All Statuses</SelectItem>
//                     <SelectItem value="active" className="text-white hover:bg-slate-700">Active</SelectItem>
//                     <SelectItem value="paused" className="text-white hover:bg-slate-700">Paused</SelectItem>
//                     <SelectItem value="draft" className="text-white hover:bg-slate-700">Draft</SelectItem>
//                     <SelectItem value="pending review" className="text-white hover:bg-slate-700">Pending Review</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Select value={filterReviewStatus} onValueChange={setFilterReviewStatus}>
//                   <SelectTrigger className="w-[180px] rounded-lg bg-slate-900 border-slate-600 text-white focus:border-green-500 focus:ring-green-500/20">
//                     <SelectValue placeholder="Filter by Review Status" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-slate-800 border-slate-600">
//                     <SelectItem value="all" className="text-white hover:bg-slate-700">All Review Statuses</SelectItem>
//                     <SelectItem value="approved" className="text-white hover:bg-slate-700">Approved</SelectItem>
//                     <SelectItem value="pending" className="text-white hover:bg-slate-700">Pending</SelectItem>
//                     <SelectItem value="rejected" className="text-white hover:bg-slate-700">Rejected</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {filteredListings.length === 0 ? (
//                 <div className="text-center py-12 text-gray-400">
//                   <p className="text-lg mb-4">No listings found matching your criteria.</p>
//                 </div>
//               ) : (
//                 <div className="bg-slate-900 rounded-lg overflow-hidden">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="border-slate-700 hover:bg-slate-800/50">
//                         <TableHead className="text-gray-300 font-semibold w-28">Listing ID</TableHead>
//                         <TableHead className="text-gray-300 font-semibold min-w-48">Product Name</TableHead>
//                         <TableHead className="text-gray-300 font-semibold min-w-40">Seller</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-32">Category</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-32 text-center">Listing Status</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-32 text-center">Review Status</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-28">Posted Date</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-20 text-center">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {filteredListings.map((listing) => (
//                         <TableRow key={listing.id} className="border-slate-700 hover:bg-slate-800/30 transition-colors">
//                           <TableCell className="font-medium text-green-400 font-mono text-sm">{listing.id}</TableCell>
//                           <TableCell className="text-gray-300 max-w-0">
//                             <div className="truncate pr-2" title={listing.productName}>
//                               {listing.productName}
//                             </div>
//                           </TableCell>
//                           <TableCell className="text-gray-300 text-sm">{listing.seller}</TableCell>
//                           <TableCell className="text-gray-300 text-sm">{listing.category}</TableCell>
//                           <TableCell className="text-center">
//                             <Badge className={`rounded-full px-3 py-1 text-xs font-medium border ${getListingStatusBadgeClasses(listing.status)}`}>
//                               {listing.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <Badge className={`rounded-full px-3 py-1 text-xs font-medium border ${getReviewStatusBadgeClasses(listing.reviewStatus)}`}>
//                               {listing.reviewStatus}
//                             </Badge>
//                           </TableCell>
//                           <TableCell className="text-gray-300 text-sm">{listing.postedDate}</TableCell>
//                           <TableCell className="text-center">
//                             <DropdownMenu>
//                               <DropdownMenuTrigger asChild>
//                                 <Button variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-slate-700">
//                                   <span className="sr-only">Open menu</span>
//                                   <MoreHorizontal className="h-4 w-4" />
//                                 </Button>
//                               </DropdownMenuTrigger>
//                               <DropdownMenuContent align="end" className="bg-slate-800 border-slate-600">
//                                 <DropdownMenuItem onClick={() => handleViewListing(listing.id)} className="text-gray-300 hover:bg-slate-700 hover:text-white">
//                                   <Eye className="h-4 w-4 mr-2" /> View Public Listing
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem onClick={() => handleEditListing(listing.id)} className="text-gray-300 hover:bg-slate-700 hover:text-white">
//                                   <Edit className="h-4 w-4 mr-2" /> Edit Listing
//                                 </DropdownMenuItem>
//                                 {listing.reviewStatus === 'Pending' && (
//                                   <>
//                                     <DropdownMenuItem onClick={() => handleApproveListing(listing.id)} className="text-green-400 hover:bg-slate-700 hover:text-green-300">
//                                       <CheckCircle className="h-4 w-4 mr-2" /> Approve
//                                     </DropdownMenuItem>
//                                     <DropdownMenuItem onClick={() => handleRejectListing(listing.id)} className="text-red-400 hover:bg-slate-700 hover:text-red-300">
//                                       <XCircle className="h-4 w-4 mr-2" /> Reject
//                                     </DropdownMenuItem>
//                                   </>
//                                 )}
//                                 <DropdownMenuItem className="text-red-400 hover:bg-slate-700 hover:text-red-300" onClick={() => handleDeleteListing(listing.id)}>
//                                   <Trash2 className="h-4 w-4 mr-2" /> Delete Listing
//                                 </DropdownMenuItem>
//                               </DropdownMenuContent>
//                             </DropdownMenu>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminListingsPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Badge } from '../../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, CheckCircle, XCircle, Clock, List } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminListingsPage = () => {
  const router = useRouter();

  // Dummy data for listings
  const [listings, setListings] = useState([
    {
      id: 'LST-001',
      productName: 'High-Grade Steel Coils',
      seller: 'MetalFab India',
      category: 'Raw Materials',
      status: 'Active',
      reviewStatus: 'Approved',
      postedDate: '2024-07-20',
    },
    {
      id: 'LST-002',
      productName: 'Electronic Microcontrollers',
      seller: 'ElectroCorp Pvt Ltd',
      category: 'Components',
      status: 'Active',
      reviewStatus: 'Approved',
      postedDate: '2024-07-18',
    },
    {
      id: 'LST-003',
      productName: 'Industrial Bearings (SKF)',
      seller: 'Precision Parts Co.',
      category: 'Machinery Parts',
      status: 'Paused',
      reviewStatus: 'Approved',
      postedDate: '2024-07-15',
    },
    {
      id: 'LST-004',
      productName: 'Plastic Granules (HDPE)',
      seller: 'PolyChem Solutions',
      category: 'Raw Materials',
      status: 'Draft',
      reviewStatus: 'Pending',
      postedDate: '2024-07-10',
    },
    {
      id: 'LST-005',
      productName: 'CNC Machine Spares',
      seller: 'MechTools India',
      category: 'Machinery',
      status: 'Active',
      reviewStatus: 'Approved',
      postedDate: '2024-07-05',
    },
    {
      id: 'LST-006',
      productName: 'Defective LED Displays',
      seller: 'BrightTech Solutions',
      category: 'Electronics',
      status: 'Active',
      reviewStatus: 'Rejected',
      postedDate: '2024-07-01',
    },
    {
      id: 'LST-007',
      productName: 'Excess Copper Wire',
      seller: 'Conductive Materials',
      category: 'Raw Materials',
      status: 'Pending Review',
      reviewStatus: 'Pending',
      postedDate: '2024-07-23',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterReviewStatus, setFilterReviewStatus] = useState('all');

  const categories = ['Raw Materials', 'Components', 'Machinery Parts', 'Electronics', 'Packaging', 'Chemicals'];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || listing.category.toLowerCase().replace(/\s/g, '-') === filterCategory;
    const matchesStatus = filterStatus === 'all' || listing.status.toLowerCase() === filterStatus;
    const matchesReviewStatus = filterReviewStatus === 'all' || listing.reviewStatus.toLowerCase() === filterReviewStatus;
    return matchesSearch && matchesCategory && matchesStatus && matchesReviewStatus;
  });

  const getListingStatusBadgeClasses = (status: string) => {
    switch (status) {
      case 'Active': 
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
      case 'Paused': 
        return 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30';
      case 'Draft': 
        return 'bg-gray-900/30 text-gray-900 border border-gray-500/30';
      case 'Pending Review': 
        return 'bg-blue-900/30 text-blue-900 border border-blue-500/30';
      default: 
        return 'bg-gray-900/30 text-gray-900 border border-gray-500/30';
    }
  };

  const getReviewStatusBadgeClasses = (status: string) => {
    switch (status) {
      case 'Approved': 
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
      case 'Pending': 
        return 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30';
      case 'Rejected': 
        return 'bg-red-900/30 text-red-900 border border-red-500/30';
      default: 
        return 'bg-gray-900/30 text-gray-900 border border-gray-500/30';
    }
  };

  const handleViewListing = (listingId: string) => {
    console.log('Viewing public listing:', listingId);
    router.push(`/product/${listingId}`);
  };

  const handleEditListing = (listingId: string) => {
    console.log('Editing listing:', listingId);
    router.push(`/admin/edit-listing/${listingId}`);
  };

  const handleApproveListing = (listingId: string) => {
    console.log('Approving listing:', listingId);
    setListings(prev => prev.map(l => l.id === listingId ? { ...l, reviewStatus: 'Approved', status: 'Active' } : l));
    alert(`Listing ${listingId} approved and set to Active!`);
  };

  const handleRejectListing = (listingId: string) => {
    console.log('Rejecting listing:', listingId);
    setListings(prev => prev.map(l => l.id === listingId ? { ...l, reviewStatus: 'Rejected', status: 'Paused' } : l));
    alert(`Listing ${listingId} rejected and set to Paused!`);
  };

  const handleDeleteListing = (listingId: string) => {
    if (window.confirm(`Are you sure you want to delete listing ${listingId}? This action cannot be undone.`)) {
      console.log('Deleting listing:', listingId);
      setListings(prev => prev.filter(l => l.id !== listingId));
      alert(`Listing ${listingId} deleted.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">All Listings</h1>
            <p className="text-gray-800 text-base">Manage and moderate all product listings on the platform.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=AS" alt="Admin" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-white hidden sm:block">Admin User</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600" />
                <Input
                  type="text"
                  placeholder="Search by product, seller, or ID..."
                  className="w-full pl-9 rounded-lg bg-white border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[180px] rounded-lg bg-white border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500/20">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem value="all" className="text-gray-900 hover:bg-gray-100">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')} className="text-gray-900 hover:bg-gray-100">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] rounded-lg bg-white border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500/20">
                  <SelectValue placeholder="Filter by Listing Status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem value="all" className="text-gray-900 hover:bg-gray-100">All Statuses</SelectItem>
                  <SelectItem value="active" className="text-gray-900 hover:bg-gray-100">Active</SelectItem>
                  <SelectItem value="paused" className="text-gray-900 hover:bg-gray-100">Paused</SelectItem>
                  <SelectItem value="draft" className="text-gray-900 hover:bg-gray-100">Draft</SelectItem>
                  <SelectItem value="pending review" className="text-gray-900 hover:bg-gray-100">Pending Review</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterReviewStatus} onValueChange={setFilterReviewStatus}>
                <SelectTrigger className="w-[180px] rounded-lg bg-white border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500/20">
                  <SelectValue placeholder="Filter by Review Status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem value="all" className="text-gray-900 hover:bg-gray-100">All Review Statuses</SelectItem>
                  <SelectItem value="approved" className="text-gray-900 hover:bg-gray-100">Approved</SelectItem>
                  <SelectItem value="pending" className="text-gray-900 hover:bg-gray-100">Pending</SelectItem>
                  <SelectItem value="rejected" className="text-gray-900 hover:bg-gray-100">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Listings Table */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
            Listings Management
          </CardTitle>

          {filteredListings.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              <p className="text-lg mb-4">No listings found matching your criteria.</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-white hover:bg-slate-800/50">
                    <TableHead className="text-gray-900 font-semibold w-28">Listing ID</TableHead>
                    <TableHead className="text-gray-900 font-semibold min-w-48">Product Name</TableHead>
                    <TableHead className="text-gray-900 font-semibold min-w-40">Seller</TableHead>
                    <TableHead className="text-gray-900 font-semibold w-32">Category</TableHead>
                    <TableHead className="text-gray-900 font-semibold w-32 text-center">Listing Status</TableHead>
                    <TableHead className="text-gray-900 font-semibold w-32 text-center">Review Status</TableHead>
                    <TableHead className="text-gray-900 font-semibold w-28">Posted Date</TableHead>
                    <TableHead className="text-gray-900 font-semibold w-20 text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredListings.map((listing) => (
                    <TableRow key={listing.id} className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                      <TableCell className="font-medium text-green-700 font-mono text-sm">{listing.id}</TableCell>
                      <TableCell className="text-gray-700 max-w-0">
                        <div className="truncate pr-2" title={listing.productName}>
                          {listing.productName}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-700 text-sm">{listing.seller}</TableCell>
                      <TableCell className="text-gray-700 text-sm">{listing.category}</TableCell>
                      <TableCell className="text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getListingStatusBadgeClasses(listing.status)}`}>
                          {listing.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getReviewStatusBadgeClasses(listing.reviewStatus)}`}>
                          {listing.reviewStatus}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-700 text-sm">{listing.postedDate}</TableCell>
                      <TableCell className="text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 text-gray-600 hover:text-gray-900 hover:bg-gray-200">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-white border-gray-300">
                            <DropdownMenuItem onClick={() => handleViewListing(listing.id)} className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              <Eye className="h-4 w-4 mr-2" /> View Public Listing
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditListing(listing.id)} className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              <Edit className="h-4 w-4 mr-2" /> Edit Listing
                            </DropdownMenuItem>
                            {listing.reviewStatus === 'Pending' && (
                              <>
                                <DropdownMenuItem onClick={() => handleApproveListing(listing.id)} className="text-green-600 hover:bg-gray-100 hover:text-green-700">
                                  <CheckCircle className="h-4 w-4 mr-2" /> Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleRejectListing(listing.id)} className="text-red-600 hover:bg-gray-100 hover:text-red-700">
                                  <XCircle className="h-4 w-4 mr-2" /> Reject
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem className="text-red-600 hover:bg-gray-100 hover:text-red-700" onClick={() => handleDeleteListing(listing.id)}>
                              <Trash2 className="h-4 w-4 mr-2" /> Delete Listing
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
        </Card>
      </div>
    </div>
  );
};

export default AdminListingsPage;