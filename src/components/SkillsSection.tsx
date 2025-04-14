
import { Code, Database, Layout, Server, ChartBar, Brain, Zap, Globe, GitBranch, PenTool } from 'lucide-react';

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
      title: "Core Engineering",
      icon: <Code size={28} />,
      skills: ["DSA", "OOP", "RDBMS", "API Integration", "Troubleshooting", "Testing"]
    },
    {
      title: "Programming Languages",
      icon: <Server size={28} />,
      skills: ["Python", "SQL", "C/C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: <Layout size={28} />,
      skills: ["HTML5", "CSS3", "React", "Bootstrap", "Flask", "Streamlit", "WordPress"]
    },
    {
      title: "Data Science",
      icon: <ChartBar size={28} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization"]
    },
    {
      title: "AI Tools & Development",
      icon: <Zap size={28} />,
      skills: ["GitHub Copilot", "ChatGPT", "Lovable Editor", "Perplexity.ai", "AutoML", "Prompt Engineering"]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={28} />,
      skills: ["Classification", "Regression", "Clustering", "NLP", "Feature Engineering", "Model Optimization"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Database size={28} />,
      skills: ["AWS", "Azure", "GCP", "Git", "GitHub", "GitLab", "MySQL", "OracleDB"]
    },
    {
      title: "Soft Skills",
      icon: <PenTool size={28} />,
      skills: ["Team Leadership", "Mentoring", "Problem Solving", "Technical Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-dark/70">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-3xl font-bold text-center mb-2">Skills & Expertise</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">A comprehensive toolkit built through academic excellence, professional experience, and modern AI-enhanced development</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
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
