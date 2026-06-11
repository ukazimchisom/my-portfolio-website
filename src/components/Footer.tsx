export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-gray-400 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-body text-sm ">
              <a href="/">Ukazim Chisom</a>
            </span>
          </div>

          <p className="font-mono text-xs text-center">
            © {year} Ukazim Chisom. Designed & built with React + TypeScript +
            Tailwind.
          </p>

          <div className="flex gap-4">
            {[
              { label: "GitHub", href: "https://github.com/ukazimchisom" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/chisom-ukazim/",
              },
              { label: "Twitter", href: "https://x.com/UkazimChisom" },
              { label: "WhatsApp", href: "https://wa.me/2348134383888" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-gray-400 hover:text-[#e8ff47] transition-colors duration-200 hover:underline"
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
