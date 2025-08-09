// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Badge } from '../../../components/ui/badge';
// import { Package, Truck, CheckCircle, XCircle, Info } from 'lucide-react';
// import BuyerSidebar from '../../../components/BuyerSidebar';

// // Type definitions
// interface Order {
//   id: string;
//   date: string;
//   item: string;
//   quantity: string;
//   amount: string;
//   status: 'Completed' | 'Processing' | 'Shipped' | 'Cancelled';
//   trackingId: string | null;
// }

// type OrderStatus = 'Completed' | 'Processing' | 'Shipped' | 'Cancelled';

// const BuyerOrdersPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy data for buyer orders
//   const orders: Order[] = [
//     {
//       id: 'ORD-2024-001',
//       date: '2024-07-20',
//       item: 'Electronic Components (Batch A)',
//       quantity: '5,000 units',
//       amount: '₹2,450',
//       status: 'Completed',
//       trackingId: 'TRK123456789',
//     },
//     {
//       id: 'ORD-2024-002',
//       date: '2024-07-18',
//       item: 'Industrial Bearings (SKF)',
//       quantity: '500 pieces',
//       amount: '₹1,890',
//       status: 'Processing',
//       trackingId: 'TRK987654321',
//     },
//     {
//       id: 'ORD-2024-003',
//       date: '2024-07-15',
//       item: 'High-Grade Steel Coils',
//       quantity: '10 tons',
//       amount: '₹55,000',
//       status: 'Shipped',
//       trackingId: 'TRK112233445',
//     },
//     {
//       id: 'ORD-2024-004',
//       date: '2024-07-10',
//       item: 'Plastic Granules (HDPE)',
//       quantity: '5 tons',
//       amount: '₹9,500',
//       status: 'Cancelled',
//       trackingId: null,
//     },
//   ];

//   const getStatusBadgeClasses = (status: OrderStatus): string => {
//     switch (status) {
//       case 'Completed':
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//       case 'Processing':
//         return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//       case 'Shipped':
//         return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//       case 'Cancelled':
//         return 'bg-red-500/20 text-red-400 border-red-500/30';
//       default:
//         return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//     }
//   };

//   const handleViewOrderDetails = (orderId: string): void => {
//     router.push(`/buyer/order-details/${orderId}`);
//   };

//   const handleTrackOrder = (trackingId: string): void => {
//     console.log('Track Order', trackingId);
//   };

//   const handleCancelOrder = (orderId: string): void => {
//     console.log('Cancel Order', orderId);
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <BuyerSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
//             <CardHeader className="pb-4 border-b border-gray-700">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <Package className="h-6 w-6 mr-2 text-green-400" /> My Orders
//               </CardTitle>
//               <CardDescription className="text-gray-300">
//                 View your complete order history and status.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               {orders.length === 0 ? (
//                 <div className="text-center py-12 text-gray-400">
//                   <p className="text-lg mb-4">No orders found.</p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="border-gray-700 hover:bg-gray-700/50">
//                         <TableHead className="text-gray-300 font-semibold w-32">Order ID</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-28">Date</TableHead>
//                         <TableHead className="text-gray-300 font-semibold min-w-40">Item</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-20 text-center">Qty</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-24 text-right">Amount</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-28 text-center">Status</TableHead>
//                         <TableHead className="text-gray-300 font-semibold w-40 text-center">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {orders.map((order: Order) => (
//                         <TableRow key={order.id} className="border-gray-700 hover:bg-gray-700/30 transition-colors">
//                           <TableCell className="font-medium text-green-400 font-mono">{order.id}</TableCell>
//                           <TableCell className="text-gray-300 text-sm">{order.date}</TableCell>
//                           <TableCell className="text-gray-300 max-w-0">
//                             <div className="truncate pr-2" title={order.item}>
//                               {order.item}
//                             </div>
//                           </TableCell>
//                           <TableCell className="text-gray-300 text-center font-medium">{order.quantity}</TableCell>
//                           <TableCell className="text-gray-300 font-semibold text-right tabular-nums">{order.amount}</TableCell>
//                           <TableCell className="text-center">
//                             <Badge 
//                               className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusBadgeClasses(order.status)}`}
//                             >
//                               {order.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell>
//                             <div className="flex justify-center gap-1">
//                               <Button
//                                 variant="ghost"
//                                 size="sm"
//                                 className="text-gray-300 hover:text-white hover:bg-gray-600 transition-colors px-2 py-1 text-xs"
//                                 onClick={() => handleViewOrderDetails(order.id)}
//                               >
//                                 View Details
//                               </Button>
//                               {order.trackingId &&
//                                 order.status !== 'Completed' &&
//                                 order.status !== 'Cancelled' && (
//                                   <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors px-2 py-1 text-xs"
//                                     onClick={() => handleTrackOrder(order.trackingId!)}
//                                   >
//                                     <Truck className="h-3 w-3 mr-1" /> Track
//                                   </Button>
//                                 )}
//                               {order.status === 'Processing' && (
//                                 <Button
//                                   variant="ghost"
//                                   size="sm"
//                                   className="text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors px-2 py-1 text-xs"
//                                   onClick={() => handleCancelOrder(order.id)}
//                                 >
//                                   <XCircle className="h-3 w-3 mr-1" /> Cancel
//                                 </Button>
//                               )}
//                             </div>
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

