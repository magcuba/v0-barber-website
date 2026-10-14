"use client"

import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/language-context"

const themeOptions = [
  { value: "system", Icon: Monitor },
  { value: "light", Icon: Sun },
  { value: "dark", Icon: Moon },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { locale } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const labels = locale === "es"
    ? { group: "Preferencia de apariencia", system: "Automático según tu dispositivo", light: "Activar modo claro", dark: "Activar modo oscuro" }
    : { group: "Appearance preference", system: "Automatic, follows your device", light: "Use light mode", dark: "Use dark mode" }

  return (
    <div
      role="group"
      aria-label={labels.group}
      className="inline-flex items-center rounded-sm border border-border p-0.5"
    >
      {themeOptions.map(({ value, Icon }) => {
        const label = labels[value]
        const selected = mounted && theme === value

        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={selected}
            title={label}
            onClick={() => setTheme(value)}
            className={`flex h-[26px] w-[26px] items-center justify-center rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selected ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
          >
            <Icon aria-hidden="true" className="h-3.5 w-3.5" />
          </button>
        )
      })}
    </div>
  )
}
