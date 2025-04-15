
import { Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-3xl font-bold text-center mb-2">About Me</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Get to know me beyond the resume</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-6">
            <p className="text-gray-300">
              Hello! I'm Rahul Kumawat, a motivated Software Engineer with a strong foundation in Computer Science & Engineering.
              I'm passionate about Web Development, Data Science, and Machine Learning. My journey in tech began during my
              B.Tech studies where I developed a solid understanding of core computer science concepts.
            </p>
            <p className="text-gray-300">
              Currently working as an Associate Software Engineer, I have experience in enhancing e-commerce site design,
              performance, and functionality. I've led API integrations and mentored junior team members, consistently 
              driving improvements in load times and user engagement.
            </p>
            <p className="text-gray-300">
              I am skilled in leveraging technical expertise to develop innovative solutions and am eager to contribute 
              to dynamic tech environments. Continuous learning and skill improvement are key priorities in my professional journey.
            </p>
            
            <div className="p-4 bg-white/5 rounded-lg border border-portfolio-purple/20">
              <h3 className="text-xl font-semibold mb-2 text-portfolio-purple">AI-Enhanced Development</h3>
              <p className="text-gray-300">
                I leverage modern AI tools like GitHub Copilot, ChatGPT, and Lovable Editor to accelerate development workflows, 
                streamline problem-solving, and produce cleaner, more maintainable code. This approach allows me to focus on 
                complex logic and design challenges while improving productivity by up to 40%.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Connect with me:</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/rahul-kumawat-8780" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rahul-kumawat-8780/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="/lovable-uploads/4cfda77c-c4c1-4f72-ac3b-f094a00199c1.png" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple group flex items-center gap-2 p-0 transition-colors"
                >
                  <FileText size={24} />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-80 w-80 mx-auto">
              <div className="absolute inset-0 rounded-lg border-2 border-portfolio-purple animate-glow-pulse"></div>
              <div className="absolute inset-0 bg-portfolio-dark rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/fcb79b6c-def6-457f-8d55-070d0256a5d0.png" 
                  alt="Rahul Kumawat" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-portfolio-purple font-medium">📍 India</p>
              <p className="text-gray-300">
                <a 
                  href="mailto:rahulkumawat200901@gmail.com"
                  className="hover:text-portfolio-purple transition-colors"
                >
                  rahulkumawat200901@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                <a 
                  href="tel:+918780948614"
                  className="hover:text-portfolio-purple transition-colors"
                >
                  +91 8780948614
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
