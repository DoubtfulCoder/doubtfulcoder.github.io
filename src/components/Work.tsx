import { Calendar, MapPin, Award } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import workData from "@/data/work.json";
import { getTechColor } from "@/lib/techColors";

const Work = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            {workData.workExperience.map((experience, index) => (
              <div
                key={experience.id}
                className="bg-card border border-border rounded-xl overflow-hidden card-glow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Company Header */}
                <div className="p-6 border-b border-border bg-secondary/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{experience.position}</h3>
                      <p className="text-xl text-primary font-medium">{experience.company}</p>
                      <p className="text-muted-foreground mt-2">{experience.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Key Projects
                  </h4>
                  <Accordion type="single" collapsible className="space-y-4">
                    {experience.projects.map((project, projectIndex) => (
                      <AccordionItem
                        key={projectIndex}
                        value={`project-${projectIndex}`}
                        className="border border-border rounded-lg"
                      >
                        <AccordionTrigger className="px-4 py-4 hover:no-underline">
                          <div className="flex items-start gap-4 text-left w-full">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 space-y-2">
                              <h5 className="font-semibold leading-tight text-base md:text-lg">{project.name}</h5>
                              <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <Badge
                                    key={tech}
                                    className={`${getTechColor(tech)} text-white border-0 text-[10px] md:text-xs py-0.5`}
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-5">
                          <div className="space-y-4">
                            <div className="mx-auto w-full max-w-md">
                              <div className="relative h-48 rounded-xl overflow-hidden ring-1 ring-border/40 shadow-md">
                                <img
                                  src={project.image}
                                  alt={`${project.name} project visual`}
                                  loading="lazy"
                                  className="absolute inset-0 w-50 h-full object-cover"
                                />
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {project.description}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
