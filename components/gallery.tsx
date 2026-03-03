import Image from "next/image"

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
  return (
    <section id="gallery" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Gallery
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            The Craft in Action
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            A glimpse into the precision, artistry, and atmosphere that defines
            every visit.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 || index === 3
                  ? "aspect-[4/3]"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-all duration-300 group-hover:bg-background/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
