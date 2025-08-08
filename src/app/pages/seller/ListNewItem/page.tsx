'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Checkbox } from '../../../components/ui/checkbox';
import { Progress } from '../../../components/ui/progress';
import { Package, FileText, Camera, DollarSign, CheckCircle, XCircle, Check } from 'lucide-react';
import SellerSidebar from '../../../components/SellerSidebar';

// Type definitions
interface ImageFile {
  name: string;
  url: string;
}

interface FormData {
  itemName: string;
  category: string;
  description: string;
  condition: string;
  quantity: string;
  unit: string;
  dimensions: string;
  weight: string;
  certifications: string;
  images: ImageFile[];
  pricingOption: 'fixed' | 'minimum' | 'auction';
  fixedPrice: string;
  minimumPrice: string;
  auctionStartTime: string;
  auctionEndTime: string;
  logisticsOption: 'seller-managed' | 'platform-integrated';
  shippingNotes: string;
  geoRestrictions: string[];
  anonymousTransaction: boolean;
}

type PricingOption = 'fixed' | 'minimum' | 'auction';
type LogisticsOption = 'seller-managed' | 'platform-integrated';

const ListNewItemPage: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps: number = 4;

  // Form data state
  const [formData, setFormData] = useState<FormData>({
    itemName: '',
    category: '',
    description: '',
    condition: '',
    quantity: '',
    unit: 'units',
    dimensions: '',
    weight: '',
    certifications: '',
    images: [],
    pricingOption: 'fixed',
    fixedPrice: '',
    minimumPrice: '',
    auctionStartTime: '',
    auctionEndTime: '',
    logisticsOption: 'seller-managed',
    shippingNotes: '',
    geoRestrictions: [],
    anonymousTransaction: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (value: string, field: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages: ImageFile[] = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.itemName || !formData.category || !formData.description || !formData.condition || !formData.quantity) {
        alert('Please fill in all required fields for Basic Information.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmitListing = () => {
    console.log('Submitting Listing:', formData);
    alert('Listing submitted successfully! It will be reviewed by an administrator.');
    router.push('/seller-dashboard');
  };

  const categories: string[] = ['Raw Materials', 'Components', 'Machinery', 'Packaging', 'Chemicals', 'Electronics', 'Other'];
  const conditions: string[] = ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'];
  const units: string[] = ['units', 'kg', 'tons', 'meters', 'pieces', 'lots'];

  const stepTitles: string[] = [
    'Basic Information',
    'Detailed Specifications',
    'Pricing & Logistics',
    'Review & Publish'
  ];

  const formatDateTime = (dateTimeString: string): string => {
    if (!dateTimeString) return 'N/A';
    return new Date(dateTimeString).toLocaleString();
  };

  const formatPricingOption = (option: PricingOption): string => {
    const optionMap: Record<PricingOption, string> = {
      'fixed': 'Fixed Price',
      'minimum': 'Minimum Price (Negotiable)',
      'auction': 'Auction'
    };
    return optionMap[option] || 'N/A';
  };

  const formatLogisticsOption = (option: LogisticsOption): string => {
    const optionMap: Record<LogisticsOption, string> = {
      'seller-managed': 'Seller-Managed Shipping',
      'platform-integrated': 'Platform-Integrated Logistics'
    };
    return optionMap[option] || 'N/A';
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <SellerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* KYC/KYB Verified Banner */}
          <div className="bg-white border-green-500/30 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <h3 className="text-green-400 font-semibold">KYC/KYB Verified</h3>
                <p className="text-green-300 text-sm">Your account is fully verified and ready for trading</p>
              </div>
            </div>
            <div className="text-green-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>

          <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
            <CardHeader className="pb-4 border-b border-gray-700">
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Package className="h-6 w-6 mr-2 text-green-400" /> List New Item
              </CardTitle>
              <CardDescription className="text-gray-300">
                Guide To Listing Your Excess Manufacturing Inventory.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {/* Custom Progress Bar with Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step < currentStep
                        ? 'bg-green-500 text-white'
                        : step === currentStep
                          ? 'bg-green-500 text-white ring-4 ring-green-500/30'
                          : 'bg-gray-600 text-gray-300'
                        }`}>
                        {step < currentStep ? <Check className="w-5 h-5" /> : step}
                      </div>
                      <span className={`text-xs mt-2 text-center max-w-[80px] ${step <= currentStep ? 'text-green-400' : 'text-gray-500'
                        }`}>
                        {stepTitles[step - 1]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Line */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600 transform -translate-y-1/2 rounded-full"></div>
                  <div
                    className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transform -translate-y-1/2 rounded-full transition-all duration-500 shadow-lg shadow-green-500/30"
                    style={{
                      width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                      boxShadow: '0 0 10px rgba(34, 197, 94, 0.6), 0 0 20px rgba(34, 197, 94, 0.4)'
                    }}
                  ></div>
                </div>

                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-green-400" /> Basic Information
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="itemName" className="text-gray-300">Item Name</Label>
                      <Input
                        id="itemName"
                        type="text"
                        placeholder="e.g., Steel Copper etc.."
                        value={formData.itemName}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-gray-300">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleSelectChange(value, 'category')}>
                        <SelectTrigger id="category" className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500">
                          <SelectValue placeholder="Select category" className="text-gray-400" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {categories.map(cat => (
                            <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')} className="text-white hover:bg-gray-600">
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-300">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Write description here..."
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="condition" className="text-gray-300">Condition</Label>
                        <Select value={formData.condition} onValueChange={(value) => handleSelectChange(value, 'condition')}>
                          <SelectTrigger id="condition" className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500">
                            <SelectValue placeholder="Select condition" className="text-gray-400" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            {conditions.map(cond => (
                              <SelectItem key={cond} value={cond.toLowerCase().replace(/\s/g, '-')} className="text-white hover:bg-gray-600">
                                {cond}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-gray-300">Quantity</Label>
                        <div className="flex space-x-2">
                          <Input
                            id="quantity"
                            type="number"
                            placeholder="eg. 50 g"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 flex-grow"
                          />
                          <Select value={formData.unit} onValueChange={(value) => handleSelectChange(value, 'unit')}>
                            <SelectTrigger id="unit" className="w-[100px] bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500">
                              <SelectValue placeholder="units" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              {units.map(unit => (
                                <SelectItem key={unit} value={unit} className="text-white hover:bg-gray-600">
                                  {unit}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base mt-8 transition-all duration-300 shadow-lg shadow-green-600/30"
                      onClick={handleNext}
                    >
                      Next - Detailed Specification
                    </Button>
                  </div>
                )}

                {/* Step 2: Detailed Specifications & Media */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <Camera className="h-5 w-5 mr-2 mt-5 text-green-400" /> Detailed Specifications & Media
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions" className="text-gray-300">Dimensions</Label>
                      <span className='text-green-600'>(optional)</span>
                      <Input
                        id="dimensions"
                        type="text"
                        placeholder="e.g., 120cm x 80cm x 50cm"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-gray-300">Weight</Label>
                      <span className='text-green-600'>(optional)</span>
                      <Input
                        id="weight"
                        type="text"
                        placeholder="e.g., 25 kg, 1.5 tons"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certifications" className="text-gray-300">Certifications / Standards</Label>
                      <span className='text-green-600'>(optional)</span>
                      <Input
                        id="certifications"
                        type="text"
                        placeholder="e.g., ISO 9001, CE, RoHS"
                        value={formData.certifications}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="images" className="text-gray-300">Product Images / Videos</Label>
                      <Input
                        id="images"
                        type="file"
                        multiple
                        onChange={handleImageUpload}
                        className="bg-gray-700 border-gray-600 text-white file:bg-green-600 file:text-white file:border-0 file:rounded-md file:mr-4 file:py-2 file:px-4 hover:file:bg-green-700"
                      />
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.images.map((img, index) => (
                          <div key={index} className="relative">
                            <img src={img.url} alt={`Uploaded ${img.name}`} className="h-24 w-24 object-cover rounded-md border border-gray-600" />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-0 right-0 h-6 w-6 rounded-full -mt-2 -mr-2 bg-red-600 hover:bg-red-700"
                              onClick={() => removeImage(index)}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">Upload high-quality images or short videos of your product.</p>
                    </div>
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
                      >
                        Back
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
                        onClick={handleNext}
                      >
                        Next: Pricing & Logistics
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Pricing & Logistics */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-400" /> Pricing & Logistics
                    </h3>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Pricing Option</Label>
                      <RadioGroup value={formData.pricingOption} onValueChange={(value: PricingOption) => handleSelectChange(value, 'pricingOption')} className="flex space-x-4">
                        <Label htmlFor="fixed" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                          <RadioGroupItem value="fixed" id="fixed" className="text-green-500 border-gray-600" />
                          <span>Fixed Price</span>
                        </Label>
                        <Label htmlFor="minimum" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                          <RadioGroupItem value="minimum" id="minimum" className="text-green-500 border-gray-600" />
                          <span>Minimum Price (Negotiable)</span>
                        </Label>
                        <Label htmlFor="auction" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                          <RadioGroupItem value="auction" id="auction" className="text-green-500 border-gray-600" />
                          <span>Auction</span>
                        </Label>
                      </RadioGroup>
                    </div>

                    {formData.pricingOption === 'fixed' && (
                      <div className="space-y-2">
                        <Label htmlFor="fixedPrice" className="text-gray-300">Fixed Price (INR)</Label>
                        <Input
                          id="fixedPrice"
                          type="number"
                          placeholder="e.g., 55000"
                          value={formData.fixedPrice}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    )}
                    {formData.pricingOption === 'minimum' && (
                      <div className="space-y-2">
                        <Label htmlFor="minimumPrice" className="text-gray-300">Minimum Acceptable Price (INR)</Label>
                        <Input
                          id="minimumPrice"
                          type="number"
                          placeholder="e.g., 50000"
                          value={formData.minimumPrice}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    )}
                    {formData.pricingOption === 'auction' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="auctionStartTime" className="text-gray-300">Auction Start Time</Label>
                          <Input
                            id="auctionStartTime"
                            type="datetime-local"
                            value={formData.auctionStartTime}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="auctionEndTime" className="text-gray-300">Auction End Time</Label>
                          <Input
                            id="auctionEndTime"
                            type="datetime-local"
                            value={formData.auctionEndTime}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="text-gray-300">Logistics & Shipping</Label>
                      <RadioGroup value={formData.logisticsOption} onValueChange={(value: LogisticsOption) => handleSelectChange(value, 'logisticsOption')} className="flex space-x-4">
                        <Label htmlFor="seller-managed" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                          <RadioGroupItem value="seller-managed" id="seller-managed" className="text-green-500 border-gray-600" />
                          <span>Seller-Managed Shipping</span>
                        </Label>
                        <Label htmlFor="platform-integrated" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                          <RadioGroupItem value="platform-integrated" id="platform-integrated" className="text-green-500 border-gray-600" />
                          <span>Platform-Integrated Logistics</span>
                        </Label>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shippingNotes" className="text-gray-300">Shipping Notes</Label>
                      <span className='text-green-600'>(optional)</span>
                      <Textarea
                        id="shippingNotes"
                        placeholder="e.g., Buyer to arrange pickup, special handling instructions"
                        value={formData.shippingNotes}
                        onChange={handleInputChange}
                        rows={3}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button
                        onClick={handleBack}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
                      >
                        Back
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
                        onClick={handleNext}
                      >
                        Next: Review & Publish
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Publish */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-400" /> Review & Publish
                    </h3>

                    <Card className="bg-gray-700 border-gray-600 rounded-lg">
                      <CardContent className="p-4 space-y-3">
                        <h4 className="font-semibold text-lg text-white">Item Overview</h4>
                        <p className="text-gray-300">
                          <strong className="text-white">Item Name:</strong> {formData.itemName || 'N/A'}
                        </p>
                        <p className="text-gray-300">
                          <strong className="text-white">Category:</strong> {formData.category || 'N/A'}
                        </p>
                        <p className="text-gray-300">
                          <strong className="text-white">Description:</strong> {formData.description || 'N/A'}
                        </p>
                        <p className="text-gray-300">
                          <strong className="text-white">Condition:</strong> {formData.condition || 'N/A'}
                        </p>
                        <p className="text-gray-300">
                          <strong className="text-white">Quantity:</strong> {formData.quantity ? `${formData.quantity} ${formData.unit}` : 'N/A'}
                        </p>

                        {formData.images.length > 0 && (
                          <div>
                            <p className="text-gray-300">
                              <strong className="text-white">Images:</strong>
                            </p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {formData.images.map((img, index) => (
                                <img
                                  key={index}
                                  src={img.url}
                                  alt={img.name}
                                  className="h-16 w-16 object-cover rounded-md border border-gray-600"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-700 border-gray-600 rounded-lg">
                      <CardContent className="p-4 space-y-3">
                        <h4 className="font-semibold text-lg text-white">Pricing & Logistics</h4>
                        <p className="text-gray-300">
                          <strong className="text-white">Pricing Option:</strong> {formatPricingOption(formData.pricingOption)}
                        </p>

                        {formData.pricingOption === 'fixed' && (
                          <p className="text-gray-300">
                            <strong className="text-white">Fixed Price:</strong> ₹{formData.fixedPrice || 'N/A'}
                          </p>
                        )}

                        {formData.pricingOption === 'minimum' && (
                          <p className="text-gray-300">
                            <strong className="text-white">Minimum Price:</strong> ₹{formData.minimumPrice || 'N/A'}
                          </p>
                        )}

                        {formData.pricingOption === 'auction' && (
                          <>
                            <p className="text-gray-300">
                              <strong className="text-white">Auction Start:</strong> {formatDateTime(formData.auctionStartTime)}
                            </p>
                            <p className="text-gray-300">
                              <strong className="text-white">Auction End:</strong> {formatDateTime(formData.auctionEndTime)}
                            </p>
                          </>
                        )}

                        <p className="text-gray-300">
                          <strong className="text-white">Logistics:</strong> {formatLogisticsOption(formData.logisticsOption)}
                        </p>
                        <p className="text-gray-300">
                          <strong className="text-white">Shipping Notes:</strong> {formData.shippingNotes || 'N/A'}
                        </p>
                      </CardContent>
                    </Card>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreePublish"
                        checked={true}
                        disabled
                        className="border-gray-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      />
                      <Label htmlFor="agreePublish" className="text-sm text-gray-300">
                        I confirm all details are accurate and agree to publish this listing.
                      </Label>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
                      >
                        Back
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
                        onClick={handleSubmitListing}
                      >
                        Publish Listing
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ListNewItemPage;