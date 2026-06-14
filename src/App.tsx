import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useScrollReveal } from "./hooks/UseScrollReveal";

export default function App() {
  useScrollReveal();
  return (
    <div
      className="min-h-screen overflow-hidden
    text-paper p"
    >
      <Navbar />
      <main className="bg-ink py-10 sm:py-4 lg:py-3">
        <Hero />
        <div className="">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
