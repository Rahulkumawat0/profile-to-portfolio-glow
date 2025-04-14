
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    period: "January 2021 - Present",
    description: [
      "Led the development of a new customer-facing application, resulting in a 35% increase in user engagement",
      "Architected and implemented a component library that improved development speed by 40%",
      "Mentored junior developers and conducted code reviews to ensure high-quality standards",
      "Collaborated with design and product teams to create intuitive and accessible user interfaces"
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Jest"]
  },
  {
    company: "Digital Solutions Ltd",
    position: "Full Stack Developer",
    period: "March 2018 - December 2020",
    description: [
      "Developed and maintained multiple client projects using modern JavaScript frameworks",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Built RESTful APIs using Node.js and Express to support frontend applications",
      "Optimized database queries that improved application performance by 25%"
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "SCSS"]
  },
  {
    company: "Web Creations Co.",
    position: "Junior Web Developer",
    period: "June 2016 - February 2018",
    description: [
      "Assisted in the development of websites for small to medium-sized businesses",
      "Created responsive layouts using HTML, CSS, and JavaScript",
      "Collaborated with senior developers to implement new features and fix bugs",
      "Participated in weekly code reviews and team meetings"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"]
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-10 flex flex-col md:flex-row gap-8">
          {/* Tab buttons on larger screens */}
          <div className="hidden md:flex flex-col space-y-1 border-l border-gray-700 min-w-[200px]">
            {experiences.map((exp, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`justify-start pl-4 rounded-none border-l-2 text-left ${
                  activeTab === index 
                    ? "text-portfolio-purple border-l-portfolio-purple" 
                    : "border-l-transparent text-gray-400 hover:text-white hover:border-l-gray-400"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </Button>
            ))}
          </div>
          
          {/* Dropdown for mobile */}
          <div className="md:hidden mb-6">
            <select
              className="w-full p-2 bg-white/5 border border-gray-700 rounded text-white"
              value={activeTab}
              onChange={(e) => setActiveTab(Number(e.target.value))}
            >
              {experiences.map((exp, index) => (
                <option key={index} value={index}>
                  {exp.company}
                </option>
              ))}
            </select>
          </div>
          
          {/* Tab content */}
          <div className="flex-1 animate-fade-in">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                {experiences[activeTab].position}{" "}
                <span className="text-portfolio-purple">@ {experiences[activeTab].company}</span>
              </h3>
              <div className="flex items-center text-gray-400 mt-1">
                <Calendar size={16} className="mr-2" />
                <p>{experiences[activeTab].period}</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-portfolio-purple mr-2">▹</span>
                  <p className="text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {experiences[activeTab].technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-portfolio-purple/10 text-portfolio-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
