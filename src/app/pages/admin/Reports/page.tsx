// 'use client';

// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Button } from '../../../components/ui/button';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { BarChart, LineChart, PieChart, Download, Users, DollarSign, Package, TrendingUp, Activity, FileText } from 'lucide-react';
// import AdminSidebar from '../../../components/AdminSidebar';

// const AdminReportsPage = () => {
//   // Dummy data for various reports
//   const platformPerformance = {
//     totalUsers: '12,847',
//     activeUsers: '9,500',
//     newRegistrations: '500 (last 30 days)',
//     conversionRate: '5.2%',
//     totalListings: '3,254',
//     listingsApproved: '2,900',
//   };

//   const financialSummary = {
//     totalRevenue: '₹1,50,000',
//     totalPayouts: '₹1,20,000',
//     platformFees: '₹30,000',
//     pendingPayouts: '₹5,000',
//   };

//   const topCategoriesBySales = [
//     { name: 'Raw Materials', sales: '₹60,000', transactions: 150 },
//     { name: 'Components', sales: '₹40,000', transactions: 200 },
//     { name: 'Machinery', sales: '₹30,000', transactions: 50 },
//   ];

//   const recentUserActivity = [
//     { id: 1, user: 'John Smith (Buyer)', action: 'Viewed Product: Steel Coils', timestamp: '2024-07-25 10:00 AM' },
//     { id: 2, user: 'Ravi Kumar (Seller)', action: 'Updated Listing: CNC Spares', timestamp: '2024-07-25 09:30 AM' },
//     { id: 3, user: 'Priya Sharma (Buyer)', action: 'Placed Order: ORD-2024-006', timestamp: '2024-07-24 05:15 PM' },
//   ];

//   const handleDownloadReport = (reportType:string) => {
//     console.log(`Downloading ${reportType} report...`);
//     alert(`Simulating download for ${reportType} report.`);
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 flex font-inter">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <AdminSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 space-y-8">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-white mb-2">Comprehensive Reports</h1>
//             <p className="text-gray-400 text-base">Generate and analyze detailed reports on platform performance, financials, and user activity.</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800">
//               <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
//               </svg>
//             </Button>
//             <div className="flex items-center space-x-3">
//               <img src="https://placehold.co/40x40/3B82F6/FFFFFF?text=AD" alt="Admin User" className="h-10 w-10 rounded-full border-2 border-blue-500" />
//               <span className="font-semibold text-white hidden sm:block">Admin User</span>
//             </div>
//           </div>
//         </div>

//         {/* Platform Performance Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
//               <Users className="h-6 w-6 text-green-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-white mb-1">{platformPerformance.totalUsers}</div>
//               <p className="text-xs text-gray-500">Active: {platformPerformance.activeUsers}</p>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-400">New Registrations</CardTitle>
//               <TrendingUp className="h-6 w-6 text-green-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-white mb-1">{platformPerformance.newRegistrations}</div>
//               <p className="text-xs text-gray-500">Conversion Rate: {platformPerformance.conversionRate}</p>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-400">Total Listings</CardTitle>
//               <Package className="h-6 w-6 text-green-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-white mb-1">{platformPerformance.totalListings}</div>
//               <p className="text-xs text-gray-500">Approved: {platformPerformance.listingsApproved}</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Performance Report Download */}
//         <div className="flex justify-start">
//           <Button 
//             className="bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//             onClick={() => handleDownloadReport('Platform Performance')}
//           >
//             <Download className="h-4 w-4 mr-2" /> Download Performance Report
//           </Button>
//         </div>

