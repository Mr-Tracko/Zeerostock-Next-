// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { Button } from '../../../components/ui/button';
// import { Switch } from '../../../components/ui/switch';
// import { Separator } from '../../../components/ui/separator';
// import { User, Lock, Bell, CreditCard, Trash2, Settings } from 'lucide-react';
// import BuyerSidebar from "../../../components/BuyerSidebar";

// // Type definitions
// interface ProfileData {
//   name: string;
//   email: string;
//   phone: string;
// }

// interface PasswordData {
//   currentPassword: string;
//   newPassword: string;
//   confirmNewPassword: string;
// }

// interface NotificationSettings {
//   emailNotifications: boolean;
//   inAppNotifications: boolean;
// }

// const BuyerSettingsPage: React.FC = () => {
//   const router = useRouter();

//   // State for form fields
//   const [name, setName] = useState<string>('John Smith');
//   const [email, setEmail] = useState<string>('john.smith@example.com');
//   const [phone, setPhone] = useState<string>('+91 98765 43210');
//   const [currentPassword, setCurrentPassword] = useState<string>('');
//   const [newPassword, setNewPassword] = useState<string>('');
//   const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
//   const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
//   const [inAppNotifications, setInAppNotifications] = useState<boolean>(true);

//   const handleProfileSave = (): void => {
//     const profileData: ProfileData = { name, email, phone };
//     console.log('Saving profile:', profileData);
//     // API call to update profile
//     alert('Profile updated successfully!'); // Replace with Shadcn Toast/Dialog
//   };

//   const handleChangePassword = (): void => {
//     if (newPassword !== confirmNewPassword) {
//       alert('New password and confirm password do not match.'); // Replace with Shadcn Toast/Dialog
//       return;
//     }
//     const passwordData: PasswordData = { currentPassword, newPassword, confirmNewPassword };
//     console.log('Changing password:', passwordData);
//     // API call to change password
//     alert('Password changed successfully!'); // Replace with Shadcn Toast/Dialog
//     setCurrentPassword('');
//     setNewPassword('');
//     setConfirmNewPassword('');
//   };

//   const handleNotificationSave = (): void => {
//     const notificationSettings: NotificationSettings = { emailNotifications, inAppNotifications };
//     console.log('Saving notification settings:', notificationSettings);
//     // API call to update notification settings
//     alert('Notification settings updated!'); // Replace with Shadcn Toast/Dialog
//   };

//   const handleDeleteAccount = (): void => {
//     if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) { // Replace with Shadcn AlertDialog
//       console.log('Deleting account...');
//       // API call to delete account
//       alert('Account deleted successfully.'); // Replace with Shadcn Toast/Dialog
//       router.push('/'); // Redirect to homepage after deletion
//     }
//   };

//   const handleInputChange = (
//     setter: React.Dispatch<React.SetStateAction<string>>
//   ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setter(e.target.value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <BuyerSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6 overflow-y-auto space-y-8">
//         <div className="max-w-4xl mx-auto space-y-8">
//           {/* Page Header */}
//           <div className="space-y-2">
//             <h1 className="text-3xl font-bold text-white flex items-center">
//               <Settings className="h-8 w-8 mr-3 text-green-400" /> Account Settings
//             </h1>
//             <p className="text-green-100">Manage your profile, security, and preferences.</p>
//           </div>

