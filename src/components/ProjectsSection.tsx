
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
  period: string;
  results?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  reverse = false,
  period,
  results = []
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
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="text-sm text-portfolio-purple">{period}</span>
        </div>
        <div className="p-6 bg-white/5 rounded-lg mb-4 shadow-lg">
          <p className="text-gray-300">{description}</p>
          
          {results.length > 0 && (
            <div className="mt-4 border-t border-portfolio-purple/20 pt-4">
              <h4 className="text-portfolio-purple font-semibold mb-2">Quantifiable Results:</h4>
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-portfolio-purple mt-1">▹</span>
                    <p>{result}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
      title: "Disease Classification System",
      description: "Developed a high-accuracy system for early detection of heart attack, breast cancer, & diabetes using advanced machine learning algorithms and data preprocessing techniques. Leveraged AI tools to optimize feature selection and model hyperparameters.",
      image: "https://images.unsplash.com/photo-1576671081803-5dcb9836dc61?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Streamlit", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Github Copilot"],
      githubLink: "https://github.com/rahul-kumawat-8780",
      liveLink: undefined,
      period: "Oct 2022 - Dec 2022",
      results: [
        "Achieved 94% classification accuracy for heart disease prediction, 10% higher than baseline models",
        "Reduced feature dimensionality by 40% while maintaining model performance",
        "Completed development 30% faster by leveraging AI-assisted coding tools"
      ]
    },
    {
      title: "Movie Recommendation System",
      description: "Built a content-based movie recommendation system that analyzes user preferences and viewing history to suggest personalized movie recommendations, boosting engagement and user satisfaction.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Streamlit", "Machine Learning", "NLP", "Content-Based Filtering", "ChatGPT"],
      githubLink: "https://github.com/rahul-kumawat-8780",
      liveLink: undefined,
      period: "Jul 2022 - Aug 2022",
      results: [
        "Implemented text vectorization techniques that improved recommendation relevance by 35%",
        "Optimized algorithm performance to handle 100,000+ movie database with sub-second response time",
        "Used AI tools to generate and refine complex NLP preprocessing functions"
      ]
    },
    {
      title: "E-commerce Optimization Project",
      description: "Enhanced site design, performance, and functionality for an e-commerce platform, resulting in significant improvements in load times and increased user engagement through technical optimizations.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "Python", "API Integration", "Performance Optimization", "AI Tools"],
      githubLink: undefined,
      liveLink: undefined,
      period: "Mar 2023 - Present",
      results: [
        "Reduced page load times by 40% through code optimization and asset management",
        "Increased conversion rates by 15% following UI/UX improvements",
        "Resolved 95% of API integration issues within 24 hours of discovery",
        "Mentored 3 junior developers, reducing their error rates by 15%"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-dark/70">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-3xl font-bold text-center mb-2">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">A showcase of my technical skills, problem-solving abilities, and quantifiable results</p>
        
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
              period={project.period}
              results={project.results}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
