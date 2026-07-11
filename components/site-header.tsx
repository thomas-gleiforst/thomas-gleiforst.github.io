"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, FileDown, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { personal } from "@/lib/data"

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="font-semibold tracking-tight">
          Thomas Gleiforst
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <ThemeToggle />
          {personal.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </Link>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`mailto:${personal.email}`} aria-label="Email">
              <Mail />
            </Link>
          </Button>
          <Button size="sm" asChild className="ml-2">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">
              <FileDown />
              Resume
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-4 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-2">
            {personal.linkedin && (
              <Button variant="outline" size="icon" asChild>
                <Link href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </Link>
              </Button>
            )}
            <Button variant="outline" size="icon" asChild>
              <Link href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={`mailto:${personal.email}`} aria-label="Email">
                <Mail />
              </Link>
            </Button>
            <Button size="sm" asChild className="ml-auto">
              <Link href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileDown />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
