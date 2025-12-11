"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, Linkedin, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "micachidubem007@gmail.com",
    href: "mailto:micachidubem007@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 805 693 2674",
    href: "tel:+2348056932674",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Chidubem Michael",
    href: "www.linkedin.com/in/shann-bernard-2a5b88295",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "harry's portfolio.com",
    href: "https://my-portfolio-alpha-olive-15.vercel.app/",
  },
]

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", accessKey ?? "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setShowSuccess(true);
        event.target.reset();
      } else {
        // Show error message if needed
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  const [showSuccess, setShowSuccess] = useState(false);


  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "bg-card p-8 rounded-2xl border border-border transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name"  className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Project inquiry" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center shadow">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
