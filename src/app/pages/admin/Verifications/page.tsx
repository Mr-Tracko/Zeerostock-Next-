// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Input } from '../../../components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { Badge } from '../../../components/ui/badge';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
// import { Search, Filter, MoreHorizontal, Eye, CheckCircle, XCircle, FileText, Clock, Info } from 'lucide-react'; // Icons
// import AdminSidebar from '../../../components/AdminSidebar';

// const AdminVerificationsPage = () => {
//   const router = useRouter();

//   // Dummy data for verification requests
//   const [verifications, setVerifications] = useState([
//     {
//       id: 'VER-001',
//       userId: 'USR-003',
//       userName: 'Priya Sharma',
//       userRole: 'Buyer',
//       documentType: 'GST Certificate',
//       status: 'Pending',
//       submissionDate: '2024-07-23',
//     },
//     {
//       id: 'VER-002',
//       userId: 'USR-008',
//       userName: 'Amit Patel',
//       userRole: 'Seller',
//       documentType: 'Company Registration',
//       status: 'Pending',
//       submissionDate: '2024-07-22',
//     },
//     {
//       id: 'VER-003',
//       userId: 'USR-005',
//       userName: 'Rahul Verma',
//       userRole: 'Buyer',
//       documentType: 'PAN Card',
//       status: 'Rejected',
//       submissionDate: '2024-07-20',
//     },
//     {
//       id: 'VER-004',
//       userId: 'USR-002',
//       userName: 'Ravi Kumar',
//       userRole: 'Seller',
//       documentType: 'Bank Details',
//       status: 'Approved',
//       submissionDate: '2024-07-18',
//     },
//     {
//       id: 'VER-005',
//       userId: 'USR-009',
//       userName: 'Sneha Gupta',
//       userRole: 'Seller',
//       documentType: 'Authorized Signatory Proof',
//       status: 'More Info Needed',
//       submissionDate: '2024-07-19',
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterRole, setFilterRole] = useState('all');
//   const [filterStatus, setFilterStatus] = useState('all');

//   const filteredVerifications = verifications.filter(verification => {
//     const matchesSearch = verification.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           verification.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           verification.documentType.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesRole = filterRole === 'all' || verification.userRole.toLowerCase() === filterRole;
//     const matchesStatus = filterStatus === 'all' || verification.status.toLowerCase() === filterStatus;
//     return matchesSearch && matchesRole && matchesStatus;
//   });

//   const getStatusBadgeVariant = (status:string) => {
//     switch (status) {
//       case 'Pending': return 'yellow';
//       case 'Approved': return 'green';
//       case 'Rejected': return 'red';
//       case 'More Info Needed': return 'orange'; // Custom color for this status
//       default: return 'secondary';
//     }
//   };

//   const handleViewDocument = (verificationId:string) => {
//     console.log('Viewing document for verification:', verificationId);
//     // In a real app, open a modal or new tab to view the uploaded document
//     alert(`Simulating document view for ${verificationId}.`); // Replace with actual document viewer
//   };

//   const handleApprove = (verificationId:string) => {
//     console.log('Approving verification:', verificationId);
//     setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'Approved' } : v));
//     alert(`Verification ${verificationId} approved!`);
//   };

//   const handleReject = (verificationId:string) => {
//     console.log('Rejecting verification:', verificationId);
//     setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'Rejected' } : v));
//     alert(`Verification ${verificationId} rejected!`);
//   };

