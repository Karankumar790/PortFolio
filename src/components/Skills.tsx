import { Code, Database, GitBranch, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Redux", "Material UI", "DaisyUI", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Code className="w-6 h-6" />,
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["GitHub", "Git"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card p-6 rounded-2xl border border-tech-border hover:border-primary/50 transition-all duration-300 hover:glow-soft group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-tech-bg border border-tech-border rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold">JS</div>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">TS</div>
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold text-white">R</div>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white">N</div>
            </div>
            <span className="text-muted-foreground">Constantly learning and evolving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;