//         {/* Financial Reports and Market Insights */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
//           <Card className="bg-slate-800 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
//             <CardTitle className="text-lg font-semibold text-white mb-4 flex items-center">
//               <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
//               Financial Reports
//             </CardTitle>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
//                 <div>
//                   <p className="text-sm font-medium text-gray-400">Total Platform Revenue</p>
//                   <p className="text-2xl font-bold text-green-400">{financialSummary.totalRevenue}</p>
//                 </div>
//                 <DollarSign className="h-8 w-8 text-green-400" />
//               </div>
//               <div className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
//                 <div>
//                   <p className="text-sm font-medium text-gray-400">Total Payouts to Sellers</p>
//                   <p className="text-2xl font-bold text-white">{financialSummary.totalPayouts}</p>
//                 </div>
//                 <DollarSign className="h-8 w-8 text-blue-400" />
//               </div>
//               <div className="pt-2">
//                 <Button 
//                   className="w-full justify-start bg-green-900/30 hover:bg-green-900/50 text-green-400 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//                   onClick={() => handleDownloadReport('Financial Summary')}
//                 >
//                   <Download className="h-4 w-4 mr-2" /> Download Financial Report
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
//             <CardTitle className="text-lg font-semibold text-white mb-4">Market Insights</CardTitle>
//             <div className="bg-slate-900 rounded-lg overflow-hidden">
//               <Table>
//                 <TableHeader>
//                   <TableRow className="border-slate-700 hover:bg-slate-800/50">
//                     <TableHead className="text-gray-400 font-semibold">Category</TableHead>
//                     <TableHead className="text-gray-400 font-semibold text-right">Sales</TableHead>
//                     <TableHead className="text-gray-400 font-semibold text-right">Txns</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {topCategoriesBySales.map((category, index) => (
//                     <TableRow key={index} className="border-slate-700 hover:bg-slate-800/50 transition-colors">
//                       <TableCell className="font-medium text-white text-sm">{category.name}</TableCell>
//                       <TableCell className="text-gray-300 text-sm text-right tabular-nums font-semibold">{category.sales}</TableCell>
//                       <TableCell className="text-gray-300 text-sm text-right tabular-nums">{category.transactions}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//             <div className="pt-4">
//               <Button 
//                 className="w-full justify-start bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//                 onClick={() => handleDownloadReport('Market Insights')}
//               >
//                 <Download className="h-4 w-4 mr-2" /> Download Market Insights Report
//               </Button>
//             </div>
//           </Card>
//         </div>

