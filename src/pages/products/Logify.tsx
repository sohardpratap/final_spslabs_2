import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, CheckCircle, Download, Shield, Palette, Globe } from 'lucide-react';

const Logify: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Draggable Floating Button',
      description: 'A small, movable circular button that floats on chat pages without blocking your conversation view.'
    },
    {
      icon: Download,
      title: 'Multiple Export Formats',
      description: 'Export your chats in PDF, TXT, or DOCX formats with clean formatting and professional layouts.'
    },
    {
      icon: Shield,
      title: 'Privacy-Focused',
      description: 'All data processing happens locally on your device. No chat data is sent externally without your consent.'
    },
    {
      icon: Palette,
      title: 'Customization Options',
      description: 'Add timestamps, participant names, and choose from multiple export themes (light, dark, professional).'
    }
  ];

  const platforms = [
    'WhatsApp Web',
    'Facebook Messenger',
    'Slack',
    'Discord',
    'ChatGPT',
    'Telegram Web',
    'Microsoft Teams'
  ];

  const benefits = [
    'Export conversations from any supported chat platform',
    'Choose between PDF, TXT, and DOCX formats',
    'Customize exports with timestamps and themes',
    'Privacy-first approach with local processing',
    'Freemium model with 7 free exports daily',
    'Premium features for unlimited exports',
    'Clean, professional export formatting',
    'Multi-language chat support'
  ];

  const exportOptions = [
    {
      format: 'PDF',
      description: 'Professional documents with formatting preserved',
      icon: '📄'
    },
    {
      format: 'TXT',
      description: 'Plain text format for easy sharing and editing',
      icon: '📝'
    },
    {
      format: 'DOCX',
      description: 'Microsoft Word format with rich formatting',
      icon: '📋'
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
            <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg">
              <FileText className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Logify</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-6">
            Export Your Chats, Effortlessly!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Chrome extension that lets you export chat conversations from any supported platform into PDF, text, 
            or DOCX formats. Features an easy-to-use draggable button for message selection and export.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Export Formats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Export Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exportOptions.map((option, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {option.format}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {option.description}
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
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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

        {/* Supported Platforms */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Supported Platforms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg text-center"
                >
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Model */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Pricing Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Free Plan</h3>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">₹0</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">7 exports per day</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Basic export formats</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Standard themes</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="text-3xl font-bold mb-4">₹68.5<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Unlimited exports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Premium export themes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Advanced customization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Logify?
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
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <FileText className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Export Your Chats Like Never Before</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the waitlist and be the first to experience effortless chat exporting across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logify;