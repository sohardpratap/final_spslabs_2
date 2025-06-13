import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, ArrowLeft, CheckCircle, Smartphone, Clock, Bell, Users } from 'lucide-react';

const ZapDine: React.FC = () => {
  const features = [
    {
      icon: QrCode,
      title: 'QR Code Integration',
      description: 'Unique QR codes for each table enable instant access to digital menus and seamless ordering experience.'
    },
    {
      icon: Bell,
      title: 'Real-Time Order Management',
      description: 'Owners receive instant notifications for new orders with ability to accept, decline, and update order status.'
    },
    {
      icon: Smartphone,
      title: 'Digital Menu System',
      description: 'Easy menu management with item photos, descriptions, and prices. Upload directly from device gallery or camera.'
    },
    {
      icon: Clock,
      title: 'Session Management',
      description: 'Device-specific sessions with 2-hour expiry ensure security and accurate table tracking for each customer.'
    }
  ];

  const benefits = [
    'Contactless dining experience for customer safety',
    'Reduce wait times with instant digital ordering',
    'Real-time order tracking and status updates',
    'Easy menu management with visual items',
    'Secure Gmail authentication for quick login',
    'Multi-restaurant management under single account',
    'Table-specific QR codes for accurate orders',
    'Automated session management for security'
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Scan QR Code',
      description: 'Customer scans the unique QR code placed on their table',
      icon: '📱'
    },
    {
      step: '2',
      title: 'Browse Menu',
      description: 'Access digital menu with photos, descriptions, and prices',
      icon: '📋'
    },
    {
      step: '3',
      title: 'Place Order',
      description: 'Select items and place order directly through the platform',
      icon: '🛒'
    },
    {
      step: '4',
      title: 'Track Status',
      description: 'Receive real-time updates on order preparation and delivery',
      icon: '⏱️'
    }
  ];

  const restaurantFeatures = [
    {
      icon: Users,
      title: 'Multi-Restaurant Management',
      description: 'Manage multiple restaurants under a single account with individual menus and settings.'
    },
    {
      icon: Bell,
      title: 'Owner Dashboard',
      description: 'Real-time notifications, order management, and status updates all in one place.'
    },
    {
      icon: QrCode,
      title: 'Table Management',
      description: 'Generate unique QR codes for each table with automatic session tracking.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg">
              <QrCode className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Zap Dine</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-600 dark:text-red-400 font-medium mb-6">
            Effortless Dining with a Quick Scan—Order, Pay, and Enjoy!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Innovative web-based platform designed to modernize the dining experience by integrating digital menu browsing, 
            contactless ordering, and real-time order management for enhanced operational efficiency and customer satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Restaurant Owner Features */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              For Restaurant Owners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {restaurantFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                        <IconComponent className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">User Authentication</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Secure login through Gmail integration, ensuring quick and reliable user verification for both customers and restaurant owners.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Menu Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Easy menu item management with photos, descriptions, and pricing. Upload images directly from device gallery or camera.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Zap Dine?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <QrCode className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Transform Your Restaurant Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the digital dining revolution and provide your customers with a seamless, contactless ordering experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZapDine;