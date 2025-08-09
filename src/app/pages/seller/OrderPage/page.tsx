// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Badge } from '../../../components/ui/badge';
// import { Package, Truck, CheckCircle, MessageSquare } from 'lucide-react';
// import SellerSidebar from "../../../components/SellerSidebar";

// // TypeScript interfaces
// interface Order {
//   id: string;
//   orderDate: string;
//   productName: string;
//   quantity: string;
//   amount: string;
//   status: 'Processing' | 'Shipped' | 'Completed' | 'Cancelled';
//   trackingId: string | null;
// }

// type StatusVariant = 'blue' | 'purple' | 'green' | 'red' | 'default';
// type OrderStatus = Order['status'];

// const SellerOrdersPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy data for seller orders with proper typing
//   const orders: Order[] = [
//     {
//       id: 'SO-001',
//       orderDate: '2024-07-20',
//       productName: 'High-Grade Steel Coils',
//       quantity: '100 Tons',
//       amount: '₹55,000',
//       status: 'Processing',
//       trackingId: 'SHP123456789',
//     },
//     {
//       id: 'SO-002',
//       orderDate: '2024-07-19',
//       productName: 'CNC Machine Spares',
//       quantity: '1 Lot',
//       amount: '₹14,000',
//       status: 'Shipped',
//       trackingId: 'SHP987654321',
//     },
//     {
//       id: 'SO-003',
//       orderDate: '2024-07-15',
//       productName: 'Electronic Microcontrollers',
//       quantity: '5000 Units',
//       amount: '₹110 / Unit', // Note: Amount here might be per unit, total calculated on detail page
//       status: 'Completed',
//       trackingId: 'SHP112233445',
//     },
//     {
//       id: 'SO-004',
//       orderDate: '2024-07-10',
//       productName: 'Industrial Bearings (SKF)',
//       quantity: '500 Pieces',
//       amount: '₹850 / Piece', // Note: Amount here might be per unit, total calculated on detail page
//       status: 'Cancelled',
//       trackingId: null,
//     },
//   ];

//   const getStatusVariant = (status: OrderStatus): StatusVariant => {
//     switch (status) {
//       case 'Processing':
//         return 'blue';
//       case 'Shipped':
//         return 'purple';
//       case 'Completed':
//         return 'green';
//       case 'Cancelled':
//         return 'red';
//       default:
//         return 'default';
//     }
//   };

//   const getStatusBadgeClasses = (status: OrderStatus): string => {
//     switch (status) {
//       case 'Processing':
//         return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//       case 'Shipped':
//         return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//       case 'Completed':
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//       case 'Cancelled':
//         return 'bg-red-500/20 text-red-400 border-red-500/30';
//       default:
//         return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//     }
//   };

//   const handleUpdateStatus = (orderId: string, newStatus: OrderStatus): void => {
//     console.log(`Updating order ${orderId} to status: ${newStatus}`);
//     // In a real app, dispatch action or API call to update order status
//     alert(`Order ${orderId} status updated to ${newStatus}!`); // Replace with proper notification
//     // Update local state to reflect change (for demo purposes)
//     const updatedOrders = orders.map(order =>
//       order.id === orderId ? { ...order, status: newStatus } : order
//     );
//     // In a real app, you'd likely refetch data or dispatch an action to update global state
//     // For this static demo, we'll just log.
//   };

//   const handleViewOrderDetails = (orderId: string): void => {
//     router.push(`/seller/order-details/${orderId}`);
//   };

//   const handleNavigateToNewListing = (): void => {
//     router.push('/seller/list-new-item');
//   };

