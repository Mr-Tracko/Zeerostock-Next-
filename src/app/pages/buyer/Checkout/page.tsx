// 'use client';

// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { Button } from '../../../components/ui/button';
// import { Checkbox } from '../../../components/ui/checkbox';
// import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
// import { Separator } from '../../../components/ui/separator';
// import { Truck, CreditCard, CheckSquare, Check, Package } from 'lucide-react';
// import BuyerSidebar from '../../../components/BuyerSidebar';

// // Type definitions
// interface ShippingAddress {
//   fullName: string;
//   addressLine1: string;
//   addressLine2: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   country: string;
// }

// interface CardDetails {
//   cardNumber: string;
//   cardName: string;
//   expiryDate: string;
//   cvv: string;
// }

// interface CartItem {
//   id: string;
//   name: string;
//   pricePerUnit: number;
//   quantity: number;
//   unit: string;
// }

// interface ShippingMethod {
//   id: string;
//   name: string;
//   cost: number;
// }

// type PaymentMethod = 'credit_card' | 'net_banking' | 'upi';

// const BuyerCheckoutPage: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState<number>(1); // 1: Shipping, 2: Payment, 3: Review
//   const totalSteps: number = 3;

//   const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
//     fullName: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'India',
//   });

//   const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>('standard');
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('credit_card');
  
//   const [cardDetails, setCardDetails] = useState<CardDetails>({
//     cardNumber: '',
//     cardName: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);

//   // Dummy cart items for checkout summary
//   const cartItems: CartItem[] = [
//     { id: 'item-001', name: 'High-Grade Steel Coils', pricePerUnit: 55000, quantity: 1, unit: 'Ton' },
//     { id: 'item-002', name: 'Electronic Microcontrollers', pricePerUnit: 120, quantity: 100, unit: 'Unit' },
//   ];

//   const shippingMethods: ShippingMethod[] = [
//     { id: 'standard', name: 'Standard Shipping (5-7 business days)', cost: 500 },
//     { id: 'express', name: 'Express Shipping (2-3 business days)', cost: 1500 },
//   ];

//   const calculateSubtotal = (): number => 
//     cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
  
//   const calculateShippingCost = (): number => 
//     shippingMethods.find(method => method.id === selectedShippingMethod)?.cost || 0;
  
//   const calculateTotal = (): number => calculateSubtotal() + calculateShippingCost();
  
//   const formattedPrice = (price: number): string => `₹${price.toLocaleString('en-IN')}`;

//   const handleNext = (): void => {
//     // Basic validation before moving to next step
//     if (currentStep === 1) {
//       if (!shippingAddress.fullName || !shippingAddress.addressLine1 || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode) {
//         alert('Please fill in all required shipping details.');
//         return;
//       }
//     } else if (currentStep === 2) {
//       if (selectedPaymentMethod === 'credit_card' && (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv)) {
//         alert('Please fill in all required card details.');
//         return;
//       }
//     }
//     setCurrentStep(prev => prev + 1);
//   };

//   const handleBack = (): void => {
//     setCurrentStep(prev => prev - 1);
//   };

//   const handlePlaceOrder = (): void => {
//     if (!agreeToTerms) {
//       alert('Please agree to the terms and conditions.');
//       return;
//     }
//     console.log('Placing order with:', {
//       shippingAddress,
//       selectedShippingMethod,
//       selectedPaymentMethod,
//     });
//     alert('Order placed successfully! Redirecting to order confirmation.');
//   };

//   const stepTitles: string[] = [
//     'Shipping',
//     'Payment',
//     'Review'
//   ];

//   const handleShippingAddressChange = (field: keyof ShippingAddress, value: string): void => {
//     setShippingAddress(prev => ({ ...prev, [field]: value }));
//   };

//   const handleCardDetailsChange = (field: keyof CardDetails, value: string): void => {
//     setCardDetails(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//          <BuyerSidebar />
//        </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-4xl mx-auto space-y-8">
//           {/* Cart Summary Banner */}
//           <div className="bg-white border-green-500/30 rounded-lg p-4 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <div>
//                 <h3 className="text-green-400 font-semibold">Cart Ready for Checkout</h3>
//                 <p className="text-green-300 text-sm">Complete your purchase in a few easy steps</p>
//               </div>
//             </div>
//             <div className="text-green-400">
//               <Package className="w-5 h-5" />
//             </div>
//           </div>

