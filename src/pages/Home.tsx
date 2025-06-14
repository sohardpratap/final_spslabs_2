import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, GraduationCap, QrCode, Sparkles, Bot, Building2 } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = [
    {
      id: 'zap-dine',
      name: 'Zap Dine',
      description: 'Effortless dining with a quick scan—order, pay, and enjoy!',
      icon: QrCode,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'formguard',
      name: 'FormGuard',
      description: 'AI-Powered Exercise Form Analyzer',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'tutor-box',
      name: 'Tutor Box',
      description: 'Professional teaching content creation made simple',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    }
  ];

  const services = [
    {
      title: 'Business Digitalization',
      description: 'Transform your traditional business operations into streamlined digital workflows',
      icon: Building2,
      href: '/services/business-digitalization'
    },
    {
      title: 'Web Development',
      description: 'Professional, responsive websites that represent your brand and drive results',
      icon: Sparkles,
      href: '/services/websites-development'
    },
    {
      title: 'AI Automations',
      description: 'Harness the power of AI to automate repetitive tasks and enhance your business operations',
      icon: Bot,
      href: '/services/ai-automations'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in">
              Transforming Ideas into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse-slow">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium animate-slide-up">
              Innovative Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Building the Future of Technology Today
            </p>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            We create innovative software solutions that help businesses thrive in the digital age. 
            From custom applications to AI-powered tools, we're your partner in digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-xl transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Our Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Discover our innovative solutions designed to solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${product.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                      {product.description}
                    </p>
                    <div className="text-center">
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View all products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Expert solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About SPSLabs.in
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  At SPSLabs.in, we believe in the power of technology to transform businesses and enhance lives. 
                  Our team of experts combines creativity with technical expertise to build innovative solutions 
                  that address real-world challenges.
                </p>
                <p>
                  Whether you're a startup looking to disrupt your industry or an established business seeking 
                  digital transformation, we have the skills and experience to bring your vision to life.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Empowering businesses through innovative technology</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Innovation, quality, and customer success</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Leading the future of digital transformation</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Team</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Expert developers and creative minds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-slide-up">
            Whether you need a custom software solution, want to leverage our products, or are looking for expert consultation, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;