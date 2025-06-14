import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, CheckCircle, Video, Layers, Mic, Palette } from 'lucide-react';

const TutorBox: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'Split-Screen Teaching Interface',
      description: '40:60 split layout with front camera feed and digital whiteboard for professional teaching videos.'
    },
    {
      icon: Layers,
      title: 'Multi-Slide Scene Management',
      description: 'Create multiple whiteboard slides, add, duplicate, and reorder scenes for structured lessons.'
    },
    {
      icon: Mic,
      title: 'Auto-Subtitles & Transcription',
      description: 'Generate subtitles from voice using OpenAI Whisper and export .srt files or burn captions directly.'
    },
    {
      icon: Palette,
      title: 'Branding & Watermark Tools',
      description: 'Add teacher name, logo, or social media handles with customizable placement and styling.'
    }
  ];

  const coreFeatures = [
    {
      title: 'Real-Time Recording',
      description: 'Capture both whiteboard and camera in sync with audio processing and background noise removal.',
      icon: '🎥'
    },
    {
      title: 'Template Library',
      description: 'Choose from pre-designed whiteboard backgrounds: lined, graph, grid, blackboard, and more.',
      icon: '📚'
    },
    {
      title: 'High-Quality Export',
      description: 'Final video exported in high-resolution, YouTube-ready format with professional quality.',
      icon: '📤'
    },
    {
      title: 'Pen Tablet Support',
      description: 'Enhanced drawing experience with support for external pen tablets and stylus devices.',
      icon: '✏️'
    }
  ];

  const benefits = [
    'Create professional teaching videos with just a smartphone',
    'Eliminate need for separate hardware or post-production software',
    'Generate YouTube-ready content with minimal setup',
    'Add professional branding and watermarks',
    'Auto-generate subtitles for accessibility',
    'Manage multi-slide lessons efficiently',
    'Export in multiple formats and resolutions',
    'Background noise removal for clear audio'
  ];

  const targetAudience = [
    { title: 'Independent Educators', icon: '👨‍🏫', description: 'Private tutors and freelance educators' },
    { title: 'Coaching Institutes', icon: '🏫', description: 'Educational institutions and training centers' },
    { title: 'Online Course Creators', icon: '💻', description: 'Content creators building online courses' },
    { title: 'YouTube Educators', icon: '📺', description: 'Educational content creators on YouTube' },
    { title: 'Schools & Universities', icon: '🎓', description: 'Academic institutions and training organizations' }
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
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Tutor Box</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-medium mb-6">
            Professional Teaching Content Creation Made Simple
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            TutorBox is a next-generation mobile application built for educators and content creators who want to record 
            professional-quality teaching sessions using just their smartphone or tablet. It combines a front-facing video camera, 
            an interactive whiteboard, and powerful export tools into a single, intuitive platform.
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

        {/* Key Objectives */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Key Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Simplify Content Creation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Streamline the digital content creation process for educators with an all-in-one solution.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Eliminate Complexity
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Remove the need for separate hardware or post-production software.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  High-Quality Output
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Provide professional teaching content generation with minimal setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
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

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Additional Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Model */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Pricing Model
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl shadow-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Pro Creator Plan</h3>
              <div className="text-4xl font-bold mb-4">₹10,000<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-6 text-left">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Unlimited recording and exports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Full feature access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Pen tablet support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Promo code support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>7-14 days free trial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.slice(0, 3).map((audience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-3xl mb-4">{audience.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {targetAudience.slice(3).map((audience, index) => (
              <div
                key={index + 3}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-3xl mb-4">{audience.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Tutor Box?
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
              <GraduationCap className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Transform Your Teaching Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Create professional teaching content with ease and reach more students with high-quality educational videos.
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

export default TutorBox;