//           <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
//             <CardHeader className="pb-4 border-b border-gray-700">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <CreditCard className="h-6 w-6 mr-2 text-green-400" /> Checkout
//               </CardTitle>
//               <CardDescription className="text-gray-300">
//                 Complete your purchase in a few easy steps.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               {/* Custom Progress Bar with Steps */}
//               <div className="mb-8">
//                 <div className="flex items-center justify-between mb-4">
//                   {[1, 2, 3].map((step) => (
//                     <div key={step} className="flex flex-col items-center">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step < currentStep
//                         ? 'bg-green-500 text-white'
//                         : step === currentStep
//                           ? 'bg-green-500 text-white ring-4 ring-green-500/30'
//                           : 'bg-gray-600 text-gray-300'
//                         }`}>
//                         {step < currentStep ? <Check className="w-5 h-5" /> : step}
//                       </div>
//                       <span className={`text-xs mt-2 text-center max-w-[80px] ${step <= currentStep ? 'text-green-400' : 'text-gray-500'
//                         }`}>
//                         {stepTitles[step - 1]}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Progress Line */}
//                 <div className="relative">
//                   <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600 transform -translate-y-1/2 rounded-full"></div>
//                   <div
//                     className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transform -translate-y-1/2 rounded-full transition-all duration-500 shadow-lg shadow-green-500/30"
//                     style={{
//                       width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
//                       boxShadow: '0 0 10px rgba(34, 197, 94, 0.6), 0 0 20px rgba(34, 197, 94, 0.4)'
//                     }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Step 1: Shipping Information */}
//               {currentStep === 1 && (
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold text-white flex items-center">
//                     <Truck className="h-5 w-5 mr-2 text-green-400" /> Shipping Address
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="fullName" className="text-gray-300">Full Name</Label>
//                       <Input
//                         id="fullName"
//                         type="text"
//                         value={shippingAddress.fullName}
//                         onChange={(e) => handleShippingAddressChange('fullName', e.target.value)}
//                         required
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="addressLine1" className="text-gray-300">Address Line 1</Label>
//                       <Input
//                         id="addressLine1"
//                         type="text"
//                         value={shippingAddress.addressLine1}
//                         onChange={(e) => handleShippingAddressChange('addressLine1', e.target.value)}
//                         placeholder="Street address, P.O. Box"
//                         required
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="addressLine2" className="text-gray-300">Address Line 2</Label>
//                     <span className='text-green-600'>(optional)</span>
//                     <Input
//                       id="addressLine2"
//                       type="text"
//                       value={shippingAddress.addressLine2}
//                       onChange={(e) => handleShippingAddressChange('addressLine2', e.target.value)}
//                       placeholder="Apartment, suite, unit, building, floor, etc."
//                       className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="city" className="text-gray-300">City</Label>
//                       <Input
//                         id="city"
//                         type="text"
//                         value={shippingAddress.city}
//                         onChange={(e) => handleShippingAddressChange('city', e.target.value)}
//                         required
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="state" className="text-gray-300">State</Label>
//                       <Input
//                         id="state"
//                         type="text"
//                         value={shippingAddress.state}
//                         onChange={(e) => handleShippingAddressChange('state', e.target.value)}
//                         required
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="zipCode" className="text-gray-300">Zip Code</Label>
//                       <Input
//                         id="zipCode"
//                         type="text"
//                         value={shippingAddress.zipCode}
//                         onChange={(e) => handleShippingAddressChange('zipCode', e.target.value)}
//                         required
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="country" className="text-gray-300">Country</Label>
//                     <Input
//                       id="country"
//                       type="text"
//                       value={shippingAddress.country}
//                       disabled
//                       className="bg-gray-700 border-gray-600 text-gray-400"
//                     />
//                   </div>

//                   <h3 className="text-xl font-semibold text-white flex items-center mt-8">
//                     <Truck className="h-5 w-5 mr-2 text-green-400" /> Shipping Method
//                   </h3>
//                   <RadioGroup value={selectedShippingMethod} onValueChange={setSelectedShippingMethod} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {shippingMethods.map(method => (
//                       <Label key={method.id} htmlFor={method.id} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 bg-gray-800">
//                         <div className="flex items-center space-x-2">
//                           <RadioGroupItem value={method.id} id={method.id} className="text-green-500 border-gray-500" />
//                           <span className="text-gray-300">{method.name}</span>
//                         </div>
//                         <span className="font-semibold text-white">{formattedPrice(method.cost)}</span>
//                       </Label>
//                     ))}
//                   </RadioGroup>

