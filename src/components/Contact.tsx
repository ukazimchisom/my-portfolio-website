import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      toast.success("Thanks for reaching out! I’ll get back to you soon.");
      setTimeout(() => setSent(false), 4000);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <section id="contact" className="reveal bg-[#0d0d0d] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#e8ff47]" />
                <span className="font-mono text-[#e8ff47] text-sm uppercase tracking-[0.25em]">
                  Contact
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Let's build something
                <span className="text-[#e8ff47]"> great.</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                Do you have a project in mind, want to discuss a role, or just
                want to say hello — my inbox is always open.
              </p>

              <div className="space-y-6">
                {[
                  {
                    label: "Email",
                    value: "ukazimchisom@gmail.com",
                    href: "mailto:ukazimchisom@gmail.com",
                  },
                  { label: "LinkedIn", value: "/in/alexjohnson", href: "#" },
                  {
                    label: "GitHub",
                    value: "ukazimchisom",
                    href: "https://github.com/ukazimchisom",
                  },
                  {
                    label: "Location",
                    value: "Abuja, Nigeria · Open to Remote",
                    href: "https://www.google.com/maps/place/Abuja,+Nigeria/@9.0578508,6.4954217,11z/data=!3m1!4b1!4m5!3m4!1s0x105d1aaf21c9e419:0x2c8fbbd9e7a1b0c!8m2!3d9.0578508!4d7.4954217",
                  },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-20 flex-shrink-0">
                      <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">
                        {label}
                      </span>
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-300 text-sm hover:text-[#e8ff47] transition-colors border-b border-transparent hover:border-[#e8ff47]/30 pb-px"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability indicator */}
              <div className="mt-10 flex items-center gap-3 px-4 py-3 border border-[#1e1e1e] bg-[#0a0a0a] w-fit">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                  Available for new projects.
                </span>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-xs text-gray-600 uppercase tracking-widest block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mike Doe"
                    className="input-class"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-gray-600 uppercase tracking-widest block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="mike@company.com"
                    className="input-class"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-gray-600 uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="input-class resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#e8ff47] text-black font-mono font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 hover:scale-[1.01] relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Sending..."
                    : sent
                      ? "✓ Message Sent!"
                      : "Send Message →"}
                </button>
              </form>

              <p className="text-center text-gray-700 text-xs font-mono mt-4">
                No spam, Just a direct message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
