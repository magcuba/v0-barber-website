import { Scissors, SprayCan, Sparkles } from "lucide-react"
import type { ReactNode } from "react"

interface Service {
  icon: ReactNode
  title: string
  description: string
  price: string
  duration: string
}

const services: Service[] = [
  {
    icon: <Scissors className="h-6 w-6" />,
    title: "Classic Haircut",
    description:
      "A precision haircut tailored to your face shape and personal style. Includes consultation, wash, cut, and styling.",
    price: "$45",
    duration: "45 min",
  },
  {
    icon: <Scissors className="h-6 w-6" />,
    title: "Fade & Taper",
    description:
      "Expert skin fades, low fades, and tapers executed with surgical precision. Clean lines guaranteed.",
    price: "$50",
    duration: "50 min",
  },
  {
    icon: <SprayCan className="h-6 w-6" />,
    title: "Hot Towel Shave",
    description:
      "A luxurious straight razor shave with hot towels, premium lather, and aftershave balm for the smoothest finish.",
    price: "$40",
    duration: "40 min",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Beard Sculpting",
    description:
      "Detailed beard shaping and trimming with precision clippers and scissors. Includes beard oil treatment.",
    price: "$35",
    duration: "30 min",
  },
  {
    icon: <Scissors className="h-6 w-6" />,
    title: "Haircut & Beard Combo",
    description:
      "The complete package. Full precision haircut combined with a detailed beard sculpt and hot towel finish.",
    price: "$75",
    duration: "75 min",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "The Executive",
    description:
      "Our premium experience: haircut, hot towel shave, beard treatment, scalp massage, and product styling.",
    price: "$110",
    duration: "90 min",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Services
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Crafted for the Modern Gentleman
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Every service is performed with meticulous attention to detail
            and the finest grooming products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-primary">{service.icon}</span>
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
