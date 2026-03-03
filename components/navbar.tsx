"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/98 to-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] border-b border-white/60 after:absolute after:inset-x-0 after:top-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl tracking-wide text-primary">
          Marcus Cole
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block rounded-sm bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-foreground"
              >
                {t.nav.bookNow}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
