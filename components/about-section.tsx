"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Code, Zap, Users, Lightbulb, Layers, Bug, Workflow, GraduationCap, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration and communication skills",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions for complex challenges",
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Strong architecture and system design skills",
  },
  {
    icon: Bug,
    title: "Debugging Expert",
    description: "Excellent debugging and problem-solving abilities",
  },
  {
    icon: Workflow,
    title: "Full Lifecycle",
    description: "Ability to handle entire project lifecycle",
  },
  {
    icon: GraduationCap,
    title: "Fast Learner",
    description: "Quick learner with strong collaboration skills",
  },
  {
    icon: Rocket,
    title: "Impact Driven",
    description: "Passion for building impactful, real-world solutions",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl transform -rotate-3" />
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src="/harry.png"
                  alt="Chidubem Michael Hillary"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg font-semibold">
                5+ Years Experience
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">ABOUT ME</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Full-Stack Software Engineer</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m Chidubem Michael Hillary — a Full-Stack Software Engineer with 4+ years of experience building
                scalable, user-centered applications for web and mobile.
              </p>
              <p>
                I specialize in ASP.NET Core, C#, Blazor, React, Next.js, React Native, Supabase, and cloud-native
                solutions, with a strong background in API design, clean architecture, and database engineering.
              </p>
              <p>
                My work spans from enterprise-level software to modern startup-ready applications, delivering fast,
                reliable solutions that solve real business problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                  )}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
