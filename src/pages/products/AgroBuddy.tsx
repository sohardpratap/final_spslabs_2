import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowLeft, CheckCircle, Camera, MessageSquare, BarChart3, Globe, Mic, Brain } from 'lucide-react';

const AgroBuddy: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'Real-Time Plant Disease Detection',
      description: 'Advanced computer vision models analyze live camera input to identify crop types, detect diseases, and determine severity levels instantly.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Treatment Recommendations',
      description: 'Science-based treatment suggestions delivered through curated knowledge base and dynamic guidance from language models.'
    },
    {
      icon: BarChart3,
      title: 'Crop Planning & ROI Analysis',
      description: 'Comprehensive planning tools providing cost estimates, yield predictions, and ROI scenarios based on your specific conditions.'
    },
    {
      icon: MessageSquare,
      title: 'Voice-Enabled Multilingual Chatbot',
      description: 'Accessible interface supporting multiple languages and voice interaction for farmers in diverse rural communities.'
    }
  ];

  const capabilities = [
    {
      title: 'Disease Detection & Analysis',
      description: 'Upload snapshots or stream video for instant crop health assessment',
      icon: '🔍',
      details: ['CNN-based image analysis', 'Multimodal GPT-4o integration', 'Severity level assessment', 'Real-time processing']
    },
    {
      title: 'Treatment Recommendations',
      description: 'Get personalized, science-based solutions for identified issues',
      icon: '💊',
      details: ['Curated treatment database', 'Context-aware suggestions', 'Dosage recommendations', 'Application timing']
    },
    {
      title: 'Crop Planning Tools',
      description: 'Comprehensive planning from seed to harvest with financial insights',
      icon: '📋',
      details: ['Input cost calculations', 'Yield predictions', 'ROI scenarios', 'Resource optimization']
    },
    {
      title: 'Accessibility Features',
      description: 'Designed for rural farmers with voice and language support',
      icon: '🗣️',
      details: ['Voice-first interface', 'Multiple language support', 'Offline capabilities', 'Simple navigation']
    }
  ];

  const technologies = [
    { name: 'ResNet', category: 'Computer Vision' },
    { name: 'GPT-4o', category: 'Language Model' },
    { name: 'CNN', category: 'Deep Learning' },
    { name: 'OpenCV', category: 'Image Processing' },
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'ML Framework' }
  ];

  const benefits = [
    'Early disease detection prevents crop loss',
    'Reduce pesticide usage with targeted treatments',
    'Optimize resource allocation and costs',
    'Increase crop yield through better planning',
    'Access expert knowledge in local languages',
    'Make data-driven farming decisions',
    'Improve overall farm profitability',
    'Sustainable farming practices'
  ];

  const futureModules = [
    {
      title: 'Weather Integration',
      description: 'Real-time weather data and forecasting for better crop management',
      icon: '🌤️'
    },
    {
      title: 'Market Price Data',
      description: 'Live market prices and trends to optimize selling decisions',
      icon: '💹'
    },
    {
      title: 'Government Subsidies',
      description: 'Information about available subsidies and application assistance',
      icon: '🏛️'
    },
    {
      title: 'Drone Integration',
      description: 'Aerial crop monitoring and large-scale field analysis',
      icon: '🚁'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive farm analytics and performance tracking',
      icon: '📊'
    },
    {
      title: 'Community Network',
      description: 'Connect with other farmers and agricultural experts',
      icon: '👥'
    }
  ];

  const targetUsers = [
    { title: 'Small-Scale Farmers', icon: '👨‍🌾', description: 'Individual farmers managing small to medium plots' },
    { title: 'Agricultural Cooperatives', icon: '🤝', description: 'Farmer groups and cooperative societies' },
    { title: 'Agricultural Consultants', icon: '👨‍💼', description: 'Experts providing farming guidance and support' },
    { title: 'Agricultural Students', icon: '🎓', description: 'Students learning modern farming techniques' }
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
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-lg">
              <Leaf className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">AgroBuddy</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 font-medium mb-6">
            AI-Driven Plant Diagnostics & Crop Planner
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            AgroBuddy is a conversational assistant that combines real-time imaging and chatbot intelligence to help farmers 
            diagnose plant health issues and plan crop cultivation. By merging reliable AI detection with interactive planning tools, 
            AgroBuddy equips farmers with actionable insights for healthier crops and smarter decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Key Features */}
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
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
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

        {/* Core Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Advanced Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why AgroBuddy Stands Out */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why AgroBuddy Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                State-of-the-Art AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Integrates CNN and multimodal LLMs for accuracy and generalization
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Unified Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Combines diagnosis, planning, and chatbot features in one platform
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Rural Accessibility
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Voice and language options for diverse farming communities
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Expandable Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Structured for growth with modular design for future features
              </p>
            </div>
          </div>
        </div>

        {/* Future Modules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Future Expansion Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureModules.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-3xl mb-4">{module.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Users */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetUsers.map((user, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-3xl mb-4">{user.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {user.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {user.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Benefits for Farmers
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
        <div className="text-center bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Leaf className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Revolutionize Your Farming with AI</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the future of smart agriculture with AgroBuddy's AI-powered plant diagnostics and crop planning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroBuddy;