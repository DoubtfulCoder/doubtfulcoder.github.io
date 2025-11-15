import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative py-20 px-6 border-b border-border pt-32">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold">
              Naveed Kabir
            </h1>
            <p className="text-xl text-primary font-medium">
              Software Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Full-stack developer with experience in web development, mobile development, machine learning, and data science.

          </p>

          <div className="flex gap-4 items-center pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
