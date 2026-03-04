"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t, locale } = useLanguage()
  const f = t.contact.form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  })

  const WHATSAPP_NUMBER = "17862100661"

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const selectedService =
      e.currentTarget.querySelector<HTMLSelectElement>("#service")?.selectedOptions?.[0]
        ?.text || formData.service

    const text =
      locale === "es"
        ? [
            "Hola Raul, me gustaria reservar una cita.",
            `Nombre: ${formData.firstName} ${formData.lastName}`.trim(),
            `Telefono: ${formData.phone || "No proporcionado"}`,
            `Servicio: ${selectedService || "No seleccionado"}`,
            `Detalles: ${formData.message || "Sin detalles adicionales"}`,
          ].join("\n")
        : [
            "Hello Raul, I'd like to book an appointment.",
            `Name: ${formData.firstName} ${formData.lastName}`.trim(),
            `Phone: ${formData.phone || "Not provided"}`,
            `Service: ${selectedService || "Not selected"}`,
            `Details: ${formData.message || "No additional details"}`,
          ].join("\n")

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

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
                  1959 W 60th St
                  <br />
                  Hialeah, FL 33012, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground">
                  {t.contact.phone}
                </h3>
                <p className="text-sm text-muted-foreground">+1 (786) 210-0661</p>
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
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/_thegonzalez_barber/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  _thegonzalez_barber
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="John"
                  required
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
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground"
              >
                {f.phoneNumber}
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder="111-222-3344"
                required
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
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                required
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
                value={formData.message}
                onChange={handleChange}
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
