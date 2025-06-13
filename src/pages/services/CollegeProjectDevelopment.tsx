import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, CheckCircle, BookOpen, Users, Award, Lightbulb } from 'lucide-react';

const CollegeProjectDevelopment: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Support',
      description: 'Comprehensive guidance aligned with academic requirements and learning objectives.'
    },
    {
      icon: Users,
      title: 'Expert Mentoring',
      description: 'One-on-one mentoring from experienced developers and industry professionals.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'High-quality deliverables that meet academic standards and impress evaluators.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Encouraging innovative solutions and creative problem-solving approaches.'
    }
  ];

  const projectTypes = [
    {
      title: 'Web Development Projects',
      description: 'Full-stack web applications using modern technologies and frameworks.',
      icon: '🌐',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      examples: ['E-commerce platforms', 'Social media apps', 'Management systems', 'Portfolio websites']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for Android and iOS.',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'Java', 'Swift'],
      examples: ['Utility apps', 'Educational apps', 'Social apps', 'Game applications']
    },
    {
      title: 'AI/ML Projects',
      description: 'Machine learning and artificial intelligence projects with real-world applications.',
      icon: '🤖',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      examples: ['Prediction models', 'Image recognition', 'Chatbots', 'Data analysis']
    },
    {
      title: 'Database Projects',
      description: 'Database design and management systems with complex data relationships.',
      icon: '🗄️',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
      examples: ['Inventory systems', 'Student management', 'Library systems', 'Hospital management']
    },
    {
      title: 'Desktop Applications',
      description: 'Desktop software applications for various operating systems.',
      icon: '💻',
      technologies: ['Java', 'C#', 'Python', 'Electron'],
      examples: ['Management software', 'Utility tools', 'Educational software', 'Games']
    },
    {
      title: 'IoT Projects',
      description: 'Internet of Things projects with hardware and software integration.',
      icon: '🔌',
      technologies: ['Arduino', 'Raspberry Pi', 'Python', 'C++'],
      examples: ['Smart home systems', 'Monitoring systems', 'Automation projects', 'Sensor networks']
    }
  ];

  const services = [
    'Project concept development and planning',
    'Technology selection and architecture design',
    'Complete project implementation',
    'Code documentation and comments',
    'Project report and presentation preparation',
    'Viva voce preparation and support',
    'Deployment and testing assistance',
    'Post-submission support and modifications'
  ];

  const benefits = [
    'Learn industry-standard development practices',
    'Gain hands-on experience with modern technologies',
    'Build impressive portfolio projects',
    'Receive expert guidance throughout development',
    'Meet academic deadlines and requirements',
    'Understand project documentation standards',
    'Prepare for technical interviews',
    'Bridge the gap between theory and practice'
  ];

  const process = [
    { step: '1', title: 'Consultation', description: 'Understanding project requirements and academic guidelines' },
    { step: '2', title: 'Planning', description: 'Creating project timeline and technology roadmap' },
    { step: '3', title: 'Development', description: 'Implementing the project with regular progress updates' },
    { step: '4', title: 'Documentation', description: 'Preparing comprehensive project documentation' },
    { step: '5', title: 'Testing', description: 'Thorough testing and quality assurance' },
    { step: '6', title: 'Delivery', description: 'Final delivery with presentation support' }
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
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl shadow-lg">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">College Project Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-medium mb-6">
            End-to-End Support for Academic Projects
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We provide comprehensive support for college students working on their academic projects. 
            From concept development to final implementation, our expert team guides you through 
            every step of the development process while ensuring you learn and understand the technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <button className="px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-medium rounded-xl transition-all duration-300">
              View Sample Projects
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Approach to Academic Projects
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

        {/* Project Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Types of Projects We Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{project.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Examples:</h4>
                  <div className="space-y-1">
                    {project.examples.slice(0, 2).map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              What We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Benefits for Students
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
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
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
        <div className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <GraduationCap className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Excel in Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to create an outstanding project that showcases your skills and meets academic requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Project Support
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-medium rounded-xl transition-all duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeProjectDevelopment;