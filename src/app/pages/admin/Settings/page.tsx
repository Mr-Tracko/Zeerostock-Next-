// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { Button } from '../../../components/ui/button';
// import { Switch } from '../../../components/ui/switch';
// import { Separator } from '../../../components/ui/separator';
// import { Textarea } from '../../../components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
// import { Settings, List, DollarSign, Bell, Shield, Plus, Edit, Trash2 } from 'lucide-react';
// import AdminSidebar from '../../../components/AdminSidebar';

// const AdminSettingsPage = () => {
//   const router = useRouter();

//   // Dummy state for form fields
//   const [generalSettings, setGeneralSettings] = useState({
//     platformName: 'ZeeroStock',
//     contactEmail: 'admin@zeerostock.com',
//     supportPhone: '+91 8000 123456',
//   });

//   const [feeStructures, setFeeStructures] = useState({
//     commissionRate: 5, // percentage
//     listingFee: 100, // INR
//     paymentProcessingFee: 2.5, // percentage
//   });

//   const [notificationTemplates, setNotificationTemplates] = useState({
//     newOfferEmailSubject: 'New Offer Received on Your Listing',
//     newOfferEmailBody: 'Dear {sellerName}, you have received a new offer for your listing "{listingName}" from {buyerName}. Amount: {offerAmount}. View details on your dashboard.',
//     orderConfirmationEmailSubject: 'Your ZeeroStock Order Confirmation',
//     orderConfirmationEmailBody: 'Dear {userName}, your order {orderId} has been confirmed. Total: {totalAmount}.',
//   });

//   const [securitySettings, setSecuritySettings] = useState({
//     twoFactorAuthEnabled: true,
//     auditLoggingEnabled: true,
//   });

//   const [categories, setCategories] = useState([
//     { id: 1, name: 'Raw Materials', subcategories: ['Steel', 'Aluminum', 'Plastics'] },
//     { id: 2, name: 'Components', subcategories: ['Electronic Parts', 'Mechanical Parts'] },
//     { id: 3, name: 'Machinery', subcategories: ['CNC Machines', 'Lathes', 'Presses'] },
//   ]);
//   const [newCategoryName, setNewCategoryName] = useState('');
//   const [newSubcategoryName, setNewSubcategoryName] = useState('');
//   const [selectedCategoryForSub, setSelectedCategoryForSub] = useState('');

//   const handleGeneralSettingsSave = () => {
//     console.log('Saving general settings:', generalSettings);
//     alert('General settings updated successfully!');
//   };

//   const handleFeeStructuresSave = () => {
//     console.log('Saving fee structures:', feeStructures);
//     alert('Fee structures updated successfully!');
//   };

//   const handleNotificationTemplatesSave = () => {
//     console.log('Saving notification templates:', notificationTemplates);
//     alert('Notification templates updated successfully!');
//   };

//   const handleSecuritySettingsSave = () => {
//     console.log('Saving security settings:', securitySettings);
//     alert('Security settings updated successfully!');
//   };

//   const handleAddCategory = () => {
//     if (newCategoryName.trim()) {
//       setCategories(prev => [...prev, { id: Date.now(), name: newCategoryName.trim(), subcategories: [] }]);
//       setNewCategoryName('');
//       alert('Category added!');
//     }
//   };

//   const handleAddSubcategory = () => {
//     if (selectedCategoryForSub && newSubcategoryName.trim()) {
//       setCategories(prev =>
//         prev.map(cat =>
//           cat.name === selectedCategoryForSub
//             ? { ...cat, subcategories: [...cat.subcategories, newSubcategoryName.trim()] }
//             : cat
//         )
//       );
//       setNewSubcategoryName('');
//       alert('Subcategory added!');
//     }
//   };