//                   <Button
//                     className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base mt-8 transition-all duration-300 shadow-lg shadow-green-600/30"
//                     onClick={handleNext}
//                   >
//                     Continue to Payment
//                   </Button>
//                 </div>
//               )}

//               {/* Step 2: Payment Information */}
//               {currentStep === 2 && (
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold text-white flex items-center">
//                     <CreditCard className="h-5 w-5 mr-2 text-green-400" /> Payment Method
//                   </h3>
//                   <RadioGroup value={selectedPaymentMethod} onValueChange={(value: PaymentMethod) => setSelectedPaymentMethod(value)} className="space-y-4">
//                     <Label htmlFor="credit_card" className="flex items-center space-x-2 p-4 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 bg-gray-800">
//                       <RadioGroupItem value="credit_card" id="credit_card" className="text-green-500 border-gray-500" />
//                       <span className="text-gray-300">Credit/Debit Card</span>
//                     </Label>
//                     {selectedPaymentMethod === 'credit_card' && (
//                       <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-700">
//                         <div className="space-y-2">
//                           <Label htmlFor="cardNumber" className="text-gray-300">Card Number</Label>
//                           <Input
//                             id="cardNumber"
//                             type="text"
//                             placeholder="XXXX XXXX XXXX XXXX"
//                             value={cardDetails.cardNumber}
//                             onChange={(e) => handleCardDetailsChange('cardNumber', e.target.value)}
//                             required
//                             className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="cardName" className="text-gray-300">Name on Card</Label>
//                           <Input
//                             id="cardName"
//                             type="text"
//                             placeholder="John Doe"
//                             value={cardDetails.cardName}
//                             onChange={(e) => handleCardDetailsChange('cardName', e.target.value)}
//                             required
//                             className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="expiryDate" className="text-gray-300">Expiry Date</Label>
//                             <Input
//                               id="expiryDate"
//                               type="text"
//                               placeholder="MM/YY"
//                               value={cardDetails.expiryDate}
//                               onChange={(e) => handleCardDetailsChange('expiryDate', e.target.value)}
//                               required
//                               className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="cvv" className="text-gray-300">CVV</Label>
//                             <Input
//                               id="cvv"
//                               type="text"
//                               placeholder="XXX"
//                               value={cardDetails.cvv}
//                               onChange={(e) => handleCardDetailsChange('cvv', e.target.value)}
//                               required
//                               className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <Label htmlFor="net_banking" className="flex items-center space-x-2 p-4 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 bg-gray-800">
//                       <RadioGroupItem value="net_banking" id="net_banking" className="text-green-500 border-gray-500" />
//                       <span className="text-gray-300">Net Banking</span>
//                     </Label>
//                     {selectedPaymentMethod === 'net_banking' && (
//                       <div className="p-4 border border-gray-600 rounded-lg bg-gray-700">
//                         <p className="text-gray-300">You will be redirected to website of your bank to complete the payment.</p>
//                       </div>
//                     )}

//                     <Label htmlFor="upi" className="flex items-center space-x-2 p-4 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 bg-gray-800">
//                       <RadioGroupItem value="upi" id="upi" className="text-green-500 border-gray-500" />
//                       <span className="text-gray-300">UPI</span>
//                     </Label>
//                     {selectedPaymentMethod === 'upi' && (
//                       <div className="p-4 border border-gray-600 rounded-lg bg-gray-700">
//                         <div className="space-y-2">
//                           <Label htmlFor="upiId" className="text-gray-300">UPI ID</Label>
//                           <Input
//                             id="upiId"
//                             type="text"
//                             placeholder="yourname@bankupi"
//                             className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </RadioGroup>

