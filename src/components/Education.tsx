import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and engineering
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-primary"></div>
            
            <div className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg glow-soft"></div>
              
              <div className="bg-gradient-card p-8 rounded-2xl border border-tech-border hover:border-primary/50 transition-all duration-300 hover:glow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Technology (CSE)</h3>
                    <p className="text-xl text-primary font-semibold mb-4">Sanskar College of Engineering</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>June 2020 - August 2024</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Computer Science & Engineering</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Core Subjects</h4>
                        <div className="space-y-2">
                          {[
                            "Data Structures & Algorithms",
                            "Object-Oriented Programming",
                            "Database Management Systems",
                            "Software Engineering",
                            "Web Development"
                          ].map((subject) => (
                            <div key={subject} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Key Achievements</h4>
                        <div className="space-y-2">
                          {[
                            "Strong foundation in CS fundamentals",
                            "Hands-on project experience",
                            "Modern web technologies focus",
                            "Industry-relevant curriculum",
                            "Team collaboration skills"
                          ].map((achievement) => (
                            <div key={achievement} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-tech-bg rounded-xl border border-tech-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <h5 className="font-semibold text-primary">Recent Graduate</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fresh perspective with up-to-date knowledge of modern technologies and industry best practices.
                    Ready to contribute innovative solutions and grow with challenging opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;