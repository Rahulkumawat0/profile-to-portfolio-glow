
import { Code, Database, Layout, Server } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-portfolio-purple/20 skill-card transition-all duration-300">
      <div className="text-portfolio-purple mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-portfolio-purple rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={28} />,
      skills: ["HTML & CSS", "JavaScript", "React.js", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server size={28} />,
      skills: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database size={28} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"]
    },
    {
      title: "Other Skills",
      icon: <Code size={28} />,
      skills: ["Git & GitHub", "Docker", "AWS", "CI/CD", "Jest", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-dark/70">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
