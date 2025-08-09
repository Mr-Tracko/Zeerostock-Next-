// 'use client';

// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Button } from '../../../components/ui/button';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import {
//   Users,
//   List,
//   AlertCircle,
//   DollarSign,
//   Plus,
//   CheckCircle,
//   BarChart2,
//   Settings
// } from 'lucide-react';
// import AdminSidebar from '../../../components/AdminSidebar';

// const AdminDashboardPage = () => {
//   const router = useRouter();

//   const adminStats = [
//     {
//       title: 'Total Users',
//       value: '12,847',
//       change: '+12% from last month',
//       icon: <Users className="h-6 w-6 text-blue-400" />,
//     },
//     {
//       title: 'Active Listings',
//       value: '3,254',
//       change: '+8% from last week',
//       icon: <List className="h-6 w-6 text-green-400" />,
//     },
//     {
//       title: 'Pending Verifications',
//       value: '127',
//       change: 'Requires attention',
//       icon: <AlertCircle className="h-6 w-6 text-red-400" />,
//     },
//     {
//       title: 'Monthly Revenue',
//       value: '₹24,580',
//       change: '+15% from last month',
//       icon: <DollarSign className="h-6 w-6 text-purple-400" />,
//     },
//   ];

//   const recentTransactions = [
//     { id: '#TXN-001', user: 'John Smith', amount: '₹150.00', status: 'Completed', date: '2024-01-15' },
//     { id: '#TXN-002', user: 'Sarah Johnson', amount: '₹75.50', status: 'Pending', date: '2024-01-14' },
//     { id: '#TXN-003', user: 'Mike Davis', amount: '₹220.00', status: 'Completed', date: '2024-01-14' },
//     { id: '#TXN-004', user: 'Priya Sharma', amount: '₹300.00', status: 'Completed', date: '2024-01-13' },
//     { id: '#TXN-005', user: 'Rahul Verma', amount: '₹120.00', status: 'Processing', date: '2024-01-13' },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-900 flex font-inter">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <AdminSidebar/>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 space-y-8">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
//             <p className="text-gray-400 text-base">Welcome back, Administrator. Here is your system overview.</p>
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

//         {/* System Status */}
//         <div className="bg-green-900/30 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
//           <span><span className="font-semibold text-green-300">System Status: All Systems Operational</span> - Platform running smoothly</span>
//           <CheckCircle className="h-5 w-5 text-green-400" />
//         </div>

//         {/* Dashboard Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {adminStats.map((stat, index) => (
//             <Card key={index} className="bg-slate-800 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
//                 {stat.icon}
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//                 <p className="text-xs text-gray-500">{stat.change}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Revenue Overview and Quick Actions */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
//           <Card className="bg-slate-800 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
//             <CardTitle className="text-lg font-semibold text-white mb-4 flex items-center">
//               <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
//               Revenue Overview
//             </CardTitle>
//             <div className="h-64 flex items-center justify-center text-gray-400 bg-slate-900 rounded-lg border border-slate-700">
//               <div className="text-center">
//                 <BarChart2 className="h-12 w-12 text-gray-500 mx-auto mb-2" />
//                 <p className="text-sm">Revenue Chart Placeholder</p>
//               </div>
//             </div>
//           </Card>

//           <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
//             <CardTitle className="text-lg font-semibold text-white mb-4">Quick Actions</CardTitle>
//             <div className="space-y-3">
//               <Button 
//                 className="w-full justify-start bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//                 onClick={() => router.push('/admin/user-management')}
//               >
//                 <Plus className="h-4 w-4 mr-2" /> Add New User
//               </Button>
//               <Button 
//                 className="w-full justify-start bg-green-900/30 hover:bg-green-900/50 text-green-400 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//                 onClick={() => router.push('/admin/verifications')}
//               >
//                 <CheckCircle className="h-4 w-4 mr-2" /> Review Verifications
//               </Button>
//               <Button 
//                 className="w-full justify-start bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//                 onClick={() => router.push('/admin/analytics')}
//               >
//                 <BarChart2 className="h-4 w-4 mr-2" /> View Analytics
//               </Button>
//               <Button 
//                 className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 border border-gray-600/30 hover:border-gray-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
//                 onClick={() => router.push('/admin/settings')}
//               >
//                 <Settings className="h-4 w-4 mr-2" /> System Settings
//               </Button>
//             </div>
//           </Card>
//         </div>

//         {/* Recent Transactions */}
//         <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6">
//           <div className="flex justify-between items-center mb-4">
//             <CardTitle className="text-lg font-semibold text-white">Recent Transactions</CardTitle>
//             <Button
//               variant="link"
//               className="text-green-400 hover:text-green-300 font-medium"
//               onClick={() => router.push('/admin/transactions')}
//             >
//               View All
//             </Button>
//           </div>
//           <div className="bg-slate-900 rounded-lg overflow-hidden">
//             <Table>
//               <TableHeader>
//                 <TableRow className="border-slate-700 hover:bg-slate-800/50">
//                   <TableHead className="text-gray-400 font-semibold w-32">Transaction ID</TableHead>
//                   <TableHead className="text-gray-400 font-semibold min-w-40">User</TableHead>
//                   <TableHead className="text-gray-400 font-semibold w-24 text-right">Amount</TableHead>
//                   <TableHead className="text-gray-400 font-semibold w-28 text-center">Status</TableHead>
//                   <TableHead className="text-gray-400 font-semibold w-28 text-right">Date</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {recentTransactions.map((txn) => (
//                   <TableRow key={txn.id} className="border-slate-700 hover:bg-slate-800/50 transition-colors">
//                     <TableCell className="font-medium text-green-400 text-sm font-mono">{txn.id}</TableCell>
//                     <TableCell className="text-gray-300 text-sm">{txn.user}</TableCell>
//                     <TableCell className="text-gray-300 text-sm text-right tabular-nums font-semibold">{txn.amount}</TableCell>
//                     <TableCell className="text-center">
//                       <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
//                         txn.status === 'Completed' 
//                           ? 'bg-green-900/30 text-green-400 border-green-500/30' :
//                         txn.status === 'Pending' 
//                           ? 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30' :
//                           'bg-blue-900/30 text-blue-400 border-blue-500/30'
//                       }`}>
//                         {txn.status}
//                       </span>
//                     </TableCell>
//                     <TableCell className="text-gray-300 text-sm text-right">{txn.date}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;

