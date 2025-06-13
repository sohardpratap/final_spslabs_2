import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Sparkles, 
  Building2, 
  Code, 
  Globe, 
  GraduationCap,
  ArrowRight,
  Zap,
  Target,
  Users
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'ai-automations',
      name: 'AI Automations',
      description: 'Harness the power of AI to automate repetitive tasks and enhance your business operations',
      icon: Bot,
      color: 'from-blue-500 to-blue-600',
      features: ['Process Automation', 'Intelligent Workflows', 'Data Analysis', 'Performance Optimization']
    },
    {
      id: 'custom-ai-agents',
      name: 'Custom AI Agents',
      description: 'Intelligent AI agents tailored to your specific business needs and workflows',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      features: ['Personalized Solutions', 'Smart Decision Making', 'Natural Language Processing', '24/7 Availability']
    },
    {
      id: 'business-digitalization',
      name: 'Business Digitalization',
      description: 'Transform your traditional business operations into streamlined digital workflows',
      icon: Building2,
      color: 'from-teal-500 to-teal-600',
      features: ['Digital Transformation', 'Cloud Migration', 'Process Optimization', 'System Integration']
    },
    {
      id: 'software-solutions',
      name: 'Software Solutions',
      description: 'Custom software development tailored to your unique business requirements',
      icon: Code,
      color: 'from-green-500 to-green-600',
      features: ['Custom Development', 'Scalable Architecture', 'Quality Assurance', 'Ongoing Support']
    },
    {
      id: 'websites-development',
      name: 'Websites Development',
      description: 'Professional, responsive websites that represent your brand and drive results',
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Modern Technologies']
    },
    {
      id: 'college-project-development',
      name: 'College Project Development',
      description: 'End-to-end support for academic projects from concept to implementation',
      icon: GraduationCap,
      color: 'from-indigo-500 to-indigo-600',
      features: ['Academic Support', 'Project Guidance', 'Technical Mentoring', 'Documentation']
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose SPSLabs.in?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced developers and consultants bring years of expertise to every project.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                  <Zap className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We use the latest technologies and best practices to deliver superior solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Client-Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your success is our priority. We work closely with you to achieve your goals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;