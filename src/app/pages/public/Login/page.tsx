'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleForgotPasswordClick = (): void => {
    router.push('/forgot-password');
  };

  const handleSignUpClick = (): void => {
    router.push('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-900 p-4">
      <Card className="w-full max-w-sm rounded-2xl shadow-xl shadow-green-500/10 border border-gray-800 bg-white">
        <CardHeader className="text-center pb-4 pt-8">
          {/* Logo with geometric design matching the dark theme */}
          <div className="flex justify-center mb-6">
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo3.png" alt="Logo" className="w-42 h-20 object-contain mt-0" />
            </a>
          </div>
          <CardTitle className="text-2xl font-bold text-green-900 mb-2">Welcome Back</CardTitle>
          <CardDescription className="text-green-900 text-sm">
            Sign in to your B2B marketplace account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          {/* Static form structure - no state or event handlers */}
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-green-900">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-lg border-gray-700 bg-white text-green-900 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/50 h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-green-900">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-lg border-gray-700 bg-white text-gray-400 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/50 h-11"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  className="rounded border-gray-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                />
                <Label htmlFor="remember-me" className="text-sm text-green-600">Remember me</Label>
              </div>
              <a 
                href="/forgot-password" 
                className="text-sm text-green-800 hover:text-green-300 hover:underline transition-colors" 
                onClick={handleForgotPasswordClick}
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button with green gradient */}
            <Button 
              type="button" 
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg py-3 text-base font-semibold shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200 mt-6"
            >
              Sign In
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

          <p className="mt-6 text-center text-sm text-green-100">
            Don't have an account?{' '}
            <a 
              href="/register" 
              className="text-green-800 hover:text-green-300 hover:underline font-medium transition-colors" 
              onClick={() => {router.push('/pages/public/Register')}}
            >
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;