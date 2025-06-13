import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Bell, 
  Search, 
  FileText, 
  Code, 
  Share2, 
  QrCode,
  ArrowRight,
  Smartphone,
  Monitor
} from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 'formguard',
      name: 'FormGuard',
      tagline: 'AI-Powered Exercise Form Analyzer',
      description: 'Revolutionary mobile app that uses advanced AI to analyze exercise form in real-time, preventing injuries and promoting correct posture.',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      status: 'Coming Soon',
      features: ['Real-time form correction', 'Comprehensive exercise support', 'Height-based adjustments', 'Rep counting & tracking']
    },
    {
      id: 'partner-hub',
      name: 'Partner Hub',
      tagline: 'AI Unified Notification Hub for Delivery Partners',
      description: 'Simplifies daily operations for delivery partners by consolidating notifications from multiple platforms into one centralized feed.',
      icon: Bell,
      color: 'from-teal-500 to-teal-600',
      status: 'Coming Soon',
      features: ['Unified notification feed', 'Custom alerts & filters', 'Earnings dashboard', 'Route optimization']
    },
    {
      id: 'price-scout',
      name: 'Price Scout',
      tagline: 'Best Deals over Food Delivery and Travel Apps',
      description: 'Smart mobile app that compares real-time prices across platforms like Zomato, Swiggy, Uber, and Ola to help users save money.',
      icon: Search,
      color: 'from-orange-500 to-orange-600',
      status: 'Coming Soon',
      features: ['Real-time price comparison', 'Geolocation integration', 'Best deal highlights', 'Price alerts']
    },
    {
      id: 'logify',
      name: 'Logify',
      tagline: 'Export Your Chats, Effortlessly!',
      description: 'Chrome extension that lets users export chat conversations from any platform into PDF, text, or DOCX formats with ease.',
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      status: 'Coming Soon',
      features: ['Draggable floating button', 'Multiple export formats', 'Platform compatibility', 'Privacy-focused']
    },
    {
      id: 'algo-sphere',
      name: 'Algo Sphere',
      tagline: 'AI Visual Problem Solver Extension for Enhanced Coding',
      description: 'Browser extension that transforms coding problems into visual, interactive formats with suggested algorithms and community solutions.',
      icon: Code,
      color: 'from-green-500 to-green-600',
      status: 'Coming Soon',
      features: ['Visual problem representation', 'Algorithm suggestions', 'Gamification system', 'Community contributions']
    },
    {
      id: 'cross-share',
      name: 'Cross Share',
      tagline: 'Seamless File Sharing Between PC and Mobile',
      description: 'Simple yet powerful app enabling effortless file transfer between PCs and mobile devices over local Wi-Fi network.',
      icon: Share2,
      color: 'from-indigo-500 to-indigo-600',
      status: 'Coming Soon',
      features: ['Local Wi-Fi transfer', 'QR code connection', 'Cross-device compatibility', 'Encrypted transfers']
    },
    {
      id: 'zap-dine',
      name: 'Zap Dine',
      tagline: 'Effortless Dining with a Quick Scan—Order, Pay, and Enjoy!',
      description: 'Smart dining platform that modernizes restaurant experience with digital menus, contactless ordering, and real-time management.',
      icon: QrCode,
      color: 'from-red-500 to-red-600',
      status: 'Coming Soon',
      features: ['QR code integration', 'Real-time order management', 'Digital menu system', 'Session management']
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our innovative product portfolio designed to solve real-world challenges with cutting-edge technology and exceptional user experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8">
                  {/* Icon and Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${product.color} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full">
                      {product.status}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                <Monitor className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Our products are designed to streamline operations, enhance user experience, and drive growth. 
            Get early access and be the first to experience the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;