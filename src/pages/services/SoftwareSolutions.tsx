import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowLeft, CheckCircle, Layers, Zap, Shield, Users } from 'lucide-react';

const SoftwareSolutions: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique business requirements and workflows.'
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions designed to grow with your business and handle increasing demands.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes to ensure reliable, bug-free software.'
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance and support services to keep your software running smoothly.'
    }
  ];

  const solutionTypes = [
    {
      title: 'Enterprise Applications',
      description: 'Large-scale business applications for complex organizational needs.',
      icon: '🏢',
      features: ['ERP systems', 'CRM platforms', 'Business intelligence', 'Workflow management']
    },
    {
      title: 'Web Applications',
      description: 'Modern, responsive web applications for various business purposes.',
      icon: '🌐',
      features: ['Progressive web apps', 'E-commerce platforms', 'Content management', 'API development']
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      icon: '📱',
      features: ['iOS development', 'Android development', 'Cross-platform apps', 'App store optimization']
    },
    {
      title: 'Desktop Applications',
      description: 'Powerful desktop software for specialized business operations.',
      icon: '💻',
      features: ['Windows applications', 'macOS applications', 'Cross-platform desktop', 'System integration']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud-based applications and microservices.',
      icon: '☁️',
      features: ['Microservices architecture', 'Serverless applications', 'Cloud migration', 'DevOps integration']
    },
    {
      title: 'Integration Solutions',
      description: 'Connect and integrate existing systems and third-party services.',
      icon: '🔗',
      features: ['API integration', 'Data synchronization', 'Legacy system integration', 'Third-party connectors']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Reduced manual processes and errors',
    'Better data management and insights',
    'Improved customer experience',
    'Competitive advantage through technology',
    'Scalable solutions that grow with your business',
    'Integration with existing systems',
    'Long-term cost savings'
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
            <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg">
              <Code className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Software Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-medium mb-6">
            Custom Software Development for Your Business
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We create custom software solutions that perfectly align with your business objectives. 
            From enterprise applications to mobile apps, our expert development team delivers 
            high-quality, scalable software that drives your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <button className="px-8 py-4 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Development Approach
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

        {/* Solution Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Types of Software Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionTypes.map((solution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{solution.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {solution.description}
                </p>
                <div className="space-y-1">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg text-center"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Benefits of Custom Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {[
              { step: '1', title: 'Discovery', description: 'Understanding requirements and goals' },
              { step: '2', title: 'Planning', description: 'Architecture and project planning' },
              { step: '3', title: 'Design', description: 'UI/UX design and prototyping' },
              { step: '4', title: 'Development', description: 'Coding and implementation' },
              { step: '5', title: 'Testing', description: 'Quality assurance and testing' },
              { step: '6', title: 'Deployment', description: 'Launch and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Software?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and create a custom solution that drives your business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutions;