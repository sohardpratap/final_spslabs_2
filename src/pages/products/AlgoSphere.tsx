import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowLeft, CheckCircle, Lightbulb, Users, Trophy, Target } from 'lucide-react';

const AlgoSphere: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Automatic Activation',
      description: 'Detects supported coding platforms and displays a draggable icon for quick access to enhanced problem-solving tools.'
    },
    {
      icon: Lightbulb,
      title: 'Interactive Interface',
      description: 'Opens a new tab with visual representations, suggested solutions, algorithm roadmaps, and contextual hints.'
    },
    {
      icon: Trophy,
      title: 'Gamification System',
      description: 'Earn points for submitting correct answers, algorithms, or roadmaps, redeemable for premium discounts.'
    },
    {
      icon: Users,
      title: 'Community Contributions',
      description: 'Submit solutions and roadmaps that are peer-reviewed and rated, fostering collaboration and learning.'
    }
  ];

  const platforms = [
    'LeetCode',
    'HackerRank',
    'CodeChef',
    'Codeforces',
    'AtCoder',
    'GeeksforGeeks'
  ];

  const benefits = [
    'Transform coding problems into visual, interactive formats',
    'Get suggested algorithms and tailored roadmaps',
    'Access contextual hints to guide your problem-solving',
    'Earn points and redeem premium discounts',
    'Collaborate with community solutions and reviews',
    'Improve coding efficiency and engagement',
    'Learn from peer-reviewed solutions',
    'Gamified learning experience'
  ];

  const visualFeatures = [
    {
      icon: '📊',
      title: 'Flowcharts',
      description: 'Visual problem breakdown with step-by-step flowcharts'
    },
    {
      icon: '🌳',
      title: 'Decision Trees',
      description: 'Interactive decision trees for complex problem solving'
    },
    {
      icon: '🗺️',
      title: 'Algorithm Roadmaps',
      description: 'Tailored learning paths for different problem types'
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
            <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg">
              <Code className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Algo Sphere</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-medium mb-6">
            AI Visual Problem Solver Extension for Enhanced Coding
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Browser extension that transforms coding problems on platforms like LeetCode into visual, interactive formats. 
            Offers suggested algorithms, hints, and community solutions to improve problem-solving efficiency and engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Coming Soon - Get Notified
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Visual Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Visual Problem Solving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Features
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
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
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
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Supported Coding Platforms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg text-center"
                >
                  <Code className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
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
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">₹0</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">3 questions per day</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Basic visual features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Community access</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="text-3xl font-bold mb-4">₹68.9<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Unlimited questions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Advanced visual features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Ad-free experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Exclusive algorithms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Algo Sphere?
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
        <div className="text-center bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Code className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Revolutionize Your Coding Practice</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform complex algorithms into visual, interactive experiences and accelerate your learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium rounded-xl transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoSphere;