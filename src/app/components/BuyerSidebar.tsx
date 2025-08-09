'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '../components/ui/button';
import {
    BarChart3,
    Search,
    Heart,
    ShoppingCart,
    CreditCard,
    Package,
    MessageCircle,
    FileText,
    Settings,
    User,
    FileCheck
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

const BuyerSidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const sidebarItems: SidebarItem[] = [
        {
            title: 'Dashboard',
            icon: <BarChart3 className="h-5 w-5 mr-3" />,
            route: '/pages//buyer/Dashboard'
        },
        {
            title: 'Search Inventory',
            icon: <Search className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/SearchInventory'
        },
        {
            title: 'Product Details',
            icon: <FileText className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/ProductDetails'
        },
        {
            title: 'Watchlist',
            icon: <Heart className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/Watchlist'
        },
        {
            title: 'Cart',
            icon: <ShoppingCart className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/Cart'
        },
        {
            title: 'Checkout',
            icon: <CreditCard className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/Checkout'
        },
        {
            title: 'My Orders',
            icon: <Package className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/OrderPage'
        },
        {
            title: 'Request Quote',
            icon: <MessageCircle className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/Rfq'
        }
    ];

    const accountItems: SidebarItem[] = [
        // {
        //     title: 'KYC Status',
        //     icon: <FileCheck className="h-5 w-5 mr-3" />,
        //     route: '/pages/buyer/KycStatus'
        // },
        {
            title: 'Profile Page',
            icon: <User className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/ProfileSetup'
        },
        {
            title: 'Settings',
            icon: <Settings className="h-5 w-5 mr-3" />,
            route: '/pages/buyer/Settings'
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
            ghost: 'hover:bg-slate-700 hover:text-white',
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
        <aside className="w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-lg flex flex-col h-full">
            {/* Logo Section */}
            <div className="p-6 border-b border-slate-700">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">Z</span>
                        </div>
                        <div>
                            <span className="text-white font-bold text-xl">ZeeroStock</span>
                            <div className="text-emerald-400 text-sm font-medium">Buyer Dashboard</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-grow p-4 overflow-y-auto">
                {/* Main Navigation */}
                <div className="mb-8">
                    <h3 className="text-xs uppercase text-slate-400 font-semibold mb-4 px-2 tracking-wider">Main Menu</h3>
                    <ul className="space-y-2">
                        {sidebarItems.map((item: SidebarItem, index: number) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavigation(item.route)}
                                    className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 group ${
                                        isActiveRoute(item.route)
                                            ? 'bg-emerald-900/50 text-emerald-400 border-l-4 border-emerald-400 font-semibold shadow-lg shadow-emerald-500/20'
                                            : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-l-4 hover:border-slate-600'
                                    }`}
                                >
                                    <div className={`${isActiveRoute(item.route) ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-300'} transition-colors`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.title}</span>
                                    {isActiveRoute(item.route) && (
                                        <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Account Section */}
                <div className="border-t border-slate-700 pt-6">
                    <h3 className="text-xs uppercase text-slate-400 font-semibold mb-4 px-2 tracking-wider">Account</h3>
                    <ul className="space-y-2">
                        {accountItems.map((item: SidebarItem, index: number) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavigation(item.route)}
                                    className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 group ${
                                        isActiveRoute(item.route)
                                            ? 'bg-emerald-900/50 text-emerald-400 border-l-4 border-emerald-400 font-semibold shadow-lg shadow-emerald-500/20'
                                            : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-l-4 hover:border-slate-600'
                                    }`}
                                >
                                    <div className={`${isActiveRoute(item.route) ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-300'} transition-colors`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.title}</span>
                                    {isActiveRoute(item.route) && (
                                        <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* User Profile Section at Bottom */}
            <div className="p-4 border-t border-slate-700 bg-slate-700/30">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <img
                            src="https://placehold.co/40x40/10B981/FFFFFF?text=JB"
                            alt="John Buyer"
                            className="h-10 w-10 rounded-full border-2 border-emerald-500/50"
                        />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-800 flex items-center justify-center">
                            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">John Buyer</p>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                            <p className="text-xs text-emerald-400 truncate font-medium">Verified Buyer</p>
                        </div>
                    </div>
                    <CustomButton
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 transition-all duration-200"
                        onClick={() => handleNavigation('/buyer/profile-setup')}
                    >
                        <Settings className="h-4 w-4" />
                    </CustomButton>
                </div>
            </div>
        </aside>
    );
};

export default BuyerSidebar;