import { FaGithub } from "react-icons/fa";
import ProjectImage from "./ProjectImage";

const projects = [
  {
    id: 1,
    title: "Job Tracker App",
    description:
      "The Job Tracker App is a web application that helps developers organize and monitor their job applications in one place. Users can add, edit, delete, and filter applications by status, while a dashboard provides a quick overview of job search progress.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "#e8ff47",
    link: "https://job-tracker-app-chisom.vercel.app/",
    github: "https://github.com/ukazimchisom/Job-Tracker-App",
    image: "/public/job-tracker-app.png",
  },
  {
    id: 2,
    title: "Todo App with Authentication & Drag-and-Drop",
    description:
      "A modern, responsive Todo application built with React, TypeScript, and Supabase, featuring secure authentication, user-specific data storage, drag-and-drop reordering (desktop & mobile), dark mode, and toast notifications.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    color: "#818cf8",
    link: "https://chisom-todo-app-project.netlify.app/",
    github: "https://github.com/ukazimchisom/todo-app",
    image: "/public/todo-app.png",
  },
  {
    id: 3,
    title: "IP Address Tracker",
    description:
      "A React-based web application that allows users to look up geographical and network information associated with an IP address. Users can enter an IP address into a search field or leave it blank to automatically detect their current IP.",
    tech: ["React", "Tailwind CSS", "Leaflet", "IP Geolocation API"],
    color: "#34d399",
    featured: false,
    link: "https://ip-tracker-omega-six.vercel.app/",
    github: "https://github.com/ukazimchisom/ip-tracker",
    image: "/public/ip-tracker.jpg",
  },
  {
    id: 4,
    title: "Product list with cart and checkout",
    category: "Side Project",
    description:
      "A beginner-friendly React and Tailwind CSS app showcasing a product list and shopping cart. It demonstrates core e-commerce patterns including add-to-cart with quantity handling, item updates/removal, and automatic subtotal calculation using clean, component-based code.",
    tech: ["React", "Tailwind CSS"],
    color: "#f97316",
    featured: false,
    link: "https://product-list-with-cart-three-navy.vercel.app/",
    github: "https://github.com/ukazimchisom/product-list-with-cart",
    image: "/public/product-list-with-cart.jpg",
  },
];


export default function Projects() {
  return (
    <section id="projects" className=" py-24 lg:py-32">
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
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: project.color }}
              />

              {/* ── IMAGE SPACE ── */}
              <ProjectImage
                image={project.image}
                color={project.color}
                id={project.id}
                title={project.title}
              />

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

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-gray-600 bg-[#141414] px-2 py-1"
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
