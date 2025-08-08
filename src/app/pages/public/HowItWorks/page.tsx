'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { 
  Users, 
  Package, 
  Search, 
  MessageSquare, 
  ShoppingCart, 
  DollarSign, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle, 
  User, 
  Building2,
  Truck,
  Star,
  Clock,
  TrendingUp,
  Globe,
  Zap,
  Factory,
  FileText,
  Target,
  Handshake,
  BarChart3
} from 'lucide-react';

// Type definitions
interface UserJourneyStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  color: string;
}

interface JourneyStep {
  step: string;
  action: string;
  outcome: string;
  icon: React.ReactNode;
}

interface UserStoryResults {
  savings: string;
  time: string;
  efficiency: string;
}

interface UserStory {
  title: string;
  subtitle: string;
  persona: string;
  scenario: string;
  journey: JourneyStep[];
  results: UserStoryResults;
}

interface UserStories {
  manufacturer: UserStory;
  trader: UserStory;
  procurement: UserStory;
}

interface PlatformFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface TrustedCompany {
  name: string;
  industry: string;
  logo: string;
}

type ActiveStoryType = 'manufacturer' | 'trader' | 'procurement';

const HowItWorksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('buyers');
  const [activeStory, setActiveStory] = useState<ActiveStoryType>('manufacturer');
  const router = useRouter();

  const userJourneySteps: UserJourneyStep[] = [
    {
      id: 1,
      icon: <User className="h-8 w-8" />,
      title: "Register",
      description: "Join ZeeroStock platform as a verified user to start your industrial trading journey.",
      details: "Quick registration with business verification for secure transactions.",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      icon: <Search className="h-8 w-8" />,
      title: "List the Products",
      description: "Browse through thousands of industrial products or list your surplus inventory.",
      details: "Advanced search filters help you find exactly what you need or showcase your products.",
      color: "from-indigo-600 to-indigo-700"
    },
    {
      id: 3,
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Place Order",
      description: "Connect with verified sellers and place orders with confidence.",
      details: "Secure ordering process with negotiation tools and quality assurance.",
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 4,
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Elevate Your Business",
      description: "Transform your business with efficient inventory management and new opportunities.",
      details: "Reduce costs, find new markets, and grow your industrial network.",
      color: "from-green-600 to-green-700"
    }
  ];

  const userStories: UserStories = {
    manufacturer: {
      title: "Manufacturer with Excess Inventory",
      subtitle: "Turning Surplus into Profit",
      persona: "Rajesh Kumar - Production Manager at MetalFab Industries",
      scenario: "Has ₹50L worth of excess steel components taking up warehouse space",
      journey: [
        {
          step: "Discovery",
          action: "Rajesh searches online for 'surplus steel buyers India' and finds ZeeroStock",
          outcome: "Discovers a platform specifically for industrial surplus trading",
          icon: <Search className="h-6 w-6" />
        },
        {
          step: "Registration",
          action: "Creates manufacturer account, uploads business documents for verification",
          outcome: "Gets verified seller badge within 24 hours, building trust with buyers",
          icon: <Shield className="h-6 w-6" />
        },
        {
          step: "Listing Products",
          action: "Lists excess steel components with detailed specs, photos, and competitive pricing",
          outcome: "Products go live on marketplace, visible to thousands of potential buyers",
          icon: <Package className="h-6 w-6" />
        },
        {
          step: "Managing Inquiries",
          action: "Receives inquiries from 15+ buyers, negotiates quantities and pricing",
          outcome: "Closes deals worth ₹35L within 2 weeks, freeing up warehouse space",
          icon: <MessageSquare className="h-6 w-6" />
        },
        {
          step: "Secure Transactions",
          action: "Uses ZeeroStock's escrow system for secure payments and logistics coordination",
          outcome: "Receives payments on time, builds reputation score, gains repeat customers",
          icon: <DollarSign className="h-6 w-6" />
        }
      ],
      results: {
        savings: "₹35L Revenue Generated",
        time: "70% Faster than Traditional Methods",
        efficiency: "Warehouse Space Freed Up"
      }
    },
    trader: {
      title: "Trader & Distributor",
      subtitle: "Expanding Market Reach",
      persona: "Priya Sharma - Business Development at TradeCorp Solutions",
      scenario: "Looking to source bulk industrial supplies for growing client base",
      journey: [
        {
          step: "Market Research",
          action: "Priya explores ZeeroStock to find reliable suppliers for various industrial products",
          outcome: "Discovers verified suppliers offering competitive rates across multiple categories",
          icon: <BarChart3 className="h-6 w-6" />
        },
        {
          step: "Supplier Verification",
          action: "Reviews supplier profiles, ratings, and certification badges",
          outcome: "Identifies top-rated suppliers with consistent quality and delivery records",
          icon: <CheckCircle className="h-6 w-6" />
        },
        {
          step: "Bulk Sourcing",
          action: "Places large orders for industrial components, raw materials, and machinery parts",
          outcome: "Secures 30% better pricing compared to traditional procurement channels",
          icon: <Factory className="h-6 w-6" />
        },
        {
          step: "Building Relationships",
          action: "Establishes long-term partnerships with multiple verified suppliers",
          outcome: "Creates reliable supply chain network for consistent business growth",
          icon: <Handshake className="h-6 w-6" />
        },
        {
          step: "Business Growth",
          action: "Leverages platform analytics and market insights for strategic decisions",
          outcome: "Expands client base by 150% and increases profit margins significantly",
          icon: <TrendingUp className="h-6 w-6" />
        }
      ],
      results: {
        savings: "30% Cost Reduction",
        time: "50% Faster Procurement",
        efficiency: "150% Business Growth"
      }
    },
    procurement: {
      title: "Procurement Manager",
      subtitle: "Optimizing Supply Chain",
      persona: "Amit Patel - Procurement Head at TechManufacturing Ltd",
      scenario: "Needs urgent industrial components for ongoing production projects",
      journey: [
        {
          step: "Urgent Requirement",
          action: "Amit receives urgent request for specialized industrial components",
          outcome: "Uses ZeeroStock's advanced search to quickly find available inventory",
          icon: <Clock className="h-6 w-6" />
        },
        {
          step: "Quality Verification",
          action: "Reviews product specifications, seller ratings, and quality certifications",
          outcome: "Finds components that meet exact technical requirements and quality standards",
          icon: <Target className="h-6 w-6" />
        },
        {
          step: "Negotiation & Ordering",
          action: "Negotiates pricing and delivery terms directly with verified suppliers",
          outcome: "Secures components at 25% below market rate with guaranteed delivery timeline",
          icon: <FileText className="h-6 w-6" />
        },
        {
          step: "Quality Assurance",
          action: "Receives components with proper documentation and quality certificates",
          outcome: "Components pass all quality checks, meeting production requirements perfectly",
          icon: <Shield className="h-6 w-6" />
        },
        {
          step: "Ongoing Partnership",
          action: "Establishes preferred supplier status with top-performing vendors",
          outcome: "Creates streamlined procurement process for future requirements",
          icon: <Handshake className="h-6 w-6" />
        }
      ],
      results: {
        savings: "25% Cost Savings",
        time: "60% Faster Sourcing",
        efficiency: "Zero Quality Issues"
      }
    }
  };

  const platformFeatures: PlatformFeature[] = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Listings",
      description: "All materials, components, and finished goods undergo strict verification",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Category-based Filters",
      description: "Easy product discovery with advanced filtering options",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Negotiation Tools",
      description: "Built-in tools for custom pricing and long-term partnerships",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "End-to-end encryption with transparent payment and delivery tracking",
      color: "from-green-500 to-green-600"
    }
  ];

  const trustedCompanies: TrustedCompany[] = [
    { name: "Tata Steel", industry: "Steel Manufacturing", logo: "TS" },
    { name: "Reliance Industries", industry: "Petrochemicals", logo: "RI" },
    { name: "Hindalco", industry: "Aluminum & Copper", logo: "HD" },
    { name: "JSW Group", industry: "Steel & Energy", logo: "JSW" },
    { name: "Vedanta Limited", industry: "Mining & Metals", logo: "VL" },
    { name: "BHEL", industry: "Heavy Engineering", logo: "BH" },
    { name: "L&T Construction", industry: "Engineering", logo: "LT" },
    { name: "Mahindra Group", industry: "Automotive", logo: "MG" }
  ];

  const currentStory: UserStory = userStories[activeStory];

  const handleNavigation = (path: string): void => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-green-400/20 rounded-full"></div>
          <div className="absolute top-1/4 right-20 w-16 h-16 border border-green-400/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-green-400/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/10 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-400/10 rounded-full"></div>
        </div> */}

        {/* Grid Pattern Overlay */}
        {/* <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 leading-tight mb-7">
            How <span className="text-green-800">ZeeroStock</span> Works
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-700 max-w-3xl mx-auto leading-relaxed mb-10">
            India's leading B2B marketplace for industrial surplus, raw materials, and machinery. 
            Connect, trade, and grow your business with confidence.
          </p>
          <div className=" flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button 
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-green-700 hover:to-green-600 text-white border-0" 
              onClick={() => handleNavigation('/login')}
            >
              <PlayCircle className="h-5 w-5 mr-2 inline" />
              Watch Demo
            </button>
            <button 
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-600 text-gray-500 hover:bg-green-400/10 bg-transparent hover:border-green-400/50" 
              onClick={() => handleNavigation('/login')}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <div className="py-20 bg-gradient-to-r from-green-100 to-white h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey on ZeeroStock</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              From registration to business growth - see how our platform transforms industrial trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userJourneySteps.map((step: UserJourneyStep, index: number) => (
              <div key={step.id} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-100 via-gray-300 to-purple-200 backdrop-blur-sm border border-gray-700 hover:border-green-400/50 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                  <CardHeader className="text-center pb-4">
                    <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-green-500/20`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-1 -left-1 bg-green-600 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.details}</p>
                  </CardContent>
                </Card>
                {index < userJourneySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Stories Section */}
      <div className="py-20 bg-gradient-to-r from-green-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-4">Real User Stories</h2>
            <p className="text-xl text-gray-700">See how different users navigate and succeed on our platform</p>
          </div>

          {/* Story Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-700">
              {Object.entries(userStories).map(([key, story]: [string, UserStory]) => (
                <Button
                  key={key}
                  variant={activeStory === key ? 'default' : 'ghost'}
                  onClick={() => setActiveStory(key as ActiveStoryType)}
                  className={`px-6 py-3 text-sm font-medium ${activeStory === key ? 'bg-green-600 text-white hover:bg-green-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                >
                  {story.title.split(' ')[0]}
                </Button>
              ))}
            </div>
          </div>

          {/* Story Content */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700">
            {/* Story Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-2">{currentStory.title}</h3>
                <p className="text-xl opacity-90 mb-4">{currentStory.subtitle}</p>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold mb-2">{currentStory.persona}</p>
                  <p className="opacity-90">{currentStory.scenario}</p>
                </div>
              </div>
            </div>

            {/* Journey Steps */}
            <div className="p-8 ">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold text-white mb-8 text-center">The Journey</h4>
                <div className="space-y-8">
                  {currentStory.journey.map((step: JourneyStep, index: number) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h5 className="text-xl font-semibold text-white mb-2">{step.step}</h5>
                        <p className="text-gray-300 mb-2">{step.action}</p>
                        <p className="text-sm text-black font-medium bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                          ✓ {step.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="mt-12 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-xl p-8 border border-green-400/20">
                  <h5 className="text-xl font-bold text-white mb-6 text-center">Results Achieved</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(currentStory.results).map(([key, value]: [string, string]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-green-800 mb-2">{value}</div>
                        <div className="text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Features */}
      <div className="py-20 bg-gradient-to-r from-green-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-800">Powering smart manufacturing and efficient trading</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature: PlatformFeature, index: number) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-100 via-gray-300 backdrop-blur-sm border border-gray-700 hover:border-green-400/50 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader>
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-green-500/20`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-white py-20 overflow-hidden">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-36 h-36 border border-green-400/20 rounded-full"></div>
          <div className="absolute top-1/4 right-20 w-20 h-20 border border-green-400/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 border border-green-400/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-green-400/10 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-16 h-16 bg-green-400/10 rounded-full"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 border border-green-400/15 rounded-full"></div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Trusted by <span className="text-green-700">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of manufacturers and procurement teams who trust ZeeroStock for their inventory optimization needs.
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-100 via-gray-300 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-green-800 mb-2">500+</div>
              <div className="text-sm text-gray-900">Active Partners</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 via-gray-300 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-green-800 mb-2">₹100M+</div>
              <div className="text-sm text-gray-900">Inventory Moved</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 via-gray-300 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-green-800 mb-2">15+</div>
              <div className="text-sm text-gray-900">Industries Served</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 via-gray-300 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-green-800 mb-2">99%</div>
              <div className="text-sm text-gray-900">Success Rate</div>
            </div>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
            {trustedCompanies.map((company: TrustedCompany, index: number) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-purple-100 via-gray-300 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
              >
                <div className="absolute top-2 right-2 w-3 h-3 bg-gray-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-gray-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-xl flex items-center justify-center border border-gray-900/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-sm group-hover:text-green-100 transition-colors duration-300">
                      {company.logo}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-gray-900 font-semibold text-sm group-hover:text-gray-900 transition-colors duration-300 mb-1">
                      {company.name}
                    </h3>
                    <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {company.industry}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-green-100 mb-6 text-lg">
              Ready to join India's most trusted inventory marketplace?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300" onClick={() => handleNavigation('/login')}>
                Become a Partner
              </Button>
              <Button variant="outline" className="px-8 py-3 border-2 border-green-400/30 text-green-400 hover:bg-green-400/10 bg-transparent hover:border-green-400/50 font-semibold transition-all duration-300" onClick={() => handleNavigation('/login')}>
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-100 to-white text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industrial Trading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using ZeeroStock to buy and sell industrial products efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-green-600 hover:bg-gray-100 hover:text-gray-900" onClick={() => router.push('/pages/public/Login')}>
              Start Buying Today
            </button>
            <button className="px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-green-600 hover:bg-gray-100 hover:text-gray-900" onClick={() => handleNavigation('/pages/public/Login')}>
              Become a Seller
            </button>
          </div>
          {/* <p className="text-sm mt-6 opacity-75">Free to join • No setup fees • Cancel anytime</p> */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;