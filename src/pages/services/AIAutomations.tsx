import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowLeft, CheckCircle, Zap, Target, BarChart3, Clock, Shield } from 'lucide-react';

const AIAutomations: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce human error.'
    },
    {
      icon: Target,
      title: 'Intelligent Workflows',
      description: 'Create smart workflows that adapt and optimize based on data patterns and business rules.'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Insights',
      description: 'Leverage AI to analyze large datasets and extract actionable business insights.'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Process and respond to data in real-time for immediate business impact.'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity and efficiency',
    'Minimize human errors and inconsistencies',
    'Scale operations without proportional cost increases',
    'Free up employees for strategic tasks',
    'Improve customer satisfaction with faster response times',
    'Gain competitive advantage through automation',
    '24/7 automated operations'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automated chatbots and support systems that handle customer inquiries 24/7.',
      icon: '🤖'
    },
    {
      title: 'Document Processing',
      description: 'Intelligent document analysis, data extraction, and automated filing systems.',
      icon: '📄'
    },
    {
      title: 'Inventory Management',
      description: 'Automated stock monitoring, reordering, and supply chain optimization.',
      icon: '📦'
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, expense tracking, and financial reporting systems.',
      icon: '💰'
    },
    {
      title: 'Marketing Automation',
      description: 'Personalized marketing campaigns, lead scoring, and customer segmentation.',
      icon: '📈'
    },
    {
      title: 'Quality Assurance',
      description: 'Automated testing, quality control, and compliance monitoring systems.',
      icon: '✅'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg">
              <Bot className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AI Automations</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            Harness the Power of AI to Transform Your Business
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI automation solutions help businesses streamline operations, reduce costs, and improve efficiency 
            by automating repetitive tasks and creating intelligent workflows that adapt to your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <button className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Automation Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Why Choose Our AI Automation Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Analysis', description: 'We analyze your current processes and identify automation opportunities' },
              { step: '2', title: 'Design', description: 'Custom automation solutions designed specifically for your business needs' },
              { step: '3', title: 'Implementation', description: 'Seamless integration with your existing systems and workflows' },
              { step: '4', title: 'Optimization', description: 'Continuous monitoring and optimization for maximum efficiency' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Shield className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Automation Journey
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomations;