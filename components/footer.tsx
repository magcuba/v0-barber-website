export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <a href="#" className="font-serif text-lg tracking-wide text-primary">
          Marcus Cole
        </a>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Marcus Cole. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Instagram", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
