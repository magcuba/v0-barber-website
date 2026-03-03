"use client"

import { Scissors, SprayCan, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { ReactNode } from "react"

const icons: ReactNode[] = [
  <Scissors key="s1" className="h-6 w-6" />,
  <Scissors key="s2" className="h-6 w-6" />,
  <SprayCan key="sp" className="h-6 w-6" />,
  <Sparkles key="sk1" className="h-6 w-6" />,
  <Scissors key="s3" className="h-6 w-6" />,
  <Sparkles key="sk2" className="h-6 w-6" />,
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            {t.services.subtitle}
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-sm border border-border bg-background p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-primary">{icons[index]}</span>
                <span className="font-serif text-2xl text-primary">
                  {service.price}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {service.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
