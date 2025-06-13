import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, CheckCircle, Smartphone, Search, Zap, Palette } from 'lucide-react';

const WebsitesDevelopment: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices, from mobile phones to desktop computers.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices to help your website rank higher in search engine results.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Fast-loading websites optimized for speed and user experience across all platforms.'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Contemporary, professional designs that reflect your brand and engage your audience.'
    }
  ];

  const websiteTypes = [
    {
      title: 'Business Websites',
      description: 'Professional websites that establish your online presence and credibility.',
      icon: '🏢',
      features: ['Company information', 'Service showcases', 'Contact forms', 'Professional design']
    },
    {
      title: 'E-commerce Stores',
      description: 'Complete online stores with payment processing and inventory management.',
      icon: '🛒',
      features: ['Product catalogs', 'Shopping cart', 'Payment integration', 'Order management']
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work and skills with stunning portfolio presentations.',
      icon: '🎨',
      features: ['Project galleries', 'Case studies', 'Client testimonials', 'Contact integration']
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive sales.',
      icon: '🎯',
      features: ['Lead capture forms', 'Call-to-action buttons', 'A/B testing ready', 'Analytics integration']
    },
    {
      title: 'Blog & Content Sites',
      description: 'Content management systems for blogs, news sites, and content platforms.',
      icon: '📝',
      features: ['Content management', 'SEO optimization', 'Social sharing', 'Comment systems']
    },
    {
      title: 'Custom Web Apps',
      description: 'Interactive web applications tailored to your specific business needs.',
      icon: '⚙️',
      features: ['Custom functionality', 'User authentication', 'Database integration', 'API development']
    }
  ];

  const technologies = [
    { name: 'React', type: 'Frontend Framework' },
    { name: 'Next.js', type: 'Full-stack Framework' },
    { name: 'WordPress', type: 'CMS' },
    { name: 'Shopify', type: 'E-commerce' },
    { name: 'Node.js', type: 'Backend' },
    { name: 'Tailwind CSS', type: 'Styling' }
  ];

  const benefits = [
    'Professional online presence',
    'Increased brand credibility',
    'Better customer engagement',
    'Lead generation and sales',
    'Mobile-friendly experience',
    'Search engine visibility',
    'Competitive advantage',
    '24/7 business availability'
  ];

  const process = [
    { step: '1', title: 'Discovery', description: 'Understanding your goals and requirements' },
    { step: '2', title: 'Design', description: 'Creating wireframes and visual designs' },
    { step: '3', title: 'Development', description: 'Building your website with modern technologies' },
    { step: '4', title: 'Testing', description: 'Ensuring quality and cross-browser compatibility' },
    { step: '5', title: 'Launch', description: 'Deploying your website and going live' },
    { step: '6', title: 'Support', description: 'Ongoing maintenance and updates' }
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
            <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg">
              <Globe className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Website Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-medium mb-6">
            Professional Websites That Drive Results
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We create stunning, responsive websites that not only look great but also perform exceptionally. 
            From simple business websites to complex web applications, we deliver solutions that help 
            your business grow and succeed online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Website
            </Link>
            <button className="px-8 py-4 border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300">
              View Examples
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Makes Our Websites Special
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

        {/* Website Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Types of Websites We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{type.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {type.description}
                </p>
                <div className="space-y-1">
                  {type.features.map((feature, featureIndex) => (
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
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tech.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Benefits of Professional Website
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

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
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
        <div className="text-center bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <Globe className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a stunning website that represents your brand and drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitesDevelopment;