import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
