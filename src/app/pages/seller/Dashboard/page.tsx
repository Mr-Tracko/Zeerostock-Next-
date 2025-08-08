'use client';

import React, { useState } from 'react';
import SellerSidebar from '../../../components/SellerSidebar';
import {
  Bell,
  ChevronDown,
  Plus,
  Gavel,
  BarChart3,
  ExternalLink,
  Eye,
  Edit,
  Trash2,
  DollarSign,
  Package,
  TrendingUp,
  Users
} from 'lucide-react';

// Type definitions
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'outline' | 'link';
  size?: 'default' | 'icon' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface TableProps {
  children: React.ReactNode;
}

interface TableHeaderProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

interface DashboardStat {
  title: string;
  value: string;
  change: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

interface Listing {
  id: number;
  product: string;
  category: string;
  price: string;
  stock: string;
  status: 'Active' | 'Pending';
}

// Component definitions
const Button: React.FC<ButtonProps> = ({ children, variant, size, className, onClick, ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg font-medium transition-colors ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <h3 className={className}>
    {children}
  </h3>
);

const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={`px-4 pb-4 ${className}`}>
    {children}
  </div>
);

const Table: React.FC<TableProps> = ({ children }) => (
  <table className="w-full">
    {children}
  </table>
);

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <thead>
    {children}
  </thead>
);

const TableBody: React.FC<TableBodyProps> = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

const TableRow: React.FC<TableRowProps> = ({ children, className }) => (
  <tr className={className}>
    {children}
  </tr>
);

const TableHead: React.FC<TableHeadProps> = ({ children, className }) => (
  <th className={`px-4 py-3 text-left ${className}`}>
    {children}
  </th>
);

const TableCell: React.FC<TableCellProps> = ({ children, className }) => (
  <td className={`px-4 py-3 ${className}`}>
    {children}
  </td>
);