//   const handleRequestMoreInfo = (verificationId:string) => {
//     console.log('Requesting more info for verification:', verificationId);
//     setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'More Info Needed' } : v));
//     alert(`Requested more info for verification ${verificationId}.`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <AdminSidebar/>
//       <div className="max-w-7xl mx-auto space-y-8">
//         <Card className="p-6 rounded-lg shadow-sm">
//           <CardHeader className="pb-4">
//             <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
//               <FileText className="h-6 w-6 mr-2" /> Verification Queue
//             </CardTitle>
//             <CardDescription className="text-gray-600">
//               Review and manage KYC/KYB verification requests from users.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             {/* Search and Filter Controls */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-6">
//               <div className="relative flex-grow">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//                 <Input
//                   type="text"
//                   placeholder="Search by user name, ID, or document type..."
//                   className="w-full pl-9 rounded-md"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               <Select value={filterRole} onValueChange={setFilterRole}>
//                 <SelectTrigger className="w-[180px] rounded-md">
//                   <SelectValue placeholder="Filter by User Role" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Roles</SelectItem>
//                   <SelectItem value="buyer">Buyer</SelectItem>
//                   <SelectItem value="seller">Seller</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Select value={filterStatus} onValueChange={setFilterStatus}>
//                 <SelectTrigger className="w-[180px] rounded-md">
//                   <SelectValue placeholder="Filter by Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Statuses</SelectItem>
//                   <SelectItem value="pending">Pending</SelectItem>
//                   <SelectItem value="approved">Approved</SelectItem>
//                   <SelectItem value="rejected">Rejected</SelectItem>
//                   <SelectItem value="more info needed">More Info Needed</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {filteredVerifications.length === 0 ? (
//               <div className="text-center py-12 text-gray-500">
//                 <p className="text-lg mb-4">No verification requests found matching your criteria.</p>
//               </div>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Request ID</TableHead>
//                     <TableHead>User</TableHead>
//                     <TableHead>Role</TableHead>
//                     <TableHead>Document Type</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Submission Date</TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredVerifications.map((verification) => (
//                     <TableRow key={verification.id}>
//                       <TableCell className="font-medium">{verification.id}</TableCell>
//                       <TableCell>{verification.userName} ({verification.userId})</TableCell>
//                       <TableCell>{verification.userRole}</TableCell>
//                       <TableCell>{verification.documentType}</TableCell>
//                       <TableCell>
//                         {/* <Badge variant={getStatusBadgeVariant(verification.status)} className="rounded-full px-2 py-1">
//                           {verification.status}
//                         </Badge> */}
//                       </TableCell>
//                       <TableCell>{verification.submissionDate}</TableCell>
//                       <TableCell className="text-right">
//                         <Button variant="ghost" size="sm" className="mr-2" onClick={() => handleViewDocument(verification.id)}>
//                           <Eye className="h-4 w-4 mr-1" /> View Doc
//                         </Button>
//                         {verification.status === 'Pending' || verification.status === 'More Info Needed' ? (
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" className="h-8 w-8 p-0">
//                                 <span className="sr-only">Open actions menu</span>
//                                 <MoreHorizontal className="h-4 w-4" />
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuItem onClick={() => handleApprove(verification.id)}>
//                                 <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> Approve
//                               </DropdownMenuItem>
//                               <DropdownMenuItem onClick={() => handleReject(verification.id)}>
//                                 <XCircle className="h-4 w-4 mr-2 text-red-600" /> Reject
//                               </DropdownMenuItem>
//                               <DropdownMenuItem onClick={() => handleRequestMoreInfo(verification.id)}>
//                                 <Info className="h-4 w-4 mr-2 text-orange-600" /> Request More Info
//                               </DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         ) : (
//                           <span className="text-gray-500 text-sm">No actions</span>
//                         )}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminVerificationsPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Badge } from '../../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, CheckCircle, XCircle, FileText, Clock, Info } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminVerificationsPage = () => {
  const router = useRouter();

  // Dummy data for verification requests
  const [verifications, setVerifications] = useState([
    {
      id: 'VER-001',
      userId: 'USR-003',
      userName: 'Priya Sharma',
      userRole: 'Buyer',
      documentType: 'GST Certificate',
      status: 'Pending',
      submissionDate: '2024-07-23',
    },
    {
      id: 'VER-002',
      userId: 'USR-008',
      userName: 'Amit Patel',
      userRole: 'Seller',
      documentType: 'Company Registration',
      status: 'Pending',
      submissionDate: '2024-07-22',
    },
    {
      id: 'VER-003',
      userId: 'USR-005',
      userName: 'Rahul Verma',
      userRole: 'Buyer',
      documentType: 'PAN Card',
      status: 'Rejected',
      submissionDate: '2024-07-20',
    },
    {
      id: 'VER-004',
      userId: 'USR-002',
      userName: 'Ravi Kumar',
      userRole: 'Seller',
      documentType: 'Bank Details',
      status: 'Approved',
      submissionDate: '2024-07-18',
    },
    {
      id: 'VER-005',
      userId: 'USR-009',
      userName: 'Sneha Gupta',
      userRole: 'Seller',
      documentType: 'Authorized Signatory Proof',
      status: 'More Info Needed',
      submissionDate: '2024-07-19',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredVerifications = verifications.filter(verification => {
    const matchesSearch = verification.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          verification.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          verification.documentType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || verification.userRole.toLowerCase() === filterRole;
    const matchesStatus = filterStatus === 'all' || verification.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Pending': return 'yellow';
      case 'Approved': return 'green';
      case 'Rejected': return 'red';
      case 'More Info Needed': return 'orange';
      default: return 'secondary';
    }
  };

  const handleViewDocument = (verificationId: string) => {
    console.log('Viewing document for verification:', verificationId);
    alert(`Simulating document view for ${verificationId}.`);
  };

  const handleApprove = (verificationId: string) => {
    console.log('Approving verification:', verificationId);
    setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'Approved' } : v));
    alert(`Verification ${verificationId} approved!`);
  };

  const handleReject = (verificationId: string) => {
    console.log('Rejecting verification:', verificationId);
    setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'Rejected' } : v));
    alert(`Verification ${verificationId} rejected!`);
  };

  const handleRequestMoreInfo = (verificationId: string) => {
    console.log('Requesting more info for verification:', verificationId);
    setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'More Info Needed' } : v));
    alert(`Requested more info for verification ${verificationId}.`);
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">
              Verification Queue
            </h1>
            <p className="text-gray-800 text-base">
              Review and manage KYC/KYB verification requests from users.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=AD" alt="Admin" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-gray-800 hidden sm:block">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg hover:border-green-500/30 transition-all">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search by user name, ID, or document type..."
                  className="w-full pl-9 rounded-md bg-white border-gray-300 text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterRole} onValueChange={setFilterRole}>
                <SelectTrigger className="w-[180px] rounded-md bg-white border-gray-300">
                  <SelectValue placeholder="Filter by User Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] rounded-md bg-white border-gray-300">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="more info needed">More Info Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Verification Table */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-gray-700 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Verification Requests
            </CardTitle>
          </div>
          
          {filteredVerifications.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg mb-4">No verification requests found matching your criteria.</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-white hover:bg-slate-800/50">
                    <TableHead className="text-gray-900 font-semibold">Request ID</TableHead>
                    <TableHead className="text-gray-900 font-semibold">User</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Role</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Document Type</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-900 font-semibold">Submission Date</TableHead>
                    <TableHead className="text-gray-900 font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVerifications.map((verification) => (
                    <TableRow key={verification.id} className="border-slate-700 hover:bg-slate-800/50">
                      <TableCell className="font-medium text-gray-700">{verification.id}</TableCell>
                      <TableCell className="text-gray-700 text-sm">
                        {verification.userName}
                        <br />
                        <span className="text-xs text-green-800">({verification.userId})</span>
                      </TableCell>
                      <TableCell className="text-gray-700 text-sm">{verification.userRole}</TableCell>
                      <TableCell className="text-gray-700 text-sm">{verification.documentType}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          verification.status === 'Approved'
                            ? 'bg-green-900/30 text-green-900 border border-green-500/30'
                            : verification.status === 'Pending'
                            ? 'bg-yellow-900/30 text-yellow-900 border border-yellow-500/30'
                            : verification.status === 'Rejected'
                            ? 'bg-red-900/30 text-red-900 border border-red-500/30'
                            : 'bg-orange-900/30 text-orange-900 border border-orange-500/30'
                        }`}>
                          {verification.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-700 text-sm">{verification.submissionDate}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-green-600 hover:text-green-800 hover:bg-green-100"
                            onClick={() => handleViewDocument(verification.id)}
                          >
                            <Eye className="h-4 w-4 mr-1" /> View
                          </Button>
                          {verification.status === 'Pending' || verification.status === 'More Info Needed' ? (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-green-100">
                                  <span className="sr-only">Open actions menu</span>
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="bg-white">
                                <DropdownMenuItem 
                                  onClick={() => handleApprove(verification.id)}
                                  className="hover:bg-green-50"
                                >
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleReject(verification.id)}
                                  className="hover:bg-red-50"
                                >
                                  <XCircle className="h-4 w-4 mr-2 text-red-600" /> Reject
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleRequestMoreInfo(verification.id)}
                                  className="hover:bg-orange-50"
                                >
                                  <Info className="h-4 w-4 mr-2 text-orange-600" /> Request More Info
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          ) : (
                            <span className="text-gray-500 text-xs">No actions</span>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Pending</CardTitle>
              <Clock className="h-6 w-6 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {verifications.filter(v => v.status === 'Pending').length}
              </div>
              <p className="text-xs text-gray-700">Awaiting review</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Approved</CardTitle>
              <CheckCircle className="h-6 w-6 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {verifications.filter(v => v.status === 'Approved').length}
              </div>
              <p className="text-xs text-gray-700">Successfully verified</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">Rejected</CardTitle>
              <XCircle className="h-6 w-6 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {verifications.filter(v => v.status === 'Rejected').length}
              </div>
              <p className="text-xs text-gray-700">Failed verification</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-900">More Info</CardTitle>
              <Info className="h-6 w-6 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {verifications.filter(v => v.status === 'More Info Needed').length}
              </div>
              <p className="text-xs text-gray-700">Additional details required</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminVerificationsPage;