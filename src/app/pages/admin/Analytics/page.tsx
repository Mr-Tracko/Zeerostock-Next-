'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { BarChart2, LineChart, PieChart, Users, DollarSign, Package, TrendingUp, Download, Activity } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';


interface AdminSidebarProps {
  activeRoute: string;
}

const AdminAnalyticsPage = () => {
  // Dummy data for overview stats
  const overviewStats = {
    totalUsers: '12,847',
    activeUsers: '9,500',
    totalRevenue: '₹1,50,000',
    revenueGrowth: '+15% from last month',
    activeListings: '3,254',
    listingsGrowth: '+8% from last week',
    avgTransactionValue: '₹4,500',
    transactionStatus: 'Stable',
  };

  // Dummy data for analytics charts
  const chartData = {
    userGrowth: [
      { month: 'Jan', users: 8500 },
      { month: 'Feb', users: 9200 },
      { month: 'Mar', users: 10100 },
      { month: 'Apr', users: 11300 },
      { month: 'May', users: 12000 },
      { month: 'Jun', users: 12847 },
    ],
    categoryData: [
      { name: 'Raw Materials', value: 45, color: '#10B981' },
      { name: 'Components', value: 30, color: '#3B82F6' },
      { name: 'Machinery', value: 15, color: '#8B5CF6' },
      { name: 'Others', value: 10, color: '#F59E0B' },
    ]
  };

  // Dummy data for recent activity logs
  const recentActivityLogs = [
    { id: 1, type: 'User Registered', user: 'Rahul Sharma (Buyer)', details: 'New buyer registration completed', timestamp: '2024-07-25 10:30 AM' },
    { id: 2, type: 'Listing Approved', user: 'MetalFab India (Seller)', details: 'Steel Coils listing approved', timestamp: '2024-07-25 09:15 AM' },
    { id: 3, type: 'Order Completed', user: 'Priya Sharma (Buyer)', details: 'Order #ORD-2024-005 completed', timestamp: '2024-07-24 05:00 PM' },
    { id: 4, type: 'Verification Pending', user: 'Tech Innovators (Seller)', details: 'Document verification required', timestamp: '2024-07-24 02:45 PM' },
  ];

  const handleDownloadAnalytics = (analyticsType:string) => {
    console.log(`Downloading ${analyticsType} analytics...`);
    alert(`Simulating download for ${analyticsType} analytics.`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Platform Analytics</h1>
            <p className="text-gray-400 text-base">Comprehensive insights into platform performance, user engagement, and market trends.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/3B82F6/FFFFFF?text=AD" alt="Admin User" className="h-10 w-10 rounded-full border-2 border-blue-500" />
              <span className="font-semibold text-white hidden sm:block">Admin User</span>
            </div>
          </div>
        </div>

        {/* Analytics Period Selector */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Select defaultValue="last30days">
              <SelectTrigger className="w-[180px] bg-slate-800 border-slate-700 text-white rounded-lg">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="last7days">Last 7 Days</SelectItem>
                <SelectItem value="last30days">Last 30 Days</SelectItem>
                <SelectItem value="thismonth">This Month</SelectItem>
                <SelectItem value="thisyear">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
            onClick={() => handleDownloadAnalytics('Platform Analytics')}
          >
            <Download className="h-4 w-4 mr-2" /> Export Analytics Data
          </Button>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
              <Users className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{overviewStats.totalUsers}</div>
              <p className="text-xs text-gray-500">Active: {overviewStats.activeUsers}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Revenue</CardTitle>
              <DollarSign className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{overviewStats.totalRevenue}</div>
              <p className="text-xs text-gray-500">{overviewStats.revenueGrowth}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Listings</CardTitle>
              <Package className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{overviewStats.activeListings}</div>
              <p className="text-xs text-gray-500">{overviewStats.listingsGrowth}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Avg. Transaction Value</CardTitle>
              <TrendingUp className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{overviewStats.avgTransactionValue}</div>
              <p className="text-xs text-gray-500">{overviewStats.transactionStatus}</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-blue-500/20 rounded-xl shadow-lg p-6 hover:border-blue-500/30 transition-all">
            <CardTitle className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
              User Registration Trend
            </CardTitle>
            <div className="bg-slate-900 rounded-lg p-6">
              <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-slate-700 rounded-lg">
                <div className="text-center">
                  <LineChart className="h-12 w-12 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm">Line Chart: New User Registrations</p>
                  <p className="text-xs text-gray-500 mt-1">Monthly growth trend visualization</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                className="w-full justify-start bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => handleDownloadAnalytics('User Registration Trend')}
              >
                <Download className="h-4 w-4 mr-2" /> Download Trend Report
              </Button>
            </div>
          </Card>

          <Card className="bg-slate-800 border-purple-500/20 rounded-xl shadow-lg p-6 hover:border-purple-500/30 transition-all">
            <CardTitle className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="w-1 h-6 bg-purple-500 rounded-full mr-3"></div>
              Transaction Volume
            </CardTitle>
            <div className="bg-slate-900 rounded-lg p-6">
              <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-slate-700 rounded-lg">
                <div className="text-center">
                  <BarChart2 className="h-12 w-12 mx-auto mb-2 text-purple-400" />
                  <p className="text-sm">Bar Chart: Transactions per Month</p>
                  <p className="text-xs text-gray-500 mt-1">Volume analysis and trends</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                className="w-full justify-start bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => handleDownloadAnalytics('Transaction Volume')}
              >
                <Download className="h-4 w-4 mr-2" /> Download Volume Report
              </Button>
            </div>
          </Card>
        </div>

        {/* Category Distribution and Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
            <CardTitle className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Category Distribution
            </CardTitle>
            <div className="bg-slate-900 rounded-lg p-6">
              <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-slate-700 rounded-lg">
                <div className="text-center">
                  <PieChart className="h-12 w-12 mx-auto mb-2 text-green-400" />
                  <p className="text-sm">Pie Chart: Category Distribution</p>
                  <p className="text-xs text-gray-500 mt-1">Listing and sales breakdown</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                className="w-full justify-start bg-green-900/30 hover:bg-green-900/50 text-green-400 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => handleDownloadAnalytics('Category Distribution')}
              >
                <Download className="h-4 w-4 mr-2" /> Download Category Report
              </Button>
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-white mb-4">Performance Metrics</CardTitle>
            <div className="bg-slate-900 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableHead className="text-gray-400 font-semibold">Metric</TableHead>
                    <TableHead className="text-gray-400 font-semibold text-right">Value</TableHead>
                    <TableHead className="text-gray-400 font-semibold text-right">Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                    <TableCell className="font-medium text-white text-sm">Page Views</TableCell>
                    <TableCell className="text-gray-300 text-sm text-right tabular-nums font-semibold">45,239</TableCell>
                    <TableCell className="text-green-400 text-sm text-right tabular-nums">+12%</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                    <TableCell className="font-medium text-white text-sm">Session Duration</TableCell>
                    <TableCell className="text-gray-300 text-sm text-right tabular-nums font-semibold">8:45 min</TableCell>
                    <TableCell className="text-green-400 text-sm text-right tabular-nums">+5%</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                    <TableCell className="font-medium text-white text-sm">Bounce Rate</TableCell>
                    <TableCell className="text-gray-300 text-sm text-right tabular-nums font-semibold">32.4%</TableCell>
                    <TableCell className="text-red-400 text-sm text-right tabular-nums">-3%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="pt-4">
              <Button 
                className="w-full justify-start bg-orange-900/30 hover:bg-orange-900/50 text-orange-400 border border-orange-500/30 hover:border-orange-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => handleDownloadAnalytics('Performance Metrics')}
              >
                <Download className="h-4 w-4 mr-2" /> Download Metrics Report
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Activity Logs */}
        <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-white">Recent Activity Analytics</CardTitle>
            <Button
              variant="link"
              className="text-green-400 hover:text-green-300 font-medium"
              onClick={() => console.log('View full activity analytics')}
            >
              View All Analytics
            </Button>
          </div>
          <div className="bg-slate-900 rounded-lg p-4">
            <ul className="space-y-3">
              {recentActivityLogs.map(log => (
                <li key={log.id} className="flex items-start p-3 bg-slate-800 rounded-md border border-slate-700 hover:bg-slate-750 transition-colors">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-400 mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-300">
                      <span className="text-yellow-400">{log.type}</span>: <span className="text-green-400">{log.user}</span>
                    </p>
                    <p className="text-white text-sm mt-1">{log.details}</p>
                    <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
                  </div>
                  <Activity className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <Button 
              className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 border border-gray-600/30 hover:border-gray-500/50 rounded-lg py-3 px-4 text-sm font-medium transition-all" 
              onClick={() => handleDownloadAnalytics('Activity Analytics')}
            >
              <Download className="h-4 w-4 mr-2" /> Download Activity Analytics
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;