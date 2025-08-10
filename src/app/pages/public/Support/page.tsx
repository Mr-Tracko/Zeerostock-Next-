// 'use client';

// import React, { useState } from 'react';
// import { 
//   MessageCircle, 
//   Phone, 
//   Mail, 
//   Clock, 
//   FileText, 
//   HelpCircle, 
//   Search,
//   ChevronDown,
//   ChevronRight,
//   Send,
//   CheckCircle,
//   AlertCircle,
//   BookOpen,
//   Video,
//   Download,
//   ExternalLink,
//   Users,
//   Shield
// } from 'lucide-react';

// // Type definitions
// interface ContactForm {
//   name: string;
//   email: string;
//   category: 'technical' | 'billing' | 'account' | 'general' | 'feedback';
//   priority: 'low' | 'medium' | 'high' | 'urgent';
//   subject: string;
//   message: string;
// }

// interface FAQ {
//   question: string;
//   answer: string;
// }

// interface FAQData {
//   general: FAQ[];
//   technical: FAQ[];
//   billing: FAQ[];
// }

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: 'default' | 'outline' | 'ghost';
//   size?: 'default' | 'lg' | 'icon';
//   className?: string;
//   onClick?: () => void;
//   type?: 'button' | 'submit' | 'reset';
// }

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
// }

// interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
//   className?: string;
// }

// interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
//   children: React.ReactNode;
//   className?: string;
// }

// // Component definitions
// const Button: React.FC<ButtonProps> = ({ 
//   children, 
//   variant = "default", 
//   size = "default", 
//   className = "", 
//   onClick, 
//   type = "button",
//   ...props 
// }) => {
//   const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
//   const variants = {
//     default: "bg-green-600 text-white hover:bg-green-700",
//     outline: "border border-green-500/50 text-green-300 hover:bg-green-500/10 hover:border-green-400 bg-transparent",
//     ghost: "hover:bg-accent hover:text-accent-foreground",
//   };
//   const sizes = {
//     default: "h-10 py-2 px-4",
//     lg: "h-12 py-3 px-6",
//     icon: "h-10 w-10",
//   };
  
//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
//       onClick={onClick}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// const Card: React.FC<CardProps> = ({ children, className = "" }) => (
//   <div className={`rounded-lg border bg-gradient-to-r from-green-100 to-white border-green-500/30 text-card-foreground shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
//   <div className={`p-6 ${className}`}>{children}</div>
// );

// const CardHeader: React.FC<CardProps> = ({ children, className = "" }) => (
//   <div className={`flex flex-col space-y-1.5 p-6 pb-3 ${className}`}>{children}</div>
// );

// const CardTitle: React.FC<CardProps> = ({ children, className = "" }) => (
//   <h3 className={`text-2xl font-semibold leading-none tracking-tight text-white ${className}`}>{children}</h3>
// );

// const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
//   <input
//     className={`flex h-10 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${className}`}
//     {...props}
//   />
// );

// const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
//   <textarea
//     className={`flex min-h-[80px] w-full rounded-md border border-gray-600 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${className}`}
//     {...props}
//   />
// );

// const Select: React.FC<SelectProps> = ({ children, className = "", ...props }) => (
//   <select
//     className={`flex h-10 w-full rounded-md border border-gray-600 bg-gradient-to-r from-green-100 to-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${className}`}
//     {...props}
//   >
//     {children}
//   </select>
// );

// const SupportPage: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<keyof FAQData>('general');
//   const [contactForm, setContactForm] = useState<ContactForm>({
//     name: '',
//     email: '',
//     category: 'technical',
//     priority: 'medium',
//     subject: '',
//     message: ''
//   });

//   const faqData: FAQData = {
//     general: [
//       {
//         question: "How do I create an account on the platform?",
//         answer: "To create an account, click on the 'Sign Up' button in the top right corner. You can register as either a buyer or seller. Fill in your business details, verify your email, and complete the KYC process for full access to all features."
//       },
//       {
//         question: "What types of industrial products can I buy/sell?",
//         answer: "Our platform supports a wide range of industrial products including raw materials, machinery, equipment, surplus inventory, and manufactured goods. We cater to industries like steel, textiles, chemicals, automotive, and construction."
//       },
//       {
//         question: "How does the verification process work?",
//         answer: "Our verification process includes business registration verification, GST validation, and financial background checks. Verified sellers get a green badge and higher visibility in search results."
//       }
//     ],
//     technical: [
//       {
//         question: "I'm having trouble uploading product images",
//         answer: "Ensure your images are in JPG, PNG, or WEBP format and under 5MB each. Clear your browser cache and try again. If the issue persists, try using a different browser or contact our technical support."
//       },
//       {
//         question: "How do I integrate your API with my ERP system?",
//         answer: "We provide RESTful APIs with comprehensive documentation. Contact our technical team at api-support@industrialmarketplace.com for integration guides, sandbox access, and developer support."
//       },
//       {
//         question: "Why can't I access certain features?",
//         answer: "Some features require account verification or specific subscription tiers. Check your account status in the dashboard or upgrade your plan to access premium features."
//       }
//     ],
//     billing: [
//       {
//         question: "What are your commission fees?",
//         answer: "We charge a competitive commission of 2-3% on successful transactions. Volume discounts are available for high-frequency traders. Premium plans offer reduced commission rates."
//       },
//       {
//         question: "How do I get an invoice for my transactions?",
//         answer: "All invoices are automatically generated and available in your account dashboard under 'Billing History'. You can download them as PDF files for your records."
//       },
//       {
//         question: "What payment methods do you accept?",
//         answer: "We accept bank transfers, UPI, credit/debit cards, and digital wallets. For large transactions, we also support escrow services and letters of credit."
//       }
//     ]
//   };

