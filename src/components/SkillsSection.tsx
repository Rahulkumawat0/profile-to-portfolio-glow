
import { Code, Database, Layout, Server, ChartBar, Brain, Zap, Globe, GitBranch, PenTool } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const SkillCard = ({ title, skills, icon, color }: SkillCardProps) => {
  return (
    <div className="group enhanced-glass-effect p-6 rounded-2xl skill-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/10">
      <div className={`${color} mb-4 p-4 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-portfolio-light-purple transition-colors">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-3 group-hover:text-white transition-colors">
            <span className="w-2 h-2 bg-gradient-to-r from-portfolio-purple to-portfolio-light-purple rounded-full animate-pulse-soft"></span>
            <span className="text-sm font-medium">{skill}</span>
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-purple/5 to-portfolio-light-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Code size={32} className="text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      skills: ["DSA", "OOP", "RDBMS", "API Integration", "Troubleshooting", "Testing"]
    },
    {
      title: "Programming Languages",
      icon: <Server size={32} className="text-white" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      skills: ["Python", "SQL", "C/C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: <Layout size={32} className="text-white" />,
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      skills: ["HTML5", "CSS3", "React", "Bootstrap", "Flask", "Streamlit", "WordPress"]
    },
    {
      title: "Data Science",
      icon: <ChartBar size={32} className="text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization"]
    },
    {
      title: "AI Tools & Development",
      icon: <Zap size={32} className="text-white" />,
      color: "bg-gradient-to-br from-yellow-500 to-amber-500",
      skills: ["GitHub Copilot", "ChatGPT", "Lovable Editor", "Perplexity.ai", "AutoML", "Prompt Engineering"]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={32} className="text-white" />,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      skills: ["Classification", "Regression", "Clustering", "NLP", "Feature Engineering", "Model Optimization"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Database size={32} className="text-white" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
      skills: ["AWS", "Azure", "GCP", "Git", "GitHub", "GitLab", "MySQL", "OracleDB"]
    },
    {
      title: "Soft Skills",
      icon: <PenTool size={32} className="text-white" />,
      color: "bg-gradient-to-br from-rose-500 to-pink-500",
      skills: ["Team Leadership", "Mentoring", "Problem Solving", "Technical Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5 -z-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-portfolio-purple/15 to-transparent -z-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/2 right-0 w-1/3 h-1/2 bg-gradient-radial from-portfolio-light-purple/10 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-portfolio-light-purple to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through academic excellence, professional experience, and modern AI-enhanced development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-light-purple mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <SkillCard 
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
