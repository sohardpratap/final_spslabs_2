import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  ArrowRight, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Github,
  Linkedin
} from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sohard Pratap Singh',
      role: 'CEO & Founder',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFgJepnWPTx1w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721517491352?e=1756944000&v=beta&t=2Kn8pjuV12zSMptq-Aa7E4rOEY8AT-2rUUS5bJ1MeQ0',
      portfolio: 'https://sohardpratapsingh.netlify.app/',
      description: 'Visionary leader driving innovation in software development and AI solutions.'
    },
    {
      name: 'Om Saxena',
      role: 'Junior Developer and HR',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEKj0U42FABhg/profile-displayphoto-shrink_400_400/B4EZUUwzJhGwAg-/0/1739810094553?e=1756944000&v=beta&t=8H1cQ5W6OxDEfP6xLZo4tiipOgY4naHkESsags2l9_Y',
      linkedin: 'https://www.linkedin.com/in/om-saxena-5b8571321',
      description: 'Skilled developer passionate about creating robust and scalable software solutions.'
    },
    {
      name: 'Nakshatra Yadav',
      role: 'Junior Developer and Editor',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQG15Rc0l-yQRA/profile-displayphoto-shrink_400_400/B4EZVF1j2FHMAg-/0/1740633428054?e=1752105600&v=beta&t=9TkvTyqesGT_EUpKZ6bZIVeiPgCnkR21OgNHaAxTkXk',
      linkedin: 'https://www.linkedin.com/in/nakshatra-yadav-9377a534b/',
      description: 'Creative designer crafting compelling visual experiences and brand identities.'
    },
    {
      name: 'Vansh Bhatnagar',
      role: 'unior Developer and Sales Manager',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQE9ER5S31ubPQ/profile-displayphoto-shrink_400_400/B4EZbm_ZWFGUAg-/0/1747632101261?e=1756944000&v=beta&t=4DXx-btdkSX-OqM3Pi3KW2Hzhyof8dYNPPJFToYOqIw',
      linkedin: 'https://www.linkedin.com/in/vansh-bhatnagar-b3365a366/',
      description: 'Designs scalable systems, manages cloud infrastructure, ensures security and reliability.'
    },
    {
      name: 'Shruti Agarwal,
      role: 'Software & DevOps Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQG2T047a82zdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718260484535?e=1756944000&v=beta&t=pR65pO8VoKNd1U7XS9A7eljXjsBQQ2O_W6_HYOEzMd4',
      portfolio: 'https://shrutiagarwal09.netlify.app/',
      description: 'Builds software and automates systems for smooth and scalable deployment.'
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to achieve shared success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.'
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We approach every challenge with fresh perspectives and creative solutions that make a difference.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '7+', label: 'Products Developed' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/spslabs.in/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/917906636345',
      color: 'hover:text-green-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/spslabs2025',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    }
  ];

  return (
    <div className="pt-16 min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">SPS Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Transforming Ideas into Digital Reality
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              SPSLabs.in is a leading software development company dedicated to providing innovative solutions 
              for modern businesses. Our mission is to empower organizations with cutting-edge technology 
              and exceptional service, helping them thrive in the digital age.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To empower businesses through innovative technology solutions that drive growth, 
                    efficiency, and digital transformation while maintaining the highest standards of quality and service.
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To be the leading force in digital innovation, creating solutions that shape the future 
                    of technology and help businesses worldwide achieve their full potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 text-center hover:shadow-xl transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-900/90 animate-scale-in"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Our talented team of professionals brings together diverse skills and expertise 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30 dark:border-gray-700/30 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-3">
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Portfolio
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/90 to-teal-600/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white border border-white/30 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-white/80" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-white/80" />
                  <span>+91 7906636345</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-white/80" />
                  <span>spslabs2025@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white border border-white/30 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${social.color} transition-colors`}
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white border border-white/30 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-white/90 mb-6">
                Let's discuss your project and bring your ideas to life.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-xl transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center w-full justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-xl transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Why Choose SPS Labs?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Client-Focused Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize understanding your unique needs and delivering solutions that align perfectly with your business goals.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stay ahead of technology trends to provide you with the most advanced and efficient solutions available.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our portfolio of successful projects and satisfied clients speaks to our commitment to excellence and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;