//         {/* User Activity Logs */}
//         <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
//           <div className="flex justify-between items-center mb-4">
//             <CardTitle className="text-lg font-semibold text-white">Recent User Activity Logs</CardTitle>
//             <Button
//               variant="link"
//               className="text-green-400 hover:text-green-300 font-medium"
//               onClick={() => console.log('View full activity logs')}
//             >
//               View All
//             </Button>
//           </div>
//           <div className="bg-slate-900 rounded-lg p-4">
//             <ul className="space-y-3">
//               {recentUserActivity.map(log => (
//                 <li key={log.id} className="flex items-start p-3 bg-slate-800 rounded-md border border-slate-700 hover:bg-slate-750 transition-colors">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-400 mt-2 mr-3"></div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-300">
//                       <span className="text-green-400">{log.user}</span>: <span className="text-white">{log.action}</span>
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="pt-4">
//             <Button 
//               className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 border border-gray-600/30 hover:border-gray-500/50 rounded-lg py-3 px-4 text-sm font-medium transition-all" 
//               onClick={() => handleDownloadReport('User Activity Logs')}
//             >
//               <Download className="h-4 w-4 mr-2" /> Download Activity Log
//             </Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminReportsPage;

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { BarChart, LineChart, PieChart, Download, Users, DollarSign, Package, TrendingUp, Activity, FileText, CheckCircle } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminReportsPage = () => {
  // Dummy data for various reports
  const platformPerformance = {
    totalUsers: '12,847',
    activeUsers: '9,500',
    newRegistrations: '500 (last 30 days)',
    conversionRate: '5.2%',
    totalListings: '3,254',
    listingsApproved: '2,900',
  };

  const financialSummary = {
    totalRevenue: '₹1,50,000',
    totalPayouts: '₹1,20,000',
    platformFees: '₹30,000',
    pendingPayouts: '₹5,000',
  };

  const topCategoriesBySales = [
    { name: 'Raw Materials', sales: '₹60,000', transactions: 150 },
    { name: 'Components', sales: '₹40,000', transactions: 200 },
    { name: 'Machinery', sales: '₹30,000', transactions: 50 },
  ];

  const recentUserActivity = [
    { id: 1, user: 'John Smith (Buyer)', action: 'Viewed Product: Steel Coils', timestamp: '2024-07-25 10:00 AM' },
    { id: 2, user: 'Ravi Kumar (Seller)', action: 'Updated Listing: CNC Spares', timestamp: '2024-07-25 09:30 AM' },
    { id: 3, user: 'Priya Sharma (Buyer)', action: 'Placed Order: ORD-2024-006', timestamp: '2024-07-24 05:15 PM' },
  ];

  const handleDownloadReport = (reportType: string) => {
    console.log(`Downloading ${reportType} report...`);
    alert(`Simulating download for ${reportType} report.`);
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Comprehensive Reports</h1>
            <p className="text-gray-800 text-base">Generate and analyze detailed reports on platform performance, financials, and user activity.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/3B82F6/FFFFFF?text=AD" alt="Admin User" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-white hidden sm:block">Admin User</span>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <span><span className="font-semibold text-green-800">System Status: Online</span> - All reporting services are operational and data is up to date</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        {/* Platform Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Total Users</CardTitle>
              <Users className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{platformPerformance.totalUsers}</div>
              <p className="text-xs text-gray-700">Active: {platformPerformance.activeUsers}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">New Registrations</CardTitle>
              <TrendingUp className="h-6 w-6 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{platformPerformance.newRegistrations}</div>
              <p className="text-xs text-gray-700">Conversion Rate: {platformPerformance.conversionRate}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Total Listings</CardTitle>
              <Package className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{platformPerformance.totalListings}</div>
              <p className="text-xs text-gray-700">Approved: {platformPerformance.listingsApproved}</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Report Download */}
        <div className="flex justify-start">
          <Button 
            className="bg-green-900/30 hover:bg-green-900/50 text-green-900 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
            onClick={() => handleDownloadReport('Platform Performance')}
          >
            <Download className="h-4 w-4 mr-2" /> Download Performance Report
          </Button>
        </div>

        {/* Financial Reports and Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Financial Reports
            </CardTitle>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 border border-green-500/10 hover:border-green-500/20 transition-all">
                <div>
                  <p className="text-sm font-medium text-gray-700">Total Platform Revenue</p>
                  <p className="text-2xl font-bold text-green-800">{financialSummary.totalRevenue}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 border border-green-500/10 hover:border-green-500/20 transition-all">
                <div>
                  <p className="text-sm font-medium text-gray-700">Total Payouts to Sellers</p>
                  <p className="text-2xl font-bold text-gray-700">{financialSummary.totalPayouts}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
              <div className="pt-2">
                <Button 
                  className="w-full justify-start bg-green-900/30 hover:bg-green-900/50 text-green-900 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                  onClick={() => handleDownloadReport('Financial Summary')}
                >
                  <Download className="h-4 w-4 mr-2" /> Download Financial Report
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-gray-700">Market Insights</CardTitle>
              <Button
                variant="link"
                className="text-green-900 hover:text-green-300 font-medium"
                onClick={() => console.log('View detailed market insights')}
              >
                View All
              </Button>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-white hover:bg-slate-800/50">
                    <TableHead className="text-gray-900 font-semibold">Category</TableHead>
                    <TableHead className="text-gray-900 font-semibold text-right">Sales</TableHead>
                    <TableHead className="text-gray-900 font-semibold text-right">Txns</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topCategoriesBySales.map((category, index) => (
                    <TableRow key={index} className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 text-sm">{category.name}</TableCell>
                      <TableCell className="text-gray-700 text-sm text-right tabular-nums font-semibold">{category.sales}</TableCell>
                      <TableCell className="text-gray-700 text-sm text-right tabular-nums">{category.transactions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="pt-4">
              <Button 
                className="w-full justify-start bg-green-900/30 hover:bg-green-900/50 text-green-900 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => handleDownloadReport('Market Insights')}
              >
                <Download className="h-4 w-4 mr-2" /> Download Market Insights Report
              </Button>
            </div>
          </Card>
        </div>

        {/* User Activity Logs */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Recent User Activity Logs</CardTitle>
            <Button
              variant="link"
              className="text-green-900 hover:text-green-300 font-medium"
              onClick={() => console.log('View full activity logs')}
            >
              View All
            </Button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3">
              {recentUserActivity.map(log => (
                <li key={log.id} className="flex items-start p-3 rounded-lg hover:bg-slate-750 border border-green-500/10 hover:border-green-500/20 transition-all">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-700">
                      <span className="text-green-800">{log.user}</span>: <span className="text-gray-700">{log.action}</span>
                    </p>
                    <p className="text-xs text-green-900 mt-1">{log.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <Button 
              className="bg-green-900/30 hover:bg-green-900/50 text-green-900 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 px-4 text-sm font-medium transition-all" 
              onClick={() => handleDownloadReport('User Activity Logs')}
            >
              <Download className="h-4 w-4 mr-2" /> Download Activity Log
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminReportsPage;