import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Database, Monitor, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RTMS Frontend",
      description: "Real-time monitoring system frontend with interactive data visualization components for high-pressure operational environments.",
      longDescription: [
        "Developed and optimized interactive data visualization components for real-time monitoring, ensuring seamless and intuitive insights for high-pressure operational environments.",
        "Engineered scalable and efficient UI components using React and Angular, enhancing system responsiveness and accuracy for critical applications.",
        "Implemented intelligent state management strategies with Redux and Context API to improve performance and ensure smooth real-time updates.",
        "Designed and integrated robust error-handling mechanisms on the front end, improving system stability and minimizing user disruptions.",
        "Ensured mobile responsiveness and cross-browser compatibility, delivering a consistent UI across multiple devices and screen sizes."
      ],
      technologies: ["React", "Angular", "Redux", "Data Visualization", "Real-time Updates"],
      link: "https://rtms-frontend-karan.vercel.app/",
      github: "#",
      icon: <Monitor className="w-6 h-6" />,
      teamSize: 10,
      highlights: ["Real-time monitoring", "Data visualization", "Cross-browser compatibility"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with JWT authentication, payment gateway integration, and comprehensive admin panel.",
      longDescription: [
        "Integrated JWT-based authentication system to securely manage user login, registration, and session management.",
        "Implemented Stripe Payment Gateway to enable secure and seamless transactions for product purchases and sales.",
        "Developed an end-to-end e-commerce platform allowing users to buy products, with complete frontend and backend integration.",
        "Built a fully responsive UI using Tailwind CSS, ensuring optimal experience across all devices and screen sizes.",
        "Utilized Redux for efficient state management, enabling smooth, centralized control of UI updates and application data.",
        "Created reusable and modular components using React.js, improving scalability, code readability, and maintenance.",
        "Designed robust error-handling and validation mechanisms on both frontend and backend, enhancing user experience and system stability."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Tailwind CSS"],
      link: "https://project-assignment-frontend-nxuz.vercel.app/",
      github: "#",
      icon: <ShoppingCart className="w-6 h-6" />,
      teamSize: 1,
      highlights: ["Payment Gateway", "Authentication", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing solutions that blend innovation with practical functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card p-8 rounded-2xl border border-tech-border hover:border-primary/50 transition-all duration-300 hover:glow-soft group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Team of {project.teamSize}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {project.longDescription.slice(0, 3).map((desc, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 p-2 bg-tech-bg rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover:glow-soft transition-all duration-300"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hover:glow-soft transition-all duration-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:glow-effect transition-all duration-300">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;