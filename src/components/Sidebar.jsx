import { nav, profile } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar({ active, theme, onToggle }) {
  return (
    <header className="sidebar">
      <div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>

        <nav aria-label="Sections" className="nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} aria-current={active === n.id ? "true" : undefined}>
              <span className="bar" aria-hidden="true" />
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="side-foot">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </header>
  );
}
