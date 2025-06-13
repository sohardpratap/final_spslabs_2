import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, CheckCircle, Brain, MessageSquare, Settings, Users } from 'lucide-react';

const CustomAIAgents: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI agents that can analyze complex scenarios and make informed decisions based on your business logic.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding and responding to human communication naturally.'
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Tailored automation workflows that adapt to your specific business processes and requirements.'
    },
    {
      icon: Users,
      title: '24/7 Availability',
      description: 'Round-the-clock operation ensuring your business never stops, even outside working hours.'
    }
  ];

  const agentTypes = [
    {
      title: 'Customer Support Agents',
      description: 'Intelligent chatbots that handle customer inquiries, resolve issues, and escalate complex cases.',
      icon: '🎧',
      features: ['Multi-language support', 'Sentiment analysis', 'Issue resolution', 'Escalation management']
    },
    {
      title: 'Sales Assistants',
      description: 'AI agents that qualify leads, schedule meetings, and guide prospects through the sales funnel.',
      icon: '💼',
      features: ['Lead qualification', 'Meeting scheduling', 'Product recommendations', 'Follow-up automation']
    },
    {
      title: 'Data Analysts',
      description: 'Intelligent agents that analyze business data and provide actionable insights and reports.',
      icon: '📊',
      features: ['Data processing', 'Trend analysis', 'Report generation', 'Predictive insights']
    },
    {
      title: 'Content Creators',
      description: 'AI agents that generate marketing content, social media posts, and documentation.',
      icon: '✍️',
      features: ['Content generation', 'SEO optimization', 'Brand consistency', 'Multi-format output']
    }
  ];

  const benefits = [
    'Reduce response times by up to 90%',
    'Handle unlimited concurrent conversations',
    'Consistent service quality 24/7',
    'Scalable without additional hiring',
    'Multilingual support capabilities',
    'Integration with existing systems',
    'Continuous learning and improvement',
    'Cost-effective customer service solution'
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
            <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg">
              <Sparkles className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Custom AI Agents</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-6">
            Intelligent AI Agents Tailored to Your Business
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our custom AI agents are designed to understand your business context, learn from your data, 
            and provide intelligent assistance that scales with your needs. From customer support to data analysis, 
            we create AI agents that work seamlessly within your existing workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Build Your AI Agent
            </Link>
            <button className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300">
              See Demo
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

        {/* Agent Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Types of AI Agents We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agentTypes.map((agent, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{agent.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {agent.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {agent.description}
                </p>
                <div className="space-y-2">
                  {agent.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Benefits of Custom AI Agents
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

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', description: 'Understanding your business needs and defining agent requirements' },
              { step: '2', title: 'Design', description: 'Creating the AI agent architecture and conversation flows' },
              { step: '3', title: 'Training', description: 'Training the AI with your specific data and business context' },
              { step: '4', title: 'Deployment', description: 'Seamless integration and ongoing optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Brain className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Agent?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create an intelligent AI agent that understands your business and serves your customers 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Building Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAIAgents;