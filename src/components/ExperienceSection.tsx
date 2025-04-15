
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Zap } from "lucide-react";

const experiences = [
  {
    company: "CommerceV3 (A subsidiary of Basis Vectors)",
    position: "Associate Software Engineer",
    period: "March 2023 - Present",
    description: [
      "Enhanced site design, performance, and functionality, resulting in a 40% improvement in load times and user engagement",
      "Led the integration of third-party APIs, resolving 95% of issues within the first 24 hours",
      "Trained junior team members on best practices, leading to a 15% reduction in common errors and fostering a culture of innovation",
      "Optimized e-commerce platforms through data-driven decision making and technical expertise",
      "Utilized AI-powered development tools to automate repetitive tasks and accelerate project delivery timelines by 25%"
    ],
    technologies: ["JavaScript", "Python", "APIs", "Web Optimization", "Team Leadership", "AI Tools"]
  }
];

const education = [
  {
    institution: "Manipal University, Jaipur",
    degree: "MBA in Analytics & Data Science",
    period: "January 2025 - January 2027",
    description: [
      "Mode of Delivery: Online",
      "Coursework: Machine Learning, Business Analytics, Data Visualization, and Strategic Management",
      "Focus on practical applications of AI and analytics in business contexts"
    ]
  },
  {
    institution: "Kurukshetra University, Kurukshetra",
    degree: "B.Tech in Computer Science & Engineering",
    period: "August 2019 - June 2023",
    description: [
      "CGPA: 8.96/10",
      "Coursework: Data Structures, Algorithms, Database Management, Operating Systems, & Software Engineering",
      "Participated in coding competitions and hackathons, enhancing problem-solving skills"
    ]
  }
];

const certifications = [
  {
    title: "Machine Learning",
    issuer: "Stanford University (Coursera)",
    period: "Jul 2022",
    credential: "Credential ID: RNQZ68SWHM2F"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    period: "Jul 2022",
    credential: "Credential ID: 34UFGRGVFKN9"
  },
  {
    title: "Python Programming: A Concise Introduction",
    issuer: "Wesleyan University (Coursera)",
    period: "Jun 2022",
    credential: "Credential ID: 9E7R4B5LPYDS"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    period: "Jul 2022",
    credential: "Credential ID: 3GC4DMP2HKHD"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    period: "Jun 2022",
    credential: "Credential ID: 8WKV5TAZGHX9"
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM",
    period: "Jul 2022",
    credential: "Credential ID: RNBLV37BKWWE"
  },
  {
    title: "Programming in Python",
    issuer: "Infosys Springboard",
    period: "Apr 2022",
    credential: "Credential ID: 9D94CGBF"
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    period: "Jun 2022",
    credential: "Credential ID: EDWB6XEAGL8P"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    period: "Jun 2022",
    credential: "Credential ID: S9JWXWDP96QD"
  }
];

const aiTools = [
  {
    tool: "GitHub Copilot",
    proficiency: "Advanced",
    description: "Daily use for code generation, refactoring, and documentation. Reduces development time by up to 40%."
  },
  {
    tool: "ChatGPT",
    proficiency: "Advanced",
    description: "Prompt engineering for problem-solving, debugging, and architecture design. Expertise in API integration."
  },
  {
    tool: "Lovable Editor",
    proficiency: "Intermediate",
    description: "Creating responsive web applications with real-time AI assistance. Efficient prototype development."
  },
  {
    tool: "Perplexity AI",
    proficiency: "Intermediate",
    description: "Research and information synthesis for technical documentation and solution exploration."
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-3xl font-bold text-center mb-2">Experience & Education</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">My professional journey and academic background</p>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={activeSection === "experience" ? "default" : "outline"}
              className={activeSection === "experience" ? "bg-portfolio-purple" : "border-portfolio-purple text-portfolio-purple"}
              onClick={() => setActiveSection("experience")}
            >
              Work Experience
            </Button>
            <Button
              variant={activeSection === "education" ? "default" : "outline"}
              className={activeSection === "education" ? "bg-portfolio-purple" : "border-portfolio-purple text-portfolio-purple"}
              onClick={() => setActiveSection("education")}
            >
              Education
            </Button>
            <Button
              variant={activeSection === "certifications" ? "default" : "outline"}
              className={activeSection === "certifications" ? "bg-portfolio-purple" : "border-portfolio-purple text-portfolio-purple"}
              onClick={() => setActiveSection("certifications")}
            >
              Certifications
            </Button>
            <Button
              variant={activeSection === "aitools" ? "default" : "outline"}
              className={activeSection === "aitools" ? "bg-portfolio-purple" : "border-portfolio-purple text-portfolio-purple"}
              onClick={() => setActiveSection("aitools")}
            >
              <Zap size={16} className="mr-2" />
              AI Tools Proficiency
            </Button>
          </div>
        </div>
        
        {activeSection === "experience" && (
          <div className="mt-10 flex flex-col md:flex-row gap-8">
            {/* Tab content */}
            <div className="flex-1 animate-fade-in">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 p-6 bg-white/5 rounded-lg border border-portfolio-purple/20">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {exp.position}{" "}
                      <span className="text-portfolio-purple">@ {exp.company}</span>
                    </h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Calendar size={16} className="mr-2" />
                      <p>{exp.period}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-portfolio-purple mr-2">▹</span>
                        <p className="text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-portfolio-purple/10 text-portfolio-purple"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeSection === "education" && (
          <div className="animate-fade-in">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 p-6 bg-white/5 rounded-lg border border-portfolio-purple/20">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {edu.degree}{" "}
                    <span className="text-portfolio-purple">@ {edu.institution}</span>
                  </h3>
                  <div className="flex items-center text-gray-400 mt-1">
                    <Calendar size={16} className="mr-2" />
                    <p>{edu.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {edu.description.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-portfolio-purple mr-2">▹</span>
                      <p className="text-gray-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {activeSection === "certifications" && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-lg border border-portfolio-purple/20">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-portfolio-purple">Issuer: {cert.issuer}</p>
                {cert.period && <p className="text-gray-400 mt-1">Completed: {cert.period}</p>}
                {cert.credential && <p className="text-gray-400 text-sm mt-2">{cert.credential}</p>}
              </div>
            ))}
          </div>
        )}
        
        {activeSection === "aitools" && (
          <div className="animate-fade-in">
            <div className="mb-6 p-6 bg-white/5 rounded-lg border border-portfolio-purple/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap size={20} className="text-portfolio-purple mr-2" />
                AI-Enhanced Development Approach
              </h3>
              <p className="text-gray-300 mb-4">
                I combine traditional software engineering skills with modern AI tools to accelerate development, 
                increase code quality, and solve complex problems more efficiently. By leveraging these tools responsibly, 
                I can deliver projects faster without compromising on quality or maintainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiTools.map((tool, index) => (
                <div key={index} className="p-6 bg-white/5 rounded-lg border border-portfolio-purple/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">{tool.tool}</h3>
                    <span className="px-3 py-1 text-sm rounded-full bg-portfolio-purple/10 text-portfolio-purple">
                      {tool.proficiency}
                    </span>
                  </div>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
