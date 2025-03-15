
import React, { useEffect, useRef } from 'react';
import { Heart, Users, Leaf, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
  delay?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, stat, description, delay = '0s' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-md border border-baobab-sand/20 opacity-0 hover-grow"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-baobab-green/10 text-baobab-green">
          {icon}
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-display font-bold text-baobab-green">{stat}</div>
          <p className="text-baobab-midnight/70 dark:text-white/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
            }, i * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-baobab-green/5">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-baobab-sand/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-baobab-green/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-baobab-green bg-baobab-green/10 rounded-full mb-4 animate-on-scroll opacity-0">
            Changing Lives & Landscapes
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0">
            The <span className="text-baobab-green">Impact</span> of Baobab Grid
          </h2>
          
          <p className="text-lg text-baobab-midnight/80 dark:text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Our technology isn't just innovative—it's transformative for communities, 
            economies, and ecosystems across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard 
            icon={<Zap size={24} />}
            stat="10,000+"
            description="Homes powered with clean energy"
            delay="0.1s"
          />
          <StatCard 
            icon={<Users size={24} />}
            stat="24+"
            description="Communities connected"
            delay="0.2s"
          />
          <StatCard 
            icon={<Leaf size={24} />}
            stat="5,000+"
            description="Hectares of land preserved"
            delay="0.3s"
          />
          <StatCard 
            icon={<Heart size={24} />}
            stat="86%"
            description="Reduction in human-wildlife conflict"
            delay="0.4s"
          />
        </div>
        
        <div ref={storyRef} className="bg-white dark:bg-baobab-midnight/30 rounded-xl overflow-hidden shadow-xl border border-baobab-sand/20 opacity-0 animate-growth">
          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-semibold mb-4 text-baobab-midnight dark:text-white">Success Story</h3>
              <h4 className="text-xl text-baobab-green mb-4">How Baobab Grid Changed Makena Village</h4>
              
              <p className="text-baobab-midnight/80 dark:text-white/80 mb-4">
                Before the Baobab Grid arrived, Makena's 230 residents relied on kerosene lamps 
                for light and traveled miles for mobile phone charging. Children studied by 
                candlelight, and the local clinic could only operate during daylight hours.
              </p>
              
              <p className="text-baobab-midnight/80 dark:text-white/80 mb-6">
                Today, the village boasts reliable solar power, high-speed internet, and a 
                digital education center. The clinic now operates 24/7, and local entrepreneurs 
                have launched three new businesses using the digital payment system.
              </p>
              
              <div className="flex space-x-2 text-sm text-baobab-midnight/60 dark:text-white/60">
                <span className="px-2 py-1 bg-baobab-green/10 rounded-full">Clean Energy</span>
                <span className="px-2 py-1 bg-baobab-leaf/10 rounded-full">Education</span>
                <span className="px-2 py-1 bg-baobab-sand/10 rounded-full">Healthcare</span>
              </div>
            </div>
            
            <div className="order-1 md:order-2 h-64 md:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="African village transformed by Baobab Grid" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-baobab-green/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-display text-lg">"Our children now have the same opportunities as those in big cities."</p>
                  <p className="text-white/80 text-sm">— Nuru, Village Elder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
