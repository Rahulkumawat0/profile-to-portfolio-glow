
import { Code, Database, Layout, Server, ChartBar, Brain, Zap, Globe, GitBranch, PenTool } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  gradient: string;
  accent: string;
}

const SkillCard = ({ title, skills, icon, gradient, accent }: SkillCardProps) => {
  return (
    <div className="group relative enhanced-glass-effect p-6 rounded-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 border border-white/20 overflow-hidden">
      {/* Animated background overlay */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
      
      {/* Icon container with enhanced styling */}
      <div className={`${gradient} mb-6 p-4 rounded-xl inline-block group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative`}>
        <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">{icon}</div>
      </div>
      
      <h3 className={`text-xl font-bold mb-5 text-white group-hover:${accent} transition-colors duration-300 font-heading`}>
        {title}
      </h3>
      
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="text-gray-300 flex items-center gap-3 group-hover:text-white transition-all duration-300"
            style={{transitionDelay: `${index * 50}ms`}}
          >
            <span className={`w-2 h-2 ${gradient} rounded-full animate-pulse shadow-sm`}></span>
            <span className="text-sm font-medium tracking-wide">{skill}</span>
          </li>
        ))}
      </ul>
      
      {/* Enhanced hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Code size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
      accent: "text-emerald-400",
      skills: ["DSA", "OOP", "RDBMS", "API Integration", "Troubleshooting", "Testing"]
    },
    {
      title: "Programming Languages",
      icon: <Server size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500",
      accent: "text-violet-400",
      skills: ["Python", "SQL", "C/C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: <Layout size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500",
      accent: "text-orange-400",
      skills: ["HTML5", "CSS3", "React", "Bootstrap", "Flask", "Streamlit", "WordPress"]
    },
    {
      title: "Data Science",
      icon: <ChartBar size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500",
      accent: "text-pink-400",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization"]
    },
    {
      title: "AI Tools & Development",
      icon: <Zap size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
      accent: "text-yellow-400",
      skills: ["GitHub Copilot", "ChatGPT", "Lovable Editor", "Perplexity.ai", "AutoML", "Prompt Engineering"]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500",
      accent: "text-indigo-400",
      skills: ["Classification", "Regression", "Clustering", "NLP", "Feature Engineering", "Model Optimization"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Database size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500",
      accent: "text-cyan-400",
      skills: ["AWS", "Azure", "GCP", "Git", "GitHub", "GitLab", "MySQL", "OracleDB"]
    },
    {
      title: "Soft Skills",
      icon: <PenTool size={32} className="text-white drop-shadow-lg" />,
      gradient: "bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500",
      accent: "text-rose-400",
      skills: ["Team Leadership", "Mentoring", "Problem Solving", "Technical Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 -z-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-10 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-3xl animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-heading">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            A comprehensive toolkit built through academic excellence, professional experience, and cutting-edge AI-enhanced development
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-full shadow-lg"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <SkillCard 
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                gradient={category.gradient}
                accent={category.accent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
