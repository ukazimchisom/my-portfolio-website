export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-body text-sm text-muted/70">
              Ukazim Chisom
            </span>
          </div>

          <p className="font-mono text-xs text-muted/50 text-center">
            © {year} Ukazim Chisom. Designed & built with React + TypeScript +
            Tailwind.
          </p>

          <div className="flex gap-4">
            {[
              { label: "GitHub", href: "https://github.com/ukazimchisom" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Twitter", href: "https://x.com/UkazimChisom" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted/50 hover:text-paper transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
