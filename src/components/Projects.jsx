import Section from "./Section";
import Tags from "./Tags";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.map((p) => (
        <article className="item project" key={p.name}>
          <div>
            <h3>
              <a href={p.href} target="_blank" rel="noreferrer">{p.name}</a>
            </h3>
            <p>{p.text}</p>
            <Tags items={p.tags} />
          </div>
        </article>
      ))}
    </Section>
  );
}
