
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0 flex items-center gap-2">
            <span>© {year} Rahul Kumawat.</span>
            <span className="hidden md:inline mx-2">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={16} className="text-portfolio-purple animate-pulse" /> in India
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/rahul-kumawat-8780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-purple transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-kumawat-8780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-purple transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:rahulkumawat200901@gmail.com" 
              className="text-gray-400 hover:text-portfolio-purple transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="mb-1">Built with React, TypeScript, and Tailwind CSS</p>
          <p className="text-xs opacity-70">Thanks for visiting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
