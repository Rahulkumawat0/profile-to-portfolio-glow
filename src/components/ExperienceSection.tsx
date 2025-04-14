
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "CommerceV3 (A subsidiary of Basis Vectors)",
    position: "Associate Software Engineer",
    period: "March 2023 - Present",
    description: [
      "Enhanced site design, performance, and functionality, resulting in a 40% improvement in load times and user engagement",
      "Led the integration of third-party APIs, resolving 95% of issues within the first 24 hours",
      "Trained junior team members on best practices, leading to a 15% reduction in common errors and fostering a culture of innovation",
      "Optimized e-commerce platforms through data-driven decision making and technical expertise"
    ],
    technologies: ["JavaScript", "Python", "APIs", "Web Optimization", "Team Leadership"]
  }
];

const education = [
  {
    institution: "Manipal University, Jaipur",
    degree: "MBA in Analytics & Data Science",
    period: "January 2025 - January 2027",
    description: [
      "Mode of Delivery: Online",
      "Coursework: Machine Learning, Business Analytics, Data Visualization, and Strategic Management"
    ]
  },
  {
    institution: "Kurukshetra University, Kurukshetra",
    degree: "B.Tech in Computer Science & Engineering",
    period: "August 2019 - June 2023",
    description: [
      "CGPA: 8.96/10",
      "Coursework: Data Structures, Algorithms, Database Management, Operating Systems, & Software Engineering"
    ]
  }
];

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "Coursera",
    period: ""
  },
  {
    title: "Python for Data Science, AI and Development",
    issuer: "Coursera",
    period: ""
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
          <div className="flex space-x-4">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