const SellerDashboard: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [chartDropdownOpen, setChartDropdownOpen] = useState<boolean>(false);

  const handleNavigation = (path: string): void => {
    console.log('Navigate to:', path);
  };

  const dashboardStats: DashboardStat[] = [
    {
      title: 'Total Revenue',
      value: '₹24,580',
      change: '+12.5% from last month',
      color: 'text-emerald-400',
      bgColor: 'bg-slate-800/50 border-emerald-500/20',
      icon: <DollarSign className="h-5 w-5 text-emerald-400" />
    },
    {
      title: 'Active Listings',
      value: '147',
      change: '+3 new this week',
      color: 'text-blue-400',
      bgColor: 'bg-slate-800/50 border-blue-500/20',
      icon: <Package className="h-5 w-5 text-blue-400" />
    },
    {
      title: 'Orders This Month',
      value: '89',
      change: '+23% increase',
      color: 'text-emerald-400',
      bgColor: 'bg-slate-800/50 border-emerald-500/20',
      icon: <TrendingUp className="h-5 w-5 text-emerald-400" />
    },
    {
      title: 'Total Customers',
      value: '1,247',
      change: '+8.2% growth',
      color: 'text-purple-400',
      bgColor: 'bg-slate-800/50 border-purple-500/20',
      icon: <Users className="h-5 w-5 text-purple-400" />
    }
  ];

  const activeListings: Listing[] = [
    {
      id: 1,
      product: 'Vintage Leather Jacket',
      category: 'Fashion',
      price: '₹299',
      stock: '5 units',
      status: 'Active'
    },
    {
      id: 2,
      product: 'Gaming Laptop RTX 4070',
      category: 'Electronics',
      price: '₹1,899',
      stock: '2 units',
      status: 'Active'
    },
    {
      id: 3,
      product: 'Handcrafted Wooden Table',
      category: 'Furniture',
      price: '₹450',
      stock: '1 unit',
      status: 'Pending'
    },
    {
      id: 4,
      product: 'Professional Camera Lens',
      category: 'Electronics',
      price: '₹750',
      stock: '3 units',
      status: 'Active'
    }
  ];

  const chartPeriods: string[] = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'This Year'];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 ml-5 mt-3 rounded-r-2xl">
        <SellerSidebar />
      </div>

      {/* Dashboard Content */}
      <div className="flex-grow p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-b from-slate-900 via-slate-800 to-slate-900 mb-2">
              Seller Dashboard
              <span className="ml-3 inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            </h1>
            <p className="text-slate-800 text-lg">Welcome back, manage your inventory and track performance</p>
          </div>
          {/* User Profile/Notifications */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-slate-800 text-slate-400 hover:text-white relative"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900"></span>
            </Button>
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white hover:border-emerald-500/50 transition-all duration-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Quick Actions <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10">
                  <button
                    onClick={() => {
                      handleNavigation('/seller/ListNewItemPage');
                      setDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-emerald-900/30 hover:text-emerald-300 flex items-center transition-colors"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    List New Item
                  </button>
                  <button
                    onClick={() => {
                      handleNavigation('/seller/offer-bids');
                      setDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center"
                  >
                    <Gavel className="mr-2 h-4 w-4" />
                    View Offers
                  </button>
                  <button
                    onClick={() => {
                      handleNavigation('/seller/analytics');
                      setDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Analytics
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* KYC/KYB Verification Status */}
        <div className="bg-white border-emerald-500/50 text-emerald-400 px-6 py-4 rounded-xl flex justify-between items-center backdrop-blur-sm shadow-lg shadow-emerald-500/10">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span>
              <span className="font-semibold">KYC/KYB Verified</span>: Your account is fully verified and ready for trading
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleNavigation('/seller/kyc-dashboard')}
            className="hover:bg-emerald-800/30 text-emerald-400"
          >
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {dashboardStats.map((stat: DashboardStat, index: number) => (
            <Card key={index} className={`${stat.bgColor} border-slate-700 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 ${stat.bgColor.includes('emerald') ? 'hover:shadow-emerald-500/20' : ''}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Performance and Category Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                Sales Performance
                <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full"></div>
              </CardTitle>
              <div className="relative">
                <Button
                  variant="outline"
                  className="flex items-center bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-emerald-500/50 transition-all duration-200"
                  onClick={() => setChartDropdownOpen(!chartDropdownOpen)}
                >
                  Last 30 days <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                {chartDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-slate-700 border border-slate-600 rounded-md shadow-lg z-10">
                    {chartPeriods.map((period: string) => (
                      <button
                        key={period}
                        onClick={() => setChartDropdownOpen(false)}
                        className="w-full px-3 py-2 text-left text-white hover:bg-emerald-900/30 hover:text-emerald-300 text-sm transition-colors"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="h-64 flex items-center justify-center text-slate-400 bg-slate-700/50 rounded-lg border border-slate-600/50">
              <div className="text-center">
                <p className="text-sm mb-5">Sales Performance Chart</p>
                <img
                  src="/graph1.png"
                  alt="Bar Graph"
                  className="mx-auto max-w-full h-auto rounded shadow"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <CardTitle className="text-xl font-semibold text-white">Category Performance</CardTitle>
              <Button
                variant="link"
                className="text-emerald-400 hover:text-emerald-300 hover:underline p-0 transition-colors"
                onClick={() => handleNavigation('/seller/analytics')}
              >
                View all
              </Button>
            </div>
            <div className="h-55 flex items-center justify-center text-slate-400 bg-slate-700/50 rounded-lg border border-slate-600/50">
              <div className="text-center">
                <p className="text-sm mb-5">Category Performance Chart</p>
                <img
                  src="/graph22.png"
                  alt="Bar Graph"
                  className="mx-auto max-w-full h-auto rounded shadow"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Active Listings Table */}
        <Card className="bg-slate-800 border-slate-700 rounded-xl shadow-lg p-6 hover:border-emerald-500/30 transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <CardTitle className="text-xl font-semibold text-white flex items-center">
              Active Listings
              <span className="ml-3 px-2 py-1 text-xs bg-emerald-900/50 text-emerald-400 border border-emerald-500/50 rounded-full">
                {activeListings.length} total
              </span>
            </CardTitle>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => handleNavigation('/seller/manage-listings')}
                className="bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white"
              >
                <Eye className="h-4 w-4 mr-2" /> View All
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-200"
                onClick={() => handleNavigation('/seller/list-new-item')}
              >
                <Plus className="h-4 w-4 mr-2" /> Add New
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-700">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-slate-700/50">
                  <TableHead className="text-slate-300 font-semibold">Product</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Category</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Price</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Stock</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Status</TableHead>
                  <TableHead className="text-right text-slate-300 font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeListings.map((listing: Listing) => (
                  <TableRow key={listing.id} className="border-slate-700 hover:bg-slate-700/30 transition-colors group">
                    <TableCell className="font-medium text-white">{listing.product}</TableCell>
                    <TableCell className="text-slate-300">{listing.category}</TableCell>
                    <TableCell className="text-emerald-400 font-semibold">{listing.price}</TableCell>
                    <TableCell className="text-slate-300">{listing.stock}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${listing.status === 'Active'
                        ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-500/50'
                        : 'bg-orange-900/50 text-orange-400 border border-orange-500/50'
                        }`}>
                        {listing.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mr-1 hover:bg-emerald-900/30 text-slate-400 hover:text-emerald-300 opacity-0 group-hover:opacity-100 transition-all duration-200"
                          onClick={() => handleNavigation(`/seller/edit-listing/${listing.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-900/30 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all duration-200"
                          onClick={() => console.log('Delete', listing.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SellerDashboard;