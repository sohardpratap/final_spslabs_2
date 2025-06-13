import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, CheckCircle, Cloud, Database, Workflow, Shield } from 'lucide-react';

const BusinessDigitalization: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your business operations to secure, scalable cloud infrastructure.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Centralize and organize your business data for better accessibility and decision-making.'
    },
    {
      icon: Workflow,
      title: 'Process Optimization',
      description: 'Streamline workflows and eliminate inefficiencies through digital transformation.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure your digital infrastructure meets industry standards and security requirements.'
    }
  ];

  const services = [
    {
      title: 'Digital Strategy Consulting',
      description: 'Comprehensive assessment and roadmap for your digital transformation journey.',
      icon: '🎯',
      features: ['Current state analysis', 'Digital roadmap creation', 'Technology recommendations', 'ROI projections']
    },
    {
      title: 'Legacy System Modernization',
      description: 'Upgrade outdated systems to modern, efficient digital solutions.',
      icon: '🔄',
      features: ['System assessment', 'Migration planning', 'Data preservation', 'Minimal downtime']
    },
    {
      title: 'Workflow Digitization',
      description: 'Transform manual processes into automated digital workflows.',
      icon: '⚡',
      features: ['Process mapping', 'Automation design', 'Integration setup', 'Training & support']
    },
    {
      title: 'Digital Infrastructure',
      description: 'Build robust digital infrastructure to support your business growth.',
      icon: '🏗️',
      features: ['Cloud architecture', 'Scalable solutions', 'Security implementation', 'Performance optimization']
    }
  ];

  const benefits = [
    'Increase operational efficiency by 40-60%',
    'Reduce manual errors and processing time',
    'Improve data accessibility and insights',
    'Enable remote work capabilities',
    'Enhance customer experience',
    'Reduce operational costs',
    'Improve compliance and security',
    'Scale operations efficiently'
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'Patient management, telemedicine, digital records' },
    { name: 'Education', icon: '🎓', description: 'E-learning platforms, student management, virtual classrooms' },
    { name: 'Retail', icon: '🛍️', description: 'E-commerce, inventory management, customer analytics' },
    { name: 'Manufacturing', icon: '🏭', description: 'Supply chain digitization, IoT integration, quality control' },
    { name: 'Finance', icon: '💰', description: 'Digital banking, automated reporting, compliance systems' },
    { name: 'Real Estate', icon: '🏢', description: 'Property management, virtual tours, CRM systems' }
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
            <div className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-lg">
              <Building2 className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">Business Digitalization</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 font-medium mb-6">
            Transform Your Business for the Digital Age
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We help businesses transition from traditional operations to modern digital workflows. 
            Our comprehensive digitalization services ensure your business stays competitive, 
            efficient, and ready for future growth in the digital economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Digital Journey
            </Link>
            <button className="px-8 py-4 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300">
              Free Assessment
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Digitalization Services
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

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Digitalization Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Benefits of Business Digitalization
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
            Our Digitalization Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Assessment', description: 'Evaluate current systems and processes' },
              { step: '2', title: 'Strategy', description: 'Develop comprehensive digital strategy' },
              { step: '3', title: 'Planning', description: 'Create detailed implementation roadmap' },
              { step: '4', title: 'Execution', description: 'Implement digital solutions systematically' },
              { step: '5', title: 'Optimization', description: 'Monitor, refine, and optimize continuously' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
        <div className="text-center bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Building2 className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Go Digital?</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your business operations and unlock new opportunities in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Digital Transformation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDigitalization;