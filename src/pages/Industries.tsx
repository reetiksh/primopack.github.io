import React from 'react';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, Users, TrendingUp } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      name: 'Hero Cycles',
      logo: 'HC',
      description: 'Leading bicycle manufacturer using our automated strapping solutions for efficient packaging of bicycle components and finished products.',
      solutions: ['Automatic Strapping Machines', 'Custom Conveyor Integration', '24/7 Support'],
      results: ['40% faster packaging', '60% labor reduction', '99.9% uptime']
    },
    {
      name: 'Usha International',
      logo: 'UI',
      description: 'Home appliances giant utilizing our wrapping and strapping systems for secure packaging of appliances and components.',
      solutions: ['Pallet Wrapping Systems', 'Semi-Auto Strapping', 'Material Supply'],
      results: ['50% material savings', '35% faster throughput', 'Zero damage reports']
    },
    {
      name: 'Kangaroo',
      logo: 'KG',
      description: 'Leading luggage manufacturer implementing our packaging solutions for protective and efficient product handling.',
      solutions: ['Shrink Wrapping', 'Manual Tools', 'Training Programs'],
      results: ['30% cost reduction', '45% efficiency gain', '100% quality consistency']
    },
    {
      name: 'Eastman Cast & Forge',
      logo: 'ECF',
      description: 'Industrial casting company using our heavy-duty strapping solutions for secure packaging of metal components.',
      solutions: ['Heavy-Duty Strapping', 'Steel Straps', 'Custom Solutions'],
      results: ['Zero shipping damage', '25% faster loading', 'Improved safety ratings']
    },
    {
      name: 'Eastman Tools',
      logo: 'ET',
      description: 'Tool manufacturer leveraging our automated packaging systems for consistent and reliable product packaging.',
      solutions: ['Automated Lines', 'Quality Control', 'Maintenance Support'],
      results: ['55% productivity increase', '20% cost savings', '99% accuracy rate']
    }
  ];

  const sectors = [
    {
      icon: '🏭',
      name: 'Manufacturing',
      description: 'Heavy machinery, automotive parts, industrial equipment',
      applications: ['Component packaging', 'Export preparation', 'Warehouse optimization']
    },
    {
      icon: '📱',
      name: 'Electronics',
      description: 'Consumer electronics, components, semiconductors',
      applications: ['Anti-static packaging', 'Precision handling', 'Clean room solutions']
    },
    {
      icon: '🥤',
      name: 'Food & Beverage',
      description: 'Processed foods, beverages, agricultural products',
      applications: ['Hygienic packaging', 'Temperature control', 'FDA compliance']
    },
    {
      icon: '💊',
      name: 'Pharmaceuticals',
      description: 'Medicines, medical devices, healthcare products',
      applications: ['Sterile packaging', 'Regulatory compliance', 'Traceability systems']
    },
    {
      icon: '👕',
      name: 'Textiles',
      description: 'Clothing, fabrics, home textiles',
      applications: ['Compression packaging', 'Moisture protection', 'Retail preparation']
    },
    {
      icon: '🚗',
      name: 'Automotive',
      description: 'Auto parts, accessories, vehicles',
      applications: ['Parts packaging', 'Export crating', 'Just-in-time delivery']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Industries We <span className="text-accent">Serve</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up">
            Trusted by leading manufacturers across diverse industries for reliable, 
            efficient packaging solutions that drive operational excellence.
          </p>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how leading companies have transformed their packaging operations with our solutions.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="card-elegant">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                        {industry.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{industry.name}</h3>
                        <div className="text-primary font-medium">Success Partner</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Solutions Implemented</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, sIndex) => (
                            <li key={sIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle size={16} className="text-accent" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Achieved Results</h4>
                        <ul className="space-y-2">
                          {industry.results.map((result, rIndex) => (
                            <li key={rIndex} className="flex items-center space-x-2 text-sm">
                              <TrendingUp size={16} className="text-accent" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-card rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-white">{industry.logo}</span>
                    </div>
                    <div className="text-6xl font-bold text-primary mb-2">
                      {index === 0 ? '40%' : index === 1 ? '50%' : index === 2 ? '30%' : index === 3 ? '25%' : '55%'}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {index === 0 ? 'Faster Packaging' : index === 1 ? 'Material Savings' : index === 2 ? 'Cost Reduction' : index === 3 ? 'Faster Loading' : 'Productivity Increase'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Sectors We <span className="text-gradient">Specialize In</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive packaging solutions tailored to meet the unique requirements of various industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="card-elegant text-center group hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {sector.description}
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold mb-3 text-primary">Applications</h4>
                  <ul className="space-y-2">
                    {sector.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Let us analyze your packaging requirements and design a custom solution 
              that delivers measurable improvements to your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors duration-300 flex items-center justify-center space-x-2">
                <Users size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>View Case Studies</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;