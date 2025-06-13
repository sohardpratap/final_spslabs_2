import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowLeft, CheckCircle, Smartphone, BarChart3, Route, Filter } from 'lucide-react';

const PartnerHub: React.FC = () => {
  const features = [
    {
      icon: Bell,
      title: 'Unified Notification Feed',
      description: 'Aggregates alerts, tasks, payments, and updates from multiple delivery platforms into one centralized, easy-to-manage view.'
    },
    {
      icon: Filter,
      title: 'Custom Alerts & Filters',
      description: 'Prioritize, mute, or set up personalized alerts based on your preferences to focus on what matters most.'
    },
    {
      icon: BarChart3,
      title: 'Earnings Dashboard',
      description: 'Track your income across all services by date, platform, or job type with detailed analytics and insights.'
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'Smart routing for faster multi-platform deliveries using real-time traffic data to maximize your earnings.'
    }
  ];

  const platforms = [
    { name: 'Uber', color: 'bg-black' },
    { name: 'Swiggy', color: 'bg-orange-500' },
    { name: 'Zomato', color: 'bg-red-500' },
    { name: 'Rapido', color: 'bg-yellow-500' },
    { name: 'Ola', color: 'bg-green-500' }
  ];

  const benefits = [
    'Consolidate all delivery platform notifications in one place',
    'Track earnings across multiple platforms effortlessly',
    'Optimize routes for maximum efficiency and income',
    'Manage tasks from all platforms in a unified interface',
    'Get real-time updates and alerts based on your preferences',
    'Improve productivity with smart filtering and prioritization'
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
            <div className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-lg">
              <Bell className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">Partner Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 font-medium mb-6">
            AI Unified Notification Hub and Manager for Delivery Partners
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive mobile app designed for delivery partners juggling multiple platforms. 
            Simplify your daily operations by consolidating notifications, tracking earnings, and optimizing routes — all in one place.
          </p>

          {/* Supported Platforms */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Supports all major platforms:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 ${platform.color} text-white text-sm font-medium rounded-full shadow-lg`}
                >
                  {platform.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Us
            </Link>
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
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-teal-600 dark:text-teal-400" />
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

        {/* Additional Features */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Additional Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Task Manager</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Consolidates current, upcoming, and completed delivery tasks from all platforms in one organized interface.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">User Feedback Portal</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rate your experiences and suggest app improvements to help us build better features for delivery partners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Partner Hub?
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
        <div className="text-center bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <Smartphone className="h-16 w-16 opacity-90" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Streamline Your Delivery Operations</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of delivery partners who are already optimizing their workflow with Partner Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHub;