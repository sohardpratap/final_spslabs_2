import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Github, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqabqrqw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: 'Noida, Uttar Pradesh, India',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 7906636345',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'spslabs2025@gmail.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/spslabs.in/',
      color: 'hover:text-pink-500',
      description: 'Follow us for updates'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/917906636345',
      color: 'hover:text-green-500',
      description: 'Chat with us directly'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/spslabs2025',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      description: 'Check our projects'
    }
  ];

  const services = [
    'AI Automations',
    'Custom AI Agents',
    'Business Digitalization',
    'Software Solutions',
    'Website Development',
    'College Project Development'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for reaching out to us. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Get In <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Ready to transform your business with innovative technology solutions? 
            We'd love to hear from you and discuss how we can help achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-800 animate-scale-in">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl mr-4">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl mr-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.details}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 ${social.color} transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600`}
                    >
                      <IconComponent className="h-6 w-6 mr-4" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{social.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{social.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-blue-100 dark:border-gray-600 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Response Promise</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We understand that time is valuable. That's why we commit to responding to all inquiries within 24 hours during business days.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email Response</div>
                  <div className="text-gray-600 dark:text-gray-300">Within 24 hours</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">WhatsApp Response</div>
                  <div className="text-gray-600 dark:text-gray-300">Within 2 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom software solutions can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! We offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally. Our support includes updates, bug fixes, and technical assistance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What technologies do you work with?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work with modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure), and mobile development frameworks. We choose the best tech stack for each project.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Can you help with existing projects?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! We can help improve, maintain, or completely redesign existing projects. We'll assess your current solution and recommend the best path forward to meet your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;