//   const handleMessageBuyer = (orderId: string): void => {
//     console.log('Message Buyer for order:', orderId);
//     // In a real app, this would open a messaging interface
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
//                 <Package className="h-6 w-6 mr-2 text-green-400" /> My Orders (Sales)
//               </CardTitle>
//               <CardDescription className="text-gray-300">
//                 Track and manage your sales orders.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               {orders.length === 0 ? (
//                 <div className="text-center py-12 text-gray-400">
//                   <p className="text-lg mb-4">You have no sales orders yet.</p>
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
//                         <TableHead className="text-gray-300 font-semibold">Order ID</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Order Date</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Product</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Quantity</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Amount</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Status</TableHead>
//                         <TableHead className="text-right text-gray-300 font-semibold">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {orders.map((order) => (
//                         <TableRow key={order.id} className="border-gray-700 hover:bg-gray-700/30 transition-colors">
//                           <TableCell className="font-medium text-green-400">{order.id}</TableCell>
//                           <TableCell className="text-gray-300">{order.orderDate}</TableCell>
//                           <TableCell className="text-gray-300">{order.productName}</TableCell>
//                           <TableCell className="text-gray-300">{order.quantity}</TableCell>
//                           <TableCell className="text-gray-300 font-semibold">{order.amount}</TableCell>
//                           <TableCell>
//                             <Badge 
//                               className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusBadgeClasses(order.status)}`}
//                             >
//                               {order.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell className="text-right">
//                             <div className="flex justify-end gap-2">
//                               <Button 
//                                 variant="ghost" 
//                                 size="sm" 
//                                 className="text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
//                                 onClick={() => handleViewOrderDetails(order.id)}
//                               >
//                                 View Details
//                               </Button>
//                               {order.status === 'Processing' && (
//                                 <Button 
//                                   variant="ghost" 
//                                   size="sm" 
//                                   className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors" 
//                                   onClick={() => handleUpdateStatus(order.id, 'Shipped')}
//                                 >
//                                   <Truck className="h-4 w-4 mr-1" /> Mark Shipped
//                                 </Button>
//                               )}
//                               {order.status === 'Shipped' && (
//                                 <Button 
//                                   variant="ghost" 
//                                   size="sm" 
//                                   className="text-green-400 hover:text-green-300 hover:bg-green-500/10 transition-colors" 
//                                   onClick={() => handleUpdateStatus(order.id, 'Completed')}
//                                 >
//                                   <CheckCircle className="h-4 w-4 mr-1" /> Mark Completed
//                                 </Button>
//                               )}
//                               <Button 
//                                 variant="ghost" 
//                                 size="sm" 
//                                 className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors" 
//                                 onClick={() => handleMessageBuyer(order.id)}
//                               >
//                                 <MessageSquare className="h-4 w-4" />
//                               </Button>
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

// export default SellerOrdersPage;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Package, Truck, CheckCircle, MessageSquare } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// TypeScript interfaces
interface Order {
  id: string;
  orderDate: string;
  productName: string;
  quantity: string;
  amount: string;
  status: 'Processing' | 'Shipped' | 'Completed' | 'Cancelled';
  trackingId: string | null;
}

type StatusVariant = 'blue' | 'purple' | 'green' | 'red' | 'default';
type OrderStatus = Order['status'];

