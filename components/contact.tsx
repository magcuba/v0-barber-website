"use client"

import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const f = t.contact.form

  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            {t.contact.subtitle}
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  {t.contact.location}
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
                  {t.contact.phone}
                </h3>
                <p className="text-sm text-muted-foreground">(347) 555-0192</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  {t.contact.hours}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {t.contact.hoursDetail.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  {t.contact.social}
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
                  {f.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
                >
                  {f.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                {f.email}
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                {f.service}
              </label>
              <select
                id="service"
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="">{f.selectService}</option>
                <option value="classic">{f.classicHaircut}</option>
                <option value="fade">{f.fadeTaper}</option>
                <option value="shave">{f.hotTowelShave}</option>
                <option value="beard">{f.beardSculpting}</option>
                <option value="combo">{f.haircutBeardCombo}</option>
                <option value="executive">{f.theExecutive}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                {f.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder={f.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-primary py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              {f.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
