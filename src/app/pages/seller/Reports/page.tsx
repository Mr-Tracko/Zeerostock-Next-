// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { BarChart, Download, DollarSign, Package, Eye, TrendingUp } from 'lucide-react';
// import SellerSidebar from "../../../components/SellerSidebar";

// // TypeScript interfaces
// interface SalesSummary {
//   totalRevenue: string;
//   totalOrders: number;
//   averageOrderValue: string;
//   conversionRate: string;
// }

// interface TopSellingItem {
//   id: string;
//   name: string;
//   revenue: string;
//   unitsSold: number;
// }

// interface InventoryOverview {
//   activeListings: number;
//   totalQuantityListed: string;
//   outOfStockItems: number;
//   draftListings: number;
// }

// type ReportPeriod = 'today' | 'last7days' | 'last30days' | 'thismonth' | 'thisyear';

// const SellerReportsPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy data for reports with proper typing
//   const salesSummary: SalesSummary = {
//     totalRevenue: '₹1,25,000',
//     totalOrders: 50,
//     averageOrderValue: '₹2,500',
//     conversionRate: '5.2%',
//   };

//   const topSellingItems: TopSellingItem[] = [
//     { id: 'item-1', name: 'High-Grade Steel Coils', revenue: '₹75,000', unitsSold: 15 },
//     { id: 'item-2', name: 'Electronic Microcontrollers', revenue: '₹20,000', unitsSold: 150 },
//     { id: 'item-3', name: 'Industrial Bearings', revenue: '₹15,000', unitsSold: 20 },
//   ];

//   const inventoryOverview: InventoryOverview = {
//     activeListings: 143,
//     totalQuantityListed: '500 Tons',
//     outOfStockItems: 5,
//     draftListings: 10,
//   };

//   const handleDownloadReport = (): void => {
//     console.log('Downloading report...');
//     // In a real app, this would trigger a download
//     alert('Report download started!');
//   };

//   const handlePeriodChange = (value: string): void => {
//     console.log('Selected period:', value);
//     // In a real app, this would update the data based on selected period
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
//                 <BarChart className="h-6 w-6 mr-2 text-green-400" /> Sales & Performance Reports
//               </CardTitle>
//               <CardDescription className="text-gray-300">
//                 Gain insights into your sales, inventory, and listing performance.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-xl font-semibold text-gray-200">Sales Summary</h3>
//                 <div className="flex items-center space-x-2">
//                   <Select defaultValue="last30days" onValueChange={handlePeriodChange}>
//                     <SelectTrigger className="w-[180px] rounded-md bg-gray-700 border-gray-600 text-gray-200">
//                       <SelectValue placeholder="Select period" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-gray-700 border-gray-600">
//                       <SelectItem value="today" className="text-gray-200 hover:bg-gray-600">Today</SelectItem>
//                       <SelectItem value="last7days" className="text-gray-200 hover:bg-gray-600">Last 7 Days</SelectItem>
//                       <SelectItem value="last30days" className="text-gray-200 hover:bg-gray-600">Last 30 Days</SelectItem>
//                       <SelectItem value="thismonth" className="text-gray-200 hover:bg-gray-600">This Month</SelectItem>
//                       <SelectItem value="thisyear" className="text-gray-200 hover:bg-gray-600">This Year</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <Button 
//                     variant="outline" 
//                     className="rounded-md border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white"
//                     onClick={handleDownloadReport}
//                   >
//                     <Download className="h-4 w-4 mr-2" /> Download Report
//                   </Button>
//                 </div>
//               </div>

//               {/* Sales Summary Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <Card className="rounded-lg shadow-sm bg-gray-700 border-gray-600">
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium text-gray-400">Total Revenue</CardTitle>
//                     <DollarSign className="h-5 w-5 text-green-400" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold text-gray-100">{salesSummary.totalRevenue}</div>
//                     <p className="text-xs text-gray-400">+10% from previous period</p>
//                   </CardContent>
//                 </Card>
//                 <Card className="rounded-lg shadow-sm bg-gray-700 border-gray-600">
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium text-gray-400">Total Orders</CardTitle>
//                     <Package className="h-5 w-5 text-blue-400" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold text-gray-100">{salesSummary.totalOrders}</div>
//                     <p className="text-xs text-gray-400">+5 new orders</p>
//                   </CardContent>
//                 </Card>
//                 <Card className="rounded-lg shadow-sm bg-gray-700 border-gray-600">
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium text-gray-400">Avg. Order Value</CardTitle>
//                     <TrendingUp className="h-5 w-5 text-purple-400" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold text-gray-100">{salesSummary.averageOrderValue}</div>
//                     <p className="text-xs text-gray-400">Stable</p>
//                   </CardContent>
//                 </Card>
//                 <Card className="rounded-lg shadow-sm bg-gray-700 border-gray-600">
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium text-gray-400">Conversion Rate</CardTitle>
//                     <Eye className="h-5 w-5 text-yellow-400" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold text-gray-100">{salesSummary.conversionRate}</div>
//                     <p className="text-xs text-gray-400">+0.5% from previous period</p>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Sales Trend Chart Placeholder */}
//               <Card className="p-6 rounded-lg shadow-sm mb-8 bg-gray-700 border-gray-600">
//                 <CardTitle className="text-lg font-semibold text-gray-100 mb-4">Sales Trend</CardTitle>
//                 <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-800 rounded-md border border-gray-600">
//                   [Line Chart: Sales over time]
//                 </div>
//               </Card>

