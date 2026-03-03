import Image from "next/image"

export function About() {
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
            About
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Meet Marcus Cole
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With over 12 years behind the chair, I have dedicated my craft to
              the art of men&apos;s grooming. What started as an apprenticeship
              in a neighborhood shop evolved into a passion for precision and
              personal style.
            </p>
            <p>
              I believe every haircut is a collaboration. I take the time to
              understand your lifestyle, face shape, and preferences before a
              single blade touches your hair. My clients don&apos;t just leave
              looking sharp &mdash; they leave feeling confident.
            </p>
            <p>
              Whether it&apos;s a classic taper, a modern fade, or a luxurious
              hot towel shave, I bring the same level of care and craftsmanship
              to every appointment.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "5K+", label: "Happy Clients" },
              { value: "100%", label: "Dedication" },
            ].map((stat) => (
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