//   const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log('Contact form submitted:', contactForm);
//     // Handle form submission
//     alert('Thank you for contacting us! We will respond within 24 hours.');
//   };

//   const handleFormChange = (field: keyof ContactForm, value: string): void => {
//     setContactForm(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-100 to-white border-b border-green-500/30">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Get help with your industrial marketplace experience. We&apos;re here to support your business growth.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Quick Actions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
//             <CardContent className="p-6 text-center">
//               <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
//               <p className="text-gray-700 mb-4">Get instant help from our support team</p>
//               <Button className="w-full text-black">Start Chat</Button>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
//             <CardContent className="p-6 text-center">
//               <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
//               <p className="text-gray-700 mb-2">+91 1800-123-4567</p>
//               <p className="text-sm text-gray-700 mb-4">Mon-Fri: 9 AM - 6 PM IST</p>
//               <Button className="w-full text-black">Call Now</Button>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
//             <CardContent className="p-6 text-center">
//               <Mail className="h-12 w-12 text-green-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
//               <p className="text-gray-700 mb-4">info@zeerostock.com</p>
//               <Button  className="w-full text-black">Send Email</Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Search and FAQ Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           {/* FAQ Section */}
//           <div className="lg:col-span-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center text-gray-900 important">
//                   <HelpCircle className="h-6 w-6 text-gray-900 mr-2" />
//                   Frequently Asked Questions
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {/* Search FAQ */}
//                 <div className="relative mb-6">
//                   <Search className="absolute left-3 top-3 h-4 w-4 text-gray-700" />
//                   <Input
//                     placeholder="Search FAQ..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>

//                 {/* FAQ Categories */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {Object.keys(faqData).map(category => (
//                     <button
//                       key={category}
//                       onClick={() => setSelectedCategory(category as keyof FAQData)}
//                       className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                         selectedCategory === category
//                           ? 'bg-gradient-to-r from-green-100 to-white text-gray-800'
//                           : 'bg-gradient-to-r from-green-100 to-white text-gray-800 hover:bg-gray-600'
//                       }`}
//                     >
//                       {category.charAt(0).toUpperCase() + category.slice(1)}
//                     </button>
//                   ))}
//                 </div>

