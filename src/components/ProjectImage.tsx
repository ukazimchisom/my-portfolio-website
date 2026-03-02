export default function ProjectImage({
  image,
  color,
  title,
}: {
  image: string | null;
  color: string;
  title: string;
}) {
  return (
    <div
      className="relative overflow-hidden mb-6"
      style={{
        height: "180px",
        backgroundColor: "#0a0a0a",
        border: `1px solid ${color}18`,
      }}
    >
      {image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          {/* Grid background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${color}18 1px, transparent 1px),
                linear-gradient(90deg, ${color}18 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            {/* Upload icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.45 }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: color, opacity: 0.4 }}
            >
              Preview Image
            </span>
          </div>

          {/* Corner brackets */}
          <div
            className="absolute top-3 left-3 w-5 h-5 border-t border-l"
            style={{ borderColor: `${color}60` }}
          />
          <div
            className="absolute top-3 right-3 w-5 h-5 border-t border-r"
            style={{ borderColor: `${color}60` }}
          />
          <div
            className="absolute bottom-3 left-3 w-5 h-5 border-b border-l"
            style={{ borderColor: `${color}60` }}
          />
          <div
            className="absolute bottom-3 right-3 w-5 h-5 border-b border-r"
            style={{ borderColor: `${color}60` }}
          />
        </>
      )}

      {/* Hover overlay shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${color}08 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
