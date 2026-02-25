interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Core",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 93 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.Js", level: 94 },
      { name: "Next.Js", level: 85 },
      { name: "TailwindCSS", level: 96 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    category: "Tooling & Workflow",
    skills: [
      { name: "Vite / Webpack", level: 88 },
      { name: "Git & GitHub", level: 91 },
      { name: "REST APIs", level: 87 },
      { name: "Supabase", level: 82 },
    ],
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Redux",
  "React Query",
  "Zustand",
  "Vite",
  "Supabase",
  "Node.js",
  "Figma",
  "Git",
  "Vercel",
];

function SkillBar({ name, level }: SkillCategory["skills"][number]) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="font-mono text-xs text-[#e8ff47]">{level}%</span>
      </div>
      <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#e8ff47] to-[#b8d400] rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#090909] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#e8ff47]" />
            <span className="font-mono text-[#e8ff47] text-sm uppercase tracking-[0.25em]">
              What I Know
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-black text-white">
            Skills &<span className="text-[#e8ff47]"> Stack</span>
          </h2>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="bg-[#0d0d0d] border border-[#1a1a1a] p-6"
            >
              <h3 className="font-mono text-xs text-[#e8ff47] uppercase tracking-widest mb-6 pb-4 border-b border-[#1a1a1a]">
                {group.category}
              </h3>
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#141414] border border-[#1e1e1e] text-gray-400 text-sm font-mono hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
