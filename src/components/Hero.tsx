import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-bg border border-tech-border rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for work</span>
          </div>
        </div>
        
        <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Karan Kumar</span>
          </h1>
        </div>
        
        <div className="fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-2xl md:text-3xl text-muted-foreground mb-4 typing-animation">
            Full Stack Developer
          </div>
        </div>
        
        <div className="fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about creating responsive web applications with React, Node.js, and modern technologies. 
            1+ years of experience in building scalable solutions.
          </p>
        </div>
        
        <div className="fade-in-up flex items-center justify-center gap-2 mb-8" style={{animationDelay: '1s'}}>
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">B-Block 137, Dishad Colony, East Delhi</span>
        </div>
        
        <div className="fade-in-up flex flex-wrap justify-center gap-4 mb-8" style={{animationDelay: '1.2s'}}>
          <Button variant="outline" size="lg" className="glow-soft hover:glow-effect transition-all duration-300">
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
          <Button variant="outline" size="lg" className="glow-soft hover:glow-effect transition-all duration-300">
            <Phone className="w-4 h-4 mr-2" />
            +91 9708112055​1
          </Button>
          <Button variant="outline" size="lg" className="glow-soft hover:glow-effect transition-all duration-300">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
        
        <div className="fade-in-up flex justify-center gap-6" style={{animationDelay: '1.4s'}}>
          <a 
            href="https://github.com/karankumar790" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-tech-bg border border-tech-border hover:border-primary hover:glow-soft transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/karan-kumar-9ba34b27b/"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-tech-bg border border-tech-border hover:border-primary hover:glow-soft transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;