//               {/* Top Selling Items */}
//               <Card className="p-6 rounded-lg shadow-sm mb-8 bg-gray-700 border-gray-600">
//                 <CardTitle className="text-lg font-semibold text-gray-100 mb-4">Top Selling Items</CardTitle>
//                 <div className="overflow-x-auto">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="border-gray-600 hover:bg-gray-600/50">
//                         <TableHead className="text-gray-300 font-semibold">Item Name</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Revenue</TableHead>
//                         <TableHead className="text-gray-300 font-semibold">Units Sold</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {topSellingItems.map((item) => (
//                         <TableRow key={item.id} className="border-gray-600 hover:bg-gray-600/30 transition-colors">
//                           <TableCell className="font-medium text-gray-200">{item.name}</TableCell>
//                           <TableCell className="text-gray-300">{item.revenue}</TableCell>
//                           <TableCell className="text-gray-300">{item.unitsSold}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </Card>

//               {/* Inventory Overview */}
//               <Card className="p-6 rounded-lg shadow-sm bg-gray-700 border-gray-600">
//                 <CardTitle className="text-lg font-semibold text-gray-100 mb-4">Inventory Overview</CardTitle>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <p className="text-gray-200">
//                       <strong className="text-gray-100">Active Listings:</strong> 
//                       <span className="ml-2">{inventoryOverview.activeListings}</span>
//                     </p>
//                     <p className="text-gray-200">
//                       <strong className="text-gray-100">Total Quantity Listed:</strong> 
//                       <span className="ml-2">{inventoryOverview.totalQuantityListed}</span>
//                     </p>
//                     <p className="text-gray-200">
//                       <strong className="text-gray-100">Out of Stock Items:</strong> 
//                       <span className="text-red-400 ml-2">{inventoryOverview.outOfStockItems}</span>
//                     </p>
//                     <p className="text-gray-200">
//                       <strong className="text-gray-100">Draft Listings:</strong> 
//                       <span className="ml-2">{inventoryOverview.draftListings}</span>
//                     </p>
//                   </div>
//                   <div className="h-48 flex items-center justify-center text-gray-400 bg-gray-800 rounded-md border border-gray-600">
//                     [Pie Chart: Inventory Status]
//                   </div>
//                 </div>
//               </Card>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerReportsPage;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { BarChart, Download, DollarSign, Package, Eye, TrendingUp } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// TypeScript interfaces
interface SalesSummary {
  totalRevenue: string;
  totalOrders: number;
  averageOrderValue: string;
  conversionRate: string;
}

interface TopSellingItem {
  id: string;
  name: string;
  revenue: string;
  unitsSold: number;
}

interface InventoryOverview {
  activeListings: number;
  totalQuantityListed: string;
  outOfStockItems: number;
  draftListings: number;
}

type ReportPeriod = 'today' | 'last7days' | 'last30days' | 'thismonth' | 'thisyear';

