"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src="/images/barber-portrait.jpg"
            alt="Marcus Cole, master barber"
            fill
            className="object-cover"
          />
          {/* Accent border */}
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border-2 border-primary/30 -z-10" />
        </div>

        {/* Text */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            {t.about.subtitle}
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-primary">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
