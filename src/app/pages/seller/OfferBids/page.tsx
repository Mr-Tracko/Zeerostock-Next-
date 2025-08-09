// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Badge } from '../../../components/ui/badge';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/dialog';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { Check, X, Reply, DollarSign } from 'lucide-react';
// import SellerSidebar from "../../../components/SellerSidebar";

// // TypeScript interfaces
// interface Offer {
//   id: string;
//   listingId: string;
//   productName: string;
//   type: 'Offer' | 'Bid';
//   amount: string;
//   quantity: string;
//   status: 'Pending' | 'Accepted' | 'Rejected' | 'Countered';
//   date: string;
// }

// type ActionType = 'accept' | 'reject' | 'counter';
// type StatusVariant = 'yellow' | 'green' | 'red' | 'blue' | 'default';

// const OffersBidsPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy data for offers/bids with proper typing
//   const [offers, setOffers] = useState<Offer[]>([
//     {
//       id: 'OFF-001',
//       listingId: 'LST-001',
//       productName: 'High-Grade Steel Coils',
//       type: 'Offer',
//       amount: '₹52,000 / Ton',
//       quantity: '100 Tons',
//       status: 'Pending',
//       date: '2024-07-22',
//     },
//     {
//       id: 'BID-001',
//       listingId: 'LST-003',
//       productName: 'Industrial Bearings (SKF)',
//       type: 'Bid',
//       amount: '₹850 / Piece',
//       quantity: '500 Pieces',
//       status: 'Pending',
//       date: '2024-07-21',
//     },
//     {
//       id: 'OFF-002',
//       listingId: 'LST-002',
//       productName: 'Electronic Microcontrollers',
//       type: 'Offer',
//       amount: '₹110 / Unit',
//       quantity: '5000 Units',
//       status: 'Pending',
//       date: '2024-07-20',
//     },
//     {
//       id: 'OFF-003',
//       listingId: 'LST-005',
//       productName: 'CNC Machine Spares',
//       type: 'Offer',
//       amount: '₹14,000 / Lot',
//       quantity: '1 Lot',
//       status: 'Accepted',
//       date: '2024-07-19',
//     },
//     {
//       id: 'BID-002',
//       listingId: 'LST-001',
//       productName: 'High-Grade Steel Coils',
//       type: 'Bid',
//       amount: '₹53,000 / Ton',
//       quantity: '100 Tons',
//       status: 'Rejected',
//       date: '2024-07-18',
//     },
//   ]);

//   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
//   const [dialogAction, setDialogAction] = useState<ActionType | null>(null);
//   const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
//   const [counterAmount, setCounterAmount] = useState<string>('');

//   const getStatusVariant = (status: Offer['status']): StatusVariant => {
//     switch (status) {
//       case 'Pending':
//         return 'yellow';
//       case 'Accepted':
//         return 'green';
//       case 'Rejected':
//         return 'red';
//       case 'Countered':
//         return 'blue';
//       default:
//         return 'default';
//     }
//   };

//   const getStatusBadgeClasses = (status: Offer['status']): string => {
//     switch (status) {
//       case 'Pending':
//         return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//       case 'Accepted':
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//       case 'Rejected':
//         return 'bg-red-500/20 text-red-400 border-red-500/30';
//       case 'Countered':
//         return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//       default:
//         return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//     }
//   };

//   const handleAction = (action: ActionType, offer: Offer): void => {
//     setSelectedOffer(offer);
//     setDialogAction(action);
//     setIsDialogOpen(true);
//     if (action === 'counter') {
//       setCounterAmount(offer.amount.replace(/[^0-9.]/g, '')); // Pre-fill with current amount
//     }
//   };

//   const confirmAction = (): void => {
//     if (!selectedOffer || !dialogAction) return;

//     const updatedOffers = offers.map(o => {
//       if (o.id === selectedOffer.id) {
//         if (dialogAction === 'accept') {
//           return { ...o, status: 'Accepted' as const };
//         } else if (dialogAction === 'reject') {
//           return { ...o, status: 'Rejected' as const };
//         } else if (dialogAction === 'counter') {
//           const unit = selectedOffer.quantity.split(' ')[1];
//           return { 
//             ...o, 
//             status: 'Countered' as const, 
//             amount: `₹${parseFloat(counterAmount).toLocaleString('en-IN')} / ${unit}` 
//           };
//         }
//       }
//       return o;
//     });
//     setOffers(updatedOffers);

//     console.log(`${dialogAction} action confirmed for offer ${selectedOffer.id}`);
//     // In a real app, dispatch action or API call to update offer status
//     alert(`Offer ${selectedOffer.id} ${dialogAction}ed!`); // Replace with proper notification
//     setIsDialogOpen(false);
//     setSelectedOffer(null);
//     setCounterAmount('');
//   };

