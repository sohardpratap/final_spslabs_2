import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, ArrowLeft, CheckCircle, Wifi, QrCode, Shield, Zap } from 'lucide-react';

const CrossShare: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Local Wi-Fi Transfer',
      description: 'High-speed file transfer over local Wi-Fi network without internet dependency or cloud services.'
    },
    {
      icon: QrCode,
      title: 'QR Code Connection',
      description: 'Simple connection via QR code scanning or generated Wi-Fi SSID and password for quick setup.'
    },
    {
      icon: Shield,
      title: 'Encrypted Transfers',
      description: 'Secure, encrypted transfers ensure privacy and data protection during file sharing.'
    },
    {
      icon: Zap,
      title: 'Cross-Device Compatibility',
      description: 'Works seamlessly with Android and iOS devices, supporting various file types and sizes.'
    }
  ];

  const benefits = [
    'No cables or cloud services required',
    'High-speed local network transfers',
    'Secure encrypted file sharing',
    'Support for individual files or entire directories',
    'Real-time transfer progress with speed and ETA',
    'Cross-platform compatibility (Android & iOS)',
    'QR code authentication for security',
    'Temporary local server for privacy'
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Select Files',
      description: 'Choose individual files or entire directories from your PC to share',
      icon: '📁'
    },
    {
      step: '2',
      title: 'Create Server',
      description: 'App launches a secure local server via your PC\'s Wi-Fi adapter',
      icon: '🖥️'
    },
    {
      step: '3',
      title: 'Connect Mobile',
      description: 'Scan QR code or connect via generated Wi-Fi credentials',
      icon: '📱'
    },
    {
      step: '4',
      title: 'Transfer Files',
      description: 'Browse and download files directly to your mobile device',
      icon: '⚡'
    }
  ];

  const fileTypes = [
    { type: 'Documents', icon: '📄', examples: 'PDF, DOC, TXT, PPT' },
    { type: 'Images', icon: '🖼️', examples: 'JPG, PNG, GIF, SVG' },
    { type: 'Videos', icon: '🎥', examples: 'MP4, AVI, MOV, MKV' },
    { type: 'Audio', icon: '🎵', examples: 'MP3, WAV, FLAC, AAC' },
    { type: 'Archives', icon: '📦', examples: 'ZIP, RAR, 7Z, TAR' },
    { type: 'Code', icon: '💻', examples: 'JS, PY, HTML, CSS' }
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
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl shadow-lg">
              <Share2 className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">Cross Share</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-medium mb-6">
            Seamless File Sharing Between PC and Mobile
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Simple yet powerful app enabling effortless file transfer between PCs and mobile devices over local Wi-Fi network. 
            Eliminates the need for cables or cloud services by creating a secure, temporary local server.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
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
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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

        {/* Supported File Types */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Supported File Types
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {fileTypes.map((fileType, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-3xl mb-3">{fileType.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {fileType.type}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {fileType.examples}
                  </p>
                </div>
              ))}
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
              <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Transfer Progress & Notifications
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time transfer progress display with speed, ETA, and completion notifications for user convenience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Security & Privacy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                QR code authentication restricts access to authorized devices only, ensuring your files remain secure.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Cross Share?
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
        <div className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Share2 className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Share Files Like Never Before</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the fastest, most secure way to transfer files between your PC and mobile devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossShare;