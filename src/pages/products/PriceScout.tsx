import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, CheckCircle, MapPin, Bell, Filter, Zap } from 'lucide-react';

const PriceScout: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Product & Service Search',
      description: 'Look up any item like pizza, cab rides, or groceries and get comprehensive results from multiple platforms instantly.'
    },
    {
      icon: Zap,
      title: 'Real-Time Price Comparison',
      description: 'Compare prices, delivery times, ratings, and active offers across all major platforms in real-time.'
    },
    {
      icon: MapPin,
      title: 'Geolocation Integration',
      description: 'Get personalized results based on your location for nearby deals and accurate ride fares.'
    },
    {
      icon: Bell,
      title: 'Price Alerts',
      description: 'Set notifications for price drops or better deals on your favorite items and never miss a bargain.'
    }
  ];

  const platforms = [
    { name: 'Zomato', color: 'bg-red-500' },
    { name: 'Swiggy', color: 'bg-orange-500' },
    { name: 'Uber', color: 'bg-black' },
    { name: 'Ola', color: 'bg-green-500' },
    { name: 'Domino\'s', color: 'bg-blue-600' }
  ];

  const benefits = [
    'Save money by finding the best deals across platforms',
    'Compare prices, delivery times, and ratings instantly',
    'Get location-based personalized recommendations',
    'Never miss a discount with smart price alerts',
    'Access all promo codes and cashback offers in one place',
    'Make informed decisions with comprehensive comparisons'
  ];

  const useCases = [
    {
      icon: '🍕',
      title: 'Food Delivery',
      description: 'Compare prices for your favorite meals across Zomato, Swiggy, and restaurant apps.'
    },
    {
      icon: '🚗',
      title: 'Ride Services',
      description: 'Find the cheapest ride option between Uber, Ola, and other ride-sharing platforms.'
    },
    {
      icon: '🛒',
      title: 'Grocery Shopping',
      description: 'Compare grocery prices and delivery fees across multiple online stores.'
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
            <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg">
              <Search className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Price Scout</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-medium mb-6">
            Best Deals over Food Delivery and Travel Apps
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Smart mobile app that helps you save money by comparing real-time prices for food delivery, groceries, 
            and ride services across multiple platforms. Your one-stop hub for discovering the best deals.
          </p>

          {/* Supported Platforms */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Compare prices across:</p>
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
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Perfect For Every Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
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
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Smart Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Filter className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sort & Filter</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Customize results by price, delivery time, ratings, or value.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Best Deal Highlight</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Automatically identifies the most cost-effective choice.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Bell className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Promo Display</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Shows platform-specific codes, offers, and cashback options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Price Scout?
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
        <div className="text-center bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Search className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Start Saving Money Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Never overpay again. Compare prices across all platforms and find the best deals instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceScout;