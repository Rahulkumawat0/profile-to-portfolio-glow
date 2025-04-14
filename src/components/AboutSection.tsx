
import { Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-6">
            <p className="text-gray-300">
              Hello! I'm John, a passionate software developer with a keen interest in creating
              meaningful digital experiences. My journey in tech began in 2016 when I started
              tinkering with HTML and CSS to make custom Tumblr themes — turns out, that early
              interest would spark my path into software development.
            </p>
            <p className="text-gray-300">
              Since then, I've had the privilege of working at a start-up, a large corporation,
              and as a freelancer. My focus is building accessible, inclusive products and digital
              experiences for a variety of clients.
            </p>
            <p className="text-gray-300">
              I'm a lifelong learner who constantly looks to improve my craft. When I'm not at the
              computer, I'm usually rock climbing, reading, or exploring new coffee shops in the city.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Connect with me:</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <Button variant="ghost" className="text-gray-300 hover:text-portfolio-purple group flex items-center gap-2 p-0">
                  <FileText size={24} />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-80 w-80 mx-auto">
              <div className="absolute inset-0 rounded-lg border-2 border-portfolio-purple animate-glow-pulse"></div>
              <div className="absolute inset-0 bg-portfolio-dark rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="John Doe" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
