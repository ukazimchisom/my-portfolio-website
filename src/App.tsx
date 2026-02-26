import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-ink">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
