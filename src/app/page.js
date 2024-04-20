import HomePage from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

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
