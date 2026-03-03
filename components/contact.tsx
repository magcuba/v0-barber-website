"use client"

import { MapPin, Phone, Clock, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Book Your Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Ready for a premium grooming experience? Reach out to schedule your
            next visit.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  Location
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  247 West Elm Street
                  <br />
                  Brooklyn, NY 11201
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  Phone
                </h3>
                <p className="text-sm text-muted-foreground">(347) 555-0192</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  Hours
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Tuesday &ndash; Friday: 9:00 AM &ndash; 7:00 PM</p>
                  <p>Saturday: 8:00 AM &ndash; 5:00 PM</p>
                  <p>Sunday &amp; Monday: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  Social
                </h3>
                <p className="text-sm text-muted-foreground">@marcuscolebarber</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                Service
              </label>
              <select
                id="service"
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-card-foreground focus:border-primary focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="classic">Classic Haircut</option>
                <option value="fade">Fade &amp; Taper</option>
                <option value="shave">Hot Towel Shave</option>
                <option value="beard">Beard Sculpting</option>
                <option value="combo">Haircut &amp; Beard Combo</option>
                <option value="executive">The Executive</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder="Preferred date/time or any details..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-primary py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