//                   <div className="flex justify-between mt-8">
//                     <Button
//                       onClick={handleBack}
//                       className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
//                     >
//                       Back to Shipping
//                     </Button>
//                     <Button
//                       className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
//                       onClick={handleNext}
//                     >
//                       Continue to Review
//                     </Button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Order Review */}
//               {currentStep === 3 && (
//                 <div className="space-y-6">
//                   <h3 className="text-xl font-semibold text-white flex items-center">
//                     <CheckSquare className="h-5 w-5 mr-2 text-green-400" /> Order Review
//                   </h3>

//                   {/* Items Review */}
//                   <Card className="bg-gray-700 border-gray-600 rounded-lg">
//                     <CardContent className="p-4">
//                       <CardTitle className="text-lg font-semibold mb-3 text-white">Items in Cart</CardTitle>
//                       <ul className="space-y-2">
//                         {cartItems.map(item => (
//                           <li key={item.id} className="flex justify-between text-gray-300 text-sm">
//                             <span>{item.name} ({item.quantity} {item.unit})</span>
//                             <span className="text-white">{formattedPrice(item.pricePerUnit * item.quantity)}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>

//                   {/* Shipping Review */}
//                   <Card className="bg-gray-700 border-gray-600 rounded-lg">
//                     <CardContent className="p-4">
//                       <CardTitle className="text-lg font-semibold mb-3 text-white">Shipping Details</CardTitle>
//                       <address className="not-italic text-gray-300 text-sm space-y-1">
//                         <p>{shippingAddress.fullName}</p>
//                         <p>{shippingAddress.addressLine1}</p>
//                         {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
//                         <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.zipCode}</p>
//                         <p>{shippingAddress.country}</p>
//                       </address>
//                       <p className="text-sm text-gray-300 mt-2">
//                         <span className="text-white">Method:</span> {shippingMethods.find(m => m.id === selectedShippingMethod)?.name}
//                       </p>
//                     </CardContent>
//                   </Card>

//                   {/* Payment Review */}
//                   <Card className="bg-gray-700 border-gray-600 rounded-lg">
//                     <CardContent className="p-4">
//                       <CardTitle className="text-lg font-semibold mb-3 text-white">Payment Method</CardTitle>
//                       <p className="text-gray-300 text-sm">
//                         {selectedPaymentMethod === 'credit_card' && `Credit/Debit Card ending in ${cardDetails.cardNumber.slice(-4)}`}
//                         {selectedPaymentMethod === 'net_banking' && 'Net Banking'}
//                         {selectedPaymentMethod === 'upi' && 'UPI'}
//                       </p>
//                     </CardContent>
//                   </Card>

//                   {/* Order Summary */}
//                   <Card className="bg-gray-700 border-gray-600 rounded-lg">
//                     <CardContent className="p-4">
//                       <CardTitle className="text-xl font-bold text-white mb-4">Order Summary</CardTitle>
//                       <div className="space-y-2">
//                         <div className="flex justify-between text-gray-300">
//                           <span>Subtotal:</span>
//                           <span className="text-white">{formattedPrice(calculateSubtotal())}</span>
//                         </div>
//                         <div className="flex justify-between text-gray-300">
//                           <span>Shipping:</span>
//                           <span className="text-white">{formattedPrice(calculateShippingCost())}</span>
//                         </div>
//                         <Separator className="my-2 bg-gray-600" />
//                         <div className="flex justify-between font-bold text-lg text-white">
//                           <span>Total:</span>
//                           <span>{formattedPrice(calculateTotal())}</span>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <div className="flex items-center space-x-2 mt-6">
//                     <Checkbox
//                       id="agreeTerms"
//                       checked={agreeToTerms}
//                       onCheckedChange={(checked: boolean) => setAgreeToTerms(checked)}
//                       className="border-gray-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
//                     />
//                     <Label htmlFor="agreeTerms" className="text-sm text-gray-300">
//                       I agree to the <a href="#" className="text-green-400 hover:underline">Terms & Conditions</a>
//                     </Label>
//                   </div>

//                   <div className="flex justify-between mt-8">
//                     <Button
//                       onClick={handleBack}
//                       className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
//                     >
//                       Back to Payment
//                     </Button>
//                     <Button
//                       className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg shadow-green-600/30"
//                       onClick={handlePlaceOrder}
//                     >
//                       Place Order
//                     </Button>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerCheckoutPage;

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Separator } from '../../../components/ui/separator';
import { Truck, CreditCard, CheckSquare, Check, Package } from 'lucide-react';
import BuyerSidebar from '../../../components/BuyerSidebar';

