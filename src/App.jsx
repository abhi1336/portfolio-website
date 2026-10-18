import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <GitHubStats />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
