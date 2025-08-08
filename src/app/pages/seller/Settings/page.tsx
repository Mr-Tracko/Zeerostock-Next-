'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Switch } from '../../../components/ui/switch';
import { Separator } from '../../../components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { User, Lock, Bell, Banknote, Trash2, Building2, Settings } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// TypeScript interfaces
interface SellerProfile {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: string;
  gstin: string;
  bankAccount: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  inAppNotifications: boolean;
  bidNotifications: boolean;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const SellerSettingsPage: React.FC = () => {
  const router = useRouter();

  // Business types array with proper typing
  const businessTypes: readonly string[] = [
    'Electronics Manufacturer', 
    'Automotive Supplier', 
    'Textile Mill',
    'Chemical Producer', 
    'Machinery & Equipment', 
    'Packaging Solutions',
    'Raw Material Supplier', 
    'Other'
  ] as const;

  // State for seller profile with TypeScript typing
  const [profile, setProfile] = useState<SellerProfile>({
    fullName: 'Ravi Kumar',
    email: 'ravi.kumar@example.com',
    phone: '+91 99887 76655',
    companyName: 'Sunrise Manufacturing Pvt Ltd',
    businessType: 'Textile Mill',
    gstin: '27ABCDE1234F1Z5',
    bankAccount: 'XXXXXXXXX1234', // Masked
  });

  // Password management state
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Notification settings state
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    inAppNotifications: true,
    bidNotifications: true,
  });

  // Event handlers with proper TypeScript typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string, field: keyof SellerProfile): void => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field: keyof PasswordData) => 
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPasswordData(prev => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleNotificationChange = (field: keyof NotificationSettings) => 
    (checked: boolean): void => {
      setNotifications(prev => ({
        ...prev,
        [field]: checked,
      }));
    };

  const handleProfileSave = (): void => {
    console.log('Saving seller profile:', profile);
    // TODO: Replace with actual API call
    alert('Seller profile updated successfully!'); // Replace with proper toast notification
  };

  const handleChangePassword = (): void => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    console.log('Changing password:', { 
      currentPassword: passwordData.currentPassword, 
      newPassword: passwordData.newPassword 
    });
    // TODO: Replace with actual API call
    alert('Password changed successfully!');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  };

  const handleNotificationSave = (): void => {
    console.log('Saving seller notification settings:', notifications);
    // TODO: Replace with actual API call
    alert('Notification settings updated!');
  };

  const handleDeleteAccount = (): void => {
    if (window.confirm('Are you sure you want to delete your seller account? This action cannot be undone.')) {
      console.log('Deleting seller account...');
      // TODO: Replace with actual API call and proper confirmation dialog
      alert('Seller account deleted successfully.');
      router.push('/'); // Redirect to homepage after deletion
    }
  };

  const handleSupportNavigation = (): void => {
    router.push('/seller/support');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <SellerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6 overflow-y-auto space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-green-400 flex items-center">
              <Settings className="h-8 w-8 mr-3 text-green-400" /> Seller Account Settings
            </h1>
            <p className="text-gray-800">Manage your business profile, security, and notification preferences.</p>
          </div>

          {/* Business Profile Information */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-green-400" /> Business Profile
              </CardTitle>
              <CardDescription className="text-green-100">
                Update your company and contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-green-200 font-medium">Contact Person Name</Label>
                  <Input 
                    id="fullName" 
                    type="text" 
                    value={profile.fullName} 
                    onChange={handleInputChange} 
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-200 font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={profile.email} 
                    onChange={handleInputChange} 
                    disabled 
                    className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                  />
                  <p className="text-xs text-gray-400">Email cannot be changed.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-200 font-medium">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={profile.phone} 
                  onChange={handleInputChange} 
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-green-200 font-medium">Company Name</Label>
                <Input 
                  id="companyName" 
                  type="text" 
                  value={profile.companyName} 
                  onChange={handleInputChange} 
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-green-200 font-medium">Business Type</Label>
                <Select 
                  value={profile.businessType} 
                  onValueChange={(value: string) => handleSelectChange(value, 'businessType')}
                >
                  <SelectTrigger 
                    id="businessType" 
                    className="bg-gray-700 border-gray-900/30 text-white focus:border-gray-900/30 focus:ring-green-400/50 rounded-md"
                  >
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-900">
                    {businessTypes.map((type: string) => (
                      <SelectItem 
                        key={type} 
                        value={type}
                        className="text-white hover:bg-gray-600 focus:bg-gray-600"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstin" className="text-green-200 font-medium">GSTIN</Label>
                <Input 
                  id="gstin" 
                  type="text" 
                  value={profile.gstin} 
                  onChange={handleInputChange} 
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                />
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
                onClick={handleProfileSave}
              >
                Save Business Profile
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Password Management */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Lock className="h-5 w-5 mr-2 text-green-400" /> Password Management
              </CardTitle>
              <CardDescription className="text-green-100">
                Change your account password.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-green-200 font-medium">Current Password</Label>
                <Input 
                  id="currentPassword" 
                  type="password" 
                  value={passwordData.currentPassword} 
                  onChange={handlePasswordChange('currentPassword')} 
                  className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-green-200 font-medium">New Password</Label>
                  <Input 
                    id="newPassword" 
                    type="password" 
                    value={passwordData.newPassword} 
                    onChange={handlePasswordChange('newPassword')} 
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword" className="text-green-200 font-medium">Confirm New Password</Label>
                  <Input 
                    id="confirmNewPassword" 
                    type="password" 
                    value={passwordData.confirmNewPassword} 
                    onChange={handlePasswordChange('confirmNewPassword')} 
                    className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
                onClick={handleChangePassword}
              >
                Change Password
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Notification Settings */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Bell className="h-5 w-5 mr-2 text-green-400" /> Notification Settings
              </CardTitle>
              <CardDescription className="text-green-100">
                Control how you receive notifications from the platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifications" className="text-green-200 font-medium">Email Notifications</Label>
                <Switch 
                  id="emailNotifications" 
                  checked={notifications.emailNotifications} 
                  onCheckedChange={handleNotificationChange('emailNotifications')}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="inAppNotifications" className="text-green-200 font-medium">In-App Notifications</Label>
                <Switch 
                  id="inAppNotifications" 
                  checked={notifications.inAppNotifications} 
                  onCheckedChange={handleNotificationChange('inAppNotifications')}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="bidNotifications" className="text-green-200 font-medium">New Bid/Offer Notifications</Label>
                <Switch 
                  id="bidNotifications" 
                  checked={notifications.bidNotifications} 
                  onCheckedChange={handleNotificationChange('bidNotifications')}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
                onClick={handleNotificationSave}
              >
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Bank Account Details (Placeholder) */}
          <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
            <CardHeader className="pb-4 border-b border-gray-900/30">
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Banknote className="h-5 w-5 mr-2 text-green-400" /> Bank Account Details
              </CardTitle>
              <CardDescription className="text-green-100">
                Manage your bank account for payouts.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Label htmlFor="bankAccount" className="text-green-200 font-medium">Linked Bank Account</Label>
                <Input 
                  id="bankAccount" 
                  type="text" 
                  value={profile.bankAccount} 
                  disabled 
                  className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
                />
                <p className="text-xs text-gray-400">For security, full details are masked. Contact support to change.</p>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 border-green-600 text-green-400 hover:bg-green-600 hover:text-white transition-colors" 
                onClick={handleSupportNavigation}
              >
                Update Bank Details (via Support)
              </Button>
            </CardContent>
          </Card>

          <Separator className="bg-gray-700" />

          {/* Delete Account */}
          <Card className="bg-red-900/20 border-red-700/50 rounded-lg shadow-xl shadow-red-500/10">
            <CardHeader className="pb-4 border-b border-red-700/50">
              <CardTitle className="text-xl font-bold text-red-400 flex items-center">
                <Trash2 className="h-5 w-5 mr-2" /> Delete Account
              </CardTitle>
              <CardDescription className="text-red-300">
                Permanently delete your seller account and all associated data. This action cannot be undone.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Button 
                variant="destructive" 
                className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2 font-semibold transition-colors" 
                onClick={handleDeleteAccount}
              >
                Delete My Seller Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SellerSettingsPage;