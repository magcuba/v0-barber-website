import { Star } from "lucide-react"

const testimonials = [
  {
    name: "James T.",
    text: "Marcus is the only barber I trust. Every cut is consistent, clean, and exactly what I ask for. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "The Executive package is worth every penny. Hot towel shave, beard treatment, scalp massage \u2014 I walk out feeling like a new man every time.",
    rating: 5,
  },
  {
    name: "Michael S.",
    text: "I've been going to Marcus for three years now. He takes the time to understand what you want and delivers every single time. Highly recommend.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            What Clients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-sm border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-medium text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
