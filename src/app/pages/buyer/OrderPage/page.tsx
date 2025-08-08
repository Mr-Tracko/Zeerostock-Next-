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
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Processing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Shipped':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Cancelled':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
            <CardHeader className="pb-4 border-b border-gray-700">
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Package className="h-6 w-6 mr-2 text-green-400" /> My Orders
              </CardTitle>
              <CardDescription className="text-gray-300">
                View your complete order history and status.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {orders.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-lg mb-4">No orders found.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700 hover:bg-gray-700/50">
                        <TableHead className="text-gray-300 font-semibold w-32">Order ID</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-28">Date</TableHead>
                        <TableHead className="text-gray-300 font-semibold min-w-40">Item</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-20 text-center">Qty</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-24 text-right">Amount</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-28 text-center">Status</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-40 text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order: Order) => (
                        <TableRow key={order.id} className="border-gray-700 hover:bg-gray-700/30 transition-colors">
                          <TableCell className="font-medium text-green-400 font-mono">{order.id}</TableCell>
                          <TableCell className="text-gray-300 text-sm">{order.date}</TableCell>
                          <TableCell className="text-gray-300 max-w-0">
                            <div className="truncate pr-2" title={order.item}>
                              {order.item}
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-300 text-center font-medium">{order.quantity}</TableCell>
                          <TableCell className="text-gray-300 font-semibold text-right tabular-nums">{order.amount}</TableCell>
                          <TableCell className="text-center">
                            <Badge 
                              className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusBadgeClasses(order.status)}`}
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-300 hover:text-white hover:bg-gray-600 transition-colors px-2 py-1 text-xs"
                                onClick={() => handleViewOrderDetails(order.id)}
                              >
                                View Details
                              </Button>
                              {order.trackingId &&
                                order.status !== 'Completed' &&
                                order.status !== 'Cancelled' && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors px-2 py-1 text-xs"
                                    onClick={() => handleTrackOrder(order.trackingId!)}
                                  >
                                    <Truck className="h-3 w-3 mr-1" /> Track
                                  </Button>
                                )}
                              {order.status === 'Processing' && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors px-2 py-1 text-xs"
                                  onClick={() => handleCancelOrder(order.id)}
                                >
                                  <XCircle className="h-3 w-3 mr-1" /> Cancel
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
        </div>
      </div>
    </div>
  );
};

export default BuyerOrdersPage;