//           {/* Profile Information */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <User className="h-5 w-5 mr-2 text-green-400" /> Profile Information
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Update your personal and contact details.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-green-200 font-medium">Full Name</Label>
//                   <Input 
//                     id="name" 
//                     type="text" 
//                     value={name} 
//                     onChange={handleInputChange(setName)} 
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-green-200 font-medium">Email Address</Label>
//                   <Input 
//                     id="email" 
//                     type="email" 
//                     value={email} 
//                     onChange={handleInputChange(setEmail)} 
//                     disabled 
//                     className="bg-gray-600 border-gray-900 text-gray-400 rounded-md cursor-not-allowed" 
//                   />
//                   <p className="text-xs text-gray-400">Email cannot be changed.</p>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone" className="text-green-200 font-medium">Phone Number</Label>
//                 <Input 
//                   id="phone" 
//                   type="tel" 
//                   value={phone} 
//                   onChange={handleInputChange(setPhone)} 
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                 />
//               </div>
//               <Button 
//                 className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
//                 onClick={handleProfileSave}
//               >
//                 Save Profile
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Password Management */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <Lock className="h-5 w-5 mr-2 text-green-400" /> Password Management
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Change your account password.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="currentPassword" className="text-green-200 font-medium">Current Password</Label>
//                 <Input 
//                   id="currentPassword" 
//                   type="password" 
//                   value={currentPassword} 
//                   onChange={handleInputChange(setCurrentPassword)} 
//                   className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="newPassword" className="text-green-200 font-medium">New Password</Label>
//                   <Input 
//                     id="newPassword" 
//                     type="password" 
//                     value={newPassword} 
//                     onChange={handleInputChange(setNewPassword)} 
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="confirmNewPassword" className="text-green-200 font-medium">Confirm New Password</Label>
//                   <Input 
//                     id="confirmNewPassword" 
//                     type="password" 
//                     value={confirmNewPassword} 
//                     onChange={handleInputChange(setConfirmNewPassword)} 
//                     className="bg-gray-700 border-gray-900/30 text-white placeholder:text-gray-400 focus:border-gray-900/30 focus:ring-green-400/50 rounded-md" 
//                   />
//                 </div>
//               </div>
//               <Button 
//                 className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
//                 onClick={handleChangePassword}
//               >
//                 Change Password
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Notification Settings */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <Bell className="h-5 w-5 mr-2 text-green-400" /> Notification Settings
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Control how you receive notifications.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 space-y-4">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="emailNotifications" className="text-green-200 font-medium">Email Notifications</Label>
//                 <Switch 
//                   id="emailNotifications" 
//                   checked={emailNotifications} 
//                   onCheckedChange={setEmailNotifications}
//                   className="data-[state=checked]:bg-green-600"
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="inAppNotifications" className="text-green-200 font-medium">In-App Notifications</Label>
//                 <Switch 
//                   id="inAppNotifications" 
//                   checked={inAppNotifications} 
//                   onCheckedChange={setInAppNotifications}
//                   className="data-[state=checked]:bg-green-600"
//                 />
//               </div>
//               <Button 
//                 className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
//                 onClick={handleNotificationSave}
//               >
//                 Save Notification Settings
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Payment Methods */}
//           <Card className="bg-gray-800 border-gray-900/30 rounded-lg shadow-xl shadow-green-500/10">
//             <CardHeader className="pb-4 border-b border-gray-900/30">
//               <CardTitle className="text-xl font-bold text-white flex items-center">
//                 <CreditCard className="h-5 w-5 mr-2 text-green-400" /> Payment Methods
//               </CardTitle>
//               <CardDescription className="text-green-100">
//                 Manage your saved payment methods.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               <p className="text-green-100">Payment method management coming soon!</p>
//               <Button 
//                 variant="outline" 
//                 className="mt-4 border-green-600 text-green-400 hover:bg-green-600 hover:text-white transition-colors"
//               >
//                 Add Payment Method
//               </Button>
//             </CardContent>
//           </Card>

//           <Separator className="bg-gray-700" />

//           {/* Delete Account */}
//           <Card className="bg-red-900/20 border-red-700/50 rounded-lg shadow-xl shadow-red-500/10">
//             <CardHeader className="pb-4 border-b border-red-700/50">
//               <CardTitle className="text-xl font-bold text-red-400 flex items-center">
//                 <Trash2 className="h-5 w-5 mr-2" /> Delete Account
//               </CardTitle>
//               <CardDescription className="text-red-300">
//                 Permanently delete your account and all associated data. This action cannot be undone.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               <Button 
//                 variant="destructive" 
//                 className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2 font-semibold transition-colors" 
//                 onClick={handleDeleteAccount}
//               >
//                 Delete My Account
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerSettingsPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Switch } from '../../../components/ui/switch';
import { Separator } from '../../../components/ui/separator';
import { User, Lock, Bell, CreditCard, Trash2, Settings } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
interface ProfileData {
  name: string;
  email: string;
  phone: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  inAppNotifications: boolean;
}

