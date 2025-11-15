import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/data/projects.json";
import { getTechColor } from "@/lib/techColors";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift card-glow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 8).map((tech) => (
                      <Badge
                        key={tech}
                        className={`${getTechColor(tech)} text-white border-0 text-xs`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 8 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 8}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn border-border hover:bg-secondary flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="group/btn bg-primary hover:bg-primary/90 flex-1"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
