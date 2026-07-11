import Link from "next/link"
import { ExternalLink, FileDown, Github, Lock, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { education, experience, personal, projects, skills } from "@/lib/data"

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Hi, I&apos;m
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">{personal.name}</h1>
        <h2 className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
          {personal.title}
        </h2>

        <p className="mt-6 max-w-2xl text-balance leading-relaxed text-muted-foreground">
          {personal.summary}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {personal.location}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">
              <FileDown />
              Download Resume
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <div className="mt-10 space-y-10">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`} className="grid gap-2 sm:grid-cols-[1fr_2.5fr] sm:gap-8">
                <div>
                  <p className="font-semibold">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.dates}</p>
                </div>
                <div>
                  <p className="font-medium">{job.role}</p>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-2 border-t pt-10 sm:grid-cols-[1fr_2.5fr] sm:gap-8">
            <div>
              <p className="font-semibold">Education</p>
            </div>
            <div>
              <p className="font-medium">{education.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A selection of things I&apos;m currently building outside of work.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{project.name}</CardTitle>
                    {project.visibility === "Private" ? (
                      <Badge variant="outline" className="shrink-0 gap-1 text-muted-foreground">
                        <Lock className="h-3 w-3" />
                        Private
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="shrink-0">
                        Live
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{project.tagline}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" size="sm" asChild className="w-fit">
                      <Link href={project.link.href} target="_blank" rel="noreferrer">
                        {project.link.label}
                        <ExternalLink />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="font-semibold">{group.category}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Let&apos;s talk</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Open to hearing about interesting problems, teams, and opportunities. The fastest way to
            reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href={`mailto:${personal.email}`}>
                <Mail />
                {personal.email}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={personal.github} target="_blank" rel="noreferrer">
                <Github />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} {personal.name}</p>
          <p>{personal.location}</p>
        </div>
      </footer>
    </div>
  )
}