'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import {
  Users,
  List,
  AlertCircle,
  DollarSign,
  Plus,
  CheckCircle,
  BarChart2,
  Settings
} from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminDashboardPage = () => {
  const router = useRouter();

  const adminStats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12% from last month',
      icon: <Users className="h-6 w-6 text-green-400" />,
    },
    {
      title: 'Active Listings',
      value: '3,254',
      change: '+8% from last week',
      icon: <List className="h-6 w-6 text-emerald-400" />,
    },
    {
      title: 'Pending Verifications',
      value: '127',
      change: 'Requires attention',
      icon: <AlertCircle className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Monthly Revenue',
      value: '₹24,580',
      change: '+15% from last month',
      icon: <DollarSign className="h-6 w-6 text-lime-400" />,
    },
  ];

  const recentTransactions = [
    { id: '#TXN-001', user: 'John Smith', amount: '₹150.00', status: 'Completed', date: '2024-01-15' },
    { id: '#TXN-002', user: 'Sarah Johnson', amount: '₹75.50', status: 'Pending', date: '2024-01-14' },
    { id: '#TXN-003', user: 'Mike Davis', amount: '₹220.00', status: 'Completed', date: '2024-01-14' },
    { id: '#TXN-004', user: 'Priya Sharma', amount: '₹300.00', status: 'Completed', date: '2024-01-13' },
    { id: '#TXN-005', user: 'Rahul Verma', amount: '₹120.00', status: 'Processing', date: '2024-01-13' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <AdminSidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-800 text-base">Welcome back, Administrator. Here is your system overview.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=AD" alt="Admin User" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-white hidden sm:block">Admin User</span>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <span><span className="font-semibold text-green-800">System Status: All Systems Operational</span> - Platform running smoothly</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-bold text-gray-900">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-700 mb-1">{stat.value}</div>
                <p className="text-xs text-gray-700">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Overview and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg p-6 hover:border-green-500/30 transition-all">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Revenue Overview
            </CardTitle>
            <div className="h-64 flex items-center justify-center text-gray-400 bg-white rounded-lg border border-green-500/10">
              <div className="text-center">
                <BarChart2 className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <p className="text-sm text-gray-700">Revenue Chart Placeholder</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</CardTitle>
            <div className="space-y-3">
              <Button 
                className="w-full justify-start bg-white hover:bg-slate-750 text-gray-700 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => router.push('/admin/user-management')}
              >
                <Plus className="h-4 w-4 mr-2" /> Add New User
              </Button>
              <Button 
                className="w-full justify-start bg-white hover:bg-slate-750 text-gray-700 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => router.push('/admin/verifications')}
              >
                <CheckCircle className="h-4 w-4 mr-2" /> Review Verifications
              </Button>
              <Button 
                className="w-full justify-start bg-white hover:bg-slate-750 text-gray-700 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => router.push('/admin/analytics')}
              >
                <BarChart2 className="h-4 w-4 mr-2" /> View Analytics
              </Button>
              <Button 
                className="w-full justify-start bg-white hover:bg-slate-750 text-gray-700 border border-green-500/30 hover:border-green-500/50 rounded-lg py-3 text-sm font-medium transition-all" 
                onClick={() => router.push('/admin/settings')}
              >
                <Settings className="h-4 w-4 mr-2" /> System Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-gray-700">Recent Transactions</CardTitle>
            <Button
              variant="link"
              className="text-green-900 hover:text-green-300 font-medium"
              onClick={() => router.push('/admin/transactions')}
            >
              View All
            </Button>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-white hover:bg-slate-800/50">
                  <TableHead className="text-gray-900 font-semibold w-32">Transaction ID</TableHead>
                  <TableHead className="text-gray-900 font-semibold min-w-40">User</TableHead>
                  <TableHead className="text-gray-900 font-semibold w-24 text-right">Amount</TableHead>
                  <TableHead className="text-gray-900 font-semibold w-28 text-center">Status</TableHead>
                  <TableHead className="text-gray-900 font-semibold w-28 text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((txn) => (
                  <TableRow key={txn.id} className="border-slate-700 hover:bg-slate-800/50 transition-colors">
                    <TableCell className="font-medium text-gray-700 text-sm font-mono">{txn.id}</TableCell>
                    <TableCell className="text-gray-700 text-sm">{txn.user}</TableCell>
                    <TableCell className="text-gray-700 text-sm text-right tabular-nums font-semibold">{txn.amount}</TableCell>
                    <TableCell className="text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        txn.status === 'Completed' 
                          ? 'bg-green-900/30 text-green-900 border border-green-500/30' :
                        txn.status === 'Pending' 
                          ? 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30' :
                          'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30'
                      }`}>
                        {txn.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-700 text-sm text-right">{txn.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;