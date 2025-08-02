import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "karankum790941@gmail.com",
      href: "mailto:karankum790941@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7081120551",
      href: "tel:+917081120551"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "B-Block 137, Dilshad Colony, East Delhi",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/karankumar790",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/karan-kumar-9ba34b27b/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss exciting opportunities
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on innovative projects and connect with fellow developers, 
                designers, and entrepreneurs. Whether you have a project in mind, want to discuss 
                opportunities, or just want to say hello, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-tech-border hover:border-primary/50 transition-all duration-300 hover:glow-soft group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-tech-bg border border-tech-border hover:border-primary hover:glow-soft transition-all duration-300 group"
                  >
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-card p-8 rounded-2xl border border-tech-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ready to Start a Project?</h3>
              <p className="text-muted-foreground">
                Let's discuss how we can work together to bring your ideas to life
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full glow-effect hover:glow transition-all duration-300"
                asChild
              >
                <a href="mailto:karankum790941@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send Me an Email
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full hover:glow-soft transition-all duration-300"
                asChild
              >
                <a href="tel:+917081120551">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </a>
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-tech-bg rounded-xl border border-tech-border">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium mb-1">Quick Response</p>
                  <p className="text-xs text-muted-foreground">
                    I typically respond within 24 hours and am available for immediate projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-tech-bg border border-tech-border rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Currently available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;