//   const handleNavigateToListing = (listingId: string): void => {
//     router.push(`/product/${listingId}`);
//   };

//   const handleNavigateToNewListing = (): void => {
//     router.push('/seller/list-new-item');
//   };

//   const handleNavigateToOrderDetails = (offerId: string): void => {
//     router.push(`/seller/order-details/${offerId}`);
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <SellerSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
//             <CardHeader className="pb-4 border-b border-gray-700">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <DollarSign className="h-6 w-6 mr-2 text-green-400" /> Offers & Bids
//               </CardTitle>
//               <CardDescription className="text-gray-300">
//                 Review and respond to offers and bids on your active listings.
//               </CardDescription>
//             </CardHeader>

//             <CardContent className="p-6">
//               {offers.length === 0 ? (
//                 <div className="text-center py-12 text-gray-400">
//                   <p className="text-lg mb-4">No offers or bids received yet.</p>
//                   <Button 
//                     onClick={handleNavigateToNewListing}
//                     className="bg-green-600 hover:bg-green-700 text-white"
//                   >
//                     List Your First Item
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="border-gray-700 hover:bg-gray-700/50">
//                         <TableHead className="text-gray-300 font-semibold">Product</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Type</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Amount</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Quantity</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Status</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Date</TableHead>
//                         <TableHead className="text-right text-gray-300 font-semibold">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {offers.map((offer) => (
//                         <TableRow key={offer.id} className="border-gray-700 hover:bg-gray-700/30 transition-colors">
//                           <TableCell className="font-medium">
//                             <button 
//                               onClick={() => handleNavigateToListing(offer.listingId)}
//                               className="text-green-400 hover:text-green-300 hover:underline transition-colors text-left"
//                             >
//                               {offer.productName}
//                             </button>
//                           </TableCell>
//                           <TableCell className="text-gray-300">{offer.type}</TableCell>
//                           <TableCell className="text-gray-300 font-semibold">{offer.amount}</TableCell>
//                           <TableCell className="text-gray-300">{offer.quantity}</TableCell>
//                           <TableCell>
//                             <Badge 
//                               className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusBadgeClasses(offer.status)}`}
//                             >
//                               {offer.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell className="text-gray-300">{offer.date}</TableCell>
//                           <TableCell className="text-right">
//                             {offer.status === 'Pending' && (
//                               <div className="flex justify-end gap-2">
//                                 <Button 
//                                   variant="ghost" 
//                                   size="sm" 
//                                   className="text-green-400 hover:text-green-300 hover:bg-green-500/10 transition-colors" 
//                                   onClick={() => handleAction('accept', offer)}
//                                 >
//                                   <Check className="h-4 w-4 mr-1" /> Accept
//                                 </Button>
//                                 <Button 
//                                   variant="ghost" 
//                                   size="sm" 
//                                   className="text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors" 
//                                   onClick={() => handleAction('reject', offer)}
//                                 >
//                                   <X className="h-4 w-4 mr-1" /> Reject
//                                 </Button>
//                                 <Button 
//                                   variant="ghost" 
//                                   size="sm" 
//                                   className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors" 
//                                   onClick={() => handleAction('counter', offer)}
//                                 >
//                                   <Reply className="h-4 w-4 mr-1" /> Counter
//                                 </Button>
//                               </div>
//                             )}
//                             {(offer.status === 'Accepted' || offer.status === 'Countered') && (
//                               <Button 
//                                 variant="ghost" 
//                                 size="sm" 
//                                 className="text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
//                                 onClick={() => handleNavigateToOrderDetails(offer.id)}
//                               >
//                                 View Order
//                               </Button>
//                             )}
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

//       {/* Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="bg-gray-800 border-gray-700 text-white">
//           <DialogHeader>
//             <DialogTitle className="text-white">
//               {dialogAction === 'accept' && 'Accept Offer'}
//               {dialogAction === 'reject' && 'Reject Offer'}
//               {dialogAction === 'counter' && 'Counter Offer'}
//             </DialogTitle>
//             <DialogDescription className="text-gray-300">
//               {dialogAction === 'accept' && 'Are you sure you want to accept this offer?'}
//               {dialogAction === 'reject' && 'Are you sure you want to reject this offer?'}
//               {dialogAction === 'counter' && 'Enter your counter offer amount.'}
//             </DialogDescription>
//           </DialogHeader>
          
//           {dialogAction === 'counter' && (
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="counter-amount" className="text-right text-gray-300">
//                   Amount
//                 </Label>
//                 <Input
//                   id="counter-amount"
//                   type="number"
//                   value={counterAmount}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCounterAmount(e.target.value)}
//                   className="col-span-3 bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
//                   placeholder="Enter counter amount"
//                 />
//               </div>
//             </div>
//           )}
          