//                 {/* FAQ Items */}
//                 <div className="space-y-4">
//                   {faqData[selectedCategory]?.map((faq, index) => (
//                     <div key={index} className="border border-gray-700 rounded-lg">
//                       <button
//                         onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//                         className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
//                       >
//                         <span className="font-medium text-white">{faq.question}</span>
//                         {expandedFaq === index ? (
//                           <ChevronDown className="h-4 w-4 text-green-400" />
//                         ) : (
//                           <ChevronRight className="h-4 w-4 text-green-400" />
//                         )}
//                       </button>
//                       {expandedFaq === index && (
//                         <div className="p-4 pt-0 text-gray-300 border-t border-gray-700">
//                           {faq.answer}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Resources Sidebar */}
//           <div className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center text-lg">
//                   <BookOpen className="h-5 w-5 text-gray-900 mr-2" />
//                   Resources
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <a href="#" className="flex items-center text-gray-800 hover:text-gray-700 transition-colors">
//                   <FileText className="h-4 w-4 mr-2" />
//                   User Guide
//                   <ExternalLink className="h-3 w-3 ml-auto" />
//                 </a>
//                 <a href="#" className="flex items-center text-gray-800 hover:text-gray-700 transition-colors">
//                   <Video className="h-4 w-4 mr-2" />
//                   Video Tutorials
//                   <ExternalLink className="h-3 w-3 ml-auto" />
//                 </a>
//                 <a href="#" className="flex items-center text-gray-800 hover:text-gray-700 transition-colors">
//                   <Download className="h-4 w-4 mr-2" />
//                   Mobile App
//                   <ExternalLink className="h-3 w-3 ml-auto" />
//                 </a>
//                 <a href="#" className="flex items-center text-gray-800 hover:text-gray-700 transition-colors">
//                   <Shield className="h-4 w-4 mr-2" />
//                   Security Guide
//                   <ExternalLink className="h-3 w-3 ml-auto" />
//                 </a>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center text-lg">
//                   <Clock className="h-5 w-5 text-gray-900 mr-2" />
//                   Support Hours
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Monday - Friday</span>
//                   <span className="text-gray-700">9 AM - 6 PM IST</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Saturday</span>
//                   <span className="text-green-700">10 AM - 4 PM IST</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Sunday</span>
//                   <span className="text-gray-700">Closed</span>
//                 </div>
//                 <div className="pt-2 border-t border-gray-700">
//                   <div className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-gray-900 mr-2" />
//                     <span className="text-xs text-gray-800">Emergency support available 24/7</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center text-gray-900">
//               <Send className="h-6 w-6 text-gray-900 mr-2" />
//               Contact Support
//             </CardTitle>
//             <p className="text-gray-700">Can&apos;t find what you&apos;re looking for? Send us a detailed message.</p>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleContactSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                   <Input
//                   className='bg-white'
//                     required
//                     value={contactForm.name}
//                     onChange={(e) => handleFormChange('name', e.target.value)}
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <Input
//                   className='bg-white'
//                     type="email"
//                     required
//                     value={contactForm.email}
//                     onChange={(e) => handleFormChange('email', e.target.value)}
//                     placeholder="your.email@company.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                   <Select
//                     value={contactForm.category}
//                     onChange={(e) => handleFormChange('category', e.target.value as ContactForm['category'])}
//                   >
//                     <option value="technical">Technical Support</option>
//                     <option value="billing">Billing & Payments</option>
//                     <option value="account">Account Issues</option>
//                     <option value="general">General Inquiry</option>
//                     <option value="feedback">Feedback</option>
//                   </Select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
//                   <Select
//                     value={contactForm.priority}
//                     onChange={(e) => handleFormChange('priority', e.target.value as ContactForm['priority'])}
//                   >
//                     <option value="low">Low</option>
//                     <option value="medium">Medium</option>
//                     <option value="high">High</option>
//                     <option value="urgent">Urgent</option>
//                   </Select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                 <Input
//                 className='bg-white'
//                   required
//                   value={contactForm.subject}
//                   onChange={(e) => handleFormChange('subject', e.target.value)}
//                   placeholder="Brief description of your issue"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <Textarea
//                   required
//                   rows={5}
//                   value={contactForm.message}
//                   onChange={(e) => handleFormChange('message', e.target.value)}
//                   placeholder="Please provide detailed information about your issue or question..."
//                 />
//               </div>

//               <div className="flex items-start space-x-2">
//                 <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                 <p className="text-sm text-gray-700">
//                   We typically respond within 24 hours during business days. For urgent issues, please call our support line.
//                 </p>
//               </div>

//               <Button type="submit" size="lg" className="w-full md:w-auto">
//                 <Send className="h-4 w-4 mr-2" />
//                 Send Message
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         {/* Additional Info */}
//         <div className="mt-12 text-center">
//           <div className="inline-flex items-center space-x-4 text-sm text-gray-800">
//             <div className="flex items-center">
//               <Users className="h-4 w-4 mr-1" />
//               <span>10,000+ Happy Customers</span>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-4 w-4 mr-1" />
//               <span>99.9% Uptime</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>Average Response: 2 Hours</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  FileText, 
  HelpCircle, 
  Search,
  ChevronDown,
  ChevronRight,
  Send,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Users,
  Shield
} from 'lucide-react';

// Type definitions
interface ContactForm {
  name: string;
  email: string;
  category: 'technical' | 'billing' | 'account' | 'general' | 'feedback';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  subject: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQData {
  general: FAQ[];
  technical: FAQ[];
  billing: FAQ[];
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

// Component definitions
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick, 
  type = "button",
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-green-500/50 text-green-600 hover:bg-green-500/10 hover:border-green-400 bg-transparent",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-12 py-3 px-6",
    icon: "h-10 w-10",
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-gradient-to-r from-green-100 to-white border-green-500/30 text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardHeader: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 pb-3 ${className}`}>{children}</div>
);

const CardTitle: React.FC<CardProps> = ({ children, className = "" }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight text-gray-800 ${className}`}>{children}</h3>
);

const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${className}`}
    {...props}
  />
);

const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${className}`}
    {...props}
  />
);

