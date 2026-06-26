import { FaGithub } from "react-icons/fa";
import { lazy, Suspense } from "react";
const ProjectImage = lazy(() => import("./ProjectImage"));

const projects = [
  {
    id: 1,
    title: "Tenhive",
    description:
      "Tenhive is a full-stack e-commerce web application featuring a customer-facing storefront and a full-featured admin panel. It supports product browsing, cart management, Paystack-powered checkout, order tracking, user authentication, and transactional emails — all built on Next.js 15 with Supabase as the backend.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    color: "#818cf8",
    link: "https://tenhive.vercel.app/",
    github: "https://github.com/ukazimchisom/tenhive",
    image: "/assets/tenhive-1.png",
  },
  {
    id: 2,
    title: "Job Tracker App",
    description:
      "The Job Tracker App is a web application that helps developers organize and monitor their job applications in one place. Users can add, edit, delete, and filter applications by status, while a dashboard provides a quick overview of job search progress.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "#e8ff47",
    link: "https://job-tracker-app-chisom.vercel.app/",
    github: "https://github.com/ukazimchisom/Job-Tracker-App",
    image: "/assets/job-tracker-app.png",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience. The site features a clean and modern design, responsive layout, a functional contact form powered by EmailJS, a downloadable CV for easy access by recruiters and collaborators, and smooth animations to provide an engaging user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    color: "#f97316",
    featured: false,
    link: "https://chisom-ukazim-portfolio-website.vercel.app/",
    github: "https://github.com/ukazimchisom/my-portfolio",
    image: "assets/portfolio.png",
  },
  {
    id: 3,
    title: "Healthcare-Appointment-Management-Sysytem",
    description:
      "DocSlot is a full-stack Healthcare appointment booking platform that allows patients to browse qualified doctors, book appointments, manage their schedules, and receive email confirmations — all in one place. It features a patient-facing interface and a full-featured admin panel for managing doctors, appointments, and users.",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Supabase (PostgreSQL + Auth + Storage)",
      "TanStack React Query",
      "React Hook Form + Zod",
      "EmailJS (client-side)",
      "react-day-picker",
      "Sonner",
      "Vitest + Testing Library",
    ],
    color: "#34d399",
    link: "https://docslot-healthcare.vercel.app/",
    github:
      "https://github.com/ukazimchisom/Healthcare-Appointment-Management-System",
    image: "/assets/DocSlot-screenshot.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="lg:reveal lg:reveal-right py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#e8ff47]" />
              <span className="font-mono text-[#e8ff47] text-sm uppercase tracking-[0.25em]">
                Work
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-black text-white">
              My<span className="text-[#e8ff47]"> Projects</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d0d0d] p-6 lg:p-8 group hover:bg-[#111] transition-all duration-300 relative overflow-hidden"
              style={{ transitionDelay: `${project.id * 120}ms` }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: project.color }}
              />

              {/* ── IMAGE SPACE ── */}
              <Suspense fallback={null}>
                <ProjectImage
                  image={project.image}
                  color={project.color}
                  title={project.title}
                />
              </Suspense>

              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center border text-xs font-mono"
                  style={{
                    borderColor: project.color + "40",
                    color: project.color,
                  }}
                >
                  {String(project.id).padStart(2, "0")}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: project.color }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </span>
                  </a>
                  <a
                    href={project.link}
                    className="text-gray-600 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
                  >
                    view ↗
                  </a>
                </div>
              </div>

              <div className="mb-3"></div>

              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#e8ff47] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-gray-500 bg-[#141414] px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
