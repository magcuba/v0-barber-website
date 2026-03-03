"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Precision fade haircut in progress",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Detailed beard trimming",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Premium barber tools on wooden surface",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Finished classic haircut side profile",
  },
]

export function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            {t.gallery.subtitle}
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
