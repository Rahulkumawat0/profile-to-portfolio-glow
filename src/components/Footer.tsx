
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 border-t border-gradient-to-r from-portfolio-purple/20 via-portfolio-light-purple/20 to-portfolio-purple/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-portfolio-dark via-portfolio-dark/95 to-portfolio-dark"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-portfolio-purple/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-portfolio-light-purple/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">© {year}</span>
              <span className="text-xl font-bold bg-gradient-to-r from-portfolio-purple to-portfolio-light-purple bg-clip-text text-transparent">
                Rahul Kumawat
              </span>
            </div>
            <span className="hidden md:inline text-portfolio-purple">|</span>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart size={18} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Sparkles size={18} className="text-portfolio-light-purple animate-pulse" />
              <span>in India</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/rahul-kumawat-8780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/5 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-kumawat-8780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/5 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
            </a>
            <a 
              href="mailto:rahulkumawat200901@gmail.com" 
              className="group relative text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/5 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
            </a>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="enhanced-glass-effect p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gray-300 mb-2 text-lg font-medium">Built with modern technologies</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/20">
                React
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-300 border border-blue-600/20">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-300 border border-cyan-500/20">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 border border-purple-500/20">
                Lovable AI
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-4 opacity-80">Thanks for visiting my portfolio ✨</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