//   const handleDeleteCategory = (id:string) => {
//     if (window.confirm('Are you sure you want to delete this category and all its subcategories?')) {
//       // setCategories(prev => prev.filter(cat => cat.id !== id));
//       alert('Category deleted!');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <AdminSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6 overflow-y-auto space-y-8">
//         <div className="max-w-4xl mx-auto space-y-8">
//           {/* Page Header */}
//           <div className="space-y-2">
//             <h1 className="text-3xl font-bold text-white flex items-center">
//               <Settings className="h-8 w-8 mr-3 text-green-400" /> System Settings
//             </h1>
//             <p className="text-green-100">Configure platform-wide settings and parameters.</p>
//           </div>

//           {/* General Settings */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <Settings className="h-5 w-5 mr-2 text-green-400" /> General Settings
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Configure basic platform information.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="platformName" className="text-green-200 font-medium">Platform Name</Label>
//                 <Input
//                   id="platformName"
//                   value={generalSettings.platformName}
//                   onChange={(e) => setGeneralSettings({ ...generalSettings, platformName: e.target.value })}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="contactEmail" className="text-green-200 font-medium">Contact Email</Label>
//                   <Input
//                     id="contactEmail"
//                     type="email"
//                     value={generalSettings.contactEmail}
//                     onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="supportPhone" className="text-green-200 font-medium">Support Phone</Label>
//                   <Input
//                     id="supportPhone"
//                     type="tel"
//                     value={generalSettings.supportPhone}
//                     onChange={(e) => setGeneralSettings({ ...generalSettings, supportPhone: e.target.value })}
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                   />
//                 </div>
//               </div>
//               <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleGeneralSettingsSave}>
//                 Save General Settings
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Category Management */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <List className="h-5 w-5 mr-2 text-green-400" /> Category Management
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Manage product categories and subcategories.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-6">
//               {/* Add New Category */}
//               <div className="flex items-end gap-4">
//                 <div className="flex-grow space-y-2">
//                   <Label htmlFor="newCategoryName" className="text-green-200 font-medium">New Category Name</Label>
//                   <Input
//                     id="newCategoryName"
//                     value={newCategoryName}
//                     onChange={(e) => setNewCategoryName(e.target.value)}
//                     placeholder="e.g., Industrial Chemicals"
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                   />
//                 </div>
//                 <Button onClick={handleAddCategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors">
//                   <Plus className="h-4 w-4 mr-2" /> Add Category
//                 </Button>
//               </div>

//               {/* Add New Subcategory */}
//               <div className="flex items-end gap-4">
//                 <div className="space-y-2 w-1/2">
//                   <Label htmlFor="selectCategoryForSub" className="text-green-200 font-medium">Select Parent Category</Label>
//                   <Select value={selectedCategoryForSub} onValueChange={setSelectedCategoryForSub}>
//                     <SelectTrigger id="selectCategoryForSub" className="bg-gray-700 border-gray-900/30 text-white rounded-md">
//                       <SelectValue placeholder="Select a category" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-gray-800 border-gray-700">
//                       {categories.map(cat => (
//                         <SelectItem key={cat.id} value={cat.name} className="text-white hover:bg-gray-700">{cat.name}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="flex-grow space-y-2 w-1/2">
//                   <Label htmlFor="newSubcategoryName" className="text-green-200 font-medium">New Subcategory Name</Label>
//                   <Input
//                     id="newSubcategoryName"
//                     value={newSubcategoryName}
//                     onChange={(e) => setNewSubcategoryName(e.target.value)}
//                     placeholder="e.g., Solvents"
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                   />
//                 </div>
//                 <Button onClick={handleAddSubcategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors">
//                   <Plus className="h-4 w-4 mr-2" /> Add Subcategory
//                 </Button>
//               </div>

