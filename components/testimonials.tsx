"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            {t.testimonials.subtitle}
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="rounded-sm border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {`\u201C${item.text}\u201D`}
              </p>
              <p className="text-sm font-medium text-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
