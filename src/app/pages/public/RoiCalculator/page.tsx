'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';

// Type definitions
interface FormData {
  industryName: string;
  estimatedStockValue: string;
  unitsOfStock: string;
  depreciation: string;
  yearsOfInventoryHold: string;
}

interface ROIResult {
  originalValue: number;
  depreciationLoss: number;
  depreciatedValue: number;
  expectedZeeroStockValue: number;
  units: number;
  industry: string;
}

const ROICalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    industryName: '',
    estimatedStockValue: '',
    unitsOfStock: '',
    depreciation: '',
    yearsOfInventoryHold: ''
  });

  const [result, setResult] = useState<ROIResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
    setResult(null);
  };

  const calculateROI = (): void => {
    // Validation
    if (!formData.industryName || !formData.estimatedStockValue || !formData.unitsOfStock || 
        !formData.depreciation || !formData.yearsOfInventoryHold) {
      setError('Please fill in all fields');
      return;
    }

    const estimatedValue = parseFloat(formData.estimatedStockValue);
    const depreciation = parseFloat(formData.depreciation) / 100; // Convert percentage to decimal
    const years = parseFloat(formData.yearsOfInventoryHold);

    if (isNaN(estimatedValue) || isNaN(depreciation) || isNaN(years)) {
      setError('Please enter valid numbers');
      return;
    }

    if (depreciation < 0 || depreciation > 1) {
      setError('Depreciation should be between 0% and 100%');
      return;
    }

    // ROI Formula: (Estimated value) - [(Depreciation) * (Estimated value) * Years]
    const depreciationLoss = depreciation * estimatedValue * years;
    const depreciatedValue = estimatedValue - depreciationLoss;
    const expectedZeeroStockValue = depreciatedValue; // This is now the expected value from ZeeroStock

    setResult({
      originalValue: estimatedValue,
      depreciationLoss: depreciationLoss,
      depreciatedValue: depreciatedValue,
      expectedZeeroStockValue: expectedZeeroStockValue,
      units: parseInt(formData.unitsOfStock),
      industry: formData.industryName
    });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-white p-4">
      <div className="w-full max-w-4xl">
        <Card className="rounded-2xl shadow-xl shadow-green-500/10 border border-gray-800 bg-white">
          <CardHeader className="text-center pb-6 pt-8">
            {/* Logo with geometric design */}
            <div className="flex justify-center mb-6">
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo3.png" alt="Logo" className="w-42 h-20 object-contain mt-0" />
            </a>
          </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">ROI Calculator</CardTitle>
            <CardDescription className="text-gray-700 text-lg">
              Calculate your return on investment with ZeeroStock
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Details</h3>
                
                {error && (
                  <div className="bg-white border-red-700/50 text-red-300 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-700">Name of Industry</Label>
                  <Input
                    id="industry"
                    type="text"
                    placeholder="e.g., Electronics, Fashion, Automotive"
                    className="rounded-lg border-black bg-white text-gray-700 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/50 h-11"
                    value={formData.industryName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('industryName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stock-value" className="text-sm font-medium text-gray-700">Estimated Stock Value (₹)</Label>
                  <Input
                    id="stock-value"
                    type="number"
                    placeholder="50000"
                    className="rounded-lg border-black bg-white text-gray-700 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/50 h-11"
                    value={formData.estimatedStockValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('estimatedStockValue', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="units" className="text-sm font-medium text-grray-700">Units of Stock</Label>
                  <Input
                    id="units"
                    type="number"
                    placeholder="1000"
                    className="rounded-lg border-black bg-white text-gray-700 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/50 h-11"
                    value={formData.unitsOfStock}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('unitsOfStock', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="depreciation" className="text-sm font-medium text-green-700">Depreciation (%)</Label>
                  <Input
                    id="depreciation"
                    type="number"
                    step="0.1"
                    placeholder="15"
                    className="rounded-lg border-black bg-white text-gray-700 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/50 h-11"
                    value={formData.depreciation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('depreciation', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="years" className="text-sm font-medium text-gray-700">Years of Inventory Hold</Label>
                  <Input
                    id="years"
                    type="number"
                    step="0.1"
                    placeholder="2"
                    className="rounded-lg border-black bg-white text-gray-700 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/50 h-11"
                    value={formData.yearsOfInventoryHold}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('yearsOfInventoryHold', e.target.value)}
                  />
                </div>

                <Button 
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg py-3 text-base font-semibold shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200 mt-6"
                >
                  Calculate My ROI
                </Button>
              </div>

              {/* Results Display */}
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Analysis</h3>
                
                {result ? (
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-700">
                    <div className="space-y-4">
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-semibold text-green-900 mb-2">Industry: {result.industry}</h4>
                        <p className="text-sm text-gray-400">{result.units.toLocaleString()} units analyzed</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <p className="text-sm text-gray-400 mb-1">Original Value</p>
                          <p className="text-lg font-semibold text-white">{formatCurrency(result.originalValue)}</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <p className="text-sm text-gray-400 mb-1">Depreciation Loss</p>
                          <p className="text-lg font-semibold text-red-400">-{formatCurrency(result.depreciationLoss)}</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-4 col-span-2">
                          <p className="text-sm text-gray-400 mb-1">Depreciated Value</p>
                          <p className="text-lg font-semibold text-yellow-400">{formatCurrency(result.depreciatedValue)}</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-600 pt-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-2">Expected ZeeroStock Value</p>
                          <p className="text-3xl font-bold text-gray-900">
                            {formatCurrency(result.expectedZeeroStockValue)}
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 mt-4">
                        <p className="text-gray-700 text-sm text-center">
                          🎉 This is the expected value you can receive from ZeeroStock after accounting for depreciation over time.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-700 border-dashed text-center">
                    <div className="text-gray-400 mb-4">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Fill in the form and click "Calculate My ROI" to see your analysis</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ROICalculator;