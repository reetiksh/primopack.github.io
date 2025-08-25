import React from 'react';
import Layout from '@/components/Layout';
import { Wrench, Clock, Users, Shield, Phone, Download, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Installation & Commissioning',
      description: 'Professional installation and setup of packaging machinery with complete system integration.',
      features: ['Site survey and planning', 'Professional installation', 'System integration', 'Performance testing', 'Operator training']
    },
    {
      icon: Clock,
      title: '24/7 Support Network',
      description: 'Round-the-clock technical support and emergency services to minimize downtime.',
      features: ['24/7 helpline', 'Remote diagnostics', 'Emergency repairs', 'Spare parts delivery', 'Technical consultation']
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Comprehensive training programs for operators, technicians, and maintenance staff.',
      features: ['Operator certification', 'Maintenance training', 'Safety protocols', 'Online modules', 'Refresher courses']
    },
    {
      icon: Shield,
      title: 'Warranty & Maintenance',
      description: 'Extended warranty programs and preventive maintenance services.',
      features: ['2-year warranty', 'Preventive maintenance', 'Annual inspections', 'Performance monitoring', 'Upgrade services']
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      price: 'Included',
      duration: '1 Year',
      features: [
        'Standard warranty coverage',
        'Phone and email support',
        'Online documentation access',
        'Basic troubleshooting',
        'Software updates'
      ]
    },
    {
      name: 'Premium Support',
      price: 'Contact for pricing',
      duration: '2 Years',
      features: [
        'Extended warranty',
        'Priority support queue',
        'Remote diagnostics',
        'Quarterly maintenance',
        'Performance optimization',
        'Training resources'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: 'Custom pricing',
      duration: 'Flexible',
      features: [
        'Dedicated support manager',
        'On-site technician visits',
        '4-hour response time',
        'Custom SLA agreements',
        'Advanced analytics',
        'Predictive maintenance',
        '24/7 emergency coverage'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is included in the standard warranty?',
      answer: 'Our standard warranty covers all manufacturing defects, mechanical failures, and electrical issues for 12 months from installation date. This includes free repairs, replacement parts, and technical support.'
    },
    {
      question: 'How quickly can you respond to service requests?',
      answer: 'Response times vary by support level: Basic support (24-48 hours), Premium support (8-12 hours), Enterprise support (4 hours). Emergency support is available 24/7 for critical issues.'
    },
    {
      question: 'Do you provide training for our operators?',
      answer: 'Yes, we provide comprehensive training programs including on-site operator training, safety protocols, maintenance procedures, and ongoing certification programs.'
    },
    {
      question: 'Can you service equipment not purchased from Primo Pack?',
      answer: 'We offer service for compatible third-party equipment on a case-by-case basis. Contact our service team to discuss your specific requirements and compatibility.'
    },
    {
      question: 'What preventive maintenance do you recommend?',
      answer: 'We recommend quarterly inspections, annual calibration, regular lubrication schedules, and software updates. Our Premium and Enterprise support plans include these services.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Service & <span className="text-accent">Support</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up">
            Comprehensive service solutions to keep your packaging operations running 
            at peak performance with minimal downtime.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Complete <span className="text-gradient">Service Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to ongoing support, we provide end-to-end services to maximize your equipment performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-elegant group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle size={16} className="text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Support <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support level that best fits your operational requirements and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((plan, index) => (
              <div 
                key={index} 
                className={`card-elegant relative ${plan.popular ? 'ring-2 ring-primary' : ''} group animate-scale-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-muted-foreground">{plan.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle size={18} className="text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary-dark' 
                    : 'btn-outline'
                }`}>
                  {plan.popular ? 'Get Started' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                Request <span className="text-gradient">Service</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Need immediate assistance? Submit a service request and our team will respond quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Emergency Hotline</h3>
                      <a href="tel:+919876543210" className="text-primary hover:text-primary-dark transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    24/7 emergency support for critical equipment failures
                  </p>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Download size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Quick Resources</h3>
                      <div className="text-primary">Download Center</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Service Manual PDFs</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Troubleshooting Guides</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Parts Catalogs</a></li>
                  </ul>
                </div>
              </div>

              {/* Service Request Form */}
              <div className="card-elegant">
                <h3 className="text-xl font-semibold mb-6">Service Request Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Contact Person"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Service Type</option>
                    <option>Emergency Repair</option>
                    <option>Routine Maintenance</option>
                    <option>Installation Support</option>
                    <option>Training Request</option>
                    <option>Parts Order</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Equipment Model/Serial Number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <textarea
                    placeholder="Describe the issue or service required..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>

                  <button type="submit" className="w-full btn-hero">
                    Submit Service Request
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our service and support offerings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card-elegant animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;