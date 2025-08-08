'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '../components/ui/button';
import { 
  Plus, 
  Settings,
  User,
  FileCheck,
  Gavel,
  BarChart3,
  Package,
  ShoppingBag
} from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'default' | 'ghost' | 'outline' | 'link';
type Size = 'default' | 'sm' | 'icon';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
}

interface SidebarItem {
    title: string;
    icon: ReactNode;
    route: string;
}

const SellerSidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const sidebarItems: SidebarItem[] = [
        {
            title: 'Dashboard',
            icon: <BarChart3 className="h-5 w-5 mr-3" />,
            route: '/pages/seller/Dashboard'
        },
        {
            title: 'List New Item',
            icon: <Plus className="h-5 w-5 mr-3" />,
            route: '/pages/seller/ListNewItem'
        },
        {
            title: 'Manage Listings',
            icon: <Package className="h-5 w-5 mr-3" />,
            route: '/pages/seller/ManageListings'
        },
        {
            title: 'Offer Bids',
            icon: <Gavel className="h-5 w-5 mr-3" />,
            route: '/pages/seller/OfferBids'
        },
        {
            title: 'My Orders',
            icon: <ShoppingBag className="h-5 w-5 mr-3" />,
            route: '/pages/seller/OrderPage'
        },
    ];

    const accountItems: SidebarItem[] = [
        {
            title: 'KYC/KYB Status',
            icon: <FileCheck className="h-5 w-5 mr-3" />,
            route: '/pages/seller/KycStatus'
        },
        {
            title: 'Profile Setup',
            icon: <User className="h-5 w-5 mr-3" />,
            route: '/pages/seller/ProfileSetup'
        },
        {
            title: 'Settings',
            icon: <Settings className="h-5 w-5 mr-3" />,
            route: '/pages/seller/Settings'
        }
    ];

    const handleNavigation = (route: string): void => {
        router.push(route);
    };

    const isActiveRoute = (route: string): boolean => {
        return pathname === route;
    };

    const CustomButton: React.FC<CustomButtonProps> = ({
        children,
        variant = 'default',
        size = 'default',
        className = '',
        onClick,
        ...props
    }) => {
        const baseClasses =
            'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

        const variants: Record<Variant, string> = {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            ghost: 'hover:bg-slate-600/50 hover:text-white',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        };

        const sizes: Record<Size, string> = {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            icon: 'h-10 w-10',
        };

        return (
            <button
                className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        );
    };

    return (
        <aside className="w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl flex flex-col min-h-screen">
            {/* Logo Section */}
            <div className="p-6 border-b border-slate-700/50">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">Z</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-lg">ZeeroStock</span>
                        <span className="text-slate-400 text-xs">Seller Dashboard</span>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-grow p-4 overflow-y-auto">
                {/* Main Navigation */}
                <div className="mb-8">
                    <h3 className="text-xs uppercase text-slate-400 font-semibold mb-4 px-3 tracking-wider">
                        Main
                    </h3>
                    <ul className="space-y-2">
                        {sidebarItems.map((item: SidebarItem, index: number) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavigation(item.route)}
                                    className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-300 group relative ${
                                        isActiveRoute(item.route)
                                            ? 'bg-emerald-900/50 text-emerald-400 border-l-4 border-emerald-400 font-semibold shadow-lg shadow-emerald-500/20' 
                                            : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-l-4 hover:border-slate-600'
                                    }`}
                                >
                                    <span className={`transition-colors duration-300 ${
                                        isActiveRoute(item.route) 
                                            ? 'text-blue-400' 
                                            : 'text-slate-400 group-hover:text-blue-400'
                                    }`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium">{item.title}</span>
                                    {isActiveRoute(item.route) && (
                                        <div className="absolute right-3 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Account Section */}
                <div className="border-t border-slate-700/50 pt-6">
                    <h3 className="text-xs uppercase text-slate-400 font-semibold mb-4 px-3 tracking-wider">
                        Account
                    </h3>
                    <ul className="space-y-2">
                        {accountItems.map((item: SidebarItem, index: number) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavigation(item.route)}
                                    className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-300 group relative ${
                                        isActiveRoute(item.route)
                                            ? 'bg-emerald-900/50 text-emerald-400 border-l-4 border-emerald-400 font-semibold shadow-lg shadow-emerald-500/20' 
                                            : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-l-4 hover:border-slate-600'
                                    }`}
                                >
                                    <span className={`transition-colors duration-300 ${
                                        isActiveRoute(item.route) 
                                            ? 'text-blue-400' 
                                            : 'text-slate-400 group-hover:text-blue-400'
                                    }`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium">{item.title}</span>
                                    {isActiveRoute(item.route) && (
                                        <div className="absolute right-3 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* User Profile Section at Bottom */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-800/50">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="relative">
                        <img 
                            src="https://placehold.co/40x40/3B82F6/FFFFFF?text=JS" 
                            alt="John Seller" 
                            className="h-10 w-10 rounded-full ring-2 ring-blue-500/30"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">John Seller</p>
                        <p className="text-xs text-slate-400 truncate flex items-center">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            Premium Seller
                        </p>
                    </div>
                    <CustomButton 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:bg-slate-600/50 transition-all duration-300"
                        onClick={() => handleNavigation('/seller/profile-setup')}
                    >
                        <Settings className="h-4 w-4 text-slate-400 hover:text-white transition-colors duration-300" />
                    </CustomButton>
                </div>
            </div>
        </aside>
    );
};

export default SellerSidebar;