
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-baobab-green/5 px-6">
      <div className="text-center max-w-lg animate-fade-in">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-baobab-green to-baobab-leaf rounded-md rotate-45 transform origin-center"></div>
          <div className="absolute inset-[4px] bg-white dark:bg-baobab-midnight/80 rounded-md rotate-45"></div>
          <div className="absolute inset-0 flex items-center justify-center text-baobab-green font-display font-bold text-2xl">404</div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-baobab-midnight dark:text-white">Page Not Found</h1>
        
        <p className="text-lg text-baobab-midnight/70 dark:text-white/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center bg-baobab-green hover:bg-baobab-green/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover-lift"
        >
          <ArrowLeft size={18} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
