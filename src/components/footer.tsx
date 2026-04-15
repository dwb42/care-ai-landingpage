export function Footer() {
  return (
    <footer className="bg-background px-6 py-10 sm:px-8">
      <nav className="flex items-center justify-center gap-6 text-sm text-muted">
        <a
          href="/impressum"
          className="transition-colors hover:text-foreground"
        >
          Impressum
        </a>
        <a
          href="/datenschutz"
          className="transition-colors hover:text-foreground"
        >
          Datenschutz
        </a>
      </nav>
    </footer>
  );
}
