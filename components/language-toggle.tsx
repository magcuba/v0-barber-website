"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      className="flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      aria-label={locale === "en" ? "Cambiar a espanol" : "Switch to English"}
    >
      <span className={locale === "en" ? "text-primary" : ""}>EN</span>
      <span className="text-border">/</span>
      <span className={locale === "es" ? "text-primary" : ""}>ES</span>
    </button>
  )
}
