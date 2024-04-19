import HomePage from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import AboutPage from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <main className="flex overflow-hidden	 min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HomePage />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
