import React from 'react';
import Layout from '@/components/Layout';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
import facilityImage from '@/assets/facility-overview.jpg';

const About = () => {
  const timeline = [
    { year: '2000', title: 'Company Registered', description: 'Founded in India with a vision for quality packaging solutions.' },
    { year: '2005', title: 'Pan-India Expansion', description: 'Expanded operations across major Indian cities.' },
    { year: '2010', title: 'Innovation Center Launched', description: 'Established R&D facility to develop cutting-edge packaging technologies.' },
    { year: '2020', title: 'Industry 4.0 Integration', description: 'Introduced smart packaging solutions with IoT connectivity.' },
    { year: '2024', title: 'Sustainability Initiative', description: 'Leading the industry in eco-friendly packaging innovations.' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technology and forward-thinking solutions.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Putting our customers first with personalized service and tailored packaging solutions.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Maintaining the highest standards in manufacturing and service delivery.'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Building trust through consistent performance and dependable support.'
    }
  ];

  const team = [
    {
      name: 'John Anderson',
      position: 'Chief Executive Officer',
      experience: '20+ years',
      description: 'Visionary leader with extensive experience in industrial automation.'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Head of Engineering',
      experience: '15+ years',
      description: 'Expert in mechanical design and packaging automation systems.'
    },
    {
      name: 'David Chen',
      position: 'National Sales Director',
      experience: '18+ years',
      description: 'Strategic sales leader with deep understanding of the Indian market.'
    },
    {
      name: 'Sarah Williams',
      position: 'Customer Success Manager',
      experience: '12+ years',
      description: 'Dedicated to ensuring exceptional customer experience and support.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Primo Pack
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up">
            For over two decades, we've been at the forefront of packaging innovation in India,
            delivering caring solutions that drive efficiency and excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small family business in 2000 has grown into India's trusted leader
                in packaging machinery solutions. Our journey has been driven by an unwavering
                commitment to innovation, quality, and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, we serve over 500 companies across India, providing cutting-edge
                packaging solutions that streamline operations and enhance productivity.
              </p>
              <div className="space-y-4">
                {['ISO 9001:2015 Certified', 'CE Marked Products', '24/7 Nationwide Support'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src={facilityImage} 
                alt="Modern packaging facility"
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card-elegant">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={40} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Leadership <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading our company towards continued innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="card-elegant text-center group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary font-semibold mb-2">{member.position}</div>
                <div className="text-sm text-accent mb-3">{member.experience}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;