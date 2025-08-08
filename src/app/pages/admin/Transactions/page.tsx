'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Badge } from '../../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, DollarSign, MessageSquare, AlertCircle } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminTransactionsPage = () => {
  const router = useRouter();

  // Dummy data for transactions
  const [transactions, setTransactions] = useState([
    {
      id: 'TXN-001',
      orderId: 'ORD-2024-001',
      buyer: 'John Smith',
      seller: 'MetalFab India',
      amount: '₹55,000',
      status: 'Completed',
      type: 'Sale',
      date: '2024-07-20',
    },
    {
      id: 'TXN-002',
      orderId: 'ORD-2024-002',
      buyer: 'Priya Sharma',
      seller: 'ElectroCorp Pvt Ltd',
      amount: '₹12,000',
      status: 'Processing',
      type: 'Sale',
      date: '2024-07-18',
    },
    {
      id: 'TXN-003',
      orderId: 'ORD-2024-003',
      buyer: 'Rahul Verma',
      seller: 'Precision Parts Co.',
      amount: '₹4,000',
      status: 'Disputed',
      type: 'Sale',
      date: '2024-07-15',
    },
    {
      id: 'TXN-004',
      orderId: 'ORD-2024-004',
      buyer: 'Amit Patel',
      seller: 'PolyChem Solutions',
      amount: '₹9,500',
      status: 'Refunded',
      type: 'Sale',
      date: '2024-07-10',
    },
    {
      id: 'TXN-005',
      orderId: 'ORD-2024-005',
      buyer: 'Sneha Gupta',
      seller: 'MechTools India',
      amount: '₹15,000',
      status: 'Completed',
      type: 'Sale',
      date: '2024-07-05',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type.toLowerCase() === filterType;
    const matchesStatus = filterStatus === 'all' || transaction.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadgeClasses = (status:string) => {
    switch (status) {
      case 'Completed': 
        return 'bg-green-900/30 text-green-400 border-green-500/30';
      case 'Processing': 
        return 'bg-blue-900/30 text-blue-400 border-blue-500/30';
      case 'Disputed': 
        return 'bg-red-900/30 text-red-400 border-red-500/30';
      case 'Refunded': 
        return 'bg-orange-900/30 text-orange-400 border-orange-500/30';
      default: 
        return 'bg-gray-700/50 text-gray-400 border-gray-500/30';
    }
  };

  const handleViewTransactionDetails = (transactionId:string) => {
    console.log('Viewing transaction details for:', transactionId);
    router.push(`/admin/transaction-details/${transactionId}`);
  };

  const handleResolveDispute = (transactionId:string) => {
    console.log('Resolving dispute for transaction:', transactionId);
    alert(`Initiating dispute resolution for transaction ${transactionId}.`);
  };

  const handleProcessRefund = (transactionId:string) => {
    console.log('Processing refund for transaction:', transactionId);
    alert(`Processing refund for transaction ${transactionId}.`);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-inter flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <AdminSidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-green-400" /> Transaction Management
              </CardTitle>
              <CardDescription className="text-gray-400">
                Monitor all financial transactions and manage payment statuses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by user, order ID, or transaction ID..."
                    className="w-full pl-9 rounded-lg bg-slate-900 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[180px] rounded-lg bg-slate-900 border-slate-600 text-white focus:border-green-500 focus:ring-green-500/20">
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all" className="text-white hover:bg-slate-700">All Types</SelectItem>
                    <SelectItem value="sale" className="text-white hover:bg-slate-700">Sale</SelectItem>
                    <SelectItem value="refund" className="text-white hover:bg-slate-700">Refund</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px] rounded-lg bg-slate-900 border-slate-600 text-white focus:border-green-500 focus:ring-green-500/20">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all" className="text-white hover:bg-slate-700">All Statuses</SelectItem>
                    <SelectItem value="completed" className="text-white hover:bg-slate-700">Completed</SelectItem>
                    <SelectItem value="processing" className="text-white hover:bg-slate-700">Processing</SelectItem>
                    <SelectItem value="disputed" className="text-white hover:bg-slate-700">Disputed</SelectItem>
                    <SelectItem value="refunded" className="text-white hover:bg-slate-700">Refunded</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredTransactions.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-lg mb-4">No transactions found matching your criteria.</p>
                </div>
              ) : (
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700 hover:bg-slate-800/50">
                        <TableHead className="text-gray-300 font-semibold w-32">Transaction ID</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-32">Order ID</TableHead>
                        <TableHead className="text-gray-300 font-semibold min-w-36">Buyer</TableHead>
                        <TableHead className="text-gray-300 font-semibold min-w-40">Seller</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-24 text-right">Amount</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-28 text-center">Status</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-20 text-center">Type</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-28">Date</TableHead>
                        <TableHead className="text-gray-300 font-semibold w-20 text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransactions.map((transaction) => (
                        <TableRow key={transaction.id} className="border-slate-700 hover:bg-slate-800/30 transition-colors">
                          <TableCell className="font-medium text-green-400 font-mono text-sm">{transaction.id}</TableCell>
                          <TableCell>
                            <Link 
                              href={`/admin/order-details/${transaction.orderId}`} 
                              className="text-blue-400 hover:text-blue-300 hover:underline font-mono text-sm transition-colors"
                            >
                              {transaction.orderId}
                            </Link>
                          </TableCell>
                          <TableCell className="text-gray-300 text-sm">{transaction.buyer}</TableCell>
                          <TableCell className="text-gray-300 text-sm max-w-0">
                            <div className="truncate pr-2" title={transaction.seller}>
                              {transaction.seller}
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-300 text-sm text-right tabular-nums font-semibold">{transaction.amount}</TableCell>
                          <TableCell className="text-center">
                            <Badge className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusBadgeClasses(transaction.status)}`}>
                              {transaction.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-300 text-sm text-center">{transaction.type}</TableCell>
                          <TableCell className="text-gray-300 text-sm">{transaction.date}</TableCell>
                          <TableCell className="text-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-slate-700">
                                  <span className="sr-only">Open actions menu</span>
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="bg-slate-800 border-slate-600">
                                <DropdownMenuItem onClick={() => handleViewTransactionDetails(transaction.id)} className="text-gray-300 hover:bg-slate-700 hover:text-white">
                                  <Eye className="h-4 w-4 mr-2" /> View Details
                                </DropdownMenuItem>
                                {transaction.status === 'Disputed' && (
                                  <DropdownMenuItem onClick={() => handleResolveDispute(transaction.id)} className="text-orange-400 hover:bg-slate-700 hover:text-orange-300">
                                    <AlertCircle className="h-4 w-4 mr-2" /> Resolve Dispute
                                  </DropdownMenuItem>
                                )}
                                {transaction.status === 'Completed' && (
                                  <DropdownMenuItem onClick={() => handleProcessRefund(transaction.id)} className="text-red-400 hover:bg-slate-700 hover:text-red-300">
                                    <DollarSign className="h-4 w-4 mr-2" /> Process Refund
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={() => console.log('Message', transaction.buyer, transaction.seller)} className="text-blue-400 hover:bg-slate-700 hover:text-blue-300">
                                  <MessageSquare className="h-4 w-4 mr-2" /> Message Parties
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
    </div>
  );
};

export default AdminTransactionsPage;