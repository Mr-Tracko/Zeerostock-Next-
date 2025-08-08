'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { FileText } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
interface FormData {
  itemName: string;
  category: string;
  quantity: string;
  specifications: string;
  deliveryDate: string;
  contactEmail: string;
}

interface Category {
  id: string;
  name: string;
}

const RequestQuotePage: React.FC = () => {
  const router = useRouter();

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    itemName: '',
    category: '',
    quantity: '',
    specifications: '',
    deliveryDate: '',
    contactEmail: ''
  });

  // Categories data with proper typing
  const categories: Category[] = [
    { id: 'raw-materials', name: 'Raw Materials' },
    { id: 'components', name: 'Components' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'chemicals', name: 'Chemicals' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'other', name: 'Other' }
  ];

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API calls or navigation logic here
  };

  // Generic input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Select change handler
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
            <CardHeader className="pb-4 border-b border-green-500/20">
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <FileText className="h-6 w-6 mr-2 text-green-400" /> Request for Quote (RFQ)
              </CardTitle>
              <CardDescription className="text-green-100">
                Submit a request for a custom quote for specific items or bulk needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="itemName" className="text-gray-300 font-medium">
                    Item Name / Part Number
                  </Label>
                  <Input
                    id="itemName"
                    type="text"
                    placeholder="e.g., Stainless Steel Sheets, XYZ-123 Bearing"
                    required
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-300 font-medium">
                    Category
                  </Label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger 
                      id="category" 
                      className="bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring-green-400 rounded-md"
                    >
                      <SelectValue placeholder="Select a category" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      {categories.map((cat: Category) => (
                        <SelectItem 
                          key={cat.id} 
                          value={cat.id}
                          className="text-white hover:bg-gray-600 focus:bg-gray-600"
                        >
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-gray-300 font-medium">
                    Required Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="text"
                    placeholder="e.g., 500 units, 10 tons, 1 lot"
                    required
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specifications" className="text-gray-300 font-medium">
                    Detailed Specifications / Requirements
                  </Label>
                  <Textarea
                    id="specifications"
                    placeholder="Provide detailed information about the item, including dimensions, material grade, condition, certifications, etc."
                    rows={5}
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryDate" className="text-gray-300 font-medium">
                    Desired Delivery Date (Optional)
                  </Label>
                  <Input
                    id="deliveryDate"
                    type="date"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring-green-400 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-gray-300 font-medium">
                    Your Contact Email
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="Enter your email for communication"
                    required
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400 rounded-md"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base font-semibold transition-colors mt-8"
                >
                  Submit RFQ
                </Button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
                Your request will be sent to relevant sellers who can provide a quote.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;