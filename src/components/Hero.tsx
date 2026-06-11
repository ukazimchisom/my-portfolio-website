const Hero = () => {
  return (
    <section
      id="hero"
      className="reveal min-h-[650px] sm:min-h-screen bg-[#090909] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 sm:pt-24 sm:pb-12 pb-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 ">
            <div className="w-8 h-px bg-[#e8ff47]" />
            <span className="font-mono text-[#e8ff47] text-sm uppercase tracking-[0.25em]">
              Frontend Developer
            </span>
          </div>

          {/* Main heading */}

          <h1 className="font-display text-4xl sm:text-7xl  font-black leading-normal sm:leading-[0.95] lg:leading-[0.9] text-white mb-8">
            <span className="block">Buiding</span>
            <span className="block text-stroke text-3xl lg:text-7xl">
              High-Impact
            </span>
            <span className="block text-[#e8ff47]">Experiences</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed font-light">
            I develop seamless, performant web interfaces that people{" "}
            <span className="text-white font-normal">actually enjoy using</span>
            . React, TypeScript, and relentless focus on detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="#projects" className="btn-secondary">
              View Work
            </a>
            <a href="#contact" className="btn-classic">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