// export default BuyerOrdersPage;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Package, Truck, CheckCircle, XCircle, Info } from 'lucide-react';
import BuyerSidebar from '../../../components/BuyerSidebar';

// Type definitions
interface Order {
  id: string;
  date: string;
  item: string;
  quantity: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Shipped' | 'Cancelled';
  trackingId: string | null;
}

type OrderStatus = 'Completed' | 'Processing' | 'Shipped' | 'Cancelled';

const BuyerOrdersPage: React.FC = () => {
  const router = useRouter();

  // Dummy data for buyer orders
  const orders: Order[] = [
    {
      id: 'ORD-2024-001',
      date: '2024-07-20',
      item: 'Electronic Components (Batch A)',
      quantity: '5,000 units',
      amount: '₹2,450',
      status: 'Completed',
      trackingId: 'TRK123456789',
    },
    {
      id: 'ORD-2024-002',
      date: '2024-07-18',
      item: 'Industrial Bearings (SKF)',
      quantity: '500 pieces',
      amount: '₹1,890',
      status: 'Processing',
      trackingId: 'TRK987654321',
    },
    {
      id: 'ORD-2024-003',
      date: '2024-07-15',
      item: 'High-Grade Steel Coils',
      quantity: '10 tons',
      amount: '₹55,000',
      status: 'Shipped',
      trackingId: 'TRK112233445',
    },
    {
      id: 'ORD-2024-004',
      date: '2024-07-10',
      item: 'Plastic Granules (HDPE)',
      quantity: '5 tons',
      amount: '₹9,500',
      status: 'Cancelled',
      trackingId: null,
    },
  ];

  const getStatusBadgeClasses = (status: OrderStatus): string => {
    switch (status) {
      case 'Completed':
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
      case 'Processing':
        return 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30';
      case 'Shipped':
        return 'bg-blue-900/30 text-blue-900 border border-blue-500/30';
      case 'Cancelled':
        return 'bg-red-900/30 text-red-900 border border-red-500/30';
      default:
        return 'bg-gray-900/30 text-gray-900 border border-gray-500/30';
    }
  };

  const handleViewOrderDetails = (orderId: string): void => {
    router.push(`/buyer/order-details/${orderId}`);
  };

  const handleTrackOrder = (trackingId: string): void => {
    console.log('Track Order', trackingId);
  };

  const handleCancelOrder = (orderId: string): void => {
    console.log('Cancel Order', orderId);
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-800 text-base">View your complete order history and status.</p>
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

        {/* Orders Table Card */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <Package className="h-6 w-6 mr-3 text-green-500" />
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Order History
            </CardTitle>
            <CardDescription className="text-gray-700">
              Track and manage all your orders in one place.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {orders.length === 0 ? (
              <div className="text-center py-12 text-gray-700">
                <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg mb-4">No orders found.</p>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => router.push('/buyer/search')}
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-white hover:bg-slate-800/50">
                      <TableHead className="text-gray-900 font-semibold">Order ID</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Date</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Item</TableHead>
                      <TableHead className="text-gray-900 font-semibold text-center">Quantity</TableHead>
                      <TableHead className="text-gray-900 font-semibold text-right">Amount</TableHead>
                      <TableHead className="text-gray-900 font-semibold text-center">Status</TableHead>
                      <TableHead className="text-gray-900 font-semibold text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order: Order) => (
                      <TableRow key={order.id} className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                        <TableCell className="font-medium text-gray-700 font-mono">{order.id}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{order.date}</TableCell>
                        <TableCell className="text-gray-700">
                          <div className="max-w-xs truncate" title={order.item}>
                            {order.item}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700 text-center font-medium">{order.quantity}</TableCell>
                        <TableCell className="text-gray-700 font-semibold text-right">{order.amount}</TableCell>
                        <TableCell className="text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClasses(order.status)}`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-center gap-2 flex-wrap">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-700 hover:text-green-600 hover:bg-green-100 transition-colors text-xs px-2 py-1"
                              onClick={() => handleViewOrderDetails(order.id)}
                            >
                              <Info className="h-3 w-3 mr-1" />
                              Details
                            </Button>
                            {order.trackingId &&
                              order.status !== 'Completed' &&
                              order.status !== 'Cancelled' && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-700 hover:text-blue-600 hover:bg-blue-100 transition-colors text-xs px-2 py-1"
                                  onClick={() => handleTrackOrder(order.trackingId!)}
                                >
                                  <Truck className="h-3 w-3 mr-1" />
                                  Track
                                </Button>
                              )}
                            {order.status === 'Processing' && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-700 hover:text-red-600 hover:bg-red-100 transition-colors text-xs px-2 py-1"
                                onClick={() => handleCancelOrder(order.id)}
                              >
                                <XCircle className="h-3 w-3 mr-1" />
                                Cancel
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Total Orders</CardTitle>
              <Package className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{orders.length}</div>
              <p className="text-xs text-gray-700">All time orders</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Completed</CardTitle>
              <CheckCircle className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {orders.filter(order => order.status === 'Completed').length}
              </div>
              <p className="text-xs text-gray-700">Successfully delivered</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Processing</CardTitle>
              <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {orders.filter(order => order.status === 'Processing').length}
              </div>
              <p className="text-xs text-gray-700">Currently processing</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Shipped</CardTitle>
              <Truck className="h-6 w-6 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {orders.filter(order => order.status === 'Shipped').length}
              </div>
              <p className="text-xs text-gray-700">On the way</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrdersPage;