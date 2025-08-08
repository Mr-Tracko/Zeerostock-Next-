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
import { Settings, List, DollarSign, Bell, Shield, Plus, Edit, Trash2 } from 'lucide-react';
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

  const handleDeleteCategory = (id:string) => {
    if (window.confirm('Are you sure you want to delete this category and all its subcategories?')) {
      setCategories(prev => prev.filter(cat => cat.id !== id));
      alert('Category deleted!');
    }
  };

  const handleDeleteSubcategory = (categoryName, subName) => {
    if (window.confirm(`Are you sure you want to delete subcategory "${subName}" from "${categoryName}"?`)) {
      setCategories(prev =>
        prev.map(cat =>
          cat.name === categoryName
            ? { ...cat, subcategories: cat.subcategories.filter(sub => sub !== subName) }
            : cat
        )
      );
      alert('Subcategory deleted!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6 overflow-y-auto space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Settings className="h-8 w-8 mr-3 text-green-400" /> System Settings
            </h1>
            <p className="text-green-100">Configure platform-wide settings and parameters.</p>
          </div>

          {/* General Settings */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Settings className="h-5 w-5 mr-2 text-green-400" /> General Settings
              </CardTitle>
              <CardDescription className="text-green-100">
                Configure basic platform information.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platformName" className="text-green-200 font-medium">Platform Name</Label>
                <Input
                  id="platformName"
                  value={generalSettings.platformName}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, platformName: e.target.value })}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-green-200 font-medium">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={generalSettings.contactEmail}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportPhone" className="text-green-200 font-medium">Support Phone</Label>
                  <Input
                    id="supportPhone"
                    type="tel"
                    value={generalSettings.supportPhone}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, supportPhone: e.target.value })}
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                  />
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleGeneralSettingsSave}>
                Save General Settings
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Category Management */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <List className="h-5 w-5 mr-2 text-green-400" /> Category Management
              </CardTitle>
              <CardDescription className="text-green-100">
                Manage product categories and subcategories.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Add New Category */}
              <div className="flex items-end gap-4">
                <div className="flex-grow space-y-2">
                  <Label htmlFor="newCategoryName" className="text-green-200 font-medium">New Category Name</Label>
                  <Input
                    id="newCategoryName"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="e.g., Industrial Chemicals"
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                  />
                </div>
                <Button onClick={handleAddCategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors">
                  <Plus className="h-4 w-4 mr-2" /> Add Category
                </Button>
              </div>

              {/* Add New Subcategory */}
              <div className="flex items-end gap-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="selectCategoryForSub" className="text-green-200 font-medium">Select Parent Category</Label>
                  <Select value={selectedCategoryForSub} onValueChange={setSelectedCategoryForSub}>
                    <SelectTrigger id="selectCategoryForSub" className="bg-gray-700 border-gray-900/30 text-white rounded-md">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.name} className="text-white hover:bg-gray-700">{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-grow space-y-2 w-1/2">
                  <Label htmlFor="newSubcategoryName" className="text-green-200 font-medium">New Subcategory Name</Label>
                  <Input
                    id="newSubcategoryName"
                    value={newSubcategoryName}
                    onChange={(e) => setNewSubcategoryName(e.target.value)}
                    placeholder="e.g., Solvents"
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                  />
                </div>
                <Button onClick={handleAddSubcategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors">
                  <Plus className="h-4 w-4 mr-2" /> Add Subcategory
                </Button>
              </div>

              {/* Existing Categories */}
              <div className="space-y-4">
                <h4 className="font-semibold text-green-200">Existing Categories & Subcategories:</h4>
                {categories.length === 0 ? (
                  <p className="text-green-100 text-sm">No categories defined yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat.id} className="border border-gray-700 p-3 rounded-md bg-gray-700/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">{cat.name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            onClick={() => handleDeleteCategory(cat.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Delete Category
                          </Button>
                        </div>
                        {cat.subcategories.length > 0 && (
                          <ul className="list-disc list-inside ml-4 space-y-1 text-green-100 text-sm">
                            {cat.subcategories.map(sub => (
                              <li key={sub} className="flex justify-between items-center">
                                <span>{sub}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                  onClick={() => handleDeleteSubcategory(cat.name, sub)}
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

          <Separator className="bg-gray-700" />

          {/* Fee Structures */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-400" /> Fee Structures
              </CardTitle>
              <CardDescription className="text-green-100">
                Configure platform fees and commissions.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="commissionRate" className="text-green-200 font-medium">Commission Rate (%)</Label>
                <Input
                  id="commissionRate"
                  type="number"
                  value={feeStructures.commissionRate}
                  onChange={(e) => setFeeStructures({ ...feeStructures, commissionRate: parseFloat(e.target.value) })}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingFee" className="text-green-200 font-medium">Listing Fee (INR)</Label>
                <Input
                  id="listingFee"
                  type="number"
                  value={feeStructures.listingFee}
                  onChange={(e) => setFeeStructures({ ...feeStructures, listingFee: parseFloat(e.target.value) })}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentProcessingFee" className="text-green-200 font-medium">Payment Processing Fee (%)</Label>
                <Input
                  id="paymentProcessingFee"
                  type="number"
                  value={feeStructures.paymentProcessingFee}
                  onChange={(e) => setFeeStructures({ ...feeStructures, paymentProcessingFee: parseFloat(e.target.value) })}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleFeeStructuresSave}>
                Save Fee Structures
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Notification Templates */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Bell className="h-5 w-5 mr-2 text-green-400" /> Notification Templates
              </CardTitle>
              <CardDescription className="text-green-100">
                Customize email notification templates.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newOfferEmailSubject" className="text-green-200 font-medium">New Offer Email Subject</Label>
                <Input
                  id="newOfferEmailSubject"
                  value={notificationTemplates.newOfferEmailSubject}
                  onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailSubject: e.target.value })}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newOfferEmailBody" className="text-green-200 font-medium">New Offer Email Body</Label>
                <Textarea
                  id="newOfferEmailBody"
                  value={notificationTemplates.newOfferEmailBody}
                  onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailBody: e.target.value })}
                  rows={5}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
                <p className="text-xs text-gray-400">Use {'{variables}'} like {'{sellerName}'}, {'{listingName}'}, {'{offerAmount}'}.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderConfirmationEmailSubject" className="text-green-200 font-medium">Order Confirmation Email Subject</Label>
                <Input
                  id="orderConfirmationEmailSubject"
                  value={notificationTemplates.orderConfirmationEmailSubject}
                  onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailSubject: e.target.value })}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderConfirmationEmailBody" className="text-green-200 font-medium">Order Confirmation Email Body</Label>
                <Textarea
                  id="orderConfirmationEmailBody"
                  value={notificationTemplates.orderConfirmationEmailBody}
                  onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailBody: e.target.value })}
                  rows={5}
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                />
                <p className="text-xs text-gray-400">Use {'{variables}'} like {'{userName}'}, {'{orderId}'}, {'{totalAmount}'}.</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleNotificationTemplatesSave}>
                Save Notification Templates
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Security Settings */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-400" /> Security Settings
              </CardTitle>
              <CardDescription className="text-green-100">
                Configure security and audit settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="twoFactorAuthEnabled" className="text-green-200 font-medium">Two-Factor Authentication (2FA) for Admins</Label>
                <Switch
                  id="twoFactorAuthEnabled"
                  checked={securitySettings.twoFactorAuthEnabled}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuthEnabled: checked })}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auditLoggingEnabled" className="text-green-200 font-medium">Audit Logging</Label>
                <Switch
                  id="auditLoggingEnabled"
                  checked={securitySettings.auditLoggingEnabled}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, auditLoggingEnabled: checked })}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" onClick={handleSecuritySettingsSave}>
                Save Security Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;