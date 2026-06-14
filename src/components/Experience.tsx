const experiences = [
  {
    role: "Frontend Developer — Personal Projects",
    period: "2023 — Present",
    highlights: [
      "Built and deployed multiple frontend and full-stack applications, including an e-commerce website",
      "Created responsive and accessible user interfaces using React, Next.js, TypeScript, and Tailwind CSS",
      "Integrated Supabase for user authentication, database operations, and real-time data updates",
      "Connected applications to external APIs and implemented efficient state management solutions",
      "Optimized application performance through code splitting, lazy loading, and reusable component architecture",
      "Managed source code with Git and GitHub while maintaining clear documentation and development workflows",
    ],
  },
];
export default function Experience() {
  return (
    <section className="lg:reveal max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-display mb-12 text-[#e8ff47] text-center">
        <span className="text-white">Relevant</span> Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-slate-900 dark:bg-lightCard p-4 sm:p-6 rounded-2xl shadow-lg shadow-[#1e1e1e]/50"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-200">{exp.role}</h3>
              <span className="text-sm font-medium text-gray-400">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2 text-gray-300 dark:text-lightTextDark">
              {exp.highlights.map((item, id) => (
                <li key={id} className="reveal flex gap-1.5 sm:gap-2 ">
                  <span className="text-[#e8ff47]">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