//               {/* Existing Categories */}
//               <div className="space-y-4">
//                 <h4 className="font-semibold text-green-200">Existing Categories & Subcategories:</h4>
//                 {categories.length === 0 ? (
//                   <p className="text-green-100 text-sm">No categories defined yet.</p>
//                 ) : (
//                   <ul className="space-y-2">
//                     {categories.map(cat => (
//                       <li key={cat.id} className="border border-gray-700 p-3 rounded-md bg-gray-700/30">
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="font-medium text-white">{cat.name}</span>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
//                             // onClick={() => handleDeleteCategory(cat.id)}
//                           >
//                             <Trash2 className="h-4 w-4 mr-1" /> Delete Category
//                           </Button>
//                         </div>
//                         {cat.subcategories.length > 0 && (
//                           <ul className="list-disc list-inside ml-4 space-y-1 text-green-100 text-sm">
//                             {cat.subcategories.map(sub => (
//                               <li key={sub} className="flex justify-between items-center">
//                                 <span>{sub}</span>
//                                 <Button
//                                   variant="ghost"
//                                   size="sm"
//                                   className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
//                                   // onClick={() => handleDeleteSubcategory(cat.name, sub)}
//                                 >
//                                   <Trash2 className="h-3 w-3" />
//                                 </Button>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Fee Structures */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <DollarSign className="h-5 w-5 mr-2 text-green-400" /> Fee Structures
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Configure platform fees and commissions.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="commissionRate" className="text-green-200 font-medium">Commission Rate (%)</Label>
//                 <Input
//                   id="commissionRate"
//                   type="number"
//                   value={feeStructures.commissionRate}
//                   onChange={(e) => setFeeStructures({ ...feeStructures, commissionRate: parseFloat(e.target.value) })}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="listingFee" className="text-green-200 font-medium">Listing Fee (INR)</Label>
//                 <Input
//                   id="listingFee"
//                   type="number"
//                   value={feeStructures.listingFee}
//                   onChange={(e) => setFeeStructures({ ...feeStructures, listingFee: parseFloat(e.target.value) })}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="paymentProcessingFee" className="text-green-200 font-medium">Payment Processing Fee (%)</Label>
//                 <Input
//                   id="paymentProcessingFee"
//                   type="number"
//                   value={feeStructures.paymentProcessingFee}
//                   onChange={(e) => setFeeStructures({ ...feeStructures, paymentProcessingFee: parseFloat(e.target.value) })}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//               </div>
//               <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleFeeStructuresSave}>
//                 Save Fee Structures
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Notification Templates */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <Bell className="h-5 w-5 mr-2 text-green-400" /> Notification Templates
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Customize email notification templates.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="newOfferEmailSubject" className="text-green-200 font-medium">New Offer Email Subject</Label>
//                 <Input
//                   id="newOfferEmailSubject"
//                   value={notificationTemplates.newOfferEmailSubject}
//                   onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailSubject: e.target.value })}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="newOfferEmailBody" className="text-green-200 font-medium">New Offer Email Body</Label>
//                 <Textarea
//                   id="newOfferEmailBody"
//                   value={notificationTemplates.newOfferEmailBody}
//                   onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailBody: e.target.value })}
//                   rows={5}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//                 <p className="text-xs text-gray-400">Use {'{variables}'} like {'{sellerName}'}, {'{listingName}'}, {'{offerAmount}'}.</p>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="orderConfirmationEmailSubject" className="text-green-200 font-medium">Order Confirmation Email Subject</Label>
//                 <Input
//                   id="orderConfirmationEmailSubject"
//                   value={notificationTemplates.orderConfirmationEmailSubject}
//                   onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailSubject: e.target.value })}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="orderConfirmationEmailBody" className="text-green-200 font-medium">Order Confirmation Email Body</Label>
//                 <Textarea
//                   id="orderConfirmationEmailBody"
//                   value={notificationTemplates.orderConfirmationEmailBody}
//                   onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailBody: e.target.value })}
//                   rows={5}
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
//                 />
//                 <p className="text-xs text-gray-400">Use {'{variables}'} like {'{userName}'}, {'{orderId}'}, {'{totalAmount}'}.</p>
//               </div>
//               <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleNotificationTemplatesSave}>
//                 Save Notification Templates
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Security Settings */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <Shield className="h-5 w-5 mr-2 text-green-400" /> Security Settings
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Configure security and audit settings.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="twoFactorAuthEnabled" className="text-green-200 font-medium">Two-Factor Authentication (2FA) for Admins</Label>
//                 <Switch
//                   id="twoFactorAuthEnabled"
//                   checked={securitySettings.twoFactorAuthEnabled}
//                   onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuthEnabled: checked })}
//                   className="data-[state=checked]:bg-green-600"
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="auditLoggingEnabled" className="text-green-200 font-medium">Audit Logging</Label>
//                 <Switch
//                   id="auditLoggingEnabled"
//                   checked={securitySettings.auditLoggingEnabled}
//                   onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, auditLoggingEnabled: checked })}
//                   className="data-[state=checked]:bg-green-600"
//                 />
//               </div>
//               <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleSecuritySettingsSave}>
//                 Save Security Settings
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSettingsPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Switch } from '../../../components/ui/switch';
import { Separator } from '../../../components/ui/separator';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Settings, List, DollarSign, Bell, Shield, Plus, Edit, Trash2, CheckCircle } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminSettingsPage = () => {
  const router = useRouter();

  // Dummy state for form fields
  const [generalSettings, setGeneralSettings] = useState({
    platformName: 'ZeeroStock',
    contactEmail: 'admin@zeerostock.com',
    supportPhone: '+91 8000 123456',
  });

  const [feeStructures, setFeeStructures] = useState({
    commissionRate: 5, // percentage
    listingFee: 100, // INR
    paymentProcessingFee: 2.5, // percentage
  });

  const [notificationTemplates, setNotificationTemplates] = useState({
    newOfferEmailSubject: 'New Offer Received on Your Listing',
    newOfferEmailBody: 'Dear {sellerName}, you have received a new offer for your listing "{listingName}" from {buyerName}. Amount: {offerAmount}. View details on your dashboard.',
    orderConfirmationEmailSubject: 'Your ZeeroStock Order Confirmation',
    orderConfirmationEmailBody: 'Dear {userName}, your order {orderId} has been confirmed. Total: {totalAmount}.',
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuthEnabled: true,
    auditLoggingEnabled: true,
  });

  const [categories, setCategories] = useState([
    { id: 1, name: 'Raw Materials', subcategories: ['Steel', 'Aluminum', 'Plastics'] },
    { id: 2, name: 'Components', subcategories: ['Electronic Parts', 'Mechanical Parts'] },
    { id: 3, name: 'Machinery', subcategories: ['CNC Machines', 'Lathes', 'Presses'] },
  ]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSubcategoryName, setNewSubcategoryName] = useState('');
  const [selectedCategoryForSub, setSelectedCategoryForSub] = useState('');

  const handleGeneralSettingsSave = () => {
    console.log('Saving general settings:', generalSettings);
    alert('General settings updated successfully!');
  };

  const handleFeeStructuresSave = () => {
    console.log('Saving fee structures:', feeStructures);
    alert('Fee structures updated successfully!');
  };

  const handleNotificationTemplatesSave = () => {
    console.log('Saving notification templates:', notificationTemplates);
    alert('Notification templates updated successfully!');
  };

  const handleSecuritySettingsSave = () => {
    console.log('Saving security settings:', securitySettings);
    alert('Security settings updated successfully!');
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      setCategories(prev => [...prev, { id: Date.now(), name: newCategoryName.trim(), subcategories: [] }]);
      setNewCategoryName('');
      alert('Category added!');
    }
  };

  const handleAddSubcategory = () => {
    if (selectedCategoryForSub && newSubcategoryName.trim()) {
      setCategories(prev =>
        prev.map(cat =>
          cat.name === selectedCategoryForSub
            ? { ...cat, subcategories: [...cat.subcategories, newSubcategoryName.trim()] }
            : cat
        )
      );
      setNewSubcategoryName('');
      alert('Subcategory added!');
    }
  };

  const handleDeleteCategory = (id: string) => {
    if (window.confirm('Are you sure you want to delete this category and all its subcategories?')) {
      // setCategories(prev => prev.filter(cat => cat.id !== id));
      alert('Category deleted!');
    }
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">System Settings</h1>
            <p className="text-gray-800 text-base">Configure platform-wide settings and parameters.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=AD" alt="Admin" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-white hidden sm:block">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <span><span className="font-semibold text-green-800">Admin Access: Full Privileges</span> - You have complete system administration access</span>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        {/* General Settings */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              General Settings
            </CardTitle>
            <CardDescription className="text-gray-700">
              Configure basic platform information.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platformName" className="text-gray-900 font-medium">Platform Name</Label>
              <Input
                id="platformName"
                value={generalSettings.platformName}
                onChange={(e) => setGeneralSettings({ ...generalSettings, platformName: e.target.value })}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-gray-900 font-medium">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportPhone" className="text-gray-900 font-medium">Support Phone</Label>
                <Input
                  id="supportPhone"
                  type="tel"
                  value={generalSettings.supportPhone}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, supportPhone: e.target.value })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleGeneralSettingsSave}>
              Save General Settings
            </Button>
          </CardContent>
        </Card>

        {/* Category Management */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Category Management
            </CardTitle>
            <CardDescription className="text-gray-700">
              Manage product categories and subcategories.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Add New Category */}
            <div className="flex items-end gap-4">
              <div className="flex-grow space-y-2">
                <Label htmlFor="newCategoryName" className="text-gray-900 font-medium">New Category Name</Label>
                <Input
                  id="newCategoryName"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g., Industrial Chemicals"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <Button onClick={handleAddCategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors">
                <Plus className="h-4 w-4 mr-2" /> Add Category
              </Button>
            </div>

            {/* Add New Subcategory */}
            <div className="flex items-end gap-4">
              <div className="space-y-2 w-1/2">
                <Label htmlFor="selectCategoryForSub" className="text-gray-900 font-medium">Select Parent Category</Label>
                <Select value={selectedCategoryForSub} onValueChange={setSelectedCategoryForSub}>
                  <SelectTrigger id="selectCategoryForSub" className="bg-white border-gray-300 text-gray-900 rounded-md">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.name} className="text-gray-900 hover:bg-gray-100">{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-grow space-y-2 w-1/2">
                <Label htmlFor="newSubcategoryName" className="text-gray-900 font-medium">New Subcategory Name</Label>
                <Input
                  id="newSubcategoryName"
                  value={newSubcategoryName}
                  onChange={(e) => setNewSubcategoryName(e.target.value)}
                  placeholder="e.g., Solvents"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <Button onClick={handleAddSubcategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors">
                <Plus className="h-4 w-4 mr-2" /> Add Subcategory
              </Button>
            </div>

            {/* Existing Categories */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Existing Categories & Subcategories:</h4>
              {categories.length === 0 ? (
                <p className="text-gray-700 text-sm">No categories defined yet.</p>
              ) : (
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat.id} className="border border-green-500/20 p-3 rounded-lg bg-white hover:bg-slate-750 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{cat.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-400 hover:bg-red-100"
                          onClick={() => handleDeleteCategory(cat.id.toString())}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete Category
                        </Button>
                      </div>
                      {cat.subcategories.length > 0 && (
                        <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 text-sm">
                          {cat.subcategories.map(sub => (
                            <li key={sub} className="flex justify-between items-center">
                              <span>{sub}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-400 hover:bg-red-100"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Fee Structures and Notification Templates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Fee Structures
            </CardTitle>
            <CardDescription className="text-gray-700 mb-4">
              Configure platform fees and commissions.
            </CardDescription>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="commissionRate" className="text-gray-900 font-medium">Commission Rate (%)</Label>
                <Input
                  id="commissionRate"
                  type="number"
                  value={feeStructures.commissionRate}
                  onChange={(e) => setFeeStructures({ ...feeStructures, commissionRate: parseFloat(e.target.value) })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingFee" className="text-gray-900 font-medium">Listing Fee (INR)</Label>
                <Input
                  id="listingFee"
                  type="number"
                  value={feeStructures.listingFee}
                  onChange={(e) => setFeeStructures({ ...feeStructures, listingFee: parseFloat(e.target.value) })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentProcessingFee" className="text-gray-900 font-medium">Payment Processing Fee (%)</Label>
                <Input
                  id="paymentProcessingFee"
                  type="number"
                  value={feeStructures.paymentProcessingFee}
                  onChange={(e) => setFeeStructures({ ...feeStructures, paymentProcessingFee: parseFloat(e.target.value) })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleFeeStructuresSave}>
                Save Fee Structures
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Security Settings
            </CardTitle>
            <CardDescription className="text-gray-700 mb-4">
              Configure security and audit settings.
            </CardDescription>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 border border-green-500/10 hover:border-green-500/20 transition-all">
                <div>
                  <Label htmlFor="twoFactorAuthEnabled" className="text-gray-800 font-medium">Two-Factor Authentication</Label>
                  <p className="text-sm text-green-800 mt-1">2FA for admin accounts</p>
                </div>
                <Switch
                  id="twoFactorAuthEnabled"
                  checked={securitySettings.twoFactorAuthEnabled}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuthEnabled: checked })}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-750 border border-green-500/10 hover:border-green-500/20 transition-all">
                <div>
                  <Label htmlFor="auditLoggingEnabled" className="text-gray-800 font-medium">Audit Logging</Label>
                  <p className="text-sm text-green-800 mt-1">Track all admin actions</p>
                </div>
                <Switch
                  id="auditLoggingEnabled"
                  checked={securitySettings.auditLoggingEnabled}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, auditLoggingEnabled: checked })}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors w-full" onClick={handleSecuritySettingsSave}>
                Save Security Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Notification Templates */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Notification Templates
            </CardTitle>
            <CardDescription className="text-gray-700">
              Customize email notification templates.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="newOfferEmailSubject" className="text-gray-900 font-medium">New Offer Email Subject</Label>
                <Input
                  id="newOfferEmailSubject"
                  value={notificationTemplates.newOfferEmailSubject}
                  onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailSubject: e.target.value })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderConfirmationEmailSubject" className="text-gray-900 font-medium">Order Confirmation Email Subject</Label>
                <Input
                  id="orderConfirmationEmailSubject"
                  value={notificationTemplates.orderConfirmationEmailSubject}
                  onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailSubject: e.target.value })}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="newOfferEmailBody" className="text-gray-900 font-medium">New Offer Email Body</Label>
              <Textarea
                id="newOfferEmailBody"
                value={notificationTemplates.newOfferEmailBody}
                onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailBody: e.target.value })}
                rows={3}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
              />
              <p className="text-xs text-gray-600">Use {'{variables}'} like {'{sellerName}'}, {'{listingName}'}, {'{offerAmount}'}.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="orderConfirmationEmailBody" className="text-gray-900 font-medium">Order Confirmation Email Body</Label>
              <Textarea
                id="orderConfirmationEmailBody"
                value={notificationTemplates.orderConfirmationEmailBody}
                onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailBody: e.target.value })}
                rows={3}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md"
              />
              <p className="text-xs text-gray-600">Use {'{variables}'} like {'{userName}'}, {'{orderId}'}, {'{totalAmount}'}.</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleNotificationTemplatesSave}>
              Save Notification Templates
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettingsPage;