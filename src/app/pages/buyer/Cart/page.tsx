// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
// import { Button } from '../../../components/ui/button';
// import { Input } from '../../../components/ui/input';
// import { Trash2, ShoppingCart } from 'lucide-react';
// import BuyerSidebar from "../../../components/BuyerSidebar";

// // TypeScript interfaces
// interface CartItem {
//   id: string;
//   name: string;
//   description: string;
//   pricePerUnit: number; // in INR
//   unit: string;
//   quantity: number;
//   minOrderQuantity: number;
//   seller: string;
// }

// const BuyerCartPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy cart items state with TypeScript typing
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: 'item-001',
//       name: 'High-Grade Steel Coils',
//       description: 'Excess prime steel coils',
//       pricePerUnit: 55000, // in INR
//       unit: 'Ton',
//       quantity: 1,
//       minOrderQuantity: 1,
//       seller: 'MetalFab India',
//     },
//     {
//       id: 'item-002',
//       name: 'Electronic Controllers',
//       description: 'Batch of unused ATmega328P',
//       pricePerUnit: 120, // in INR
//       unit: 'Unit',
//       quantity: 100,
//       minOrderQuantity: 10,
//       seller: 'ElectroCorp Pvt Ltd',
//     },
//   ]);

//   const updateQuantity = (id: string, newQuantity: number): void => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity: Math.max(item.minOrderQuantity, newQuantity) } : item
//       )
//     );
//   };

//   const removeItem = (id: string): void => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const calculateSubtotal = (): number => {
//     return cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
//   };

//   const formattedPrice = (price: number): string => `₹${price.toLocaleString('en-IN')}`;

//   const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: string): void => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value)) {
//       updateQuantity(id, value);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Sidebar */}
//       <div className="w-64 m-5">
//         <BuyerSidebar/>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-13 p-6">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl">
//             <CardHeader className="pb-4 border-b border-gray-700">
//               <CardTitle className="text-2xl font-bold text-white flex items-center">
//                 <ShoppingCart className="h-6 w-6 mr-2 text-green-400" /> Your Shopping Cart
//               </CardTitle>
//               <CardDescription className="text-gray-300">
//                 Review your selected items before proceeding to checkout.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-6">
//               {cartItems.length === 0 ? (
//                 <div className="text-center py-12 text-gray-400">
//                   <p className="text-lg mb-4">Your cart is empty.</p>
//                   <Button 
//                     onClick={() => router.push('/search-inventory')}
//                     className="bg-green-600 hover:bg-green-700 text-white"
//                   >
//                     Start Browsing Inventory
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                   {/* Cart Items Table */}
//                   <div className="lg:col-span-2">
//                     <div className="overflow-x-auto">
//                       <Table>
//                         <TableHeader>
//                           <TableRow className="border-gray-700 hover:bg-gray-700/50">
//                             <TableHead className="w-[200px] text-gray-300 font-semibold">Product</TableHead>
//                             <TableHead className="text-gray-300 font-semibold ">Description</TableHead>
//                             <TableHead className="text-gray-300 font-semibold">Price</TableHead>
//                             <TableHead className="text-center text-gray-300 font-semibold">Quantity</TableHead>
//                             <TableHead className="text-right text-gray-300 font-semibold">Total</TableHead>
//                             <TableHead className="text-right text-gray-300 font-semibold">Actions</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {cartItems.map((item: CartItem) => (
//                             <TableRow key={item.id} className="border-gray-700 hover:bg-gray-700/30 transition-colors">
//                               <TableCell className="font-medium text-gray-300">
//                                 <div className="flex items-center space-x-3">
//                                   <span className="text-green-400 font-semibold">{item.name}</span>
//                                 </div>
//                               </TableCell>
//                               <TableCell className="text-gray-300">{item.description}</TableCell>
//                               <TableCell className="text-gray-300 font-semibold">
//                                 {formattedPrice(item.pricePerUnit)} / {item.unit}
//                               </TableCell>
//                               <TableCell className="text-center">
//                                 <Input
//                                   type="number"
//                                   min={item.minOrderQuantity}
//                                   value={item.quantity}
//                                   onChange={(e) => handleQuantityChange(e, item.id)}
//                                   className="w-24 text-center bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring-green-400"
//                                 />
//                               </TableCell>
//                               <TableCell className="text-right font-semibold text-green-400">
//                                 {formattedPrice(item.pricePerUnit * item.quantity)}
//                               </TableCell>
//                               <TableCell className="text-right">
//                                 <Button 
//                                   variant="ghost" 
//                                   size="icon" 
//                                   onClick={() => removeItem(item.id)} 
//                                   aria-label="Remove item"
//                                   className="hover:bg-red-500/10 transition-colors"
//                                 >
//                                   <Trash2 className="h-4 w-4 text-red-400 hover:text-red-300" />
//                                 </Button>
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </div>
//                   </div>

