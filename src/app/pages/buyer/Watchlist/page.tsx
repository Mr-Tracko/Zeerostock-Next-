'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { EyeOff, ShoppingCart, ExternalLink, Heart, Package, Star } from 'lucide-react';
import BuyerSidebar from '../../../components/BuyerSidebar';

// Type definitions
interface WatchlistItem {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  unit: string;
  quantity: string;
  imageUrl: string;
  seller: string;
  rating: number;
  inStock: boolean;
  category: string;
}

interface BuyerWatchlistPageProps {}

const BuyerWatchlistPage: React.FC<BuyerWatchlistPageProps> = () => {
  const router = useRouter();

  const navigate = (path: string): void => {
    router.push(path);
  };

  // Professional product data with real-looking images
  const watchlistItems: WatchlistItem[] = [
    {
      id: 'wl-001',
      name: 'SMD Capacitors 1000pF',
      description: 'High-quality surface mount capacitors, 0805 package, ±5% tolerance',
      price: '₹0.05',
      originalPrice: '₹0.07',
      unit: 'Unit',
      quantity: '100,000 units available',
      imageUrl: '/capa.jpeg',
      seller: 'ElectroParts India',
      rating: 4.8,
      inStock: true,
      category: 'Electronic Components'
    },
    {
      id: 'wl-002',
      name: 'Industrial Servo Motor',
      description: '2kW AC Servo Motor with integrated drive, IP65 rated',
      price: '₹24,500',
      originalPrice: '₹28,000',
      unit: 'Unit',
      quantity: '5 units available',
      imageUrl: '/capacitor.jpeg',
      seller: 'Automation Solutions',
      rating: 4.9,
      inStock: true,
      category: 'Industrial Equipment'
    },
    {
      id: 'wl-003',
      name: 'Aluminium Extrusions',
      description: 'Standard T-slot aluminium profiles, 6063-T5 alloy, anodized finish',
      price: '₹180',
      originalPrice: '₹220',
      unit: 'Kg',
      quantity: '500 Kg available',
      imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop&auto=format',
      seller: 'AluFab Systems',
      rating: 4.7,
      inStock: true,
      category: 'Raw Materials'
    },
    {
      id: 'wl-004',
      name: 'Industrial Bearings Set',
      description: 'Deep groove ball bearings, stainless steel, sealed design',
      price: '₹1,250',
      originalPrice: '₹1,450',
      unit: 'Set',
      quantity: '25 sets available',
      imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&auto=format',
      seller: 'Precision Parts Co.',
      rating: 4.6,
      inStock: true,
      category: 'Mechanical Parts'
    },
    {
      id: 'wl-005',
      name: 'PCB Assembly Kit',
      description: 'Complete PCB with components, tested and quality assured',
      price: '₹850',
      originalPrice: '₹1,000',
      unit: 'Unit',
      quantity: '50 units available',
      imageUrl: '/kit.jpeg',
      seller: 'TechCircuit Ltd.',
      rating: 4.8,
      inStock: false,
      category: 'Electronic Components'
    },
    {
      id: 'wl-006',
      name: 'Hydraulic Cylinders',
      description: 'Double-acting hydraulic cylinders, 3000 PSI rated',
      price: '₹15,500',
      originalPrice: '₹17,800',
      unit: 'Unit',
      quantity: '8 units available',
      imageUrl: '/cylinders.jpeg',
      seller: 'HydroTech Industries',
      rating: 4.9,
      inStock: true,
      category: 'Hydraulic Systems'
    }
  ];

  const handleRemoveFromWatchlist = (itemId: string): void => {
    console.log(`Removing item ${itemId} from watchlist.`);
  };

  const calculateDiscount = (original: string, current: string): number => {
    const originalPrice = parseFloat(original.replace(/[₹,]/g, ''));
    const currentPrice = parseFloat(current.replace(/[₹,]/g, ''));
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&auto=format';
  };

  const handleViewDetails = (itemId: string, inStock: boolean): void => {
    if (inStock) {
      navigate(`/product/${itemId}`);
    } else {
      // Handle notify me functionality
      console.log(`Notify me for item: ${itemId}`);
    }
  };

  const calculateAverageRating = (): string => {
    const total = watchlistItems.reduce((acc, item) => acc + item.rating, 0);
    return (total / watchlistItems.length).toFixed(1);
  };

  const getUniqueCategories = (): number => {
    return new Set(watchlistItems.map(item => item.category)).size;
  };

  const getInStockCount = (): number => {
    return watchlistItems.filter(item => item.inStock).length;
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <BuyerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-13 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center mb-2">
                  <Heart className="h-8 w-8 mr-3 text-red-400" />
                  My Watchlist
                </h1>
                <p className="text-gray-300">Track and manage your favorite products</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{watchlistItems.length}</div>
                <div className="text-sm text-gray-400">Items Saved</div>
              </div>
            </div>
          </div>

          {/* Watchlist Items */}
          <div className="space-y-6">
            {watchlistItems.length === 0 ? (
              <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl">
                <CardContent className="p-12 text-center">
                  <Package className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Your watchlist is empty</h3>
                  <p className="text-gray-400 mb-6">Start adding items to keep track of products you're interested in</p>
                  <Button 
                    onClick={() => navigate('/search-inventory')}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Browse Products
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {watchlistItems.map((item: WatchlistItem) => (
                  <Card
                    key={item.id}
                    className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm border-gray-600/30 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm ${
                          item.inStock 
                            ? 'bg-green-600/90 text-white' 
                            : 'bg-red-600/90 text-white'
                        }`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      {item.originalPrice && (
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-red-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-bold">
                            {calculateDiscount(item.originalPrice, item.price)}% OFF
                          </span>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-5">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{item.name}</h3>
                          <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300 ml-1">{item.rating}</span>
                          </div>
                          <span className="text-gray-500">•</span>
                          <span className="text-sm text-gray-400">{item.seller}</span>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-green-400">{item.price}</span>
                          <span className="text-sm text-gray-400">/ {item.unit}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                          )}
                        </div>

                        <p className="text-sm text-gray-300">{item.quantity}</p>

                        <div className="flex gap-3 pt-2">
                          <Button
                            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => handleViewDetails(item.id, item.inStock)}
                            disabled={!item.inStock}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {item.inStock ? 'View Details' : 'Notify Me'}
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-red-500/50 text-red-400 hover:bg-red-900/30 hover:border-red-400 bg-gray-700/50 backdrop-blur-sm rounded-lg transition-all duration-300"
                            onClick={() => handleRemoveFromWatchlist(item.id)}
                            aria-label="Remove from watchlist"
                          >
                            <EyeOff className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Stats Footer */}
          {watchlistItems.length > 0 && (
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">{watchlistItems.length}</div>
                  <div className="text-sm text-gray-400">Total Items</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{getInStockCount()}</div>
                  <div className="text-sm text-gray-400">In Stock</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {calculateAverageRating()}
                  </div>
                  <div className="text-sm text-gray-400">Avg Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">
                    {getUniqueCategories()}
                  </div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerWatchlistPage;