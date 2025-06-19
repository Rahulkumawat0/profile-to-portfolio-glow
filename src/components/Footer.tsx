
import { Github, Linkedin, Mail, Heart, Sparkles, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative py-20 border-t border-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-violet-500/20 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-radial from-emerald-500/15 to-transparent blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-violet-500/15 to-transparent blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-gray-300 mb-8 md:mb-0 flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-medium">© {year}</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Rahul Kumawat
              </span>
            </div>
            <span className="hidden md:inline text-cyan-400 text-xl">•</span>
            <div className="flex items-center gap-3">
              <span className="text-gray-300">Crafted with</span>
              <Heart size={20} className="text-red-400 animate-pulse" />
              <span className="text-gray-300">and</span>
              <Coffee size={20} className="text-amber-400 animate-bounce-gentle" />
              <span className="text-gray-300">in India</span>
              <Sparkles size={20} className="text-cyan-400 animate-pulse-soft" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/rahul-kumawat-8780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative text-gray-300 hover:text-white transition-all duration-500 p-4 rounded-full hover:bg-gradient-to-br hover:from-gray-700/20 hover:to-gray-600/20 hover:scale-110 hover:rotate-3"
              aria-label="GitHub"
            >
              <Github size={24} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 opacity-0 group-hover:opacity-30 transition-opacity blur-md"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-kumawat-8780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative text-gray-300 hover:text-white transition-all duration-500 p-4 rounded-full hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-blue-400/20 hover:scale-110 hover:rotate-3"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity blur-md"></div>
            </a>
            <a 
              href="mailto:rahulkumawat200901@gmail.com" 
              className="group relative text-gray-300 hover:text-white transition-all duration-500 p-4 rounded-full hover:bg-gradient-to-br hover:from-red-600/20 hover:to-red-400/20 hover:scale-110 hover:rotate-3"
              aria-label="Email"
            >
              <Mail size={24} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-30 transition-opacity blur-md"></div>
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="enhanced-glass-effect p-8 rounded-3xl max-w-4xl mx-auto backdrop-blur-xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code size={28} className="text-emerald-400" />
              <p className="text-gray-200 text-2xl font-bold">Built with Modern Technologies</p>
              <Code size={28} className="text-violet-400" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                React
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-200 border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                TypeScript
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 text-cyan-200 border border-cyan-400/30 hover:scale-105 transition-transform duration-300">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-600/30 text-violet-200 border border-violet-400/30 hover:scale-105 transition-transform duration-300">
                Lovable AI
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Sparkles size={18} className="text-emerald-400 animate-pulse" />
              <p className="text-lg font-medium">Thanks for exploring my digital journey</p>
              <Sparkles size={18} className="text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
