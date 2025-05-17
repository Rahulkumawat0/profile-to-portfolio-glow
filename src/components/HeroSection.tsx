
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
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-20 -z-10"></div>
      <div className="absolute top-0 right-0 w-2/3 h-screen bg-gradient-radial from-portfolio-purple/20 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-portfolio-light-purple/10 to-transparent -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          <p className="text-portfolio-purple font-medium animate-fade-in" style={{animationDelay: '0.2s'}}>Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading animate-fade-in" style={{animationDelay: '0.4s'}}>
            Rahul Kumawat
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 animate-fade-in" style={{animationDelay: '0.6s'}}>
            I build innovative tech solutions.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mt-4 animate-fade-in text-balance" style={{animationDelay: '0.8s'}}>
            I'm a software engineer passionate about Web Development, Data Science, and Machine Learning. 
            Currently, I'm focused on building optimized e-commerce solutions 
            at CommerceV3.
          </p>
          
          <div className="glass-effect p-5 rounded-xl flex items-start gap-3 max-w-xl animate-fade-in" style={{animationDelay: '1s'}}>
            <Zap size={24} className="text-portfolio-light-purple shrink-0 mt-1" />
            <p className="text-gray-300">
              I combine traditional engineering with AI-enhanced development to deliver efficient, 
              high-quality solutions while significantly reducing development time.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white transition-all duration-300 shadow-lg hover:shadow-portfolio-purple/50"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 transition-all duration-300"
            >
              See My Work
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-portfolio-purple animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} />
      </button>
    </section>
  );
};

export default HeroSection;