const SellerReportsPage: React.FC = () => {
  const router = useRouter();

  // Dummy data for reports with proper typing
  const salesSummary: SalesSummary = {
    totalRevenue: '₹1,25,000',
    totalOrders: 50,
    averageOrderValue: '₹2,500',
    conversionRate: '5.2%',
  };

  const topSellingItems: TopSellingItem[] = [
    { id: 'item-1', name: 'High-Grade Steel Coils', revenue: '₹75,000', unitsSold: 15 },
    { id: 'item-2', name: 'Electronic Microcontrollers', revenue: '₹20,000', unitsSold: 150 },
    { id: 'item-3', name: 'Industrial Bearings', revenue: '₹15,000', unitsSold: 20 },
  ];

  const inventoryOverview: InventoryOverview = {
    activeListings: 143,
    totalQuantityListed: '500 Tons',
    outOfStockItems: 5,
    draftListings: 10,
  };

  const handleDownloadReport = (): void => {
    console.log('Downloading report...');
    // In a real app, this would trigger a download
    alert('Report download started!');
  };

  const handlePeriodChange = (value: string): void => {
    console.log('Selected period:', value);
    // In a real app, this would update the data based on selected period
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Sales & Performance Reports</h1>
            <p className="text-gray-800 text-base">Gain insights into your sales, inventory, and listing performance.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=JS" alt="John Smith" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-gray-800 hidden sm:block">John Smith</span>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">Sales Summary</h3>
          <div className="flex items-center space-x-2">
            <Select defaultValue="last30days" onValueChange={handlePeriodChange}>
              <SelectTrigger className="w-[180px] rounded-md bg-white border-gray-300 text-gray-700">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="today" className="text-gray-700 hover:bg-gray-100">Today</SelectItem>
                <SelectItem value="last7days" className="text-gray-700 hover:bg-gray-100">Last 7 Days</SelectItem>
                <SelectItem value="last30days" className="text-gray-700 hover:bg-gray-100">Last 30 Days</SelectItem>
                <SelectItem value="thismonth" className="text-gray-700 hover:bg-gray-100">This Month</SelectItem>
                <SelectItem value="thisyear" className="text-gray-700 hover:bg-gray-100">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              className="rounded-md border-green-500 text-green-700 hover:bg-green-50 hover:text-green-800"
              onClick={handleDownloadReport}
            >
              <Download className="h-4 w-4 mr-2" /> Download Report
            </Button>
          </div>
        </div>

        {/* Sales Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Total Revenue</CardTitle>
              <DollarSign className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{salesSummary.totalRevenue}</div>
              <p className="text-xs text-gray-700">+10% from previous period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Total Orders</CardTitle>
              <Package className="h-6 w-6 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{salesSummary.totalOrders}</div>
              <p className="text-xs text-gray-700">+5 new orders</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Avg. Order Value</CardTitle>
              <TrendingUp className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{salesSummary.averageOrderValue}</div>
              <p className="text-xs text-gray-700">Stable</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Conversion Rate</CardTitle>
              <Eye className="h-6 w-6 text-lime-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">{salesSummary.conversionRate}</div>
              <p className="text-xs text-gray-700">+0.5% from previous period</p>
            </CardContent>
          </Card>
        </div>

        {/* Sales Trend Chart */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
            Sales Trend
          </CardTitle>
          <div className="h-64 flex items-center justify-center text-gray-600 bg-white rounded-md border border-green-500/20">
            <div className="text-center">
              <BarChart className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <p className="text-lg font-medium">Sales Trend Chart</p>
              <p className="text-sm text-gray-500">Interactive chart will be displayed here</p>
            </div>
          </div>
        </Card>

        {/* Top Selling Items and Inventory Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Top Selling Items</CardTitle>
            <div className="bg-white rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-white hover:bg-slate-800/50">
                    <TableHead className="text-gray-900 font-semibold">Item Name</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Revenue</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Units Sold</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSellingItems.map((item) => (
                    <TableRow key={item.id} className="border-slate-700 hover:bg-slate-800/50">
                      <TableCell className="font-medium text-gray-700">{item.name}</TableCell>
                      <TableCell className="text-gray-700 text-sm">{item.revenue}</TableCell>
                      <TableCell className="text-gray-700 text-sm">{item.unitsSold}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Inventory Overview</CardTitle>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 transition-colors">
                  <div>
                    <p className="font-medium text-gray-700 text-sm">Active Listings</p>
                    <p className="text-sm text-green-800 mt-1 font-semibold">{inventoryOverview.activeListings}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 transition-colors">
                  <div>
                    <p className="font-medium text-gray-700 text-sm">Total Quantity Listed</p>
                    <p className="text-sm text-green-800 mt-1 font-semibold">{inventoryOverview.totalQuantityListed}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 transition-colors">
                  <div>
                    <p className="font-medium text-gray-700 text-sm">Out of Stock Items</p>
                    <p className="text-sm text-red-600 mt-1 font-semibold">{inventoryOverview.outOfStockItems}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 transition-colors">
                  <div>
                    <p className="font-medium text-gray-700 text-sm">Draft Listings</p>
                    <p className="text-sm text-green-800 mt-1 font-semibold">{inventoryOverview.draftListings}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SellerReportsPage;