const Select: React.FC<SelectProps> = ({ children, className = "", ...props }) => (
  <select
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-gradient-to-r from-green-100 to-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${className}`}
    {...props}
  >
    {children}
  </select>
);

const SupportPage: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<keyof FAQData>('general');
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    category: 'technical',
    priority: 'medium',
    subject: '',
    message: ''
  });

  const faqData: FAQData = {
    general: [
      {
        question: "How do I create an account on the platform?",
        answer: "To create an account, click on the 'Sign Up' button in the top right corner. You can register as either a buyer or seller. Fill in your business details, verify your email, and complete the KYC process for full access to all features."
      },
      {
        question: "What types of industrial products can I buy/sell?",
        answer: "Our platform supports a wide range of industrial products including raw materials, machinery, equipment, surplus inventory, and manufactured goods. We cater to industries like steel, textiles, chemicals, automotive, and construction."
      },
      {
        question: "How does the verification process work?",
        answer: "Our verification process includes business registration verification, GST validation, and financial background checks. Verified sellers get a green badge and higher visibility in search results."
      }
    ],
    technical: [
      {
        question: "I'm having trouble uploading product images",
        answer: "Ensure your images are in JPG, PNG, or WEBP format and under 5MB each. Clear your browser cache and try again. If the issue persists, try using a different browser or contact our technical support."
      },
      {
        question: "How do I integrate your API with my ERP system?",
        answer: "We provide RESTful APIs with comprehensive documentation. Contact our technical team at api-support@industrialmarketplace.com for integration guides, sandbox access, and developer support."
      },
      {
        question: "Why can't I access certain features?",
        answer: "Some features require account verification or specific subscription tiers. Check your account status in the dashboard or upgrade your plan to access premium features."
      }
    ],
    billing: [
      {
        question: "What are your commission fees?",
        answer: "We charge a competitive commission of 2-3% on successful transactions. Volume discounts are available for high-frequency traders. Premium plans offer reduced commission rates."
      },
      {
        question: "How do I get an invoice for my transactions?",
        answer: "All invoices are automatically generated and available in your account dashboard under 'Billing History'. You can download them as PDF files for your records."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers, UPI, credit/debit cards, and digital wallets. For large transactions, we also support escrow services and letters of credit."
      }
    ]
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
    alert('Thank you for contacting us! We will respond within 24 hours.');
  };

  const handleFormChange = (field: keyof ContactForm, value: string): void => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-100 to-white border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Center</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Get help with your industrial marketplace experience. We&apos;re here to support your business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-2">+91 1800-123-4567</p>
              <p className="text-sm text-gray-600 mb-4">Mon-Fri: 9 AM - 6 PM IST</p>
              <Button className="w-full">Call Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">info@zeerostock.com</p>
              <Button className="w-full">Send Email</Button>
            </CardContent>
          </Card>
        </div>

        {/* Search and FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <HelpCircle className="h-6 w-6 text-gray-800 mr-2" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Search FAQ */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-600" />
                  <Input
                    placeholder="Search FAQ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* FAQ Categories */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(faqData).map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category as keyof FAQData)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {faqData[selectedCategory]?.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronDown className="h-4 w-4 text-green-600" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-green-600" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="p-4 pt-0 text-gray-700 border-t border-gray-300">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-800">
                  <BookOpen className="h-5 w-5 text-gray-800 mr-2" />
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800 transition-colors">
                  <FileText className="h-4 w-4 mr-2" />
                  User Guide
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800 transition-colors">
                  <Video className="h-4 w-4 mr-2" />
                  Video Tutorials
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800 transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Mobile App
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800 transition-colors">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Guide
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-800">
                  <Clock className="h-5 w-5 text-gray-800 mr-2" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800">9 AM - 6 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800">10 AM - 4 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-xs text-gray-700">Emergency support available 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-800">
              <Send className="h-6 w-6 text-gray-800 mr-2" />
              Contact Support
            </CardTitle>
            <p className="text-gray-600">Can&apos;t find what you&apos;re looking for? Send us a detailed message.</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Name</label>
                  <Input
                    required
                    value={contactForm.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Category</label>
                  <Select
                    value={contactForm.category}
                    onChange={(e) => handleFormChange('category', e.target.value as ContactForm['category'])}
                  >
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="account">Account Issues</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Priority</label>
                  <Select
                    value={contactForm.priority}
                    onChange={(e) => handleFormChange('priority', e.target.value as ContactForm['priority'])}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Subject</label>
                <Input
                  required
                  value={contactForm.subject}
                  onChange={(e) => handleFormChange('subject', e.target.value)}
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                <Textarea
                  required
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  placeholder="Please provide detailed information about your issue or question..."
                />
              </div>

              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  We typically respond within 24 hours during business days. For urgent issues, please call our support line.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto" onClick={() => router.push('/pages/public/Login')}>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-700">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Average Response: 2 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;