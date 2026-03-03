"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1a1a1a] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <a href="#" className="font-serif text-lg tracking-wide text-primary">
          Marcus Cole
        </a>
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} Marcus Cole. {t.footer.rights}
        </p>
        <div className="flex gap-6">
          {["Instagram", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs uppercase tracking-wider text-white/50 transition-colors hover:text-primary"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
