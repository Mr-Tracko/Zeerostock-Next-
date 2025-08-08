'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';

// Type definitions
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  adminKey: string;
  termsAccepted: boolean;
}

type AccountType = 'admin' | 'seller' | 'buyer';

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    adminKey: '',
    termsAccepted: false
  });

  const [showAdminKey, setShowAdminKey] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string | boolean): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user types
  };

  const handleAccountTypeChange = (value: string): void => {
    setFormData(prev => ({ ...prev, accountType: value, adminKey: '' }));
    setShowAdminKey(value === 'admin');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.accountType) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.termsAccepted) {
      setError('Please accept the Terms & Conditions');
      return;
    }

    // Admin validation
    if (formData.accountType === 'admin') {
      if (!formData.adminKey) {
        setError('Admin secret key is required');
        return;
      }
      if (formData.adminKey !== 'admin123') {
        setError('Invalid admin secret key');
        return;
      }
    }

    // Route based on account type - PROPER NAVIGATION
    switch (formData.accountType as AccountType) {
      case 'seller':
        router.push('/pages/seller/Dashboard');
        break;
      case 'buyer':
        router.push('/pages/buyer/Dashboard');
        break;
      case 'admin':
        router.push('/pages/admin/Dashboard');
        break;
      default:
        setError('Please select an account type');
    }
  };

  const handleLoginClick = (): void => {
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-green-100 to-white p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl shadow-green-500/10 border border-gray-800 bg-white">
        <CardHeader className="text-center pb-4 pt-8">
          {/* Logo with geometric design matching the dark theme */}
          <div className="flex justify-center mb-6">
            <a className="flex items-center space-x-3">
              <img src="/logo3.png" alt="Logo" className="w-42 h-20 object-contain mt-0" />
            </a>
          </div>
          <CardTitle className="text-2xl font-bold text-green-900 mb-2">Create Your Account</CardTitle>
          <CardDescription className="text-green-900 text-sm">
            Join ZeeroStock to unlock capital or find excess inventory
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-900/20 border border-red-700/50 text-red-300 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-green-900">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-lg border-gray-700 bg-white text-gray-500 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/50 h-11"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-green-900">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                required
                className="rounded-lg border-gray-700 bg-white text-gray-500 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/50 h-11"
                value={formData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium text-green-900">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                required
                className="rounded-lg border-gray-700 bg-white text-gray-500 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/50 h-11"
                value={formData.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('confirmPassword', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="account-type" className="text-sm font-medium text-green-900">Account Type</Label>
              <Select onValueChange={handleAccountTypeChange} value={formData.accountType}>
                <SelectTrigger id="account-type" className="rounded-lg border-gray-700 bg-white text-gray-500 h-11">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="admin" className="text-white hover:bg-gray-700 focus:bg-gray-700">As a Admin</SelectItem>
                  <SelectItem value="seller" className="text-white hover:bg-gray-700 focus:bg-gray-700">As a Seller</SelectItem>
                  <SelectItem value="buyer" className="text-white hover:bg-gray-700 focus:bg-gray-700">As a Buyer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {showAdminKey && (
              <div className="space-y-2">
                <Label htmlFor="admin-key" className="text-sm font-medium text-green-200">Admin Secret Key</Label>
                <Input
                  id="admin-key"
                  type="password"
                  placeholder="Enter admin secret key"
                  required
                  className="rounded-lg border-gray-700 bg-gray-700 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/50 h-11"
                  value={formData.adminKey}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('adminKey', e.target.value)}
                />
                <p className="text-xs text-gray-400">
                  Enter the admin secret key to access admin portal
                </p>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="rounded border-gray-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                checked={formData.termsAccepted}
                onCheckedChange={(checked: boolean) => handleInputChange('termsAccepted', checked)}
              />
              <Label htmlFor="terms" className="text-sm text-green-600">
                I agree to the <a href="#" className="text-green-400 hover:text-green-300 hover:underline transition-colors">Terms & Conditions</a>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg py-3 text-base font-semibold shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200 mt-6">
              Sign Up
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-800 px-3 text-gray-400 font-medium">Or continue with</span>
            </div>
          </div>

          {/* Social Sign-On Buttons */}
          <div className="flex flex-col space-y-3">
            <Button
              variant="outline"
              className="w-full rounded-lg py-3 text-base border border-gray-700 bg-gray-900 text-white hover:bg-gray-700 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center"
            >
              <img src="/google3.png" alt="Google" className="h-5 w-5 mr-3" />
              Google
            </Button>

            <Button
              variant="outline"
              className="w-full rounded-lg py-3 text-base border border-gray-700 bg-gray-900 text-white hover:bg-gray-700 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center"
            >
              <img src="/microsoft2.png" alt="microsoft" className="h-5 w-5 mr-3" />
              Microsoft
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-green-800">
            Already have an account?{' '}
            <a
              href="#"
              className="text-green-400 hover:text-green-300 hover:underline font-medium transition-colors"
              onClick={handleLoginClick}
            >
              Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;