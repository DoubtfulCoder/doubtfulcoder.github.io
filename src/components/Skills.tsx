import { Code2, Database, Globe, Layers, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "Django", "GraphQL"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    icon: Globe,
    title: "DevOps",
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Git"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android"],
  },
  {
    icon: Layers,
    title: "Tools",
    skills: ["VS Code", "Figma", "Postman", "Notion", "Linear"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit for building modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-card border border-border rounded-xl p-4 hover-lift card-glow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
