export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <a href="#about" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              About
            </a>
          </div>
          <div className="pb-6">
            <a href="#work" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Work
            </a>
          </div>
          <div className="pb-6">
            <a href="#services" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Services
            </a>
          </div>
          <div className="pb-6">
            <a href="#contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} wezero
        </p>
      </div>
    </footer>
  )
}

