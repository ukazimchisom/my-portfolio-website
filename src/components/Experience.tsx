const experiences = [
  {
    role: "Frontend Developer — Bizzmarrow Technologies",
    period: "May 2025 — jan 2026",
    type: "Contract · Hybrid",
    highlights: [
      "Architected and shipped a production-ready job platform application using Next.js, TypeScript, and Tailwind CSS.",
      "Built 10+ reusable, accessible React components, improving consistency and reducing feature development time by 30%.",
      "Collaborated with founders and backend engineers to deliver features, resolve bugs, and improve application performance.",
    ],
  },
  {
    role: "Frontend Developer — Malic Movies Company",
    period: "Jun 2024 — Oct 2024",
    type: "Remote",
    highlights: [
      "Led frontend development of a responsive, SEO-optimized corporate blog and content platform using React, Next.js, and TypeScript.",
      "Reduced page load times by 50% through image optimization, code splitting, and caching improvements.",
      "Integrated Supabase to streamline article publishing and simplify content management for administrators.",
      "Collaborated with business stakeholders to translate requirements into production-ready features.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="lg:reveal max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-display mb-12 text-[#e8ff47] text-center">
        <span className="text-white">Professional</span> Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <article
            key={exp.role}
            className="bg-slate-900 dark:bg-lightCard p-5 sm:p-7 rounded-2xl shadow-lg shadow-[#1e1e1e]/50 border border-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-100 dark:text-lightTextDark">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{exp.type}</p>
              </div>

              <span className="text-sm font-medium text-[#e8ff47] whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3 text-gray-300 dark:text-lightTextDark">
              {exp.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#e8ff47] mt-0.5 shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#e8ff47] hover:underline"
              >
                {exp.linkText} <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
