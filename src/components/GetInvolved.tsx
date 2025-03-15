
import React, { useEffect, useRef } from 'react';
import { Flag, Users, Wallet, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  color: string;
  index: number;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, title, description, ctaText, ctaUrl, color, index }) => {
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
      className="bg-white dark:bg-white/5 rounded-xl p-6 border border-baobab-sand/20 shadow-lg overflow-hidden relative opacity-0 hover-grow"
      style={{ animationDelay: `${0.1 + 0.1 * index}s` }}
    >
      {/* Colored accent */}
      <div className={cn("absolute top-0 left-0 w-full h-1", color)}></div>
      
      <div className="flex items-start space-x-4">
        <div className={cn("flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full", 
          color.replace('bg-', 'bg-') + '/15',
          color.replace('bg-', 'text-')
        )}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-display font-semibold mb-2 text-baobab-midnight dark:text-white">{title}</h3>
          <p className="text-baobab-midnight/70 dark:text-white/70 text-sm mb-4">{description}</p>
          
          <a 
            href={ctaUrl} 
            className={cn(
              "inline-flex items-center text-sm font-medium transition-colors hover:underline",
              color.replace('bg-', 'text-')
            )}
          >
            {ctaText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const GetInvolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your interest! We will be in touch soon.');
    if (formRef.current) formRef.current.reset();
  };

  const actions = [
    {
      icon: <Flag size={24} />,
      title: "For Governments",
      description: "Partner with us to deploy Baobab Grids in rural areas and transform communities.",
      ctaText: "Start a Conversation",
      ctaUrl: "#contact",
      color: "bg-baobab-green"
    },
    {
      icon: <Wallet size={24} />,
      title: "For Investors",
      description: "Fund the future of decentralized, African-owned technology and see real impact.",
      ctaText: "Investment Opportunities",
      ctaUrl: "#contact",
      color: "bg-baobab-sand"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "For Entrepreneurs",
      description: "Bring Baobab Grid to your community and pioneer local technological innovation.",
      ctaText: "Learn How",
      ctaUrl: "#contact",
      color: "bg-baobab-clay"
    },
    {
      icon: <Users size={24} />,
      title: "For Conservationists",
      description: "Join the wildlife tech revolution and protect Africa's natural heritage.",
      ctaText: "Partner With Us",
      ctaUrl: "#contact",
      color: "bg-baobab-leaf"
    }
  ];

  return (
    <section id="get-involved" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-baobab-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-baobab-sand/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-baobab-green bg-baobab-green/10 rounded-full mb-4 animate-on-scroll opacity-0">
            Grow the Grid
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0">
            Join the <span className="text-baobab-green">Movement</span>
          </h2>
          
          <p className="text-lg text-baobab-midnight/80 dark:text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            The Baobab Grid is more than technology—it's a movement to create a sustainable, 
            connected future for Africa that honors its natural heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {actions.map((action, index) => (
            <ActionCard 
              key={action.title}
              {...action}
              index={index}
            />
          ))}
        </div>
        
        <div id="contact" className="bg-gradient-to-br from-baobab-green/90 to-baobab-leaf/90 rounded-xl p-8 md:p-10 shadow-xl text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">Stay Connected</h3>
              <p className="mb-6">
                Sign up to receive updates on the Baobab Grid project, upcoming initiatives, 
                and opportunities to get involved.
              </p>
              
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Regular project updates
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Invitation to exclusive events
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Early access to new initiatives
                </li>
              </ul>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-growth opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/50 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/50 text-white"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-white/90 mb-1">I'm interested in...</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white appearance-none"
                  >
                    <option value="government" className="bg-baobab-midnight text-white">Government Partnership</option>
                    <option value="investor" className="bg-baobab-midnight text-white">Investment Opportunities</option>
                    <option value="entrepreneur" className="bg-baobab-midnight text-white">Local Entrepreneurship</option>
                    <option value="conservation" className="bg-baobab-midnight text-white">Conservation Efforts</option>
                    <option value="other" className="bg-baobab-midnight text-white">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/50 text-white resize-none"
                    placeholder="Tell us more about your interest in Baobab Grid"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-white text-baobab-green font-medium px-4 py-2 rounded-md hover:bg-white/90 transition-colors shadow-lg"
                >
                  Join the Movement
                </button>
              </div>
              
              <p className="text-xs text-white/70 mt-4 text-center">
                By submitting, you agree to receive updates about the Baobab Grid. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