//                   {/* Cart Summary */}
//                   <Card className="bg-gray-800 border-gray-700 rounded-lg shadow-xl h-fit">
//                     <CardContent className="p-6">
//                       <CardTitle className="text-xl font-bold text-white mb-4 flex items-center">
//                         <span className="text-green-400">Order Summary</span>
//                       </CardTitle>
//                       <div className="space-y-4">
//                         <div className="flex justify-between text-gray-300">
//                           <span>Subtotal:</span>
//                           <span className="font-semibold">{formattedPrice(calculateSubtotal())}</span>
//                         </div>
//                         <div className="flex justify-between text-gray-300">
//                           <span>Shipping:</span>
//                           <span className="text-gray-400">Calculated at checkout</span>
//                         </div>
//                         <div className="flex justify-between font-bold text-lg text-white border-t border-gray-600 pt-4 mt-4">
//                           <span>Total:</span>
//                           <span className="text-green-400">{formattedPrice(calculateSubtotal())}</span>
//                         </div>
//                         <Button
//                           className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base mt-6 font-semibold transition-colors"
//                           onClick={() => router.push('/buyer/checkout')}
//                         >
//                           Proceed to Checkout
//                         </Button>
//                         <Button
//                           variant="outline"
//                           className="w-full mt-2 rounded-md py-3 text-base bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
//                           onClick={() => router.push('/search-inventory')}
//                         >
//                           Continue Shopping
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerCartPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Trash2, ShoppingCart } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// TypeScript interfaces
interface CartItem {
  id: string;
  name: string;
  description: string;
  pricePerUnit: number; // in INR
  unit: string;
  quantity: number;
  minOrderQuantity: number;
  seller: string;
}

const BuyerCartPage: React.FC = () => {
  const router = useRouter();

  // Dummy cart items state with TypeScript typing
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'item-001',
      name: 'High-Grade Steel Coils',
      description: 'Excess prime steel coils',
      pricePerUnit: 55000, // in INR
      unit: 'Ton',
      quantity: 1,
      minOrderQuantity: 1,
      seller: 'MetalFab India',
    },
    {
      id: 'item-002',
      name: 'Electronic Controllers',
      description: 'Batch of unused ATmega328P',
      pricePerUnit: 120, // in INR
      unit: 'Unit',
      quantity: 100,
      minOrderQuantity: 10,
      seller: 'ElectroCorp Pvt Ltd',
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number): void => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.minOrderQuantity, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string): void => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = (): number => {
    return cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
  };

  const formattedPrice = (price: number): string => `₹${price.toLocaleString('en-IN')}`;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: string): void => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      updateQuantity(id, value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-800 text-base">Review your selected items before proceeding to checkout</p>
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

        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <ShoppingCart className="h-6 w-6 mr-2 text-green-400" /> Your Shopping Cart
            </CardTitle>
            <CardDescription className="text-gray-700">
              Review your selected items before proceeding to checkout.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-gray-700">
                <p className="text-lg mb-4">Your cart is empty.</p>
                <Button 
                  onClick={() => router.push('/search-inventory')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Start Browsing Inventory
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items Table */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-white hover:bg-gray-50">
                          <TableHead className="w-[200px] text-gray-900 font-semibold">Product</TableHead>
                          <TableHead className="text-gray-900 font-semibold">Description</TableHead>
                          <TableHead className="text-gray-900 font-semibold">Price</TableHead>
                          <TableHead className="text-center text-gray-900 font-semibold">Quantity</TableHead>
                          <TableHead className="text-right text-gray-900 font-semibold">Total</TableHead>
                          <TableHead className="text-right text-gray-900 font-semibold">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cartItems.map((item: CartItem) => (
                          <TableRow key={item.id} className="border-gray-200 hover:bg-gray-50 transition-colors">
                            <TableCell className="font-medium text-gray-700">
                              <div className="flex items-center space-x-3">
                                <span className="text-green-600 font-semibold">{item.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-700">{item.description}</TableCell>
                            <TableCell className="text-gray-700 font-semibold">
                              {formattedPrice(item.pricePerUnit)} / {item.unit}
                            </TableCell>
                            <TableCell className="text-center">
                              <Input
                                type="number"
                                min={item.minOrderQuantity}
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(e, item.id)}
                                className="w-24 text-center bg-white border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400"
                              />
                            </TableCell>
                            <TableCell className="text-right font-semibold text-green-600">
                              {formattedPrice(item.pricePerUnit * item.quantity)}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeItem(item.id)} 
                                aria-label="Remove item"
                                className="hover:bg-red-100 transition-colors"
                              >
                                <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Cart Summary */}
                <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-green-500/20 rounded-xl shadow-lg h-fit">
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                      Order Summary
                    </CardTitle>
                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-700">
                        <span>Subtotal:</span>
                        <span className="font-semibold text-gray-900">{formattedPrice(calculateSubtotal())}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Shipping:</span>
                        <span className="text-green-600">Calculated at checkout</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg text-gray-900 border-t border-gray-300 pt-4 mt-4">
                        <span>Total:</span>
                        <span className="text-green-600">{formattedPrice(calculateSubtotal())}</span>
                      </div>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-base mt-6 font-semibold transition-all duration-300 shadow-lg"
                        onClick={() => router.push('/buyer/checkout')}
                      >
                        Proceed to Checkout
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full mt-2 rounded-md py-3 text-base bg-white border-green-500/30 text-green-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                        onClick={() => router.push('/search-inventory')}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerCartPage;