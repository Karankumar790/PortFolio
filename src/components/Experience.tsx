import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Foxboro Instrument Company",
    position: "Software Engineer",
    duration: "Jan 2024 - Present",
    location: "India",
    achievements: [
      "Designed and developed responsive, high-performance user interfaces for a real-time monitoring application, enhancing usability and accessibility for ONGC's critical operations.",
      "Integrated secure and efficient RESTful APIs to enable seamless data flow between front-end components and back-end systems, improving accuracy and performance.",
      "Implemented state management solutions and component-driven architecture using React and Angular, ensuring a scalable and maintainable codebase.",
      "Optimized front-end performance through efficient rendering techniques, lazy loading, and code-splitting, significantly reducing load times and improving user experience.",
      "Ensured cross-browser compatibility and mobile responsiveness, providing a consistent and intuitive UI across various devices and platforms."
    ]
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in building impactful software solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>
            
            <div className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg glow-soft"></div>
              
              <div className="bg-gradient-card p-8 rounded-2xl border border-tech-border hover:border-primary/50 transition-all duration-300 hover:glow-soft">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{experience.position}</h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="text-lg font-semibold">{experience.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "Angular", "RESTful APIs", "State Management", "Performance Optimization", "Responsive Design"].map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;