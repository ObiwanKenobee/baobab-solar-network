
import React, { useEffect, useRef } from 'react';
import { Network, Database, Wifi, Zap, ShieldCheck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-baobab-leaf/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-baobab-sand/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-baobab-green bg-baobab-green/10 rounded-full mb-4 animate-on-scroll opacity-0">
            The Baobab Ecosystem
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0">
            How the <span className="text-baobab-green">Baobab Grid</span> Works
          </h2>
          
          <p className="text-lg text-baobab-midnight/80 dark:text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            A self-sustaining ecosystem that harnesses nature's power to provide technology 
            solutions while preserving Africa's natural heritage.
          </p>
        </div>
        
        {/* Interactive Flow Diagram */}
        <div ref={stepsRef} className="relative mb-20 opacity-0 animate-growth">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-baobab-green/40 via-baobab-leaf/40 to-baobab-sand/40 transform -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            <div className="relative">
              <div className="bg-white dark:bg-baobab-midnight/40 rounded-xl p-6 shadow-lg border border-baobab-sand/20 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-baobab-green/10 text-baobab-green rounded-full mb-6 mx-auto">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-center text-baobab-midnight dark:text-white">Energy Generation</h3>
                <p className="text-baobab-midnight/70 dark:text-white/70 text-center">
                  Solar panels, bio-energy systems, and kinetic collectors harvest energy from nature.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-baobab-green/10 text-baobab-green px-2 py-1 rounded-full">Solar</span>
                  <span className="text-xs bg-baobab-green/10 text-baobab-green px-2 py-1 rounded-full">Bio-energy</span>
                  <span className="text-xs bg-baobab-green/10 text-baobab-green px-2 py-1 rounded-full">Kinetic</span>
                </div>
              </div>
              
              {/* Connection marker */}
              <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-baobab-midnight border-4 border-baobab-green z-20 items-center justify-center">
                <span className="text-baobab-green font-bold">1</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-baobab-midnight/40 rounded-xl p-6 shadow-lg border border-baobab-sand/20 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-baobab-leaf/10 text-baobab-leaf rounded-full mb-6 mx-auto">
                  <Network size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-center text-baobab-midnight dark:text-white">Digital Infrastructure</h3>
                <p className="text-baobab-midnight/70 dark:text-white/70 text-center">
                  Power runs decentralized tech hubs providing internet, digital payments, and educational resources.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-baobab-leaf/10 text-baobab-leaf px-2 py-1 rounded-full">Internet</span>
                  <span className="text-xs bg-baobab-leaf/10 text-baobab-leaf px-2 py-1 rounded-full">Digital Payments</span>
                  <span className="text-xs bg-baobab-leaf/10 text-baobab-leaf px-2 py-1 rounded-full">Education</span>
                </div>
              </div>
              
              {/* Connection marker */}
              <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-baobab-midnight border-4 border-baobab-leaf z-20 items-center justify-center">
                <span className="text-baobab-leaf font-bold">2</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-baobab-midnight/40 rounded-xl p-6 shadow-lg border border-baobab-sand/20 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-baobab-sand/10 text-baobab-sand rounded-full mb-6 mx-auto">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-center text-baobab-midnight dark:text-white">Conservation & Community</h3>
                <p className="text-baobab-midnight/70 dark:text-white/70 text-center">
                  Technology empowers wildlife tracking, conservation efforts, and sustainable community development.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-baobab-sand/10 text-baobab-sand px-2 py-1 rounded-full">Wildlife Tracking</span>
                  <span className="text-xs bg-baobab-sand/10 text-baobab-sand px-2 py-1 rounded-full">Eco-tourism</span>
                  <span className="text-xs bg-baobab-sand/10 text-baobab-sand px-2 py-1 rounded-full">Economic Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Visualization */}
        <div className="bg-white dark:bg-baobab-midnight/30 rounded-xl overflow-hidden shadow-xl border border-baobab-sand/20">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 md:p-10 order-2 md:order-1">
              <h3 className="text-2xl font-display font-semibold mb-4 text-baobab-midnight dark:text-white">Interactive Baobab Grid</h3>
              <p className="text-baobab-midnight/80 dark:text-white/80 mb-6">
                Each Baobab Grid hub serves as a nexus of technology, nature, and community, creating a self-reinforcing ecosystem of sustainability.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-baobab-green/10 rounded-full text-baobab-green">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-baobab-midnight dark:text-white text-sm">Energy Pods</h4>
                    <p className="text-xs text-baobab-midnight/70 dark:text-white/70">Multiple renewable sources</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-baobab-leaf/10 rounded-full text-baobab-leaf">
                    <Wifi size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-baobab-midnight dark:text-white text-sm">Digital Hub</h4>
                    <p className="text-xs text-baobab-midnight/70 dark:text-white/70">Internet & services</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-baobab-sand/10 rounded-full text-baobab-sand">
                    <Database size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-baobab-midnight dark:text-white text-sm">Data Processing</h4>
                    <p className="text-xs text-baobab-midnight/70 dark:text-white/70">Wildlife & environment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-baobab-clay/10 rounded-full text-baobab-clay">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-baobab-midnight dark:text-white text-sm">Community</h4>
                    <p className="text-xs text-baobab-midnight/70 dark:text-white/70">Education & economy</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-baobab-green/5 border border-baobab-green/20 rounded-lg">
                <h4 className="font-medium text-baobab-green mb-2 text-sm">Sustainable Impact</h4>
                <p className="text-xs text-baobab-midnight/80 dark:text-white/80">
                  Each hub creates a virtuous cycle: clean energy powers technology that supports conservation, which preserves 
                  natural resources that provide energy, all while empowering local communities.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 order-1 md:order-2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-baobab-green/90 to-baobab-leaf/90"></div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Baobab tree in African landscape" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/40 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 rounded-full flex items-center justify-center">
                      <div className="text-white font-display font-bold text-xl">BG</div>
                    </div>
                  </div>
                  
                  {/* Orbital elements */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow"></div>
                  
                  {/* Energy node */}
                  <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-baobab-green/70 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  
                  {/* Digital node */}
                  <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 w-10 h-10 bg-baobab-leaf/70 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Network size={20} />
                  </div>
                  
                  {/* Community node */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-baobab-clay/70 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Users size={20} />
                  </div>
                  
                  {/* Conservation node */}
                  <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-baobab-sand/70 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
