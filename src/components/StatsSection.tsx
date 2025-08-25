import React, { useEffect, useState } from 'react';
import { Users, Award, MapPin, Wrench } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Companies Served',
      description: 'Across India'
    },
    {
      icon: Award,
      number: 24,
      suffix: '',
      label: 'Years Experience',
      description: 'Since 2000'
    },
    {
      icon: MapPin,
      number: 1,
      suffix: '',
      label: 'Country Served',
      description: 'India'
    },
    {
      icon: Wrench,
      number: 15000,
      suffix: '+',
      label: 'Machines Installed',
      description: 'Operational Nationwide'
    }
  ];

  const CountUp = ({ end, duration = 2000, isVisible }: { end: number; duration?: number; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easeOut = 1 - Math.pow(1 - percentage, 3);
        setCount(Math.floor(end * easeOut));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section id="stats-section" className="section-padding bg-primary text-primary-foreground">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Trusted by Indian Industry Leaders
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Our commitment to excellence has made us the preferred choice for
            packaging solutions across industries throughout India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <stat.icon size={40} className="text-accent" />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <CountUp end={stat.number} isVisible={isVisible} />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-lg opacity-80">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Packaging Operations?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join hundreds of satisfied companies across India who trust our solutions for their packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-300">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;