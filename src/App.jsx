import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import useTheme from "./hooks/useTheme";
import useActiveSection from "./hooks/useActiveSection";
import { nav } from "./data";

const ids = nav.map((n) => n.id);

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(ids);

  return (
    <div className="layout">
      <Sidebar active={active} theme={theme} onToggle={toggleTheme} />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
