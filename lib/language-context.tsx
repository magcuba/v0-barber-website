"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("raulbarber-locale")
    const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language
    const detectedLocale: Locale = browserLanguage.toLowerCase().startsWith("es") ? "es" : "en"

    setLocale(savedLocale === "en" || savedLocale === "es" ? savedLocale : detectedLocale)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function changeLocale(nextLocale: Locale) {
    window.localStorage.setItem("raulbarber-locale", nextLocale)
    setLocale(nextLocale)
  }

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale: changeLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