const SellerOrdersPage: React.FC = () => {
  const router = useRouter();

  // Dummy data for seller orders with proper typing
  const orders: Order[] = [
    {
      id: 'SO-001',
      orderDate: '2024-07-20',
      productName: 'High-Grade Steel Coils',
      quantity: '100 Tons',
      amount: '₹55,000',
      status: 'Processing',
      trackingId: 'SHP123456789',
    },
    {
      id: 'SO-002',
      orderDate: '2024-07-19',
      productName: 'CNC Machine Spares',
      quantity: '1 Lot',
      amount: '₹14,000',
      status: 'Shipped',
      trackingId: 'SHP987654321',
    },
    {
      id: 'SO-003',
      orderDate: '2024-07-15',
      productName: 'Electronic Microcontrollers',
      quantity: '5000 Units',
      amount: '₹110 / Unit', // Note: Amount here might be per unit, total calculated on detail page
      status: 'Completed',
      trackingId: 'SHP112233445',
    },
    {
      id: 'SO-004',
      orderDate: '2024-07-10',
      productName: 'Industrial Bearings (SKF)',
      quantity: '500 Pieces',
      amount: '₹850 / Piece', // Note: Amount here might be per unit, total calculated on detail page
      status: 'Cancelled',
      trackingId: null,
    },
  ];

  const getStatusVariant = (status: OrderStatus): StatusVariant => {
    switch (status) {
      case 'Processing':
        return 'blue';
      case 'Shipped':
        return 'purple';
      case 'Completed':
        return 'green';
      case 'Cancelled':
        return 'red';
      default:
        return 'default';
    }
  };

  const getStatusBadgeClasses = (status: OrderStatus): string => {
    switch (status) {
      case 'Processing':
        return 'bg-blue-900/30 text-blue-900 border border-blue-500/30';
      case 'Shipped':
        return 'bg-purple-900/30 text-purple-900 border border-purple-500/30';
      case 'Completed':
        return 'bg-green-900/30 text-green-900 border border-green-500/30';
      case 'Cancelled':
        return 'bg-red-900/30 text-red-900 border border-red-500/30';
      default:
        return 'bg-gray-900/30 text-gray-900 border border-gray-500/30';
    }
  };

  const handleUpdateStatus = (orderId: string, newStatus: OrderStatus): void => {
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
    // In a real app, dispatch action or API call to update order status
    alert(`Order ${orderId} status updated to ${newStatus}!`); // Replace with proper notification
    // Update local state to reflect change (for demo purposes)
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    // In a real app, you'd likely refetch data or dispatch an action to update global state
    // For this static demo, we'll just log.
  };

  const handleViewOrderDetails = (orderId: string): void => {
    router.push(`/seller/order-details/${orderId}`);
  };

  const handleNavigateToNewListing = (): void => {
    router.push('/seller/list-new-item');
  };

  const handleMessageBuyer = (orderId: string): void => {
    console.log('Message Buyer for order:', orderId);
    // In a real app, this would open a messaging interface
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">My Orders (Sales)</h1>
            <p className="text-gray-800 text-base">Track and manage your sales orders.</p>
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
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <div className="w-1 h-8 bg-green-500 rounded-full mr-3"></div>
              <Package className="h-6 w-6 mr-2 text-green-500" />
              Sales Orders
            </CardTitle>
            <CardDescription className="text-gray-700 mt-2">
              Manage and track your sales orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12 text-gray-700">
                <p className="text-lg mb-4">You have no sales orders yet.</p>
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
                    <TableRow className="bg-white hover:bg-slate-800/50">
                      <TableHead className="text-gray-900 font-semibold">Order ID</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Order Date</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Product</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Quantity</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Amount</TableHead>
                      <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                      <TableHead className="text-right text-gray-900 font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-medium text-gray-700">{order.id}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{order.orderDate}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{order.productName}</TableCell>
                        <TableCell className="text-gray-700 text-sm">{order.quantity}</TableCell>
                        <TableCell className="text-gray-700 text-sm font-semibold">{order.amount}</TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClasses(order.status)}`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                              onClick={() => handleViewOrderDetails(order.id)}
                            >
                              View Details
                            </Button>
                            {order.status === 'Processing' && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-purple-700 hover:text-purple-900 hover:bg-purple-100 transition-colors" 
                                onClick={() => handleUpdateStatus(order.id, 'Shipped')}
                              >
                                <Truck className="h-4 w-4 mr-1" /> Mark Shipped
                              </Button>
                            )}
                            {order.status === 'Shipped' && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-green-700 hover:text-green-900 hover:bg-green-100 transition-colors" 
                                onClick={() => handleUpdateStatus(order.id, 'Completed')}
                              >
                                <CheckCircle className="h-4 w-4 mr-1" /> Mark Completed
                              </Button>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-colors" 
                              onClick={() => handleMessageBuyer(order.id)}
                            >
                              <MessageSquare className="h-4 w-4" />
                            </Button>
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
      </div>
    </div>
  );
};

export default SellerOrdersPage;