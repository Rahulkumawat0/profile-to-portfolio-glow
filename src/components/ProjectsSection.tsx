
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  reverse?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  reverse = false
}: ProjectCardProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-20`}>
      {/* Project Image */}
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute inset-0 bg-portfolio-purple/20 group-hover:bg-transparent transition-all duration-300 rounded-lg"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
      
      {/* Project Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <div className="p-6 bg-white/5 rounded-lg mb-4 shadow-lg">
          <p className="text-gray-300">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-portfolio-purple transition-colors"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
          
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-portfolio-purple transition-colors"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing. The application was built with a modern tech stack and focuses on performance and user experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A comprehensive task management application designed to help teams collaborate efficiently. Features include real-time updates, task assignment, due dates, and progress tracking.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Material UI", "Context API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations around the world. The app includes interactive maps, temperature graphs, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Mapbox"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-dark/70">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button
            className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