//           <DialogFooter>
//             <Button 
//               variant="outline" 
//               onClick={() => setIsDialogOpen(false)}
//               className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
//             >
//               Cancel
//             </Button>
//             <Button 
//               onClick={confirmAction}
//               className={`
//                 ${dialogAction === 'accept' ? 'bg-green-600 hover:bg-green-700' : ''}
//                 ${dialogAction === 'reject' ? 'bg-red-600 hover:bg-red-700' : ''}
//                 ${dialogAction === 'counter' ? 'bg-blue-600 hover:bg-blue-700' : ''}
//                 text-white transition-colors
//               `}
//             >
//               {dialogAction === 'accept' && 'Accept Offer'}
//               {dialogAction === 'reject' && 'Reject Offer'}
//               {dialogAction === 'counter' && 'Send Counter Offer'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default OffersBidsPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/dialog';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Check, X, Reply, DollarSign, CheckCircle } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// TypeScript interfaces
interface Offer {
  id: string;
  listingId: string;
  productName: string;
  type: 'Offer' | 'Bid';
  amount: string;
  quantity: string;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Countered';
  date: string;
}

type ActionType = 'accept' | 'reject' | 'counter';
type StatusVariant = 'yellow' | 'green' | 'red' | 'blue' | 'default';

const OffersBidsPage: React.FC = () => {
  const router = useRouter();

  // Dummy data for offers/bids with proper typing
  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 'OFF-001',
      listingId: 'LST-001',
      productName: 'High-Grade Steel Coils',
      type: 'Offer',
      amount: '₹52,000 / Ton',
      quantity: '100 Tons',
      status: 'Pending',
      date: '2024-07-22',
    },
    {
      id: 'BID-001',
      listingId: 'LST-003',
      productName: 'Industrial Bearings (SKF)',
      type: 'Bid',
      amount: '₹850 / Piece',
      quantity: '500 Pieces',
      status: 'Pending',
      date: '2024-07-21',
    },
    {
      id: 'OFF-002',
      listingId: 'LST-002',
      productName: 'Electronic Microcontrollers',
      type: 'Offer',
      amount: '₹110 / Unit',
      quantity: '5000 Units',
      status: 'Pending',
      date: '2024-07-20',
    },
    {
      id: 'OFF-003',
      listingId: 'LST-005',
      productName: 'CNC Machine Spares',
      type: 'Offer',
      amount: '₹14,000 / Lot',
      quantity: '1 Lot',
      status: 'Accepted',
      date: '2024-07-19',
    },
    {
      id: 'BID-002',
      listingId: 'LST-001',
      productName: 'High-Grade Steel Coils',
      type: 'Bid',
      amount: '₹53,000 / Ton',
      quantity: '100 Tons',
      status: 'Rejected',
      date: '2024-07-18',
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogAction, setDialogAction] = useState<ActionType | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [counterAmount, setCounterAmount] = useState<string>('');

  const getStatusVariant = (status: Offer['status']): StatusVariant => {
    switch (status) {
      case 'Pending':
        return 'yellow';
      case 'Accepted':
        return 'green';
      case 'Rejected':
        return 'red';
      case 'Countered':
        return 'blue';
      default:
        return 'default';
    }
  };

  const getStatusBadgeClasses = (status: Offer['status']): string => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30';
      case 'Accepted':
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
      case 'Rejected':
        return 'bg-red-900/30 text-red-900 border border-red-500/30';
      case 'Countered':
        return 'bg-blue-900/30 text-blue-900 border border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 border border-gray-500/30';
    }
  };

  const handleAction = (action: ActionType, offer: Offer): void => {
    setSelectedOffer(offer);
    setDialogAction(action);
    setIsDialogOpen(true);
    if (action === 'counter') {
      setCounterAmount(offer.amount.replace(/[^0-9.]/g, '')); // Pre-fill with current amount
    }
  };

  const confirmAction = (): void => {
    if (!selectedOffer || !dialogAction) return;

    const updatedOffers = offers.map(o => {
      if (o.id === selectedOffer.id) {
        if (dialogAction === 'accept') {
          return { ...o, status: 'Accepted' as const };
        } else if (dialogAction === 'reject') {
          return { ...o, status: 'Rejected' as const };
        } else if (dialogAction === 'counter') {
          const unit = selectedOffer.quantity.split(' ')[1];
          return { 
            ...o, 
            status: 'Countered' as const, 
            amount: `₹${parseFloat(counterAmount).toLocaleString('en-IN')} / ${unit}` 
          };
        }
      }
      return o;
    });
    setOffers(updatedOffers);

    console.log(`${dialogAction} action confirmed for offer ${selectedOffer.id}`);
    // In a real app, dispatch action or API call to update offer status
    alert(`Offer ${selectedOffer.id} ${dialogAction}ed!`); // Replace with proper notification
    setIsDialogOpen(false);
    setSelectedOffer(null);
    setCounterAmount('');
  };

  const handleNavigateToListing = (listingId: string): void => {
    router.push(`/product/${listingId}`);
  };

  const handleNavigateToNewListing = (): void => {
    router.push('/seller/list-new-item');
  };

  const handleNavigateToOrderDetails = (offerId: string): void => {
    router.push(`/seller/order-details/${offerId}`);
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Offers & Bids</h1>
            <p className="text-gray-800 text-base">Review and respond to offers and bids on your active listings.</p>
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
          <span><span className="font-semibold text-green-800">KYC/KYB Status: Verified</span> - Your account is fully verified and ready for trading</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-green-400" /> Offers & Bids
            </CardTitle>
            <CardDescription className="text-gray-700">
              Review and respond to offers and bids on your active listings.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            {offers.length === 0 ? (
              <div className="text-center py-12 text-gray-700">
                <p className="text-lg mb-4">No offers or bids received yet.</p>
                <Button 
                  onClick={handleNavigateToNewListing}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  List Your First Item
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-white hover:bg-gray-50">
                      <TableHead className="text-gray-900 font-semibold">Product</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Type</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Amount</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Quantity</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Date</TableHead>
                      <TableHead className="text-right text-gray-900 font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {offers.map((offer) => (
                      <TableRow key={offer.id} className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                        <TableCell className="font-medium">
                          <button 
                            onClick={() => handleNavigateToListing(offer.listingId)}
                            className="text-green-600 hover:text-green-500 hover:underline transition-colors text-left"
                          >
                            {offer.productName}
                          </button>
                        </TableCell>
                        <TableCell className="text-gray-700">{offer.type}</TableCell>
                        <TableCell className="text-gray-700 font-semibold">{offer.amount}</TableCell>
                        <TableCell className="text-gray-700">{offer.quantity}</TableCell>
                        <TableCell>
                          <Badge 
                            className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusBadgeClasses(offer.status)}`}
                          >
                            {offer.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-700">{offer.date}</TableCell>
                        <TableCell className="text-right">
                          {offer.status === 'Pending' && (
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-green-600 hover:text-green-500 hover:bg-green-50 transition-colors" 
                                onClick={() => handleAction('accept', offer)}
                              >
                                <Check className="h-4 w-4 mr-1" /> Accept
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-600 hover:text-red-500 hover:bg-red-50 transition-colors" 
                                onClick={() => handleAction('reject', offer)}
                              >
                                <X className="h-4 w-4 mr-1" /> Reject
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-blue-600 hover:text-blue-500 hover:bg-blue-50 transition-colors" 
                                onClick={() => handleAction('counter', offer)}
                              >
                                <Reply className="h-4 w-4 mr-1" /> Counter
                              </Button>
                            </div>
                          )}
                          {(offer.status === 'Accepted' || offer.status === 'Countered') && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                              onClick={() => handleNavigateToOrderDetails(offer.id)}
                            >
                              View Order
                            </Button>
                          )}
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

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white border-gray-300 text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900">
              {dialogAction === 'accept' && 'Accept Offer'}
              {dialogAction === 'reject' && 'Reject Offer'}
              {dialogAction === 'counter' && 'Counter Offer'}
            </DialogTitle>
            <DialogDescription className="text-gray-700">
              {dialogAction === 'accept' && 'Are you sure you want to accept this offer?'}
              {dialogAction === 'reject' && 'Are you sure you want to reject this offer?'}
              {dialogAction === 'counter' && 'Enter your counter offer amount.'}
            </DialogDescription>
          </DialogHeader>
          
          {dialogAction === 'counter' && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="counter-amount" className="text-right text-gray-700">
                  Amount
                </Label>
                <Input
                  id="counter-amount"
                  type="number"
                  value={counterAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCounterAmount(e.target.value)}
                  className="col-span-3 bg-white border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter counter amount"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Cancel
            </Button>
            <Button 
              onClick={confirmAction}
              className={`
                ${dialogAction === 'accept' ? 'bg-green-600 hover:bg-green-700' : ''}
                ${dialogAction === 'reject' ? 'bg-red-600 hover:bg-red-700' : ''}
                ${dialogAction === 'counter' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                text-white transition-colors
              `}
            >
              {dialogAction === 'accept' && 'Accept Offer'}
              {dialogAction === 'reject' && 'Reject Offer'}
              {dialogAction === 'counter' && 'Send Counter Offer'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OffersBidsPage;