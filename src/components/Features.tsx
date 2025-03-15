
import React, { useEffect, useRef } from 'react';
import { Zap, Globe, TreeDeciduous } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  animationDelay?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  animationDelay = '0s',
  className 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-growth');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
      className={cn(
        "bg-white dark:bg-baobab-midnight/50 rounded-xl p-6 shadow-lg border border-baobab-sand/20 opacity-0 hover-grow",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-baobab-green to-baobab-leaf text-white rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-baobab-midnight dark:text-white">{title}</h3>
      <p className="text-baobab-midnight/70 dark:text-white/70">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-baobab-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-baobab-sand/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-baobab-green bg-baobab-green/10 rounded-full mb-4 animate-on-scroll opacity-0">
            What is the Baobab Grid?
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0">
            A New <span className="text-baobab-green">Ecosystem</span> for Africa's Future
          </h2>
          
          <p className="text-lg text-baobab-midnight/80 dark:text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            The Baobab Grid is an integrated system that combines renewable energy, 
            digital connectivity, and wildlife conservation to create sustainable 
            technology hubs across Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap size={24} />}
            title="Renewable Energy Pods"
            description="Solar, bio-energy, and kinetic energy sources that power communities with clean, sustainable electricity."
            className="md:transform md:-rotate-1"
          />
          <FeatureCard
            icon={<Globe size={24} />}
            title="Decentralized Digital Hubs"
            description="Internet connectivity, digital payment systems, and educational resources accessible to all."
            className="md:transform md:rotate-1 md:translate-y-4"
          />
          <FeatureCard
            icon={<TreeDeciduous size={24} />}
            title="Wildlife & Conservation"
            description="Monitoring systems and eco-tourism infrastructure that protect and preserve Africa's natural heritage."
            className="md:transform md:-rotate-1 lg:translate-y-8"
          />
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-baobab-green/20 to-baobab-sand/20 rounded-2xl transform -rotate-1 scale-[1.03] blur-sm -z-10"></div>
          <div className="bg-white dark:bg-baobab-midnight/50 rounded-xl p-8 md:p-12 shadow-lg border border-baobab-sand/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-baobab-midnight dark:text-white">Why It Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-baobab-green/20 text-baobab-green flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">1</span>
                    <p className="text-baobab-midnight/80 dark:text-white/80">
                      <strong className="text-baobab-midnight dark:text-white">Energy Access:</strong> Over 600 million Africans lack reliable electricity access, limiting economic growth.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-baobab-green/20 text-baobab-green flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">2</span>
                    <p className="text-baobab-midnight/80 dark:text-white/80">
                      <strong className="text-baobab-midnight dark:text-white">Digital Divide:</strong> Just 36% of the population has internet access, creating barriers to education and commerce.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-baobab-green/20 text-baobab-green flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">3</span>
                    <p className="text-baobab-midnight/80 dark:text-white/80">
                      <strong className="text-baobab-midnight dark:text-white">Biodiversity Loss:</strong> African wildlife faces unprecedented threats from habitat loss and poaching.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-baobab-green/80 to-baobab-leaf/80 rounded-lg opacity-80"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="African landscape" 
                  className="h-full w-full object-cover rounded-lg mix-blend-overlay"
                />
                <blockquote className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="italic text-white/90 mb-2 text-sm md:text-base">
                    "The Baobab Grid represents Africa's opportunity to lead in sustainable technology, not follow."
                  </p>
                  <footer className="text-white/80 text-sm">
                    — Dr. Amara Nwankwo, Tech Entrepreneur
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
