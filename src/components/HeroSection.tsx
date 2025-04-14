
import { ArrowDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-portfolio-purple/5 -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          <p className="text-portfolio-purple font-medium">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Rahul Kumawat
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400">
            I build innovative tech solutions.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mt-4">
            I'm a software engineer passionate about Web Development, Data Science, and Machine Learning. 
            Currently, I'm focused on building optimized e-commerce solutions 
            at CommerceV3.
          </p>
          
          <div className="bg-white/5 p-4 rounded-lg border border-portfolio-purple/20 flex items-start gap-3 max-w-xl">
            <Zap size={24} className="text-portfolio-purple mt-1" />
            <p className="text-gray-300">
              I combine traditional engineering with AI-enhanced development to deliver efficient, 
              high-quality solutions while significantly reducing development time.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10"
            >
              See My Work
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-portfolio-purple animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} />
      </button>
    </section>
  );
};

export default HeroSection;
