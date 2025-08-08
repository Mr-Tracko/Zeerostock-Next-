'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { ExternalLink, ShoppingCart, DollarSign, Eye, Search, CheckCircle } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
interface DashboardStat {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
}

interface RecentActivity {
  id: number;
  text: string;
  time: string;
}

interface RecentOrder {
  id: string;
  item: string;
  amount: string;
  status: 'Completed' | 'Processing';
}

interface SavedSearch {
  id: number;
  query: string;
  description: string;
}

interface WatchlistItem {
  id: number;
  name: string;
  price: string;
}

const BuyerDashboardPage: React.FC = () => {
  const router = useRouter();

  const dashboardStats: DashboardStat[] = [
    { title: 'Total Orders', value: '24', icon: <ShoppingCart className="h-6 w-6 text-green-400" />, change: '+5 since last month' },
    { title: 'Total Spent', value: '₹45,230', icon: <DollarSign className="h-6 w-6 text-emerald-400" />, change: '+10% since last month' },
    { title: 'Watchlist Items', value: '12', icon: <Eye className="h-6 w-6 text-green-500" />, change: '+2 new' },
    { title: 'Saved Searches', value: '8', icon: <Search className="h-6 w-6 text-lime-400" />, change: 'Updated recently' },
  ];

  const recentActivity: RecentActivity[] = [
    { id: 1, text: 'Order #ORD-2024-001 completed', time: '2 hours ago' },
    { id: 2, text: 'Added new item to watchlist', time: '3 hours ago' },
    { id: 3, text: 'Created new saved search', time: '1 day ago' },
  ];

  const recentOrders: RecentOrder[] = [
    { id: 'ORD-2024-001', item: 'Electronic Components', amount: '₹2,450', status: 'Completed' },
    { id: 'ORD-2024-002', item: 'Industrial Parts', amount: '₹1,890', status: 'Processing' },
  ];

  const savedSearches: SavedSearch[] = [
    { id: 1, query: 'Electronic Components', description: 'Capacitors, Resistors' },
    { id: 2, query: 'Industrial Motors', description: 'AC Motors, DC Motors' },
  ];

  const watchlistItems: WatchlistItem[] = [
    { id: 1, name: 'SMD Capacitors 1000pF', price: '₹0.05 each' },
    { id: 2, name: 'Industrial Servo Motor', price: '₹245.00 each' },
  ];

  const handleNavigation = (route: string): void => {
    router.push(route);
  };

  const handleRemoveFromWatchlist = (itemId: number): void => {
    console.log('Remove from watchlist', itemId);
  };

  const handleSearchNavigation = (query: string): void => {
    router.push(`/search-results?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-800 text-base">Welcome back, John. Here is what is happening with your account.</p>
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

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat: DashboardStat, index: number) => (
            <Card key={index} className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity and Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <Card className="bg-slate-800 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
            <CardTitle className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Recent Activity
            </CardTitle>
            <ul className="space-y-4">
              {recentActivity.map((activity: RecentActivity) => (
                <li key={activity.id} className="flex items-start p-2 rounded-lg hover:bg-slate-750 border border-green-500/10 hover:border-green-500/20 transition-all">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-gray-300 text-sm">{activity.text}</p>
                    <p className="text-xs text-green-400 mt-1">{activity.time}</p>
                  </div>
                </li>           
              ))}
            </ul>
          </Card>

          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-white">Recent Orders</CardTitle>
              <Button
                variant="link"
                className="text-green-400 hover:text-green-300 font-medium"
                onClick={() => handleNavigation('/buyer/my-orders')}
              >
                View All
              </Button>
            </div>
            <div className="bg-slate-900 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableHead className="text-gray-400 font-semibold">Order ID</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Item</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Amount</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order: RecentOrder) => (
                    <TableRow key={order.id} className="border-slate-700 hover:bg-slate-800/50">
                      <TableCell className="font-medium text-white text-sm">{order.id}</TableCell>
                      <TableCell className="text-gray-300 text-sm">{order.item}</TableCell>
                      <TableCell className="text-gray-300 text-sm">{order.amount}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Completed'
                            ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                            : 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30'
                          }`}>
                          {order.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Saved Searches and Watchlist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-white mb-4">Saved Searches</CardTitle>
            <ul className="space-y-4">
              {savedSearches.map((search: SavedSearch) => (
                <li key={search.id} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg hover:bg-slate-750 transition-colors">
                  <div>
                    <p className="font-medium text-white text-sm">{search.query}</p>
                    <p className="text-sm text-gray-400 mt-1">{search.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-slate-700"
                    onClick={() => handleSearchNavigation(search.query)}
                  >
                    <ExternalLink className="h-4 w-4 text-gray-400 hover:text-green-400" />
                  </Button>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-white mb-4">Watchlist</CardTitle>
            <ul className="space-y-4">
              {watchlistItems.map((item: WatchlistItem) => (
                <li key={item.id} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg hover:bg-slate-750 transition-colors">
                  <div>
                    <p className="font-medium text-white text-sm">{item.name}</p>
                    <p className="text-sm text-green-400 mt-1 font-semibold">{item.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-slate-700"
                    onClick={() => handleRemoveFromWatchlist(item.id)}
                  >
                    <svg className="h-4 w-4 text-red-400 hover:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboardPage;