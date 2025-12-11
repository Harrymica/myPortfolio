"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "C#", level: 95 },
      { name: "ASP.NET Core", level: 90 },
      { name: "Entity Framework", level: 85 },
      { name: "SQL Server", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Mobile & Cloud",
    skills: [
      { name: "React Native", level: 80 },
      { name: ".NET MAUI", level: 75 },
      { name: "Supabase", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
    ],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium mb-2">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={cn(
                "bg-card p-6 rounded-2xl border border-border transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out",
                          isInView ? "w-full" : "w-0",
                        )}
                        style={{
                          maxWidth: `${skill.level}%`,
                          transitionDelay: `${catIndex * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