// Type definitions
interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface CardDetails {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

interface CartItem {
  id: string;
  name: string;
  pricePerUnit: number;
  quantity: number;
  unit: string;
}

interface ShippingMethod {
  id: string;
  name: string;
  cost: number;
}

type PaymentMethod = 'credit_card' | 'net_banking' | 'upi';

const BuyerCheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Shipping, 2: Payment, 3: Review
  const totalSteps: number = 3;

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  });

  const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>('standard');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('credit_card');
  
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);

  // Dummy cart items for checkout summary
  const cartItems: CartItem[] = [
    { id: 'item-001', name: 'High-Grade Steel Coils', pricePerUnit: 55000, quantity: 1, unit: 'Ton' },
    { id: 'item-002', name: 'Electronic Microcontrollers', pricePerUnit: 120, quantity: 100, unit: 'Unit' },
  ];

  const shippingMethods: ShippingMethod[] = [
    { id: 'standard', name: 'Standard Shipping (5-7 business days)', cost: 500 },
    { id: 'express', name: 'Express Shipping (2-3 business days)', cost: 1500 },
  ];

  const calculateSubtotal = (): number => 
    cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
  
  const calculateShippingCost = (): number => 
    shippingMethods.find(method => method.id === selectedShippingMethod)?.cost || 0;
  
  const calculateTotal = (): number => calculateSubtotal() + calculateShippingCost();
  
  const formattedPrice = (price: number): string => `₹${price.toLocaleString('en-IN')}`;

  const handleNext = (): void => {
    // Basic validation before moving to next step
    if (currentStep === 1) {
      if (!shippingAddress.fullName || !shippingAddress.addressLine1 || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode) {
        alert('Please fill in all required shipping details.');
        return;
      }
    } else if (currentStep === 2) {
      if (selectedPaymentMethod === 'credit_card' && (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv)) {
        alert('Please fill in all required card details.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = (): void => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePlaceOrder = (): void => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    console.log('Placing order with:', {
      shippingAddress,
      selectedShippingMethod,
      selectedPaymentMethod,
    });
    alert('Order placed successfully! Redirecting to order confirmation.');
  };

  const stepTitles: string[] = [
    'Shipping',
    'Payment',
    'Review'
  ];

  const handleShippingAddressChange = (field: keyof ShippingAddress, value: string): void => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleCardDetailsChange = (field: keyof CardDetails, value: string): void => {
    setCardDetails(prev => ({ ...prev, [field]: value }));
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
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Checkout</h1>
            <p className="text-gray-800 text-base">Complete your purchase in a few easy steps</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=JS" alt="John Smith" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-gray-900 hidden sm:block">John Smith</span>
            </div>
          </div>
        </div>

        {/* Cart Summary Banner */}
        <div className="bg-white border border-green-500/30 text-green-900 px-4 py-3 rounded-lg flex justify-between items-center backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <span className="font-semibold text-green-800">Cart Ready for Checkout</span>
              <span className="text-green-800 ml-2">- Complete your purchase in a few easy steps</span>
            </div>
          </div>
          <Package className="h-5 w-5 text-green-400" />
        </div>

        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <CreditCard className="h-6 w-6 mr-2 text-green-400" /> Checkout Process
            </CardTitle>
            <CardDescription className="text-gray-700">
              Complete your purchase in {totalSteps} easy steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {/* Custom Progress Bar with Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step < currentStep
                      ? 'bg-green-500 text-white'
                      : step === currentStep
                        ? 'bg-green-500 text-white ring-4 ring-green-500/30'
                        : 'bg-gray-400 text-gray-700'
                      }`}>
                      {step < currentStep ? <Check className="w-5 h-5" /> : step}
                    </div>
                    <span className={`text-xs mt-2 text-center max-w-[80px] ${step <= currentStep ? 'text-green-700 font-semibold' : 'text-gray-600'
                      }`}>
                      {stepTitles[step - 1]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Line */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 transform -translate-y-1/2 rounded-full"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transform -translate-y-1/2 rounded-full transition-all duration-500 shadow-lg shadow-green-500/30"
                  style={{
                    width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                    boxShadow: '0 0 10px rgba(34, 197, 94, 0.6), 0 0 20px rgba(34, 197, 94, 0.4)'
                  }}
                ></div>
              </div>
            </div>

            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-green-400" /> Shipping Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700 font-semibold">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={shippingAddress.fullName}
                      onChange={(e) => handleShippingAddressChange('fullName', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addressLine1" className="text-gray-700 font-semibold">Address Line 1</Label>
                    <Input
                      id="addressLine1"
                      type="text"
                      value={shippingAddress.addressLine1}
                      onChange={(e) => handleShippingAddressChange('addressLine1', e.target.value)}
                      placeholder="Street address, P.O. Box"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressLine2" className="text-gray-700 font-semibold">Address Line 2</Label>
                  <span className='text-green-600 text-sm ml-2'>(optional)</span>
                  <Input
                    id="addressLine2"
                    type="text"
                    value={shippingAddress.addressLine2}
                    onChange={(e) => handleShippingAddressChange('addressLine2', e.target.value)}
                    placeholder="Apartment, suite, unit, building, floor, etc."
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700 font-semibold">City</Label>
                    <Input
                      id="city"
                      type="text"
                      value={shippingAddress.city}
                      onChange={(e) => handleShippingAddressChange('city', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-700 font-semibold">State</Label>
                    <Input
                      id="state"
                      type="text"
                      value={shippingAddress.state}
                      onChange={(e) => handleShippingAddressChange('state', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-gray-700 font-semibold">Zip Code</Label>
                    <Input
                      id="zipCode"
                      type="text"
                      value={shippingAddress.zipCode}
                      onChange={(e) => handleShippingAddressChange('zipCode', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-gray-700 font-semibold">Country</Label>
                  <Input
                    id="country"
                    type="text"
                    value={shippingAddress.country}
                    disabled
                    className="bg-gray-200 border-gray-300 text-gray-600"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 flex items-center mt-8">
                  <Truck className="h-5 w-5 mr-2 text-green-400" /> Shipping Method
                </h3>
                <RadioGroup value={selectedShippingMethod} onValueChange={setSelectedShippingMethod} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {shippingMethods.map(method => (
                    <Label key={method.id} htmlFor={method.id} className="flex items-center justify-between p-4 border border-green-500/30 rounded-lg cursor-pointer hover:bg-white bg-white shadow-sm">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={method.id} id={method.id} className="text-green-500 border-green-500" />
                        <span className="text-gray-700">{method.name}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{formattedPrice(method.cost)}</span>
                    </Label>
                  ))}
                </RadioGroup>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base mt-8 transition-all duration-300 shadow-lg"
                  onClick={handleNext}
                >
                  Continue to Payment
                </Button>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-green-400" /> Payment Method
                </h3>
                <RadioGroup value={selectedPaymentMethod} onValueChange={(value: PaymentMethod) => setSelectedPaymentMethod(value)} className="space-y-4">
                  <Label htmlFor="credit_card" className="flex items-center space-x-2 p-4 border border-green-500/30 rounded-lg cursor-pointer hover:bg-white bg-white shadow-sm">
                    <RadioGroupItem value="credit_card" id="credit_card" className="text-green-500 border-green-500" />
                    <span className="text-gray-700">Credit/Debit Card</span>
                  </Label>
                  {selectedPaymentMethod === 'credit_card' && (
                    <div className="space-y-4 p-4 border border-green-500/30 rounded-lg bg-white shadow-sm">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-gray-700 font-semibold">Card Number</Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                          value={cardDetails.cardNumber}
                          onChange={(e) => handleCardDetailsChange('cardNumber', e.target.value)}
                          required
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName" className="text-gray-700 font-semibold">Name on Card</Label>
                        <Input
                          id="cardName"
                          type="text"
                          placeholder="John Doe"
                          value={cardDetails.cardName}
                          onChange={(e) => handleCardDetailsChange('cardName', e.target.value)}
                          required
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate" className="text-gray-700 font-semibold">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                            value={cardDetails.expiryDate}
                            onChange={(e) => handleCardDetailsChange('expiryDate', e.target.value)}
                            required
                            className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-gray-700 font-semibold">CVV</Label>
                          <Input
                            id="cvv"
                            type="text"
                            placeholder="XXX"
                            value={cardDetails.cvv}
                            onChange={(e) => handleCardDetailsChange('cvv', e.target.value)}
                            required
                            className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <Label htmlFor="net_banking" className="flex items-center space-x-2 p-4 border border-green-500/30 rounded-lg cursor-pointer hover:bg-white bg-white shadow-sm">
                    <RadioGroupItem value="net_banking" id="net_banking" className="text-green-500 border-green-500" />
                    <span className="text-gray-700">Net Banking</span>
                  </Label>
                  {selectedPaymentMethod === 'net_banking' && (
                    <div className="p-4 border border-green-500/30 rounded-lg bg-white shadow-sm">
                      <p className="text-gray-700">You will be redirected to website of your bank to complete the payment.</p>
                    </div>
                  )}

                  <Label htmlFor="upi" className="flex items-center space-x-2 p-4 border border-green-500/30 rounded-lg cursor-pointer hover:bg-white bg-white shadow-sm">
                    <RadioGroupItem value="upi" id="upi" className="text-green-500 border-green-500" />
                    <span className="text-gray-700">UPI</span>
                  </Label>
                  {selectedPaymentMethod === 'upi' && (
                    <div className="p-4 border border-green-500/30 rounded-lg bg-white shadow-sm">
                      <div className="space-y-2">
                        <Label htmlFor="upiId" className="text-gray-700 font-semibold">UPI ID</Label>
                        <Input
                          id="upiId"
                          type="text"
                          placeholder="yourname@bankupi"
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  )}
                </RadioGroup>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={handleBack}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg"
                  >
                    Back to Shipping
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg"
                    onClick={handleNext}
                  >
                    Continue to Review
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <CheckSquare className="h-5 w-5 mr-2 text-green-400" /> Order Review
                </h3>

                {/* Items Review */}
                <Card className="bg-white border-green-500/20 rounded-lg shadow-sm">
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-3 text-gray-900">Items in Cart</CardTitle>
                    <ul className="space-y-2">
                      {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between text-gray-700 text-sm">
                          <span>{item.name} ({item.quantity} {item.unit})</span>
                          <span className="text-gray-900 font-semibold">{formattedPrice(item.pricePerUnit * item.quantity)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Shipping Review */}
                <Card className="bg-white border-green-500/20 rounded-lg shadow-sm">
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-3 text-gray-900">Shipping Details</CardTitle>
                    <address className="not-italic text-gray-700 text-sm space-y-1">
                      <p>{shippingAddress.fullName}</p>
                      <p>{shippingAddress.addressLine1}</p>
                      {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                      <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.zipCode}</p>
                      <p>{shippingAddress.country}</p>
                    </address>
                    <p className="text-sm text-gray-700 mt-2">
                      <span className="text-gray-900 font-semibold">Method:</span> {shippingMethods.find(m => m.id === selectedShippingMethod)?.name}
                    </p>
                  </CardContent>
                </Card>

                {/* Payment Review */}
                <Card className="bg-white border-green-500/20 rounded-lg shadow-sm">
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-3 text-gray-900">Payment Method</CardTitle>
                    <p className="text-gray-700 text-sm">
                      {selectedPaymentMethod === 'credit_card' && `Credit/Debit Card ending in ${cardDetails.cardNumber.slice(-4)}`}
                      {selectedPaymentMethod === 'net_banking' && 'Net Banking'}
                      {selectedPaymentMethod === 'upi' && 'UPI'}
                    </p>
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card className="bg-white border-green-500/20 rounded-lg shadow-lg">
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4">Order Summary</CardTitle>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-700">
                        <span>Subtotal:</span>
                        <span className="text-gray-900 font-semibold">{formattedPrice(calculateSubtotal())}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Shipping:</span>
                        <span className="text-gray-900 font-semibold">{formattedPrice(calculateShippingCost())}</span>
                      </div>
                      <Separator className="my-2 bg-gray-300" />
                      <div className="flex justify-between font-bold text-lg text-gray-900">
                        <span>Total:</span>
                        <span>{formattedPrice(calculateTotal())}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox
                    id="agreeTerms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked: boolean) => setAgreeToTerms(checked)}
                    className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                  />
                  <Label htmlFor="agreeTerms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-green-600 hover:underline font-semibold">Terms & Conditions</a>
                  </Label>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={handleBack}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg"
                  >
                    Back to Payment
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition-all duration-300 shadow-lg"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerCheckoutPage;