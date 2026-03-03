"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-barber.jpg"
        alt="Premium barbershop interior with warm lighting"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          {t.hero.subtitle}
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-sm bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.hero.viewServices}
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-border px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.hero.bookAppointment}
          </a>
        </div>
      </div>
    </section>
  )
}