const BuyerSettingsPage: React.FC = () => {
  const router = useRouter();

  // State for form fields
  const [name, setName] = useState<string>('John Smith');
  const [email, setEmail] = useState<string>('john.smith@example.com');
  const [phone, setPhone] = useState<string>('+91 98765 43210');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
  const [inAppNotifications, setInAppNotifications] = useState<boolean>(true);

  const handleProfileSave = (): void => {
    const profileData: ProfileData = { name, email, phone };
    console.log('Saving profile:', profileData);
    // API call to update profile
    alert('Profile updated successfully!'); // Replace with Shadcn Toast/Dialog
  };

  const handleChangePassword = (): void => {
    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match.'); // Replace with Shadcn Toast/Dialog
      return;
    }
    const passwordData: PasswordData = { currentPassword, newPassword, confirmNewPassword };
    console.log('Changing password:', passwordData);
    // API call to change password
    alert('Password changed successfully!'); // Replace with Shadcn Toast/Dialog
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleNotificationSave = (): void => {
    const notificationSettings: NotificationSettings = { emailNotifications, inAppNotifications };
    console.log('Saving notification settings:', notificationSettings);
    // API call to update notification settings
    alert('Notification settings updated!'); // Replace with Shadcn Toast/Dialog
  };

  const handleDeleteAccount = (): void => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) { // Replace with Shadcn AlertDialog
      console.log('Deleting account...');
      // API call to delete account
      alert('Account deleted successfully.'); // Replace with Shadcn Toast/Dialog
      router.push('/'); // Redirect to homepage after deletion
    }
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    setter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2 flex items-center">
              <Settings className="h-8 w-8 mr-3 text-green-400" /> Account Settings
            </h1>
            <p className="text-gray-800 text-base">Manage your profile, security, and preferences.</p>
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

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Information */}
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-green-400" /> Profile Information
              </CardTitle>
              <CardDescription className="text-gray-700">
                Update your personal and contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-800 font-medium">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={handleInputChange(setName)} 
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800 font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={handleInputChange(setEmail)} 
                    disabled 
                    className="bg-gray-100 border-gray-200 text-gray-500 rounded-md cursor-not-allowed" 
                  />
                  <p className="text-xs text-gray-600">Email cannot be changed.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-800 font-medium">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={phone} 
                  onChange={handleInputChange(setPhone)} 
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md" 
                />
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold transition-colors" 
                onClick={handleProfileSave}
              >
                Save Profile
              </Button>
            </CardContent>
          </Card>

          {/* Password Management */}
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-green-400" /> Password Management
              </CardTitle>
              <CardDescription className="text-gray-700">
                Change your account password.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-gray-800 font-medium">Current Password</Label>
                <Input 
                  id="currentPassword" 
                  type="password" 
                  value={currentPassword} 
                  onChange={handleInputChange(setCurrentPassword)} 
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-gray-800 font-medium">New Password</Label>
                  <Input 
                    id="newPassword" 
                    type="password" 
                    value={newPassword} 
                    onChange={handleInputChange(setNewPassword)} 
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword" className="text-gray-800 font-medium">Confirm New Password</Label>
                  <Input 
                    id="confirmNewPassword" 
                    type="password" 
                    value={confirmNewPassword} 
                    onChange={handleInputChange(setConfirmNewPassword)} 
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-400/50 rounded-md" 
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

          {/* Notification Settings */}
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-green-400" /> Notification Settings
              </CardTitle>
              <CardDescription className="text-gray-700">
                Control how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <Label htmlFor="emailNotifications" className="text-gray-800 font-medium">Email Notifications</Label>
                <Switch 
                  id="emailNotifications" 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <Label htmlFor="inAppNotifications" className="text-gray-800 font-medium">In-App Notifications</Label>
                <Switch 
                  id="inAppNotifications" 
                  checked={inAppNotifications} 
                  onCheckedChange={setInAppNotifications}
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

          {/* Payment Methods */}
          <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-750">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-green-400" /> Payment Methods
              </CardTitle>
              <CardDescription className="text-gray-700">
                Manage your saved payment methods.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-gray-700 mb-4">Payment method management coming soon!</p>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-white bg-green-600  transition-colors"
                >
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Delete Account */}
          <Card className="bg-gradient-to-br from-red-100 via-red-50 to-red-100 border-red-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-red-800 flex items-center">
                <Trash2 className="h-5 w-5 mr-2" /> Delete Account
              </CardTitle>
              <CardDescription className="text-red-700">
                Permanently delete your account and all associated data. This action cannot be undone.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="p-4 bg-white rounded-lg">
                <Button 
                  variant="destructive" 
                  className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2 font-semibold transition-colors" 
                  onClick={handleDeleteAccount}
                >
                  Delete My Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerSettingsPage;