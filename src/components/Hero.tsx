
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current && contentRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 700, 0);
        const scale = 1 + scrollY * 0.0003;
        const translateY = scrollY * 0.3;
        
        backgroundRef.current.style.opacity = opacity.toString();
        backgroundRef.current.style.transform = `scale(${scale})`;
        contentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div 
        ref={backgroundRef} 
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-baobab-sand/10 via-transparent to-background"></div>
        
        {/* Tree silhouette */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-baobab-green/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-baobab-sky/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-baobab-sand/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="container max-w-5xl mx-auto px-6 pt-20 pb-12 relative z-10"
      >
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 text-sm font-medium text-baobab-green bg-baobab-green/10 rounded-full mb-4 animate-fade-in">
            The Future Rooted in Nature
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-baobab-midnight to-baobab-green bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Technology Grown <br className="hidden md:block" />from the Earth
          </h1>
          
          <p className="text-lg md:text-xl text-baobab-midnight/80 dark:text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A self-sustaining tech ecosystem that powers communities, protects nature, and redefines Africa's future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#about" 
              className="bg-baobab-green hover:bg-baobab-green/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover-lift"
            >
              Explore the Vision
            </a>
            <a 
              href="#get-involved" 
              className="bg-white dark:bg-white/10 hover:bg-baobab-sand/20 text-baobab-midnight dark:text-white px-8 py-3 rounded-lg font-medium shadow hover:shadow-md transition-all border border-baobab-sand/30 hover-lift"
            >
              Get Involved
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-baobab-midnight/60 dark:text-white/60 hover:text-baobab-green dark:hover:text-baobab-green transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
