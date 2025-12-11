"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Globe, Smartphone, Server, Database, Cloud, Palette } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, high-performance web applications using React, Next.js, and modern frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs and server-side solutions with ASP.NET Core, C#, and Node.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps using React Native and .NET MAUI for iOS and Android.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "Designing efficient database schemas with SQL Server, PostgreSQL, and MongoDB.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploying and managing applications on Supabase, Firebase, AWS, and Vercel.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect, accessible, and responsive interfaces.",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium mb-2">WHAT I DO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I build high-performance, production-ready applications, from backend systems to beautiful front-end
            interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
