const About = () => {
  return (
    <section id="about" className="reveal py-24 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-[#e8ff47] mb-4">
              <div className="w-8 h-px bg-[#e8ff47]" />
              About Me
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-paper mb-8 leading-tight">
              Every detail,
              <br />
              <span className="text-[#e8ff47]">deliberately built.</span>
            </h2>

            <div className="space-y-5 font-body text-paper/70 leading-relaxed">
              <p>
                Hi, I'm <span className="text-slate-100">Ukazim Chisom</span> —
                a Frontend Developer focused on building fast, accessible, and
                visually refined web experiences. I turn ideas and designs into
                clean, high-performance interfaces that users genuinely enjoy.
              </p>
              <p>
                My work is grounded in performance, scalability, and
                maintainable architecture. I care deeply about writing code that
                is not only efficient but also easy to understand, extend, and
                sustain over time.
              </p>
              <p>
                Outside of coding, I stay immersed in UI design trends, learn
                from the community, explore new technologies, and continuously
                explore ways to make the web feel more human.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/chisom-ukazim-cv.pdf"
                className="btn-secondary px-4 inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2V11M8 11L5 8M8 11L11 8M2 13H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#contact" className="btn-classic">
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right: Quick Facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Nigeria, Africa" },
              { label: "Focus", value: "Frontend Development" },
              { label: "Languages", value: "JS, TS, HTML, CSS" },
              { label: "Frameworks", value: "React, Next.js" },
              { label: "Tools", value: "Vite, Webpack, Figma" },
              { label: "Currently", value: "Open to Work" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-white/5 border border-white/10 p-5"
              >
                <p className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-2">
                  {fact.label}
                </p>
                <p className="font-display font-semibold text-paper">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
