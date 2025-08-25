import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        '123 Industrial Road',
        'Mumbai, Maharashtra 400001',
        'India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Sales: +91 98765 43210',
        'Support: +91 98765 43211',
        'Emergency: +91 98765 43212'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'Sales: sales@primopack.in',
        'Support: support@primopack.in',
        'Info: info@primopack.in'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Emergency Support: 24/7'
      ]
    }
  ];

  const offices = [
    {
      city: 'Mumbai',
      address: '123 Industrial Road, Mumbai, MH 400001',
      phone: '+91 98765 43210',
      email: 'mumbai@primopack.in'
    },
    {
      city: 'Delhi',
      address: '456 Industrial Area, New Delhi, DL 110001',
      phone: '+91 98765 43211',
      email: 'delhi@primopack.in'
    },
    {
      city: 'Bengaluru',
      address: '789 Tech Park, Bengaluru, KA 560001',
      phone: '+91 98765 43212',
      email: 'bengaluru@primopack.in'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up">
            Get in touch with our packaging experts. We're here to help you find 
            the perfect solution for your packaging needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="card-elegant text-center group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-2 text-sm">
                  {info.details.map((detail, dIndex) => (
                    <div key={dIndex} className="text-muted-foreground">
                      {detail.includes('@') ? (
                        <a href={`mailto:${detail.split(': ')[1]}`} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : detail.includes('+91') ? (
                        <a href={`tel:${detail.split(': ')[1]}`} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="card-elegant">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="product-information">Product Information</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your packaging requirements, questions, or how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-hero">
                    Send Message
                    <Send size={20} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-slide-in-right">
              {/* Map Placeholder */}
              <div className="card-elegant mb-8">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map would be integrated here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      123 Industrial Road, Mumbai, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="block card-elegant hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us Now</h4>
                      <p className="text-sm text-muted-foreground">Speak directly with our experts</p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@primopack.in"
                  className="block card-elegant hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-sm text-muted-foreground">Get detailed information via email</p>
                    </div>
                  </div>
                </a>

                <div className="card-elegant bg-primary text-primary-foreground">
                  <h4 className="font-semibold mb-2">Emergency Support</h4>
                  <p className="text-sm opacity-90 mb-3">
                    24/7 emergency hotline for critical equipment failures
                  </p>
                  <a
                    href="tel:+919876543212"
                    className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent-light transition-colors"
                  >
                    <Phone size={16} />
                    <span>+91 98765 43212</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Regional <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple locations to serve you better with local support and faster response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className="card-elegant text-center animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold mb-4">{office.city} Office</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start justify-center space-x-2">
                    <MapPin size={16} className="text-primary mt-0.5" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone size={16} className="text-primary" />
                    <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail size={16} className="text-primary" />
                    <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;