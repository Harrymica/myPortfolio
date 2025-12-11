"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Fullstack Engineer",
    company: "UNN ICT Center",
    location: "Nigeria",
    period: "2024 – Present",
    description:
      "Built and deployed fullstack software solutions using C#, Blazor, ASP.NET Core, PostgreSQL, and Supabase. Worked closely with clients to gather requirements, deliver features, and deploy cloud-backed applications with clean architecture and strong security.",
    technologies: ["C#", "Blazor", "ASP.NET Core", "PostgreSQL", "Supabase"],
  },
  {
    title: "Frontend Engineer",
    company: "PixelFreelance",
    location: "Remote",
    period: "2023",
    description:
      "Developed responsive and pixel-perfect web interfaces using React.js, Next.js, Redux, and modern UI frameworks. Improved SEO, optimized load performance, and integrated APIs while collaborating with remote international teams.",
    technologies: ["React.js", "Next.js", "Redux", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Software Engineer",
    company: "Chidons ICT Center",
    location: "Nigeria",
    period: "2020 – 2021",
    description:
      "Contributed to backend development using ASP.NET MVC. Optimized SQL Server queries, built REST APIs, performed debugging and unit testing, and improved system architecture for better scalability and performance.",
    technologies: ["ASP.NET MVC", "SQL Server", "REST APIs", "C#"],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium mb-2">MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and the impactful projects I&apos;ve contributed to.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8 md:gap-16 transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  index % 2 === 0 ? "md:text-right" : "",
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                {/* Content */}
                <div
                  className={cn(
                    "bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2",
                  )}
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-left">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Empty column for timeline alignment */}
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
